
const btn = document.getElementById("btn");

document.addEventListener('click', () => {
    // toggle the 'sun' class on the body
    document.body.classList.toggle('sun');
    // change the icon after click
    if (document.body.classList.contains('sun')) {
        btn.innerHTML = '&#9728;';

    }else{
        btn.innerHTML = '&#127769;';
    }
})