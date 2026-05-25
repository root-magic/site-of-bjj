const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));

const galleryEl = document.getElementById('photoGallery');
const step = 516;

document.getElementById('galleryPrev')?.addEventListener('click', () => {
    galleryEl.scrollBy({ left: -step, behavior: 'smooth' });
});

document.getElementById('galleryNext')?.addEventListener('click', () => {
    galleryEl.scrollBy({ left: step, behavior: 'smooth' });
});