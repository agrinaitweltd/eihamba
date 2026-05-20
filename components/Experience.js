import CountText from '@/components/CountText';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-grid">
          {/* Left: Content */}
          <div className="experience-content reveal-left">
            <p className="section-label">The Eihamba Experience</p>
            <h2 className="section-title">A Captivating Sensory Journey</h2>
            <div className="divider"></div>

            <p className="experience-text">
              Our meticulous production process involves fully washing the coffee beans,
              ensuring that each cup of Eihamba Coffee is bursting with the natural flavors
              that nature has to offer.
            </p>
            <p className="experience-text">
              From the first sip, you&apos;ll be transported to the misty mornings of Bwindi,
              as hints of <strong>rich earthiness</strong> blend harmoniously with{' '}
              <strong>delicate floral notes</strong>, creating a truly captivating sensory experience.
            </p>

            <div className="tasting-notes">
              <h4>Tasting Notes</h4>
              <div className="tasting-tags">
                <span className="tasting-tag">Rich Earthiness</span>
                <span className="tasting-tag">Delicate Floral</span>
                <span className="tasting-tag">Smooth Finish</span>
                <span className="tasting-tag">Misty Forest Aroma</span>
              </div>
            </div>

            <div className="process-features">
              <div className="process-feature">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M12 2C6 2 3 7 3 12c0 3 1.5 5.5 4 7h10c2.5-1.5 4-4 4-7 0-5-3-10-9-10z"/>
                    <path d="M12 6v6l3 3"/>
                  </svg>
                </div>
                <span>Fully Washed</span>
              </div>
              <div className="process-feature">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <circle cx="12" cy="12" r="4"/>
                    <line x1="12" y1="2" x2="12" y2="4"/>
                    <line x1="12" y1="20" x2="12" y2="22"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="2" y1="12" x2="4" y2="12"/>
                    <line x1="20" y1="12" x2="22" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </div>
                <span>Sun Dried</span>
              </div>
              <div className="process-feature">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M18 11V6a2 2 0 0 0-4 0v5"/>
                    <path d="M14 10V4a2 2 0 0 0-4 0v6"/>
                    <path d="M10 10.5V6a2 2 0 0 0-4 0v8"/>
                    <path d="M6 14a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2.5"/>
                  </svg>
                </div>
                <span>Hand Picked</span>
              </div>
              <div className="process-feature">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 4.82 21 15.09 15.09 0 0 0 17 16.5"/>
                    <path d="M17 8a5 5 0 0 0-5 5"/>
                    <path d="M21 3A18.9 18.9 0 0 1 17 8"/>
                  </svg>
                </div>
                <span>100% Natural</span>
              </div>
            </div>
          </div>

          {/* Right: Product Card */}
          <div className="experience-card reveal-right">
            <div className="product-image">
              <img src="/coffee-package.webp" alt="Eihamba coffee package" className="product-img-real" />
              <div className="badge">Premium Quality</div>
            </div>

            <div className="card-info">
              <h3>The Perfect Cup</h3>
              <p>
                Every cup tells a story of misty mornings, lush forests, and the dedicated hands
                that nurtured each bean from seedling to harvest.
              </p>
              <div className="card-stats">
                <div className="card-stat">
                  <CountText as="h4" value="1,100m" />
                  <p>Min Altitude</p>
                </div>
                <div className="card-stat">
                  <CountText as="h4" value="1,800m" />
                  <p>Max Altitude</p>
                </div>
                <div className="card-stat">
                  <CountText as="h4" value="2" />
                  <p>Varieties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
