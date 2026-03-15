// ***************** JS Script for Hamburger Menu *****************
 const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

// ***************** JS Script for Digit Counter Scroll *****************
const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
          const increment = target / 100;
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
        observer.unobserve(counter); // Only animate once
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));


// ******************* JS Script for Image Silder *******************
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const imgs = Array.from(slides.querySelectorAll('img'));
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const dotsWrap = slider.querySelector('.dots');

  let index = 0;
  let autoId = null;
  const AUTOPLAY_MS = 5000;

  // Create dots
  imgs.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to slide ' + (i+1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  // update transform using pixel math (reliable even with complex CSS)
  function update() {
    const slideWidth = slider.clientWidth;
    slides.style.transition = 'transform 0.45s ease';
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function goTo(i) {
    index = (i % imgs.length + imgs.length) % imgs.length;
    update();
  }

  nextBtn.addEventListener('click', () => goTo(index + 1));
  prevBtn.addEventListener('click', () => goTo(index - 1));

  // autoplay
  function startAuto() {
    stopAuto();
    autoId = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
  }
  function stopAuto() {
    if (autoId) { clearInterval(autoId); autoId = null; }
  }

  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);
  slider.addEventListener('focusin', stopAuto);
  slider.addEventListener('focusout', startAuto);

  // Resize -> recalc pixel translate
  window.addEventListener('resize', () => {
    // small delay for smoother resize handling
    requestAnimationFrame(update);
  });

  // Basic pointer (touch) swipe support
  let dragging = false;
  let startX = 0;

  slides.addEventListener('pointerdown', (e) => {
    dragging = true;
    startX = e.clientX;
    slides.style.transition = 'none';
    slides.setPointerCapture(e.pointerId);
  });

  slides.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const delta = e.clientX - startX;
    const slideWidth = slider.clientWidth;
    slides.style.transform = `translateX(${ -index * slideWidth + delta }px)`;
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    const delta = e.clientX - startX;
    const slideWidth = slider.clientWidth;
    const threshold = slideWidth * 0.18; // swipe threshold
    if (delta < -threshold) {
      goTo(index + 1);
    } else if (delta > threshold) {
      goTo(index - 1);
    } else {
      update(); // snap back
    }
    try { slides.releasePointerCapture(e.pointerId); } catch {}
  }

  slides.addEventListener('pointerup', endDrag);
  slides.addEventListener('pointercancel', () => { dragging = false; update(); });

  // init
  update();
  startAuto();

  // Helpful dev debug hints in console
  console.log('Slider initialized — slides:', imgs.length);
});


// **************** JS Script for Annoucement Pop Up ****************
// Show popup 5 seconds after page loads
window.onload = function() {
  setTimeout(function() {
    document.getElementById('discountPopup').style.display = 'flex';
    document.body.classList.add('popup-active'); // Add class to body to prevent scrolling
  }, 8000);
};

// Close popup function
function closePopup() {
  document.getElementById('discountPopup').style.display = 'none';
  document.body.classList.remove('popup-active'); // Remove class to restore scrolling
}