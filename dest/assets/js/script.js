var body = document.getElementById('body');

// open mobile menu when clicking on mobile nav icon
document.getElementById('js-toggle-mobile-nav').onclick = function() {
  body.classList.toggle('open-menu');
}

// Get the slider element
const slider = document.querySelector('.slider');

// Clone the first slide and append it to the end
const firstSlideClone = slider.firstElementChild.cloneNode(true);
slider.appendChild(firstSlideClone);

// Function to loop the slider
function loopSlider() {
    // Move to the next slide with smooth scrolling
    slider.scrollLeft += slider.firstElementChild.offsetWidth;
    
    // If reached the last slide, scroll back to the first slide
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Set interval to loop the slider every 4 seconds
setInterval(loopSlider, 4000);

