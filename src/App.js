import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, my name is John Doe and I am a web developer based in New York City. I have been building websites for over 5 years and I specialize in creating responsive and user-friendly designs. In my portfolio, you can find examples of my work and learn more about my skills and experience.</p>
        <h2>My Work Experience</h2>
        <ul>
          <li>
            <h3>Web Developer, Acme Inc.</h3>
            <p>June 2020 - Present</p>
            <ul>
              <li>Designed and developed responsive websites using HTML, CSS, and JavaScript</li>
              <li>Implemented new features and functionality using React</li>
              <li>Collaborated with team members to meet project deadlines</li>
              <li>Optimized website performance and improved user experience</li>
            </ul>
          </li>
          <li>
            <h3>Front-end Developer, XYZ Company</h3>
            <p>January 2018 - May 2020</p>
            <ul>
              <li>Created and maintained client websites using WordPress</li>
              <li>Developed custom themes and plugins using PHP and JavaScript</li>
              <li>Designed user interfaces and optimized website accessibility</li>
            </ul>
          </li>
        </ul>
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MySQL</li>
        </ul>
        <h2>My Projects</h2>
        <ul>
          <li><a href="#">Project 1</a></li>
          <li><a href="#">Project 2</a></li>
          <li><a href="#">Project 3</a></li>
        </ul>
      </main>
      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
