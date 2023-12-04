import React, { useState, useEffect } from 'react';
import backgroundImage from './../assets/Ecosistema.webp'; // Ruta de tu imagen de fondo
import aptonoth from './../assets/aptonoth.webp';
import jagras from './../assets/jagras.webp';
import mernos from './../assets/mernos.webp';
import vespoid from './../assets/vespoid.webp';
import mosswine from './../assets/mosswine.webp';
import apceros from './../assets/apceros.webp';
import kestodon from './../assets/kestodon.webp';
import noios from './../assets/noios.webp';
import gajau from './../assets/gajau.png';
import kelbi from './../assets/kelbi.webp';
import raphinos from './../assets/raphinos.webp';
import shamos from './../assets/shamos.webp';
import girros from './../assets/girros.webp';
import hornetaur from './../assets/hornetaur.webp';
import gastodon from './../assets/gastodon.webp';
import barnos from './../assets/barnos.png';
import greatJagras from './../assets/great jagras.webp';
import kuluYaKu from './../assets/kulu-ya-ku.webp';
import pukeiPukei from './../assets/pukei-pukei.webp';
import barroth from './../assets/barroth.webp';
import jyuratodus from './../assets/jyuratodus.webp';
import tobiKadachi from './../assets/tobi-kadachi.webp';
import anjanath from './../assets/anjanath.webp';
import azureRathalos from './../assets/azure rathalos.webp';
import bazelgeuse from './../assets/bazelgeuse.png';
import behemoth from './../assets/behemoth.webp';
import deviljho from './../assets/deviljho.webp';
import diablos from './../assets/diablos.webp';
import blackDiablos from './../assets/black diablos.webp';
import dodogama from './../assets/dodogama.png';
import greatGirros from './../assets/great girros.webp';
import kirin from './../assets/kirin.webp';
import kulveTaroth from './../assets/kulve taroth.webp';
import kushalaDaora from './../assets/kushala daora.webp';
import lavasioth from './../assets/lavasioth.webp';
import legiana from './../assets/legiana.webp';
import lunastra from './../assets/lunastra.webp';
import nergigante from './../assets/nergigante.webp';
import odogaron from './../assets/odogaron.webp';
import paolumu from './../assets/paolumu.webp';
import radobaan from './../assets/radobaan.webp';
import rathalos from './../assets/rathalos.webp';
import rathian from './../assets/rathian.webp';
import pinkRathian from './../assets/pink rathian.webp';
import teostra from './../assets/teostra.webp';
import tzitziYaKu from './../assets/tzitzi-ya-ku.webp';
import uragaan from './../assets/uragaan.webp';
import vaalHazak from './../assets/vaal hazak.webp';
import xenoJiiva from './../assets/xeno\'jiiva.webp';
import zorahMagdaros from './../assets/zorah magdaros.webp';

const monsterImages = [
  aptonoth,
  jagras,
  mernos,
  vespoid,
  mosswine,
  apceros,
  kestodon,
  noios,
  gajau,
  kelbi,
  raphinos,
  shamos,
  girros,
  hornetaur,
  gastodon,
  barnos,
  greatJagras,
  kuluYaKu,
  pukeiPukei,
  barroth,
  jyuratodus,
  tobiKadachi,
  anjanath,
  azureRathalos,
  bazelgeuse,
  behemoth,
  deviljho,
  diablos,
  blackDiablos,
  dodogama,
  greatGirros,
  kirin,
  kulveTaroth,
  kushalaDaora,
  lavasioth,
  legiana,
  lunastra,
  nergigante,
  odogaron,
  paolumu,
  radobaan,
  rathalos,
  rathian,
  pinkRathian,
  teostra,
  tzitziYaKu,
  uragaan,
  vaalHazak,
  xenoJiiva,
  zorahMagdaros,];


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