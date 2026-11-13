import React from "react";
import NexoStudio from "./components/NexoStudio";

export const metadata = {
  title: "Sevens — Website, Web App, Mobile App & E-commerce Development",
  description:
    "Sevens is a digital development studio building websites, web apps, mobile apps, and e-commerce stores for freelancers, individual businesses, online businesses, and influencers.",
  keywords: [
    "website development",
    "web app development",
    "mobile app development",
    "e-commerce development",
    "freelancer website",
    "business website",
    "online store",
    "influencer website",
    "Sevens",
    "digital agency",
    "full-stack development",
    "React",
    "Next.js",
    "responsive design",
  ],
  openGraph: {
    title: "Sevens — Build Digital Products That Grow Your Business",
    description:
      "We build websites, web apps, mobile apps, and e-commerce stores for freelancers, businesses, and influencers. Fast delivery. Modern tech. Real results.",
    type: "website",
    siteName: "Sevens",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevens — Website, Web App, Mobile App & E-commerce Development",
    description:
      "Build digital products that grow your business. Websites, web apps, mobile apps, and e-commerce stores — built by Sevens.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <NexoStudio />;
}
