import React, { useState } from 'react';
import './Resume.scss';
import Ted_Zhang_Resume from './Ted_Zhang_Resume.pdf'
import resume_png from './Ted_Zhang_Resume.png'

function Resume () {
    return (
    <div className='resume-container'>
        <div className='text-zone-pages'>
            <div className='title-resume'>
                <h1>Resume</h1>
            </div>
            <div className='description-resume'>
                <h2>PDF version of my resume. <br /> Last updated August 9th, 2024.</h2>
            </div>
            <a href={ Ted_Zhang_Resume } target="_blank" rel="noreferrer" className='resume-button'>DOWNLOAD</a>
        </div>
        <div className='resume-viewer'>
            <img className='resume-pic' src={resume_png} alt="" />
        </div>
    </div>
    )
}

export default Resume;