import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socialLinks = [
  { name: "GitHub", link: "https://github.com/Bhargav6100" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/bhargav-fofandi/" },
]

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="footer-inner">
        {/* Footer Text */}
        <div className="footer-info">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Bhargav. All Rights Reserved.
          </p>
          <p className="footer-text">
            Crafted with ❤️ using React, Three.js and Framer Motion.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
