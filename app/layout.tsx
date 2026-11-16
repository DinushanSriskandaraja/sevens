import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sevens — Website, Web App, Mobile App & E-commerce Development",
    template: "%s | Sevens",
  },
  description:
    "Sevens builds websites, web apps, mobile apps, and e-commerce stores for freelancers, individual businesses, online businesses, and influencers. Modern tech. Fast delivery. Real results.",
  keywords: [
    "website development",
    "web app development",
    "mobile app development",
    "e-commerce development",
    "Sevens",
    "freelancer website",
    "business website",
    "online store",
    "influencer website",
    "full-stack development",
    "React developer",
    "Next.js developer",
    "responsive web design",
    "custom web application",
    "iOS app development",
    "Android app development",
    "Shopify alternative",
    "WooCommerce development",
  ],
  authors: [{ name: "Sevens" }],
  creator: "Sevens",
  publisher: "Sevens",
  metadataBase: new URL("https://sevens.dev"),
  openGraph: {
    title: "Sevens — Build Digital Products That Grow Your Business",
    description:
      "We build websites, web apps, mobile apps, and e-commerce stores for freelancers, businesses, and influencers.",
    type: "website",
    siteName: "Sevens",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevens — Website, Web App, Mobile App & E-commerce Development",
    description:
      "Build digital products that grow your business. Websites, web apps, mobile apps, and e-commerce stores.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-page="6878854b4782d46450f79840"
      data-wf-site="6878854b4782d46450f79836"
    >
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .pricing-section,
              .w-webflow-badge,
              a.w-webflow-badge,
              [class*="webflow-badge"],
              a[href*="webflow.com"],
              .subscrive-wrap,
              .subscrive-btn-wtap,
              .subscrive-top,
              .subscrive-text,
              .subscrive-buttom-wrap,
              [class*="subscrive"],
              a[href*="geniusflow"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
                max-width: 0 !important;
                max-height: 0 !important;
                overflow: hidden !important;
                position: fixed !important;
                top: -99999px !important;
                left: -99999px !important;
                z-index: -99999 !important;
              }


/* Blog listing and detail page styling & visibility guarantees */
.bolg-details,
.bolg-details-contant-wrap,
.blog-details-img-wrap,
.insights-item,
.insights-item-02,
.insights-item-three,
.insights-item-03 {
  opacity: 1 !important;
  visibility: visible !important;
}

.blog-details-img {
  opacity: 1 !important;
  transform: none !important;
}

.blog-details-overlay {
  display: none !important;
}

.contant.w-richtext h6 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--black);
}

.contant.w-richtext p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.contant.w-richtext ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.contant.w-richtext li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}


/* Contact page styling & visibility guarantees */
.contact-section,
.contact-info-item,
.contact-title,
.contact-item-two-left .link-wrap,
.contact-item-two-left .call-link,
.contact-item-two-right .form-input,
.contact-item-two-right .message.w-button {
  opacity: 1 !important;
  visibility: visible !important;
}


/* Service details page styling & visibility guarantees */
.service-single,
.service-single-item,
.service-single-img-wrap,
.service-single-item-img-wrap,
.choose-section,
.cloneable-area,
.section-title,
.subtitle._04,
.c-flip-card,
._w-flip-card,
.c-card-front {
  opacity: 1 !important;
  visibility: visible !important;
}

/* 3D Flip Cards (Webflow Mirror - Jitter-Free) */
.c-flip-card {
  perspective: 1000px;
  -webkit-perspective: 1000px;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 277px !important;
}

._w-flip-card {
  perspective: 1000px;
  -webkit-perspective: 1000px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.c-card-front,
.c-card-back {
  width: 100%;
  height: 277px !important;
  box-sizing: border-box;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-origin: 50% 50%;
  will-change: transform;
  pointer-events: none;
}

.c-card-front {
  display: flex;
  transform: rotateY(0deg);
}

.c-card-back {
  display: none;
  transform: rotateY(-90deg);
}

/* Brand Logo Styling */
.navbar-brand {
  display: flex !important;
  align-items: center !important;
  text-decoration: none !important;
}

.navbar-brand .logo,
.navbar-brand .white-logo {
  height: 34px !important;
  width: auto !important;
  max-width: 200px !important;
  object-fit: contain !important;
}

/* Hero badge ticker - seamless infinite marquee with perfectly even spacing (strictly scoped to hero) */
.hero-tag-wrap {
  position: relative !important;
  overflow: hidden !important;
  white-space: nowrap !important;
}

.hero-tag {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  white-space: nowrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 10px !important;
  max-width: 466px !important;
  width: 100% !important;
  overflow: hidden !important;
  position: relative !important;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

.hero-tag .hero-tag-btn-wrap {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  white-space: nowrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 10px !important;
  width: auto !important;
  min-width: max-content !important;
  flex-shrink: 0 !important;
  animation: heroTagTicker 25s linear infinite !important;
  will-change: transform;
}

.hero-tag:hover .hero-tag-btn-wrap {
  animation-play-state: paused !important;
}

@keyframes heroTagTicker {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(-100% - 10px), 0, 0);
  }
}

/* Explicitly stop any scrolling or animation on portfolio/teaser pills */
.hero-tag-btn-wrap._03,
.teaser-section .hero-tag-btn-wrap,
.teaser-wrap .hero-tag-btn-wrap {
  animation: none !important;
  transform: none !important;
  will-change: auto !important;
  width: auto !important;
  min-width: 0 !important;
  flex-shrink: 1 !important;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  gap: 12px !important;
}

.hero-tag-btn,
.hero-tag-btn._03,
.hero-tag-btn._05 {
  flex: 0 0 auto !important;
  flex-shrink: 0 !important;
  white-space: nowrap !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 10px 16px !important;
  border: 1px solid var(--border-color-two) !important;
  background-color: var(--hero-tag-btn-bg) !important;
  border-radius: 50px !important;
  text-decoration: none !important;
}

.hero-tag-btn-text,
.hero-tag-btn-text._02 {
  white-space: nowrap !important;
  word-break: keep-all !important;
  overflow-wrap: normal !important;
  word-wrap: normal !important;
  hyphens: none !important;
  -webkit-hyphens: none !important;
  margin: 0 !important;
  line-height: 1 !important;
  display: inline-block !important;
}

.hero-tag-shap-left,
.hero-tag-shap-right {
  pointer-events: none !important;
}

`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function purge() {
                  var els = document.querySelectorAll('.w-webflow-badge, a.w-webflow-badge, [class*="webflow-badge"], a[href*="webflow.com"], .subscrive-wrap, [class*="subscrive"], a[href*="geniusflow"]');
                  els.forEach(function(el) { el.remove(); });
                }
                purge();
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', purge);
                }
                window.addEventListener('load', purge);
                if (typeof MutationObserver !== 'undefined') {
                  new MutationObserver(purge).observe(document.documentElement, { childList: true, subtree: true });
                }

              })();
            `,
          }}
        />
      </head>
      <body className="body">
        {children}

        {/* Webflow & GSAP Runtime Libraries */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6878854b4782d46450f79836"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/js/webflow.schunk.2a6de01cfc14d7d6.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/js/webflow.ff041c0a.dfbc39cec21a5d0a.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/CustomEase.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="gsap-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if (window.gsap) { gsap.registerPlugin(ScrollTrigger, SplitText, Flip, CustomEase); }`,
          }}
        />
      </body>
    </html>
  );
}
