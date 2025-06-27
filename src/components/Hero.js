import React, { useEffect, useRef, useState } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from "p5";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = TOPOLOGY({
        el: vantaRef.current,
        p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x8f9df0,
        backgroundColor: 0x0a0a23,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="hero">
      <div className="hero-content">
        <div className="left-column">
          <h1 className="name">Jagraj Gill</h1>
          <h2 className="school">Computer Science @ SFU</h2>
          <h2 className="internship">SWE Intern @ Savi Finance</h2>

          <div className="icons">
            <a
              href="mailto:jsg51@sfu.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/JagrajG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jagraj-gill-49392416a/"
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
            <h3>
              <a onClick={() => setActiveSection("bio")}>Bio</a>
            </h3>
            <h3>
              <a onClick={() => setActiveSection("experience")}>Experience</a>
            </h3>
            <h3>
              <a onClick={() => setActiveSection("projects")}>Projects</a>
            </h3>
          </div>
        </div>

        {activeSection === "bio" && (
          <div className="bio-box">
            <p>
              I'm a second-year Computer Science major at Simon Fraser
              University. My passion for programming began in Grade 5 when my
              ICT teacher introduced me to Scratch. From that moment, I knew I
              wanted to pursue a future in technology.
            </p>
            <p>
              Before graduating high school, I made the decision to apply to
              Computer Science programs because I knew it was a field I was
              truly passionate about and would enjoy studying in depth. In my
              first year at SFU, I attended a hackathon where my team and I
              built a full-stack web application from scratch. It was an intense
              24-hour sprint of coding, collaboration, and problem solving, and
              it reminded me exactly why I fell in love with computer science.
            </p>
            <p>
              In my free time, I love getting lost in immersive RPG games,
              especially ones with rich storytelling and world-building. I'm
              also a huge sports fan—whether it's watching UFC or NBA matchups,
              hitting the gym for a lifting session, or playing basketball and
              soccer with friends—I enjoy staying active, competitive, and
              energized.
            </p>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="scroll-container">
            <div className="experience-scroll">
              <div className="experience-box">
                <h2>Software Engineering Intern</h2>
                <h4>Savi Finance — May 2025 to Aug 2025</h4>
                <p>
                  During my internship at Savi Finance, I built full-stack
                  features for a Fintech SaaS platform with over 100 active
                  users. I unified React and React Native logic with
                  MongoDB-backed services, reducing release time by 20%. I led
                  the development of an inline account editing tool using Redux,
                  cut image load failures by 20% with an AWS S3 image upload
                  system, and improved login success rates by 45% through UI and
                  validation enhancements.
                </p>
              </div>

              <div className="experience-box">
                <h2>Frontend Developer</h2>
                <h4>Lorem Ipsum Inc — Jan 2024 to Apr 2024</h4>
                <p>
                  Consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
                  at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
