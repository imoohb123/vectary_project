import React from 'react'
import heroimg from '../assets/heroimage.jpg'
import computer from '../assets/computer.png'

function Hero() {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="mt-8 font-sans text-5xl md:text-5xl lg:text-7xl font-bold mb-4">
        Vectary redefines how teams access, use and share 3D designs
      </h1>
      <p className="max-w-3xl mx-auto text-lg mb-8">
        Meet Vectary, an online platform for creating and managing interactive 3D and AR designs..... <span className=' font-bold'>No downloads, no-code: all in the browser.</span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <button className="border px-6 py-2 rounded border-indigo-600 text-indigo-600">Create Account</button>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded">Try Workspaces</button>
 </div>
 <div className="flex justify-center">
        <img 
          src={heroimg}
          alt="hero-img"
          className="w-full max-w-7xl rounded shadow-lg"
        />
      </div>
      <h3 className=" mt-8 font-serif text-[15px] md:text-[15px] font-bold mb-4">
        POWERFUL FEATURES
      </h3>
      <h1 className=" mt-16 font-sans text-5xl md:text-5xl font-bold mb-4">
        Everything your 3D workflow needs
      </h1>
      <p className="max-w-8xl mx-auto text-lg mb-8">
        Model, import, edit, collaborate, showcase and publish your ideas, all within one platform. Designers, engineers, product managers, marketers, and many more use Vectary to stay ahead and work with one of the most efficient in-browser, no-code workflows in the 3D industry.
      </p>
      <div className="flex justify-center ">
        <img 
          src={computer}
          alt="hero-img"
          className=" mt-15 w-full max-w-7xl rounded shadow-lg"
        />
      </div>
    </section>
  )
}

export default Hero
