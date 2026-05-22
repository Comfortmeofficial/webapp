const insightImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
];

export const INSIGHT_ARTICLES = Array.from({ length: 12 }).map((_, index) => {
  const categories = ["Corporate Law", "Finance", "Litigation", "Property Law"];
  const slug = `understanding-corporate-governance-${index + 1}`;
  return {
    id: index + 1,
    slug,
    title:
      "Understanding Corporate Governance in Nigeria: Key Principles for Businesses",
    category: categories[index % categories.length],
    date: "March 12, 2026",
    author: "BSY Legal Editorial Team",
    image: insightImages[index % insightImages.length],
    excerpt:
      "Strong corporate governance is essential for sustainable growth and investor confidence. This article explores the key principles every business should understand.",
    body: [
      "Corporate governance defines the systems, principles, and processes through which organizations are directed and controlled. In the Nigerian business environment, strong governance structures are increasingly critical for investor confidence and long-term resilience.",
      "A robust governance framework clarifies accountability at board and management levels, establishes transparent reporting standards, and helps organizations navigate regulatory complexity. Companies that prioritize governance are typically better positioned to scale sustainably.",
      "For growing businesses, governance should be viewed as a strategic lever rather than a compliance burden. Establishing clear oversight, risk controls, and decision-making protocols early can significantly reduce legal and operational exposure over time.",
    ],
  };
});
