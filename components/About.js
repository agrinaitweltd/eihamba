import CountText from '@/components/CountText';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Image */}
          <div className="about-image reveal-left">
            <img src="/about-farmer.jpg" alt="Farmer picking coffee cherries in Bwindi" className="about-img" />

            {/* Stat Overlay */}
            <div className="stat-overlay">
              <CountText as="h3" value="100%" />
              <p>Ugandan coffee—Arabica &amp;<br />Robusta from Bwindi</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content reveal-right">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Born in the Heart of Bwindi&apos;s Lush Forest</h2>
            <div className="divider"></div>

            <p className="about-text">
              Eihamba Coffee is an exceptional blend crafted with utmost care in the breathtaking
              surroundings of Bwindi National Park. Our coffee beans are cultivated at altitudes
              ranging from 1,100 to 1,800 meters above sea level, resulting in a truly unique
              flavor profile that captures the essence of this remarkable region.
            </p>
            <p className="about-text">
              What sets Eihamba Coffee apart is not only its exceptional taste but also its profound
              purpose. We partner with the <strong>Bwindi Coffee Growers Cooperative Society</strong> to
              ensure we get the right coffee while bringing benefits back to the communities surrounding
              the national park. Together with reformed poachers who have embraced sustainable farming,
              we are transforming livelihoods and creating guardians of this precious ecosystem.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="icon">▲</div>
                <div>
                  <h4>High Altitude</h4>
                  <p>1,100-1,800m elevation</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="icon">GC</div>
                <div>
                  <h4>Gorilla Conservation</h4>
                  <p>Protecting wildlife</p>
                </div>
              </div>
            </div>

            <a href="#" className="btn-discover">Discover Our Story →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
