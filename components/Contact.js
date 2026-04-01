export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info reveal-left">
            <p className="section-label">Get In Touch</p>
            <h2>Let&apos;s Start a Conversation</h2>
            <div className="divider"></div>
            <p>
              Whether you&apos;re a specialty roaster seeking premium single-origin beans or a
              large-scale buyer looking for reliable supply, we&apos;d love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Bwindi National Park<br />Uganda</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Phone</h4>
                  <p>+256 773087962<br />+256 778809439</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>info@eihambacoffee.org</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon"><i className="fa-solid fa-clock"></i></div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-1PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://x.com/eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X/Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.tiktok.com/@eihamba" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper reveal-right">
            <h3>Send Us a Message</h3>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Company name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+256 0000000000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full">
                  <label>Inquiry Type</label>
                  <select defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="retail">Retail Purchase</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full">
                  <label>Message *</label>
                  <textarea placeholder="Tell us about your needs..." required></textarea>
                </div>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
