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
        <div className="bg-orb orb-one" aria-hidden="true"></div>
        <div className="bg-orb orb-two" aria-hidden="true"></div>
        <div className="bg-grid" aria-hidden="true"></div>
        <section className="page-shell">
          <p className="status-pill">Temporarily Offline</p>
          <div className="logo-wrap">
            <img className="logo" src="/logo.png" alt="Eihamba Coffee logo" />
          </div>
          <p className="eyebrow">Eihamba Coffee</p>
          <h1>Website Under Construction</h1>
          <h2>We are making improvements!</h2>
          <div className="divider" aria-hidden="true"></div>
          <p className="message">
            Please check back soon as we complete a few updates to improve your experience.
          </p>
          <p className="meta">Thank you for your patience.</p>
        </section>
      </main>

      <style jsx>{`
        .maintenance-page {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(circle at 15% 10%, rgba(196, 162, 101, 0.35), transparent 44%),
            linear-gradient(130deg, #f8f4ed 0%, #ece3d8 52%, #e3d4c2 100%),
            url('/hero-bg.png') center center / cover no-repeat;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(4px);
          opacity: 0.5;
          z-index: -1;
          animation: float 11s ease-in-out infinite;
        }

        .orb-one {
          width: 440px;
          height: 440px;
          top: -130px;
          left: -100px;
          background: radial-gradient(circle at 30% 30%, rgba(196, 162, 101, 0.7), rgba(196, 162, 101, 0));
        }

        .orb-two {
          width: 380px;
          height: 380px;
          right: -120px;
          bottom: -100px;
          background: radial-gradient(circle at 40% 40%, rgba(92, 64, 51, 0.42), rgba(92, 64, 51, 0));
          animation-delay: 1.6s;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image:
            linear-gradient(rgba(92, 64, 51, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(92, 64, 51, 0.07) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.85), transparent 78%);
          pointer-events: none;
        }

        .page-shell {
          position: relative;
          width: min(680px, 100%);
          padding: 28px 44px 44px;
          text-align: center;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.8));
          border: 1px solid rgba(196, 162, 101, 0.24);
          border-radius: 30px;
          box-shadow:
            0 26px 70px rgba(61, 43, 31, 0.18),
            0 2px 0 rgba(255, 255, 255, 0.6) inset;
          backdrop-filter: blur(12px);
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid rgba(196, 162, 101, 0.34);
          background: rgba(249, 246, 241, 0.92);
          color: #5c4033;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.07rem;
          text-transform: uppercase;
        }

        .status-pill::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c4a265;
          box-shadow: 0 0 0 6px rgba(196, 162, 101, 0.22);
          animation: pulse 1.8s ease-in-out infinite;
        }

        .logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
          margin: 16px 0 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196, 162, 101, 0.28), rgba(255, 255, 255, 0));
        }

        .logo {
          width: 124px;
          max-width: 100%;
          height: auto;
          display: block;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #c4a265;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.32rem;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #3d2b1f;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.35rem, 5vw, 3.9rem);
          line-height: 1.1;
          text-wrap: balance;
        }

        h2 {
          margin: 14px 0 0;
          color: #5c4033;
          font-size: clamp(1.1rem, 2.4vw, 1.4rem);
          font-weight: 700;
          letter-spacing: 0.02rem;
        }

        .divider {
          width: 92px;
          height: 4px;
          margin: 24px auto 20px;
          border-radius: 999px;
          background: linear-gradient(90deg, #c4a265, #d4b87a);
        }

        .message {
          margin: 0 auto;
          max-width: 42ch;
          color: #62574d;
          font-size: 1.03rem;
          line-height: 1.75;
        }

        .meta {
          margin: 14px 0 0;
          color: rgba(61, 43, 31, 0.64);
          font-size: 0.92rem;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.72;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-16px) translateX(10px);
          }
        }

        @media (max-width: 640px) {
          .maintenance-page {
            padding: 16px;
          }

          .page-shell {
            padding: 24px 22px 34px;
            border-radius: 22px;
          }

          .status-pill {
            font-size: 0.72rem;
          }

          .logo-wrap {
            width: 120px;
            height: 120px;
            margin-top: 12px;
          }

          .logo {
            width: 104px;
          }

          .eyebrow {
            letter-spacing: 0.22rem;
          }

          h2 {
            margin-top: 12px;
          }
        }
      `}</style>
    </>
  );
}
