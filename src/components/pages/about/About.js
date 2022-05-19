import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

function About () {
    return (
        <>
            <div className='about-container'>
                <div className='text-zone-about'>
                    <div className='title-resume'>
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className='about-text'>
                    Hi, my name is Ted and I'm a Mechatronics Engineering student at the 
                    University of Waterloo! I love anything related to computers but I have a 
                    particular interest in front-end development and artificial intelligence.
                    I love learning new things and jump at the chance to make anything cool and
                    computer-y!
                    <br/><br/>
                    On a personal note, I love my rabbit TJ, losing lots of games on Valorant and
                    League of Legends, and learning about cars.
                    <br/><br/>
                    Scroll to learn more about me!
                </div>
                <div className='skills'>
                    <h4 className='skills-heading'>
                        Skills
                    </h4>
                    <ul className='skills-content'>
                        <li className='skill'>
                                Javascript
                        </li>
                        <li className='skill'>
                                React.js
                        </li>
                        <li className='skill'>
                                CSS/SASS
                        </li>
                        <li className='skill'>
                                Python
                        </li>    
                        <li className='skill'>
                                Tensorflow / Keras
                        </li>
                        <li className='skill'>
                                OpenCV
                        </li>
                        <li className='skill'>
                                Pandas
                        </li>
                        <li className='skill'>
                                Linux/Unix Shell Scripting
                        </li>
                        <li className='skill'>
                                Docker
                        </li>
                        <li className='skill'>
                                Java
                        </li>
                        <li className='skill'>
                                C++
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default About;