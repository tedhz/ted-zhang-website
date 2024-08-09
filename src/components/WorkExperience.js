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
                "Spearheaded development and training of a computer vision model trained on 700,000 images with 94% validation accuracy using TensorFlow and Keras, transfer learning using InceptionV3, and image preprocessing using OpenCV.",
                "Containerized an inference optimization library along with various other pretrained models using Docker and shell scripts.",
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
                "Developed an unsupervised NLP model with an 0.87 f1-score and 92% accuracy for log anomaly detection using sklearn, hashing vectorizers, scalers, LSTM autoencoders, Google’s BERT transformer, and isolation forest.",
                "Tested and integrated the new model into the existing codebase, pushing over 2,000 lines of code into production.",
                "Optimized the machine learning data pipeline, reducing redundant API calls by 55% and memory usage by 52% with multiprocessing, memory tracing, and profiling.",
                "Improved the machine learning data pipeline by reducing redundant API calls by 55% and optimizing low-level memory usage by 52% using multiprocessing, memory tracing, and memory profiling.",
                "Implemented a CI/CD pipeline using Git, GitLab CI/CD, GitLab Runner, Docker, and shell scripts.",
            ]);
        } else if (selectorId === "kinaxis") {
            setPosition("Machine Learning Developer Intern");
            setCompany("Kinaxis Inc.");
            setDates("May 2023 - Aug 2023");
            setDescription([
                "Enhanced runtime by 45%, reduced code size by 40%, and improved readability by refactoring data utilities using PySpark.",
                "Designed and implemented a Python module that detects erroneous, anomalous, and missing time series data before it impacts forecasting accuracy using sklearn, Ruptures, Kalman Filters, and an Augmented Dickey-Fuller test.",
                "Analyzed and aggregated data from a large-scale Apache Hive data warehouse using PySpark, HQL, and Azure Databricks, reducing processing time by 53%.",
            ]);
        } else if (selectorId === "kinaxis2") {
            setPosition("Software Engineering Intern");
            setCompany("Kinaxis Inc.");
            setDates("May 2024 - Aug 2024");
            setDescription([
                "Built a support chatbot for advanced log querying, log analysis, and root cause analysis on a large-scale distributed system.",
                "Engineered 2 REST APIs using Express.js, OpenAI embeddings, GPT-4, and a PostgreSQL database hosted on Azure, with a React.js and CSS frontend. Crafted an ETL pipeline that ingests 350,000 logs a day using Apache Airflow and Datadog API.",
                "Deployed 3 applications with Azure Kubernetes Service using Docker containers, Kubernetes manifests, and Helm charts.",
                "Created 2 FastAPI endpoints and corresponding unit tests to fetch table metadata using Databricks API and SQL Warehouse.",
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
