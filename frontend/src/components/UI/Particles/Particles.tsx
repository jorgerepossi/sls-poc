import React from "react";
import Particles from "react-tsparticles";

export const ParticlesRandom = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "",
          },
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        backgroundMode: {
          enable: false,
          zIndex: -1,
        },
        detectRetina: true,
        fpsLimit: 60,
        infection: {
          cure: false,
          delay: 0,
          enable: false,
          infections: 0,
          stages: [],
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              selectors: "#repulse-div",
              enable: false,
              mode: "repulse",
              type: "circle",
            },
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            bounce: {
              distance: 100,
            },
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 90,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 1,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              quantity: 1,
            },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: false,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
          },
          color: {
            value: "#ffffff",
            animation: {
              enable: false,
              speed: 1,
              sync: true,
            },
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          links: {
            blink: false,
            color: {
              value: "#000",
            },
            consent: false,
            distance: 150,
            enable: false,
            frequency: false,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "#00ff00",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: false,
            },
            width: 1,
            warp: false,
          },
          move: {
            angle: {
              offset: 45,
              value: 90,
            },
            attract: {
              enable: false,
              rotate: {
                x: 200,
                y: 800,
              },
            },
            direction: "none",
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50,
            },

            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 10,
          },

          reduceDuplicates: false,
          rotate: {
            random: {
              enable: true,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
            direction: "random",
            path: false,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                sides: 5,
              },
              star: {
                sides: 10,
              },
              image: [
                {
                  src:
                    "http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_02.png?width=100&height=100,http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png",
                },
                {
                  src:
                    "http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_03.png?width=100&height=100,http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png",
                },
                {
                  src:
                    "http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png?width=100&height=100,http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png",
                },
                {
                  src:
                    "http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_04.png?width=100&height=100,http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png",
                },
                {
                  src:
                    "http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_05.png?width=100&height=100,http://zircona.wgl-demo.net/wp-content/uploads/2020/04/particles_01.png",
                },
              ],
            },
            type: "image",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 4,
            },
            value: 80,
            animation: {
              destroy: "",
              enable: false,
              minimumValue: 0.1,
              speed: 20,
              startValue: "max",
              sync: false,
            },
          },
          stroke: {
            width: 0,
            color: {
              value: "#000000",
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: false,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: false,
        themes: [],
      }}
    ></Particles>
  );
};
