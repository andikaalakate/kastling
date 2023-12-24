// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

function HamburgerActive() {
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
}

Hamburger.addEventListener('click', HamburgerActive)

// Di luar Hamburger
window.addEventListener('click', function (e) {
    if (e.target != Hamburger && e.target != navMenu) {
        Hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})
