/**
 * MAIN JAVASCRIPT
 * General functionality for Thomas Kaufmann website
 */

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (!navToggle || !navMenu) return;

  // Toggle menu
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navToggle.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });
    }
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');

      const spans = navToggle.querySelectorAll('span');
      spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');

      const spans = navToggle.querySelectorAll('span');
      spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });
    }
  });
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear previous errors
      const errorElements = form.querySelectorAll('.form-error');
      errorElements.forEach(error => error.style.display = 'none');

      const formGroups = form.querySelectorAll('.form-group');
      formGroups.forEach(group => group.classList.remove('error'));

      let isValid = true;

      // Validate each field
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

      inputs.forEach(input => {
        const value = input.value.trim();
        const formGroup = input.closest('.form-group');

        if (!value) {
          showError(formGroup, 'Dieses Feld ist erforderlich');
          isValid = false;
        } else if (input.type === 'email' && !isValidEmail(value)) {
          showError(formGroup, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
          isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(value)) {
          showError(formGroup, 'Bitte geben Sie eine gültige Telefonnummer ein');
          isValid = false;
        }
      });

      if (isValid) {
        handleFormSubmit(form);
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        const formGroup = input.closest('.form-group');
        const value = input.value.trim();

        if (input.hasAttribute('required') && !value) {
          showError(formGroup, 'Dieses Feld ist erforderlich');
        } else if (input.type === 'email' && value && !isValidEmail(value)) {
          showError(formGroup, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
        } else if (input.type === 'tel' && value && !isValidPhone(value)) {
          showError(formGroup, 'Bitte geben Sie eine gültige Telefonnummer ein');
        } else {
          clearError(formGroup);
        }
      });

      input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (formGroup.classList.contains('error')) {
          clearError(formGroup);
        }
      });
    });
  });
}

function showError(formGroup, message) {
  formGroup.classList.add('error');
  const errorElement = formGroup.querySelector('.form-error');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function clearError(formGroup) {
  formGroup.classList.remove('error');
  const errorElement = formGroup.querySelector('.form-error');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^[\d\s\+\-\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

function handleFormSubmit(form) {
  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log('Form submitted:', data);

  // Show success message
  showSuccessMessage(form);

  // Reset form
  form.reset();

  // In production, send data to server
  // Example:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  // .then(response => response.json())
  // .then(data => showSuccessMessage(form))
  // .catch(error => showErrorMessage(form));
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success fade-in';
  successDiv.innerHTML = `
    <div style="
      background-color: #8B9556;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-top: 1rem;
      text-align: center;
    ">
      ✓ Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.
    </div>
  `;

  form.appendChild(successDiv);

  setTimeout(() => {
    successDiv.style.opacity = '0';
    setTimeout(() => successDiv.remove(), 300);
  }, 5000);
}

// Cookie Consent Banner
function initCookieConsent() {
  // Check if user has already consented
  if (localStorage.getItem('cookieConsent') === 'true') {
    return;
  }

  // Create cookie banner
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #2C2420;
      color: #FAF6F0;
      padding: 1.5rem 2rem;
      box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    ">
      <p style="margin: 0; flex: 1; min-width: 250px;">
        Diese Website verwendet Cookies, um Ihnen die beste Erfahrung zu bieten.
        <a href="#" style="color: #D4A574; text-decoration: underline;">Mehr erfahren</a>
      </p>
      <button id="acceptCookies" style="
        background-color: #D4A574;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.3s;
      ">
        Akzeptieren
      </button>
    </div>
  `;

  document.body.appendChild(banner);

  // Handle accept button
  document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 300);
  });

  // Animate banner in
  setTimeout(() => {
    banner.style.opacity = '1';
    banner.style.transition = 'opacity 0.3s';
  }, 1000);
}

// Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Zurück nach oben');
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: var(--primary-terracotta);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(92, 74, 62, 0.2);
  `;

  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hover effect
  backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'scale(1.1)';
    backToTopBtn.style.backgroundColor = 'var(--dark-brown)';
  });

  backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'scale(1)';
    backToTopBtn.style.backgroundColor = 'var(--primary-terracotta)';
  });
}

// Gallery Lightbox
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (galleryItems.length === 0) return;

  galleryItems.forEach(item => {
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
      openLightbox(item.src, item.alt);
    });
  });
}

function openLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 2rem;
    ">
      <img src="${src}" alt="${alt}" style="
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      ">
      <button style="
        position: absolute;
        top: 2rem;
        right: 2rem;
        background-color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      ">×</button>
    </div>
  `;

  document.body.appendChild(lightbox);

  // Animate in
  setTimeout(() => {
    lightbox.style.opacity = '1';
    lightbox.style.transition = 'opacity 0.3s';
  }, 10);

  // Close lightbox
  lightbox.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    setTimeout(() => lightbox.remove(), 300);
  });

  // Prevent closing when clicking on image
  const img = lightbox.querySelector('img');
  img.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Update current year in footer
function updateYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();

  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
}

// Print current page
function initPrintButton() {
  const printButtons = document.querySelectorAll('[data-print]');

  printButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.print();
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFormValidation();
  initCookieConsent();
  initBackToTop();
  initGalleryLightbox();
  updateYear();
  initPrintButton();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden
    console.log('Page hidden');
  } else {
    // Page is visible
    console.log('Page visible');
  }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isValidEmail,
    isValidPhone,
    initMobileNav,
    initFormValidation
  };
}
