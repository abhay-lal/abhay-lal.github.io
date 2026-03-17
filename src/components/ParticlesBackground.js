import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: 'transparent',
      },
      fpsLimit: 60,
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.32,
            },
          },
        },
      },
      particles: {
        color: {
          value: ['#6d79c9', '#5b67b6', '#557aaa'],
        },
        links: {
          color: '#6170bf',
          distance: 135,
          enable: true,
          opacity: 0.12,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 62,
        },
        opacity: {
          value: {
            min: 0.05,
            max: 0.22,
          },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!engineReady) {
    return null;
  }

  return (
    <div className="particles-background" aria-hidden="true">
      <Particles id="site-particles" options={options} />
    </div>
  );
};

export default ParticlesBackground;
