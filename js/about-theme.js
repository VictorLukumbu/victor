// Theme Toggle logic

// Get the toggle button

const theme = document.getElementById('theme');

// Listen for the clicks
theme.addEventListener('click', () => {
    // Toggle the 'dark' class on the body
    document.body.classList.toggle('dark');
    // change the button icon
    if (document.body.classList.contains("dark")) {
        theme.innerHTML = '&#9728;';
    }else{
        theme.innerHTML = '&#127769;';
    }
});