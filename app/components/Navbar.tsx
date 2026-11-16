"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        
        <Link className="nav__logo" href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/assets/img/sevens-logo-dark.png" alt="Sevens" style={{ height: "32px", width: "auto" }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <Link className={`nav__link ${pathname === "/" ? "active" : ""}`} href="/#services">
              Services <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <div className="nav__menu">
              <div className="grid" style={{ gap: "20px" }}>
                <div className="menu-col span-6">
                  <p className="t-label">Core Disciplines</p>
                  <Link href="/#services">Web Applications<span>Next.js 16 SaaS &amp; Cloud Systems</span></Link>
                  <Link href="/#services">Mobile Applications<span>React Native iOS &amp; Android</span></Link>
                  <Link href="/#services">Modern Websites<span>Headless CMS &amp; Sub-second Speeds</span></Link>
                </div>
                <div className="menu-col span-6">
                  <p className="t-label">Delivery Cadence</p>
                  <Link href="/#process">Two-Week Sprints<span>Fixed scope, zero retainers</span></Link>
                  <Link href="/#funnel">Instant Scope Calculator<span>Live budget &amp; sprint roadmap</span></Link>
                  <Link href="/contact">Direct Discovery Intake<span>24h technical turnaround</span></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav__item">
            <Link className={`nav__link ${pathname.startsWith("/portfolio") ? "active" : ""}`} href="/portfolio">
              Portfolio
            </Link>
          </div>

          <div className="nav__item">
            <Link className="nav__link" href="/#process">
              Process
            </Link>
          </div>

          <div className="nav__item">
            <Link className="nav__link" href="/#testimonials">
              Reviews
            </Link>
          </div>

          <div className="nav__item">
            <Link className={`nav__link ${pathname.startsWith("/blog") ? "active" : ""}`} href="/blog">
              Blog
            </Link>
          </div>

          <div className="nav__item">
            <Link className={`nav__link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
              Contact
            </Link>
          </div>
        </nav>

        {/* Action Button & Status Pill */}
        <div className="nav__actions">
          <div className="nav-status-pill" title="Next intake cycle open">
            <span className="pulse-dot"></span>
            <span>2 Sprint Slots</span>
          </div>
          <Link className="btn btn--primary" href="/contact">
            Estimate Project &rarr;
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="wrap">
            <div className="mobile-drawer-links">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>Process</Link>
              <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)}>Client Reviews</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Engineering Blog</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Studio</Link>
            </div>
            <div style={{ marginTop: "var(--s-5)" }}>
              <Link
                href="/contact"
                className="btn btn--primary btn--wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Estimate Project &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

