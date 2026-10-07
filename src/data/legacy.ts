import type { L } from "../i18n";

export interface TimelineItem {
  year: string;
  title: L;
  text: L;
}

// The story of Dr. Swapan Kumar Kundu, Pushpalata Gurung, Dr. Subhendu Kundu and the team.
// Years marked "c." are approximate: confirm dates, names and events with the family
// before publishing.
export const founder = {
  name: {
    en: "Dr. Swapan Kumar Kundu",
    ne: "डा. स्वपन कुमार कुण्डु",
    bn: "ডা. স্বপন কুমার কুণ্ডু",
  } as L,
  role: {
    en: "Co-founder. Physician to Mirik for five decades",
    ne: "सह-संस्थापक। पाँच दशकदेखि मिरिकका चिकित्सक",
    bn: "সহ-প্রতিষ্ঠাতা। পাঁচ দশক ধরে মিরিকের চিকিৎসক",
  } as L,
  photo: "/images/dr-kundu.jpg",
  photoIsPlaceholder: false,
  intro: [
    {
      en: "For close to fifty years, one name has been spoken in Mirik whenever someone fell ill: Dr. Swapan Kumar Kundu. Long before the town had the clinics it has today, his door at Krishnanagar was open to tea-garden workers, students, traders and travellers alike.",
      ne: "लगभग पचास वर्षदेखि मिरिकमा कोही बिरामी पर्दा एउटै नाम लिइन्छ: डा. स्वपन कुमार कुण्डु। सहरमा आजका क्लिनिकहरू हुनुभन्दा धेरै अघिदेखि कृष्णनगरको उहाँको ढोका चिया बगानका कामदार, विद्यार्थी, व्यापारी र यात्रु सबैका लागि खुला थियो।",
      bn: "প্রায় পঞ্চাশ বছর ধরে মিরিকে কেউ অসুস্থ হলে একটি নামই উচ্চারিত হয়েছে: ডা. স্বপন কুমার কুণ্ডু। শহরে আজকের ক্লিনিকগুলো আসার অনেক আগে থেকেই কৃষ্ণনগরে তাঁর দরজা চা-বাগানের শ্রমিক, ছাত্র, ব্যবসায়ী আর পর্যটক সবার জন্য খোলা ছিল।",
    },
    {
      en: "He did not build it alone. Radha Madhav Medical Hall was started at the same time by Dr. Kundu and his wife, Pushpalata Gurung. While he saw patients, she ran the counter: the stock, the accounts, the credit book for families who could pay only after the tea-garden wages came in. The hall had two founders from its first day.",
      ne: "उहाँले यो एक्लै बनाउनुभएन। राधा माधव मेडिकल हल डा. कुण्डु र उहाँकी श्रीमती पुष्पलता गुरुङले एकै समयमा सुरु गर्नुभयो। उहाँ बिरामी हेर्नुहुन्थ्यो, उहाँ काउन्टर चलाउनुहुन्थ्यो: स्टक, हिसाब, र चिया बगानको तलब आएपछि मात्र तिर्न सक्ने परिवारका लागि उधारो खाता। हलका पहिलो दिनदेखि नै दुई संस्थापक थिए।",
      bn: "তিনি একা গড়েননি। রাধা মাধব মেডিক্যাল হল একই সময়ে শুরু করেন ডা. কুণ্ডু ও তাঁর স্ত্রী পুষ্পলতা গুরুং। তিনি রোগী দেখতেন, আর তিনি কাউন্টার সামলাতেন: স্টক, হিসাব, আর যে পরিবারগুলো চা-বাগানের মজুরি এলে তবেই দিতে পারত তাদের জন্য ধারের খাতা। প্রথম দিন থেকেই হলের দুজন প্রতিষ্ঠাতা ছিলেন।",
    },
    {
      en: "Health camps in the tea gardens, free check-ups on Sundays, medicines sent up to villages by whoever was heading that way. None of it was called community service at the time. It was simply how the hall worked, and it still is.",
      ne: "चिया बगानमा स्वास्थ्य शिविर, आइतबार निःशुल्क जाँच, त्यता जाने जोसुकैको हातमा गाउँसम्म पठाइने औषधि। त्यतिबेला यसलाई सामुदायिक सेवा भनिएन। हल यसरी नै चल्थ्यो, र अझै पनि त्यसरी नै चल्छ।",
      bn: "চা-বাগানে স্বাস্থ্য শিবির, রবিবারে বিনামূল্যে চেক-আপ, যে-ই সেদিকে যাচ্ছে তার হাতে গ্রামে পাঠানো ওষুধ। তখন এসবকে সমাজসেবা বলা হত না। হলটা এভাবেই চলত, আর এখনও এভাবেই চলে।",
    },
  ] as L[],
  quote: {
    en: "A pharmacy is not a shop. It is the last person a sick family talks to before they sleep.",
    ne: "फार्मेसी पसल होइन। बिरामी परिवारले सुत्नुअघि कुरा गर्ने अन्तिम व्यक्ति हो।",
    bn: "ফার্মেসি কোনো দোকান নয়। অসুস্থ পরিবার ঘুমোতে যাওয়ার আগে যার সঙ্গে শেষ কথা বলে, সে-ই।",
  } as L,
};

