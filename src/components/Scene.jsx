import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    // Add continuous slow rotation
    if (meshRef.current) {
        meshRef.current.rotation.y += delta * 0.1;
        meshRef.current.rotation.x += delta * 0.1;
        
        // Link scale to window scroll (parallax effect mapping scroll to canvas)
        const scrollY = window.scrollY;
        // The further down we scroll, the slightly smaller it gets
        const scale = Math.max(0.5, 1.5 - scrollY * 0.001);
        meshRef.current.scale.set(scale, scale, scale);
        
        // Move shape up to make room as we scroll
        meshRef.current.position.y = scrollY * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 10]} /> {/* high detail for distortion */}
        <MeshDistortMaterial 
          color="#8b5cf6" 
          envMapIntensity={0.5} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.5} 
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

export const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 bg-background pointer-events-none transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
         <directionalLight position={[-10, 10, -10]} intensity={1} color="#a78bfa" />
         <directionalLight position={[0, -10, 0]} intensity={0.5} color="#ec4899" />
         <AnimatedShape />
         <Stars radius={50} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.5} />
      </Canvas>
    </div>
  );
};
