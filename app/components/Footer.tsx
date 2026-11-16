import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        {/* High-Impact Closing Bento CTA */}
        <div className="closing-bento-cta">
          <div className="section-head" style={{ margin: "0 auto 28px auto", maxWidth: "680px" }}>
            <h2 id="close-h">Ready to build your next production product?</h2>
            <p>
              Two-week fixed-scope sprints with senior engineering leads. 24-hour technical proposal turnaround with full architecture roadmap.
            </p>
          </div>
          <Link className="btn btn--primary btn--xl" href="/contact">
            Estimate Project Scope &rarr;
          </Link>
        </div>

        {/* Directory Columns */}
        <div className="closing__links">
          <div className="grid" style={{ gap: "32px 20px" }}>
            <div className="span-4 stack-4">
              <Link className="nav__logo" href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
                <img src="/assets/img/sevens-logo-white.png" alt="Sevens" style={{ height: "32px", width: "auto" }} />
              </Link>
              <p className="footer__lede" style={{ color: "var(--p-muted)", fontSize: "14px", lineHeight: "1.6", marginTop: "12px" }}>
                Senior engineering studio building bespoke web applications, mobile apps, and high-performance websites for software teams and venture-backed founders.
              </p>
              <div className="footer-status-pill">
                <span className="live-status-dot" />
                <span>Sprint Intake Open · 2 Slots Remaining</span>
              </div>
            </div>

            <div className="span-2 footer__col">
              <h3>Services</h3>
              <ul>
                <li><Link href="/#services">Web Applications</Link></li>
                <li><Link href="/#services">Mobile Applications</Link></li>
                <li><Link href="/#services">Headless Websites</Link></li>
                <li><Link href="/#services">Design Systems</Link></li>
                <li><Link href="/#services">Architecture Audits</Link></li>
              </ul>
            </div>

            <div className="span-2 footer__col">
              <h3>Case Studies</h3>
              <ul>
                <li><Link href="/portfolio#kite-health">Kite Health (App)</Link></li>
                <li><Link href="/portfolio#vesper-architecture">Vesper (Website)</Link></li>
                <li><Link href="/portfolio#cobalt-pay">Cobalt Pay (SaaS)</Link></li>
                <li><Link href="/portfolio#strata-mobile">Strata (Offline App)</Link></li>
                <li><Link href="/portfolio">All 34+ Projects &rarr;</Link></li>
              </ul>
            </div>

            <div className="span-2 footer__col">
              <h3>Articles</h3>
              <ul>
                <li><Link href="/blog#architecting-react-native-for-60fps">React Native 60fps</Link></li>
                <li><Link href="/blog#nextjs-16-server-actions-zero-api-pattern">Zero-API Pattern</Link></li>
                <li><Link href="/blog#two-week-sprint-framework-that-saved-180k">Two-Week Sprints</Link></li>
                <li><Link href="/blog#headless-cms-benchmark-2026">CMS Benchmarks</Link></li>
              </ul>
            </div>

            <div className="span-2 footer__col">
              <h3>Studio</h3>
              <ul>
                <li><Link href="/contact">Book Discovery Call</Link></li>
                <li><a href="mailto:hello@sevens.example">hello@sevens.example</a></li>
                <li><span>Clerkenwell, London</span></li>
                <li><span className="muted">Mon–Fri: 9:00–18:00 GMT</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar" style={{ marginTop: "48px" }}>
            <span>&copy; 2026 Sevens Studio Ltd. &nbsp; <Link href="/privacy" style={{ color: "var(--p-muted)" }}>Privacy</Link> &nbsp; <Link href="/terms" style={{ color: "var(--p-muted)" }}>Terms</Link></span>
            <span style={{ color: "var(--p-muted)" }}>London Studio · 05:37 GMT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

