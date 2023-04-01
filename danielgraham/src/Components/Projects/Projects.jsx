import './style.css';

export default function Projects(){
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <hr className='projects-hr'/>My Work<hr className='projects-hr'/>
            </div>
            <div className='projects'>
                <div className='project'>
                    <div className='project-img'>IMG</div>
                    <h1 className='project-title'>Web Chat Application</h1>
                    <h3 className='project-skills'>React, ExpressJS, NodeJS, MongoDB</h3>
                </div>
                <div className='project'>
                    <div className='project-img'>IMG</div>
                    <h1 className='project-title'>Sunnyside Design</h1>
                    <h3 className='project-skills'>React, HTML, CSS, Responsive Design</h3>
                </div>
                <div className='project'>
                    <div className='project-img'>IMG</div>
                    <h1 className='project-title'>ShopFriends</h1>
                    <h3 className='project-skills'>React, Redux, Django, PostgreSQL</h3>
                </div>
            </div>
        </div>
    )
}