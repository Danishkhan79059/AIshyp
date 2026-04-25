import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "AIShyp Features - Shipping Automation Platform",
  description:
    "Explore AIShyp features including branded tracking, courier comparison, dashboard analytics, remittance workflows, and NDR automation.",
  path: "/features",
  images: ["/aydash.png"],
});

export default function FeaturesLayout({ children }) {
  return children;
}