export const cofounder = {
  name: { en: "Pushpalata Gurung", ne: "पुष्पलता गुरुङ", bn: "পুষ্পলতা গুরুং" } as L,
  role: {
    en: "Co-founder. The hands that ran the counter",
    ne: "सह-संस्थापक। काउन्टर चलाउने हातहरू",
    bn: "সহ-প্রতিষ্ঠাতা। যে হাত কাউন্টার চালাত",
  } as L,
  photo: "/images/pushpalata-gurung.jpg",
  photoIsPlaceholder: false,
  intro: [
    {
      en: "Pushpalata Gurung is the reason the hall felt like a home and not a dispensary. She knew every family by name, which child was due a vaccine, and which grandmother would forget her evening tablet unless it was counted into a paper fold for her.",
      ne: "पुष्पलता गुरुङकै कारण हल डिस्पेन्सरी नभई घर जस्तो लाग्थ्यो। उहाँलाई हरेक परिवारको नाम, कुन बच्चाको खोप बाँकी छ, र कुन हजुरआमाले कागजमा पट्याएर नदिए साँझको चक्की बिर्सनुहुन्छ भन्ने थाहा थियो।",
      bn: "পুষ্পলতা গুরুংয়ের জন্যই হলটা ডিসপেনসারি নয়, একটা বাড়ির মতো লাগত। তিনি প্রতিটি পরিবারকে নামে চিনতেন, কোন শিশুর টিকা বাকি, আর কোন ঠাকুমা কাগজে মুড়ে না দিলে সন্ধ্যার ট্যাবলেট ভুলে যাবেন।",
    },
    {
      en: "In a hill town where Nepali, Bengali and Hindi are spoken in the same queue, she made sure nobody left the counter without understanding their medicine. That habit became the hall's rule, and it is still how the staff are trained.",
      ne: "एउटै लाइनमा नेपाली, बंगाली र हिन्दी बोलिने पहाडी सहरमा उहाँले कोही पनि आफ्नो औषधि नबुझी काउन्टरबाट नफर्कियोस् भन्ने सुनिश्चित गर्नुभयो। त्यो बानी हलको नियम बन्यो, र कर्मचारीलाई अझै त्यसरी नै तालिम दिइन्छ।",
      bn: "যে পাহাড়ি শহরে একই লাইনে নেপালি, বাংলা আর হিন্দি শোনা যায়, সেখানে তিনি নিশ্চিত করতেন কেউ যেন নিজের ওষুধ না বুঝে কাউন্টার ছেড়ে না যায়। সেই অভ্যাসই হলের নিয়ম হয়ে গেল, আর আজও কর্মীদের সেভাবেই শেখানো হয়।",
    },
  ] as L[],
};

