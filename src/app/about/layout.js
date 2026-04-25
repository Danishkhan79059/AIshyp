import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "About AIShyp - Shipping Partner Network",
  description:
    "Learn how AIShyp helps independent shipping partners grow with better rates, white-label logistics tools, and aggregated demand.",
  path: "/about",
  images: ["/Mohit.png"],
});

export default function AboutLayout({ children }) {
  return children;
}
