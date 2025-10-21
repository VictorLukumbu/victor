// Wait until the page is fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  console.log("Victor’s site is live and kicking!");

  // ============================
  // Toggle Navigation Menu + Animate Hamburger
  // ============================

  // Get hamburger and nav menu elements
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // Add click event to hamburger icon
  hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on nav menu to show/hide it
    navMenu.classList.toggle('active');

    // Toggle the 'active' class on hamburger to animate into X
    hamburger.classList.toggle('active');
  });

  // ============================
  // Lightbox Functionality
  // ============================

  // Opens the lightbox and sets the image source
  window.openLightbox = function(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src;
    lightbox.style.display = 'flex'; // Show the lightbox
  };

  // Closes the lightbox when clicked
  document.getElementById('lightbox').addEventListener('click', function () {
    this.style.display = 'none';
  });
});
