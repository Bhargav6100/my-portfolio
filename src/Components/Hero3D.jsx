// src/Components/Hero3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls,useTexture } from "@react-three/drei";
import { useRef } from "react";
import "./Hero3D.css";
import { motion } from "motion/react";
function LogoCube() {
  const cubeRef = useRef(null);
  const textures = useTexture([
  "/logos/javaScript.png",
  "/logos/react.png",
  "/logos/next.png",
  "/logos/tailwind.png",  // your file must exist!
  "/logos/typeScript.png",
  "/logos/three.png",      // back   (-Z)
  ]);

  // gentle rotation
  useFrame((_, delta) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.y += delta * 0.6;
    cubeRef.current.rotation.x += delta * 0.3;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial
          key={i}
         attach={`material-${i}`} 
          map={tex}
          roughness={0}
          metalness={0}
        />
      ))}
    </mesh>
  );
}




// Extra subtle light-mode background shape (plane under cube)
function LightBackdrop() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
      <circleGeometry args={[4, 64]} />
      <meshStandardMaterial
        color="#e5f9f0"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function Hero3D({ theme }) {
  const isDark = theme === "dark";

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* LEFT: text */}
        <div className="hero-copy">
          <p className="hero-kicker">
            Tailwind • React • Next.js • TypeScript • 3D Web
          </p>
          <motion.h1
  className="hero-title"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  Hi, I&apos;m{" "}
<motion.span
  className="hero-name glow-name"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
  whileHover={{ scale: 1.05 }}
>
  Bhargav Fofandi
</motion.span>

.

  
</motion.h1>

          <p className="hero-subtitle">
            I build modern, responsive web experiences with React, Next.js, Tailwind
            and occasionally 3D — like the one you&apos;re seeing here.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary">
              View projects
            </a>
            <a href="#contact" className="hero-btn secondary">
              Get in touch
            </a>
          </div>
        </div>

        {/* RIGHT: 3D canvas */}
        <div className="hero-canvas-wrapper">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            className="hero-canvas"
             gl={{ alpha: true }}
             style={{ background: "transparent" }}
          >
            {/* background per theme
            {isDark ? (
              <color attach="background" args={["#020617"]} />
            ) : (
              <color attach="background" args={["#f9fafb"]} />
            )}

            {/* dark: stars, light: soft floor */}
            {/* {isDark ? <DarkStars /> : <LightBackdrop />}  */}
             {!isDark && <LightBackdrop />}

            <ambientLight intensity={isDark ? 0.4 : 0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <directionalLight position={[-4, -2, 3]} intensity={0.6} />

              <LogoCube/>

            <OrbitControls enableZoom={false} />
          </Canvas>

          {/* light theme aura / glow behind cube */}
          {!isDark && <div className="hero-light-aura" />}
        </div>
      </div>
    </section>
  );
}
