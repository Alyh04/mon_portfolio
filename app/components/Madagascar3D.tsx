"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function MadagascarShape({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const scale = 1.8;
    const pts: [number, number][] = [
      [0, 5.5], [0.8, 5.2], [1.2, 4.5], [1.8, 4.0],
      [2.2, 3.2], [2.5, 2.5], [2.8, 1.8], [3.0, 1.0],
      [2.8, 0.2], [2.5, -0.5], [2.2, -1.2], [2.0, -2.0],
      [1.8, -2.8], [1.5, -3.5], [1.0, -4.0], [0.5, -4.5],
      [0, -5.0], [-0.5, -4.5], [-1.0, -4.0], [-1.5, -3.5],
      [-1.8, -2.8], [-2.0, -2.0], [-2.2, -1.2], [-2.5, -0.5],
      [-2.8, 0.2], [-3.0, 1.0], [-2.8, 1.8], [-2.5, 2.5],
      [-2.2, 3.2], [-1.8, 4.0], [-1.2, 4.5], [-0.8, 5.2],
    ];

    s.moveTo(pts[0][0] * scale, pts[0][1] * scale);
    for (let i = 1; i < pts.length; i++) {
      s.lineTo(pts[i][0] * scale, pts[i][1] * scale);
    }
    s.closePath();
    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.6,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.1,
    bevelSegments: 8,
  }), []);

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, [shape, extrudeSettings]);

  const color = isDark ? "#60a5fa" : "#3b82f6";

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry} castShadow>
        <meshPhysicalMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.85}
        />
        <meshPhysicalMaterial
          color={isDark ? "#1e40af" : "#1d4ed8"}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.2}
          wireframe
          side={THREE.DoubleSide}
        />
      </mesh>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <pointLight position={[0, 4, 2]} intensity={1.5} color={color} />
      </Float>
    </group>
  );
}

function CityDot({ position }: { position: [number, number, number]; label: string }) {
  const dotRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (dotRef.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.3;
      dotRef.current.scale.setScalar(s);
    }
  });

  return (
    <mesh ref={dotRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#fbbf24" />
    </mesh>
  );
}

function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-3, 4, -3]} intensity={0.5} color="#60a5fa" />

      <MadagascarShape isDark={isDark} />

      <CityDot position={[0.6, 0.8, 0.4]} label="Antananarivo" />
      <CityDot position={[1.2, 2.0, 0.3]} label="Toamasina" />
      <CityDot position={[-0.2, -1.5, 0.2]} label="Fianarantsoa" />
      <CityDot position={[0.3, 3.2, 0.4]} label="Antsiranana" />
      <CityDot position={[-0.8, -2.8, 0.2]} label="Toliara" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Madagascar3D() {
  return (
    <div className="w-full h-full" role="img" aria-label="Carte 3D de Madagascar">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
