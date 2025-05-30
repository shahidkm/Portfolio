import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from '../../pages/Display';
import LabourLink from '../LabourLink';
import Projects from '../../pages/Projects';
function RouteConfig() {
  return (
    <div>
        <Router>
            <Routes>
           
<Route path="/" element={<Display/>}></Route>

<Route path='/projects' element={<Projects/>}></Route>


            </Routes>      
             </Router>
    </div>
  )
}

export default RouteConfig