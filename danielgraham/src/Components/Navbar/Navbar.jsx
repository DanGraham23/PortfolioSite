import './style.css'
import {Link} from 'react-scroll';

export default function Navbar(){
    return (
        <div className='navbar-container'>
            <h1 className='nav-header'>DG</h1>
            <ul className='nav-items'>
                <Link to="home"
                offset={-100}
                smooth={true}>
                <li className='nav-item'>home</li>
                </Link>
                <Link to="about"
                offset={-100}
                smooth={true}>
                <li className='nav-item'>about</li>
                </Link>
                <Link to="projects"
                offset={-100}
                smooth={true}>
                <li className='nav-item'>projects</li>
                </Link>
                <Link to="contact"
                offset={-100}
                smooth={true}>
                <li className='nav-item'>contact</li>
                </Link>
            </ul>
        </div>
    )
}