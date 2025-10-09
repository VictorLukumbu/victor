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

// 🧠 Toggles the 'active' class to show/hide menu
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
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

 


// Opens the lightbox and sets the image source
function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex'; // Show the lightbox
}

// Closes the lightbox when clicked
document.getElementById('lightbox').addEventListener('click', function () {
  this.style.display = 'none';
});
