import './style.css'

export default function Navbar(){
    return (
        <div className='navbar-container'>
            <h1 className='nav-header'>DG</h1>
            <ul className='nav-items'>
                <li className='nav-item'>home</li>
                <li className='nav-item'>about</li>
                <li className='nav-item'>projects</li>
                <li className='nav-item'>contact</li>
            </ul>
        </div>
    )
}