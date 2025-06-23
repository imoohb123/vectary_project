import React from 'react'
import  transport from '../assets/transportation.png'
import consumergoods from '../assets/consumer goods.png'
import manufacturing from '../assets/manufacturing.png'
import electrinics from '../assets/electronics.png'
import events from '../assets/events.png'
import furniture from "../assets/furniture.png"

const industries=[
    {
        label:"INDUSTRY",
        title:"Transportation",
        discription:"Bring added functionality to product presentation by showing not only how the item looks but how it behaves.",
        image: transport,
    },
    {
        label:"INDUSTRY",
        title:"Consumer goods",
        discription:"Multipurpose design solution for an immersive product showcase for internal use, in-store and online retail.",
        image:consumergoods,
    },
    {
      label:"INDUSTRY",
        title:"Manufacturing",
        discription:"Modernize communication solutions with a 3D and AR transformation while reducing risks and affordable cost.",
        image:manufacturing,  
    },
     {
      label:"INDUSTRY",
        title:"Electronics",
        discription:"Stay ahead by streamlining your product development — from concept and prototyping to testing and final retail delivery.",
        image:electrinics,  
    },
    {
      label:"INDUSTRY",
        title:"Events",
        discription:"AR is the best solution for any physical or hybrid trade show booth for planning and live showcasing.",
        image:events,  
    },
     {
      label:"INDUSTRY",
        title:"Furniture",
        discription:"Provide versatility, design freedom to add new things, and guidance for manufacturing teams and retail planning.",
        image:furniture,  
    },
]

function Industries() {
  return (
    <section className='py-16 px-4 bg-white text-center'>
        <h4 className='mt-2 ml-8 font-sans uppercase text-[15px] md:text-[15px] font-semibold mb-4'>DESIGN INNOVATION</h4>
        <h1 className='font-sans font-bold text-3xl md:text-4xl md-12'>Creative solutions for all industries</h1>
    <div className=" grid gap-8 md:grid-cols-3  max-w-6xl mx-auto">
      {industries.map((industry,i)=>(
        <div key={i} className="flex flex-col items-center mt-12">
          <img src={industry.image} alt={industry.title}
          className='mt-4 rounded-xl object-cover w-full h-64 text-left' />
          <h4 className=' text-xs text-black font-bold  mt-4'>{industry.label}</h4>
          <h1 className=' mt-3 text-3xl font-bold'>{industry.title}</h1>
          <p className= 'text-gray-600 mt-4 '>{industry.discription}</p>
          <button className='  mt-5 border px-3 py-2 rounded border-indigo-600 text-indigo-600'>View the Demo</button>

        
        </div>
      ))}

    </div>
    
    </section>
  )
}

export default Industries