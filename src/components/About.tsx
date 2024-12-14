import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';

const labelsFirst = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java", 
    "SQL",
    "C"


    // "React",
    // "TypeScript",
    // "JavaScript",
    // "HTML5",
    // "CSS3",
    // "SASS",
    // "Flask",
    // "Python",
    // "SQL",
    // "PostgreSQL",
    // "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function About() {
    return (
    <div className="container" id="about">
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-grid">
                <div className="about-content">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    <p>Hi! I'm <strong>Adam</strong>, a penultimate-year student pursuing a Bachelor of Engineering (Hons) in Information and Communication Technology (Information Security) at the Singapore Institute of Technology. 
                       I’m passionate about the intersection of Machine Learning, Artificial Intelligence, and Cybersecurity, 
                       as I believe these fields are shaping the future of technology.
                    </p>
                    
                    <p>Over the course of my studies, I’ve developed a strong foundation in various domains including Malware Analysis and Defence, Operation Security and Incident Management, Digital Forensics, Security Analytics, 
                        Network Security, Secure Software Development, Mobile Security, Web Security, Machine Learning, Software Engineering, Embedded System, and Ethical Hacking. My academic projects have pushed me to explore and apply cutting-edge technologies, 
                        such as designing deepfake detection systems and building anomaly detection models, which align with the current trends in the tech industry.
                    </p>

                    <p>Outside of academics, I enjoy engaging in hobbies that spark creativity and problem-solving. 
                        I have a knack for teaching and have mentored students in Python programming, robotics, and coding combat. 
                        In my free time, I like to explore advancements in Generative AI, experiment with new tools, and keep up with the latest cybersecurity trends.
                         When I’m not in front of my computer, you’ll find me gymming, trying out challenges on kaggle or experimenting with Raspberry Pi projects.
                    </p>

                    {/* <div className="flex-chips">
                        <span className="chip-title">Programming languages:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default About;