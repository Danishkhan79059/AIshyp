const blogTopics = [
  {
    title: "How to Reduce RTO in Ecommerce (India Guide)",
    slug: "reduce-rto-ecommerce-india",
    keyword: "reduce RTO ecommerce",
    intent: "problem-solving",
    description:
      "Learn how to reduce return-to-origin orders in ecommerce with practical strategies for Indian businesses.",
  },
  {
    title: "Top 7 Reasons for Delivery Failure in India",
    slug: "delivery-failure-reasons-india",
    keyword: "delivery failure reasons India",
    intent: "problem-solving",
    description:
      "Understand the most common reasons why courier deliveries fail in India and how to fix them.",
  },
  {
    title: "Best Shipping Aggregator Platforms in India (2026)",
    slug: "best-shipping-aggregator-india",
    keyword: "shipping aggregator India",
    intent: "comparison",
    description:
      "Compare the top shipping aggregator platforms in India and choose the best one for your business.",
  },
  {
    title: "How Shipping Aggregators Work in Ecommerce",
    slug: "how-shipping-aggregators-work",
    keyword: "shipping aggregator platform",
    intent: "educational",
    description:
      "A complete guide to how shipping aggregator platforms work in ecommerce logistics.",
  },
  {
    title: "How to Start a Courier Franchise Business in India",
    slug: "courier-franchise-business-india",
    keyword: "courier franchise India",
    intent: "transactional",
    description:
      "Step-by-step guide to starting a courier franchise business in India with low investment.",
  },
  {
    title: "Best Logistics Franchise Opportunities in India",
    slug: "logistics-franchise-opportunities-india",
    keyword: "logistics franchise India",
    intent: "transactional",
    description:
      "Explore the best logistics and courier franchise opportunities in India for entrepreneurs.",
  },
  {
    title: "What is NDR in Courier & How to Fix It",
    slug: "ndr-in-courier-explained",
    keyword: "NDR meaning courier",
    intent: "educational",
    description:
      "Understand what NDR (Non-Delivery Report) means in courier services and how to resolve it.",
  },
  {
    title: "NDR Automation for Ecommerce Explained",
    slug: "ndr-automation-ecommerce",
    keyword: "NDR automation",
    intent: "educational",
    description:
      "Learn how NDR automation helps ecommerce businesses reduce delivery failures.",
  },
  {
    title: "Top Ecommerce Shipping Problems in India & Solutions",
    slug: "ecommerce-shipping-problems-india",
    keyword: "ecommerce shipping problems",
    intent: "problem-solving",
    description:
      "Discover common ecommerce shipping issues in India and how to solve them efficiently.",
  },
  {
    title: "How to Speed Up Delivery in Ecommerce",
    slug: "speed-up-delivery-ecommerce",
    keyword: "fast delivery ecommerce",
    intent: "problem-solving",
    description:
      "Learn strategies to improve delivery speed and customer satisfaction in ecommerce.",
  },
  {
    title: "Complete Guide to Courier API Integration",
    slug: "courier-api-integration-guide",
    keyword: "courier API India",
    intent: "educational",
    description:
      "A complete technical and business guide to integrating courier APIs in your platform.",
  },
  {
    title: "Best Shipping APIs in India for Developers",
    slug: "best-shipping-api-india",
    keyword: "shipping API India",
    intent: "comparison",
    description:
      "Compare the best shipping APIs in India for developers and logistics platforms.",
  },
  {
    title: "What is a Franchise-Driven Shipping Aggregator Platform?",
    slug: "franchise-driven-shipping-aggregator-platform",
    keyword: "franchise shipping aggregator",
    intent: "educational",
    description:
      "Understand how franchise-driven shipping aggregator platforms work and why they are growing in India.",
  },
  {
    title: "How Franchise Model is Transforming Logistics in India",
    slug: "franchise-model-logistics-india",
    keyword: "logistics franchise model India",
    intent: "educational",
    description:
      "Explore how franchise-based logistics models are reshaping last-mile delivery in India.",
  },
  {
    title: "How to Build a Logistics Network Using Franchise Model",
    slug: "build-logistics-network-franchise",
    keyword: "logistics network franchise",
    intent: "educational",
    description:
      "Learn how businesses can scale delivery operations using a franchise-driven logistics network.",
  },
  {
    title: "Shipping Aggregator vs Direct Courier: Which is Better?",
    slug: "shipping-aggregator-vs-courier",
    keyword: "shipping aggregator vs courier",
    intent: "comparison",
    description:
      "Compare shipping aggregators and direct courier services to choose the best option for your business.",
  },
  {
    title: "How Franchise-Based Delivery Reduces Logistics Costs",
    slug: "reduce-logistics-cost-franchise-model",
    keyword: "reduce logistics cost ecommerce",
    intent: "problem-solving",
    description:
      "Discover how franchise-driven delivery models can significantly reduce logistics costs.",
  },
  {
    title: "Last Mile Delivery Challenges in India & Solutions",
    slug: "last-mile-delivery-challenges-india",
    keyword: "last mile delivery India",
    intent: "problem-solving",
    description:
      "Understand the biggest last-mile delivery challenges in India and how to solve them.",
  },
  {
    title: "How to Scale Ecommerce Logistics Using Aggregator Platforms",
    slug: "scale-ecommerce-logistics",
    keyword: "scale ecommerce logistics",
    intent: "transactional",
    description:
      "Learn how to scale your ecommerce logistics operations using aggregator platforms.",
  },
  {
    title: "Benefits of Multi-Courier Integration for Ecommerce",
    slug: "multi-courier-integration-benefits",
    keyword: "multi courier integration",
    intent: "educational",
    description:
      "Explore the advantages of integrating multiple courier partners in one platform.",
  },
  {
    title: "Hyperlocal Delivery Model Explained for Startups",
    slug: "hyperlocal-delivery-model",
    keyword: "hyperlocal delivery India",
    intent: "educational",
    description:
      "A beginner-friendly guide to hyperlocal delivery models for startups in India.",
  },
  {
    title: "How to Manage Delivery Partners in a Franchise Network",
    slug: "manage-delivery-partners-franchise",
    keyword: "delivery partner management",
    intent: "problem-solving",
    description:
      "Best practices to manage and scale delivery partners in a franchise logistics network.",
  },
  {
    title: "Top Logistics Technology Trends in India (2026)",
    slug: "logistics-trends-india-2026",
    keyword: "logistics trends India",
    intent: "informational",
    description:
      "Explore the latest technology trends shaping the logistics and shipping industry in India.",
  },
  {
    title: "How to Optimize Last Mile Delivery for Faster Shipping",
    slug: "optimize-last-mile-delivery",
    keyword: "optimize last mile delivery",
    intent: "problem-solving",
    description:
      "Learn strategies to improve last-mile delivery speed and efficiency.",
  },
  {
    title: "Courier Franchise vs Delivery Partner Model: Key Differences",
    slug: "courier-franchise-vs-delivery-partner",
    keyword: "courier franchise vs delivery partner",
    intent: "comparison",
    description:
      "Understand the difference between courier franchise and delivery partner models.",
  },
  {
    title: "How Technology is Improving Courier Delivery in India",
    slug: "technology-in-courier-delivery",
    keyword: "courier technology India",
    intent: "educational",
    description:
      "Discover how modern technology is improving courier and logistics services in India.",
  },
  {
    title: "Why Ecommerce Businesses Need a Shipping Aggregator",
    slug: "why-use-shipping-aggregator",
    keyword: "why shipping aggregator",
    intent: "transactional",
    description:
      "Understand why ecommerce businesses rely on shipping aggregators for logistics efficiency.",
  }
];

