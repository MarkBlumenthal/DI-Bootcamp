document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar active link on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar-nav .nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });
    
    // Typing effect for hero section
    const typer = document.querySelector('.typer');
    if (typer) {
        const words = typer.getAttribute('data-words').split(',');
        let wordIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;
        let text = '';

        function type() {
            const currentWord = words[wordIndex].trim();
            if (isDeleting) {
                text = currentWord.substring(0, text.length - 1);
            } else {
                text = currentWord.substring(0, text.length + 1);
            }

            typer.textContent = text;

            if (!isDeleting && text === currentWord) {
                setTimeout(() => isDeleting = true, 1000); // Pause before deleting
            } else if (isDeleting && text === '') {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(type, isDeleting ? 50 : 150); // Adjust typing speed here
        }

        type();
    }
 // Initialize Bootstrap carousel
 const techCarousel = document.querySelector('#techCarousel');
 if (techCarousel) {
     const carousel = new bootstrap.Carousel(techCarousel, {
         interval: 3000, // Change slide every 3 seconds
         ride: 'carousel'
     });
 }
});

