import Main from "./components/Main";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "AIShyp Logistics Platform for Shipping Partners",
  description:
    "Scale your shipping business with AIShyp's white-label logistics platform, better rates, branded tracking, and multi-courier operations.",
  path: "/",
});

export default function Home() {
  return (
    <>
     <Main/>
    </>
  );
}
