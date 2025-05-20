// Fade-in and scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    for (const el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            el.classList.add('visible');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    // Carrossel de depoimentos
    let idx = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.carousel-controls .prev');
    const nextBtn = document.querySelector('.carousel-controls .next');
    function showTestimonial(i) {
        testimonials.forEach((el, j) => {
            el.classList.toggle('active', j === i);
        });
    }
    showTestimonial(idx);
    prevBtn.addEventListener('click', () => {
        idx = (idx - 1 + testimonials.length) % testimonials.length;
        showTestimonial(idx);
    });
    nextBtn.addEventListener('click', () => {
        idx = (idx + 1) % testimonials.length;
        showTestimonial(idx);
    });
    // Auto-slide
    setInterval(() => {
        idx = (idx + 1) % testimonials.length;
        showTestimonial(idx);
    }, 6000);
});
