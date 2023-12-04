import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import backgroundImage from './../assets/2.jpg'; // Importa la imagen para el fondo
import logo from './../assets/3.png'; // Importa la imagen del logo

const Hero = () => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`, // Utiliza la URL de la imagen para el fondo
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

  useEffect(() => {
    moveButton();
  }, []); // Llama a moveButton() una vez que el componente esté montado

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
      <img src={logo} alt="Logo" style={logoStyle} />
      <div
        id="heroText"
        className="inset-x-0 top-0 bg-black flex flex-col justify-center items-center h-32"
      >
        <div className="text-center mb-2">
          <h2 className="md:text-3xl text-xl font-bold font-serif">
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