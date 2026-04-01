import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Partnership from '@/components/Partnership';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import ExportCoffee from '@/components/ExportCoffee';
import LocalProducts from '@/components/LocalProducts';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import Journey from '@/components/Journey';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eihamba Coffee',
    url: 'https://www.eihambacoffee.org/',
    logo: 'https://www.eihambacoffee.org/logo.png',
    description: 'Premium Ugandan coffee from Bwindi supporting gorilla conservation and local farming communities.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+256773087962',
      contactType: 'customer service',
      areaServed: 'UG',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.instagram.com/eihamba',
      'https://www.facebook.com/eihamba',
      'https://www.tiktok.com/@eihamba',
      'https://www.linkedin.com/company/eihamba',
      'https://x.com/eihamba',
      'https://www.youtube.com/@eihamba',
    ],
  };

  return (
    <>
      <Head>
        <title>Eihamba Coffee – Every Cup Protects Mountain Gorillas</title>
        <meta
          name="description"
          content="Premium Ugandan coffee from the misty highlands of Bwindi. Arabica & Robusta supporting gorilla conservation and empowering local communities."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#3D2B1F" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eihamba Coffee – Every Cup Protects Mountain Gorillas" />
        <meta
          property="og:description"
          content="Premium Ugandan coffee from Bwindi supporting gorilla conservation and local farming communities."
        />
        <meta property="og:url" content="https://www.eihambacoffee.org/" />
        <meta property="og:image" content="https://www.eihambacoffee.org/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eihamba Coffee – Every Cup Protects Mountain Gorillas" />
        <meta
          name="twitter:description"
          content="Premium Ugandan coffee from Bwindi supporting gorilla conservation and local farming communities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.eihambacoffee.org/" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Partnership />
        <VisionMission />
        <Services />
        <ExportCoffee />
        <LocalProducts />
        <Team />
        <Partners />
        <Journey />
        <Impact />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
