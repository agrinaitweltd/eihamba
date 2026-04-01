import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    const handleEscape = event => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Local Products', href: '#local-products' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      <header className="header" style={scrolled ? { boxShadow: '0 2px 10px rgba(0,0,0,0.1)' } : {}}>
        <div className="header-inner">
          <a href="#" className="header-logo">
            <img src="/logo.png" alt="Eihamba Coffee" className="logo-img" />
          </a>

          <nav className="header-nav">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
            <a href="#contact" className="btn-contact-nav">Contact Us</a>
          </nav>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(current => !current)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">X</button>
        <div className="mobile-nav-panel" onClick={event => event.stopPropagation()}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </div>
      </div>
    </>
  );
}
