import React, { useState, useEffect, useRef, useMemo } from "react";
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
  FaYoutube,
  FaStar,
  FaMobileAlt,
} from "react-icons/fa";
import "./Hero.css";

const projects = [
  {
    title: "HTTP Web Server",
    github: "https://github.com/JagrajG/HTTP-Server",
    categories: ["C", "Web"],
    tech: ["C++", "TCP/IP", "HTTP"],
    bullets: [
      "Engineered a low-level C++ HTTP server via POSIX sockets, handling TCP connections and serving static HTML, CSS, JavaScript, and image files.",
      "Delivered full GET, POST, and DELETE support with spec-compliant status codes and response headers.",
      "Implemented MIME detection, POST parsing, and error handling for reliable, debuggable request processing.",
      "Enabled concurrent browser and curl client support via poll()-based non-blocking I/O without threads.",
    ],
  },
  {
    title: "FirstCall",
    github: "https://github.com/JagrajG/FirstCall",
    categories: ["Mobile"],
    tech: ["Swift", "SwiftUI", "AVFoundation", "Speech Framework"],
    bullets: [
      "Developed an offline iOS app that teaches children how to call 911 through realistic dispatcher simulations.",
      "Integrated Apple's Speech framework for real-time speech recognition, with AVFoundation text-to-speech delivering dispatcher prompts.",
      "Designed a branching conversation system that dynamically routes callers through emergency-specific flows.",
      "Recreated the full emergency call experience, from a locked-screen emergency dialer to a dispatcher call flow.",
    ],
  },
  {
    title: "Memory Allocator",
    github: "https://github.com/JagrajG/Memory-Allocator",
    categories: ["C"],
    tech: ["C"],
    bullets: [
      "Built a fixed-size memory allocator in C that manages allocations inside a 4096-byte heap using block headers, pointer arithmetic, and a linked list of memory blocks.",
      "Implemented custom allocation and free operations with first-fit block reuse, reducing unnecessary heap growth by reusing previously freed memory.",
      "Developed a heap inspection utility that prints block sizes, allocation status, and linked-list structure, improving visibility into memory usage and allocator behavior.",
    ],
  },
  {
    title: "Smart Environmental Monitoring System",
    github: "https://github.com/JagrajG/ESP32-Temp-Monitor",
    categories: ["Embedded", "Web"],
    tech: ["C", "JavaScript", "SQLite", "FastAPI"],
    bullets: [
      "Built a full-stack IoT monitoring system that streamed live temperature and humidity readings from an embedded sensor device to a web dashboard.",
      "Developed a FastAPI backend that ingested JSON sensor data over Wi-Fi, storing readings in SQLite and powering a live JavaScript dashboard with 24-hour trend views.",
      "Designed fault-tolerant data ingestion that handled connection failures without crashing or failing silently.",
    ],
  },
  {
    title: "AI-Powered Study Assistant",
    github: "https://github.com/JagrajG/AI-Study-pal",
    demo: "https://youtu.be/62ppEQOdBvI",
    categories: ["AI", "Web"],
    tech: ["Python", "JavaScript", "FastAPI", "Gemini API"],
    bullets: [
      "Engineered a PDF-to-flashcard pipeline via PyPDF and Gemini API, automating study material generation and cutting manual prep from hours to seconds.",
      "Enforced a strict JSON schema requiring all flashcard fields, reducing incomplete and malformed AI output.",
      "Built Python validation to reject empty or malformed flashcard content before it reached the UI.",
      "Developed an interactive flashcard UI in JavaScript with flip animations and keyboard navigation.",
    ],
  },
  {
    title: "Wireless 4-DOF Robotic Arm",
    github: "https://github.com/JagrajG/ESP-32-Arm",
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

const categoryIcons = {
  AI: <FaRobot />,
  Web: <FaGlobe />,
  Embedded: <FaMicrochip />,
  Mobile: <FaMobileAlt />,
  Java: <FaJava />,
  Python: <FaPython />,
  C: <FaLayerGroup />,
};

const projectFilters = [
  { label: "All", icon: <FaLayerGroup /> },
  { label: "AI", icon: <FaRobot /> },
  { label: "Web", icon: <FaGlobe /> },
  { label: "Embedded", icon: <FaMicrochip /> },
  { label: "Mobile", icon: <FaMobileAlt /> },
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
];

const menuItems = [
  { id: "bio", label: "Bio" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const CrtFrame = () => (
  <div className="crt-frame" aria-hidden="true">
    <div className="crt-scanlines"></div>
    <div className="crt-vignette"></div>
  </div>
);

/* ===== Ambient arcade cast: a small, sparse rotation of NES-style sprites
   drifting through the void behind the content. Pure CSS pixel art via the
   box-shadow technique, so it stays crisp and needs no image assets. ===== */

const PIXEL_UNIT = 4;

const INVADER_ROWS = [
  "..#.....#..",
  "...#...#...",
  "..#######..",
  ".##.###.##.",
  "###########",
  "#.#######.#",
  "#.#.....#.#",
  "...##.##...",
];

const ROCKET_ROWS = ["##....", "#####.", "######", "#####.", "##...."];
const ROCKET_ROWS_MIRRORED = ROCKET_ROWS.map((row) =>
  row.split("").reverse().join(""),
);

const BURST_ROWS = ["#.#", ".#.", "#.#"];

const DINO_ROWS = [
  "......##....",
  ".....####...",
  ".....#.####.",
  ".....######.",
  "##....######",
  ".#....######",
  "......##.##.",
];

const CACTUS_ROWS = [".#.", "###", ".#.", ".#.", "###", ".#."];

const FLOPPY_ROWS = [
  ".######.",
  "########",
  "#.####.#",
  "#.####.#",
  "#.####.#",
  "#......#",
  "#.####.#",
  "########",
];

const SWORD_ROWS = [
  "...#...",
  "...#...",
  "...#...",
  "..###..",
  ".#####.",
  "...#...",
  "..#.#..",
];

const COIN_ROWS = [".####.", "##..##", "#.##.#", "#.##.#", "##..##", ".####."];

const CLOUD_ROWS = [
  "..####......",
  ".########...",
  "############",
  ".##########.",
];

const GEM_ROWS = ["..#..", ".###.", "#####", ".###.", "..#.."];

const PACMAN_ROWS = [
  "..####.",
  ".######",
  "###....",
  "####...",
  "###....",
  ".######",
  "..####.",
];

const EXPLOSION_ROWS = [
  "#.....#",
  ".#...#.",
  "..#.#..",
  "...#...",
  "..#.#..",
  ".#...#.",
  "#.....#",
];

const pixelShadow = (rows, colorVar) => {
  const dots = [];
  rows.forEach((row, y) => {
    row.split("").forEach((cell, x) => {
      if (cell === "#") {
        dots.push(
          `${x * PIXEL_UNIT}px ${y * PIXEL_UNIT}px 0 0 var(${colorVar})`,
        );
      }
    });
  });
  return dots.join(", ");
};

const PixelSprite = ({ rows, colorVar, className }) => (
  <span
    className={className}
    style={{
      display: "block",
      width: PIXEL_UNIT,
      height: PIXEL_UNIT,
      boxShadow: pixelShadow(rows, colorVar),
    }}
  />
);

const randomBetween = (min, max) => min + Math.random() * (max - min);

const ArcadeBackground = () => {
  const scene = useMemo(
    () => ({
      invaderA: {
        top: randomBetween(5, 16),
        delay: randomBetween(-30, 6),
        duration: randomBetween(34, 44),
      },
      invaderB: {
        top: randomBetween(20, 32),
        delay: randomBetween(-38, 6),
        duration: randomBetween(38, 50),
      },
      duel: {
        top: randomBetween(40, 54),
        delay: randomBetween(-34, 6),
        duration: randomBetween(42, 50),
      },
      dino: {
        delay: randomBetween(-30, 6),
        duration: randomBetween(30, 38),
      },
      chase: {
        top: randomBetween(60, 76),
        delay: randomBetween(-42, 6),
        duration: randomBetween(36, 46),
      },
      pacman: {
        top: randomBetween(34, 38),
        delay: randomBetween(-46, 6),
        duration: randomBetween(40, 52),
      },
    }),
    [],
  );

  return (
    <div className="arcade-bg" aria-hidden="true">
      <div
        className="arcade-sprite arcade-drift-right"
        style={{
          "--sprite-top": `${scene.invaderA.top}%`,
          "--sprite-delay": `${scene.invaderA.delay}s`,
          "--sprite-duration": `${scene.invaderA.duration}s`,
        }}
      >
        <PixelSprite rows={INVADER_ROWS} colorVar="--color-magenta" />
      </div>

      <div
        className="arcade-sprite arcade-drift-left"
        style={{
          "--sprite-top": `${scene.invaderB.top}%`,
          "--sprite-delay": `${scene.invaderB.delay}s`,
          "--sprite-duration": `${scene.invaderB.duration}s`,
        }}
      >
        <PixelSprite rows={INVADER_ROWS} colorVar="--color-magenta" />
      </div>

      <div
        className="arcade-duel"
        style={{
          "--sprite-top": `${scene.duel.top}%`,
          "--sprite-delay": `${scene.duel.delay}s`,
          "--sprite-duration": `${scene.duel.duration}s`,
        }}
      >
        <div className="arcade-sprite arcade-rocket-a">
          <PixelSprite rows={ROCKET_ROWS} colorVar="--color-gold" />
        </div>
        <div className="arcade-sprite arcade-rocket-b">
          <PixelSprite rows={ROCKET_ROWS_MIRRORED} colorVar="--color-cyan" />
        </div>
        <div className="arcade-sprite arcade-burst">
          <PixelSprite rows={BURST_ROWS} colorVar="--color-gold" />
        </div>
      </div>

      <div
        className="arcade-sprite arcade-dino"
        style={{
          "--sprite-delay": `${scene.dino.delay}s`,
          "--sprite-duration": `${scene.dino.duration}s`,
        }}
      >
        <PixelSprite rows={DINO_ROWS} colorVar="--color-green" />
      </div>

      <div className="arcade-cactus">
        <PixelSprite rows={CACTUS_ROWS} colorVar="--color-green-shadow" />
      </div>

      <div
        className="arcade-chase"
        style={{
          "--sprite-top": `${scene.chase.top}%`,
          "--sprite-delay": `${scene.chase.delay}s`,
          "--sprite-duration": `${scene.chase.duration}s`,
        }}
      >
        <div className="arcade-sprite arcade-chase-invader">
          <PixelSprite rows={INVADER_ROWS} colorVar="--color-green" />
        </div>
        <div className="arcade-sprite arcade-chase-rocket">
          <PixelSprite rows={ROCKET_ROWS} colorVar="--color-cyan" />
        </div>
        <div className="arcade-sprite arcade-chase-blast">
          <PixelSprite rows={EXPLOSION_ROWS} colorVar="--color-gold" />
        </div>
      </div>

      <div
        className="arcade-sprite arcade-drift-right arcade-pacman"
        style={{
          "--sprite-top": `${scene.pacman.top}%`,
          "--sprite-delay": `${scene.pacman.delay}s`,
          "--sprite-duration": `${scene.pacman.duration}s`,
        }}
      >
        <PixelSprite rows={PACMAN_ROWS} colorVar="--color-gold" />
      </div>
    </div>
  );
};

/* ===== Title screen: arcade attract-mode marquee. One dominant idea,
   full-bleed, drenched in the master palette. ===== */

const TitleScreen = ({ innerRef }) => (
  <section className="title-screen" id="top" ref={innerRef}>
    <div className="title-starfield" aria-hidden="true" />

    <p className="title-kicker">PLAYER 1 READY</p>

    <h1 className="title-marquee">
      <span>JAGRAJ</span>
      <span>GILL</span>
    </h1>

    <p className="title-tagline">Computing Science @ SFU</p>

    <ul className="title-stats" aria-label="Quick facts">
      <li>Incoming SWE Intern @ Aquanow</li>
      <li>Prev SWE Intern @ Savi Finance</li>
      <li>Vancouver, BC</li>
    </ul>

    <div className="title-actions">
      <a
        href="mailto:jsg51@sfu.ca"
        className="pixel-button pixel-button--gold pixel-button--wide"
      >
        <FaEnvelope /> CONTACT ME
      </a>
      <a
        href="https://www.linkedin.com/in/jagraj-gill-49392416a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="pixel-button pixel-button--cyan"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/JagrajG"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="pixel-button pixel-button--cyan"
      >
        <FaGithub />
      </a>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className="pixel-button pixel-button--cyan"
      >
        <FaFileAlt />
      </a>
    </div>

    <nav className="title-nav" aria-label="Jump to section">
      {menuItems.map((item) => (
        <a key={item.id} href={`#${item.id}`} className="title-nav-pill">
          {item.label.toUpperCase()}
        </a>
      ))}
    </nav>

    <a
      href="#bio"
      className="title-scroll-cue"
      aria-hidden="true"
      tabIndex={-1}
    >
      <span>PRESS START</span>
      <span className="title-scroll-arrow">&#9660;</span>
    </a>
  </section>
);

/* ===== HUD nav: sticky top bar that surfaces once the title screen scrolls
   out of view, so contact + navigation stay reachable from anywhere. ===== */

const HudNav = ({ activeSection, visible }) => (
  <header
    className={`hud-nav${visible ? " hud-nav--visible" : ""}`}
    aria-hidden={!visible}
  >
    <a href="#top" className="hud-logo">
      JG
    </a>
    <nav className="hud-links" aria-label="Site sections">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`hud-link${activeSection === item.id ? " hud-link--active" : ""}`}
        >
          {item.label.toUpperCase()}
        </a>
      ))}
    </nav>
    <a href="mailto:jsg51@sfu.ca" className="hud-cta">
      CONTACT
    </a>
  </header>
);

