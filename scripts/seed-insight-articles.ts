import path from "node:path";
import { connectToDatabase } from "../src/lib/db";
import { AdminUser, Article, Category } from "../src/lib/models";
import cloudinary from "../src/lib/cloudinary";

const ARTICLES = [
  {
    slug: "estate-planning-why-you-need-an-estate-plan",
    title: "Estate Planning: Why You Need An Estate Plan",
    excerpt:
      "Common myths about estate planning, debunked — and why building a plan matters at any age or income level.",
    imageFile: "1ff4b840061fcde1e98f3337e937eb4dcdeb8ff3.jpg",
    publishedAt: "2026-05-15",
    body: [
      "Estate planning is the process of arranging for the management and distribution of wealth through a meticulous but seamless process of coordinating all of the settlor's properties in a more organized form for proper management, preservation and distribution to the beneficiaries after death. At its core, estate planning rests on three pillars: management, preservation, and distribution.",
      "Myth 1: Estate Planning Is Complicated and Expensive. Estate planning can be tailored to your family dynamics, assets, and unique needs. Think of it as an investment in your legacy — one that provides clarity, minimizes stress, and protects your loved ones for generations to come.",
      "Myth 2: I'm Too Young to Need an Estate Plan. Tragedy doesn't discriminate by age. A LegalZoom study found that only 18% of millennials have an estate plan, despite being significantly affected by unexpected tragedies. Feeling invincible is common but risky — having a plan is essential if you care about those you love.",
      "Myth 3: I Don't Need a Lawyer for Estate Planning. While DIY tools may seem convenient, they often miss complex situations like blended families, tax implications, or special provisions for dependents. A qualified lawyer ensures your estate plan is legally binding and tailored to your unique circumstances.",
      "Don't wait to protect what matters most. Estate planning gives you peace of mind knowing your loved ones will be cared for according to your wishes. Start your journey toward a secure future today with BSY Legal — your trusted partner in comprehensive estate planning.",
    ],
  },
  {
    slug: "rockefeller-trust-vis-a-vis-life-insurance-policy",
    title:
      "An Analysis of the Rockefeller Trust Vis-à-Vis Life Insurance Policy",
    excerpt:
      "How the Rockefeller family used trust structures and a continuous cycle of life insurance to preserve and grow a fortune across seven generations without disputes or dissipation.",
    imageFile: "74a56955248d3ce0a13277dd7d246e05859ffd6b.jpg",
    publishedAt: "2026-06-01",
    body: [
      "Imagine possessing such immense wealth that even after seven generations, your family continues not only to preserve it but to expand it. More remarkably, imagine that throughout those generations, no significant family feud or litigation arises over the distribution of that wealth. At first glance, this may seem like a mere fairytale. However, this has been the lived reality of the Rockefeller family.",
      "The Rockefeller Trust represents one of the most notable examples of effective generational wealth preservation. It encompasses a vast and diversified portfolio of assets, including equities, real estate, energy ventures, technology investments, private holdings, and philanthropic foundations. Through a deliberate strategy of placing and managing these resources within well-structured trusts, the Rockefeller family has successfully safeguarded its wealth while adapting to economic shifts, market fluctuations, and changing global conditions.",
      "According to Forbes, the Rockefeller family has sustained its fortune across seven generations and, as of 2024, maintains an estimated net worth of about $10.3 billion. This remarkable achievement makes the Rockefeller Trust a compelling model for understanding how trust structures can facilitate the preservation and orderly transfer of wealth across generations. Against this backdrop, this article examines the generational wealth strategy employed by the Rockefeller family and the concept of life insurance policy.",
      "THE ROCKEFELLER TRUST STRATEGY",
      "The enduring wealth of the Rockefeller family is largely attributable to a deliberate and well-structured trust strategy designed to preserve and transmit wealth across multiple generations. Following the breakup of Standard Oil in 1911 due to antitrust regulations, the Rockefeller fortune was transformed from a single family-controlled enterprise into diversified holdings in publicly traded companies. This restructuring, combined with carefully drafted trusts — particularly generation-skipping trusts — enabled the family to distribute wealth to successive generations while minimizing disputes and fragmentation of assets.",
      "Rather than maintaining a centralized family business that could become a source of conflict, the family relied on trust arrangements to hold and manage assets for the benefit of descendants. These trusts ensured professional management of wealth, facilitated orderly succession, and provided financial benefits to family members without transferring unrestricted control of the underlying assets. Consequently, the Rockefeller model demonstrates how well-designed trust structures can serve as an effective mechanism for preserving family wealth, promoting financial discipline among heirs, and preventing the rapid dissipation of fortunes commonly observed within three generations.",
      "The Rockefeller family also maintained a strong system of values and traditions passed on from one generation to another, including:",
      "1. Family Constitution — The constitution provides future generations with guidance on managing and preserving their wealth. It also codifies the values and traditions that the family lives by.",
      "2. Regular Family Meetings — This is a forum for family members from the age of 21. At the forum, the family discusses its direction, projects, new members, and any other family news related to careers or important milestones.",
      "3. Maintaining Family History — The family preserves its history by having young members of the Rockefeller lineage gather at the homestead of their great-grandfather, even after 100 years. It helps them see the kind of life he lived and be inspired.",
      "4. Charity — Family members are encouraged to be involved in the foundations and help choose the causes they support. By making giving the center of the family's identity, the Rockefellers have maintained the core values of John D. Rockefeller Jr., which is: \"For every right implies a responsibility; every opportunity, an obligation; every possession, a duty.\"",
      "Apart from the above strategies, the Rockefellers also used life insurance policy as a tool for replenishing their estate across many generations. This is discussed below.",
      "LIFE INSURANCE POLICY: THE WATERFALL METHOD",
      "A life insurance policy is a financial agreement between an individual and an insurance company where the individual pays regular premiums, and in return, the insurer pays a predetermined sum of money (called the death benefit) to designated beneficiaries upon the insured person's death. The core purpose of life insurance is to provide financial protection and liquidity for dependents or beneficiaries after the policyholder's death.",
      "In the context of the Rockefeller family, life insurance played a critical role in strengthening the structure of the Rockefeller Trust. Instead of simply passing down wealth through inheritance, the family used life insurance policies owned by the trust to create a continuous inflow of capital. When a family member covered by the policy passed away, the insurance company paid a tax-advantaged death benefit to the trust.",
      "This approach produced what is often described as a \"waterfall effect.\" Each death benefit injected new funds into the trust, which could then be reinvested, lent to family members under controlled terms, or used to acquire additional life insurance policies on younger generations. As a result, the trust was continuously replenished with fresh capital rather than gradually depleted.",
      "The impact on the Rockefeller wealth structure was significant in several ways:",
      "1. Liquidity for the Trust — Insurance payouts ensured that the trust always had cash available without selling core family assets.",
      "2. Tax Efficiency — Life insurance death benefits were generally received tax-advantaged, preserving more wealth within the trust.",
      "3. Wealth Continuity — The repeated cycle of premiums and death benefits created a self-sustaining financial system that could support multiple generations.",
      "4. Asset Protection — Because the policies were owned by the trust rather than individuals, the funds were better protected from creditors, lawsuits, and irresponsible spending.",
      "5. Family Bank System.",
      "In essence, life insurance served as a financial engine for the Rockefeller trust — regularly replenishing its capital and enabling it to maintain and grow wealth across generations rather than allowing it to diminish through inheritance distributions.",
    ],
  },
  {
    slug: "will-vs-deed-of-gift-vs-trust-settlement",
    title:
      "A Comparison Between Will and Deed of Gift: Whether a Trust Settlement Can Be a Balance or Safe Haven for Property Owners",
    excerpt:
      "A comparative look at Wills, Deeds of Gift, and Trust settlements under Nigerian law — and whether a Trust can truly be a safe haven for property owners.",
    imageFile: "b3b4683f14b634ec444c0da8c26c115c008b2283.jpg",
    publishedAt: "2026-06-20",
    body: [
      "It is a common phenomenon in society for families to become embroiled in prolonged disagreements and legal disputes over the estate of a deceased person. Such disputes are not limited to ordinary households; they have also arisen in high-profile estates, including those of the late Festus Okotie-Eboh, the late Rotimi Williams, and the late Herbert Wigwe. These recurring conflicts often stem from inadequate estate planning, particularly the absence of a valid will or a properly constituted Trust. Even where a Will or Trust exists, dissatisfaction with its provisions may still generate tension among beneficiaries; the likelihood of conflict is significantly greater where no structured estate plan is in place.",
      "This article undertakes a comparative analysis of three estate planning tools — Wills, Deeds of Gift, and Trust settlements — highlights their distinctions, and argues whether a Trust settlement can be a balance or safe haven for property owners.",
      "The Meaning and Objectives of Estate Planning",
      "Estate planning is the process through which an individual determines how their assets will be distributed to beneficiaries upon their death. It also involves arranging for the proper administration and settlement of a person's affairs after death. Its main objectives include minimizing estate taxes payable to the government, ensuring that sufficient funds are readily available to cover funeral expenses and other post-death obligations, and guaranteeing that assets are distributed in accordance with the individual's wishes.",
      "Legal Framework on Estate Planning in Nigeria",
      "Estate planning in Nigeria is governed by a combination of statutes, customary law, and Islamic law. The applicable legal framework depends largely on whether the deceased made a formal estate plan. In the absence of such a plan, the individual's estate may be distributed according to the statutory rules on intestate succession under the Administration of Estates Law, or in accordance with customary or Islamic law, depending on the relevant circumstances. Relevant legal frameworks include the Wills Act 1837, the Wills Law of various states, the Administration of Estate Law of various states, customary and Islamic law, the Trustees Act 1893, the Investment and Securities Act, and the Nigeria Tax Act 2025.",
      "Comparative Analysis of Will, Deed of Gift, and Trust",
      "A Will, as one of the tools of estate planning, refers to the legal document that conforms to the laws of the state where it is executed, whereby an individual makes known his desires for the disposition of his property at death. A Will is the most disputed of all the estate planning options, simply because of its testamentary nature — it takes effect only after the death of the maker. This is also a major clog, as a Will can be invalidated where it is established that there is non-compliance with the statutory provisions governing its making, content, execution, location, or administration.",
      "There are two major factors that can invalidate a Will: incapacity of the testator at the time of making the Will (inferred from mental health, delusion, undue influence, or other suspicious circumstances), and lack of due execution. Wills are frequently contested on these grounds by dissatisfied beneficiaries or excluded dependants, and can sometimes be altered either by the testator during his lifetime or by the court, where the dependants of the deceased have not been provided reasonable financial support under the Wills Law of States.",
      "Although a Will reflects testamentary freedom, this freedom is not absolute. It is subject to customary law restrictions — for example, under Benin custom, the 'Igiogbe' (the principal house where a deceased man lived, died, and was usually buried) is by custom inherited by the eldest surviving son — and Islamic law restrictions, which limit testamentary disposition to one-third of the estate for non-heirs, with the remaining two-thirds distributed according to Islamic inheritance rules.",
      "A gift inter vivos is the voluntary transfer of property by a donor (the owner) to another person, the donee (the receiver), during the donor's lifetime, with the clear intention that the legal interest in property will not revert to the donor, and with the corresponding intention of the donee to accept and retain it absolutely. A crucial element of a valid gift inter vivos is acceptance by the donee — once validly accepted and completed, the donor loses the right to revoke it. As a general rule, gifts are irrevocable except where fraud, mistake, misrepresentation, or a total failure of purpose can be proved, and making a gift without a properly signed Deed of Gift will amount to invalidity of the transfer.",
      "A Deed of Gift provides the legal foundation for a valid gift inter vivos and safeguards the donee's interest in the event of litigation. In Omoregie & Ors v. Bienose, the court held that for a gift to constitute a valid gift inter vivos, one must either produce and tender a deed of gift, if the grant was under English law, or call the grantor, successor in title, or a witness of the transaction to testify at trial, if under customary law.",
      "Distinction Between a Will and a Gift Inter Vivos",
      "A Will is testamentary in nature and takes effect only after the death of the testator, whereas a gift inter vivos takes effect immediately, during the lifetime of the grantor. Under a Will, the beneficiary does not take possession until after the testator's death, while a donee takes immediate possession upon execution of the Deed of Gift. A testator retains legal title even after executing the Will, whereas a donor is divested of legal title immediately upon execution of a Deed of Gift.",
      "Probate and estate tax are mandatory for a Will, but probate does not apply to a gift inter vivos. A Will can dispose of properties acquired before or after its date, while a Deed of Gift can only transfer properties owned by the grantor at the time of execution. A Will also allows for management of properties in favour of beneficiaries through the creation of a trust within the Will itself, whereas a Deed of Gift does not allow for any management of the property in favour of the donee.",
      "These distinctions demonstrate that while one instrument may be suitable in a particular circumstance, it may be inappropriate in another. Where an individual is deeply attached to his property or naturally cautious about relinquishing control, a Deed of Gift in favour of a child may be imprudent, since it immediately strips the owner of legal ownership and control. In such circumstances, a Will is often more suitable, since its testamentary nature allows the testator to retain full legal control throughout their lifetime, with transfer of ownership only taking effect upon death. However, neither a Will nor a gift inter vivos fully offers a balanced combination of control, flexibility, and security — a gap that the concept of a Trust seeks to address.",
      "Trust Settlement: Can It Be a Balance or Safe Haven for Property Owners?",
      "A Trust is an arrangement where one person holds legal title to property for the benefit of another. It is also defined as a legal arrangement through which a person (the Settlor) transfers property to another person or entity (the Trustee) to hold and manage for the benefit of designated persons (the Beneficiaries). Legal ownership rests with the Trustee, while the beneficial interest belongs to the Beneficiaries. For a Trust to be valid, it must meet the three certainties of intention, subject matter, and object.",
      "Trusts in Nigeria are broadly classified into Private Trusts, Corporate Trusts, and Public Trusts. A Private Trust is the most commonly used instrument in estate planning — a fiduciary arrangement in which an individual (the settlor) transfers property, whether tangible or intangible, to a trustee, who is entrusted with managing and administering that property for the benefit of specified beneficiaries in accordance with the terms outlined in a trust deed. A Private Trust may be established during the lifetime of the settlor (an inter vivos trust) or may take effect upon the settlor's death when created under a will (a testamentary trust).",
      "Some quick distinctive characteristics: a Trust ensures continuous management of property by trustees both during the settlor's lifetime and after death, whereas a Will and a Deed of Gift do not provide for ongoing management. The settlor transfers legal ownership to the trustee while retaining a degree of control, whereas a testator under a Will keeps full ownership until death, and a donor under a Deed of Gift relinquishes ownership immediately. A Trust begins to operate during the settlor's lifetime and continues after death, whereas a Will only operates after the testator's death, and a Deed of Gift completes the transfer at the time of execution. Beneficiaries of a Trust can enjoy their beneficial interest both during and after the settlor's lifetime, whereas beneficiaries under a Will obtain their legal interest only upon the testator's death.",
      "These distinctions highlight the strengths of a Trust settlement compared with a Will or a Deed of Gift. A Trust settlement may therefore be regarded as a balanced estate planning tool for property owners who desire to retain control over their assets during their lifetime, secure protection in the event of incapacity, and ensure continued management of their properties after death.",
      "Having established that a Trust settlement offers control, protection, and continuity, the further issue is whether it can be considered a true 'safe haven' — a permanent and universally suitable option for all property owners. While a Trust settlement can provide balance, it may not always automatically constitute a safe haven for every property owner. Estate planning ultimately depends on the intentions, objectives, and personal circumstances of each property owner. For instance, a property owner who intends to transfer ownership outrightly and irrevocably to a beneficiary during his lifetime may find a Deed of Gift more suitable than either a Will or a Trust settlement. For that property owner, the safe haven will not be a Trust settlement or a Will, but a Deed of Gift.",
      "Conclusion",
      "Estate planning tools are not a one-size-fits-all exercise but a strategic process that must align with the unique intentions and circumstances of each property owner. While a Will and a Deed of Gift serve important legal purposes, they each possess inherent limitations. A Trust settlement, by contrast, offers a more balanced approach through its combination of control, protection, and continuity. However, despite its advantages, a Trust settlement cannot be regarded as a universal safe haven — the suitability of any estate planning tool ultimately depends on the specific objectives of the property owner.",
    ],
  },
  {
    slug: "michael-jackson-mystery-trust",
    title:
      "The Michael Jackson Mystery Trust: How a Debt-Laden Structure Transformed Into a Billion-Dollar Estate",
    excerpt:
      "How Michael Jackson's debt-laden estate was transformed into a $3.5 billion legacy through a properly structured Trust and pour-over Will.",
    imageFile: "999502818f1978101dda6bae723eaa554c6733f9.jpg",
    publishedAt: "2026-07-10",
    body: [
      "For Michael Jackson, fame did not arrive — it erupted. At just five years old, he stood at the forefront of the Jackson 5, delivering electrifying performances that would birth timeless hits like 'I Want You Back' and 'ABC.' Yet that early brilliance was merely a prelude. Breaking away from Motown, he teamed up with Quincy Jones to craft Off the Wall (1979) and the seismic Thriller (1982), a record that would go on to become the best-selling album in history. With a genre-defying fusion of pop, soul, and R&B, he did not just dominate the 1980s — he defined them, earning a crown the world still recognizes: The King of Pop.",
      "But beyond the glittering surface lay a far more complicated reality. His life was a paradox — extraordinary success shadowed by public scrutiny, eccentric behaviour, and allegations of child molestation. And perhaps the greatest irony of all emerged at the twilight of his life: a global icon, immensely wealthy on paper, yet financially strained in reality.",
      "Despite controlling a vault of invaluable assets, Michael's lavish lifestyle and heavy borrowing eroded his liquidity. By the time of his passing in June 2009, reports and later court filings revealed a staggering truth: debts exceeding $500 million weighed heavily against his estate. It was not the portrait of legacy one might expect from a man of such monumental success. And yet, from this seeming financial disarray arose something astonishing.",
      "Unlike conventional estate planning, where trusts are fortified with tangible wealth, Michael's structure was, at its core, burdened — a trust seeded not with abundance, but with obligation; not with surplus, but with strain. This is where the story turns remarkable: how did a trust, once shadowed by a $500 million debt, evolve into a financial powerhouse valued at over $3.5 billion?",
      "Michael Jackson's Estate Plan and Its Features",
      "Michael Jackson adopted a straightforward yet strategic approach to estate planning, designed in part to preserve his privacy, protect all his diverse assets from intestate succession laws, and ensure that, at his death, his assets would unrestrictedly flow into his Trust, where they would be administered and managed by appointed trustees.",
      "To achieve this, he established both a Will and a Trust. His Will was not primarily intended as an instrument for the direct distribution of his assets among beneficiaries. Instead, it was used to dispose of his estate into the Michael Jackson Family Trust. His Will stated: 'It is my intention by this Will to dispose of all property which I am entitled to dispose of by Will. I specifically refrain from exercising all powers of appointment that I may possess at the time of my death,' and further: 'I give my entire estate to the Trustee or Trustees then acting under that certain Amended and Restated Declaration of Trust executed on March 22, 2002 by me as Trustee and Trustor which is called the MICHAEL JACKSON FAMILY TRUST... All such assets shall be held, managed and distributed as a part of said Trust according to its terms and not as a separate testamentary trust.'",
      "The Will expressly revoked all prior testamentary documents, thereby confirming its validity as the governing instrument. It clearly identified his children and mother as beneficiaries, acknowledged the dissolution of his marriage to Deborah Rowe, and intentionally excluded her from any benefit under the estate. The Will further appointed John Branca, John McClain, and Barry Siegel as co-executors of the estate, and designated his mother, Katherine Jackson, as guardian of his children, with Diana Ross named as an alternate guardian in the event that Katherine Jackson was unable or unwilling to serve.",
      "A notable feature of his estate plan was the use of a 'pour-over will.' A pour-over will acts as a safety net, ensuring that any assets not included in a trust automatically transfer to it upon the death of the testator. It works alongside living trusts to provide a more seamless estate settlement process, directing assets to intended beneficiaries and avoiding the default distribution of intestate succession laws.",
      "The pour-over structure also enhanced privacy. While the contents of the Will are publicly accessible, the Trust remains private. Through this mechanism, all residual assets not already held in the Trust were consolidated into it upon his death. Although the exact details of the Trust remain undisclosed, reports indicate that approximately 40% of the estate was allocated to his children, 40% to his mother, and 20% to charitable causes.",
      "Several aspects of the Trust structure stand out as particularly effective: the appointment of experienced professionals as executors and trustees; clear identification of beneficiaries and intentional exclusion of non-beneficiaries; the strategic integration of a Will and a Trust; and a directive that all outstanding debts be settled prior to distribution of the estate.",
      "Management of the Estate",
      "Transforming an estate burdened with approximately $500 million in debt into one generating over $3.5 billion in revenue reflects exceptional posthumous management. At the time of his death, the estate comprised several valuable but encumbered assets, including music publishing rights, recording royalties, business interests in various companies, the Neverland estate, name, image, and likeness (NIL) rights, and personal property and liquid assets.",
      "A significant factor in the estate's turnaround was the posthumous appreciation of these assets. Public sentiment often intensifies following the death of a global figure, and in this case, it resulted in renewed commercial interest in Michael Jackson's legacy.",
      "The trustees capitalized on this resurgence through calculated and strategic transactions. Neverland Ranch, purchased for $17 million in 1988, was sold to Ron Burkle for $22 million in 2020. In 2023, Sony Music Group bought half of Michael's catalog for above $1.2 billion, leaving the estate with a 50% stake in the music licensing entity Sony/ATV, which also owns the rights to the Beatles' catalog. The Jackson estate is said to have received $10 million from the biopic 'Michael' as an up-front for licensing the music for the film, as well as a 25% share of the film's profits — a film with a projected gross of $500 million that had already reached over $788 million after four weekends in theatres.",
      "On the question of Name, Image & Likeness (NIL) rights, in 2021 the IRS took the Jackson estate to court and claimed that Michael's NIL was worth $434 million. This was counterclaimed by the estate to be worth $2,105. The court later ruled that it was worth $4.15 million.",
      "Conclusion",
      "The Michael Jackson estate remains one of the most remarkable examples of strategic estate planning and posthumous asset management in modern history. Despite being burdened with debts exceeding $500 million at the time of his death, the combination of a properly structured Trust, a pour-over Will, and the appointment of experienced trustees enabled the preservation and growth of his estate. Through effective management of his intellectual property, music catalogue, and name, image, and likeness rights, the estate was transformed into a multi-billion-dollar enterprise.",
      "Ultimately, this demonstrates that with proper estate planning and competent administration, even a debt-laden estate can evolve into a lasting financial legacy.",
    ],
  },
];

