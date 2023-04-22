import './style.css'
import Resume from '../../assets/files/DanielGrahamResume2023.docx';

import {AiFillGithub, AiFillLinkedin, AiOutlineFileWord} from 'react-icons/ai'

export default function Footer(){
    return (
        <div id="contact" className='footer-container'>
            <h2 className='footer-header'><span className='fname'>Daniel </span><span className='lname'>Graham</span></h2>
            <h3 className='email'><a href="mailto:d20grah@siena.edu">d20grah@siena.edu</a></h3>
            <ul className='footer-socials'>
                <li className='gh'><a href='https://github.com/DanGraham23'
                target='_blank'
                rel="noopener noreferrer"><AiFillGithub aria-label="github"/></a></li>
                <li className='ld'><a href='https://www.linkedin.com/in/danielgraham23/'
                target='_blank'
                rel="noopener noreferrer"><AiFillLinkedin aria-label="linkedin"/></a></li>
                <li className='rm'><a download={true}
                href={Resume}
                rel="noopener noreferrer"><AiOutlineFileWord aria-label="resume"/></a></li>
            </ul>
        </div>
    )
}