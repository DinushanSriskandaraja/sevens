"use client";

import React, { useEffect } from "react";
import type { BlogPost } from "@/lib/blogs";

interface BlogClientProps {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
}

const HEADER_HTML = "<div id=\"Page-Wrapper\" data-w-id=\"b991b60b-0626-d626-6c5c-f081602908ca\" class=\"page-wrapper\"><div data-animation=\"default\" class=\"navbar w-nav\" data-easing2=\"ease-out-quart\" data-easing=\"ease-out-quart\" data-collapse=\"all\" role=\"banner\" data-no-scroll=\"1\" data-duration=\"600\" id=\"hero\" data-doc-height=\"1\"><div class=\"w-layout-blockcontainer container w-container\"><div data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff3407\" class=\"container-navbar\"><div class=\"header-left\"><div class=\"available-btn\"><div class=\"available-img-wrap\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/6880882d5cc81a411587841a_55d1a2751080e83209b3dff93b405446_Herader-img.svg\" loading=\"lazy\" alt=\"Herader-img\" class=\"available-img\"/></div><div class=\"call-wrap\"><a href=\"tel:(123)0284695\" class=\"call\">Book a Free Call</a><div class=\"available-text-wrap\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/6880882d5bf95b88c0110b7a_Ellipse-198.svg\" loading=\"lazy\" alt=\"Crcile\" class=\"ellipse-198\"/><div class=\"available-text\">Available now</div></div></div></div></div><a href=\"/\" class=\"navbar-brand w-nav-brand\"><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688085a36497cfeb5ed9ad15_1701e725575a72211e948080a2058381_logo-stryker-small.svg\" alt=\"logo-stryker-small\" class=\"logo\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/68b821657d18f5ae079488f0_white-logo.svg\" alt=\"white-logo\" class=\"white-logo\"/></a><link rel=\"prefetch\" href=\"/\"/><div class=\"content\"><div data-w-id=\"a9fc7156-b012-95d8-70e8-4523860aff50\" class=\"hamburger js-hover _03\"><div class=\"hamburger-wrap _03\"><p class=\"menu-text _03\">Menu</p><div class=\"btn-2\"><div class=\"line-top _03\"></div><div class=\"line-bottom _03\"></div></div></div></div></div></div></div><div class=\"global-menu\"><div class=\"global-menu__wrap\"><a data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff341e\" href=\"/\" class=\"global-menu__item\">Home</a><a data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff3420\" href=\"https://sevens.webflow.io/#Services\" class=\"global-menu__item\">Service</a><a data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff3422\" href=\"https://sevens.webflow.io/#Portfolio\" class=\"global-menu__item\">Portfolio</a><a data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff3424\" href=\"/contact\" class=\"global-menu__item\">Contact</a><a data-w-id=\"ad102406-2d81-1a6f-beb1-18379bff3426\" href=\"/blog\" aria-current=\"page\" class=\"global-menu__item w--current\">Blog</a></div><div class=\"global-menu-shap-left\"></div><div class=\"global-menu-shap-right\"></div></div><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688e5423c4cd195a47f572a7_a3e2d757777e0f025eabb405f7c464c0_pagtitle-shap.avif\" alt=\"pagtitle-shap\" class=\"pagtitle-shap\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688e54983e0f3cbdd77c6fe0_pagtitle-shap-2.avif\" alt=\"pagtitle-shap-2\" class=\"pagtitle-shap-2\"/></div>";
const FOOTER_HTML = "<section id=\"Contact\" class=\"footer\"><div class=\"footer-wrap\"><div class=\"footer-box\"><div class=\"footer-container\"><div class=\"footer-item\"><div class=\"footer-title-wrap\"><h3 data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc66\" class=\"footer-title\">Have a project in mind? </h3><h3 data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc68\" class=\"footer-title\">let’s get in touch!</h3></div><div class=\"link-wrap\"><a data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc6b\" href=\"tel:+442079460958\" class=\"call-link w-inline-block\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688b562e505fecedaf5b67f3_call.svg\" loading=\"lazy\" alt=\"call\"/><p class=\"number\">+94 77 123 4567</p></a><a data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc6f\" href=\"mailto:contact@sevens.com\" class=\"call-link w-inline-block\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688b5872f93a536baed4c6d7_email.svg\" loading=\"lazy\" alt=\"email\"/><p class=\"number\">contact@sevens.com</p></a></div></div><div class=\"footer-item-left\"><div class=\"footer-form w-form\"><form id=\"email-form\" name=\"email-form\" data-name=\"Email Form\" method=\"get\" class=\"form\" data-wf-page-id=\"688e443bc3a40ec8b9f790a5\" data-wf-element-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc75\"><input class=\"form-input w-input\" maxlength=\"256\" name=\"Name\" data-name=\"Name\" placeholder=\"Full name *\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc76\" type=\"text\" id=\"Name\" required=\"\"/><input class=\"form-input w-input\" maxlength=\"256\" name=\"Email\" data-name=\"Email\" placeholder=\"Email *\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc77\" type=\"email\" id=\"Email\" required=\"\"/><input class=\"form-input w-input\" maxlength=\"256\" name=\"Phone-number\" data-name=\"Phone number\" placeholder=\"Phone number *\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc78\" type=\"number\" id=\"Phone-number\" required=\"\"/><textarea class=\"form-input _03 w-input\" maxlength=\"5000\" name=\"Your-comment\" data-name=\"Your comment\" placeholder=\"Your comment *\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc79\" id=\"Your-comment\"></textarea><input type=\"submit\" data-wait=\"Please wait...\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc7a\" class=\"message w-button\" value=\"Send Message\"/></form><div class=\"success-message w-form-done\"><div class=\"thank\">Thank you! Your submission has been received!</div></div><div class=\"error-message w-form-fail\"><div class=\"oops\">Oops! Something went wrong while submitting the form.</div></div></div></div></div></div><div class=\"footer-box _03\"><div class=\"footer-container\"><div class=\"footer-item _03\"><div class=\"wrap\"><p data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc84\" class=\"footer-exar\">Colombo, New York, NY 12134, United States</p><div data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc86\" class=\"social-icon-wrap\"><a data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc87\" href=\"https://www.facebook.com/login.php/\" target=\"_blank\" class=\"footer-social-icon-link-wrap w-inline-block\"><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4b9_2a899f31757da7cc4fbe311f4daaf8b2_facbook.svg\" alt=\"facbook\" class=\"socile-icon\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4bd_4b106d8d5d153cf65f089c608f841317_facebook-white.svg\" alt=\"facebook-white\" class=\"socile-icon-facebook\"/></a><a href=\"https://x.com/i/flow/login\" target=\"_blank\" class=\"footer-social-icon-link-wrap w-inline-block\"><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4ba_d7ba9acc0667c1dc6fe56ffdd4d5b513_twitter.svg\" alt=\"twitter\" class=\"socile-icon\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4be_5402a2eecabb4d77b832849dcbf68824_twtiter-white.svg\" alt=\"twtiter-white\" class=\"socile-icon-facebook\"/></a><a href=\"https://www.linkedin.com/\" target=\"_blank\" class=\"footer-social-icon-link-wrap w-inline-block\"><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4bb_ad7f6780aafd2ad4430e660617d9a5cd_linkedin.svg\" alt=\"linkedin\" class=\"socile-icon\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4bf_a4767aba733af430dfca5d86622850ea_lindin-white.svg\" alt=\"lindin-white\" class=\"socile-icon-facebook\"/></a><a href=\"https://www.pinterest.com/login/\" target=\"_blank\" class=\"footer-social-icon-link-wrap w-inline-block\"><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4bc_a2049262845f7afd9de325d9aab69435_pinterest.svg\" alt=\"pinterest\" class=\"socile-icon\"/><img loading=\"lazy\" src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688cfc6facbbf3e18dcdd4c0_e046fa281a3e48d4f923fd8482eda766_pinteres-white.svg\" alt=\"pinteres-white\" class=\"socile-icon-facebook\"/></a></div></div><div class=\"wrap\"><p data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc94\" class=\"copy\"><span class=\"nexo\">Sevens</span> © 2026</p><div data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbc98\" class=\"footer-link-wrap\"><a href=\"/admin-page/styleguide\" class=\"footer-link-02\">Styleguide</a><a href=\"/admin-page/licenses\" class=\"footer-link-02\">Licenses</a><a href=\"/admin-page/change-log\" class=\"footer-link-02\">Change Log</a></div></div></div><div class=\"footer-item-left _03\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/688dda341a027942c409cb54_9b1575f27714ae42a139b037f92f8dd1_footer-shap.avif\" loading=\"lazy\" data-w-id=\"f48f2c1b-b707-bf58-230b-80a78bccbca0\" alt=\"footer-shap\" class=\"footer-shap\"/></div></div></div><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885f4df655c7482dccc9d31_help-shape-1.avif\" loading=\"lazy\" alt=\"help-shape-1\" class=\"help-shape-1 _02\"/><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885f52e5632001a61b103c1_help-shape-2.avif\" loading=\"lazy\" alt=\"help-shape-2\" class=\"help-shape-2 _03\"/></div></section><div class=\"back-to-top\"><a href=\"#Page-Wrapper\" class=\"back-to-top-link w-inline-block\"><img src=\"https://cdn.prod.website-files.com/6878854b4782d46450f79836/689ac7b4b941bfeec54ee048_back-to-top.svg\" loading=\"lazy\" alt=\"back-to-top\"/></a></div></div>";

