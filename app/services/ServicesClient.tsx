"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ServiceDetail } from "@/data/services";

interface ServicesClientProps {
  services: ServiceDetail[];
}

export default function ServicesClient({ services }: ServicesClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).Webflow) {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        (window as any).Webflow.require("ix2")?.init();
      }
    }
  }, []);

  return (
    <div id="Page-Wrapper" className="page-wrapper">
      {/* Header & Navbar */}
      <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease-out-quart"
        data-easing="ease-out-quart"
        data-collapse="all"
        role="banner"
        data-no-scroll="1"
        data-duration="600"
        id="hero"
        data-doc-height="1"
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="container-navbar">
            <div className="header-left">
              <div className="available-btn">
                <div className="available-img-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/6880882d5cc81a411587841a_55d1a2751080e83209b3dff93b405446_Herader-img.svg"
                    loading="lazy"
                    alt="Available Indicator"
                    className="available-img"
                  />
                </div>
                <div className="call-wrap">
                  <a href="tel:+94771234567" className="call">
                    Book a Free Call
                  </a>
                  <div className="available-text-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/6880882d5bf95b88c0110b7a_Ellipse-198.svg"
                      loading="lazy"
                      alt="Circle"
                      className="ellipse-198"
                    />
                    <div className="available-text">Available now</div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="navbar-brand w-nav-brand">
              <img
                loading="lazy"
                src="/assets/img/sevens-logo-dark.png"
                alt="Sevens"
                className="logo"
              />
              <img
                loading="lazy"
                src="/assets/img/sevens-logo-white.png"
                alt="Sevens"
                className="white-logo"
              />
            </Link>
            <div className="content">
              <div className="hamburger js-hover _03">
                <div className="hamburger-wrap _03">
                  <p className="menu-text _03">Menu</p>
                  <div className="btn-2">
                    <div className="line-top _03"></div>
                    <div className="line-bottom _03"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="global-menu">
          <div className="global-menu__wrap">
            <Link href="/" className="global-menu__item">Home</Link>
            <Link href="/services" className="global-menu__item w--current">Services</Link>
            <a href="/#Portfolio" className="global-menu__item">Portfolio</a>
            <Link href="/contact" className="global-menu__item">Contact</Link>
            <Link href="/blog" className="global-menu__item">Blog</Link>
          </div>
          <div className="global-menu-shap-left"></div>
          <div className="global-menu-shap-right"></div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688e5423c4cd195a47f572a7_a3e2d757777e0f025eabb405f7c464c0_pagtitle-shap.avif"
          alt=""
          className="pagtitle-shap"
        />
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688e54983e0f3cbdd77c6fe0_pagtitle-shap-2.avif"
          alt=""
          className="pagtitle-shap-2"
        />
      </div>

      {/* Page Title Hero Banner */}
      <section className="pagetitle">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pagetitle-wrap">
            <div className="section-title">
              <p className="section-title-text">OUR EXPERTISE</p>
            </div>
            <h1 className="bolg-details-title">
              Digital Solutions Crafted for Growth
            </h1>
            <p className="page-title-exar" style={{ maxWidth: "680px", margin: "0 auto" }}>
              We build custom websites, full-stack web applications, mobile apps, and e-commerce platforms designed to elevate your brand, automate workflows, and drive measurable revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Services Section */}
      <section id="Services" className="service-section" style={{ paddingTop: "20px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-row">
            <div className="section-title-wrap">
              <div className="section-title">
                <p className="section-title-text">WHAT WE BUILD</p>
              </div>
              <div className="section-title-box">
                <h2 className="subtitle">
                  Our <span className="_02">4 Core</span> Development Services
                </h2>
              </div>
            </div>

            <div className="service-item-wrap-02">
              {services.map((item, idx) => {
                const numStr = (idx + 1).toString().padStart(2, "0");
                const boxClass = idx === 0 ? "_01" : idx === 1 ? "_03" : idx === 2 ? "_05" : "_04";
                return (
                  <div key={item.slug} className="service-collection w-dyn-list">
                    <div role="list" className="service-collection-list w-dyn-items">
                      <div role="listitem" className="service-collection-item w-dyn-item">
                        <Link href={`/services/${item.slug}`} className="service-link w-inline-block">
                          <div className={`service-collection-item-box ${boxClass}`}>
                            <div className="service-collection-item-left">
                              <p className="service-number">{numStr}</p>
                              <h3 className="service-title">{item.title}</h3>
                            </div>
                            <div className="service-collection-item-right">
                              <p className="service-exar">{item.headline}</p>
                              <img
                                src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aabeeea3253698e35bbb82_service-arrow.svg"
                                loading="lazy"
                                alt="arrow"
                                className="service-arrow"
                              />
                              <img
                                src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aadd7c3e2c6946afe78e9e_service-arrow-2.svg"
                                loading="lazy"
                                alt="arrow active"
                                className="service-arrow-02"
                              />
                            </div>
                            <img
                              src={item.coverImage}
                              loading="lazy"
                              alt={item.title}
                              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                              srcSet={item.coverImageSrcset}
                              className="service-img"
                            />
                            <div className="service-bg"></div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors Showcase */}
      <section className="service-section" style={{ backgroundColor: "#fafafa", padding: "80px 20px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "50px" }}>
            <div className="section-title" style={{ margin: "0 auto" }}>
              <p className="section-title-text">WHO WE EMPOWER</p>
            </div>
            <div className="section-title-box">
              <h2 className="subtitle">
                Tailored for Your <span className="_02">Exact Sector</span>
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {/* Sector 1: Freelancers */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", padding: "36px 28px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🎯</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--black)" }}>Freelancers</h3>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                High-converting portfolio websites, proof of work showcases, and booking funnels that position top video editors, consultants, and creators at premium rates.
              </p>
              <div style={{ marginTop: "16px", fontSize: "13px", fontWeight: "600", color: "#1c4b42" }}>
                Proven Client: <a href="https://theredactmedia.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Redact Media</a>
              </div>
            </div>

            {/* Sector 2: Individual Business */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", padding: "36px 28px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🏢</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--black)" }}>Individual Business</h3>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                Professional corporate presence, local authority SEO, inquiry capture, and process automation for specialized commercial businesses.
              </p>
              <div style={{ marginTop: "16px", fontSize: "13px", fontWeight: "600", color: "#1c4b42" }}>
                Proven Client: <a href="https://sududuwaaquaproducts.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Sududuwa Aqua Products</a>
              </div>
            </div>

            {/* Sector 3: Online Business */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", padding: "36px 28px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>⚡</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--black)" }}>Online Business</h3>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                Bespoke SaaS applications, internal admin portals, API integrations, and robust customer web apps built on Next.js and secure cloud architectures.
              </p>
              <div style={{ marginTop: "16px", fontSize: "13px", fontWeight: "600", color: "#1c4b42" }}>
                Full-Stack Next.js & React Solutions
              </div>
            </div>

            {/* Sector 4: Influencers */}
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "20px", padding: "36px 28px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>🛍️</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--black)" }}>Influencers & Brands</h3>
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                Direct-to-consumer e-commerce storefronts, personal media hubs, digital product delivery, and community landing pages with rapid checkout.
              </p>
              <div style={{ marginTop: "16px", fontSize: "13px", fontWeight: "600", color: "#1c4b42" }}>
                Proven Client: <a href="https://www.grazie.lk/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Grazie E-commerce</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Client Showcase Section */}
      <section className="portfolio" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap-02" style={{ textAlign: "center", marginBottom: "50px" }}>
            <div className="section-title" style={{ margin: "0 auto" }}>
              <p className="section-title-text">CLIENT WORK</p>
            </div>
            <div className="section-title-box">
              <h2 className="subtitle">
                Proven Products in <span className="_02">Active Production</span>
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {/* Redact Media */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "24px", overflow: "hidden", background: "#fff" }}>
              <div style={{ height: "220px", overflow: "hidden", background: "#f0f0f0" }}>
                <img
                  src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b97aef0927b689df222_service-single-left.avif"
                  alt="Redact Media"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", background: "#f3f4f6", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>Freelancer Portfolio</span>
                  <span style={{ fontSize: "12px", background: "#e0f2fe", color: "#0369a1", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>Website Dev</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>Redact Media</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Showcase platform for an elite short-form video editor with embedded video previews and frictionless client inquiry capture.
                </p>
                <a
                  href="https://theredactmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-one w-button"
                  style={{ display: "inline-block", fontSize: "14px", padding: "10px 20px" }}
                >
                  Visit Live Site ↗
                </a>
              </div>
            </div>

            {/* Sududuwa Aqua Products */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "24px", overflow: "hidden", background: "#fff" }}>
              <div style={{ height: "220px", overflow: "hidden", background: "#f0f0f0" }}>
                <img
                  src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0ba404a6599d295653f9_service-single-right.avif"
                  alt="Sududuwa Aqua Products"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", background: "#f3f4f6", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>Aquaculture Enterprise</span>
                  <span style={{ fontSize: "12px", background: "#ecfdf5", color: "#047857", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>Web App & Web</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>Sududuwa Aqua Products</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Export-ready digital presence and commercial operational platform for a high-yield sustainable shrimp farm business.
                </p>
                <a
                  href="https://sududuwaaquaproducts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-one w-button"
                  style={{ display: "inline-block", fontSize: "14px", padding: "10px 20px" }}
                >
                  Visit Live Site ↗
                </a>
              </div>
            </div>

            {/* Grazie */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "24px", overflow: "hidden", background: "#fff" }}>
              <div style={{ height: "220px", overflow: "hidden", background: "#f0f0f0" }}>
                <img
                  src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0cf5bfba8fd63de398bc_website.avif"
                  alt="Grazie E-commerce"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", background: "#f3f4f6", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>Fashion & Retail</span>
                  <span style={{ fontSize: "12px", background: "#fef3c7", color: "#b45309", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>E-commerce</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>Grazie Store</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  High-converting e-commerce destination with automated order processing, payment gateway integration, and real-time inventory management.
                </p>
                <a
                  href="https://www.grazie.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-one w-button"
                  style={{ display: "inline-block", fontSize: "14px", padding: "10px 20px" }}
                >
                  Visit Live Site ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Conversion Box */}
      <section className="contact-section" style={{ paddingTop: "20px", paddingBottom: "70px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ background: "#1c4b42", color: "#fff", borderRadius: "30px", padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
              Ready to build your next digital product?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.6" }}>
              Whether you need a bespoke website, custom web application, cross-platform mobile app, or high-growth online store — Sevens delivers from concept to launch.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="button-one w-button"
                style={{ background: "#fff", color: "#1c4b42", fontWeight: "700", padding: "14px 32px" }}
              >
                Start Your Project
              </Link>
              <a
                href="tel:+94771234567"
                className="button-one w-button"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 28px" }}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="Contact" className="footer">
        <div className="footer-wrap">
          <div className="footer-box _03">
            <div className="footer-container">
              <div className="footer-item _03">
                <div className="wrap">
                  <p className="footer-exar">Colombo, Sri Lanka</p>
                  <div className="social-icon-wrap">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon-link-wrap w-inline-block">
                      <img loading="lazy" src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4b9_2a899f31757da7cc4fbe311f4daaf8b2_facbook.svg" alt="facebook" className="socile-icon" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon-link-wrap w-inline-block">
                      <img loading="lazy" src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4ba_d7ba9acc0667c1dc6fe56ffdd4d5b513_twitter.svg" alt="twitter" className="socile-icon" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon-link-wrap w-inline-block">
                      <img loading="lazy" src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4bb_ad7f6780aafd2ad4430e660617d9a5cd_linkedin.svg" alt="linkedin" className="socile-icon" />
                    </a>
                  </div>
                </div>
                <div className="wrap">
                  <p className="copy">
                    <span className="nexo">Sevens</span> © 2026
                  </p>
                  <div className="footer-link-wrap">
                    <Link href="/services" className="footer-link-02">Services</Link>
                    <Link href="/blog" className="footer-link-02">Blog</Link>
                    <Link href="/contact" className="footer-link-02">Contact</Link>
                  </div>
                </div>
              </div>
              <div className="footer-item-left _03">
                <img
                  loading="lazy"
                  alt="footer-shap"
                  src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/688dda341a027942c409cb54_9b1575f27714ae42a139b037f92f8dd1_footer-shap.avif"
                  className="footer-shap"
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885f4df655c7482dccc9d31_help-shape-1.avif"
            alt="help-shape-1"
            className="help-shape-1 _02"
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885f52e5632001a61b103c1_help-shape-2.avif"
            alt="help-shape-2"
            className="help-shape-2 _03"
          />
        </div>
      </section>

      {/* Back to top */}
      <div className="back-to-top">
        <a href="#Page-Wrapper" className="back-to-top-link w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/6878854b4782d46450f79836/689ac7b4b941bfeec54ee048_back-to-top.svg"
            loading="lazy"
            alt="back-to-top"
          />
        </a>
      </div>
    </div>
  );
}

