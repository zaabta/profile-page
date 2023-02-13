import Particles from 'react-particles-js';

const Particles = () => {
  return (
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: false,
              value_area: 5000
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.5
          },
          size: {
            value: 1
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default Particles;
