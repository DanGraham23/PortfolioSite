import './style.css';
import shopfriends from '../../assets/images/shop-friends1.JPG';
import sunnyside from '../../assets/images/sunnyside1.JPG';
import chatapp from '../../assets/images/react-chat1.JPG';
import { useEffect } from 'react';
import {AiFillGithub,AiFillYoutube} from 'react-icons/ai';


export default function Projects(){

    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      useEffect(() => {
        const elements = document.querySelectorAll('.project');
    
        const handleScroll = () => {
          elements.forEach((element) => {
            if (isElementInViewport(element)) {
                if (element.classList.contains('project-left')){
                    element.classList.add('project-slide-left');
                }else{
                    element.classList.add('project-slide-right');
                }
              
            }
          });
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
        <div id="projects" className='projects-container'>
            <h1 className='projects-header'>My Work</h1>
            <div className='project project-left'>
                <img src={shopfriends} alt="various-people-wearing-stylish-clothes" className='project-img'/>
                <div className='project-info text-right'>
                    <h1 className='project-info-title'>ShopFriends</h1>
                    <h3 className='project-info-techs'>React, Redux, TypeScript, Node, Express, PostgreSQL, Stripe, AWS</h3>
                    <p className='project-info-descr'>ShopFriends is a Peer-to-Peer eCommerce site</p>
                    <div className='project-info-icons icons-right'>
                        <a className='demo-link'
                        href="https://github.com/DanGraham23/ShopFriendsTs" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <AiFillGithub className='project-info-icon icon-green' aria-label='github'></AiFillGithub>
                        </a>
                        <a className='demo-link'
                        href="https://www.youtube.com/watch?v=CtrylePSosM" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <AiFillYoutube className='project-info-icon icon-red' aria-label='youtube-demo'></AiFillYoutube>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className='project project-right'>
                <div className='project-info text-left'>
                    <h1 className='project-info-title'>Chat Application</h1>
                    <h3 className='project-info-techs'>React, Node, Express, MongoDB</h3>
                    <p className='project-info-descr'>This is a simple chat app to talk to your friends online</p>
                    <div className='project-info-icons icons-left'>
                    <a className='project'
                    href='https://github.com/DanGraham23/react-chat-application'
                    target='_blank'
                    rel="noopener noreferrer">
                        <AiFillGithub className='project-info-icon icon-green' aria-label='github'></AiFillGithub>
                    </a>
                    </div>
                    
                </div>
                <img src={chatapp} alt="chat-application-chat-logs" className='project-img'/>
            </div>
            <div className='project project-left'>
                <img src={sunnyside} alt="sunny-side-design-website" className='project-img'/>
                <div className='project-info text-right'>
                    <h1 className='project-info-title'>Sunnyside</h1>
                    <h3 className='project-info-techs'>React, HTML, CSS, Figma, Responsive Design</h3>
                    <p className='project-info-descr'>Sunnyside is a mock company website</p>
                    <div className='project-info-icons icons-right'>
                        <a className='project project-live-button' 
                        href='https://dangraham23.github.io/Sunnyside/' 
                        target="_blank"
                        rel="noopener noreferrer">
                            Live!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}