export const cofounder1 = {
  name: { en: "Tika Chettri", ne: "टीका छेत्री", bn: "টিকা ছেত্রী" } as L,
  role: {
    en: "Co-founder & Family Relative",
    ne: "सह-संस्थापक तथा पारिवारिक आफन्त",
    bn: "সহ-প্রতিষ্ঠাতা ও পারিবারিক আত্মীয়",
  } as L,
  photo: "/images/tika1.png",
  photoIsPlaceholder: false,
  intro: [
    {
      en: "A professional nurse and a close relative of the Kundu family, Tika Chettri has been a guiding presence in Radha Madhav's journey since its founding days. While her independent nursing service is practiced outside Radha Madhav Medical Hall, her healthcare experience and family ties helped shape the clinic's spirit of attentive, caring service.",
      ne: "एक पेशेवर नर्स तथा कुण्डु परिवारकी नजिककी आफन्त, टीका छेत्री यसको स्थापना कालदेखि नै राधा माधवको यात्रामा एक मार्गदर्शकका रूपमा रहनुभएको छ। उहाँको व्यावसायिक नर्सिङ सेवा राधा माधव मेडिकल हलभन्दा बाहिर स्वतन्त्र रूपमा रहे तापनि, उहाँको स्वास्थ्यसम्बन्धी दृष्टिकोण र पारिवारिक साथले संस्थाको सेवाभावलाई दिशानिर्देश गर्न मद्दत पुर्यायो।",
      bn: "পেশাদার নার্স এবং কুণ্ডু পরিবারের ঘনিষ্ঠ আত্মীয়, টিকা ছেত্রী প্রতিষ্ঠার সূচনালগ্ন থেকেই রাধা মাধবের পথচলার অন্যতম অনুপ্রেরণা। যদিও তাঁর নিজস্ব নার্সিং কর্মজীবন রাধা মাধব মেডিক্যাল হলের বাইরে পরিচালিত, তবুও তাঁর চিকিৎসা সংক্রান্ত দৃষ্টিভঙ্গি ও পারিবারিক ঘনিষ্ঠতা হলের সেবামূলক আদর্শকে আরও সমৃদ্ধ করেছে।",
    },
    {
      en: "As a co-founder rooted in family trust, she stood firmly beside Dr. Swapan Kumar Kundu and Pushpalata Gurung during the hall's formative years in Mirik, offering enduring encouragement and vital support to their shared mission.",
      ne: "पारिवारिक विश्वासमा आधारित सह-संस्थापकका रूपमा, उहाँले मिरिकमा हल स्थापनाका सुरुवाती वर्षहरूमा डा. स्वपन कुमार कुण्डु र पुष्पलता गुरुङलाई निरन्तर हौसला र महत्त्वपूर्ण सहयोग प्रदान गर्नुभयो।",
      bn: "পারিবারিক আস্থার ভিত্তিতে একজন সহ-প্রতিষ্ঠাতা হিসেবে, তিনি মিরিকে হলের শুরুর দিনগুলোতে ডা. স্বপন কুমার কুণ্ডু ও পুষ্পলতা গুরুংয়ের পাশে থেকে অবিচল উৎসাহ ও নির্ভরতা জুগিয়েছেন।",
    },
  ] as L[],
};

