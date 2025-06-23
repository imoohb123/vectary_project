import React from 'react';

// Import PNG logo images
import panasonic from '../assets/logos/Panasonic.png';
import sharp from '../assets/logos/sharp.png';
import ktm from '../assets/logos/ktm.png'
import steelcase from '../assets/logos/steelcase.png';
import coolermaster from '../assets/logos/cooler master.png';
import kimberlyclark from '../assets/logos/kimberly clark.png';
import sgk from "../assets/logos/SGK.png"
import milwaukee from '../assets/logos/milwaukee.png';
import pininfarina from '../assets/logos/pininfarina.png'
import nasa from '../assets/logos/nasa.png';
import imperial from '../assets/logos/imperial.png'
import ingenico from '../assets/logos/ingenico.png';
import schumacher from '../assets/logos/schumacher.png'
import specsavers from '../assets/logos/specsavers.png';
import wayne from '../assets/logos/wayne.png';
import tulfa from '../assets/logos/tulfa.png';

const logos = [
  { src: panasonic, alt: 'Panasonic' },
  { src: sharp, alt: 'Sharp' },
  { src: ktm, alt: 'KTM' },
  { src: steelcase, alt: 'Steelcase' },
  { src: coolermaster, alt: 'Cooler Master' },
  { src: kimberlyclark, alt: 'Kimberly-Clark' },
  { src: sgk, alt: 'sgk'},
  { src: milwaukee, alt: 'Milwaukee' },
  {src: pininfarina,alt:'pininfarina'},
  { src: nasa, alt: 'NASA' },
  { src:imperial,alt:'imperial'},
  { src: ingenico, alt: 'Ingenico' },
  { src:schumacher,alt:'schumacher'},
  { src: specsavers, alt: 'Specsavers' },
  { src: wayne, alt: 'Wayne' },
  { src: tulfa, alt: 'Tulfa' },
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-gray-800 text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto">
        Find out why more than <strong className="text-black">4 million users trust Vectary</strong> to bring teams, ideas, and 3D design into one effective workflow.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
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
    </section>
  );
};

export default TrustedBy;
