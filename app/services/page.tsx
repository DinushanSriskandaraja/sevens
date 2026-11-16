import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Website, Web App, Mobile App & E-commerce Development | Sevens",
  description:
    "Explore our 4 core digital services: Website Development, Web App Development, Mobile App Development, and E-commerce Solutions. Tailored for Freelancers, Individual Businesses, Online Businesses, and Influencers.",
  openGraph: {
    title: "Our Services | Sevens",
    description:
      "Full-stack digital engineering: Websites, Web Apps, Mobile Apps, and E-commerce stores built to scale your business.",
  },
};

export default function ServicesPage() {
  return <ServicesClient services={SERVICES} />;
}

