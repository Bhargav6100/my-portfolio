// About.jsx
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const pillItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const leftCard = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightCard = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

export default function About() {
  return (
    <motion.div
      className="section-inner about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          I&apos;m Bhargav, a frontend engineer who enjoys building clean,
          interactive experiences with React, Next.js, and modern tooling.
          Recently I&apos;ve been expanding into full-stack development with
          Node.js, Express, and databases like PostgreSQL and MongoDB.
        </p>

        <motion.div
          className="about-pill-row"
          variants={pillsContainer}
        >
          <motion.span className="about-pill" variants={pillItem}>
            Frontend
          </motion.span>
          <motion.span className="about-pill" variants={pillItem}>
            React • Next.js • TypeScript
          </motion.span>
          <motion.span className="about-pill" variants={pillItem}>
            Learning Node.js &amp; Express
          </motion.span>
        </motion.div>
      </div>

      <div className="about-grid">
        <motion.div className="about-card" variants={leftCard}>
          <h3 className="about-card-title">What I Do</h3>
          <p className="about-card-text">
            I design and build user-friendly web applications with a focus
            on performance, accessibility, and clean code. I enjoy taking
            ideas from a rough sketch all the way to a polished, deployed
            product with thoughtful details like loading states, empty
            states, and error handling.
          </p>
        </motion.div>

        <motion.div className="about-card" variants={rightCard}>
          <h3 className="about-card-title">What I&apos;m Focused On</h3>
          <ul className="about-list">
            <li>
              Developing with React, Next.js,
              and TypeScript.
            </li>
            <li>
              Learning full-stack development with Node.js, Express,
              PostgreSQL &amp; MongoDB.
            </li>
            <li>
              Exploring 3D and interactive experiences using React Three Fiber.
            </li>
            <li>
              Building real-world projects that solve practical problems.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