async function main() {
  await connectToDatabase();

  const superAdmin = await AdminUser.findOne({ role: "super_admin" }).sort({
    createdAt: 1,
  });
  if (!superAdmin) {
    throw new Error(
      "No super admin found — run `npm run seed:super-admin` first.",
    );
  }

  let category = await Category.findOne({ slug: "estate-planning" });
  if (!category) {
    category = await Category.create({
      name: "Estate Planning",
      slug: "estate-planning",
    });
  }

  for (const item of ARTICLES) {
    const existing = await Article.findOne({ slug: item.slug });
    if (existing) {
      console.log(`Skipping "${item.slug}" — already exists.`);
      continue;
    }

    const imagePath = path.join(
      process.cwd(),
      "public/assets/article_images",
      item.imageFile,
    );
    console.log(`Uploading image for "${item.slug}"...`);
    const uploadResult = await cloudinary.uploader.upload(imagePath, {
      folder: "bsy-legal/articles",
    });

    await Article.create({
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      contentMarkdown: item.body.join("\n\n"),
      featuredImage: {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
      },
      category: category._id,
      tags: [],
      authorId: superAdmin._id,
      status: "published",
      publishedAt: new Date(item.publishedAt),
      seoTitle: "",
      seoDescription: "",
    });

    console.log(`Created "${item.slug}".`);
  }

  console.log("Done seeding insight articles.");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
