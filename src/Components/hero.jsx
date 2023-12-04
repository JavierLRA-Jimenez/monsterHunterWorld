import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const bgStyle = {
    backgroundImage: `url('src/assets/2.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  const logoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: 'auto',
  };

  const buttonStyle = {
    position: 'absolute',
    right: '0',
    top: '0',
    transition: 'top 0.3s ease-in-out', // Agregar transición para el desplazamiento
    zIndex: '10',
  };
  

  const moveButton = () => {
    const button = document.getElementById('monstersButton');
    const text = document.getElementById('heroText');

    const buttonHeight = button.offsetHeight;
    const textHeight = text.offsetHeight;

    if (buttonHeight + 20 > textHeight) {
      const newPosition = textHeight + 20;
      button.style.top = `${newPosition}px`;
    }
  };

  return (
    <div style={bgStyle} className="relative">
      <img src="src/assets/3.png" alt="Logo" style={logoStyle} />
      <div
        id="heroText"
        className="inset-x-0 top-0 bg-black flex flex-col justify-center items-center h-32"
        onLoad={moveButton}
      >
        <div className="text-center mb-2">
          <h2 className="md:text-3xl text-xl font-bold font-serif ">
            ¡Developed to help novice hunters in this new adventure!
          </h2>
        </div>
        {/* Conditional rendering based on screen size for button position */}
        <div className="hidden md:block">
          <Link to="monsters" smooth={true} duration={500}>
            <button
              id="monstersButton"
              className="bg-red-700 text-white px-7 py-3 mt-2 mr-6 rounded font-serif"
            >
              <span className="font-bold">Monsters</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;