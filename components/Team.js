export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-header">
          <p className="sub-label">The People Behind Our Success</p>
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Experienced professionals committed to excellence in every aspect of our operations
          </p>
        </div>

        <div className="team-grid">
          <div className="team-connectors" aria-hidden="true">
            <span className="connector-line"></span>
            <span className="connector-dot connector-dot-left"></span>
            <span className="connector-dot connector-dot-center"></span>
            <span className="connector-dot connector-dot-right"></span>
          </div>

          {/* Left Member */}
          <div className="team-member">
            <div className="member-image">
              <img src="/team-musementa.png" alt="Musementa Melissa" />
            </div>
            <h4>Natukunda Mercy</h4>
            <p className="member-title">Chief Financial Officer</p>
            <p className="member-phone">Tel: +256 758 989 081</p>
          </div>

          {/* Center Member (Featured) */}
          <div className="team-member featured">
            <div className="member-image">
              <img src="/team-mugabe.png" alt="Mugabe Dickson" />
            </div>
            <span className="member-role-badge">Managing Director</span>
            <h4>Mugabe Dickson</h4>
            <p className="member-title">Chief Executive Officer</p>
            <p className="member-phone">Tel: +256 773 087 962</p>
          </div>

          {/* Right Member */}
          <div className="team-member">
            <div className="member-image">
              <img src="/team-natukunda.png" alt="Natukunda Mercy" />
            </div>
            <h4>Musimenta Melissa</h4>
            <p className="member-title">Chief Operations Manager</p>
            <p className="member-phone">Tel: +256 778 958 408</p>
          </div>
        </div>
      </div>
    </section>
  );
}
