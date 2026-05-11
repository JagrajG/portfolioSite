import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Hero.css";
import ParticlesHyperspaceBackground from "./ParticlesHyperspaceBackground";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("bio");

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
              <a
                href="#bio"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("bio");
                }}
              >
                Bio
              </a>
            </h3>
            <h3>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("experience");
                }}
              >
                Experience
              </a>
            </h3>
            <h3>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection("projects");
                }}
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
                <h4>Savi Finance — May 2025 to Dec 2025</h4>
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
                AI Study Pal{" "}
                <a
                  href="https://github.com/JagrajG/AI-Study-pal/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Built an end-to-end AI study tool that converts PDF documents
                  into structured flashcard datasets using Python, FastAPI, and
                  the Gemini API.
                </li>
                <li>
                  Designed a strict JSON schema for AI-generated flashcards with
                  question-answer pairs to improve output consistency and
                  reliable parsing.
                </li>
                <li>
                  Implemented Python validation logic to verify data structure,
                  field integrity, and content quality before displaying
                  generated flashcards.
                </li>
                <li>
                  Developed an interactive HTML, CSS, and JavaScript interface
                  with flashcard flip and navigation features for real-time
                  studying.
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
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Designed and fabricated a 4-DOF robotic arm using ESP32
                  microcontrollers, MG90S servos, and custom 3D-printed
                  components.
                </li>
                <li>
                  Developed embedded C++ control software to process analog
                  sensor input and generate PWM signals for real-time actuator
                  control.
                </li>
                <li>
                  Implemented wireless communication between dual ESP32 devices,
                  enabling synchronized motion through real-time data
                  transmission.
                </li>
                <li>
                  Built a modular control architecture to support future
                  expansion, including inverse kinematics and advanced sensor
                  integration.
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
                >
                  <FaGithub />
                </a>
              </h2>
              <ul>
                <li>
                  Built a Java Swing desktop app using JFreeChart to visualize
                  investment growth through side-by-side charts.
                </li>
                <li>
                  Engineered portfolio logic to calculate real-time asset
                  performance using live spot prices, asset quantities, and
                  historical purchase data.
                </li>
                <li>
                  Improved reliability with exception handling and input
                  validation, ensuring consistent chart behavior for dynamic
                  asset entries.
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
                  Led development of a full-stack fitness web app that generates
                  personalized workouts based on live weather data and user
                  fitness goals.
                </li>
                <li>
                  Implemented weather-based workout and clothing recommendations
                  using OpenWeatherMap and WGER APIs.
                </li>
                <li>
                  Built responsive features including city-specific weather
                  search, step tracking, progress graphs, and a customizable
                  workout builder.
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
                  Built a full-stack web app for crowdsourcing pothole reports
                  with real-time tracking to improve civic response.
                </li>
                <li>
                  Developed RESTful APIs with Node.js and Express to handle
                  submissions, geolocation, and status updates.
                </li>
                <li>
                  Hosted services on a Linux server using MongoDB, maintaining
                  reliable uptime and low-latency access.
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
                  manipulate BMP image files.
                </li>
                <li>
                  Parsed BMP headers manually and supported editing features
                  including RGB toggling and brightness adjustments.
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
