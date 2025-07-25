// Slider button navigation
document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.projects-slider');
  
  sliders.forEach(slider => {
    const container = slider.querySelector('.projects-grid');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    
    if (!container || !prevBtn || !nextBtn) return;
    
    // Scroll left when clicking prev button
    prevBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
    
    // Scroll right when clicking next button
    nextBtn.addEventListener('click', () => {
      container.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  });
});
