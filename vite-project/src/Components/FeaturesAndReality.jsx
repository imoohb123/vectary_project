import React from 'react'
import organise from '../assets/oranise.jpg'
import sheogirl from '../assets/shoegirl.jpg'
import drone from '../assets/drone.jpg'

function FeaturesAndReality() {
  return (
    <section className="text-center py-16 px-4">
      <h3 className="  font-serif text-[15px] md:text-[15px] font-bold mb-4">
        POWERFUL FEATURES
      </h3>
      <h1 className=" mt-16 font-sans text-5xl md:text-5xl font-bold mb-4">
        Don’t just showcase. Explain!
      </h1>
      <p className="max-w-8xl mx-auto text-lg mb-8">
        Vectary platform lets you turn product concepts into complete experiences by using interactions, animations and numerous UI options to get ideas across and get the job done.

      </p>
       <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium">
         Learn about interactions and animations
        </button>
      </div>
      <div className="flex justify-center ">
        <img 
          src={organise}
          alt="hero-img"
          className=" mt-15 w-full max-w-7xl rounded shadow-lg"
        />
      </div>
     
 
      <h3 className=" mt-15 uppercase font-serif text-[15px] md:text-[15px] font-bold mb-4">
        Augmented Reality
      </h3>
      <h1 className=" mt-16 font-sans text-5xl md:text-5xl font-bold mb-4">
        Explore spatial design and digital twins
      </h1>
      <p className="max-w-8xl mx-auto text-lg mb-8">
        Benefit from having mixed reality tools all within one platform. Import 3D files or build your own models. View them in Augmented Reality or using VR headsets. No other app needed. Works from your desktop or mobile phone.
      </p>
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium">
         Learn about interactions and animations
        </button>
      </div>
      <div className="flex justify-center ">
        <img 
          src={sheogirl}
          alt="hero-img"
          className=" mt-15 w-full max-w-7xl rounded shadow-lg"
        />
      </div>

      
 
      <h3 className=" mt-8 font-serif uppercase text-[15px] md:text-[15px] font-bold mb-4">
       communication and sharing
      </h3>
      <h1 className=" mt-16 font-sans text-5xl md:text-5xl font-bold mb-4">
        Send a 3D viewer that anyone can interact with
      </h1>
      <p className="max-w-8xl mx-auto text-lg mb-8">
        Forget about file transfers or email attachments; one link is all you need. Just click on the share button and make your 3D designs perfectly accessible for viewing from any device, including VR glasses.
      </p>
      <p className="max-w-8xl mx-auto text-lg mb-8 font-bold">
        Try it out. Copy the link and add it to any online productivity tool, presentation or a chat.
      </p>
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium">
         Copy Link
        </button>
      </div>
      <div className="flex justify-center ">
        <img 
          src={drone}
          alt="hero-img"
          className=" mt-15 w-full max-w-6xl rounded shadow-lg"
        />
      </div>
    </section>
  )
}

export default FeaturesAndReality
