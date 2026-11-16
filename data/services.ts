export interface ServiceChooseItem {
  number: string;
  frontTitle: string;
  backText: string;
  icon: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  coverImage: string;
  coverImageSrcset?: string;
  subImage1: string;
  subImage2: string;
  overviewP1: string;
  overviewP2: string;
  expectations: string[];
  deepDive: string;
  result: string;
  whyChooseUs: ServiceChooseItem[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "website-dev",
    title: "Website Development",
    shortTitle: "Website Dev",
    headline: "Transform your ideas into stunning, high-converting digital experiences",
    coverImage: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif",
    coverImageSrcset: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui-p-500.avif 500w, https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui-p-800.avif 800w, https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif 1712w",
    subImage1: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b97aef0927b689df222_service-single-left.avif",
    subImage2: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0ba404a6599d295653f9_service-single-right.avif",
    overviewP1: "At Sevens, our website development service goes beyond creating beautiful interfaces — we build user-centered, conversion-driven digital platforms. Whether it's a portfolio for a top creator, a commercial business website, or a high-velocity landing page, we ensure every design and engineering decision enhances usability, engagement, and brand authority.",
    overviewP2: "We combine user research, responsive design systems, and modern full-stack development to deliver solutions that not only look remarkable but solve real business problems. By aligning your digital presence with your revenue goals, we help you create websites that visitors love exploring and you take pride in showing.",
    expectations: [
      "Smooth, high-conversion user flows that keep visitors engaged.",
      "Pixel-perfect responsive design across mobile, tablet, and 4K screens.",
      "SEO-first semantic structure with sub-second page loads.",
      "Clean, maintainable Next.js codebase built for rapid growth."
    ],
    deepDive: "We craft custom user interfaces from scratch, tailoring typography, motion, and interaction states to match your distinct identity. Every page is structured for intuitive navigation, clear hierarchy, and prominent calls to action that guide visitors toward conversion.",
    result: "Our clients experience up to 3x higher visitor engagement, significantly reduced bounce rates, and a sleek, credible digital platform that generates inbound leads around the clock.",
    whyChooseUs: [
      {
        number: "01",
        frontTitle: "Strategic design thinking",
        backText: "Every layout, animation, and button is engineered with purpose, blending visual storytelling with measurable business outcomes.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885dc1b8e8b611f41106f79_730d7dd681bbf8ff00892ec742584213_iconsax-lamp-charge-8pbhd29d-%201.svg"
      },
      {
        number: "02",
        frontTitle: "Human-centered approach",
        backText: "We design for real people first, eliminating friction and crafting web environments that feel natural, accessible, and enjoyable.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef145578009ffce82a8f_7d1f5f83c66ea21703c1634bbc72ab3f_iconsax-book-open-bkvs82d7-%201.svg"
      },
      {
        number: "03",
        frontTitle: "Conversion-focused layouts",
        backText: "Our page architectures guide the eye seamlessly toward key value propositions and frictionless conversion points.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef43b18ab1756c9b3005_2aae1f8b97952452a3291a63717b60bb_iconsax-chart-2-5fnadqva-%201.svg"
      },
      {
        number: "04",
        frontTitle: "Full-stack technical excellence",
        backText: "Built on modern React and Next.js for uncompromised performance, airtight security, and seamless CMS integration.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6899deaaab0f1e411a1f4eb7_848ff175c1b8bdecf87f69f53eb0272e_choose-4.svg"
      }
    ],
    metaTitle: "Website Development Services | Sevens",
    metaDescription: "Transform your ideas into high-converting, responsive websites with Sevens. Fast, modern tech tailored for creators, businesses, and influencers."
  },
  {
    slug: "web-app-dev",
    title: "Web App Development",
    shortTitle: "Web App Dev",
    headline: "Scalable, full-stack web applications tailored to your business operations",
    coverImage: "/assets/img/hero-web-app.jpg",
    subImage1: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b97aef0927b689df222_service-single-left.avif",
    subImage2: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0ba404a6599d295653f9_service-single-right.avif",
    overviewP1: "Sevens builds modern, robust web applications that streamline complex business processes into intuitive, elegant digital software. From custom client portals and analytics dashboards to SaaS products, we deliver software built for speed, security, and scalability.",
    overviewP2: "We architect web apps with type-safe APIs, reactive real-time state, and cloud-native serverless infrastructure. By eliminating manual bottlenecks and unifying data flows, we give your business an unfair technical advantage.",
    expectations: [
      "Intuitive dashboards and workflows tailored to your exact operational requirements.",
      "Type-safe TypeScript, Next.js, and Node.js architecture with zero technical debt.",
      "Role-based authentication, audit logs, and bank-grade data security.",
      "Real-time notifications, automated reports, and third-party API integrations."
    ],
    deepDive: "We engineer modular frontend components paired with optimized database queries and edge caching. Every interaction is designed to respond instantly, giving your team and customers a desktop-class experience right inside the browser.",
    result: "Businesses eliminate countless hours of manual spreadsheet handling, automate core billing and data operations, and launch scalable SaaS products in weeks instead of months.",
    whyChooseUs: [
      {
        number: "01",
        frontTitle: "Scalable cloud architecture",
        backText: "Engineered from day one to handle high traffic spikes, distributed database replication, and sub-100ms response times.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885dc1b8e8b611f41106f79_730d7dd681bbf8ff00892ec742584213_iconsax-lamp-charge-8pbhd29d-%201.svg"
      },
      {
        number: "02",
        frontTitle: "Enterprise-grade security",
        backText: "Airtight authentication, encrypted data at rest and in transit, and continuous automated vulnerability scans.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef145578009ffce82a8f_7d1f5f83c66ea21703c1634bbc72ab3f_iconsax-book-open-bkvs82d7-%201.svg"
      },
      {
        number: "03",
        frontTitle: "Intuitive UX workflows",
        backText: "Complex business logic translated into clean, self-explanatory interfaces that require zero training to master.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef43b18ab1756c9b3005_2aae1f8b97952452a3291a63717b60bb_iconsax-chart-2-5fnadqva-%201.svg"
      },
      {
        number: "04",
        frontTitle: "Automated CI/CD delivery",
        backText: "Automated testing pipelines and zero-downtime deployments ensure your features roll out reliably.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6899deaaab0f1e411a1f4eb7_848ff175c1b8bdecf87f69f53eb0272e_choose-4.svg"
      }
    ],
    metaTitle: "Web Application Development | Sevens",
    metaDescription: "Build high-performance web applications, SaaS platforms, and custom business tools with Sevens. Modern full-stack engineering."
  },
  {
    slug: "mobile-app-dev",
    title: "Mobile App Development",
    shortTitle: "Mobile App Dev",
    headline: "Native & cross-platform mobile apps for iOS and Android with 60fps performance",
    coverImage: "/assets/img/hero-mobile-app.jpg",
    subImage1: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b97aef0927b689df222_service-single-left.avif",
    subImage2: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0ba404a6599d295653f9_service-single-right.avif",
    overviewP1: "Reach your users directly in the palm of their hand. Sevens develops high-performance mobile applications for iOS and Android that combine fluid native gestures with dependable offline capabilities and real-time push communication.",
    overviewP2: "We leverage industry-leading cross-platform technologies to deliver unified codebases that deploy smoothly to both the Apple App Store and Google Play Store, cutting development costs and time-to-market in half.",
    expectations: [
      "Smooth, jitter-free 60fps animations and native gesture responsiveness.",
      "Push notification systems, background sync, and offline storage.",
      "Seamless integration with biometric ID, camera, location, and device sensors.",
      "Complete App Store and Google Play submission and approval management."
    ],
    deepDive: "We prioritize memory efficiency, battery longevity, and low-latency API communication so your application stays snappy even on older devices or spotty cellular connections.",
    result: "High user retention rates, 5-star ratings across app marketplaces, and an engaged mobile audience that drives recurring revenue.",
    whyChooseUs: [
      {
        number: "01",
        frontTitle: "Unified cross-platform speed",
        backText: "Single clean codebase delivering authentic native experiences on both iOS and Android simultaneously.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885dc1b8e8b611f41106f79_730d7dd681bbf8ff00892ec742584213_iconsax-lamp-charge-8pbhd29d-%201.svg"
      },
      {
        number: "02",
        frontTitle: "Offline-first resilience",
        backText: "Local SQLite caching and background data synchronization keep your app operational even without an internet connection.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef145578009ffce82a8f_7d1f5f83c66ea21703c1634bbc72ab3f_iconsax-book-open-bkvs82d7-%201.svg"
      },
      {
        number: "03",
        frontTitle: "Hardware-level integration",
        backText: "Deep hardware integration with Apple FaceID, Android Biometrics, BLE Bluetooth, GPS, and camera hardware.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef43b18ab1756c9b3005_2aae1f8b97952452a3291a63717b60bb_iconsax-chart-2-5fnadqva-%201.svg"
      },
      {
        number: "04",
        frontTitle: "App Store submission handling",
        backText: "We manage all store guidelines, privacy disclosures, screenshot assets, and review cycles until your app is live.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6899deaaab0f1e411a1f4eb7_848ff175c1b8bdecf87f69f53eb0272e_choose-4.svg"
      }
    ],
    metaTitle: "Mobile App Development | Sevens",
    metaDescription: "Cross-platform iOS and Android mobile app development with Sevens. Fast, responsive, native-feel mobile applications."
  },
  {
    slug: "e-commerce-dev",
    title: "E-Commerce Development",
    shortTitle: "E-commerce",
    headline: "High-converting online stores built for lightning checkout and maximum sales",
    coverImage: "/assets/img/project-nordic-goods.jpg",
    subImage1: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b97aef0927b689df222_service-single-left.avif",
    subImage2: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0ba404a6599d295653f9_service-single-right.avif",
    overviewP1: "Online shopping is won on speed, trust, and frictionless checkout. Sevens creates high-converting e-commerce storefronts that showcase your catalog in an editorial aesthetic while delivering sub-second page transitions and effortless checkout experiences.",
    overviewP2: "Whether you need a custom headless storefront with Next.js, a customized Shopify store, or direct payment gateway integrations (Stripe, PayPal, PayHere), we engineer your store for maximum conversion and high average order value.",
    expectations: [
      "Frictionless 1-click checkout flows with multi-currency and local payment support.",
      "Instant faceted search and catalog filtering with zero page reload delay.",
      "Automated inventory management, order webhooks, and abandoned cart recovery.",
      "High-converting product detail pages with social proof and upsell modules."
    ],
    deepDive: "We optimize every stage of the buyer journey — from thumbnail load times to mobile checkout form ergonomics — ensuring your customers complete their purchases without hesitation.",
    result: "Our e-commerce stores deliver up to 35% higher checkout completion rates and rapid mobile browsing that turns first-time visitors into repeat buyers.",
    whyChooseUs: [
      {
        number: "01",
        frontTitle: "Sub-second product browsing",
        backText: "Edge-cached catalog images and client-side page transitions allow shoppers to browse hundreds of items instantly.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885dc1b8e8b611f41106f79_730d7dd681bbf8ff00892ec742584213_iconsax-lamp-charge-8pbhd29d-%201.svg"
      },
      {
        number: "02",
        frontTitle: "Airtight payment security",
        backText: "PCI-DSS compliant payment gateways supporting credit cards, Apple Pay, Google Pay, and localized bank transfers.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef145578009ffce82a8f_7d1f5f83c66ea21703c1634bbc72ab3f_iconsax-book-open-bkvs82d7-%201.svg"
      },
      {
        number: "03",
        frontTitle: "Conversion-optimized checkouts",
        backText: "Single-page checkout flows stripped of distractions to prevent cart abandonment and maximize purchase completion.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6885ef43b18ab1756c9b3005_2aae1f8b97952452a3291a63717b60bb_iconsax-chart-2-5fnadqva-%201.svg"
      },
      {
        number: "04",
        frontTitle: "Automated inventory & shipping",
        backText: "Real-time sync with warehouse inventories, automated courier dispatching, and branded email tracking notifications.",
        icon: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/6899deaaab0f1e411a1f4eb7_848ff175c1b8bdecf87f69f53eb0272e_choose-4.svg"
      }
    ],
    metaTitle: "E-Commerce Development Services | Sevens",
    metaDescription: "Build high-converting online stores with Sevens. Fast checkout, secure payments, and modern e-commerce engineering."
  }
];

// Map of all legacy/alias slugs to their canonical service
export const SLUG_MAP: Record<string, string> = {
  "website-dev": "website-dev",
  "ui-ux": "website-dev",
  "website": "website-dev",
  "websites": "website-dev",
  
  "web-app-dev": "web-app-dev",
  "groth": "web-app-dev",
  "web-apps": "web-app-dev",
  "web-app": "web-app-dev",
  
  "mobile-app-dev": "mobile-app-dev",
  "code": "mobile-app-dev",
  "mobile-apps": "mobile-app-dev",
  "mobile-app": "mobile-app-dev",
  
  "e-commerce-dev": "e-commerce-dev",
  "e-commerce": "e-commerce-dev",
  "ecommerce": "e-commerce-dev",
  "branding": "e-commerce-dev",
};

export function getService(slug: string): ServiceDetail | undefined {
  const canonical = SLUG_MAP[slug] || slug;
  return SERVICES.find((s) => s.slug === canonical);
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SLUG_MAP);
}