export const custodian = {
  name: { en: "Dr. Subhendu Kundu", ne: "डा. शुभेन्दु कुण्डु", bn: "ডা. শুভেন্দু কুণ্ডু" } as L,
  role: {
    en: "Runs the hall today, with a team of five",
    ne: "आज पाँच जनाको टोलीसहित हल चलाउनुहुन्छ",
    bn: "আজ পাঁচজনের টিম নিয়ে হল চালান",
  } as L,
  photo: "/images/subhendu-kundu.jpg",
  photoIsPlaceholder: false,
  intro: [
    {
      en: "The counter is now in the care of Dr. Subhendu Kundu, who grew up behind it. He has kept what his parents built, genuine medicines and honest advice, and added what a new generation in Mirik expects: WhatsApp orders, visiting specialists and doctor videos you can watch on your phone.",
      ne: "काउन्टर अहिले डा. शुभेन्दु कुण्डुको हेरचाहमा छ, जो यसैको पछाडि हुर्कनुभयो। उहाँले आमाबुबाले बनाएको कुरा, असली औषधि र इमानदार सल्लाह, कायम राख्नुभएको छ, र मिरिकको नयाँ पुस्ताले अपेक्षा गर्ने कुरा थप्नुभएको छ: WhatsApp अर्डर, आउने विशेषज्ञ र फोनमा हेर्न मिल्ने डाक्टर भिडियो।",
      bn: "কাউন্টার এখন ডা. শুভেন্দু কুণ্ডুর হাতে, যিনি এর পেছনেই বড় হয়েছেন। বাবা-মায়ের গড়া জিনিস, আসল ওষুধ আর সৎ পরামর্শ, তিনি ধরে রেখেছেন, আর যোগ করেছেন মিরিকের নতুন প্রজন্ম যা চায়: WhatsApp অর্ডার, আগত বিশেষজ্ঞ আর ফোনে দেখার মতো ডাক্তারের ভিডিও।",
    },
    {
      en: "It is, in the end, a family of doctors. Medicine was the dinner-table conversation in the Kundu home, and the hall is where that conversation continues with the town: the same counter, the same care, passed from one generation of doctors to the next.",
      ne: "अन्ततः यो डाक्टरहरूको परिवार हो। कुण्डु परिवारको खाना खाने टेबलको कुरा नै औषधि थियो, र हल त्यही कुरा सहरसँग जारी राख्ने ठाउँ हो: उही काउन्टर, उही हेरचाह, डाक्टरको एक पुस्ताबाट अर्को पुस्तामा हस्तान्तरण।",
      bn: "শেষ পর্যন্ত এটা ডাক্তারদের এক পরিবার। কুণ্ডু বাড়িতে খাবার টেবিলের আলোচনাই ছিল চিকিৎসা, আর হলটা সেই আলোচনা শহরের সঙ্গে চালিয়ে যাওয়ার জায়গা: একই কাউন্টার, একই যত্ন, ডাক্তারদের এক প্রজন্ম থেকে পরের প্রজন্মে।",
    },
  ] as L[],
};

export interface StaffMember {
  name: string;
  role: L;
  note: L;
  photo: string;
  photoIsPlaceholder: boolean;
}

