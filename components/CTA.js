import CountText from '@/components/CountText';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg-image">
        <img src="/hero-bg.png" alt="" className="cta-bg-img" />
      </div>
      <div className="cta-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-layout">
          <div className="cta-left reveal-left">
            <p className="cta-label">Experience Uganda</p>
            <h2>Ready to Taste<br />the Difference?</h2>
            <div className="cta-divider"></div>
            <p className="cta-desc">
              Join thousands of coffee lovers who have discovered the unique taste of Ugandan
              Arabica and Robusta. Fresh from Bwindi, ethically sourced, expertly roasted —
              delivered to your door.
            </p>
          </div>
          <div className="cta-right reveal-right">
            <div className="cta-card">
              <div className="cta-card-stats">
                <div className="cta-stat">
                  <CountText as="h3" value="100%" />
                  <p>Satisfaction</p>
                </div>
                <div className="cta-stat">
                  <CountText as="h3" value="3+" />
                  <p>Countries</p>
                </div>
                <div className="cta-stat">
                  <CountText as="h3" value="413+" />
                  <p>Farmers</p>
                </div>
              </div>
              <div className="cta-card-actions">
                <a href="#products" className="btn-primary">Shop Fresh Coffee →</a>
                <a href="#contact" className="btn-cta-outline">Wholesale Inquiries</a>
              </div>
              <div className="cta-trust">
                <span>Fast Shipping</span>
                <span>Fair Trade</span>
                <span>Subscriptions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
