// Here document.addEventListener will wait until the page is fully loaded before 
// running code.
// And console.log will log a message to the browser console (for testing/debugging) 
document.addEventListener("DOMContentLoaded", () => {
    console.log("Victor’s site is live and kicking!");
  });


function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// ============================
// Toggle Navigation Menu
// ============================

// Get hamburger and nav menu elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Add click event to hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on nav menu
  navMenu.classList.toggle('active');

});

 //3. JavaScript — Toggle Icon + Close on Outside Click


// ============================
// Toggle Menu and Icon
// ============================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Track menu state
let menuOpen = false;

// Toggle menu and icon
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuOpen = !menuOpen;

  // Change icon based on state
  hamburger.innerHTML = menuOpen ? '&#10005;' : '&#9776;'; // X or ☰
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInside = hamburger.contains(event.target) || navMenu.contains(event.target);

  if (!isClickInside && menuOpen) {
    navMenu.classList.remove('active');
    hamburger.innerHTML = '&#9776;'; // Reset to ☰
    menuOpen = false;
  }
});
`

