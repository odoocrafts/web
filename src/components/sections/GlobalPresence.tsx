"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      globeRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2, 64, 64]}>
      <meshBasicMaterial 
        color="#1a365d" 
        wireframe 
        transparent 
        opacity={0.3} 
      />
    </Sphere>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    return random.inSphere(points, { radius: 2.5 }) as Float32Array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function GlobalPresence() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Globe />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <div className="glass max-w-md p-8 rounded-2xl ml-auto md:mr-24 pointer-events-auto">
          <h2 className="text-3xl font-bold mb-4">Global Reach. Local Precision.</h2>
          <p className="text-white/60 mb-6">
            Our systems run businesses across continents. Seamlessly integrated, securely deployed, universally accessible.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Multi-currency Automation</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Global Taxation Compliance</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Distributed Data Centers</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
