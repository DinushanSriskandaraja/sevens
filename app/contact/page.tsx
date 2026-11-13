import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Sevens — Get in Touch for Web & App Development",
  description:
    "Have a project in mind? Contact Sevens for website development, web applications, mobile apps, and e-commerce stores. We're available for consultations and quotes.",
  openGraph: {
    title: "Contact Us | Sevens — Build Digital Products",
    description:
      "Have a project in mind? Let's get in touch! Contact Sevens for website development, web apps, mobile apps, and e-commerce stores.",
    type: "website",
    siteName: "Sevens",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sevens",
    description: "Get in touch with Sevens to discuss your next digital project.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
