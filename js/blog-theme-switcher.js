
// ============================
// Theme Toggle Logic
// ============================

// Get the toggle button
const themeToggle = document.getElementById('themeToggle');

// Listen for clicks
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Change the button icon
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '&#9728;'; // Light mode icon
  } else {
    themeToggle.innerHTML = '&#127769;'; // Dark mode icon
     
  }
});

