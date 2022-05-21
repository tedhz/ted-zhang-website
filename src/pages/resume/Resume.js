import React, { useState } from 'react';
import './Resume.scss';
import {Document, Page, pdfjs} from 'react-pdf';
import { Link } from 'react-router-dom';
import Ted_Zhang_Resume from './Ted_Zhang_Resume.pdf'

function Resume () {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
    <div className='resume-container'>
        <div className='text-zone-pages'>
            <div className='title-resume'>
                <h1>Resume</h1>
            </div>
            <div className='description-resume'>
                <h2>PDF version of my resume. <br /> Last updated June 1st, 2022.</h2>
            </div>
            <a href={ Ted_Zhang_Resume } target="_blank" className='resume-button'>DOWNLOAD</a>
        </div>
        
        <div className='pdf-viewer'>
            <div className='pdf'>
                <Document className = 'resume-pdf' file={Ted_Zhang_Resume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
            </div>
        </div>
    </div>
    )
}

export default Resume;