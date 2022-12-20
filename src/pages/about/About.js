import React from 'react';
import './About.scss';
import aboutPic from './personal_photo.jpg';
import WorkExperience from '../../components/WorkExperience';

function About () {
    return (
        <>
            <div className='about-container'>
                <div className='text-zone-about'> 
                    <div className='title-about'>
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className='txt-and-pic'>
                    <div className='about-text'>
                        Hi, my name is Ted and I'm a Mechatronics Engineering student at the 
                        University of Waterloo! I love anything related to computers but I have a 
                        particular interest in software and machine learning.
                        I love learning new things and jump at the chance to make anything cool and
                        computer-y!
                        <br/><br/>
                        On a personal note, I love my rabbit TJ, losing lots of games on Valorant and
                        League of Legends, and learning about cars.
                        <br/><br/>
                        Scroll to learn more about me!
                    </div>
                    <img className='about-pic' src={ aboutPic } />
                </div>
                <div className='skills'>
                    <h4 className='skills-heading'>
                        Skills I Have
                    </h4>
                    <ul className='skills-content'>
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
                                Scikit-learn
                        </li>
                        <li className='skill'>
                                NumPy
                        </li>
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
                                CI/CD
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
                <div className='work-exp'>
                    <h4 className='skills-heading'>Where I've Worked</h4>
                    <WorkExperience className='workexpselector' />
                </div>
                <div className='easter-egg'>
                            I love Kristie    
                </div>
            </div>
        </>
    )
}

export default About;