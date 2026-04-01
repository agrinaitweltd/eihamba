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
                <div className="icon">FW</div>
                <span>Fully Washed</span>
              </div>
              <div className="process-feature">
                <div className="icon">SD</div>
                <span>Sun Dried</span>
              </div>
              <div className="process-feature">
                <div className="icon">HP</div>
                <span>Hand Picked</span>
              </div>
              <div className="process-feature">
                <div className="icon">NT</div>
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
