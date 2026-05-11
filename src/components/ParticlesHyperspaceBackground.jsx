import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadHyperspacePreset } from "@tsparticles/preset-hyperspace";

const ParticlesHyperspaceBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadHyperspacePreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      preset: "hyperspace",
      background: {
        color: {
          value: "#ababab",
        },
      },
      particles: {
        color: {
          value: "#8f9df0",
        },
        move: {
          speed: 2,
        },
      },
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles-hyperspace"
      options={options}
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
