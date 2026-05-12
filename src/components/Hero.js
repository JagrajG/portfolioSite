import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Hero.css";
import ParticlesHyperspaceBackground from "./ParticlesHyperspaceBackground";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("bio");

  const handleSectionChange = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="hero">
      <ParticlesHyperspaceBackground />

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
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/JagrajG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jagraj-gill-49392416a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="/Jagraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FaFileAlt />
            </a>
          </div>

          <div className="nav-links">
            <h3>
              <a
                href="#bio"
                className={activeSection === "bio" ? "active-link" : ""}
                onClick={(e) => handleSectionChange(e, "bio")}
              >
                Bio
              </a>
            </h3>

            <h3>
              <a
                href="#experience"
                className={activeSection === "experience" ? "active-link" : ""}
                onClick={(e) => handleSectionChange(e, "experience")}
              >
                Experience
              </a>
            </h3>

            <h3>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active-link" : ""}
                onClick={(e) => handleSectionChange(e, "projects")}
              >
                Projects
              </a>
            </h3>
          </div>
        </div>

        {activeSection === "bio" && (
          <div className="bio-box">
            <p>
              👋 I'm a third-year Computer Science major at Simon Fraser
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
              also a huge sports fan, whether it's watching UFC or NBA matchups,
              hitting the gym for a lifting session, or playing basketball and
              soccer with friends. I enjoy staying active, competitive, and
              energized.
            </p>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="experience-scroll">
            <div className="experience-box">
              <h2>Software Engineering Intern</h2>
              <h4>Savi Finance - May 2025 to Dec 2025</h4>
              <p>
                Built full-stack features for a fintech SaaS platform with 1000+
                users. Developed shared React and React Native modules backed by
                MongoDB services, reducing release cycles by 15%. Integrated AWS
                S3 image uploads through GraphQL, improved upload reliability,
                and refactored login UI and validation flows to reduce user
                login errors by 45%.
              </p>
            </div>

            <div className="experience-box">
              <h2>StormHacks 2024</h2>
              <h4>SFU Hackathon - May 2024</h4>
              <p>
                Directed a 2-person team during a 24-hour hackathon, dividing
                tasks and delivering a working full-stack application under
                strict time constraints. Designed and deployed REST APIs with
                Node.js and Express.js to enable real-time data updates and
                improve system response time.
              </p>
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="project-scroll">
            <div className="project-box">
              <h2>
                AI Study Pal{" "}
                <a
                  href="https://github.com/JagrajG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                  aria-label="AI Study Pal GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Gemini API</span>
                <span>JavaScript</span>
              </div>

              <ul>
                <li>
                  Built an end-to-end AI study tool that converts PDF documents
                  into structured flashcard datasets.
                </li>
                <li>
                  Designed a strict JSON schema for AI-generated question and
                  answer pairs.
                </li>
                <li>
                  Implemented Python validation logic to prevent malformed AI
                  responses from entering the app.
                </li>
                <li>
                  Developed an interactive flashcard interface with flip and
                  navigation features.
                </li>
              </ul>
            </div>

            <div className="project-box">
              <h2>
                Wireless 4-DOF Robotic Arm{" "}
                <a
                  href="https://github.com/JagrajG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                  aria-label="Wireless Robotic Arm GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>ESP32</span>
                <span>C++</span>
                <span>Embedded</span>
                <span>PWM</span>
              </div>

              <ul>
                <li>
                  Designed and fabricated a 4-DOF robotic arm using ESP32
                  microcontrollers, MG90S servos, and 3D-printed components.
                </li>
                <li>
                  Developed embedded C++ control software for analog sensor
                  input and real-time actuator control.
                </li>
                <li>
                  Implemented wireless communication between dual ESP32 devices
                  for synchronized motion.
                </li>
                <li>
                  Built a modular architecture to support future inverse
                  kinematics and sensor upgrades.
                </li>
              </ul>
            </div>

            <div className="project-box">
              <h2>
                Investment Tracker{" "}
                <a
                  href="https://github.com/JagrajG/InvestmentTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                  aria-label="Investment Tracker GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>Java</span>
                <span>Swing</span>
                <span>JFreeChart</span>
                <span>SQLite</span>
              </div>

              <ul>
                <li>
                  Built a Java Swing desktop app to visualize investment growth
                  using side-by-side charts.
                </li>
                <li>
                  Engineered portfolio logic to calculate asset performance from
                  live spot prices and purchase data.
                </li>
                <li>
                  Improved reliability with exception handling and input
                  validation for dynamic asset entries.
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
                  aria-label="GitFit GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>React</span>
                <span>APIs</span>
                <span>LocalStorage</span>
                <span>CSS</span>
              </div>

              <ul>
                <li>
                  Led development of a full-stack fitness web app that generates
                  personalized workouts using live weather data.
                </li>
                <li>
                  Implemented weather-based workout and clothing recommendation
                  systems using OpenWeatherMap and WGER APIs.
                </li>
                <li>
                  Built city-specific weather search, step tracking, progress
                  graphs, and a custom workout builder.
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
                  aria-label="Pothole Patrol GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Linux</span>
              </div>

              <ul>
                <li>
                  Built a full-stack web app for crowdsourcing pothole reports
                  with real-time status tracking.
                </li>
                <li>
                  Developed RESTful APIs to handle submissions, geolocation, and
                  civic issue updates.
                </li>
                <li>
                  Hosted services on a Linux server using MongoDB for reliable
                  data storage.
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
                  aria-label="BMP Viewer GitHub"
                >
                  <FaGithub />
                </a>
              </h2>

              <div className="tech-stack">
                <span>Python</span>
                <span>Tkinter</span>
                <span>BMP</span>
                <span>GUI</span>
              </div>

              <ul>
                <li>
                  Created a Python GUI tool with Tkinter to inspect and
                  manipulate BMP image files.
                </li>
                <li>
                  Parsed BMP headers manually and supported RGB toggling and
                  brightness adjustments.
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
