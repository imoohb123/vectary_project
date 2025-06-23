import React from 'react';
import youtubeIcon from '../assets/youtube.png'
import linkedinIcon from '../assets/linkedin logo.png'
import instagramIcon from '../assets/instagram logo.png'
import X_logo from '../assets/X logo.png'
import facebookIcon from  '../assets/facebook logo.png'
import footer from '../assets/footer__logo.svg'

 


const Footer = () => {
  return (
    <footer className="bg-[#252525] text-gray-500  px-6 py-12 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-8 text-sm ">
        {/* Logo Section */}
        <div>
            <img className='mb-4' src={footer} alt="" />
          
          <ul className="space-y-2 text-[15px]">
            <li className='hover:text-white'>Contact us</li>
            <li className='hover:text-white'>Pricing</li>
            <li className='hover:text-white'>Security</li>
            <li className='hover:text-white'>Careers</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Features</h4>
          <ul className="space-y-2 text-[15px]">
            <li className='hover:text-white'> CAD importing</li>
            <li className='hover:text-white'>Configurators</li>
            <li className='hover:text-white'>Sharing & embedding</li>
            <li className='hover:text-white'> Integrations</li>
            <li className='hover:text-white'>Augmented Reality</li>
            <li className='hover:text-white'>API</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Enterprise</h4>
          <ul className="space-y-2 text-[15px]">
            <li className='hover:text-white'>Team solutions</li>
            <li className='hover:text-white'>Workspaces</li>
            <li className='hover:text-white'>Use cases</li>
            <li className='hover:text-white'>Contact sales</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Industries</h4>
          <ul className="space-y-2 text-[15px]">
            <li  className='hover:text-white'>Automotive</li>
            <li className='hover:text-white'>Cycling</li>
            <li className='hover:text-white'>Electronics</li>
            <li className='hover:text-white'>Manufacturing</li>
            <li className='hover:text-white'>Furniture</li>
            <li className='hover:text-white'>Fashion</li>
            <li className='hover:text-white'>Consumer products</li>
            <li className='hover:text-white'>Agencies</li>
            <li  className='hover:text-white'>Events</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Resources</h4>
          <ul className="space-y-2 text-[15px]">
            <li className='hover:text-white'>Blog</li>
            <li className='hover:text-white'>Case studies</li>
            <li className='hover:text-white'>Tutorials</li>
            <li className='hover:text-white'>Help center</li>
            <li className='hover:text-white'>Discord</li>
            <li className='hover:text-white'>Examples</li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Blog</h4>
          <ul className="space-y-2 text-[15px]">
            <li className='hover:text-white'>Amplify the impact of CAD files</li>
            <li className='hover:text-white'>5 tips on hotspots alternative</li>
            <li className='hover:text-white'>The power of Business workspaces</li>
            <li className='hover:text-white'>Best 3D workflow for product development</li>
            <li className='hover:text-white'>Improved 3D workflow</li>
            <li className='hover:text-white'>Why you need a digital twin</li>
            <li className='hover:text-white'>Exploded view animations are a game changer</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" ml-29 mt-20 pt-6 flex flex-col md:flex-row  justify-around   text-sm text-gray-500 mb-20 text-[15px]">
        <p>© 2025 Vectary Inc. All rights reserved</p>
        <div className=" mr-72 flex gap-8 mt-2 md:mt-0">
          <span className='hover:text-white text-[15px]'>Terms of Service</span>
          <span className='hover:text-white text-[15px]'>Privacy Policy</span>
          <span className='hover:text-white text-[15px]'> Cookie Policy</span>
        </div>
        {/* Socials */}
        <div className="flex gap-4 mt-4 md:mt-0">
  <img src={youtubeIcon} alt="YouTube" className="w-7 h-7" />
  <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
  <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
  <img src={X_logo} alt="Twitter/X" className="w-7 h-7" />
  <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
</div>
      </div>
    </footer>
  );
};

export default Footer;

