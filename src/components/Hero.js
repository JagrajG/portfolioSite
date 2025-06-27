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
    const isMobile = window.innerWidth < 768;
    if (!vantaEffect && vantaRef.current && !isMobile) {
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
        color: 0x8f9df0, // lighter than 0x4a5cd7
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
            <a
              href="/Jagraj_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              👋 I'm a second-year Computer Science major at Simon Fraser
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
                <h2>StormHacks 2024</h2>
                <h4>SFU Hackathon — May 2024</h4>
                <p>
                  Developed RESTful APIs using Node.js and Express.js to enable
                  real-time data updates, significantly improving system
                  responsiveness. Deployed and managed MongoDB on a Linux server
                  to ensure reliable data storage and high uptime. Integrated
                  dynamic frontend features using React.js to deliver a seamless
                  and interactive user experience throughout the hackathon
                  project.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="project-scroll">
            <div className="project-box">
              <h2>
                Investment Tracker{" "}
                <a
                  href="https://github.com/JagrajG/InvestmentTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Built a Java Swing desktop app using JFreeChart to visualize
                  investment growth in side-by-side charts.
                </li>
                <li>
                  Calculated real-time asset performance using spot prices and
                  historical data.
                </li>
                <li>
                  Enhanced reliability with exception handling and input
                  validation.
                </li>
              </ul>
            </div>

            <div className="project-box">
              <h2>
                GitFit{" "}
                <a
                  href="https://github.com/CMPT-276-SPRING-2025/final-project-17-sunsets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Led the development of a full-stack fitness web app that helps
                  users generate personalized workouts based on live weather
                  data and track progress through graphs and local storage.
                </li>
                <li>
                  Implemented weather-based workout and clothing recommendation
                  systems using OpenWeatherMap and WGER APIs.
                </li>
                <li>
                  Deployed a responsive platform with city-specific weather
                  search, step tracking, and a customizable workout builder.
                </li>
              </ul>
            </div>

            <div className="project-box">
              <h2>
                Pothole Patrol{" "}
                <a
                  href="https://github.com/JagrajG/pot-holes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Built a full-stack web app for crowdsourcing pothole reports,
                  with real-time tracking to improve civic response.
                </li>
                <li>
                  Developed RESTful APIs with Node.js and Express to handle
                  submissions, geolocation, and status updates.
                </li>
                <li>
                  Hosted services on a Linux server using MongoDB, maintaining
                  99% uptime and low-latency access city-wide.
                </li>
              </ul>
            </div>

            <div className="project-box">
              <h2>
                BMP Viewer & Image Tool{" "}
                <a
                  href="https://github.com/JagrajG/BMP-Viewer-and-Image-Manipulation-Tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Created a Python GUI tool with Tkinter to inspect and
                  manipulate BMP images.
                </li>
                <li>
                  Parsed headers manually and supported editing features like
                  RGB toggling and brightness adjustments.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
