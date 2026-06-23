import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let gtagLoaded = false;

/**
 * Google Analytics 4 for a React Router SPA.
 *
 * Loads gtag.js once and sends a `page_view` on every client-side route change
 * (gtag's automatic page_view only fires on the initial load, which misses SPA
 * navigation). Disabled on localhost so local dev, `vite preview`, and the
 * build-time pre-render don't pollute analytics data. Set the measurement ID in
 * a git-ignored `.env.local` (VITE_GA_MEASUREMENT_ID).
 */
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;

    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") return;

    if (!gtagLoaded) {
      gtagLoaded = true;

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { send_page_view: false });
    }

    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default Analytics;
