"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

export type SculptureMode = "orbital" | "prismatic" | "harmonic";

interface SculptureProps {
  mode: SculptureMode;
  isPaused: boolean;
  wireframe: boolean;
}

function OrbitalSculpture({ isPaused, wireframe }: { isPaused: boolean; wireframe: boolean }) {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const innerKnotRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (isPaused) return;
    const t = clock.getElapsedTime();

    if (innerKnotRef.current) {
      innerKnotRef.current.rotation.x = t * 0.25;
      innerKnotRef.current.rotation.y = t * 0.35;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.18;
      outerRingRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.y = t * 0.22;
      midRingRef.current.rotation.z = Math.cos(t * 0.25) * 0.15;
    }
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 1.5) * 0.06;
      coreRef.current.scale.set(s, s, s);
    }
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group>
      {/* Central Torus Knot */}
      <mesh ref={innerKnotRef} scale={1.05}>
        <torusKnotGeometry args={[0.95, 0.26, 160, 24, 2, 3]} />
        <meshPhysicalMaterial
          color="#8B7DF0"
          roughness={0.18}
          metalness={0.25}
          clearcoat={0.9}
          clearcoatRoughness={0.12}
          reflectivity={0.8}
          wireframe={wireframe}
        />
      </mesh>

      {/* Pulsing Core Sphere */}
      <mesh ref={coreRef} scale={0.42}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#705FE8"
          roughness={0.1}
          metalness={0.85}
          wireframe={wireframe}
        />
      </mesh>

      {/* Primary Tilted Orbital Ring */}
      <mesh ref={outerRingRef} rotation={[1.1, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.024, 16, 140]} />
        <meshStandardMaterial
          color="#9E91F5"
          metalness={0.65}
          roughness={0.25}
          wireframe={wireframe}
        />
      </mesh>

      {/* Secondary Crossed Ring */}
      <mesh ref={midRingRef} rotation={[-0.4, 0.95, 0.6]}>
        <torusGeometry args={[1.75, 0.016, 16, 140]} />
        <meshStandardMaterial
          color="#B4A9FA"
          metalness={0.5}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Tertiary Thin Ring */}
      <mesh rotation={[0.5, -0.6, 1.2]}>
        <torusGeometry args={[2.3, 0.009, 16, 120]} />
        <meshStandardMaterial
          color="#C7BFFC"
          metalness={0.4}
          roughness={0.35}
          wireframe={wireframe}
        />
      </mesh>

      {/* Orbiting Satellites */}
      <group ref={satellitesRef}>
        <mesh position={[2.05, 0.3, 0]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshStandardMaterial color="#6352E4" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh position={[-1.75, -0.4, 0.5]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#A396F8" roughness={0.15} metalness={0.8} />
        </mesh>
        <mesh position={[0.2, 1.9, -0.6]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#7C6EE6" roughness={0.2} metalness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

function PrismaticSculpture({ isPaused, wireframe }: { isPaused: boolean; wireframe: boolean }) {
  const crystalRef = useRef<THREE.Mesh>(null);
  const wireCageRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (isPaused) return;
    const t = clock.getElapsedTime();

    if (crystalRef.current) {
      crystalRef.current.rotation.x = t * 0.22;
      crystalRef.current.rotation.y = t * 0.28;
    }
    if (wireCageRef.current) {
      wireCageRef.current.rotation.x = -t * 0.15;
      wireCageRef.current.rotation.z = t * 0.18;
    }
    if (haloRef.current) {
      haloRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      {/* Central Faceted Icosahedron */}
      <mesh ref={crystalRef} scale={1.2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#8E81F3"
          roughness={0.15}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={wireframe}
          flatShading
        />
      </mesh>

      {/* Outer Wireframe Cage */}
      <mesh ref={wireCageRef} scale={1.75}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#6C5CE7"
          wireframe
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Floating Equatorial Halo */}
      <mesh ref={haloRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 120]} />
        <meshStandardMaterial color="#B0A4F8" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
}

function HarmonicSculpture({ isPaused, wireframe }: { isPaused: boolean; wireframe: boolean }) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const ring4 = useRef<THREE.Mesh>(null);
  const orb = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (isPaused) return;
    const t = clock.getElapsedTime();

    if (ring1.current) ring1.current.rotation.x = t * 0.35;
    if (ring2.current) ring2.current.rotation.y = t * 0.28;
    if (ring3.current) ring3.current.rotation.z = t * 0.22;
    if (ring4.current) {
      ring4.current.rotation.x = -t * 0.18;
      ring4.current.rotation.y = t * 0.14;
    }
    if (orb.current) {
      const s = 0.5 + Math.sin(t * 2) * 0.08;
      orb.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[1.2, 0.035, 16, 100]} />
        <meshStandardMaterial color="#7C6EE6" metalness={0.7} roughness={0.2} wireframe={wireframe} />
      </mesh>
      <mesh ref={ring2} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[1.55, 0.03, 16, 100]} />
        <meshStandardMaterial color="#9487F2" metalness={0.6} roughness={0.25} wireframe={wireframe} />
      </mesh>
      <mesh ref={ring3} rotation={[0, 0.5, 0.3]}>
        <torusGeometry args={[1.9, 0.025, 16, 120]} />
        <meshStandardMaterial color="#AEA3FA" metalness={0.5} roughness={0.3} wireframe={wireframe} />
      </mesh>
      <mesh ref={ring4} rotation={[0.8, -0.4, 0.2]}>
        <torusGeometry args={[2.25, 0.018, 16, 140]} />
        <meshStandardMaterial color="#C8C0FD" metalness={0.4} roughness={0.35} wireframe={wireframe} />
      </mesh>
      <mesh ref={orb}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial color="#5B48DF" metalness={0.9} roughness={0.1} clearcoat={1} wireframe={wireframe} />
      </mesh>
    </group>
  );
}

