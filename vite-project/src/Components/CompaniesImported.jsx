import React from 'react';

// Import PNG logo images
import adobe from '../assets/icons/Adobe logo.png';
import unity from '../assets/icons/Unity.png';
import autodesk from '../assets/icons/Autodesk.png';
import blender from '../assets/icons/blender.png';
import figma from '../assets/icons/figma.png';
import rhino from '../assets/icons/Rhino.png';
import Frame from '../assets/icons/Frame.png';
import zbrush from '../assets/icons/zbrush.png';
import solidworks from '../assets/icons/solidworks logo.png';
import sketchfab from '../assets/icons/sketchfab.png';
import maya from '../assets/icons/maya.png';
import turbosquid from '../assets/icons/turbosquid.png';
import cinema4d from '../assets/icons/cinema4D.png';
import Sketch from '../assets/icons/Sketch logo.png';
import sketchup from '../assets/icons/sketchup.png';



const logos = [
  { src: adobe, alt: 'adobe' },
  { src: unity, alt: 'unity' },
  { src: autodesk, alt: 'autodesk' },
  { src: blender, alt: 'blender' },
  { src: figma, alt: 'figma' },
  { src: Frame, alt: 'frame' },
  { src: maya, alt: 'maya' },
  { src: zbrush, alt: 'zbrush' },
  { src: rhino, alt: 'rhino' },
  { src: sketchfab, alt: 'Sketchfab' },
  { src: sketchup, alt: 'Sketchfup' },
  { src: Sketch, alt: 'Sketch' },
  { src:solidworks,alt:'solidworks'},
  { src: turbosquid,alt:'turbosquid'},
  { src: cinema4d,alt:'cinema4d'}
];

const CompaniesImported = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto">
        Import to Vectary to edit and share
      </h2>

      <div className=" mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 object-contain"
            loading="lazy"
          />
        ))}
      </div>
      <h2 className="text-gray-400 mt-14 text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto">
        And hundreds more…
      </h2>
    </section>
  );
};

export default CompaniesImported;