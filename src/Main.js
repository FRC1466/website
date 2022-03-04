import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import FLL from './FLL.js';
import FTC from './FTC.js';
import FRC from './FRC.js';

function Main(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/FLL' element={<FLL />}></Route>
            <Route path='/FTC' element={<FTC />}></Route>
            <Route path='/FRC' element={<FRC />}></Route>
        </Routes>
    );
}

export default Main;