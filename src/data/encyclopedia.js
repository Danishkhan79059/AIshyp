export const encyclopediaTopics = [
  {
    title: "What is RTO in Ecommerce Shipping?",
    slug: "rto-in-ecommerce-shipping",
    shortDefinition:
      "RTO (Return to Origin) is when an undelivered order is sent back to the seller.",
    description:
      "RTO in ecommerce shipping directly impacts profitability because businesses pay forward and reverse logistics charges for the same failed order. High RTO usually indicates weak confirmation workflows, address quality issues, and low last-mile delivery coordination.",
    whyItMatters:
      "Reducing RTO improves margins, lowers operational waste, and helps franchise-driven shipping networks maintain healthier partner economics.",
    howItWorks:
      "When delivery fails, the courier marks an exception reason, raises an NDR event, and after retries the shipment is returned to the origin address if unresolved.",
    relatedTopics: ["ndr-in-logistics", "cod-order-confirmation", "delivery-attempt-failure"],
  },
  {
    title: "NDR in Logistics Explained",
    slug: "ndr-in-logistics",
    shortDefinition:
      "NDR (Non-Delivery Report) captures why a shipment could not be delivered.",
    description:
      "NDR in logistics is a critical exception layer that helps teams identify delivery blockers like customer unavailable, wrong address, or refusal. Structured NDR handling prevents avoidable returns and improves first-attempt delivery success.",
    whyItMatters:
      "Without disciplined NDR workflows, ecommerce businesses see rising RTO and lower customer satisfaction.",
    howItWorks:
      "Couriers push NDR reasons, support teams trigger customer communication, and updated instructions are sent for reattempt or return decisions.",
    relatedTopics: ["ndr-automation", "rto-in-ecommerce-shipping", "delivery-attempt-failure"],
  },
  {
    title: "Shipping Aggregator Platform Meaning",
    slug: "shipping-aggregator-platform-meaning",
    shortDefinition:
      "A shipping aggregator platform connects multiple courier partners in one system.",
    description:
      "A shipping aggregator platform centralizes rate comparison, label generation, tracking updates, and performance monitoring. It allows ecommerce brands and franchise operators to avoid fragmented operations across multiple courier panels.",
    whyItMatters:
      "It reduces complexity, improves courier selection quality, and helps scale logistics with better control.",
    howItWorks:
      "Orders flow into one dashboard, courier options are evaluated by lane and SLA, and the selected carrier is used for fulfillment and tracking.",
    relatedTopics: ["multi-courier-shipping", "courier-rate-comparison", "logistics-control-tower"],
  },
  {
    title: "Courier API Integration",
    slug: "courier-api-integration",
    shortDefinition:
      "Courier API integration links your system to shipping services for automation.",
    description:
      "Courier API integration enables automatic order sync, AWB allocation, label creation, pickup requests, and real-time status updates. It reduces manual effort and improves data consistency across operations.",
    whyItMatters:
      "Strong API integration improves dispatch speed, lowers errors, and supports scale.",
    howItWorks:
      "Your OMS or storefront sends shipment data via API, receives courier responses, and updates tracking events through webhooks or polling.",
    relatedTopics: ["shipping-api-india", "awb-generation", "multi-courier-shipping"],
  },
  {
    title: "Last Mile Delivery Optimization",
    slug: "last-mile-delivery-optimization",
    shortDefinition:
      "Last mile delivery optimization improves final delivery speed, success, and cost.",
    description:
      "Last mile delivery is often the most expensive and failure-prone part of logistics. Optimization includes better route planning, communication workflows, courier benchmarking, and NDR handling.",
    whyItMatters:
      "Improved last-mile performance directly impacts customer experience and repeat purchase behavior.",
    howItWorks:
      "Businesses analyze pincode-level outcomes, select high-performing couriers, and automate exception management to improve successful delivery rates.",
    relatedTopics: ["delivery-attempt-failure", "pincode-serviceability", "ndr-automation"],
  },
  {
    title: "Ecommerce Shipping Workflow",
    slug: "ecommerce-shipping-workflow",
    shortDefinition:
      "Ecommerce shipping workflow is the end-to-end process from order to delivery.",
    description:
      "A standard ecommerce shipping workflow includes order verification, packaging, courier allocation, pickup, transit visibility, and delivery completion or exception handling.",
    whyItMatters:
      "A strong workflow reduces delays, improves customer trust, and lowers fulfillment costs.",
    howItWorks:
      "Operational checkpoints are defined at each stage with automation triggers for status updates and failure recovery.",
    relatedTopics: ["shipping-aggregator-platform-meaning", "cod-order-confirmation", "ndr-in-logistics"],
  },
  {
    title: "COD Order Confirmation",
    slug: "cod-order-confirmation",
    shortDefinition:
      "COD order confirmation verifies customer intent before dispatch.",
    description:
      "COD order confirmation helps filter low-intent orders by validating address and buyer availability through OTP, WhatsApp, IVR, or manual support before shipping.",
    whyItMatters:
      "It reduces fake orders, lowers RTO risk, and protects shipping margins.",
    howItWorks:
      "Customers confirm order details before dispatch; unverified orders are held or canceled based on policy.",
    relatedTopics: ["rto-in-ecommerce-shipping", "ndr-automation", "delivery-attempt-failure"],
  },
  {
    title: "Delivery Attempt Failure",
    slug: "delivery-attempt-failure",
    shortDefinition:
      "Delivery attempt failure is when a courier cannot complete delivery in a try.",
    description:
      "Common failure reasons include customer unavailable, incorrect address, payment issues, and access constraints. Repeated failures increase costs and lead to returns.",
    whyItMatters:
      "Understanding failure patterns helps improve reattempt success and reduce RTO.",
    howItWorks:
      "Couriers log failure reasons, systems trigger customer outreach, and reattempt windows are updated.",
    relatedTopics: ["ndr-in-logistics", "last-mile-delivery-optimization", "rto-in-ecommerce-shipping"],
  },
  {
    title: "Pincode Serviceability",
    slug: "pincode-serviceability",
    shortDefinition:
      "Pincode serviceability defines whether a courier can deliver to a destination.",
    description:
      "Serviceability is dynamic and can vary by courier, pickup location, and operational constraints. Real-time checks reduce booking failures and customer dissatisfaction.",
    whyItMatters:
      "Wrong assumptions about serviceability create delays, cancellations, and support load.",
    howItWorks:
      "Platforms check pincode coverage with courier APIs before booking and route shipments to available carriers.",
    relatedTopics: ["courier-rate-comparison", "multi-courier-shipping", "last-mile-delivery-optimization"],
  },
  {
    title: "Courier Rate Comparison",
    slug: "courier-rate-comparison",
    shortDefinition:
      "Courier rate comparison evaluates shipping charges across logistics partners.",
    description:
      "Comparing rates by lane, weight slab, and service level helps businesses choose economical carriers without sacrificing reliability.",
    whyItMatters:
      "Better courier selection improves margin and operational efficiency.",
    howItWorks:
      "Systems fetch courier rates, evaluate ETA and serviceability, and recommend options by business rule.",
    relatedTopics: ["shipping-aggregator-platform-meaning", "multi-courier-shipping", "pincode-serviceability"],
  },
  {
    title: "Multi-Courier Shipping",
    slug: "multi-courier-shipping",
    shortDefinition:
      "Multi-courier shipping uses more than one carrier for order fulfillment.",
    description:
      "Using multiple courier partners reduces dependency risk and improves lane-level performance by allowing dynamic partner selection per shipment.",
    whyItMatters:
      "It improves resilience during disruptions and creates better customer outcomes.",
    howItWorks:
      "Orders are routed to carriers based on SLA, rates, serviceability, and historical success data.",
    relatedTopics: ["courier-rate-comparison", "shipping-aggregator-platform-meaning", "courier-api-integration"],
  },
  {
    title: "AWB Generation",
    slug: "awb-generation",
    shortDefinition:
      "AWB generation creates the airway bill number used for shipment tracking.",
    description:
      "Each shipment requires an AWB to identify parcel movement across courier systems. Automated AWB generation speeds dispatch and reduces manual mistakes.",
    whyItMatters:
      "Faster AWB workflows improve turnaround time and tracking accuracy.",
    howItWorks:
      "The shipping platform requests an AWB from the courier API and maps it to order records for downstream tracking.",
    relatedTopics: ["courier-api-integration", "ecommerce-shipping-workflow", "shipping-api-india"],
  },
  {
    title: "Shipping API India",
    slug: "shipping-api-india",
    shortDefinition:
      "Shipping API India refers to integration interfaces from domestic courier networks.",
    description:
      "Shipping APIs in India allow platforms to automate shipping operations across multiple domestic carriers and simplify logistics at scale.",
    whyItMatters:
      "APIs are the backbone of scalable ecommerce and aggregator operations.",
    howItWorks:
      "Platforms authenticate with carriers, push shipment payloads, and consume tracking/status events to power unified dashboards.",
    relatedTopics: ["courier-api-integration", "multi-courier-shipping", "awb-generation"],
  },
  {
    title: "Logistics Control Tower",
    slug: "logistics-control-tower",
    shortDefinition:
      "A logistics control tower is a centralized visibility and decision system.",
    description:
      "It consolidates shipping data, exception trends, courier performance, and SLA dashboards so teams can act quickly and improve outcomes.",
    whyItMatters:
      "Centralized control improves decision quality and operational consistency.",
    howItWorks:
      "Data from orders, couriers, and customer touchpoints is unified into dashboards with alerts and action workflows.",
    relatedTopics: ["shipping-aggregator-platform-meaning", "delivery-attempt-failure", "last-mile-delivery-optimization"],
  },
  {
    title: "Reverse Logistics",
    slug: "reverse-logistics",
    shortDefinition:
      "Reverse logistics is the process of moving returned shipments back to origin.",
    description:
      "It includes return pickup, transit, inspection, and refund/replace workflows. High reverse logistics volume can hurt unit economics if unmanaged.",
    whyItMatters:
      "Efficient reverse logistics reduces losses and improves customer confidence.",
    howItWorks:
      "Returns are initiated, courier pickups are scheduled, and status is tracked until inventory reconciliation.",
    relatedTopics: ["rto-in-ecommerce-shipping", "ndr-in-logistics", "ecommerce-shipping-workflow"],
  },
  {
    title: "Delivery SLA",
    slug: "delivery-sla",
    shortDefinition:
      "Delivery SLA is the promised timeframe for successful shipment delivery.",
    description:
      "SLA monitoring helps identify delays and optimize courier selection. Consistent SLA performance drives customer trust and retention.",
    whyItMatters:
      "Broken SLAs increase support load, cancellations, and brand damage.",
    howItWorks:
      "Expected timelines are set by route and service type, then compared against actual delivery events.",
    relatedTopics: ["last-mile-delivery-optimization", "courier-rate-comparison", "logistics-control-tower"],
  },
  {
    title: "First Attempt Delivery Rate",
    slug: "first-attempt-delivery-rate",
    shortDefinition:
      "First attempt delivery rate measures shipments delivered in the first try.",
    description:
      "This KPI reflects delivery quality, communication readiness, and address accuracy. Higher first-attempt rate generally lowers cost-to-serve.",
    whyItMatters:
      "Improving first-attempt success reduces NDR volume and RTO risk.",
    howItWorks:
      "Delivered-on-first-attempt shipments are divided by total delivery attempts for a defined period.",
    relatedTopics: ["ndr-in-logistics", "delivery-attempt-failure", "cod-order-confirmation"],
  },
  {
    title: "Hyperlocal Delivery",
    slug: "hyperlocal-delivery",
    shortDefinition:
      "Hyperlocal delivery is short-distance fulfillment within a city or local zone.",
    description:
      "It is useful for same-day or quick commerce shipments where speed and local route intelligence are critical.",
    whyItMatters:
      "Hyperlocal performance can drive better customer satisfaction in dense urban markets.",
    howItWorks:
      "Orders are routed to local fleets or partners optimized for short-distance, time-sensitive delivery windows.",
    relatedTopics: ["last-mile-delivery-optimization", "delivery-sla", "pincode-serviceability"],
  },
  {
    title: "Branded Tracking Page",
    slug: "branded-tracking-page",
    shortDefinition:
      "A branded tracking page lets customers track orders on a seller-branded interface.",
    description:
      "Instead of generic courier pages, brands can provide consistent communication and upsell opportunities during shipment tracking.",
    whyItMatters:
      "It builds trust, reduces support tickets, and improves retention.",
    howItWorks:
      "Tracking events are pulled from carriers and displayed on a custom-branded URL with delivery status and notifications.",
    relatedTopics: ["ecommerce-shipping-workflow", "logistics-control-tower", "delivery-sla"],
  },
  {
    title: "Courier Franchise Operations",
    slug: "courier-franchise-operations",
    shortDefinition:
      "Courier franchise operations cover local shipping business execution.",
    description:
      "Franchise operators manage pickups, bookings, customer support, and partner coordination while leveraging a central logistics platform.",
    whyItMatters:
      "Operational standardization is essential for scalable franchise growth and service quality.",
    howItWorks:
      "A central platform defines SOPs, tracks KPIs, and enables local teams to execute with visibility and control.",
    relatedTopics: ["shipping-aggregator-platform-meaning", "logistics-control-tower", "delivery-sla"],
  },
  {
    title: "Ecommerce Fulfillment",
    slug: "ecommerce-fulfillment",
    shortDefinition:
      "Ecommerce fulfillment includes order processing, packing, dispatch, and delivery.",
    description:
      "Strong fulfillment operations ensure accurate order handling, timely shipping, and consistent post-dispatch visibility.",
    whyItMatters:
      "Fulfillment quality directly impacts delivery success, customer satisfaction, and repeat business.",
    howItWorks:
      "Orders are processed in a structured flow from warehouse operations to courier handoff and final delivery.",
    relatedTopics: ["ecommerce-shipping-workflow", "awb-generation", "delivery-sla"],
  },
  {
    title: "Shipment Tracking API",
    slug: "shipment-tracking-api",
    shortDefinition:
      "A shipment tracking API provides real-time status updates for orders.",
    description:
      "Tracking APIs help platforms keep customers and support teams updated on shipment movement, exceptions, and delivery completion.",
    whyItMatters:
      "Real-time visibility reduces customer anxiety and support escalations.",
    howItWorks:
      "Courier systems send status events via webhooks or API calls which are normalized and displayed in dashboards and tracking pages.",
    relatedTopics: ["courier-api-integration", "branded-tracking-page", "logistics-control-tower"],
  },
  {
    title: "Delivery Optimization Analytics",
    slug: "delivery-optimization-analytics",
    shortDefinition:
      "Delivery optimization analytics uses data to improve shipping outcomes.",
    description:
      "By analyzing cost, SLA, NDR patterns, and courier performance, teams can continuously refine shipping strategy and reduce exceptions.",
    whyItMatters:
      "Analytics transforms logistics from reactive operations to proactive optimization.",
    howItWorks:
      "Data pipelines aggregate delivery metrics, identify risk patterns, and trigger actions for operations teams.",
    relatedTopics: ["logistics-control-tower", "first-attempt-delivery-rate", "courier-rate-comparison"],
  },
  {
    title: "Courier Reattempt Workflow",
    slug: "courier-reattempt-workflow",
    shortDefinition:
      "Courier reattempt workflow manages second or third delivery attempts after failure.",
    description:
      "A structured reattempt process recovers failed deliveries by updating customer availability, address details, and preferred time windows.",
    whyItMatters:
      "It improves successful delivery ratio and reduces return rates.",
    howItWorks:
      "After NDR creation, customers are contacted for updated instructions and delivery is re-scheduled with adjusted execution parameters.",
    relatedTopics: ["ndr-in-logistics", "delivery-attempt-failure", "first-attempt-delivery-rate"],
  },
];

export function getAllEncyclopediaTopics() {
  return encyclopediaTopics;
}

export function getEncyclopediaTopicBySlug(slug) {
  return encyclopediaTopics.find((topic) => topic.slug === slug);
}

export function getRelatedEncyclopediaTopics(slugs = []) {
  return slugs
    .map((slug) => getEncyclopediaTopicBySlug(slug))
    .filter(Boolean);
}

export function getEncyclopediaReadingTime(topic) {
  const words = `${topic.shortDefinition} ${topic.description} ${topic.whyItMatters} ${topic.howItWorks}`
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}
