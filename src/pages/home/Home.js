import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import homePic from './t-temp-logo.png';
import { faJsSquare, faReact, faCss3, faPython, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faBrain}/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faLinux}/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython}/>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default Home;