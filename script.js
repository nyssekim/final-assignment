// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Store the dark mode preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Function to apply dark mode if it was enabled
  function applyDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  
  // Call applyDarkModePreference when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', applyDarkModePreference);
  
  // Get the dark mode toggle button element
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  // Add click event listener to the dark mode toggle button
  darkModeToggle.addEventListener('click', toggleDarkMode);