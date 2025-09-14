// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon','fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun','fa-moon');
    }
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navbar.classList.add('scrolled');
        backToTop.style.display = "block";
    } else {
        navbar.classList.remove('scrolled');
        backToTop.style.display = "none";
    }
});

// ========== SMOOTH SCROLL FOR ANCHORS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
        if(navList.classList.contains('active')) navList.classList.remove('active');
    });
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');
hamburger.addEventListener('click', () => navList.classList.toggle('active'));

// ========== TYPED.JS WELCOME TEXT ==========
const typed = new Typed('#typed-text', {
    strings: ["Web Developer.", "High School Educator.", "Problem Solver."],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});

// ========== FADE-IN ON SCROLL ==========
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = { threshold:0.1, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
    
