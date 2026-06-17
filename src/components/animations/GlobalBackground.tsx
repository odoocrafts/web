"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    float dist = distance(st, uMouse);
    float force = smoothstep(0.4, 0.0, dist);
    
    vec2 noiseParams = vec2(vUv.x * 3.0 + uTime * 0.2, vUv.y * 3.0 + uTime * 0.2);
    float noiseVal = snoise(noiseParams) * 0.15;
    
    vec2 displacement = vec2(noiseVal, noiseVal) * force;
    vec2 distortedUv = vUv + displacement;

    // Dark premium gradient with subtle blue/purple hints
    vec3 color1 = vec3(0.0, 0.05, 0.15); // Very dark blue
    vec3 color2 = vec3(0.05, 0.0, 0.1);  // Very dark purple
    vec3 color3 = vec3(0.0, 0.0, 0.0);   // Black

    float mixRatio = snoise(distortedUv * 2.0 + uTime * 0.1) * 0.5 + 0.5;
    vec3 finalColor = mix(color1, color2, mixRatio);
    finalColor = mix(finalColor, color3, 0.3); // Keep it dark

    // Add mouse light effect
    vec3 lightColor = vec3(0.1, 0.3, 0.8);
    finalColor += lightColor * force * 0.5;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function Scene() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      const mouseX = (mouseRef.current.x * 0.5 + 0.5) * (size.width / size.height);
      const mouseY = mouseRef.current.y * 0.5 + 0.5;
      
      materialRef.current.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouseX, mouseY),
        0.1
      );
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export default function GlobalBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return <div className="fixed inset-0 w-full h-full bg-black -z-50 pointer-events-none" />;

  if (isMobile) {
    return (
      <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none bg-gradient-to-br from-[#000411] via-[#050015] to-[#000000]" />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black -z-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
