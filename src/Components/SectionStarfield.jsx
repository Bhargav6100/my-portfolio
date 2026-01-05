// src/Components/SectionStarfield.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function MovingStars() {
  const group = useRef();

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.02;
    group.current.rotation.x += delta * 0.005;
  });

  return (
    <group ref={group}>
      <Stars
        radius={80}
        depth={40}
        count={3500}
        factor={4}
        saturation={0}
        fade
        speed={0.2}
      />
    </group>
  );
}

export default function SectionStarfield({ theme }) {
  // no stars in light mode
  if (theme !== "dark") return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
       gl={{ alpha: true }}       
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,              // 👈 put it behind everything
        pointerEvents: "none",
      }}
    >
      {/* same dark as hero background */}
      {/* <color attach="background" args={["#020617"]} /> */}
      <MovingStars />
    </Canvas>
  );
}
