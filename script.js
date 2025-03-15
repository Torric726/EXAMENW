// Navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active states
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });

        // Close mobile menu
        nav.classList.remove('active');

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Like functionality
const likeBtns =  document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const likesCount = btn.querySelector('.likes-count');
        let currentLikes = parseInt(likesCount.textContent);
        likesCount.textContent = currentLikes + 1;
    });
});

// Friend modal
const friendCards = document.querySelectorAll('.friend-card');
const modal = document.getElementById('friendModal');
const closeModal = modal.querySelector('.close-modal');

friendCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const name = card.querySelector('h3');
        const role = card.querySelector('p');

        modal.querySelector('.modal-avatar').src = img.src;
        modal.querySelector('.modal-name').textContent = name.textContent;
        modal.querySelector('.modal-role').textContent = role.textContent;

        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    if (!data.terms) {
        alert('Please accept the terms and conditions');
        return;
    }
    
    alert('Message sent successfully!');
    contactForm.reset();
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});