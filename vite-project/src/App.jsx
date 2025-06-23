import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Feature from './Components/Feature'
import FeaturesAndReality from './Components/FeaturesAndReality'
import Industries from './Components/Industries'
import CompaniesImported from './Components/CompaniesImported'
import WorkSpace from './Components/WorkSpace'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TrustedBy/>
       <Feature/>
       <FeaturesAndReality/>
       <Industries/>
       <CompaniesImported/>
       <WorkSpace/>
       <Footer/>
    </div>
  )
}

export default App