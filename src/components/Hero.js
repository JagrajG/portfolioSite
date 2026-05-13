import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaRobot,
  FaGlobe,
  FaMicrochip,
  FaJava,
  FaPython,
  FaLayerGroup,
} from "react-icons/fa";
import "./Hero.css";

const projects = [
  {
    title: "IoT Climate Monitoring Dashboard",
    github: "https://github.com/JagrajG/ESP32-Temp-Monitor",
    categories: ["Embedded", "Web"],
    tech: ["C", "ESP-IDF", "FastAPI", "SQLite", "JavaScript", "HTML", "CSS"],
    bullets: [
      "Built an end-to-end IoT climate monitoring system integrating microcontroller firmware, I2C sensor communication, OLED display output, REST APIs, SQLite storage, and a live web dashboard.",
      "Developed ESP-IDF firmware to collect temperature and humidity readings, update an OLED interface, and transmit structured JSON data to a FastAPI backend over Wi-Fi.",
      "Engineered 24-hour climate tracking with SQLite and REST endpoints, enabling a JavaScript dashboard to display live readings, device status, and trend visualizations.",
    ],
  },
  {
    title: "AI Study Pal",
    github: "https://github.com/JagrajG",
    categories: ["AI", "Web"],
    tech: ["Python", "FastAPI", "Gemini API", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Built an end-to-end AI study tool that converts PDF documents into structured flashcard datasets.",
      "Designed a strict JSON schema for AI-generated question and answer pairs.",
      "Implemented Python validation logic to prevent malformed AI responses from entering the app.",
      "Developed an interactive flashcard interface with flip and navigation features.",
    ],
  },
  {
    title: "Wireless 4-DOF Robotic Arm",
    github: "https://github.com/JagrajG",
    categories: ["Embedded"],
    tech: ["ESP32", "C", "Embedded", "PWM"],
    bullets: [
      "Designed and fabricated a 4-DOF robotic arm using ESP32 microcontrollers, servos, and custom 3D-printed components.",
      "Developed embedded C software to process analog inputs and generate PWM signals for real-time actuator control.",
      "Implemented wireless control between dual ESP32 devices, enabling synchronized motion through real-time transmission.",
      "Built a modular control architecture supporting future inverse kinematics and sensor integration.",
    ],
  },
  {
    title: "Investment Tracker",
    github: "https://github.com/JagrajG/InvestmentTracker",
    categories: ["Java"],
    tech: ["Java", "Swing", "JFreeChart"],
    bullets: [
      "Built a Java Swing desktop app to visualize investment growth using side-by-side JFreeChart graphs.",
      "Engineered portfolio logic to calculate asset performance using spot prices, quantities, and historical purchase data.",
      "Improved reliability through exception handling and input validation, ensuring consistent behavior for dynamic entries.",
    ],
  },
  {
    title: "GitFit",
    github: "https://github.com/CMPT-276-SPRING-2025/final-project-17-sunsets",
    categories: ["Web"],
    tech: ["React", "APIs", "LocalStorage", "CSS"],
    bullets: [
      "Led development of a full-stack fitness web app that generates personalized workouts using live weather data.",
      "Implemented weather-based workout and clothing recommendation systems using OpenWeatherMap and WGER APIs.",
      "Built city-specific weather search, step tracking, progress graphs, and a custom workout builder.",
    ],
  },
  {
    title: "Pothole Patrol",
    github: "https://github.com/JagrajG/pot-holes",
    categories: ["Web"],
    tech: ["Node.js", "Express", "MongoDB", "Linux"],
    bullets: [
      "Built a full-stack web app for crowdsourcing pothole reports with real-time status tracking.",
      "Developed RESTful APIs to handle submissions, geolocation, and civic issue updates.",
      "Hosted services on a Linux server using MongoDB for reliable data storage.",
    ],
  },
  {
    title: "BMP Viewer & Image Tool",
    github: "https://github.com/JagrajG/BMP-Viewer-and-Image-Manipulation-Tool",
    categories: ["Python"],
    tech: ["Python", "Tkinter", "BMP", "GUI"],
    bullets: [
      "Created a Python GUI tool with Tkinter to inspect and manipulate BMP image files.",
      "Parsed BMP headers manually and supported RGB toggling and brightness adjustments.",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    subtitle: "Savi Finance - May 2025 to Dec 2025",
    description:
      "Built full-stack features for a fintech SaaS platform with 1000+ users. Developed an AI-powered task scheduling system that ranked tasks by priority and immediacy, reducing manual planning time by 10%. Engineered shared React and React Native modules backed by MongoDB services, reducing release cycles by 15%. Integrated AWS S3 image uploads through GraphQL, improved upload reliability, and refactored login UI and validation flows to reduce user login errors by 45%.",
  },
  {
    title: "StormHacks 2024",
    subtitle: "SFU Hackathon - May 2024",
    description:
      "Directed a 2-person team during a 24-hour hackathon, dividing tasks and delivering a working full-stack application under strict time constraints. Designed and deployed REST APIs with Node.js and Express.js to enable real-time data updates.",
  },
];

const projectFilters = [
  { label: "All", icon: <FaLayerGroup /> },
  { label: "AI", icon: <FaRobot /> },
  { label: "Web", icon: <FaGlobe /> },
  { label: "Embedded", icon: <FaMicrochip /> },
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
];

const particles = Array.from({ length: 18 }, (_, index) => index + 1);

const LiquidRadarBackground = () => {
  return (
    <div className="design-background" aria-hidden="true">
      <div className="liquid-blob blob-one"></div>
      <div className="liquid-blob blob-two"></div>
      <div className="liquid-blob blob-three"></div>
      <div className="liquid-blob blob-four"></div>
      <div className="glass-noise"></div>

      <div className="particle-layer">
        {particles.map((particle) => (
          <span
            className={`particle particle-${particle}`}
            key={particle}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeSection, setActiveSection] = useState("bio");
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  const handleSectionChange = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
  };

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleProjectMouseMove = (e) => {
    if (window.innerWidth <= 900) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px) scale(1.006)`;
  };

  const handleProjectMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeProjectFilter),
        );

  return (
    <div className="hero" onMouseMove={handleHeroMouseMove}>
      <LiquidRadarBackground />

      <div className="hero-content">
        <div className="left-column">
          <h1 className="name">Jagraj Gill</h1>
          <h2 className="school">Computing Science @ SFU</h2>
          <h2 className="internship">SWE Intern @ Savi Finance</h2>
          <h2 class="location">Vancouver, BC</h2>

          <div className="icons">
            <a
              href="https://www.linkedin.com/in/jagraj-gill-49392416a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
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
              href="mailto:jsg51@sfu.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="/Resume.pdf"
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
          <div className="bio-box glass-card">
            <p>
              👋 I'm a third-year Computing Science major at Simon Fraser
              University. My passion for programming began in Grade 5 when my
              ICT teacher introduced me to Scratch. From that moment, I knew I
              wanted to pursue a future in technology.
            </p>

            <p>
              Before graduating high school, I made the decision to apply to
              Computing Science programs because I knew it was a field I was
              truly passionate about and would enjoy studying in depth. In my
              first year at SFU, I attended a hackathon where my team and I
              built a full-stack web application from scratch. It reminded me
              exactly why I fell in love with computing science.
            </p>

            <p>
              In my free time, I train Brazilian jiu-jitsu and kickboxing, which
              keep me disciplined, competitive, and focused. Outside of
              training, I enjoy listening to music, playing piano, and watching
              sports.
            </p>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="experience-scroll" key={activeSection}>
            {experiences.map((experience, index) => (
              <div
                className="experience-box glass-card experience-enter"
                style={{ "--experience-delay": `${index * 120}ms` }}
                key={experience.title}
              >
                <h2>{experience.title}</h2>
                <h4>{experience.subtitle}</h4>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeSection === "projects" && (
          <div className="project-panel">
            <div className="project-filters">
              {projectFilters.map((filter) => (
                <button
                  key={filter.label}
                  type="button"
                  className={
                    activeProjectFilter === filter.label
                      ? "filter active-filter"
                      : "filter"
                  }
                  onClick={() => setActiveProjectFilter(filter.label)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>

            <div
              className="project-scroll"
              key={`${activeSection}-${activeProjectFilter}`}
            >
              {filteredProjects.map((project, index) => (
                <div
                  className="project-box glass-card project-enter"
                  style={{ "--project-delay": `${index * 90}ms` }}
                  key={project.title}
                  onMouseMove={handleProjectMouseMove}
                  onMouseLeave={handleProjectMouseLeave}
                >
                  <h2>
                    {project.title}{" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FaGithub />
                    </a>
                  </h2>

                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
