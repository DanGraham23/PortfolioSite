import './style.css'
import {Link} from 'react-scroll';
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

export default function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false);

    function toggleNavMenu(){
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className='navbar-container'>
            <h1 className='nav-header'>DG</h1>
            {!toggleMenu && <GiHamburgerMenu className='hamburger-icon' onClick={toggleNavMenu}/>}
            {toggleMenu && <AiOutlineClose className='hamburger-icon' onClick={toggleNavMenu}/>}
            {toggleMenu && <div className='triangle'></div>}
            <ul className={`nav-items ${toggleMenu ? "nav-items-mobile" : ""}`}>
                <Link to="home"
                offset={-100}
                smooth={true}
                className='nav-item'>
                <li >home</li>
                </Link>
                <Link to="about"
                offset={-100}
                smooth={true}
                className='nav-item'>
                <li>about</li>
                </Link>
                <Link to="projects"
                offset={-100}
                smooth={true}
                className='nav-item'>
                <li >projects</li>
                </Link>
                <Link to="contact"
                offset={-100}
                smooth={true}
                className='nav-item'>
                <li>contact</li>
                </Link>
            </ul>
        </nav>
    )
}