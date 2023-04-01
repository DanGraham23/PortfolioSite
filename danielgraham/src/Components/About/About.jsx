import './style.css';
import {FaReact, FaAngular, FaJava, FaPython, FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiMongodb, SiPostgresql} from 'react-icons/si';
import DanGraham from '../../assets/images/dangraham.jpg';

export default function About(){
    return (
        <div id="about" className='about-container'>
            <div className='bio-container'>
                <img src={DanGraham} alt="daniel-graham" className='about-img' />
                <p className='bio'>I am a software developer studying computer science at Siena College in Loudonville, NY.
                    My main interests are in the areas of web and full stack development.
                    I love learning languages and frameworks, with some of my favorite being React, TypeScript, Java, and Angular. I am also extremely familiar with Agile scrum methodology, along with DevOps and Version Control. Feel free to contact me over email or LinkedIn!

                 
                 </p>
            </div>
            <div className='skills'>
                <FaReact color='#61DBFB' className='skill' aria-label="react"/>
                <FaAngular color='#dd1b16' className='skill' aria-label="angular"/>
                <SiTypescript color='#007acc' className='skill' aria-label="typescript"/>
                <FaJava color='#5382a1' className='skill' aria-label="java"/>
                <FaPython color='#FFD43B' className='skill' aria-label="python"/>
                <FaNodeJs color='#68A063' className='skill' aria-label="node js"/>
                <SiMongodb color='#3FA037' className='skill' aria-label="mongo db"/>
                <SiPostgresql color='#0064a5' className='skill' aria-label="postgresql"/>
            </div>
        </div>
    )
}