const SectionBanner = ({ label, accent }) => (
  <h2 className={`level-banner level-banner--${accent}`}>{label}</h2>
);

const SectionMascot = ({ rows, colorVar, side }) => (
  <div className={`section-mascot section-mascot--${side}`} aria-hidden="true">
    <PixelSprite rows={rows} colorVar={colorVar} />
  </div>
);

/* Slow-drifting pixel clouds and gems — a classic platformer parallax
   background layer, continuous rather than rare like the arcade cast, so
   each zone always has a little world moving quietly behind it. */

const SectionClouds = ({ colorVar, gemColorVar }) => {
  const scene = useMemo(
    () => ({
      clouds: [0, 1, 2].map(() => ({
        top: randomBetween(6, 40),
        delay: randomBetween(-70, 0),
        duration: randomBetween(55, 85),
        scale: randomBetween(0.8, 1.6),
      })),
      gems: [0, 1].map(() => ({
        top: randomBetween(55, 92),
        delay: randomBetween(-30, 0),
        duration: randomBetween(6, 9),
        left: randomBetween(6, 90),
      })),
    }),
    [],
  );

  return (
    <div className="section-clouds" aria-hidden="true">
      {scene.clouds.map((cloud, index) => (
        <span
          key={`cloud-${index}`}
          className="section-cloud"
          style={{
            "--cloud-top": `${cloud.top}%`,
            "--cloud-delay": `${cloud.delay}s`,
            "--cloud-duration": `${cloud.duration}s`,
            "--cloud-scale": cloud.scale,
          }}
        >
          <PixelSprite rows={CLOUD_ROWS} colorVar={colorVar} />
        </span>
      ))}
      {scene.gems.map((gem, index) => (
        <span
          key={`gem-${index}`}
          className="section-gem"
          style={{
            "--gem-top": `${gem.top}%`,
            "--gem-left": `${gem.left}%`,
            "--gem-delay": `${gem.delay}s`,
            "--gem-duration": `${gem.duration}s`,
          }}
        >
          <PixelSprite rows={GEM_ROWS} colorVar={gemColorVar} />
        </span>
      ))}
    </div>
  );
};

