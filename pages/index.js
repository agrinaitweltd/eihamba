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
        <section className="page-shell">
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
        </section>
      </main>

      <style jsx>{`
        .maintenance-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            linear-gradient(135deg, rgba(249, 246, 241, 0.92), rgba(240, 235, 227, 0.96)),
            url('/hero-bg.png') center center / cover no-repeat;
        }

        .page-shell {
          width: min(680px, 100%);
          padding: 48px 40px;
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(196, 162, 101, 0.18);
          border-radius: 28px;
          box-shadow: 0 24px 60px rgba(61, 43, 31, 0.18);
          backdrop-filter: blur(10px);
        }

        .logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 144px;
          height: 144px;
          margin-bottom: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196, 162, 101, 0.2), rgba(255, 255, 255, 0));
        }

        .logo {
          width: 124px;
          max-width: 100%;
          height: auto;
          display: block;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #c4a265;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.28rem;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #3d2b1f;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.3rem, 5vw, 3.5rem);
          line-height: 1.1;
        }

        h2 {
          margin: 18px 0 0;
          color: #5c4033;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.3rem, 3vw, 1.7rem);
          font-weight: 600;
        }

        .divider {
          width: 72px;
          height: 4px;
          margin: 26px auto 22px;
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

        @media (max-width: 640px) {
          .maintenance-page {
            padding: 16px;
          }

          .page-shell {
            padding: 36px 24px;
            border-radius: 22px;
          }

          .logo-wrap {
            width: 120px;
            height: 120px;
          }

          .logo {
            width: 104px;
          }

          .eyebrow {
            letter-spacing: 0.22rem;
          }
        }
      `}</style>
    </>
  );
}
