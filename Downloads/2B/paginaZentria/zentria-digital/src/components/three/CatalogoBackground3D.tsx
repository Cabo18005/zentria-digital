import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useIsMobile } from '../../hooks/useIsMobile';

// Malla wireframe muy tenue, solo como textura de fondo — no debe competir
// visualmente con las tarjetas de producto que van encima.
function FaintMesh({ reduceMotion }: { reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current || reduceMotion) return;
    meshRef.current.rotation.y += delta * 0.03;
    meshRef.current.rotation.x += delta * 0.015;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -4]} scale={3.2}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#3b9eff" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export default function CatalogoBackground3D() {
  const isMobile = useIsMobile();
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, isMobile ? 1 : 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <fog attach="fog" args={['#060f1e', 4, 11]} />

      <FaintMesh reduceMotion={reduceMotion} />

      <Sparkles
        count={isMobile ? 25 : 60}
        scale={[10, 5, 3]}
        size={1.8}
        speed={reduceMotion ? 0 : 0.15}
        color="#3b9eff"
        opacity={0.25}
      />
      <Sparkles
        count={isMobile ? 12 : 30}
        scale={[8, 4, 2]}
        size={2.4}
        speed={reduceMotion ? 0 : 0.1}
        color="#7c3aed"
        opacity={0.18}
      />
    </Canvas>
  );
}
