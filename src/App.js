import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div class="container">
        <h1>Vangolu Venugopal</h1>
        <div class="contact-info">
            <span>Email: venugopal9966450375@gmail.com</span>
            <span>Phone: 7075193818</span>
            <span>LinkedIn: linkedin.com/in/vangoluvenugopal</span>
        </div>
        
        <div class="section">
            <h2>Profile</h2>
            <p>Proactive and detail-oriented Software Development Engineer with strong programming and problem-solving skills. Passionate about leveraging cutting-edge technologies to build scalable applications and deliver impactful results.</p>
        </div>

        <div class="section">
            <h2>Skills</h2>
            <ul>
                <li><span class="highlight">Programming Languages:</span> C, Java, Python, JavaScript</li>
                <li><span class="highlight">Web Technologies:</span> React.js, HTML, CSS, Node.js, REST APIs</li>
                <li><span class="highlight">Database:</span> MySQL, MongoDB</li>
                <li><span class="highlight">AI & ML:</span> Model Training, Computer Vision, Predictive Analytics, Data Preprocessing</li>
                <li><span class="highlight">Concepts:</span> OOPS, Data Structures, Algorithms, Operating Systems, Computer Networks</li>
            </ul>
        </div>

        <div class="section">
            <h2>Education</h2>
            <ul>
                <li><span class="highlight">B.E Information Technology</span>, Vasavi College of Engineering - CGPA: 8.52 (Oct 2022 – Present)</li>
                <li><span class="highlight">Intermediate (MPC)</span>, Mother Junior College - Percentage: 97.2% (Jun 2020 – May 2022)</li>
            </ul>
        </div>

        <div class="section">
            <h2>Projects</h2>
            <ul>
                <li>
                    <span class="highlight">GSI-Based Blockchain Land Parcel Registration</span>
                    <ul>
                        <li>Developed a land parcel registration system using Leaflet.js for geospatial mapping.</li>
                        <li>Integrated Supabase Cloud Database for secure and decentralized storage.</li>
                        <li>Implemented blockchain security with Knuct API for tamper-proof registration.</li>
                        <li>Designed a Node.js backend to handle transactions and smart contracts.</li>
                    </ul>
                </li>
                <li>
                    <span class="highlight">AI-Driven Crop Disease Detection</span>
                    <ul>
                        <li>Built a React.js frontend for farmers to upload images and receive disease predictions.</li>
                        <li>Developed a machine learning model for image-based disease classification.</li>
                        <li>Created a Node.js backend with MongoDB to store treatment solutions and recommendations.</li>
                        <li>Integrated multi-language support for better accessibility.</li>
                    </ul>
                </li>
                <li>
                    <span class="highlight">Metro Ticketing System using Graph Data Structures</span>
                    <ul>
                        <li>Designed a Java-based metro ticketing system using graph algorithms.</li>
                        <li>Implemented Dijkstra’s algorithm for real-time shortest path computation.</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="section">
            <h2>Certificates</h2>
            <ul>
                <li>NPTEL – Programming in Java (Top 5% Rank)</li>
                <li>Become Job-Ready in Coding: Basics of Data Structures and Algorithms</li>
                <li>Databases for Developers: Oracle Dev Gym</li>
                <li>AWS Academy Machine Learning Foundations</li>
            </ul>
        </div>
    </div>
</body>
  );
}

export default App;
