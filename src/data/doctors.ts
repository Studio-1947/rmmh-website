import type { L } from "../i18n";

export interface Availability {
  /** Short day key: Mon, Tue, ... Sun (translated via ui "day.*") */
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  /** e.g. "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" */
  time: string;
}

export interface Doctor {
  slug: string;
  name: L;
  specialty: L;
  location: L;
  /** Consultation fee in INR */
  fee?: number;
  /** One-line summary shown on the homepage card. */
  summary: L;
  /** Longer intro shown on the /doctors/ profile. */
  bio: L;
  /** Special skills / areas of focus. */
  skills: L[];
  /** Weekly availability. Set `timingsConfirmed: false` while these are placeholders. */
  availability: Availability[];
  timingsConfirmed: boolean;
  languages?: string[];
  /** Portrait in public/images. Set `photoIsPlaceholder: false` once it's the real doctor. */
  photo: string;
  photoIsPlaceholder: boolean;
  /** Crop in on the face when a portrait is framed too wide, e.g. 1.15. */
  photoZoom?: number;
  /** A reserved slot on the homepage grid until a real doctor is added. Not shown on /doctors/. */
  isPlaceholder?: boolean;
}

const GM: L = {
  en: "General Medicine & Primary Care",
  ne: "जनरल मेडिसिन र प्राथमिक हेरचाह",
  bn: "জেনারেল মেডিসিন ও প্রাথমিক চিকিৎসা",
};

const GYN: L = {
  en: "Gynecology & Women's Health",
  ne: "स्त्री रोग तथा महिला स्वास्थ्य",
  bn: "স্ত্রীরোগ ও নারী স্বাস্থ্য",
};

const ORTHO: L = {
  en: "Orthopedics & Joint Care",
  ne: "अर्थोपेडिक्स तथा जोर्नी हेरचाह",
  bn: "অর্থোপেডিকস ও জয়েন্ট কেয়ার",
};

const ENT: L = {
  en: "ENT & Head/Neck",
  ne: "ENT (कान, नाक, घाँटी)",
  bn: "ENT (কান, নাক, গলা)",
};

const CARDIO: L = {
  en: "Cardiology & Heart Care",
  ne: "मुटुरोग तथा हृदय हेरचाह",
  bn: "কার্ডিওলজি ও হার্ট কেয়ার",
};

const CABIN: L = {
  en: "OPD Cabin 101 (Ground Floor)",
  ne: "OPD केबिन १०१ (भुइँतला)",
  bn: "OPD কেবিন ১০১ (নিচতলা)",
};

