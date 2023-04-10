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
        <p>Here, you can find information about me and my work.</p>
      </main>
      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
