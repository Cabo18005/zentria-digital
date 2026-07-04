import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useIsMobile } from '../../hooks/useIsMobile';

function Blob({ isMobile, reduceMotion }: { isMobile: boolean; reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  // Rotación base acumulada por separado del offset de paralaje del mouse,
  // para que el parallax no se sume infinitamente frame a frame.
  const base = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    if (!reduceMotion) {
      base.current.x += delta * 0.08;
      base.current.y += delta * 0.12;
    }
    mesh.rotation.x = base.current.x + state.pointer.y * 0.15;
    mesh.rotation.y = base.current.y + state.pointer.x * 0.15;
  });

  return (
    <Float
      speed={reduceMotion ? 0 : 1.4}
      rotationIntensity={reduceMotion ? 0 : 0.3}
      floatIntensity={reduceMotion ? 0 : 0.7}
    >
      <mesh ref={meshRef} scale={isMobile ? 1.5 : 2.1} position={[1.6, 0.2, -2]}>
        <icosahedronGeometry args={[1, isMobile ? 2 : 5]} />
        <MeshDistortMaterial
          color="#0052CC"
          emissive="#3b9eff"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.7}
          distort={0.45}
          speed={reduceMotion ? 0 : 1.6}
        />
      </mesh>
    </Float>
  );
}

// Isotipo "Z" construido con 3 barras redondeadas (sin depender de fuentes
// externas para Text3D), en el mismo tono del badge plano del navbar.
function Logo3D({ isMobile, reduceMotion }: { isMobile: boolean; reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const base = useRef(0);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (!reduceMotion) {
      base.current += delta * 0.15;
    }
    group.rotation.y = base.current + state.pointer.x * 0.5;
    group.rotation.x = -state.pointer.y * 0.25;
  });

  return (
    <group
      ref={groupRef}
      position={isMobile ? [0, 1.8, -2.5] : [-2.3, 1.4, -1.8]}
      scale={isMobile ? 0.6 : 0.85}
    >
      <RoundedBox args={[1.5, 0.3, 0.3]} radius={0.08} position={[0, 0.62, 0]}>
        <meshStandardMaterial color="#0052CC" emissive="#3b9eff" emissiveIntensity={0.4} roughness={0.25} metalness={0.75} />
      </RoundedBox>
      <RoundedBox args={[0.34, 1.55, 0.3]} radius={0.08} rotation={[0, 0, -0.8]}>
        <meshStandardMaterial color="#0052CC" emissive="#3b9eff" emissiveIntensity={0.4} roughness={0.25} metalness={0.75} />
      </RoundedBox>
      <RoundedBox args={[1.5, 0.3, 0.3]} radius={0.08} position={[0, -0.62, 0]}>
        <meshStandardMaterial color="#0052CC" emissive="#3b9eff" emissiveIntensity={0.4} roughness={0.25} metalness={0.75} />
      </RoundedBox>
    </group>
  );
}

export default function HeroBackground3D() {
  const isMobile = useIsMobile();
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, isMobile ? 1 : 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <fog attach="fog" args={['#0A192F', 5, 13]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 2, 4]} intensity={3} color="#3b9eff" />
      <pointLight position={[-4, -3, -3]} intensity={2} color="#a855f7" />

      <Blob isMobile={isMobile} reduceMotion={reduceMotion} />
      <Logo3D isMobile={isMobile} reduceMotion={reduceMotion} />

      <Sparkles
        count={isMobile ? 45 : 110}
        scale={[9, 5, 4]}
        size={2.2}
        speed={reduceMotion ? 0 : 0.25}
        color="#67e8f9"
        opacity={0.55}
      />
      <Sparkles
        count={isMobile ? 20 : 55}
        scale={[7, 4, 3]}
        size={3.2}
        speed={reduceMotion ? 0 : 0.15}
        color="#c084fc"
        opacity={0.35}
      />
    </Canvas>
  );
}
