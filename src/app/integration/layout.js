import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Integrations - Shopify and Marketplace Shipping",
  description:
    "Connect Shopify and other channels with AIShyp to automate order sync, shipping label creation, and real-time tracking updates.",
  path: "/integration",
  images: ["/shopify.jpeg"],
});

export default function IntegrationLayout({ children }) {
  return children;
}
