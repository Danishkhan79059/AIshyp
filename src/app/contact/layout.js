import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact AIShyp - Logistics Consultation and Support",
  description:
    "Contact AIShyp for shipping platform onboarding, enterprise logistics support, and franchise growth consultation.",
  path: "/contact",
  images: ["/partner.png"],
});

export default function ContactLayout({ children }) {
  return children;
}
