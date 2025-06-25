import React, { useEffect, useRef, useState } from "react";
import * as VANTA from "vanta/dist/vanta.topology.min";
import p5 from "p5";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.default({
          el: vantaRef.current,
          p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1fff,
          backgroundColor: 0x0a0a23,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="hero">
      <h1 className="name">Jagraj Gill</h1>
      <h2 className="school">Computer Science @ SFU</h2>
      <h2 className="internship">Software Engineer Intern @ Savi Finance</h2>

      <div className="icons">
        <a
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt />
        </a>
      </div>

      <div className="nav-links">
        <a href="#bio">bio</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
      </div>
    </div>
  );
};

export default Hero;
