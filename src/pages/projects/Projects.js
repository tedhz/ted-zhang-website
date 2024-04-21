import './Projects.scss';
import React, { useEffect, useState } from 'react';

function Projects () {
    const [clickWebsite, setClickWebsite] = useState(false);
    const [clickMedCNN, setMedCNN] = useState(false);
    const [clickMastermind, setClickMastermind] = useState(false);
    
    const handleClickWebsite = () => setClickWebsite(!clickWebsite);
    const handleClickMedCNN = () => setMedCNN(!clickMedCNN);
    const handleClickMastermind = () => setClickMastermind(!clickMastermind);

    return (
        <>
            <div className='projects-container'>
                <div className='text-zone-projects'>
                    <h1 className='title-projects'>Projects</h1>
                    <h2 className='projects-description'>
                        Some of my professional and personal projects.
                    </h2>
                </div>
                <div className='projects-content'>
                    <div className='project'>
                        <div className='website-background' onClick={handleClickWebsite}>
                            <div className={clickWebsite ? 'project-details-active' : 'project-details-inactive'} onClick={handleClickWebsite}>
                                <ul className='skills-used'>
                                    <li className='project-skill'>
                                        React.js    
                                    </li>
                                    <li className='project-skill'>
                                        SASS    
                                    </li>
                                    <li className='project-skill'>
                                        Javascript    
                                    </li>    
                                </ul>
                                <div className='project-description'>
                                    The website you are currently on is my personal website.
                                    Built from the ground up using React.js and SASS, 
                                    this portofolio site was my spearhead into front-end 
                                    development, and ignited an interest that I intend to 
                                    continue pursuing. Check out all the features by clicking
                                    around!
                                </div>
                                <div className='code-button-container'>
                                    <a href='https://github.com/tedhz/ted-zhang-website' target="_blank" rel="noreferrer" 
                                    className='code-button' >
                                        Get Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='project-name-container'>
                            <div className='project-name'>Personal Website</div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='ml2-background' onClick={handleClickMedCNN}>
                            <div className={clickMedCNN ? 'project-details-active' : 'project-details-inactive'} onClick={handleClickMedCNN}>
                                <ul className='skills-used'>
                                    <li className='project-skill'>
                                        React.js    
                                    </li>
                                    <li className='project-skill'>
                                        CSS    
                                    </li>
                                    <li className='project-skill'>
                                        Django    
                                    </li>
                                    <li className='project-skill'>
                                        AWS EC2    
                                    </li>
                                    <li className='project-skill'>
                                        Gunicorn    
                                    </li>
                                    <li className='project-skill'>
                                        NGINX    
                                    </li>      
                                </ul>
                                <div className='project-description'>
                                    ML<sup>2</sup> is a regressor I developed to predict NBA player performance. 
                                    Metrics used as reliable indicators of performance include previous general 
                                    player performances and against the selected opponent, variance in previous 
                                    performances, and general statistics like points per game. The model achieves
                                    a mean absolute error of 4.07 on validation data.
                                </div>
                                <div className='code-button-container'>
                                    <a href='https://ml-squared.ca/' target="_blank" rel="noreferrer"
                                    className='code-button' >
                                        Explore
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='project-name-container'>
                            <div className='project-name'>ML<sup>2</sup></div>
                        </div>
                    </div>

                    <div className='project'>
                        <div className='mastermind-background' onClick={handleClickMastermind}>
                            <div className={clickMastermind ? 'project-details-active' : 'project-details-inactive'} onClick={handleClickMastermind}>
                                <ul className='skills-used'>
                                    <li className='project-skill'>
                                        Java    
                                    </li>
                                    <li className='project-skill'>
                                        ArrayList    
                                    </li>
                                    <li className='project-skill'>
                                        Java AWT    
                                    </li>    
                                </ul>
                                <div className='project-description'>
                                    This project was a recreation of the board game
                                    "Mastermind", which came complete with both a CLI
                                    and GUI option to play with. The game came with
                                    player vs. player as well as player vs. AI capabilites,
                                    with the AI taking on three levels of difficulty. The
                                    most difficult level leveraged an algorithmic artificial
                                    intelligence that can beat nearly any
                                    human player. 
                                </div>
                                <div className='code-button-container'>
                                    <a href='https://github.com/tedhz/mastermind-ai' target="_blank" rel="noreferrer"
                                    className='code-button' >
                                        Get Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='project-name-container'>
                            <div className='project-name'>Mastermind Game</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;