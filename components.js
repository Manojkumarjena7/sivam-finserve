/**
 * SIVAM FINSERVE — Shared Components
 * Injects navbar and footer into every page
 */

const NAV_HTML = `
<nav class="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="assets/logo.png" alt="Sivam Finserve Logo">
      <div>
        <div class="nav-logo-text">SIVAM <span>FINSERVE</span></div>
        <div class="nav-logo-powered">Powered by SivamTech</div>
      </div>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="nav-cta">
      <a href="apply.html" class="btn btn-primary btn-sm">Apply Now →</a>
      <button class="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">🏠 Home</a>
  <a href="services.html">🗂️ All Services</a>
  <a href="credit-card.html">💳 Credit Cards</a>
  <a href="loan.html">💰 Loans</a>
  <a href="bank-account.html">🏦 Bank Account</a>
  <a href="insurance.html">🛡️ Insurance</a>
  <a href="investment.html">📈 Investment</a>
  <a href="blog.html">📝 Blog</a>
  <a href="contact.html">📞 Contact</a>
  <a href="apply.html" class="btn btn-primary">Apply Now →</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="assets/logo.png" alt="Sivam Finserve">
          <div class="footer-logo-text">SIVAM FINSERVE</div>
        </div>
        <p>We help individuals across India access financial services easily — credit cards, loans, bank accounts & insurance — 100% free of charge.</p>
        <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">
          <a href="https://wa.me/919777074636" target="_blank" class="btn btn-wa btn-sm">💬 WhatsApp</a>
          <a href="tel:9777074636" class="btn btn-outline btn-sm">📞 Call Us</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="credit-card.html">Credit Cards</a></li>
          <li><a href="bank-account.html">Bank Account</a></li>
          <li><a href="loan.html">Personal Loans</a></li>
          <li><a href="insurance.html">Insurance</a></li>
          <li><a href="investment.html">Investments</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">All Services</a></li>
          <li><a href="apply.html">Apply Now</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact Us</h5>
        <ul>
          <li><a href="tel:9777074636">📞 9777074636</a></li>
          <li><a href="mailto:sivamfinserve@gmail.com">✉️ Email Us</a></li>
          <li><a href="contact.html">📍 Marathahalli, Bengaluru</a></li>
        </ul>
        <div style="margin-top:16px;">
          <div style="font-size:.78rem;color:#475569;line-height:1.7;">Mon – Sat: 9 AM – 8 PM</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-disclaimer">
        <strong style="color:#94a3b8;">Disclaimer:</strong> Sivam Finserve is an authorized referral partner. We do not guarantee loan or credit card approvals. Final approval decisions are made by the respective banks, NBFCs, and financial institutions. All products and offers are subject to eligibility criteria and partner terms.
      </div>
      <div class="footer-copy">
        <p>© 2025 Sivam Finserve. All rights reserved.</p>
        <p style="margin-top:4px;">Powered by <a href="#">SivamTech</a></p>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/919777074636?text=Hi!%20I%20need%20help%20from%20Sivam%20Finserve." target="_blank" class="float-wa" title="Chat on WhatsApp">
  <div class="float-wa-tip">Chat on WhatsApp</div>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.073 23.74a.5.5 0 0 0 .598.65l6.07-1.594A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.99 0-3.86-.548-5.463-1.5l-.374-.222-3.874 1.017 1.035-3.77-.244-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
</a>
<div id="toast"></div>`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
