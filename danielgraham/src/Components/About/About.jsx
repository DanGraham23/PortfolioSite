import './style.css';
import {FaReact, FaAngular, FaJava, FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiMongodb, SiPostgresql, SiJavascript} from 'react-icons/si';

import DanGraham from '../../assets/images/dangraham.jpg';

export default function About(){
    return (
        <div id="about" className='about-container'>
            <div className='bio-container'>
                <img src={DanGraham} alt="daniel-graham" className='about-img' />
                <p className='bio'>I’m a passionate, enthusiastic, and hard-working software developer. I currently work at Hexagon Asset Lifecycle Intelligence as a software developer. I mainly work with Angular, TypeScript, and Azure. In addition to this, I have experience using a wide variety of other tools and technologies such as React, Express, and Java Spring Boot. Feel free to contact me over email or LinkedIn!
                 </p>
            </div>
            <div className='skills'>
                <FaReact color='#61DBFB' className='skill' aria-label="react"/>
                <SiJavascript color='#FFD43B' className='skill' aria-label="javascript"/>
                <FaAngular color='#dd1b16' className='skill' aria-label="angular"/>
                <SiTypescript color='#007acc' className='skill' aria-label="typescript"/>
                <FaJava color='#f89820' className='skill' aria-label="java"/>
                <FaNodeJs color='#68A063' className='skill' aria-label="node js"/>
                <SiPostgresql color='#008bb9' className='skill' aria-label="postgresql"/>
                <SiMongodb color='#3FA037' className='skill' aria-label="mongo db"/>
            </div>
        </div>
    )
}