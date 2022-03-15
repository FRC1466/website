import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import FLL from './pages/team/FLL.js';
import FTC from './pages/team/FTC.js';
import FRC from './pages/team/FRC.js';

import About_FRC from './pages/FRC/About.js';
import Events_FRC from './pages/FRC/Events.js';
import Photos_FRC from './pages/FRC/Photos.js';
import Sponsors_FRC from './pages/FRC/Sponsors.js';
import Team_FRC from './pages/FRC/Team.js';
import Outreach_FRC from './pages/FRC/Outreach.js'
import Awards_FRC from './pages/FRC/Rewards.js'
import Robots_FRC from './pages/FRC/Robots.js';

import About_FTC from './pages/FTC/About.js';
import Events_FTC from './pages/FTC/Events.js';
import Photos_FTC from './pages/FTC/Photos.js';
import Sponsors_FTC from './pages/FTC/Sponsors.js';
import Team_FTC from './pages/FTC/Team.js';
import Outreach_FTC from './pages/FTC/Outreach.js';
import Rewards_FTC from './pages/FTC/Rewards.js';
import Robots_FTC from './pages/FTC/Robots.js';

import About_FLL from './pages/FLL/About.js';
import Events_FLL from './pages/FLL/Events.js';
import Photos_FLL from './pages/FLL/Photos.js';
import Sponsors_FLL from './pages/FLL/Sponsors.js';
import Team_FLL from './pages/FLL/Team.js';
import Outreach_FLL from './pages/FLL/Outreach.js';
import Rewards_FLL from './pages/FLL/Awards.js';
import Robots_FLL from './pages/FLL/Robots.js';


function Main(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/FLL' element={<FLL />}></Route>
            <Route path='/FTC' element={<FTC />}></Route>
            <Route path='/FRC' element={<FRC />}></Route>
            <Route path='/FRC/About' element={<About_FRC />}> </Route>
            <Route path='/FRC/Events' element={<Events_FRC />}> </Route>
            <Route path='/FRC/Photos' element={<Photos_FRC />}> </Route>
            <Route path='/FRC/Sponsors' element={<Sponsors_FRC />}> </Route>
            <Route path='/FRC/Outreach' element={<Outreach_FRC />}></Route>
            <Route path='/FRC/Awards' element={<Awards_FRC />}></Route>
            <Route path='/FRC/Robots'element={<Robots_FRC />}></Route>
            <Route path='/FRC/Team' element={<Team_FRC />}> </Route>
            <Route path='/FTC/About' element={<About_FTC />}> </Route>
            <Route path='/FTC/Events' element={<Events_FTC />}> </Route>
            <Route path='/FTC/Photos' element={<Photos_FTC />}> </Route>
            <Route path='/FTC/Sponsors' element={<Sponsors_FTC />}> </Route>
            <Route path='/FTC/Team' element={<Team_FTC />}> </Route>
            <Route path='/FTC/Outreach' element={<Outreach_FTC />}></Route>
            <Route path='/FTC/Awards' element={<Rewards_FTC />}></Route>
            <Route path='/FTC/Robots' element={<Robots_FTC />}></Route>
            <Route path='/FLL/About' element={<About_FLL />}> </Route>
            <Route path='/FLL/Events' element={<Events_FLL />}> </Route>
            <Route path='/FLL/Photos' element={<Photos_FLL />}> </Route>
            <Route path='/FLL/Sponsors' element={<Sponsors_FLL />}> </Route>
            <Route path='/FLL/Team' element={<Team_FLL />}> </Route>
            <Route path='/FLL/Outreach' element={<Outreach_FLL />}></Route>
            <Route path='/FLL/Awards' element={<Rewards_FLL />}></Route>
            <Route path='/FLL/Robots' element={<Robots_FLL />}></Route>
        </Routes>
    );
}

export default Main;