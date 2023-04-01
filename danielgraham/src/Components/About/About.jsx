import './style.css';
import {FaReact, FaAngular, FaJava, FaPython, FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiMongodb, SiPostgresql} from 'react-icons/si';

export default function About(){
    return (
        <div id="about" className='about-container'>
            <div className='bio-container'>
                <div className='about-img'></div>
                <p className='bio'>I am a software developer studying computer science at Siena College in Loudonville, NY.
                    My main interests are in the areas of web and full stack development.
                    I love learning languages and frameworks, with some of my favorite being React, TypeScript, Java, and Angular. I am also extremely familiar with Agile scrum methodology, along with DevOps and Version Control. Feel free to contact me over email or LinkedIn!

                 
                 </p>
            </div>
            <div className='skills'>
                <FaReact color='#61DBFB'/>
                <FaAngular color='#dd1b16'/>
                <SiTypescript color='#007acc'/>
                <FaJava color='#5382a1'/>
                <FaPython color='#FFD43B'/>
                <FaNodeJs color='#68A063'/>
                <SiMongodb color='#3FA037'/>
                <SiPostgresql color='#0064a5'/>
            </div>
        </div>
    )
}