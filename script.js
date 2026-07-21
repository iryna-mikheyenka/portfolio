// Sticky top bar shadow on scroll
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 8);
});

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Copy email to clipboard
const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  const original = copyBtn.textContent;
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = 'Copied to clipboard ✓';
    } catch (e) {
      window.location.href = `mailto:${email}`;
    }
    setTimeout(() => { copyBtn.textContent = original; }, 2000);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
