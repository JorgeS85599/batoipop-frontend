import { ScrollSpy } from 'bootstrap'

window.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if(location.pathname.startsWith('/cuenta/')||location.pathname.startsWith('/login')){
            navbarCollapsible.classList.add('navbar-shrink')
        }else{
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const track = document.querySelector('.track');

    let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

    window.addEventListener('resize', () => {
        carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    })

    let index = 0;

    next.addEventListener('click', () => {
        index++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * carouselWidth}px)`;

        if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
            next.classList.add('hide');
        }
    })

    prev.addEventListener('click', () => {
        index--;
        next.classList.remove('hide');
        if (index === 0) {
            prev.classList.remove('show');
        }
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
    })


});