// Replace "[Name]" and the stand-in photos with the real team.
export const team: StaffMember[] = [
  {
    name: "Deepika Chettri",
    role: { en: "Registered pharmacist", ne: "दर्ता फार्मासिस्ट", bn: "রেজিস্টার্ড ফার্মাসিস্ট" },
    note: {
      en: "Dispensing and dosage checks",
      ne: "औषधि वितरण र मात्रा जाँच",
      bn: "ওষুধ বিতরণ ও ডোজ যাচাই",
    },
    photo: "/images/deepika-chettri.jpg",
    photoIsPlaceholder: false,
  },
  {
    name: "Sia Pradhan",
    role: { en: "Counter in-charge", ne: "काउन्टर इन्चार्ज", bn: "কাউন্টার ইন-চার্জ" },
    note: {
      en: "Prescriptions and billing",
      ne: "प्रेस्क्रिप्सन र बिलिङ",
      bn: "প্রেসক্রিপশন ও বিলিং",
    },
    photo: "/images/sia-pradhan.jpg",
    photoIsPlaceholder: false,
  },
  {
    name: "[Name]",
    role: { en: "Compounder", ne: "कम्पाउन्डर", bn: "কম্পাউন্ডার" },
    note: {
      en: "Dressings, injections, BP and sugar checks",
      ne: "ड्रेसिङ, इन्जेक्सन, BP र सुगर जाँच",
      bn: "ড্রেসিং, ইনজেকশন, BP ও সুগার পরীক্ষা",
    },
    photo: "/images/staff-3.jpg",
    photoIsPlaceholder: true,
  },
  {
    name: "[Name]",
    role: { en: "Stock and cold-chain", ne: "स्टक र कोल्ड-चेन", bn: "স্টক ও কোল্ড-চেইন" },
    note: {
      en: "Inventory, expiry and insulin storage",
      ne: "भण्डार, म्याद र इन्सुलिन भण्डारण",
      bn: "ইনভেন্টরি, মেয়াদ ও ইনসুলিন সংরক্ষণ",
    },
    photo: "/images/staff-4.jpg",
    photoIsPlaceholder: true,
  },
  {
    name: "[Name]",
    role: { en: "OPD and appointments", ne: "OPD र अपोइन्टमेन्ट", bn: "OPD ও অ্যাপয়েন্টমেন্ট" },
    note: {
      en: "Doctor slots and Cabin 101",
      ne: "डाक्टर स्लट र केबिन १०१",
      bn: "ডাক্তার স্লট ও কেবিন ১০১",
    },
    photo: "/images/staff-5.jpg",
    photoIsPlaceholder: true,
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "c. 1975",
    title: {
      en: "A doctor and his wife come to Mirik",
      ne: "एक डाक्टर र उहाँकी श्रीमती मिरिक आउनुहुन्छ",
      bn: "এক ডাক্তার ও তাঁর স্ত্রী মিরিকে আসেন",
    },
    text: {
      en: "Dr. Swapan Kumar Kundu and Pushpalata Gurung begin together: he sees patients from Mirik and the tea gardens, she sets up the counter.",
      ne: "डा. स्वपन कुमार कुण्डु र पुष्पलता गुरुङ सँगै सुरु गर्नुहुन्छ: उहाँ मिरिक र चिया बगानका बिरामी हेर्नुहुन्छ, उहाँ काउन्टर तयार गर्नुहुन्छ।",
      bn: "ডা. স্বপন কুমার কুণ্ডু ও পুষ্পলতা গুরুং একসঙ্গে শুরু করেন: তিনি মিরিক ও চা-বাগানের রোগী দেখেন, তিনি কাউন্টার সাজান।",
    },
  },
  {
    year: "c. 1980s",
    title: {
      en: "Radha Madhav Medical Hall opens",
      ne: "राधा माधव मेडिकल हल खुल्छ",
      bn: "রাধা মাধব মেডিক্যাল হল খোলে",
    },
    text: {
      en: "The counter at Ward No. 5, Krishnanagar opens so that patients can find genuine medicines in town instead of travelling to Siliguri.",
      ne: "वार्ड नं. ५, कृष्णनगरको काउन्टर खुल्छ, ताकि बिरामीले सिलिगुडी नगई सहरमै असली औषधि पाऊन्।",
      bn: "ওয়ার্ড নং ৫, কৃষ্ণনগরে কাউন্টার খোলে, যাতে রোগীরা শিলিগুড়ি না গিয়ে শহরেই আসল ওষুধ পান।",
    },
  },
  {
    year: "c. 1990s",
    title: { en: "Camps in the tea gardens", ne: "चिया बगानमा शिविर", bn: "চা-বাগানে শিবির" },
    text: {
      en: "Regular health camps and free check-ups reach workers in Thurbo, Phuguri and neighbouring gardens.",
      ne: "थुर्बो, फुगुरी र छिमेकी बगानका कामदारसम्म नियमित स्वास्थ्य शिविर र निःशुल्क जाँच पुग्छ।",
      bn: "থুরবো, ফুগুরি ও পাশের বাগানের শ্রমিকদের কাছে নিয়মিত স্বাস্থ্য শিবির ও বিনামূল্যে চেক-আপ পৌঁছায়।",
    },
  },
  {
    year: "c. 1995",
    title: {
      en: "Free Sunday check-ups begin",
      ne: "निःशुल्क आइतबार जाँच सुरु",
      bn: "বিনামূল্যে রবিবারের চেক-আপ শুরু",
    },
    text: {
      en: "Blood pressure and sugar checks on the first Sunday of every month, open to anyone who walks in. The habit continues today.",
      ne: "हरेक महिनाको पहिलो आइतबार रक्तचाप र सुगर जाँच, जो आए पनि खुला। यो चलन आज पनि जारी छ।",
      bn: "প্রতি মাসের প্রথম রবিবার রক্তচাপ ও সুগার পরীক্ষা, যে কেউ এলেই। সেই অভ্যাস আজও চলছে।",
    },
  },
  {
    year: "c. 2000s",
    title: {
      en: "A polyclinic under one roof",
      ne: "एउटै छानामुनि पोलिक्लिनिक",
      bn: "এক ছাদের নিচে পলিক্লিনিক",
    },
    text: {
      en: "Visiting specialists begin consulting at the hall, and OPD Cabin 101 becomes a fixture for the town.",
      ne: "आउने विशेषज्ञहरूले हलमा परामर्श दिन थाल्छन्, र OPD केबिन १०१ सहरको परिचित ठाउँ बन्छ।",
      bn: "আগত বিশেষজ্ঞরা হলে পরামর্শ দিতে শুরু করেন, আর OPD কেবিন ১০১ শহরের পরিচিত ঠিকানা হয়ে ওঠে।",
    },
  },
  {
    year: "c. 2010s",
    title: {
      en: "Dr. Subhendu Kundu takes the counter",
      ne: "डा. शुभेन्दु कुण्डुले काउन्टर सम्हाल्नुहुन्छ",
      bn: "ডা. শুভেন্দু কুণ্ডু কাউন্টারের দায়িত্ব নেন",
    },
    text: {
      en: "The next generation steps in, building a team of five and bringing visiting specialists to OPD Cabin 101.",
      ne: "अर्को पुस्ता अघि आउँछ, पाँच जनाको टोली बनाउँदै र OPD केबिन १०१ मा आउने विशेषज्ञ ल्याउँदै।",
      bn: "পরের প্রজন্ম এগিয়ে আসে, পাঁচজনের টিম গড়ে আর OPD কেবিন ১০১-এ আগত বিশেষজ্ঞ নিয়ে আসে।",
    },
  },
  {
    year: "c. 2016",
    title: {
      en: "WhatsApp orders",
      ne: "WhatsApp अर्डर",
      bn: "WhatsApp অর্ডার",
    },
    text: {
      en: "A photo of the prescription is enough. Medicines are kept ready at the counter for pick-up.",
      ne: "प्रेस्क्रिप्सनको फोटो नै पर्याप्त। औषधि काउन्टरमा तयार राखिन्छ, आएर लिन मिल्छ।",
      bn: "প্রেসক্রিপশনের একটা ছবিই যথেষ্ট। ওষুধ কাউন্টারে তৈরি রাখা হয়, এসে নিয়ে যান।",
    },
  },
  {
    year: "2020",
    title: { en: "Through the pandemic", ne: "महामारीभरि", bn: "মহামারির মধ্য দিয়ে" },
    text: {
      en: "The counter stays open through lockdowns, keeping medicines and oxygen checks available across Mirik.",
      ne: "लकडाउनभरि काउन्टर खुला रहन्छ, मिरिकभरका लागि औषधि र अक्सिजन जाँच उपलब्ध राख्दै।",
      bn: "লকডাউনের মধ্যেও কাউন্টার খোলা থাকে, মিরিকের জন্য ওষুধ আর অক্সিজেন চেক চালু রেখে।",
    },
  },
  {
    year: "Today",
    title: { en: "The next generation", ne: "अर्को पुस्ता", bn: "পরের প্রজন্ম" },
    text: {
      en: "Five visiting doctors, 4.9 stars on Google and the same promise: genuine medicines, honest advice, in the language you speak.",
      ne: "पाँच आउने डाक्टर, गुगलमा ४.९ तारा र उही वाचा: असली औषधि, इमानदार सल्लाह, तपाईंले बोल्ने भाषामा।",
      bn: "পাঁচজন আগত ডাক্তার, গুগলে ৪.৯ তারা আর সেই একই প্রতিশ্রুতি: আসল ওষুধ, সৎ পরামর্শ, আপনার ভাষায়।",
    },
  },
];
