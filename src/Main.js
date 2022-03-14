import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import FLL from './pages/FLL.js';
import FTC from './pages/FTC.js';
import FRC from './pages/FRC.js';
import FIRST from './pages/FIRST.js';
import About from './pages/About.js';
import Train from './pages/Training.js';
import Mech from './pages/Mechanical.js';

function Main(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/FLL' element={<FLL />}></Route>
            <Route path='/FTC' element={<FTC />}></Route>
            <Route path='/FRC' element={<FRC />}></Route>
            <Route path='/FIRST' element={<FIRST />}>/</Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Training' element={<Train />}></Route>
            <Route path='/Training/Mechanical' element={<Mech />}></Route>
        </Routes>
    );
}

export default Main;