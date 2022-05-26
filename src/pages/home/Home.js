import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import homePic from './t-temp-logo.png';

function Home() {
    
    return (
        <div className='home-container'>
            <div className='text-and-pic-home' >
                <div className='text-zone'>
                    <div className='title-home'>
                        <h1>Hi, <br /> I'm
                        Ted Zhang
                        </h1>
                    </div>
                    <div className='description-home'>
                        <h2>Mechatronics Engineer | Software Enthusiast</h2>
                    </div>
                    <Link to="/contact" className='contact-button'>CONTACT ME</Link>
                </div>

            </div>
            
            <div className='banners'>

                <div className='about-banner'>
                    <div className='right-banner-text'>
                        <Link to="/about" className='right-button'>ABOUT ME</Link>
                        <div className='right-text'>
                            <h3>Work Experience, Education</h3>
                        </div>
                    </div>
                    <div className='about-banner-back'></div>
                </div>

                <div className='projects-banner'>
                    <div className='left-banner-text'>
                        <Link to="/projects" className='left-button'>PROJECTS</Link>
                        <div className='left-text'>
                            <h3>Personal and Professional Projects by Me</h3>
                        </div>  
                    </div>    
                </div>

                <div className='resume-banner'>
                    <div className='right-banner-text'>
                        <Link to='/resume' className='right-button'>RESUME</Link>
                        <div className='right-text'>
                            <h3>Viewable PDF of my Full Resume</h3> 
                        </div>
                    </div>
                    <div className='resume-banner-back'></div>
                </div>
                
            </div>    
        </div>
    );
}



export default Home;