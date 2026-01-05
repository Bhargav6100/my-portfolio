import { motion } from "framer-motion";

// Import your logos
import htmlLogo from "../assets/html5-original.svg";
import cssLogo from "../assets/css3-original.svg";
import jsLogo from "../assets/javascript-original.svg";
import nextLogo from "../assets/nextjs-original.svg";
import reactLogo from "../assets/react-original.svg";
import gitLogo from "../assets/git-original.svg";
import githubLogo from "../assets/github-original.svg";
import tailwindLogo from "../assets/tailwindcss-original.svg";
import reactthreeLogo from "../assets/threejs-original.svg";
import nodeLogo from "../assets/nodejs-original.svg";
import expressLogo from "../assets/express-original.svg";
import tsLogo from "../assets/ts.svg";
import javaLogo from "../assets/Java.png";
import cLogo from "../assets/C.png";
import bootStrapLogo from "../assets/Bootstrap.png";
import framerMotionLogo from "../assets/Framer_motion.png"
import awsLogo from "../assets/AWS.png";
import dockerLogo from "../assets/Docker.png";
import kubernetesLogo from "../assets/Kubernetes.png";
import npmLogo from "../assets/NPM.png";
import yarnLogo from "../assets/Yarn.png";
import vsLogo from "../assets/vs.png";
import viteLogo from "../assets/Vite.png";
import jestLogo from "../assets/Jest.png";
import cypressLogo from "../assets/Cypress.png";

// Define your skill groups and logos
const skillGroups = [
  {
    title: "Programming Languages",
    description: "Programming languages I am proficient in.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    title: "Frontend & UI",
    description: "Building fast, responsive user interfaces.",
    skills: ["React", "Next.js", "React Three Fiber", "Three.js"],
  },
  {
    title: "Backend & Tools",
    description: "Creating APIs and wiring up full-stack apps.",
    skills: [
      "Node.js",
      "Express",
      "Git",
      "GitHub",
      "Jest",
      "Cypress",
      "NPM",
      "Yarn",
      "Vite",
      "VS code",
    ],
  },
  {
    title: "Styling & Design",
    description: "Clean, modern layouts and component systems.",
    skills: ["Tailwind CSS", "BootStrap", "Framer Motion", "Responsive Design"],
  },
  {
    title: "Cloud",
    description: "AWS, Docker, Kubernetes, and cloud-native deployments.",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Soft Skills",
    description: "How I like to work with teams.",
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Agile Methodologies",
      "Continuous Learning",
      "Code Reviews",
    ],
  },
];

const iconMap = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: jsLogo,
  TypeScript: tsLogo,
  Java: javaLogo,
  C: cLogo,
  React: reactLogo,
  "Next.js": nextLogo,
  "React Three Fiber": reactthreeLogo,
  "Three.js": reactthreeLogo,
  "Node.js": nodeLogo,
  Express: expressLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Jest: jestLogo,
  Cypress: cypressLogo,
  NPM: npmLogo,
  Yarn: yarnLogo,
  Vite: viteLogo,
  "VS code": vsLogo,
  "Tailwind CSS": tailwindLogo,
  BootStrap: bootStrapLogo,
  "Framer Motion": framerMotionLogo,
  AWS: awsLogo,
  Docker: dockerLogo,
  Kubernetes: kubernetesLogo,
};

// Animation variants for motion elements
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const pillContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // controls pop order timing
      delayChildren: 0.2,
    },
  },
};

const pillItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      mass: 0.4,
    },
  },
};

export default function Skills() {
  return (
    <motion.div
      className="section-inner"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        A snapshot of the technologies and skills I use to build and ship projects.
      </p>

      <motion.div
        className="skill-groups"
        variants={cardsContainer}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="skill-card fancy"
            variants={cardItem}
            whileHover={{ y: -4 }}
          >
            <div className="skill-card-header">
              <h3>{group.title}</h3>
              <span className="skill-card-dot" />
            </div>

            <p className="skill-card-text">{group.description}</p>

            <motion.div
              className="skill-pill-row"
              variants={pillContainer}
            >
              {group.skills.map((skill) => {
                const Icon = iconMap[skill];
                const isSoftSkill =
                  (!Icon && group.title === "Soft Skills") ||
                  (!Icon && group.title === "Styling & Design");

                return (
                  <motion.div
                    key={skill}
                    className={`skill-pill ${isSoftSkill ? "soft-skill-pill" : ""}`}
                    variants={pillItem}
                  >
                    {Icon && (
                      <img
                        src={Icon}
                        alt={skill}
                        className="skill-img"
                      />
                    )}
                    <span>{skill}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
