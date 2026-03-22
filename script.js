/**
 * SIVAM FINSERVE — Global JavaScript
 * Handles: Nav, Mobile Menu, Scroll Animations, Forms, Lead Tracking
 */

/* ── CONSTANTS ────────────────────────────────────────────── */
const WA_NUMBER  = '919777074636';
const PHONE      = '9777074636';
const REFERRAL_URL = 'https://app.banksathi.com/'; // Replace with your actual referral link

/* ── MOBILE NAV ────────────────────────────────────────────── */
function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

/* ── SCROLL ANIMATION ──────────────────────────────────────── */
function initScrollAnimation() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── TOAST ─────────────────────────────────────────────────── */
function showToast(msg, duration = 3500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── LEAD STORAGE ──────────────────────────────────────────── */
function saveLead(data) {
  const leads = JSON.parse(localStorage.getItem('sf_leads') || '[]');
  leads.push({ ...data, timestamp: new Date().toISOString(), id: Date.now() });
  localStorage.setItem('sf_leads', JSON.stringify(leads));
  // Future: POST to backend API
  // fetch('/api/leads', { method:'POST', body: JSON.stringify(data) });
}

/* ── APPLY NOW REDIRECT ────────────────────────────────────── */
function applyNow(service) {
  // Store selected service and redirect to apply page
  sessionStorage.setItem('sf_selected_service', service);
  window.location.href = 'apply.html?service=' + encodeURIComponent(service);
}

/* ── WHATSAPP CTA ──────────────────────────────────────────── */
function waChat(msg) {
  const m = encodeURIComponent(msg || 'Hi! I need help with a financial service from Sivam Finserve.');
  window.open(`https://wa.me/${WA_NUMBER}?text=${m}`, '_blank');
}

/* ── GET URL PARAM ─────────────────────────────────────────── */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* ── CONTACT FORM ──────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    saveLead({ ...data, source: 'contact_form' });
    const msg = `Hi Sivam Finserve! My name is ${data.name}. Phone: ${data.phone}. Query: ${data.message || 'General inquiry'}`;
    waChat(msg);
    showToast('✅ Message sent! We\'ll contact you shortly.');
    form.reset();
  });
}

/* ── APPLY FORM ────────────────────────────────────────────── */
function initApplyForm() {
  const form = document.getElementById('applyForm');
  if (!form) return;

  // Auto-fill service from URL param or sessionStorage
  const service = getParam('service') || sessionStorage.getItem('sf_selected_service') || '';
  const svcField = form.querySelector('[name="service"]');
  if (svcField && service) svcField.value = service;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    saveLead({ ...data, source: 'apply_form' });

    // Show processing state
    const btn = form.querySelector('[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '⏳ Processing your request...';
    btn.disabled = true;

    // WhatsApp message
    const msg = `Hi! I am applying for *${data.service}*.\nName: ${data.name}\nPhone: ${data.phone}\nCity: ${data.city}\nIncome: ${data.income || 'Not specified'}\nJob: ${data.job_type || 'Not specified'}`;

    setTimeout(() => {
      showToast('✅ Application submitted! Redirecting to partner portal…');
      waChat(msg);
      setTimeout(() => {
        window.open(REFERRAL_URL, '_blank');
        btn.innerHTML = original;
        btn.disabled = false;
        form.reset();
      }, 1800);
    }, 1200);
  });
}

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimation();
  initContactForm();
  initApplyForm();
});