export default function BlogClient({ posts, featuredPosts }: BlogClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-wf-page", "688e443bc3a40ec8b9f790a5");
      if ((window as any).Webflow) {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        (window as any).Webflow.require("ix2")?.init();
      }
    }
  }, []);

  return (
    <div id="Page-Wrapper" className="page-wrapper">
      <div dangerouslySetInnerHTML={{ __html: HEADER_HTML.replace('<div id="Page-Wrapper" data-w-id="b991b60b-0626-d626-6c5c-f081602908ca" class="page-wrapper">', '') }} />

      <section className="insights-section-03">
        <div className="w-layout-blockcontainer container w-container">
          <div className="insights-row">
            <div className="insights-item-wrap blog-wrap">
              {posts.map((post, i) => {
                const layoutType = i % 6;

                if (layoutType === 0) {
                  return (
                    <div key={post.slug} className="blog-collection w-dyn-list">
                      <div role="list" className="blog-collection-item-wrap w-dyn-items">
                        <div role="listitem" className="blog-collection-item w-dyn-item">
                          <div className="insights-item">
                            <div className="insights-item-img-group-wrap">
                              <img
                                src={post.coverImage || "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/692835e7b222b7b957ecf738_freelancing-was-best-idea-my-career-2.jpg"}
                                loading="lazy"
                                alt={post.title}
                                className="insights-item-img-01"
                              />
                              <img
                                src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/692835ec359219e7effc2769_freelancing-was-best-idea-my-career-3.jpg"
                                loading="lazy"
                                alt="Blog"
                                className="insights-item-img-02"
                              />
                              <img
                                src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/688de37cf462483add57bd55_bolg-3.avif"
                                loading="lazy"
                                alt="Blog"
                                className="insights-item-img-03"
                              />
                              <img
                                src="https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/692835a2cf665a0637d15e17_software-engineer-working-digital-cad-project-late-night-office-company-1.jpg"
                                loading="lazy"
                                alt="Blog"
                                className="insights-item-img-04"
                              />
                            </div>
                            <a href={`/blog/${post.slug}`} className="insights-item-title">
                              {post.title}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (layoutType === 1) {
                  return (
                    <div key={post.slug} className="blog-collection w-dyn-list">
                      <div role="list" className="blog-collection-item-wrap w-dyn-items">
                        <div role="listitem" className="blog-collection-item w-dyn-item">
                          <div className="insights-item-02">
                            <a href={`/blog/${post.slug}`} className="insights-item-title-02">
                              {post.title}
                            </a>
                            <img
                              src={post.coverImage || "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/688de3d415ef0fa82462ebe4_688b38ce524c27923ad1676f_caucasian-man-working-shoot%201.avif"}
                              loading="lazy"
                              alt={post.title}
                              className="caucasian-img"
                            />
                            <div className="insights-item-overlay"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (layoutType === 4) {
                  return (
                    <div key={post.slug} className="blog-collection w-dyn-list">
                      <div role="list" className="blog-collection-item-wrap w-dyn-items">
                        <div role="listitem" className="blog-collection-item w-dyn-item">
                          <div className="insights-item-03">
                            <img
                              src={post.coverImage || "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/692838bba1df64588c0f36ee_imgi_14_688e47432a7341e936416d61_blog-5.jpg"}
                              loading="lazy"
                              alt={post.title}
                              className="caucasian-img _02"
                            />
                            <a href={`/blog/${post.slug}`} className="insights-item-title-03">
                              {post.title}
                            </a>
                            <div className="insights-item-overlay-02"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={post.slug} className="blog-collection w-dyn-list">
                    <div role="list" className="blog-collection-item-wrap w-dyn-items">
                      <div role="listitem" className="blog-collection-item w-dyn-item">
                        <div className="insights-item-three">
                          <a href={`/blog/${post.slug}`} className="insights-item-title-three">
                            {post.title}
                          </a>
                          <img
                            src={post.coverImage || "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/688e46779dc2bb9ca5b45c4d_minimal-style-device-screen%20(1)%201.avif"}
                            loading="lazy"
                            alt={post.title}
                            className="insights-item-three-img"
                          />
                          {layoutType === 5 && <div className="overlay"></div>}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: FOOTER_HTML }} />
    </div>
  );
}
