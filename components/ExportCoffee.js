export default function ExportCoffee() {
  return (
    <section className="export-coffee" id="products">
      <div className="container">
        <div className="export-header reveal-up">
          <p className="section-label">Export Coffee</p>
          <h2 className="section-title">Our Coffee</h2>
          <div className="divider-center"></div>
          <p className="section-subtitle">
            Premium Ugandan Robusta and Arabica beans, including specialty processed coffees
            for discerning roasters worldwide
          </p>
        </div>

        {/* Coffee Products */}
        <div className="coffee-products">
          {/* Ugandan Robusta */}
          <div className="coffee-product">
            <div className="product-img">
              <img src="/robusta-beans.png" alt="Ugandan Robusta beans" />
            </div>
            <div className="product-info">
              <p className="product-type">Premium Robusta</p>
              <h4>Ugandan Robusta</h4>
              <p>
                Bold, full-bodied with rich earthy tones and chocolate undertones. High caffeine
                content with strong, lasting finish. Perfect for espresso blends.
              </p>
              <div className="coffee-grades">
                <span className="grade-tag">Screen 18</span>
                <span className="grade-tag">Screen 15</span>
                <span className="grade-tag">Screen 12</span>
              </div>
            </div>
          </div>

          {/* DRUGAR */}
          <div className="coffee-product">
            <div className="product-img">
              <img src="/drugar-beans.png" alt="DRUGAR Arabica Natural beans" />
            </div>
            <div className="product-info">
              <p className="product-type">Arabica Natural</p>
              <h4>DRUGAR</h4>
              <p>
                Dried Ugandan Arabica. Sun-dried on raised beds for fruity, wine-like notes with
                natural sweetness. Complex flavor profile.
              </p>
              <div className="coffee-grades">
                <span className="grade-tag">AA Grade</span>
                <span className="grade-tag">AB Grade</span>
              </div>
            </div>
          </div>

          {/* WUGAR */}
          <div className="coffee-product">
            <div className="product-img">
              <img src="/wugar-beans.png" alt="WUGAR Arabica Washed beans" />
            </div>
            <div className="product-info">
              <p className="product-type">Arabica Washed</p>
              <h4>WUGAR</h4>
              <p>
                Washed Ugandan Arabica. Clean, bright cup with floral notes and citrus acidity.
                Smooth body with delicate finish.
              </p>
              <div className="coffee-grades">
                <span className="grade-tag">AA Grade</span>
                <span className="grade-tag">AB Grade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialty Coffees */}
        <div className="specialty-section">
          <div className="specialty-header">
            <div className="star-icon">S</div>
            <div>
              <h3>Specialty Coffees</h3>
              <p>Unique processing methods for exceptional cups</p>
            </div>
          </div>

          <div className="specialty-cards">
            <div className="specialty-card">
              <h4>Honey Processed</h4>
              <p>
                Sweet, syrupy body with stone fruit notes. Mucilage dried on the bean for
                unique sweetness.
              </p>
            </div>
            <div className="specialty-card">
              <h4>Anaerobic</h4>
              <p>
                Fermented without oxygen for intense, complex flavors. Tropical fruit and
                wine-like character.
              </p>
            </div>
            <div className="specialty-card">
              <h4>Co-fermented</h4>
              <p>
                Innovative fermentation with added fruits or yeasts. Creates unique,
                experimental flavor profiles.
              </p>
            </div>
          </div>
        </div>

        <div className="export-cta">
          <a href="#contact" className="btn-catalog">Request Product Catalog →</a>
        </div>
      </div>
    </section>
  );
}
