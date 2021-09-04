import React from 'react'
//import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from './images/business.png';


const Home=()=>{
    return (
        <>
        <Common name ="Grow your business with" imgsrc={web} visit='/service' btnname='Get Started' />
        </>
    )
}

export default Home;