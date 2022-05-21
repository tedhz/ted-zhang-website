import React, {useEffect, useState } from 'react';
import './WorkExperience.scss';

function WorkExperience() {
    const [selectorId, setSelectorId] = useState("amd");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [dates, setDates] = useState("");
    const [description, setDescription] = useState([""]);

    useEffect(() => {
        if (selectorId === "amd") {
            setPosition("Artificial Intelligence Intern");
            setCompany("Advanced Micro Devices Inc. (AMD)");
            setDates("Jan 2022 - Apr 2022");
            setDescription([
                "Developed and trained a medical diagnosis AI using TensorFlow, OpenCV, and Keras trained on brain scans from an RSNA database of over 700,000 images that can detect intracranial hemorrhages with 94% validation accuracy. Utilized transfer learning using InceptionV3 as well as a custom data loader.",
                "Built both a CLI and GUI using Tkinter to display the brain scans along with their predictions in a user-friendly manner. Wrote a user guide to accompany the program.",
                "Containerized AMD's AI inference optimization library, ZenDNN, along with various other pretrained models using Docker and an Ubuntu Linux base image. Tailored the containers for specific models with custom bash scripts used to run pre-set benchmarks.",
                "Wrote a script for, storyboarded, recorded, and edited a technical instructional video for installing and using ZenDNN in Linux.",
            ]);
        } else if (selectorId === "formulaelectric") {
            setPosition("Tractive Systems Team Member");
            setCompany("University of Waterloo Formula Electric");
            setDates("Oct 2021 - Apr 2022");
            setDescription([
                "Worked with team members to design in SOLIDWORKS and produce various parts of a drivetrain and battery pack for an electric race car. Independently designed a cell fuse resistance testing device in SOLIDWORKS.",
                "Prototyped and machined aluminum cooling vents underneath the battery of the car.",
                "Modified a PDU mount to include a waterproofed container for a relay in SOLIDWORKS.",
            ]);
        }

    }, [selectorId]);

    return(
        <div className='jobs-container'>
            <ul className='company-list'>
                <li 
                    className={selectorId==="amd" ? 'item-active' : 'item-inactive'}
                    onClick={() => {
                        setSelectorId("amd");
                    }}
                >
                    AMD
                </li> 
                <li
                    className={selectorId==="formulaelectric" ? 'item-active' : 'item-inactive'}
                    onClick={() => {
                        setSelectorId("formulaelectric");
                    }}
                >
                    UW Formula E
                </li>   
            </ul>
            <div className='job-section'>
                <div className='job-title'>
                    {position}
                </div>
                <div className='job-company'>
                    {" "} @ {company}   
                </div>
                <div className='job-description'>
                    {description.map(bullet => {
                        return (<li>{bullet}</li>);
                    })}    
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
