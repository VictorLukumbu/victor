
// Get the toggle button

const moon = document.getElementById('moon');

// Now listen for the clicks
moon.addEventListener('click',() => {
    // Toggle the 'icon' class on the body
    document.body.classList.toggle("icon");
    // change the button  into the sun after clicking
    if (document.body.classList.contains('icon')) {
        moon.innerHTML = '&#9728;';
    }else{
        moon.innerHTML = '&#127769;';
    }
} )