import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eihamba Coffee | Under Construction</title>
        <meta
          name="description"
          content="Eihamba Coffee is temporarily offline while we make improvements. Please check back soon."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content="#3D2B1F" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eihamba Coffee | Under Construction" />
        <meta
          property="og:description"
          content="We are making improvements. Please check back soon."
        />
        <meta property="og:url" content="https://www.eihambacoffee.org/" />
        <meta property="og:image" content="https://www.eihambacoffee.org/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eihamba Coffee | Under Construction" />
        <meta name="twitter:description" content="We are making improvements. Please check back soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.eihambacoffee.org/" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="maintenance-page">
        <header className="top-bar">
          <img className="brand-logo" src="/logo.png" alt="Eihamba Coffee logo" />
          <span className="status-chip">Maintenance</span>
        </header>

        <section className="hero-copy">
          <p className="kicker">Eihamba Coffee</p>
          <h1>
            WEBSITE
            <br />
            UNDER CONSTRUCTION
          </h1>
          <h2>We are making improvements!</h2>
          <p className="message">Please check back soon for an even better experience.</p>
        </section>
      </main>

      <style jsx>{`
        .maintenance-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: url('/hero-bg.png') center center / cover no-repeat;
        }

        .maintenance-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(7, 20, 18, 0.35) 0%, rgba(4, 14, 13, 0.62) 45%, rgba(0, 0, 0, 0.7) 100%),
            radial-gradient(circle at center, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.46));
        }

        .top-bar,
        .hero-copy {
          position: relative;
          z-index: 1;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-logo {
          width: 94px;
          height: auto;
          filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.35));
        }

        .status-chip {
          border: 1px solid rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.1);
          color: #f9f6f1;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          backdrop-filter: blur(6px);
        }

        .hero-copy {
          width: min(920px, 100%);
          margin: auto;
          text-align: center;
          padding: 20px 0;
        }

        .kicker {
          margin: 0 0 12px;
          color: #f6ecdc;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.24rem;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #ffffff;
          font-family: 'Arial Black', 'Inter', 'Segoe UI', sans-serif;
          font-size: clamp(2.5rem, 9vw, 7rem);
          line-height: 0.88;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);
        }

        h2 {
          margin: 20px 0 8px;
          color: #f4eee4;
          font-size: clamp(1.1rem, 2.7vw, 1.8rem);
          font-weight: 600;
        }

        .message {
          margin: 0 auto;
          max-width: 42ch;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .maintenance-page {
            padding: 16px;
          }

          .brand-logo {
            width: 74px;
          }

          .status-chip {
            padding: 8px 12px;
            font-size: 0.68rem;
          }

          .hero-copy {
            margin-top: auto;
            margin-bottom: auto;
          }

          h1 {
            line-height: 0.95;
          }

          .kicker {
            letter-spacing: 0.18rem;
          }
        }
      `}</style>
    </>
  );
}
