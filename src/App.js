import React from 'react';
import './App.css';

function App() {
 // Smooth scrolling for navigation links
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// Toggle mobile menu
$('.menu-toggle').click(function() {
  $('nav').toggleClass('open');
});

// Typed.js for animated text
var typed = new Typed('.typed-text', {
  strings: ['Web Developer', 'Designer', 'Problem Solver'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Particle.js for background animation
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles loaded!');
});

}

export default App;