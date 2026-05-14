import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import Impact from '@/components/Impact';
import Experience from '@/components/Experience';
import ExportCoffee from '@/components/ExportCoffee';
import LocalProducts from '@/components/LocalProducts';
import Journey from '@/components/Journey';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import Partnership from '@/components/Partnership';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eihamba Coffee</title>
        <meta
          name="description"
          content="Eihamba Coffee — premium Ethiopian coffee, sustainably sourced and expertly crafted."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3D2B1F" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eihamba Coffee" />
        <meta
          property="og:description"
          content="Premium Ethiopian coffee, sustainably sourced and expertly crafted."
        />
        <meta property="og:url" content="https://www.eihambacoffee.org/" />
        <meta property="og:image" content="https://www.eihambacoffee.org/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eihamba Coffee" />
        <meta name="twitter:description" content="Premium Ethiopian coffee, sustainably sourced and expertly crafted." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.eihambacoffee.org/" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Impact />
        <Experience />
        <ExportCoffee />
        <LocalProducts />
        <Journey />
        <Team />
        <Partners />
        <Partnership />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
