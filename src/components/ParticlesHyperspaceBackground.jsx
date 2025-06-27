import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";

const ParticlesHyperspaceBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadHyperspacePreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-hyperspace"
      init={particlesInit}
      options={{
        preset: "hyperspace",
        background: {
          color: "#ababab",
        },
        particles: {
          color: {
            value: "#8f9df0",
          },
          move: {
            speed: 2,
          },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParticlesHyperspaceBackground;
