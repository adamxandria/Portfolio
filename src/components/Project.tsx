import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
import EnterpriseNetwork from '../assets/images/EnterpriseNetwork.png';
import NutriForge from '../assets/images/NutriForge.png';
import RouteSav from '../assets/images/RouteSav.png';
import KiddyCCTV from '../assets/images/KiddyCCTVapp.png';
import TicketingHuat from '../assets/images/TicketingHuat.png';
import NetBot from '../assets/images/NetBot.png';
import ForensicSecureUSB from '../assets/images/ForensicSecureUSB.png';
import ITP from '../assets/images/ITP.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={ForensicSecureUSB} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Forensic Secure USB</h2></a>
                <p>Developed a secure forensic USB solution that enhances the Chain of Custody (CoC) for digital evidence. Leveraging a Raspberry Pi Zero 2 W, the device uses HID scripting and mass storage functionality to 
                securely fingerprint host computers, log interactions, and monitor evidence file integrity in real-time. Key features include tamper-proof logging, cross-platform compatibility, and encrypted data transmission using WebSocket servers. 
                This innovative tool ensures the confidentiality, integrity, 
                and availability of digital evidence, redefining the standards for secure evidence handling in forensic investigations.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={ITP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Facial Detection and Deepfake Analysis</h2></a>
                <p>Collaborated with A*STAR to design and enhance a comprehensive facial extraction and deepfake detection pipeline. The project involved developing a multi-face detection system capable of detecting, cropping, and recognizing multiple faces in video frames with high accuracy. 
                    Additionally, the team evaluated 15 Generative AI tools to produce high-quality deepfake datasets, enabling the client to train and test advanced detection models. This solution not only improved data preprocessing for deepfake analysis but also delivered actionable insights 
                    to refine the client's detection capabilities.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={NetBot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>NetBot</h2></a>
                <p>Developed an AI-powered system for network anomaly detection and cybersecurity insights, integrating machine learning and natural language processing. NetBot combines an Isolation Forest-based anomaly detection model with a chatbot interface powered by the Gemini model. 
                    This dual-component solution analyzes network logs to identify potential threats such as DDoS attacks and explains them in a user-friendly way. Designed for accessibility, NetBot empowers non-cybersecurity professionals to understand and respond to network anomalies effectively. 
                    The chatbot interface, built with Gradio, simplifies user interactions and enhances cybersecurity awareness.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={TicketingHuat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>TicketingHuat</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={KiddyCCTV} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>KiddyCCTV App</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={RouteSav} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>RouteSav</h2></a>
                <p>Developed a real-time route optimization tool for urban navigation using Python and PyQt5. Integrated geospatial data from OpenStreetMap with live ERP rates and incident reports via API, enabling users to find the fastest and most cost-effective routes based on live traffic conditions and preferences.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={NutriForge} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>NutriForge</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={EnterpriseNetwork} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Designed, Defend and Attack an Enterprise Network</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            {/* <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p> */}
            {/* </div> */}
        </div>
    </div>
    );
}

export default Project;