import React from 'react'
import workspaceimg from '../assets/Vectary Business plan.png'

function WorkSpace() {
  return (
    <section className='mt-0 py-20 px-8 bg-white' >
        <h2 className=" font-sans text-3xl md:text-4xl font-bold text-center mb-12">
        Invest in your success
      </h2>
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className=' text-xl mb-4 font-semibold text-gray-800 uppercase'>start a free trial</h2>
                <h1 className='  font-sans text-4xl  font-bold text-gray-950 '>See Business workspaces in action</h1>
                <p className=' mt-4  mb-2 font-sans text-gray-500'>Experience complete collaboration options firsthand. Designed to provide powerful
                    design features and secure file management for teams of all sizes. Vectary integrates
                    into any 3D pipeline to bring departments and design platforms - together.</p>
                    
        <button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium">
         Connect with us
        </button>
        </div>
        <div className="flex justify-center">
          <img
            src={workspaceimg}
            alt="Business_Workspace"
            className="w-full max-w-[600px] rounded-xl shadow-xl"
          />
        </div>

                    
                    
        </div>

    </section>
  )
}

export default WorkSpace