const MON_FRI_SPLIT: Availability[] = [
  { day: "Mon", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
  { day: "Tue", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
  { day: "Wed", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
  { day: "Thu", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
  { day: "Fri", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
  { day: "Sat", time: "9:00 AM – 2:00 PM" },
];

export const doctors: Doctor[] = [
  {
    slug: "kangkan-das",
    photo: "/images/doctor-kangkan-das.jpg",
    photoIsPlaceholder: true,
    fee: 400,
    name: { en: "Dr. Kangkan Das", ne: "डा. कंकन दास", bn: "ডা. কঙ্কন দাস" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Primary care, seasonal infections and comprehensive health management.",
      ne: "प्राथमिक हेरचाह, मौसमी संक्रमण र समग्र स्वास्थ्य व्यवस्थापन।",
      bn: "প্রাথমিক চিকিৎসা, মৌসুমি সংক্রমণ ও সামগ্রিক স্বাস্থ্য পরিচর্যা।",
    },
    bio: {
      en: "Dr. Kangkan Das provides routine general medicine consultations, health evaluations, and treatment for acute illnesses and long-term health monitoring.",
      ne: "डा. कंकन दासले नियमित जनरल मेडिसिन परामर्श, स्वास्थ्य मूल्याङ्कन, र तीव्र बिरामी तथा दीर्घकालीन स्वास्थ्य अनुगमनको उपचार प्रदान गर्नुहुन्छ।",
      bn: "ডা. কঙ্কন দাস নিয়মিত জেনারেল মেডিসিন পরামর্শ, স্বাস্থ্য মূল্যায়ন এবং তীব্র অসুখ ও দীর্ঘমেয়াদি স্বাস্থ্য পর্যবেক্ষণের চিকিৎসা দিয়ে থাকেন।",
    },
    skills: [
      {
        en: "Routine illness & viral fevers",
        ne: "ज्वरो र भाइरल संक्रमण",
        bn: "জ্বর ও ভাইরাল সংক্রমণ",
      },
      {
        en: "Preventive health screening",
        ne: "रोकथाम स्वास्थ्य जाँच",
        bn: "প্রতিরোধমূলক স্বাস্থ্য পরীক্ষা",
      },
      {
        en: "Blood pressure & lifestyle disease care",
        ne: "रक्तचाप र जीवनशैली रोग हेरचाह",
        bn: "রক্তচাপ ও জীবনযাত্রার রোগ যত্ন",
      },
      {
        en: "Adult & elderly health",
        ne: "वयस्क तथा वृद्ध स्वास्थ्य",
        bn: "প্রাপ্তবয়স্ক ও বয়স্ক স্বাস্থ্য",
      },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "punam-sarkar",
    photo: "/images/doctor-punam-sarkar.jpg",
    photoIsPlaceholder: true,
    fee: 500,
    name: { en: "Dr. Punam Sarkar", ne: "डा. पुनम सरकार", bn: "ডা. পুনম সরকার" },
    specialty: GYN,
    location: CABIN,
    summary: {
      en: "Women's wellness, prenatal counseling, hormonal health and menstrual care.",
      ne: "महिला स्वास्थ्य, गर्भावस्था परामर्श, हार्मोनल स्वास्थ्य र महिनावारी हेरचाह।",
      bn: "নারী স্বাস্থ্য, প্রসবপূর্ব পরামর্শ, হরমোনজনিত স্বাস্থ্য ও মাসিক পরিচর্যা।",
    },
    bio: {
      en: "Dr. Punam Sarkar specializes in gynecology and women's health, offering comprehensive care from adolescent menstrual disorders to antenatal guidance and menopausal support.",
      ne: "डा. पुनम सरकार स्त्री रोग तथा महिला स्वास्थ्य विशेषज्ञ हुनुहुन्छ, जसले किशोरावस्थाको महिनावारी समस्यादेखि गर्भावस्था र रजोनिवृत्तिसम्म सम्पूर्ण हेरचाह प्रदान गर्नुहुन्छ।",
      bn: "ডা. পুনম সরকার স্ত্রীরোগ ও নারী স্বাস্থ্য বিশেষজ্ঞ, যিনি বয়ঃসন্ধিকালের মাসিকের সমস্যা থেকে শুরু করে গর্ভকালীন যত্ন ও মেনোপজ পরবর্তী পরামর্শ দেন।",
    },
    skills: [
      {
        en: "Antenatal & pregnancy guidance",
        ne: "गर्भावस्था र प्रसवपूर्व सल्लाह",
        bn: "গর্ভকালীন ও প্রসবপূর্ব যত্ন",
      },
      {
        en: "Menstrual health & PCOD/PCOS",
        ne: "महिनावारी स्वास्थ्य र PCOD",
        bn: "মাসিক স্বাস্থ্য ও পিসিওডি",
      },
      {
        en: "Pelvic wellness & infection care",
        ne: "पेल्भिक स्वास्थ्य र संक्रमण हेरचाह",
        bn: "পেলভিক স্বাস্থ্য ও সংক্রমণ পরিচর্যা",
      },
      {
        en: "Menopause & hormonal balance",
        ne: "रजोनिवृत्ति र हर्मोन सन्तुलन",
        bn: "মেনোপজ ও হরমোন ভারসাম্য",
      },
    ],
    availability: [
      { day: "Wed", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
      { day: "Sat", time: "9:00 AM – 2:00 PM" },
    ],
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "richard-narjinary",
    photo: "/images/drrichard.webp",
    photoIsPlaceholder: false,
    photoZoom: 1.15,
    fee: 600,
    name: {
      en: "Dr. Richard Narjinary",
      ne: "डा. रिचर्ड नार्जिनारी",
      bn: "ডা. রিচার্ড নার্জিনারি",
    },
    specialty: ENT,
    location: CABIN,
    summary: {
      en: "Ear, nose and throat problems, sinus issues and hearing concerns.",
      ne: "कान, नाक र घाँटीका समस्या, साइनस र सुनाइ सम्बन्धी समस्या।",
      bn: "কান, নাক ও গলার সমস্যা, সাইনাস ও শ্রবণ সংক্রান্ত সমস্যা।",
    },
    bio: {
      en: "Dr. Narjinary consults on ear, nose and throat conditions. From recurring tonsillitis and sinusitis to hearing loss and neck swellings. And advises when a procedure or hospital referral is needed.",
      ne: "डा. नार्जिनारीले कान, नाक र घाँटीका रोग, बारम्बार हुने टन्सिल र साइनसदेखि सुनाइ कमी र घाँटी सुन्निनेसम्म, हेर्नुहुन्छ, र प्रक्रिया वा अस्पताल रेफर चाहिदा सल्लाह दिनुहुन्छ।",
      bn: "ডা. নার্জিনারি কান, নাক ও গলার রোগে পরামর্শ দেন, বারবার হওয়া টনসিল ও সাইনাস থেকে শ্রবণশক্তি হ্রাস ও গলার ফোলা পর্যন্ত, এবং কখন প্রসিডিওর বা হাসপাতালে রেফার দরকার তা জানান।",
    },
    skills: [
      {
        en: "Ear infections & hearing loss",
        ne: "कानको संक्रमण र सुनाइ कमी",
        bn: "কানের সংক্রমণ ও শ্রবণশক্তি হ্রাস",
      },
      { en: "Sinusitis & nasal blockage", ne: "साइनस र नाक बन्द हुने", bn: "সাইনাস ও নাক বন্ধ" },
      { en: "Tonsillitis & throat conditions", ne: "टन्सिल र घाँटीका रोग", bn: "টনসিল ও গলার রোগ" },
      {
        en: "Neck lumps & thyroid screening",
        ne: "घाँटीको गाँठो र थाइरोइड जाँच",
        bn: "গলার ফোলা ও থাইরয়েড স্ক্রিনিং",
      },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Bodo", "Bengali", "Hindi", "English"],
  },
  {
    slug: "abul-bashar-laskar",
    photo: "/images/drabul.webp",
    photoIsPlaceholder: false,
    photoZoom: 1.15,
    fee: 500,
    name: { en: "Dr. Abul Bashar Laskar", ne: "डा. अबुल बशर लस्कर", bn: "ডা. আবুল বাশার লস্কর" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Everyday illness, chronic-care follow-ups and preventive check-ups.",
      ne: "दैनिक बिरामी, दीर्घरोगको फलोअप र रोकथाम जाँच।",
      bn: "দৈনন্দিন অসুখ, দীর্ঘমেয়াদি রোগের ফলো-আপ ও প্রতিরোধমূলক পরীক্ষা।",
    },
    bio: {
      en: "Dr. Laskar sees patients of all ages for fevers, infections, diabetes and blood-pressure follow-ups, and general health concerns. First point of contact for most walk-in patients.",
      ne: "डा. लस्करले ज्वरो, संक्रमण, मधुमेह र रक्तचापको फलोअप र सामान्य स्वास्थ्य समस्याका लागि सबै उमेरका बिरामी हेर्नुहुन्छ। धेरैजसो वाक-इन बिरामीका लागि पहिलो सम्पर्क।",
      bn: "ডা. লস্কর জ্বর, সংক্রমণ, ডায়াবেটিস ও রক্তচাপের ফলো-আপ এবং সাধারণ স্বাস্থ্য সমস্যায় সব বয়সের রোগী দেখেন। বেশিরভাগ ওয়াক-ইন রোগীর প্রথম যোগাযোগ।",
    },
    skills: [
      {
        en: "Fever & infection management",
        ne: "ज्वरो र संक्रमण व्यवस्थापन",
        bn: "জ্বর ও সংক্রমণ ব্যবস্থাপনা",
      },
      {
        en: "Diabetes & hypertension follow-up",
        ne: "मधुमेह र उच्च रक्तचाप फलोअप",
        bn: "ডায়াবেটিস ও উচ্চ রক্তচাপ ফলো-আপ",
      },
      {
        en: "Preventive health check-ups",
        ne: "रोकथाम स्वास्थ्य जाँच",
        bn: "প্রতিরোধমূলক স্বাস্থ্য পরীক্ষা",
      },
      { en: "Referrals to specialists", ne: "विशेषज्ञकहाँ रेफर", bn: "বিশেষজ্ঞের কাছে রেফার" },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "debasish-basak",
    photo: "/images/doctor-2.jpg",
    photoIsPlaceholder: true,
    fee: 600,
    name: { en: "Dr. Debasish Basak", ne: "डा. देबाशिष बसाक", bn: "ডা. দেবাশিস বসাক" },
    specialty: CARDIO,
    location: CABIN,
    summary: {
      en: "Cardiac consultations, hypertension monitoring and general medication reviews.",
      ne: "मुटुरोग परामर्श, उच्च रक्तचाप अनुगमन र सामान्य औषधि समीक्षा।",
      bn: "হার্ট সম্পর্কিত পরামর্শ, উচ্চ রক্তচাপ পর্যবেক্ষণ ও সাধারণ ওষুধ পর্যালোচনা।",
    },
    bio: {
      en: "Dr. Basak handles cardiology and general medicine consultations, with special attention to cardiac risk factors, hypertension management, and long-term prescription care.",
      ne: "डा. बसाकले मुटुरोग र सामान्य चिकित्सा परामर्श हेर्नुहुन्छ, मुटुरोग जोखिम, उच्च रक्तचाप व्यवस्थापन र दीर्घकालीन प्रेस्क्रिप्सन हेरचाहमा ध्यान दिँदै।",
      bn: "ডা. বসাক কার্ডিওলজি ও জেনারেল মেডিসিন সংক্রান্ত পরামর্শ দেন, বিশেষ করে হৃদরোগের ঝুঁকি, উচ্চ রক্তচাপ ব্যবস্থাপনা ও দীর্ঘমেয়াদি প্রেসক্রিপশন তত্ত্বাবধানে।",
    },
    skills: [
      {
        en: "Hypertension & heart health",
        ne: "उच्च रक्तचाप र मुटु स्वास्थ्य",
        bn: "উচ্চ রক্তচাপ ও হৃদস্বাস্থ্য",
      },
      {
        en: "Medication review & dosage guidance",
        ne: "औषधि समीक्षा र मात्रा निर्देशन",
        bn: "ওষুধ পর্যালোচনা ও ডোজ নির্দেশনা",
      },
      {
        en: "Chest discomfort & breathlessness screening",
        ne: "छाती दुखाइ र सास फेर्न गाह्रो जाँच",
        bn: "বুকে অস্বস্তি ও শ্বাসকষ্ট পরীক্ষা",
      },
      {
        en: "Elderly & chronic cardiac care",
        ne: "वृद्ध तथा दीर्घ मुटु हेरचाह",
        bn: "বয়স্ক ও দীর্ঘস্থায়ী হার্টের যত্ন",
      },
    ],
    availability: [
      { day: "Tue", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
      { day: "Sat", time: "9:00 AM – 2:00 PM" },
    ],
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "nayeem-ali",
    photo: "/images/nayeem-ali.jpg",
    photoIsPlaceholder: false,
    fee: 600,
    name: { en: "Dr. Nayeem Ali", ne: "डा. नईम अली", bn: "ডা. নঈম আলি" },
    specialty: ORTHO,
    location: CABIN,
    summary: {
      en: "Bone & joint pain, arthritis management, sprains and mobility concerns.",
      ne: "हड्डी र जोर्नी दुखाइ, बाथ रोग व्यवस्थापन, मर्केको र गतिशीलता समस्या।",
      bn: "হাড় ও জয়েন্টের ব্যথা, বাতের চিকিৎসা, মচকে যাওয়া ও চলাফেরার সমস্যা।",
    },
    bio: {
      en: "Dr. Nayeem Ali specializes in orthopedic consultations, diagnosing bone and joint problems, muscle sprains, knee and back pain, and offering post-injury rehabilitation advice.",
      ne: "डा. नईम अली हड्डी तथा जोर्नी विशेषज्ञ हुनुहुन्छ, जसले जोर्नी दुखाइ, घुँडा र ढाडको दुखाइ, मर्केको र चोटपटकपछिको पुनर्स्थापना सल्लाह दिनुहुन्छ।",
      bn: "ডা. নঈম আলি অর্থোপেডিক বিশেষজ্ঞ, যিনি হাড় ও জয়েন্টের সমস্যা, পেশির টান, হাঁটু ও পিঠের ব্যথা এবং আঘাত-পরবর্তী পুনর্বাসন পরামর্শ দেন।",
    },
    skills: [
      {
        en: "Joint & knee pain management",
        ne: "जोर्नी र घुँडा दुखाइ व्यवस्थापन",
        bn: "জয়েন্ট ও হাঁটুর ব্যথা ব্যবস্থাপনা",
      },
      {
        en: "Back & neck strain",
        ne: "ढाड र घाँटीको दुखाइ",
        bn: "পিঠ ও ঘাড়ের সমস্যা",
      },
      {
        en: "Arthritis & osteoporosis care",
        ne: "बाथ र हड्डी खिइने समस्या",
        bn: "বাত ও অস্টিওপোরোসিস যত্ন",
      },
      {
        en: "Sprains, strains & injury rehab",
        ne: "मर्केको र चोटपटक पुनर्स्थापना",
        bn: "মচকে যাওয়া ও চোটের পুনর্বাসন",
      },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "subhamay-das",
    photo: "/images/drsubhamay.webp",
    photoIsPlaceholder: false,
    photoZoom: 1.15,
    fee: 400,
    name: { en: "Dr. Subhamay Das", ne: "डा. शुभमय दास", bn: "ডা. শুভময় দাস" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "General outpatient consultations, viral fever, chronic care and wellness.",
      ne: "सामान्य ओपीडी परामर्श, भाइरल ज्वरो, दीर्घ रोग र स्वास्थ्य सल्लाह।",
      bn: "সাধারণ ওপিডি পরামর্শ, ভাইরাল জ্বর, দীর্ঘমেয়াদি যত্ন ও সুস্থতা।",
    },
    bio: {
      en: "Dr. Subhamay Das provides thorough patient consultations for common ailments, respiratory infections, stomach disorders, and routine monitoring of chronic illnesses.",
      ne: "डा. शुभमय दासले सामान्य बिरामी, श्वासप्रश्वास संक्रमण, पेटको समस्या र दीर्घरोगको नियमित अनुगमनका लागि विस्तृत परामर्श दिनुहुन्छ।",
      bn: "ডা. শুভময় দাস সাধারণ অসুস্থতা, শ্বাসতন্ত্রের সংক্রমণ, পেটের সমস্যা এবং দীর্ঘমেয়াদি রোগের নিয়মিত পর্যবেক্ষণে গভীর পরামর্শ দেন।",
    },
    skills: [
      {
        en: "General medical consultations",
        ne: "सामान्य चिकित्सा परामर्श",
        bn: "সাধারণ চিকিৎসা পরামর্শ",
      },
      {
        en: "Respiratory & chest infections",
        ne: "श्वासप्रश्वास र छातीको संक्रमण",
        bn: "শ্বাসতন্ত্র ও বুকের সংক্রমণ",
      },
      {
        en: "Gastrointestinal complaints",
        ne: "पाचन र पेट सम्बन्धी समस्या",
        bn: "গ্যাস্ট্রোইনটেস্টাইনাল সমস্যা",
      },
      {
        en: "Routine health monitoring",
        ne: "नियमित स्वास्थ्य अनुगमन",
        bn: "রুটিন স্বাস্থ্য পর্যবেক্ষণ",
      },
    ],
    availability: [
      { day: "Wed", time: "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" },
      { day: "Sat", time: "9:00 AM – 2:00 PM" },
    ],
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
  {
    slug: "ajay-kumar-azad",
    photo: "/images/doctor-ajay-azad.jpg",
    photoIsPlaceholder: true,
    fee: 500,
    name: { en: "Dr. Ajay Kumar Azad", ne: "डा. अजय कुमार आजाद", bn: "ডা. অজয় কুমার আজাদ" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Adult health evaluations, diabetes and hypertension management, chronic illness.",
      ne: "वयस्क स्वास्थ्य मूल्याङ्कन, मधुमेह र उच्च रक्तचाप व्यवस्थापन, दीर्घरोग।",
      bn: "প্রাপ্তবয়স্কদের স্বাস্থ্য মূল্যায়ন, ডায়াবেটিস ও উচ্চ রক্তচাপ ব্যবস্থাপনা, দীর্ঘস্থায়ী রোগ।",
    },
    bio: {
      en: "Dr. Ajay Kumar Azad is an experienced primary care physician consulting on complex conditions, lifestyle disease management, and preventative health assessments.",
      ne: "डा. अजय कुमार आजाद एक अनुभवी प्राथमिक चिकित्सक हुनुहुन्छ जसले स्वास्थ्य अवस्था, जीवनशैली रोग व्यवस्थापन र रोकथाम स्वास्थ्य मूल्याङ्कनमा परामर्श दिनुहुन्छ।",
      bn: "ডা. অজয় কুমার আজাদ একজন অভিজ্ঞ চিকিৎসক, যিনি শারীরিক সমস্যা, জীবনযাত্রাজনিত রোগ ব্যবস্থাপনা ও স্বাস্থ্য মূল্যায়নে পরামর্শ দেন।",
    },
    skills: [
      {
        en: "Diabetes mellitus care & monitoring",
        ne: "मधुमेह हेरचाह र अनुगमन",
        bn: "ডায়াবেটিস মেলিটাস যত্ন",
      },
      {
        en: "Hypertension & cardiovascular risk",
        ne: "उच्च रक्तचाप र मुटुरोग जोखिम",
        bn: "উচ্চ রক্তচাপ ও হৃদরোগ ঝুঁকি",
      },
      {
        en: "Chronic disease management",
        ne: "दीर्घरोग व्यवस्थापन",
        bn: "দীর্ঘস্থায়ী রোগ ব্যবস্থাপনা",
      },
      {
        en: "Comprehensive health check-up",
        ne: "समग्र स्वास्थ्य जाँच",
        bn: "সামগ্রিক স্বাস্থ্য পরীক্ষা",
      },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Hindi", "Bengali", "English"],
  },
  {
    slug: "nishant-chandra",
    photo: "/images/doctor-nishant-chandra.jpg",
    photoIsPlaceholder: true,
    fee: 400,
    name: { en: "Dr. Nishant Chandra", ne: "डा. निशान्त चन्द्र", bn: "ডা. নিশান্ত চন্দ্র" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Acute care, fever, seasonal flu, lifestyle wellness and preventive guidance.",
      ne: "तीव्र हेरचाह, ज्वरो, मौसमी फ्लू, जीवनशैली स्वास्थ्य र रोकथाम सल्लाह।",
      bn: "তীব্র যত্ন, জ্বর, মৌসুমি ফ্লু, সুস্থ জীবনযাত্রা ও প্রতিরোধমূলক পরামর্শ।",
    },
    bio: {
      en: "Dr. Nishant Chandra consults on acute and infectious conditions, gastrointestinal issues, seasonal fevers, and guides patients on healthy living and preventive screenings.",
      ne: "डा. निशान्त चन्द्रले तीव्र तथा संक्रामक रोग, पेटको समस्या, मौसमी ज्वरो र बिरामीहरूलाई स्वस्थ जीवनशैली र रोकथाम जाँच सम्बन्धी परामर्श दिनुहुन्छ।",
      bn: "ডা. নিশান্ত চন্দ্র তীব্র ও সংক্রামক রোগ, পেটের সমস্যা, মৌসুমি জ্বর এবং স্বাস্থ্যকর জীবনযাপন ও প্রতিরোধমূলক পরীক্ষার বিষয়ে পরামর্শ দেন।",
    },
    skills: [
      {
        en: "Acute illness & fever management",
        ne: "तीव्र बिरामी र ज्वरो व्यवस्थापन",
        bn: "তীব্র অসুস্থতা ও জ্বর ব্যবস্থাপনা",
      },
      {
        en: "Seasonal flu & allergies",
        ne: "मौसमी फ्लू र एलर्जी",
        bn: "মৌসুমি ফ্লু ও অ্যালার্জি",
      },
      {
        en: "Infection control & antibiotic guidance",
        ne: "संक्रमण नियन्त्रण र एन्टिबायोटिक सल्लाह",
        bn: "সংক্রমণ নিয়ন্ত্রণ ও অ্যান্টিবায়োটিক গাইডেন্স",
      },
      {
        en: "General health & wellness advice",
        ne: "सामान्य स्वास्थ्य तथा आरोग्य सल्लाह",
        bn: "সাধারণ স্বাস্থ্য ও সুস্থতা পরামর্শ",
      },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Hindi", "English", "Bengali"],
  },
  {
    slug: "saurav-sardar",
    photo: "/images/drsourav.webp",
    photoIsPlaceholder: false,
    fee: 400,
    name: { en: "Dr. Saurav Sardar", ne: "डा. सौरभ सरदार", bn: "ডা. সৌরভ সর্দার" },
    specialty: GM,
    location: CABIN,
    summary: {
      en: "Walk-in consultations, minor injuries and child & family health.",
      ne: "वाक-इन परामर्श, साना चोटपटक र बालबालिका तथा परिवार स्वास्थ्य।",
      bn: "ওয়াক-ইন পরামর্শ, ছোটখাটো আঘাত এবং শিশু ও পারিবারিক স্বাস্থ্য।",
    },
    bio: {
      en: "Dr. Sardar covers walk-in consultations including minor injuries, childhood illnesses and routine family health, and runs the monthly free BP & sugar camp.",
      ne: "डा. सरदारले साना चोटपटक, बालरोग र नियमित परिवार स्वास्थ्यसहित वाक-इन परामर्श हेर्नुहुन्छ, र मासिक निःशुल्क BP र सुगर शिविर चलाउनुहुन्छ।",
      bn: "ডা. সর্দার ছোটখাটো আঘাত, শিশুরোগ ও নিয়মিত পারিবারিক স্বাস্থ্যসহ ওয়াক-ইন পরামর্শ দেন, আর মাসিক বিনামূল্যের BP ও সুগার শিবির চালান।",
    },
    skills: [
      {
        en: "Child & family health",
        ne: "बालबालिका र परिवार स्वास्थ्य",
        bn: "শিশু ও পারিবারিক স্বাস্থ্য",
      },
      {
        en: "Minor injuries & wound care",
        ne: "साना चोटपटक र घाउ हेरचाह",
        bn: "ছোট আঘাত ও ক্ষতের যত্ন",
      },
      {
        en: "Blood pressure & sugar screening",
        ne: "रक्तचाप र सुगर जाँच",
        bn: "রক্তচাপ ও সুগার স্ক্রিনিং",
      },
      { en: "Vaccination guidance", ne: "खोप सम्बन्धी सल्लाह", bn: "টিকাকরণ পরামর্শ" },
    ],
    availability: MON_FRI_SPLIT,
    timingsConfirmed: true,
    languages: ["Bengali", "Hindi", "English"],
  },
];

/** Reserved homepage slots if any doctor slot is awaiting assignment. */
export const upcomingSlots: Doctor[] = [];

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

/** "Dr. Abul Bashar Laskar" -> "AB" (first two letters of the name after the title). */
export function initials(name: string): string {
  const words = name.replace(/^(Dr\.?|Vaidya)\s+/i, "").split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}
