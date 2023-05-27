import React from 'react';
import './hero.css';
import NavBar from '../../components/navBar/navBar';

const Hero = () => {
    return (
        <div className='Hero_container'>
            <NavBar />
            <div className='hero_tag'>
                immersive  experiences that deliver
            </div>
        </div>
    )
}
export default Hero;
