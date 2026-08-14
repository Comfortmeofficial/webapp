import { connectToDatabase } from "../src/lib/db";
import { LegalPage } from "../src/lib/models";

const PAGES = [
  {
    slug: "terms" as const,
    title: "Terms Of Service",
    contentMarkdown: [
      "These Terms of Service govern your access to and use of BSY Legal services. By using our website, you agree to these terms.",
      "**Use Responsibilities:** You agree to use our platform lawfully and not for prohibited purposes.",
      "**Intellectual Property:** All content, branding, and information on this website belong to BSY Legal.",
      "**Disclaimer:** Information provided does not constitute legal advice.",
      "**Changes to Terms:** We may update these terms periodically.",
    ].join("\n\n"),
  },
  {
    slug: "privacy" as const,
    title: "Privacy Policy",
    contentMarkdown: [
      "At BSY Legal, your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.",
      "**Information We Collect:** We may collect personal details such as name, email, and phone number when you contact us.",
      "**How We Use Information:** We use collected information to respond to inquiries and improve our services.",
      "**Data Protection:** We implement reasonable safeguards to protect your information.",
      "**Contact:** For privacy-related concerns, please contact [reachbsylegal@gmail.com](mailto:reachbsylegal@gmail.com).",
    ].join("\n\n"),
  },
];

async function main() {
  await connectToDatabase();

  for (const page of PAGES) {
    const existing = await LegalPage.findOne({ slug: page.slug });
    if (existing) {
      console.log(`Skipping "${page.slug}" — already exists.`);
      continue;
    }
    await LegalPage.create(page);
    console.log(`Created "${page.slug}".`);
  }

  console.log("Done seeding legal pages.");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
