import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CookiePopup from '@/components/CookiePopup';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  const persistCookieConsent = value => {
    localStorage.setItem('cookieConsentChoice', JSON.stringify(value));
  };

  useEffect(() => {
    const LOADER_DURATION = 3000;
    const TICK = 40;
    let progressTimer;
    let finishTimer;

    const startLoader = () => {
      let elapsed = 0;

      progressTimer = setInterval(() => {
        elapsed += TICK;
        const nextProgress = Math.min(100, Math.round((elapsed / LOADER_DURATION) * 100));
        setProgress(nextProgress);
      }, TICK);

      finishTimer = setTimeout(() => {
        clearInterval(progressTimer);
        setProgress(100);
        setIsLoading(false);
      }, LOADER_DURATION);
    };

    if (document.readyState === 'complete') {
      startLoader();
    } else {
      window.addEventListener('load', startLoader, { once: true });
    }

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
      window.removeEventListener('load', startLoader);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const storedChoice = localStorage.getItem('cookieConsentChoice');
    if (!storedChoice) {
      setShowCookiePopup(true);
    }
  }, [isLoading]);

  const handleCookieChoice = (consent, preferences) => {
    persistCookieConsent({
      consent,
      preferences,
      updatedAt: new Date().toISOString(),
    });
    setShowCookiePopup(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen progress={progress} />}
      <Component {...pageProps} />
      {showCookiePopup && (
        <CookiePopup
          onAccept={() => handleCookieChoice('accepted', {
            essential: true,
            analytics: true,
            marketing: true,
          })}
          onSavePreferences={preferences => handleCookieChoice('custom', preferences)}
          onClose={() => handleCookieChoice('dismissed', {
            essential: true,
            analytics: false,
            marketing: false,
          })}
        />
      )}
    </>
  );
}
