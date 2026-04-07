import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ═══════════════════════════════════════════
   Main Distorted Hero Sphere
   ═══════════════════════════════════════════ */
const HeroSphere = () => {
  const groupRef = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
      meshRef.current.rotation.x += delta * 0.08;
    }

    if (groupRef.current) {
      const scrollY = window.scrollY;
      const targetX = state.pointer.x * 1.2;
      const targetY = (state.pointer.y * 1.2) + (scrollY * 0.003);
      const targetScale = Math.max(0.4, 1.3 - scrollY * 0.001);

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 2.5);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 2.5);
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * -0.3, delta * 2);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.3, delta * 2);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 20]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            envMapIntensity={1.2}
            clearcoat={1}
            clearcoatRoughness={0.08}
            metalness={0.5}
            roughness={0.15}
            distort={0.45}
            speed={2.5}
            transparent={true}
            opacity={0.75}
          />
        </mesh>
      </Float>
    </group>
  );
};

/* ═══════════════════════════════════════════
   Orbiting Rings
   ═══════════════════════════════════════════ */
const OrbitRing = ({ radius, speed, color, thickness, tiltX, tiltZ }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

/* ═══════════════════════════════════════════
   Floating Mini Shapes
   ═══════════════════════════════════════════ */
const FloatingShape = ({ position, geometry, color, scale, speed }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.5;
      ref.current.rotation.y += delta * speed * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {geometry === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
        {geometry === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.35}
          wireframe
          factor={0.3}
          speed={speed}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

/* ═══════════════════════════════════════════
   Particle Field
   ═══════════════════════════════════════════ */
const ParticleField = ({ count = 200 }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

/* ═══════════════════════════════════════════
   Main Scene Export
   ═══════════════════════════════════════════ */
export const Scene = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-transparent pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, 8, -10]} intensity={1.5} color="#c084fc" />
        <directionalLight position={[0, -10, 5]} intensity={1} color="#60a5fa" />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#f472b6" />

        {/* Main Hero Sphere */}
        <HeroSphere />

        {/* Orbiting Rings */}
        <OrbitRing radius={2.2} speed={0.3} color="#8b5cf6" thickness={0.008} tiltX={0.8} tiltZ={0.3} />
        <OrbitRing radius={2.8} speed={-0.2} color="#c084fc" thickness={0.006} tiltX={-0.5} tiltZ={-0.6} />
        <OrbitRing radius={3.3} speed={0.15} color="#f472b6" thickness={0.005} tiltX={1.2} tiltZ={0.8} />

        {/* Floating Mini Shapes */}
        <FloatingShape position={[-3.5, 2, -2]} geometry="octahedron" color="#a78bfa" scale={0.2} speed={1.5} />
        <FloatingShape position={[3.8, -1.5, -3]} geometry="tetrahedron" color="#f472b6" scale={0.18} speed={2} />
        <FloatingShape position={[-2.5, -2.5, -1]} geometry="dodecahedron" color="#60a5fa" scale={0.15} speed={1.2} />
        <FloatingShape position={[2.5, 2.8, -2.5]} geometry="box" color="#c084fc" scale={0.12} speed={1.8} />
        <FloatingShape position={[-4, 0, -4]} geometry="octahedron" color="#818cf8" scale={0.1} speed={1} />
        <FloatingShape position={[4.2, 1, -3.5]} geometry="tetrahedron" color="#e879f9" scale={0.14} speed={1.4} />

        {/* Particle Field */}
        <ParticleField count={250} />
      </Canvas>
    </div>
  );
};
