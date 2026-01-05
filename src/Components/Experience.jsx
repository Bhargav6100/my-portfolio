import { motion } from "framer-motion";

// Experience data
const experience = [
  {
    role: "Frontend Developer",
    company: "Wings Tech",
    time: "Jan 2023 – Aug 2023",
    type: "Work Experience",
    summary:
      "Building and shipping real-world projects with React, Next.js and modern tooling.",
    points: [
      "Built scalable web applications using React.js, Next.js, TypeScript and Redux, decreasing load times by 40%.",
      "Collaborated with a cross-functional team of designers and PMs during Agile sprints to deliver UI/UX-aligned features with 95% on-time completion and 20% less rework.",
      "Oversaw development of the company’s new website with React and Next.js, implementing SSR and SSG to improve initial loading times by 35%.",
      "Refactored legacy codebases and adopted component-driven architecture, refined maintainability, and code clarity by 50%.",
      "Developed interactive 3D solutions with Three.js and Babylon.js, boosting designers’ speed by 25%.",
      "Delivered a 3D children’s learning game on the Seven Wonders of the World, which focuses on moving around each Wonder in FPP and provides learning, upgrading performance by 50%."
    ],
  },
  {
    role: "Software Developer - Frontend",
    company: "Hacker Associate",
    time: "Jan 2022 – Dec 2022",
    type: "Work Experience",
    summary: "Used my frontend skills to design dashboards.",
    points: [
      "Engineered secure analytical dashboards for SOC teams in React, Chart.js, and D3.js, strengthening incident-review efficiency by 40%.",
      "Integrated 10+ microservice APIs to stream live threat, log, and compliance data, shortening detection-to-response cycles by 25% and enabling faster, more informed decision-making.",
      "Optimized single-page application speed by 30% through strategic code-splitting and lazy loading in Next.js, enhancing overall speed and user experience.",
      "Designed responsive, accessible UI components, improving usability and enabling real-time analytics for cybersecurity teams.",
      "Led 30+ code reviews with testing in Jest and Cypress, resulting in improvement in documentation and reducing defects by 20%, contributing to stronger engineering standards across the team.",
      "Participated in daily stand-ups to coordinate tasks and remove blockers, improving sprint predictability by 20%",
    ],
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 500 }, // start from right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

const reverseCardVariants = {
  hidden: { opacity: 0, x: -500 }, // start from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <motion.div
      className="section-inner"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        A mix of personal projects, self-driven learning, and practical coding
        experience.
      </p>

      <div className="exp-timeline">
        {experience.map((job, index) => (
          <motion.article
            key={job.role}
            className="exp-card"
            variants={index % 2 === 0 ? cardVariants : reverseCardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="exp-marker" />

            <div className="exp-content">
              <header className="exp-header">
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <div className="exp-company">{job.company}</div>
                </div>
                <div className="exp-meta">
                  <span className="exp-time">{job.time}</span>
                  <span className="exp-type-pill">{job.type}</span>
                </div>
              </header>

              <p className="exp-summary">{job.summary}</p>

              <ul className="exp-list">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
