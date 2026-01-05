import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
  },
};
 
// Handling form submission


export default function Contact() {
 const form = useRef();
  function handleSubmit(event) {
 
  event.preventDefault();
  emailjs
    .sendForm(
      "service_sia6ouq", // Replace with your EmailJS service ID
      "template_kqk9qu4", // Replace with your EmailJS template ID
       form.current,
      "3WYOnfoPan1jKRAbh" // Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        console.log(result)
        alert("Thank you! Your message has been sent.");
        form.reset(); // Reset form after successful submission
      },
      (error) => {
        console.log(error)
        alert("Oops! Something went wrong, please try again.");
      }
    );
}
  return (
    <motion.section
      id="contact"
      className="contact-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="contact-inner">
        {/* Contact Title */}
        <motion.h2 className="contact-title" variants={titleVariants}>
          Contact
        </motion.h2>

        {/* Subtitle */}
        <motion.p className="contact-subtitle" variants={titleVariants}>
          Have a project, idea, or opportunity you'd like to discuss?  
          Feel free to reach out.
        </motion.p>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          ref={form}
          className="contact-form"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Name Input */}
          <motion.div variants={inputVariants}>
            <label className="contact-label">Name</label>
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Your name"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={inputVariants}>
            <label className="contact-label">Email</label>
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div variants={inputVariants}>
            <label className="contact-label">Message</label>
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="Tell me a bit about what you have in mind..."
              required
            ></textarea>
          </motion.div>

          {/* Send Message Button */}
          <motion.button
            className="contact-button"
            variants={buttonVariants}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Links */}
        <motion.div className="contact-links" variants={linkVariants}>
          <p>Prefer email? You can reach me at:</p>
          <a href="mailto:fofandibhargav6@gmail.com">
            fofandibhargav6@gmail.com
          </a>

          <p style={{ marginTop: "1rem" }}>Or connect with me:</p>
          <a href="https://github.com/Bhargav6100">GitHub</a> •{" "}
          <a href="https://www.linkedin.com/in/bhargav-fofandi/">LinkedIn</a>
        </motion.div>
      </div>
    </motion.section>
  );
}
