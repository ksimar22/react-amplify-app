import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Hi, I'm [Your Name]</h1>
          <p>A [Your Profession] based in [Your Location].</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>[Your Description]</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>[Job Title]</h3>
              <p>[Company Name] - [Employment Dates]</p>
              <p>[Job Description]</p>
            </li>
            <li>
              <h3>[Job Title]</h3>
              <p>[Company Name] - [Employment Dates]</p>
              <p>[Job Description]</p>
            </li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>[Project Title]</h3>
              <p>[Project Description]</p>
            </li>
            <li>
              <h3>[Project Title]</h3>
              <p>[Project Description]</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
