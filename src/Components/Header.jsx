import { useState } from "react";
import "./Header.css";

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo / Name */}
        <a href="#home" className="header-logo">
          Bhargav<span>.</span>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hamburger Icon */}
        <button className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"} {/* Change icon when menu is open */}
        </button>

        {/* Theme Toggle */}
        <button
          className="header-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}
