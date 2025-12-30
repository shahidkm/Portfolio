import React from 'react'
import Home from './Home'
import Developer from './Developer'
import DisintegrationEffect from './DevelopingExperience'
import DotNetDeveloper from './DotNetDeveloper'
import Nexfin from '../components/Nexfin'
import Profession from './Profession'
import LabourLink from '../components/LabourLink'
import Experience from '../components/Bridgeon'
import Navbar from '../components/NavBar'

export default function Display() {
  return (
    <>
   <Navbar/>
    <div className='max-w-[100vw] min-h-[100vh] '>
      
         <Home/>
      {/* <Developer/>
      <DisintegrationEffect/> */}
      <Profession/>  
      

    </div>
     </>
  )
}
