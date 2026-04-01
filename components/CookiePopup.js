import { useState } from 'react';

export default function CookiePopup({ onAccept, onSavePreferences, onClose }) {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSavePreferences = () => {
    onSavePreferences({
      essential: true,
      analytics,
      marketing,
    });
  };

  return (
    <div className="cookie-popup" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <button className="cookie-close" onClick={onClose} aria-label="Close cookie settings">
        x
      </button>

      <h3 id="cookie-title">Cookies settings</h3>
      <p>
        We use cookies to keep the site working, understand what visitors care about, and improve
        how Eihamba Coffee is presented online. Choose your preferences below.
      </p>

      <div className="cookie-preferences" aria-label="Cookie preferences">
        <label className="cookie-option">
          <div>
            <strong>Essential</strong>
            <span>Required for the site to function properly.</span>
          </div>
          <input type="checkbox" checked readOnly disabled />
        </label>

        <label className="cookie-option">
          <div>
            <strong>Analytics</strong>
            <span>Helps us understand visits and improve the website.</span>
          </div>
          <input
            type="checkbox"
            checked={analytics}
            onChange={event => setAnalytics(event.target.checked)}
          />
        </label>

        <label className="cookie-option">
          <div>
            <strong>Marketing</strong>
            <span>Allows future campaign and retargeting features.</span>
          </div>
          <input
            type="checkbox"
            checked={marketing}
            onChange={event => setMarketing(event.target.checked)}
          />
        </label>
      </div>

      <div className="cookie-actions">
        <button className="cookie-btn cookie-btn-primary" onClick={onAccept}>
          Accept all
        </button>
        <button className="cookie-btn cookie-btn-secondary" onClick={handleSavePreferences}>
          Save choices
        </button>
      </div>
    </div>
  );
}