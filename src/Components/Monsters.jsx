import React, { useState, useEffect } from 'react';

import backgroundImage from './../assets/Ecosistema.webp'; // Ruta de tu imagen de fondo
const monsterImages = [
    'src/assets/aptonoth.webp',
    'src/assets/jagras.webp',
    'src/assets/mernos.webp',
    'src/assets/vespoid.webp',
    'src/assets/mosswine.webp',
    'src/assets/apceros.webp',
    'src/assets/kestodon.webp',
    'src/assets/noios.webp',
    'src/assets/gajau.png',
    'src/assets/kelbi.webp',

    'src/assets/raphinos.webp',
    'src/assets/shamos.webp',
    'src/assets/girros.webp',
    'src/assets/hornetaur.webp',
    'src/assets/gastodon.webp',
    'src/assets/barnos.png',
    'src/assets/great jagras.webp',
    'src/assets/kulu-ya-ku.webp',
    'src/assets/pukei-pukei.webp',
    'src/assets/barroth.webp',

    'src/assets/jyuratodus.webp',
    'src/assets/tobi-kadachi.webp',
    'src/assets/anjanath.webp',
    'src/assets/azure rathalos.webp',
    'src/assets/bazelgeuse.png',
    'src/assets/behemoth.webp',
    'src/assets/deviljho.webp',
    'src/assets/diablos.webp',
    'src/assets/black diablos.webp',
    'src/assets/dodogama.png',

    'src/assets/great girros.webp',
    'src/assets/kirin.webp',
    'src/assets/kulve taroth.webp',
    'src/assets/kushala daora.webp',
    'src/assets/lavasioth.webp',
    'src/assets/legiana.webp',
    'src/assets/lunastra.webp',
    'src/assets/nergigante.webp',
    'src/assets/odogaron.webp',
    'src/assets/paolumu.webp',

    'src/assets/radobaan.webp',
    'src/assets/rathalos.webp',
    'src/assets/rathian.webp',
    'src/assets/pink rathian.webp',
    'src/assets/teostra.webp',
    'src/assets/tzitzi-ya-ku.webp',
    'src/assets/uragaan.webp',
    'src/assets/vaal hazak.webp',
    "src/assets/xeno'jiiva.webp",
    'src/assets/zorah magdaros.webp',
    // ... (agrega las URL de las imágenes ficticias de los monstruos)
  ];
  const MonstersInfo = () => {
    const [allMonsters, setAllMonsters] = useState([]);
    const [expandedMonster, setExpandedMonster] = useState(null);
  
    useEffect(() => {
      // Obtener datos de los monstruos desde la API
      fetch('https://mhw-db.com/monsters')
        .then(response => response.json())
        .then(data => {
          setAllMonsters(data); // Guardar datos de los monstruos en el estado
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    }, []);
  
    const handleMonsterClick = (monster) => {
      setExpandedMonster(monster);
    };
  
    const handleClose = () => {
      setExpandedMonster(null);
    };
  
    return (
      <section
        className="flex flex-col justify-center items-center min-h-screen"
        id="monsters"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-wrap justify-center max-w-6xl bg-black bg-opacity-75 rounded-xl p-4 m-10">
          {monsterImages.map((image, index) => (
            <div
              key={index}
              className="w-1/4 md:w-1/8 lg:w-1/12 p-1"
            >
              <img
                src={image}
                alt={`Monster ${index + 1}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => handleMonsterClick(allMonsters[index])}
              />
            </div>
          ))}
        </div>
  
        {expandedMonster && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900  p-8 rounded-lg shadow-lg w-96">
            <img
              src={monsterImages.find((image) =>
                image.includes(expandedMonster.name.toLowerCase())
              )}
              alt={expandedMonster.name}
              style={{
                width: '150px',
                height: '150px',
                marginBottom: '20px',
              }}
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{expandedMonster.name}</h2>
              <p className="text-lg font-bold mb-2">Resistencias Elementales:</p>
              <p className="mb-2">
                {expandedMonster.resistances
                  .map((resistance) => resistance.element)
                  .join(', ')}
              </p>
              <p className="text-lg font-bold mb-2">Vulnerabilidades Elementales:</p>
              <p className="mb-2">
                {expandedMonster.weaknesses
                  .map((weakness) => weakness.element)
                  .join(', ')}
              </p>
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>
    );
  };
  
  export default MonstersInfo;