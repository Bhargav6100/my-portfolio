// src/Components/Education.jsx
import { motion } from "framer-motion";
import universityLogo1 from '../assets/Concordia_univ_montreal_textlogo.png'; 
import universityLogo2 from '../assets/GTU_logo.png'; 

const education = [
  {
    title: "Masters of Engineering, Software Engineering",
    institution: "Concordia University",
    logo: universityLogo1, 
    time: "Sep 2023 – May 2025",
    type: "Montreal, Quebec, Canada",
    summary:
      "Studied about various software engineering fundamentals in detail with practical demonstrations.",
    relevantCourses: [
      "Programming for Problem Solving",
      "Advanced Programming Practices",
      "Software Comprehension and maintainence",
      "Software Design and methodologies"
    ],
  },
  {
    title: "Bachelors of Engineering, Information Technology Engineering",
    institution: "Gujarat Technological University (VVP Engineering College)",
    logo: universityLogo2,
    time: "Aug 2018 – Jul 2022",
    type: "Rajkot, Gujarat, India",
    summary:
      "Got a strong foundation about Computer science and software engineering fundamentals.",
    relevantCourses: [
      "Database Management System",
      "Data Structures and Algorithms",
      "Algorithm Design and Analysis",
      "Web Development"
    ],
  },
];
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
  hidden: { opacity: 0, x: -500}, // start from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};
export default function Education() {
  return (
        <motion.div
      className="section-inner"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
     >
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        A mix of formal education and continuous learning through online courses.
      </p>

      <div className="exp-timeline">
        {education.map((edu,index) => (
          <motion.article
            key={edu.title}
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
                <div className="exp-header-left">
                  <h3 className="exp-role">{edu.title}</h3>
                  <div className="exp-company-wrapper">
                    <div className="exp-logo-wrapper">
                      <img src={edu.logo} alt={edu.institution} className="exp-logo" />
                    </div>
                    <div className="exp-company">{edu.institution}</div>
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-time">{edu.time}</span>
                  <span className="exp-type-pill">{edu.type}</span>
                </div>
              </header>

              <p className="exp-summary">{edu.summary}</p>

              <ul className="exp-list">
                {edu.relevantCourses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}