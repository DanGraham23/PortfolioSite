import './style.css'
import Resume from '../../assets/files/DanielGrahamResume2023.docx';

import {AiFillGithub, AiFillLinkedin, AiOutlineFileWord, AiFillMail} from 'react-icons/ai'

export default function Footer(){
    return (
        <footer id="contact" className='footer-container'>
            <h2 className='footer-header'><span className='fname'>Daniel </span><span className='lname'>Graham</span></h2>
            <ul className='footer-socials'>
                <li className='em'><a href='mailto:contact@dangraham.dev'
                target='_blank'
                rel="noopener noreferrer"><AiFillMail aria-label="email"/></a></li>
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
        </footer>
    )
}