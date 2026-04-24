export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vision-mission-bg">
        <img src="/vision-bg.png" alt="Coffee forest background" className="vm-bg-img" />
      </div>
      <div className="vision-mission-overlay"></div>

      <div className="container">
        <div className="vision-mission-grid">
          {/* Vision */}
          <div className="vm-card reveal-left">
            <div className="vm-icon">V</div>
            <p className="vm-label">Our Vision</p>
            <h3>A Future Where Coffee Cultivation and Conservation Thrive Together</h3>
            <div className="vm-divider"></div>
            <p>
              We envision Bwindi&apos;s forest flourishing alongside thriving farming communities,
              where every cup of coffee contributes to protecting mountain gorillas and preserving
              one of Earth&apos;s most precious ecosystems.
            </p>
          </div>

          {/* Mission */}
          <div className="vm-card reveal-right">
            <div className="vm-icon">M</div>
            <p className="vm-label">Our Mission</p>
            <h3>Empowering Communities, Protecting Wildlife Through Exceptional Coffee</h3>
            <div className="vm-divider"></div>
            <p>
              We transform the lives of reformed poachers into sustainable coffee farmers,
              creating economic opportunities that protect Bwindi&apos;s forest while delivering
              exceptional, fully-washed coffee with captivating earthy and floral notes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
