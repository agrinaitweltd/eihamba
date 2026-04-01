import { useState } from 'react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="footer">
      {/* Newsletter Strip */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Stay in the Loop</h3>
              <p>Get updates on new harvests, promotions, and coffee stories from Bwindi.</p>
            </div>
            {subscribed ? (
              <div className="newsletter-success">
                <i className="fa-solid fa-circle-check"></i>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src="/logo.png" alt="Eihamba Coffee" className="footer-logo-img" />
            <p>
              From the misty highlands of Bwindi to your cup. Premium Arabica &amp; Robusta
              supporting gorilla conservation &amp; empowering local communities.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.tiktok.com/@eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
              <a href="https://www.linkedin.com/company/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://x.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X/Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.youtube.com/@eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#journey">Our Journey</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Ugandan Robusta</a></li>
              <li><a href="#products">DRUGAR Arabica</a></li>
              <li><a href="#products">WUGAR Arabica</a></li>
              <li><a href="#local-products">Roasted Beans</a></li>
              <li><a href="#local-products">Coffee Powder</a></li>
              <li><a href="#local-products">Coffee Skincare</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-item">
                <div className="fc-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h5>Our Location</h5>
                  <p>Bwindi National Park, Uganda</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fc-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h5>Call Us</h5>
                  <p>+256 (0) 773087962<br />+256 (0) 778809439</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fc-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h5>Email Us</h5>
                  <p>info@eihambacoffee.org<br />dickson@eihambacoffee.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="footer-certifications">
          <p className="cert-label">Certified &amp; Registered</p>
          <div className="cert-badges">
            <span className="cert-badge">UCDA Certified</span>
            <span className="cert-badge">URSB Registered</span>
            <span className="cert-badge">URA Compliant</span>
            <span className="cert-badge">UNBS Quality</span>
            <span className="cert-badge">ISICAFE Member</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2026 <a href="#">Eihamba Coffee</a>. Crafted with love in Uganda.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-branding">
          <p>Made and designed by</p>
          <img src="/kavo.png" alt="Kavo Tech" className="footer-kavo-img" />
        </div>
      </div>
    </footer>
  );
}