const TOPIC_IMAGE_MAP = {
  // Existing Topics
  "reduce-rto-ecommerce-india": "/ndrr.png",
  "delivery-failure-reasons-india": "/failurereason.png",
  "best-shipping-aggregator-india": "/partner.png",
  "how-shipping-aggregators-work": "/dashboardai.png",
  "courier-franchise-business-india": "/image.png",
  "logistics-franchise-opportunities-india": "/AIShip.png",
  "ndr-in-courier-explained": "/ndr.png",
  "ndr-automation-ecommerce": "/whatss.png",
  "ecommerce-shipping-problems-india": "/support.png",
  "speed-up-delivery-ecommerce": "/remittance.png",
  "courier-api-integration-guide": "/shopify.jpeg",
  "best-shipping-api-india": "/analyticss.png",
  // 🔥 New Added Topics
  "franchise-driven-shipping-aggregator-platform": "/franchise-model.png",
  "franchise-model-logistics-india": "/logistics-network.png",
  "build-logistics-network-franchise": "/network-build.png",
  "shipping-aggregator-vs-courier": "/comparison.png",
  "reduce-logistics-cost-franchise-model": "/cost-optimization.png",
  "last-mile-delivery-challenges-india": "/lastmile.png",
  "scale-ecommerce-logistics": "/scaling.png",
  "multi-courier-integration-benefits": "/multi-courier.png",
  "hyperlocal-delivery-model": "/hyperlocal.png",
  "manage-delivery-partners-franchise": "/delivery-partner.png",
  "logistics-trends-india-2026": "/trends.png",
  "optimize-last-mile-delivery": "/optimize.png",
  "courier-franchise-vs-delivery-partner": "/vs.png",
  "technology-in-courier-delivery": "/technology.png",
  "why-use-shipping-aggregator": "/why-aggregator.png",
};