const Hero = () => {
  const [activeSection, setActiveSection] = useState("bio");
  const [hudVisible, setHudVisible] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const titleRef = useRef(null);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHudVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeProjectFilter),
        );

  return (
    <div className="hero">
      <ArcadeBackground />
      <CrtFrame />
      <HudNav activeSection={activeSection} visible={hudVisible} />

      <TitleScreen innerRef={titleRef} />

      <main className="hero-content">
        <section className="content-section content-section--bio" id="bio">
          <SectionClouds colorVar="--color-cyan" gemColorVar="--color-gold" />
          <SectionMascot
            rows={FLOPPY_ROWS}
            colorVar="--color-cyan"
            side="right"
          />
          <div className="content-section-inner">
            <SectionBanner label="BIO.TXT" accent="cyan" />
            <div className="dialogue-box pixel-panel panel-enter">
              <p>
                Hey there! I'm a third-year Computing Science major at Simon
                Fraser University. My passion for programming began in Grade 5
                when my ICT teacher introduced me to Scratch. From that moment,
                I knew I wanted to pursue a future in technology.
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
                In my free time, I train Brazilian jiu-jitsu and kickboxing,
                which keep me disciplined, competitive, and focused. Outside of
                training, I enjoy listening to music, playing piano, and
                watching sports.
                <span className="dialogue-cursor" aria-hidden="true">
                  &#9608;
                </span>
              </p>
            </div>
          </div>
        </section>

        <section
          className="content-section content-section--experience"
          id="experience"
        >
          <SectionClouds
            colorVar="--color-magenta"
            gemColorVar="--color-cyan"
          />
          <SectionMascot
            rows={SWORD_ROWS}
            colorVar="--color-magenta"
            side="left"
          />
          <div className="content-section-inner">
            <SectionBanner label="EXPERIENCE" accent="magenta" />
            <div className="quest-log">
              {experiences.map((experience, index) => (
                <div
                  className="quest-entry pixel-panel pixel-panel--magenta panel-enter"
                  style={{ "--panel-delay": `${index * 100}ms` }}
                  key={experience.title}
                >
                  <div className="quest-entry-header">
                    <FaStar className="quest-star" aria-hidden="true" />
                    <h3>{experience.title}</h3>
                  </div>
                  <h4>{experience.subtitle}</h4>
                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section content-section--projects"
          id="projects"
        >
          <SectionClouds
            colorVar="--color-gold"
            gemColorVar="--color-magenta"
          />
          <SectionMascot
            rows={COIN_ROWS}
            colorVar="--color-gold"
            side="right"
          />
          <div className="content-section-inner">
            <SectionBanner label="PROJECTS" accent="gold" />
            <div className="level-select">
              <div className="project-filters-row">
                <div className="project-filters">
                  {projectFilters.map((filter) => (
                    <button
                      key={filter.label}
                      type="button"
                      className={`filter-chip${
                        activeProjectFilter === filter.label
                          ? " filter-chip--active"
                          : ""
                      }`}
                      onClick={() => setActiveProjectFilter(filter.label)}
                    >
                      <span className="filter-chip-icon">{filter.icon}</span>
                      <span>{filter.label}</span>
                    </button>
                  ))}
                </div>
                <p className="level-count">
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1 ? "LEVEL" : "LEVELS"} FOUND
                </p>
              </div>

              <div className="project-grid" key={activeProjectFilter}>
                {filteredProjects.map((project, index) => (
                  <div
                    className="stage-tile pixel-panel pixel-panel--gold panel-enter"
                    style={{ "--panel-delay": `${index * 70}ms` }}
                    key={project.title}
                  >
                    <div className="stage-tile-badges" aria-hidden="true">
                      {project.categories.map((cat) => (
                        <span className="stage-badge" key={cat}>
                          {categoryIcons[cat]}
                        </span>
                      ))}
                    </div>

                    <h3>
                      {project.title}{" "}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          aria-label={`${project.title} Demo Video`}
                        >
                          <FaYoutube />
                        </a>
                      )}
                    </h3>

                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span className="tech-pill" key={tech}>
                          {tech}
                        </span>
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
          </div>
        </section>
      </main>

      <footer className="game-over-cta">
        <p className="game-over-label">GAME OVER</p>
        <h2 className="game-over-title">CONTINUE?</h2>
        <p className="game-over-copy">Find more of me here</p>
        <div className="game-over-actions">
          <a
            href="mailto:jsg51@sfu.ca"
            className="pixel-button pixel-button--gold pixel-button--wide"
          >
            <FaEnvelope /> EMAIL ME
          </a>
          <a
            href="https://www.linkedin.com/in/jagraj-gill-49392416a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="pixel-button pixel-button--cyan"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JagrajG"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="pixel-button pixel-button--cyan"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
