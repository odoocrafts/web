"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight aurora shader — raw WebGL, no Three.js.
 *
 * Why this doesn't stutter like the old full-page R3F canvas:
 *  - renders only while the hero is on screen (IntersectionObserver)
 *  - pauses when the tab is hidden
 *  - renders at a reduced internal resolution (≤ 0.75× DPR-1 on desktop, 0.5× on phones)
 *  - a single full-screen triangle + 3-octave fbm — trivially cheap
 *  - honours prefers-reduced-motion (draws a single static frame)
 */

const VERT = `
attribute vec2 a;
void main(){ gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = uv; p.x *= uRes.x / uRes.y;
  float t = uTime * 0.045;

  vec2 m = (uMouse - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  vec2 q = vec2(fbm(p * 1.1 + t), fbm(p * 1.1 + vec2(5.2, 1.3) - t));
  float r = fbm(p * 1.3 + 1.8 * q + m * 0.35 + vec2(1.7, 9.2) + t * 0.6);
  float r2 = fbm(p * 2.2 - q * 0.8 - t * 0.4);

  vec3 ink    = vec3(0.027, 0.023, 0.043);
  vec3 violet = vec3(0.404, 0.224, 0.651);
  vec3 lilac  = vec3(0.690, 0.600, 0.980);
  vec3 ember  = vec3(1.000, 0.541, 0.357);

  vec3 col = ink;
  col = mix(col, violet, smoothstep(0.32, 0.78, r) * 0.95);
  col = mix(col, lilac,  smoothstep(0.62, 0.92, r) * 0.55);
  col = mix(col, ember,  smoothstep(0.70, 0.96, r2) * 0.40);

  /* concentrate the glow in the lower-right horizon so headline stays legible */
  float wy = exp(-pow((uv.y - 0.28) / 0.34, 2.0));
  float wx = 0.55 + 0.45 * smoothstep(0.15, 0.95, uv.x);
  col = mix(ink, col, clamp(wy * wx, 0.0, 1.0));

  /* fine dithering to avoid banding on dark gradients */
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.012;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function HeroCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      preserveDrawingBuffer: false,
    });
    if (!gl || gl.isContextLost()) {
      canvas.style.display = "none";
      return;
    }
    canvas.style.display = "";

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!vs || !fs || !prog) {
      canvas.style.display = "none";
      return;
    }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aLoc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let raf = 0;
    let running = false;
    let inView = false;
    let last = performance.now();
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const small = window.innerWidth < 768;
      const scale = Math.min(window.devicePixelRatio || 1, 1) * (small ? 0.5 : 0.7);
      const w = Math.max(1, Math.floor(rect.width * scale));
      const h = Math.max(1, Math.floor(rect.height * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const draw = () => {
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const frame = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      time += dt / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      draw();
      if (running) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduce || document.hidden || !inView) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onPointer = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    ro.observe(canvas);

    resize();
    time = 6.5; // start mid-flow so the first frame already looks rich
    draw();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
      // Intentionally not forcing context loss: the canvas element is reused across
      // React dev-mode remounts and the same context is returned by getContext().
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`block h-full w-full ${className}`} />;
}
