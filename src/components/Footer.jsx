import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/AbeeraaAsif58"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/abeera--asif/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:abeeramughal0321@gmail.com"
        className="hover:text-secondary transition-colors duration-300"
      >
        <FaEnvelope size={24} />
      </a>
    </footer>
  );
};

export default Footer;