function FloatingParticles({ count = 45 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.4 + Math.random() * 1.8;
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        color="#8B7DF0"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function SceneRoot({ mode, isPaused, wireframe }: SculptureProps) {
  const containerRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0.15, y: -0.2 });

  useFrame(({ pointer }) => {
    if (!containerRef.current) return;

    // Smooth lerp following mouse pointer
    targetRotation.current.y = pointer.x * 0.45;
    targetRotation.current.x = 0.15 - pointer.y * 0.35;

    containerRef.current.rotation.y = THREE.MathUtils.lerp(
      containerRef.current.rotation.y,
      targetRotation.current.y,
      0.06
    );
    containerRef.current.rotation.x = THREE.MathUtils.lerp(
      containerRef.current.rotation.x,
      targetRotation.current.x,
      0.06
    );
  });

  return (
    <group ref={containerRef} rotation={[0.15, -0.2, 0]}>
      <Float
        speed={isPaused ? 0 : 1.8}
        rotationIntensity={0.18}
        floatIntensity={0.4}
      >
        {mode === "orbital" && (
          <OrbitalSculpture isPaused={isPaused} wireframe={wireframe} />
        )}
        {mode === "prismatic" && (
          <PrismaticSculpture isPaused={isPaused} wireframe={wireframe} />
        )}
        {mode === "harmonic" && (
          <HarmonicSculpture isPaused={isPaused} wireframe={wireframe} />
        )}
        <FloatingParticles count={40} />
      </Float>
    </group>
  );
}

export default function Scene({
  mode = "orbital",
  isPaused = false,
  wireframe = false,
}: SculptureProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(media.matches);
      const listener = () => setReducedMotion(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6.8], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Studio Lighting System */}
      <ambientLight intensity={1.5} color="#FAF9FE" />
      <directionalLight
        position={[5, 7, 6]}
        intensity={2.8}
        color="#FFFFFF"
      />
      <directionalLight
        position={[-6, -4, -3]}
        intensity={1.2}
        color="#D9D4F8"
      />
      <pointLight
        position={[-4, -2, 3]}
        intensity={35}
        color="#8B7DF0"
        distance={15}
      />
      <pointLight
        position={[3, 4, -3]}
        intensity={22}
        color="#A79CF8"
        distance={14}
      />
      <hemisphereLight
        args={["#FFFFFF", "#EBE8F8", 1.1]}
      />

      <SceneRoot
        mode={mode}
        isPaused={isPaused || reducedMotion}
        wireframe={wireframe}
      />
    </Canvas>
  );
}
