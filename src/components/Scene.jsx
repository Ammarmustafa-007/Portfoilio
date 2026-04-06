import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const groupRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    // Continuous subtle auto-rotation
    if (sphereRef.current) {
        sphereRef.current.rotation.y += delta * 0.15;
        sphereRef.current.rotation.x += delta * 0.1;
    }
    
    // Dynamic Cursor Tracking & Scroll integration
    if (groupRef.current) {
        const scrollY = window.scrollY;
        
        // Target positions based on pointer (-1 to +1) and scroll offset
        const targetX = state.pointer.x * 1.5;
        // Move element slightly dynamically against scrolling for strong parallax
        const targetY = (state.pointer.y * 1.5) + (scrollY * 0.003);
        const targetScale = Math.max(0.5, 1.5 - scrollY * 0.001);
        
        // Smooth interpolation (springiness)
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 3);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 3);
        
        groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 4);
        
        // Tilt effect based on cursor position
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * -0.5, delta * 3);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.5, delta * 3);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh ref={sphereRef}>
          <icosahedronGeometry args={[1, 16]} /> 
          <MeshDistortMaterial 
            color="#8b5cf6" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.4} 
            roughness={0.2}
            distort={0.4}
            speed={3}
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
};

export const Scene = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-transparent pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
         {/* Adaptive lighting for better visibility in light/dark mode */}
         <ambientLight intensity={0.8} />
         <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
         <directionalLight position={[-10, 10, -10]} intensity={2} color="#c084fc" />
         <directionalLight position={[0, -10, 0]} intensity={1.5} color="#60a5fa" />
         <AnimatedShape />
      </Canvas>
    </div>
  );
};
