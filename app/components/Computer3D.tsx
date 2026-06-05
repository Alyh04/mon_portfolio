"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Monitor({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const screenColor = isDark ? "#3b82f6" : "#2563eb";
  const bodyColor = isDark ? "#1e293b" : "#e2e8f0";
  const accentColor = isDark ? "#60a5fa" : "#3b82f6";

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.8, 0]}>
      <group position={[0, 0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.4, 1.6, 0.12]} />
          <meshPhysicalMaterial
            color={bodyColor}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshPhysicalMaterial
            color={isDark ? "#0f172a" : "#f8fafc"}
            metalness={0.9}
            roughness={0.1}
            emissive={screenColor}
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[1.8, 1.0]} />
          <meshPhysicalMaterial
            color={screenColor}
            emissive={screenColor}
            emissiveIntensity={0.3}
            transparent
            opacity={0.08}
          />
        </mesh>
      </group>

      <mesh position={[0, -0.3, 0]} castShadow>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshPhysicalMaterial color={bodyColor} metalness={0.5} roughness={0.4} />
      </mesh>

      <mesh position={[0, -0.65, 0.3]} castShadow>
        <boxGeometry args={[1.2, 0.08, 0.6]} />
        <meshPhysicalMaterial
          color={bodyColor}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[0, -0.65, 0.6]}>
        <boxGeometry args={[1.0, 0.04, 0.04]} />
        <meshPhysicalMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function DataParticles({ count = 30 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  const dataRef = useRef({
    speeds: new Float32Array(count),
    offsets: new Float32Array(count),
  });

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const speeds = dataRef.current.speeds;
    const offsets = dataRef.current.offsets;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 1.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 1.2 + Math.random() * 2.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius * 0.5;
      speeds[i] = 0.3 + Math.random() * 0.5;
      offsets[i] = Math.random() * Math.PI * 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [count]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      const { speeds, offsets } = dataRef.current;
      for (let i = 0; i < count; i++) {
        const speed = speeds[i];
        const offset = offsets[i];
        pos[i * 3 + 1] += clock.getDelta() * speed * 0.2;
        if (pos[i * 3 + 1] > 4.0) {
          pos[i * 3 + 1] = 1.2;
          const angle = Math.random() * Math.PI * 2;
          const radius = 0.5 + Math.random() * 1.5;
          pos[i * 3] = Math.cos(angle) * radius;
          pos[i * 3 + 2] = Math.sin(angle) * radius * 0.5;
        }
        pos[i * 3] += Math.sin(clock.elapsedTime * speed + offset) * 0.002;
        pos[i * 3 + 2] += Math.cos(clock.elapsedTime * speed * 0.7 + offset) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#3b82f6"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Cloud({ isDark }: { isDark: boolean }) {
  const cloudRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (cloudRef.current) {
      cloudRef.current.position.y += Math.sin(delta * 0.5) * 0.001;
    }
  });

  const color = isDark ? "#94a3b8" : "#64748b";

  return (
    <group ref={cloudRef} position={[0, 3.2, 0]}>
      <Float speed={0.5} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.5}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[0.5, 0.1, 0.1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.4}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[-0.5, 0.05, -0.1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.4}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[0.25, -0.15, 0.15]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.35}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[-0.25, -0.1, -0.15]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.35}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

function DataFlowLine() {
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(0.3, 1.8, 0.2),
      new THREE.Vector3(-0.2, 2.4, -0.1),
      new THREE.Vector3(0.1, 3.0, 0.1),
      new THREE.Vector3(0, 3.4, 0),
    ]);
    return curve.getPoints(30);
  }, []);

  return (
    <Line
      points={points}
      color="#3b82f6"
      lineWidth={1}
      transparent
      opacity={0.25}
    />
  );
}

function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.0} />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#60a5fa" />

      <Monitor isDark={isDark} />
      <DataParticles count={40} />
      <Cloud isDark={isDark} />
      <DataFlowLine />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 3.5}
      />
    </>
  );
}

export default function Computer3D() {
  return (
    <div className="w-full h-full" role="img" aria-label="Ordinateur 3D avec flux de données vers le cloud">
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
