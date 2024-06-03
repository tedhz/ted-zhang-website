import React, {useEffect, useState } from 'react';
import './WorkExperience.scss';

function WorkExperience() {
    const [selectorId, setSelectorId] = useState("kinaxis2");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [dates, setDates] = useState("");
    const [description, setDescription] = useState([""]);

    useEffect(() => {
        if (selectorId === "amd") {
            setPosition("Machine Learning Developer Intern");
            setCompany("Advanced Micro Devices Inc. (AMD)");
            setDates("Jan 2022 - Apr 2022");
            setDescription([
                "Spearheaded development and training of a computer vision model on 700,000 images with 94% validation accuracy using TensorFlow, Keras. transfer learning using InceptionV3, a data loader using pandas, and image preprocessing using OpenCV.",
                "Containerized an inference optimization library along with various other pretrained models using Docker and bash scripts.",
            ]);
        } else if (selectorId === "formulaelectric") {
            setPosition("Tractive Systems Team Member");
            setCompany("University of Waterloo Formula Electric");
            setDates("Oct 2021 - Dec 2022");
            setDescription([
                "Worked with team members to design in SOLIDWORKS and produce various parts of a drivetrain and battery pack for an electric race car. Independently designed a cell fuse resistance testing device in SOLIDWORKS.",
                "Prototyped and machined aluminum cooling vents underneath the battery of the car.",
                "Modified a PDU mount to include a waterproofed container for a relay in SOLIDWORKS.",
            ]);
        } else if (selectorId === "blackberry") {
            setPosition("Software Engineering Intern - Machine Learning");
            setCompany("BlackBerry Limited");
            setDates("Sep 2022 - Dec 2022");
            setDescription([
                "Developed an unsupervised NLP model with an 87 f1-score and 92% validation accuracy for log anomaly detection using hashing vectorizers, scalars, LSTM autoencoders, Google’s BERT transformer, and isolation forest.",
                "Tested, productionized, and integrated the new model into the existing codebase and pushed 2000+ lines into production.",
                "Researched and experimented with models from research papers using TensorFlow, Keras, Sckit-learn, and Pandas.",
                "Improved the machine learning data pipeline by reducing redundant API calls by 55% and optimizing low-level memory usage by 52% using multiprocessing, memory tracing, and memory profiling.",
                "Implemented a CI/CD pipeline using Git, GitLab CI/CD, GitLab Runner, Docker, and bash scripts.",
            ]);
        } else if (selectorId === "kinaxis") {
            setPosition("Machine Learning Developer Intern");
            setCompany("Kinaxis Inc.");
            setDates("May 2023 - Aug 2023");
            setDescription([
                "Researched and tested various change point detection techniques and unit root tests to identify anomalies within supply chain time series data using a system based on Ruptures, Kalman Filters, an Augmented Dickey-Fuller test, and matplotlib.",
                "Implemented and productionized the techniques in a Python module, complete with an HTML report generation feature.",
                "Analyzed and aggregated data from a large-scale database to prepare it for testing using PySpark and Azure Databricks, decreasing processing time by 53% compared to the previous system.",
                "Refactored data utilities using PySpark, improving readability, reducing lines by 40%, and decreasing runtime by 45%.",
            ]);
        } else if (selectorId === "kinaxis2") {
            setPosition("Software Engineering Intern");
            setCompany("Kinaxis Inc.");
            setDates("May 2023 - Aug 2023");
            setDescription([
                "Engineered a REST API using Express.js that embeds data using OpenAI embeddings, interacting with a PostgreSQL vector database hosted on Azure. Also crafted a REST API that performs prompted log analysis using Express.js and OpenAI GPT-4.",
                "Developed a chatbot frontend using React.js and CSS, and an ETL pipeline for logs using Apache Airflow and Datadog API.",
            ]);
        }

    }, [selectorId]);

    return(
        <div className='jobs-container'>
            <ul className='company-list'>
                <li 
                    className={selectorId==="kinaxis2" ? 'item-active' : 'item-inactive'}
                    onClick={() => {
                        setSelectorId("kinaxis2");
                    }}
                >
                    Kinaxis
                </li> 
                <li 
                    className={selectorId==="kinaxis" ? 'item-active' : 'item-inactive'}
                    onClick={() => {
                        setSelectorId("kinaxis");
                    }}
                >
                    Kinaxis
                </li> 
                <li 
                    className={selectorId==="blackberry" ? 'item-active' : 'item-inactive'}
                    onClick={() => {
                        setSelectorId("blackberry");
                    }}
                >
                    BlackBerry
                </li> 
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
