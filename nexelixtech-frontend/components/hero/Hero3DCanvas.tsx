"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import type { Points as ThreePoints } from "three";
import { useDeviceCapabilities } from "@/lib/hooks/use-device-capabilities";

// Generate random positions in a sphere globally to avoid impure Math.random during render
const count = 1500;
const globalPositions = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  // Create a hollow sphere to leave the center empty for text readability
  const minRadius = 1.5;
  const maxRadius = 4;
  // Use cube root for uniform volume distribution, or just simple addition for a denser inner shell
  const r = minRadius + Math.random() * (maxRadius - minRadius);
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);
  globalPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  globalPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  globalPositions[i * 3 + 2] = r * Math.cos(phi);
}

// Animated particle constellation (SRS §4.4)
function ParticleNodes() {
  const ref = useRef<ThreePoints>(null);

  const positions = useMemo(() => globalPositions, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#6366F1"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// CSS gradient fallback for weak devices / reduced motion
function GradientFallback() {
  return (
    <div
      className="absolute inset-0 animate-gradient"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(ellipse at bottom, rgba(6, 182, 212, 0.12), transparent 60%)",
        backgroundSize: "200% 200%",
      }}
      aria-hidden="true"
    />
  );
}

export default function Hero3DCanvas() {
  const canRender3D = useDeviceCapabilities();

  // Lightweight fallback on weak devices (Issue 1 fix)
  if (!canRender3D) return <GradientFallback />;

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNodes />
      </Canvas>
    </div>
  );
}
