import { useState } from 'react';

export default function LocalProducts() {
  const [activeFilter, setActiveFilter] = useState('All');
  const whatsappNumber = '256773087962';
  const filters = ['All', 'Coffee', 'Skincare'];

  const products = [
    {
      id: 1,
      name: 'Roasted Coffee Beans',
      desc: 'Premium Ugandan Arabica from Bwindi. Rich, aromatic, freshly roasted.',
      badge: 'Bestseller',
      badgeClass: 'bestseller',
      image: 'roasted-beans.jpg',
      imageDesc: 'Eihamba roasted coffee beans package',
      category: 'Coffee',
      action: 'Order Now',
    },
    {
      id: 2,
      name: 'Coffee Powder',
      desc: 'Finely ground Ugandan coffee. Perfect for traditional preparation.',
      badge: 'Ground',
      badgeClass: 'ground',
      image: 'coffee-powder.jpg',
      imageDesc: 'Coffee powder packages',
      category: 'Coffee',
      action: 'Order Now',
    },
    {
      id: 3,
      name: 'Coffee Face Oil',
      desc: 'Cold-pressed coffee seed oil. Rich in antioxidants for radiant skin.',
      badge: 'Natural',
      badgeClass: 'natural',
      image: 'face-oil.jpg',
      imageDesc: 'Coffee face oil bottles',
      category: 'Skincare',
      action: 'Buy Now',
    },
    {
      id: 4,
      name: 'Coffee Face Scrub',
      desc: 'Gentle exfoliating scrub from coffee grounds. For glowing skin.',
      badge: 'Eco-Friendly',
      badgeClass: 'eco',
      image: 'face-scrub.jpg',
      imageDesc: 'Coffee face scrub jars',
      category: 'Skincare',
      action: 'Buy Now',
      hasLocalPrice: true,
    },
  ];

  const filtered = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter);

  const getWhatsAppLink = productName => {
    const message = `Hello Eihamba Coffee, I would like to order ${productName}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="local-products" id="local-products">
      <div className="container">
        <div className="local-products-header reveal-up">
          <p className="section-label">Shop Local</p>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Premium Ugandan coffee and natural skincare, crafted for your daily routine.
          </p>
        </div>

        <div className="product-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <div className="product-card" key={product.id}>
              <div className="card-image">
                <img src={`/${product.image}`} alt={product.imageDesc} />
                <span className={`card-badge ${product.badgeClass}`}>{product.badge}</span>
                {product.hasLocalPrice && (
                  <>
                    <span className="local-price-badge">Fair Local Prices</span>
                    <span className="local-price-tag">From 10K UGX</span>
                  </>
                )}
              </div>
              <div className="card-body">
                <h4>{product.name}</h4>
                <p className="card-desc">{product.desc}</p>
                <div className="card-actions">
                  <a
                    href={getWhatsAppLink(product.name)}
                    className="btn-order"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buy ${product.name} on WhatsApp`}
                  >
                    {product.action}
                  </a>
                  <button className="btn-download" title="Product details">i</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-note">
          <span>Kampala Delivery</span>
          <span>WhatsApp Orders</span>
          <span>Export Quality</span>
        </div>

        <div className="bulk-banner">
          <div className="bulk-text">
            <h4>Business &amp; Bulk Orders</h4>
            <p>Wholesale pricing for supermarkets and retailers</p>
          </div>
          <div className="bulk-actions">
            <a href="#contact" className="btn-quote">Get Quote</a>
            <a href="tel:+256773087962" className="btn-call">Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
