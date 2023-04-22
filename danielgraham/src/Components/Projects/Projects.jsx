import './style.css';

export default function Projects(){
    return (
        <div id="projects" className='projects-container'>
            <div className='projects-header'>
                <hr className='projects-hr'/>My Work<hr className='projects-hr'/>
            </div>
            <div className='projects'>
                <a className='project'
                href='https://github.com/DanGraham23/react-chat-application'
                target='_blank'
                rel="noopener noreferrer">
                    <div className='project-img project1-img'></div>
                    <h1 className='project-title'>Web Chat Application</h1>
                    <h3 className='project-skills'>React, Express, Node, MongoDB, Authentication</h3>
                </a>
                <a className='project project-middle'
                href='https://github.com/DanGraham23/ShopFriendsTs' 
                target="_blank"
                rel="noopener noreferrer">
                    <div className='project-img project3-img'></div>
                    <div className='project-title-container'>
                        <h1 className='project-title-middle'>ShopFriends</h1>
                        <a className='demo-link'
                        href="https://www.youtube.com/watch?v=CtrylePSosM" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <button
                        className='demo-btn'
                        >demo</button>
                        </a>
                    </div>
                    <h3 className='project-skills'>React, TypeScript, Redux, Node, Express, PostgreSQL</h3>
                </a>
                <a className='project' 
                href='https://dangraham23.github.io/Sunnyside/' 
                target="_blank"
                rel="noopener noreferrer">
                    <div className='project-img project2-img'></div>
                    <h1 className='project-title'>Sunnyside Design</h1>
                    <h3 className='project-skills'>React, HTML, CSS, Figma, Responsive Design</h3>
                </a>
            </div>
        </div>
    )
}