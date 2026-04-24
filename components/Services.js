export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal-up">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">End-to-end coffee solutions from farm to global markets</p>
        </div>

        {/* Service 1: Coffee Sourcing */}
        <div className="service-item reveal-up">
          <div className="service-content">
            <p className="service-number">01</p>
            <h3>Coffee Sourcing</h3>
            <p>
              We maintain direct relationships with farmers across Uganda&apos;s prime coffee-growing
              regions, including the Bwindi highlands. Through our partnership with Bwindi Coffee
              Growers Cooperative Society, we source the finest Arabica and Robusta beans.
            </p>
            <ul className="service-list">
              <li><span className="check">+</span> Direct farmer partnerships in Bwindi &amp; Western Uganda</li>
              <li><span className="check">+</span> Rigorous quality assessment at origin</li>
              <li><span className="check">+</span> Full traceability from farm to cup</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="/service-sourcing.png" alt="Hand picking ripe red coffee cherries" className="service-img" />
          </div>
        </div>

        {/* Service 2: Processing & Quality Control */}
        <div className="service-item reverse reveal-up stagger-1">
          <div className="service-content">
            <p className="service-number">02</p>
            <h3>Processing &amp; Quality Control</h3>
            <p>
              Our processing facilities employ both traditional methods and modern technology to
              bring out the unique characteristics of each coffee origin. Every batch undergoes
              rigorous cupping and grading.
            </p>
            <ul className="service-list">
              <li><span className="check">+</span> Washed, natural &amp; honey processing methods</li>
              <li><span className="check">+</span> SCA-certified cupping laboratory</li>
              <li><span className="check">+</span> Specialty grade 85+ scoring</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="/service-processing.png" alt="Coffee beans being processed" className="service-img" />
          </div>
        </div>

        {/* Service 3: Export & Logistics */}
        <div className="service-item reveal-up stagger-2">
          <div className="service-content">
            <p className="service-number">03</p>
            <h3>Export &amp; Logistics</h3>
            <p>
              With established logistics networks spanning five continents, we ensure your coffee
              arrives fresh and on time. Our team handles all documentation, customs clearance,
              and shipping coordination.
            </p>
            <ul className="service-list">
              <li><span className="check">+</span> FCL &amp; LCL shipping options worldwide</li>
              <li><span className="check">+</span> GrainPro &amp; climate-controlled containers</li>
              <li><span className="check">+</span> Complete export documentation support</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="/service-logistics.png" alt="Coffee sacks in warehouse" className="service-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
