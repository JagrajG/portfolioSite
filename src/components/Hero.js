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
    title: "AI Study Pal",
    github: "https://github.com/JagrajG",
    categories: ["AI", "Web"],
    tech: ["Python", "FastAPI", "Gemini API", "JavaScript"],
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
    tech: ["ESP32", "C++", "Embedded", "PWM"],
    bullets: [
      "Designed and fabricated a 4-DOF robotic arm using ESP32 microcontrollers, MG90S servos, and 3D-printed components.",
      "Developed embedded C++ control software for analog sensor input and real-time actuator control.",
      "Implemented wireless communication between dual ESP32 devices for synchronized motion.",
      "Built a modular architecture to support future inverse kinematics and sensor upgrades.",
    ],
  },
  {
    title: "Investment Tracker",
    github: "https://github.com/JagrajG/InvestmentTracker",
    categories: ["Java"],
    tech: ["Java", "Swing", "JFreeChart", "SQLite"],
    bullets: [
      "Built a Java Swing desktop app to visualize investment growth using side-by-side charts.",
      "Engineered portfolio logic to calculate asset performance from live spot prices and purchase data.",
      "Improved reliability with exception handling and input validation for dynamic asset entries.",
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

const projectFilters = [
  {
    label: "All",
    icon: <FaLayerGroup />,
  },
  {
    label: "AI",
    icon: <FaRobot />,
  },
  {
    label: "Web",
    icon: <FaGlobe />,
  },
  {
    label: "Embedded",
    icon: <FaMicrochip />,
  },
  {
    label: "Java",
    icon: <FaJava />,
  },
  {
    label: "Python",
    icon: <FaPython />,
  },
];

const CircuitBackground = () => {
  return (
    <svg
      className="circuit-background"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g className="circuit-group circuit-group-one">
        <path d="M80 120 H280 V210 H430" />
        <path d="M160 620 H330 V510 H520 V430 H680" />
        <path d="M760 160 H940 V260 H1080" />
        <path d="M700 650 H860 V560 H1040" />
        <path d="M250 330 H430 V270 H560" />

        <circle cx="80" cy="120" r="5" />
        <circle cx="280" cy="210" r="5" />
        <circle cx="430" cy="210" r="5" />
        <circle cx="520" cy="510" r="5" />
        <circle cx="680" cy="430" r="5" />
        <circle cx="940" cy="260" r="5" />
        <circle cx="1080" cy="260" r="5" />
        <circle cx="1040" cy="560" r="5" />
        <circle cx="560" cy="270" r="5" />
      </g>

      <g className="circuit-group circuit-group-two">
        <path d="M40 390 H210 V470 H360" />
        <path d="M500 90 V190 H640 V300 H780" />
        <path d="M830 360 H980 V450 H1160" />
        <path d="M110 720 H300 V665 H460 V600 H620" />
        <path d="M650 730 H780 V670 H940 V610 H1110" />

        <circle cx="40" cy="390" r="4" />
        <circle cx="210" cy="470" r="4" />
        <circle cx="360" cy="470" r="4" />
        <circle cx="500" cy="90" r="4" />
        <circle cx="640" cy="190" r="4" />
        <circle cx="780" cy="300" r="4" />
        <circle cx="1160" cy="450" r="4" />
        <circle cx="620" cy="600" r="4" />
        <circle cx="1110" cy="610" r="4" />
      </g>
    </svg>
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
      <CircuitBackground />

      <div className="hero-content">
        <div className="left-column">
          <h1 className="name">Jagraj Gill</h1>
          <h2 className="school">Computer Science @ SFU</h2>
          <h2 className="internship">SWE Intern @ Savi Finance</h2>

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

            <div className="project-scroll">
              {filteredProjects.map((project) => (
                <div
                  className="project-box"
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
