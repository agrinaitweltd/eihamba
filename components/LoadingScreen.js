export default function LoadingScreen({ progress = 0 }) {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading website">
      <div className="loading-screen-panel">
        <div className="loading-logo-wrapper">
          <div className="loading-logo-glow"></div>
          <img src="/logo.png" alt="Eihamba Coffee" className="loading-logo" />
        </div>
        <p className="loading-tagline">Every Cup Protects Mountain Gorillas</p>

        <div className="loading-progress" aria-hidden="true">
          <span style={{ width: `${safeProgress}%` }}></span>
        </div>

        <div className="loading-bottom">
          <p className="loading-credit-label">Made and designed by</p>
          <img src="/kavo.png" alt="Kavo Tech" className="loading-kavo" />
        </div>
      </div>
    </div>
  );
}