const FALLBACK_BLOG_IMAGE = "/AIShip.png";

function getIntentSection(intent, keyword) {
  if (intent === "comparison") {
    return {
      heading: "How to evaluate options",
      bullets: [
        `Measure fit against your ${keyword} requirements, not only headline pricing.`,
        "Check pincode coverage, NDR handling workflows, and support responsiveness.",
        "Prioritize platforms with clear analytics and predictable operational control.",
      ],
    };
  }

  if (intent === "transactional") {
    return {
      heading: "Execution roadmap",
      bullets: [
        "Validate city-level demand and serviceability before expansion.",
        "Start with a lean operating setup and standardized SOPs.",
        "Scale through automation, partner onboarding playbooks, and clear unit economics.",
      ],
    };
  }

  if (intent === "problem-solving") {
    return {
      heading: "Practical fixes to implement",
      bullets: [
        "Audit failure points weekly and classify issues by root cause.",
        "Use proactive customer communication before and after dispatch.",
        "Optimize courier selection by lane performance, not assumptions.",
      ],
    };
  }

  return {
    heading: "Core concepts to understand",
    bullets: [
      "Define your workflow from order creation to final delivery.",
      "Track SLAs and exception states in a single dashboard.",
      "Use structured automation to reduce manual bottlenecks at scale.",
    ],
  };
}

function makeBlog(topic, index) {
  const intentSection = getIntentSection(topic.intent, topic.keyword);
  const month = String(4 - Math.floor(index / 4)).padStart(2, "0");
  const day = String(24 - index).padStart(2, "0");

  return {
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    author: "AIShyp Editorial Team",
    publishedDate: `2026-${month}-${day}`,
    featuredImage: TOPIC_IMAGE_MAP[topic.slug] ?? FALLBACK_BLOG_IMAGE,
    tags: [
      topic.keyword,
      topic.intent,
      "Franchise-Driven Shipping Aggregator Platform",
    ],
    content: [
      {
        type: "paragraph",
        value:
          `${topic.title} is a critical topic for logistics operators in India. ` +
          `This guide focuses on practical and scalable actions around ${topic.keyword}.`,
      },
      {
        type: "heading",
        value: intentSection.heading,
      },
      {
        type: "list",
        items: intentSection.bullets,
      },
      {
        type: "heading",
        value: "How AIShyp supports execution",
      },
      {
        type: "paragraph",
        value:
          "AIShyp helps teams reduce operational friction through centralized tracking, courier intelligence, and workflow automation built for franchise-led growth.",
      },
      {
        type: "paragraph",
        value: "To apply these ideas in your operations, review our ",
        link: { label: "shipping features", href: "/features" },
        trailing:
          " and then align your plan with the right commercial model on our pricing page.",
      },
      {
        type: "paragraph",
        value: "Need implementation support? Connect with our ",
        link: { label: "logistics specialists", href: "/contact" },
        trailing:
          " to design a rollout plan based on your city coverage and shipment profile.",
      },
    ],
  };
}

const BLOGS = blogTopics.map(makeBlog);

function calculateReadingTime(content) {
  const wordsPerMinute = 220;
  const text = content
    .map((item) => {
      if (item.type === "list") return item.items.join(" ");
      return `${item.value ?? ""} ${item.trailing ?? ""}`;
    })
    .join(" ");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

export function getAllBlogs() {
  return BLOGS
    .map((blog) => ({
      ...blog,
      readingTime: calculateReadingTime(blog.content),
    }))
    .sort(
      (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
    );
}

export function getBlogBySlug(slug) {
  return getAllBlogs().find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(slug, limit = 2) {
  const allBlogs = getAllBlogs();
  const current = allBlogs.find((blog) => blog.slug === slug);
  if (!current) return allBlogs.slice(0, limit);

  const currentTags = new Set(current.tags);
  return allBlogs
    .filter((blog) => blog.slug !== slug)
    .map((blog) => {
      const sharedTags = blog.tags.filter((tag) => currentTags.has(tag)).length;
      return { blog, sharedTags };
    })
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, limit)
    .map((item) => item.blog);
}
