import type { L } from "../i18n";

export type VideoPlatform = "youtube" | "instagram" | "mp4" | "none";

export interface DoctorVideo {
  /** Matches a doctor slug in doctors.ts so the card can link to the profile. */
  doctorSlug: string;
  title: L;
  description: L;
  /** youtube: a Shorts/watch URL · instagram: the reel URL · mp4: a file in public/videos · none: poster only */
  platform: VideoPlatform;
  src: string;
  poster?: string;
  /** Shown while the clip is a stand-in. Flip to false once `src` is the real reel. */
  isPlaceholder: boolean;
}

// Short vertical clips from the doctors' social media. Paste the reel URL into `src`,
// set `platform`, and drop `isPlaceholder`. YouTube Shorts embed inline; Instagram
// reels open on Instagram (they need Instagram's own embed script to play inline).
export const doctorVideos: DoctorVideo[] = [
  {
    doctorSlug: "abul-bashar-laskar",
    title: {
      en: "Why your BP medicine must not skip a day",
      ne: "रक्तचापको औषधि एक दिन पनि किन छुटाउनु हुँदैन",
      bn: "রক্তচাপের ওষুধ একদিনও কেন বাদ দেওয়া যাবে না",
    },
    description: {
      en: "A two-minute explainer on hypertension pills, missed doses, and what to do when you forget.",
      ne: "उच्च रक्तचापका चक्की, छुटेका मात्रा र बिर्सिएमा के गर्ने, दुई मिनेटमा।",
      bn: "উচ্চ রক্তচাপের ওষুধ, বাদ পড়া ডোজ আর ভুলে গেলে কী করবেন, দু'মিনিটে।",
    },
    platform: "none",
    src: "",
    poster: "/images/doctors/drabul-square.png",
    isPlaceholder: true,
  },
  {
    doctorSlug: "richard-narjinary",
    title: {
      en: "Blocked nose in the hills: sinus or allergy?",
      ne: "पहाडमा नाक बन्द: साइनस कि एलर्जी?",
      bn: "পাহাড়ে নাক বন্ধ: সাইনাস না অ্যালার্জি?",
    },
    description: {
      en: "Dr. Narjinary on telling sinusitis from seasonal allergy, and when a blocked nose needs a visit.",
      ne: "साइनस र मौसमी एलर्जी कसरी छुट्याउने, र नाक बन्द हुँदा कहिले देखाउने, डा. नार्जिनारी।",
      bn: "সাইনাস আর মৌসুমি অ্যালার্জি কীভাবে আলাদা করবেন, আর নাক বন্ধ হলে কখন দেখানো দরকার, ডা. নার্জিনারি।",
    },
    platform: "none",
    src: "",
    poster: "/images/doctors/drrichard-square.png",
    isPlaceholder: true,
  },
  {
    doctorSlug: "debasish-basak",
    title: {
      en: "Taking five medicines a day? Watch this first.",
      ne: "दिनमा पाँच औषधि खानुहुन्छ? पहिले यो हेर्नुहोस्।",
      bn: "দিনে পাঁচটা ওষুধ খান? আগে এটা দেখুন।",
    },
    description: {
      en: "How to keep a simple medicine chart, avoid clashes, and bring the right strips to your review.",
      ne: "सजिलो औषधि तालिका कसरी राख्ने, टकराव कसरी बच्ने, र समीक्षामा सही पत्ता कसरी ल्याउने।",
      bn: "সহজ ওষুধের চার্ট কীভাবে রাখবেন, সংঘর্ষ এড়াবেন, আর রিভিউয়ে ঠিক স্ট্রিপ আনবেন।",
    },
    platform: "none",
    src: "",
    poster: "/images/doctors/doctor-2.webp",
    isPlaceholder: true,
  },
  {
    doctorSlug: "saurav-sardar",
    title: {
      en: "Child has a fever: when to worry",
      ne: "बच्चालाई ज्वरो आयो, कहिले चिन्ता गर्ने",
      bn: "বাচ্চার জ্বর, কখন চিন্তা করবেন",
    },
    description: {
      en: "Home care, paracetamol dosing by weight, and the red flags that mean come in today.",
      ne: "घरमै हेरचाह, तौल अनुसार प्यारासिटामोलको मात्रा, र आजै आउनुपर्ने खतराका संकेत।",
      bn: "বাড়িতে যত্ন, ওজন অনুযায়ী প্যারাসিটামল ডোজ, আর আজই আসতে হবে এমন বিপদসংকেত।",
    },
    platform: "none",
    src: "",
    poster: "/images/doctors/drsourav.png",
    isPlaceholder: true,
  },
];

/** Pull a YouTube video id out of a watch / shorts / youtu.be URL. */
export function youtubeId(url: string): string | null {
  const m = url.match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
