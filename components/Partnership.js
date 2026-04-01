import CountText from '@/components/CountText';

export default function Partnership() {
  return (
    <section className="partnership" id="partnership">
      <div className="container">
        <div className="partnership-grid">
          {/* Left: Partner Card */}
          <div className="partner-card reveal-scale">
            <div className="partner-logo-wrapper">
              <img src="/partner-logo.png" alt="Bwindi Coffee Growers Cooperative Society" className="partner-logo-img" />
            </div>
            <h4>Our Partner</h4>
            <p className="partner-name">Bwindi Coffee Growers Cooperative Society</p>
            <div className="partner-stats">
              <div className="stat">
                <CountText as="h3" value="500+" />
                <p>Farmer Members</p>
              </div>
              <div className="stat">
                <CountText as="h3" value="100%" />
                <p>Community Benefit</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="partnership-content reveal-right">
            <p className="section-label">Community Partnership</p>
            <h2 className="section-title">Partnering with Bwindi Coffee Growers Cooperative</h2>
            <div className="divider"></div>

            <p className="partnership-text">
              We proudly partner with the <strong>Bwindi Coffee Growers Cooperative Society</strong> to
              ensure we source only the finest quality coffee beans while creating lasting positive impact
              for the communities surrounding the national park.
            </p>
            <p className="partnership-text">
              This partnership goes beyond business—it&apos;s a commitment to sustainable development.
              Every bean we purchase directly benefits local farmers and their families, providing fair
              income, education opportunities, and healthcare support to communities who live alongside
              the endangered mountain gorillas.
            </p>

            <div className="partnership-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">+</div>
                <div>
                  <h4>Direct Sourcing</h4>
                  <p>Working directly with cooperative farmers ensures quality and fair prices</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">+</div>
                <div>
                  <h4>Community Reinvestment</h4>
                  <p>Profits flow back to support local schools, healthcare, and infrastructure</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">+</div>
                <div>
                  <h4>Conservation Support</h4>
                  <p>Together we protect Bwindi&apos;s forest and its precious wildlife</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
