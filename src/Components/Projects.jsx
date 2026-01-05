import { motion } from "framer-motion";

// Projects data
const projects = [
  {
    title: "3D Portfolio Website",
    role: "Featured Project",
    description:
      "An interactive portfolio built with React, React Three Fiber, and a custom 3D hero section.",
    tags: ["React", "React Three Fiber", "Framer Motion"],
    links: {
      demo: "#",
      github: "#",
    },
  },
   {
    title: "Platera Food Recipe sharing App",
    role: "Full Stack Next.js Application",
    description:
      "Platera is a full-stack food recipe sharing application built using Next.js App Router and Supabase. Users can upload recipes with images, browse shared meals, and experience fast server-rendered pages with cloud-backed storage and database persistence.",
    tags: ["Next.js", "CSS Modules", "Supabase", "React","app-router"],
    links: {
      demo: "https://platera-chi.vercel.app/",
      github: "https://github.com/Bhargav6100/Platera",
    },
  },
  {
    title: "Weather Dashboard App",
    role: "API Project",
    description:
      "A cinematic, location-aware weather application delivering accurate forecasts, environmental insights, and a premium user experience.",
    tags: ["Next.js", "Tailwind", "open-meteo"],
    links: {
      demo: "https://weather-app-sv8p.vercel.app/",
      github: "https://github.com/Bhargav6100/weather-app",
    },
  },
  {
    title: "React Tic-Tac-Toe",
    role: "Mini Game",
    description:
      "Tic-tac-toe game made with React with game logs for both the players.",
    tags: ["React", "React Hooks"],
    links: {
      demo: "https://my-tic-tac-toe6.netlify.app/",
      github: "https://github.com/Bhargav6100/react-tic-tac-toe",
    },
  },
  {
    title: "Quiz App",
    role: "UI / Frontend",
    description:
      "A fun quiz app implemented in React which has 10 questions, all the questions have specific timers to answer or else the question will be skipped, provides a summary at the end.",
    tags: ["React", "React Hooks"],
    links: {
      demo: "https://my-quiz-app-06.netlify.app/",
      github: "https://github.com/Bhargav6100/Quiz-APP",
    },
  },
  {
    title: "To-Do Application",
    role: "UI / Frontend",
    description:
      "A To-Do application that features dark mode, all React CRUD operations, allows users to add a due date for tasks, a search bar for long lists, and a reset button to clear the list.",
    tags: ["React", "React Hooks", "local storage"],
    links: {
      demo: "https://my-to-do-list610.netlify.app/",
      github: "https://github.com/Bhargav6100/To-Do-APP",
    },
  },
];

// Framer Motion variants for card animations
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // delay the children cards a bit
      staggerChildren: 0.2, // stagger the card animations
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

export default function Projects() {
  return (
    <div className="section-inner">
      <h2 className="section-title">Personal Projects</h2>
      <p className="section-subtitle">
        A selection of things I&apos;ve built to practice frontend, full-stack,
        and 3D web development.
      </p>

      <motion.div
        className="projects-grid"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={cardItemVariants}
          >
            <header className="project-header">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-role">{project.role}</div>
              </div>
            </header>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="project-btn primary"
              >
                Live Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Source Code
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
