import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from '../pages/Display';
import LabourLink from '../components/LabourLink';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import DevelopingExperience from '../pages/DevelopingExperience';
function RouteConfig() {
  return (
    <div>
        <Router>
            <Routes>
           
<Route path="/" element={<Display/>}></Route>

<Route path='/projects' element={<Projects/>}></Route>
<Route path='/experiences' element={<Experience/>}></Route>
<Route path='/personal' element={<DevelopingExperience/>}/>

            </Routes>      
             </Router>
    </div>
  )
}

export default RouteConfig