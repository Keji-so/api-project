// selectors

const hamBurger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


// event listeners
 hamBurger.addEventListener('click', () => {
    menu.classList.toggle('open');
    links.forEach((item) => {
        item.classList.toggle('active');
    });
   
});



