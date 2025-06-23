import React, { useState } from 'react';
import logo from '../assets/Vectary-logo-Full.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-serif p-4 shadow-md bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="Vectary Logo" className="h-5 w-auto md:h-8 sm:h-6" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>Product</li>
          <li>Enterprise</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        {/* Authitications Buttons */}
        <div className="hidden md:flex space-x-4 text-sm">
          <button className="bg-black text-white px-3 py-2 rounded">Login</button>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white  px-4 py-2 rounded">Sign up</button>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-black text-white px-1 py-1 rounded">
          {/* Simple icon with three lines */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
  {isOpen ? '✖' : '☰'}
</button>

        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pl-4 text-left space-y-4">
    <ul className="space-y-2 text-base font-medium">
      <li>Product</li>
      <li>Enterprise</li>
      <li>Solutions</li>
      <li>Resources</li>
      <li>Pricing</li>
    </ul>
          <div className="mt-4 space-y-2">
            <button className="block w-auto bg-black text-white px-4 py-2 rounded">Login</button>
            <button className="block w-auto bg-gradient-to-r from-purple-500 to-indigo-500  text-white px-4 py-2 rounded">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
