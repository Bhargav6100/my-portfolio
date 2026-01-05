// src/components/ThreeScene.jsx
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function FloatingCube() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.x += delta * 0.6;
    cubeRef.current.rotation.y += delta * 0.4;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      <meshStandardMaterial color="#16a34a" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}
function MovingStars() {
  const starsGroup = useRef();

  useFrame((state, delta) => {
    if (!starsGroup.current) return;
    // slow, continuous rotation of the starfield
    starsGroup.current.rotation.y += delta * 0.03;
    starsGroup.current.rotation.x += delta * 0.01;
  });

  return (
    <group ref={starsGroup}>
      <Stars
        radius={80}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0}   // we animate via useFrame instead
      />
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 5] }}
    >
      {/* background color */}
      <color attach="background" args={["#020617"]} />

    {/* ⭐ animated star background */}
      <MovingStars />

      {/* lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* main object */}
      <FloatingCube />

      {/* camera controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
