import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import './Contact.scss';
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact () {
    return (
        <>
            <div className="contact-container">
                <div className='text-zone-contact'>
                    <div className='title-contact'>
                        <h1>Contact</h1>
                    </div>
                    <div className='description-contact'>
                        <h2>All professional contact information.</h2>
                    </div>
                </div>
                <div className='contact-content'>
                    <div className='email-section'>
                        <div className='contact-logo-black' >
                            <FontAwesomeIcon className='contact-icon' icon={ faEnvelope }/>
                        </div>
                        <div className='contact-text-black' >
                            ted.h.zhang@gmail.com
                        </div>
                    </div>
                    <div className='phone-section'>
                        <div className='contact-logo-black' >
                            <FontAwesomeIcon className='contact-icon' icon={ faPhone }/>
                        </div>
                        <div className='contact-text-black' >
                            (647) 643-3466
                        </div>
                    </div>
                    <div className='linkedin-section'>
                        <Link to='/linkedin' className='contact-logo-white' >
                            <FontAwesomeIcon className='contact-icon' icon={ faLinkedin } />
                        </Link>
                        <Link to='/linkedin' className='contact-text-white' >
                            linkedin.com/in/ted-h-zhang/
                        </Link>
                    </div>
                    <div className='github-section'>
                        <Link to='/github' className='contact-logo-white' >
                                <FontAwesomeIcon className='contact-icon' icon={ faGithub }/>
                        </Link>
                        <Link to='/github' className='contact-text-white' >
                            github.com/tedhz
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;