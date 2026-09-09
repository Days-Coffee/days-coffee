const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
    // Toggle the 'show-mobile-menu' class on the body element to show/hide the mobile menu
    document.body.classList.toggle('show-mobile-menu');
});

// Close the mobile menu when the close button is clicked
menuCloseButton.addEventListener('click', () =>  menuOpenButton.click());

// Close the mobile menu when the nav link is clicked


navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click());
})