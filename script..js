// Simple interactions: mobile menu toggle and form submission UI
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) nav.classList.remove('open');
    else nav.classList.add('open');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu on link click
        if (nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // Basic form submit feedback (works whether or not you have Formspree set)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      // If you're using Formspree or a real endpoint, fetch will handle it.
      // Here we provide a friendly UI while the form posts.
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        const initialText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        // let the browser continue to submit normally (or you can implement fetch submit)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerText = initialText;
          // optional: reset form
          // form.reset();
          alert('If your form action is configured, your message will be sent. If not, replace the form action with your Formspree endpoint or server URL.');
        }, 1200);
      }
    });
  }
});
