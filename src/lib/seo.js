export const SITE_URL = "https://aishyp.com";

export const SITE_NAME = "AIShyp";

export const DEFAULT_OG_IMAGE = "/AIShip.png";

export const DEFAULT_TITLE = "AIShyp | Reliable Courier and Logistics Solutions";

export const DEFAULT_DESCRIPTION =
  "AIShyp helps shipping partners scale with a white-label logistics platform, better courier rates, smart tracking, and faster operations.";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  images = [DEFAULT_OG_IMAGE],
}) {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const canonical = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/aishiplogo.png`,
    sameAs: ["https://www.linkedin.com/in/mohitpanwar2111/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7045814007",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/features`,
      "query-input": "required name=search_term_string",
    },
  };
}
