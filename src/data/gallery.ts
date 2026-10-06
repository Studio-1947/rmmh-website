import type { L } from "../i18n";

export interface GalleryTile {
  title: L;
  caption: L;
  src: string;
  alt: string;
  icon: string;
}

// Large image cards. Swap src for real photos of the storefront, counter and team.
export const galleryTiles: GalleryTile[] = [
  {
    title: { en: "Medicine counter", ne: "औषधि काउन्टर", bn: "ওষুধের কাউন্টার" },
    caption: {
      en: "Prescriptions filled by a licensed pharmacist, with time to explain every dose.",
      ne: "लाइसेन्स प्राप्त फार्मासिस्टले हरेक मात्रा बुझाउने समय लिएर प्रेस्क्रिप्सन भर्छन्।",
      bn: "লাইসেন্সপ্রাপ্ত ফার্মাসিস্ট প্রেসক্রিপশন পূরণ করেন, প্রতিটি ডোজ বুঝিয়ে বলার সময় নিয়ে।",
    },
    src: "/images/medicine-shelves.jpg",
    alt: "Shelves stocked with medicine boxes",
    icon: "i-pill",
  },
  {
    title: { en: "Consultation corner", ne: "परामर्श कुना", bn: "পরামর্শের কোণ" },
    caption: {
      en: "A quiet seat for visiting doctors and unhurried advice.",
      ne: "आउने डाक्टर र शान्त सल्लाहका लागि एउटा शान्त ठाउँ।",
      bn: "আগত ডাক্তার আর ধীরেসুস্থে পরামর্শের জন্য একটি শান্ত জায়গা।",
    },
    src: "/images/counter-advice.jpg",
    alt: "A pharmacist advising a customer at the counter",
    icon: "i-stethoscope",
  },
  {
    title: { en: "Health devices", ne: "स्वास्थ्य उपकरण", bn: "স্বাস্থ্য সরঞ্জাম" },
    caption: {
      en: "BP monitors, glucometers and more. Demoed at the counter.",
      ne: "BP मनिटर, ग्लुकोमिटर र अरू, काउन्टरमै डेमो।",
      bn: "BP মনিটর, গ্লুকোমিটার আরও অনেক কিছু, কাউন্টারেই ডেমো।",
    },
    src: "/images/bp-monitor.jpg",
    alt: "A digital blood pressure monitor in use",
    icon: "i-heart",
  },
  {
    title: { en: "Our team", ne: "हाम्रो टोली", bn: "আমাদের টিম" },
    caption: {
      en: "Familiar faces who know your name and your family's history.",
      ne: "तपाईंको नाम र परिवारको इतिहास चिन्ने परिचित अनुहारहरू।",
      bn: "চেনা মুখ, যারা আপনার নাম আর পরিবারের ইতিহাস জানে।",
    },
    src: "/images/doctor-scrubs.jpg",
    alt: "A clinician in scrubs",
    icon: "i-users",
  },
  {
    title: { en: "Always in stock", ne: "सधैं स्टकमा", bn: "সবসময় মজুত" },
    caption: {
      en: "Everyday essentials and prescription lines, restocked daily.",
      ne: "दैनिक आवश्यक सामग्री र प्रेस्क्रिप्सन लाइन, दिनहुँ भरिने।",
      bn: "দৈনন্দিন জরুরি জিনিস আর প্রেসক্রিপশনের ওষুধ, প্রতিদিন নতুন করে মজুত।",
    },
    src: "/images/pills-table.jpg",
    alt: "Assorted tablets and capsules on a table",
    icon: "i-leaf",
  },
];
