/**
 * ANIMATION CONTROLLER
 * Intersection Observer for scroll-based animations
 * Apple-inspired smooth animations
 */

// Animation Observer Configuration
const animationConfig = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

// Initialize Intersection Observer
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animated class when element enters viewport
      entry.target.classList.add('animated');

      // Optional: Stop observing after animation (one-time animation)
      // animationObserver.unobserve(entry.target);
    } else {
      // Optional: Remove animated class when element leaves viewport
      // This allows re-animation on scroll back up
      // entry.target.classList.remove('animated');
    }
  });
}, animationConfig);

// Observe all elements with animation classes
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, ' +
    '.scale-in, .slide-in-left, .slide-in-right, .reveal-on-scroll, ' +
    '.animate-on-scroll'
  );

  animatedElements.forEach(element => {
    animationObserver.observe(element);
  });
}

// Parallax Scroll Effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');

  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Card Grid Stagger Animation
function initCardAnimations() {
  const cardGrids = document.querySelectorAll('.card-grid');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animated');
          }, index * 100); // Stagger by 100ms
        });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cardGrids.forEach(grid => {
    cardObserver.observe(grid);
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for # links (like mobile menu toggle)
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.nav-header');
  if (!navbar) return;

  let lastScroll = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class after scrolling past threshold
    if (currentScroll > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Active Navigation Link Highlight
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Mouse Move Parallax Effect (subtle)
function initMouseParallax() {
  const parallaxElements = document.querySelectorAll('[data-mouse-parallax]');

  if (parallaxElements.length === 0) return;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    parallaxElements.forEach(element => {
      const speed = element.dataset.mouseParallax || 20;
      const xMove = (x - 0.5) * speed;
      const yMove = (y - 0.5) * speed;

      element.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
  });
}

// Reveal Text Animation (letter by letter)
function initTextReveal() {
  const textRevealElements = document.querySelectorAll('.text-reveal');

  textRevealElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${index * 0.03}s`;
      element.appendChild(span);
    });
  });
}

// Loading Animation
function initPageLoad() {
  // Add page-transition class to body
  document.body.classList.add('page-transition');

  // Remove any loading screens
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }, 500);
  }
}

// Image Lazy Loading with Fade In
function initLazyImages() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('fade-in');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Counter Animation (for statistics)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = Math.round(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(start);
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.counter);
        animateCounter(counter, target);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initParallax();
  initCardAnimations();
  initSmoothScroll();
  initNavbarScroll();
  initActiveNavigation();
  initMouseParallax();
  initLazyImages();
  initCounters();
  initPageLoad();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initScrollAnimations,
    initParallax,
    initCardAnimations,
    initSmoothScroll,
    animateCounter
  };
}
