import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Pricing Plans - AIShyp Franchise Logistics",
  description:
    "Compare AIShyp pricing plans for starter, growth, and enterprise logistics franchises with transparent commercial terms.",
  path: "/pricing",
  images: ["/Ratesunlock.png"],
});

export default function PricingLayout({ children }) {
  return children;
}
