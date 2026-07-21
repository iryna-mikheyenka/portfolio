// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

// Copy email to clipboard (works for any button with data-email)
function wireCopyButton(btn) {
  if (!btn) return;
  const original = btn.textContent;
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = 'Copied ✓';
    } catch (e) {
      window.location.href = `mailto:${email}`;
    }
    setTimeout(() => { btn.textContent = original; }, 1800);
  });
}
wireCopyButton(document.getElementById('copyEmail'));
wireCopyButton(document.getElementById('copyEmail2'));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
