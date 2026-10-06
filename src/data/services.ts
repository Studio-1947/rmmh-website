import type { L } from "../i18n";

export interface Service {
  slug: string;
  icon: string;
  title: L;
  description: L;
  image: string;
  imageAlt: string;
  tag?: L;
  /** Shown on /services/ only: what exactly the counter does for this. */
  points?: L[];
}

// Images live in public/images. Swap these placeholders for your own photos.
export const services: Service[] = [
  {
    slug: "prescription-medicines",
    icon: "i-pill",
    title: { en: "Prescription medicines", ne: "प्रेस्क्रिप्सन औषधि", bn: "প্রেসক্রিপশনের ওষুধ" },
    description: {
      en: "Full range of prescription drugs, dispensed by a licensed pharmacist with careful dosage guidance.",
      ne: "लाइसेन्स प्राप्त फार्मासिस्टद्वारा सावधानीपूर्वक मात्रा निर्देशनसहित दिइने प्रेस्क्रिप्सन औषधिको पूर्ण दायरा।",
      bn: "লাইসেন্সপ্রাপ্ত ফার্মাসিস্টের সতর্ক ডোজ-নির্দেশসহ প্রেসক্রিপশনের ওষুধের পূর্ণ সম্ভার।",
    },
    image: "/images/pill-bottle.jpg",
    imageAlt: "Colourful pills spilling from an orange bottle",
    tag: { en: "Pharmacy", ne: "फार्मेसी", bn: "ফার্মেসি" },
    points: [
      {
        en: "Allopathic medicines from licensed distributors, with batch and expiry checked at the counter.",
        ne: "लाइसेन्स प्राप्त वितरकका एलोप्याथिक औषधि, काउन्टरमै ब्याच र म्याद जाँच गरिएको।",
        bn: "লাইসেন্সপ্রাপ্ত ডিস্ট্রিবিউটরের অ্যালোপ্যাথিক ওষুধ, কাউন্টারেই ব্যাচ ও মেয়াদ যাচাই।",
      },
      {
        en: "Generic alternatives suggested when a brand is out of stock, with the doctor's approval.",
        ne: "ब्रान्ड स्टकमा नहुँदा डाक्टरको सहमतिमा जेनेरिक विकल्प सुझाव।",
        bn: "ব্র্যান্ড না থাকলে ডাক্তারের অনুমতিতে জেনেরিক বিকল্পের পরামর্শ।",
      },
      {
        en: "Send a photo of your prescription on WhatsApp and collect when it is ready.",
        ne: "WhatsApp मा प्रेस्क्रिप्सनको फोटो पठाउनुहोस् र तयार हुँदा लिन आउनुहोस्।",
        bn: "WhatsApp-এ প্রেসক্রিপশনের ছবি পাঠান, তৈরি হলে নিয়ে যান।",
      },
    ],
  },
  {
    slug: "otc-wellness",
    icon: "i-leaf",
    title: { en: "OTC & wellness", ne: "OTC र वेलनेस", bn: "OTC ও ওয়েলনেস" },
    description: {
      en: "Pain relief, vitamins, first aid, and everyday wellness essentials. Always in stock, no waiting.",
      ne: "दुखाइ निवारक, भिटामिन, प्राथमिक उपचार र दैनिक वेलनेस सामग्री, सधैं स्टकमा, पर्खनु पर्दैन।",
      bn: "ব্যথানাশক, ভিটামিন, প্রাথমিক চিকিৎসা আর দৈনন্দিন ওয়েলনেস সামগ্রী, সবসময় মজুত, অপেক্ষা নেই।",
    },
    image: "/images/pills-table.jpg",
    imageAlt: "A pile of tablets on a table",
    tag: { en: "Everyday", ne: "दैनिक", bn: "দৈনন্দিন" },
    points: [
      {
        en: "Fever, cold, cough, pain and acidity relief for the whole family.",
        ne: "परिवारका लागि ज्वरो, रुघा, खोकी, दुखाइ र अमिलो पानी निवारक।",
        bn: "পুরো পরিবারের জন্য জ্বর, সর্দি, কাশি, ব্যথা ও অম্বলের ওষুধ।",
      },
      {
        en: "Vitamins, calcium, iron and protein supplements.",
        ne: "भिटामिन, क्याल्सियम, आइरन र प्रोटिन सप्लिमेन्ट।",
        bn: "ভিটামিন, ক্যালসিয়াম, আয়রন ও প্রোটিন সাপ্লিমেন্ট।",
      },
      {
        en: "Baby and mother care: formula, diapers, ORS, nursing essentials.",
        ne: "शिशु र आमाको हेरचाह: फर्मुला, डायपर, ORS, नर्सिङ सामग्री।",
        bn: "শিশু ও মায়ের যত্ন: ফর্মুলা, ডায়াপার, ORS, নার্সিং সামগ্রী।",
      },
    ],
  },
  {
    slug: "health-devices",
    icon: "i-heart",
    title: { en: "Health devices", ne: "स्वास्थ्य उपकरण", bn: "স্বাস্থ্য সরঞ্জাম" },
    description: {
      en: "BP monitors, glucometers, thermometers and nebulisers, with a quick demo at the counter if you need one.",
      ne: "BP मनिटर, ग्लुकोमिटर, थर्मोमिटर र नेबुलाइजर, चाहिए काउन्टरमै छिटो डेमोसहित।",
      bn: "BP মনিটর, গ্লুকোমিটার, থার্মোমিটার ও নেবুলাইজার, দরকারে কাউন্টারেই ছোট্ট ডেমো।",
    },
    image: "/images/bp-monitor.jpg",
    imageAlt: "A person using a digital blood pressure monitor",
    tag: { en: "Devices", ne: "उपकरण", bn: "সরঞ্জাম" },
    points: [
      {
        en: "Digital BP monitors, glucometers and test strips, oximeters and thermometers.",
        ne: "डिजिटल BP मनिटर, ग्लुकोमिटर र स्ट्रिप, अक्सिमिटर र थर्मोमिटर।",
        bn: "ডিজিটাল BP মনিটর, গ্লুকোমিটার ও স্ট্রিপ, অক্সিমিটার ও থার্মোমিটার।",
      },
      {
        en: "Nebulisers, steam inhalers and hot-water bags for cold hill winters.",
        ne: "चिसो पहाडी जाडोका लागि नेबुलाइजर, स्टिम इनहेलर र तातो पानीको झोला।",
        bn: "ঠান্ডা পাহাড়ি শীতের জন্য নেবুলাইজার, স্টিম ইনহেলার ও হট-ওয়াটার ব্যাগ।",
      },
      {
        en: "Set-up and a quick demo at the counter, plus help reading your first results.",
        ne: "काउन्टरमै सेटअप र छिटो डेमो, पहिलो नतिजा बुझ्न सहयोग।",
        bn: "কাউন্টারে সেট-আপ ও ছোট ডেমো, প্রথম রিডিং বুঝতে সাহায্য।",
      },
    ],
  },
  {
    slug: "health-camps",
    icon: "i-stethoscope",
    title: {
      en: "Health camps & checkups",
      ne: "स्वास्थ्य शिविर र जाँच",
      bn: "স্বাস্থ্য শিবির ও পরীক্ষা",
    },
    description: {
      en: "Free blood pressure and sugar checks on the first Sunday of every month. No appointment needed.",
      ne: "हरेक महिनाको पहिलो आइतबार निःशुल्क रक्तचाप र सुगर जाँच, अपोइन्टमेन्ट चाहिँदैन।",
      bn: "প্রতি মাসের প্রথম রবিবার বিনামূল্যে রক্তচাপ ও সুগার পরীক্ষা, অ্যাপয়েন্টমেন্ট লাগে না।",
    },
    image: "/images/doctor-scrubs.jpg",
    imageAlt: "A clinician in scrubs with a stethoscope",
    tag: { en: "Monthly", ne: "मासिक", bn: "মাসিক" },
    points: [
      {
        en: "Free blood pressure and blood sugar checks on the first Sunday of every month.",
        ne: "हरेक महिनाको पहिलो आइतबार निःशुल्क रक्तचाप र सुगर जाँच।",
        bn: "প্রতি মাসের প্রথম রবিবার বিনামূল্যে রক্তচাপ ও সুগার পরীক্ষা।",
      },
      {
        en: "Walk-in BP, sugar and oxygen checks at the counter on other days for a small fee.",
        ne: "अन्य दिन काउन्टरमा सानो शुल्कमा BP, सुगर र अक्सिजन जाँच।",
        bn: "অন্য দিনে কাউন্টারে সামান্য ফি-তে BP, সুগার ও অক্সিজেন পরীক্ষা।",
      },
      {
        en: "Seasonal camps with visiting doctors. Announced on our social media.",
        ne: "आउने डाक्टरसहित मौसमी शिविर। हाम्रो सोसल मिडियामा घोषणा।",
        bn: "আগত ডাক্তারদের নিয়ে মৌসুমি শিবির। আমাদের সোশ্যাল মিডিয়ায় ঘোষণা।",
      },
    ],
  },
  {
    slug: "multilingual-support",
    icon: "i-users",
    title: { en: "Multilingual support", ne: "बहुभाषी सहयोग", bn: "বহুভাষিক সহায়তা" },
    description: {
      en: "Ask us in Nepali, Hindi, Bengali or English. We'll make sure you understand exactly what you're taking.",
      ne: "नेपाली, हिन्दी, बंगाली वा अंग्रेजीमा सोध्नुहोस्, तपाईंले के खाँदै हुनुहुन्छ ठीकसँग बुझ्नुहुन्छ भनी हामी सुनिश्चित गर्छौं।",
      bn: "নেপালি, হিন্দি, বাংলা বা ইংরেজিতে জিজ্ঞেস করুন, আপনি কী খাচ্ছেন তা ঠিকঠাক বুঝে নেওয়া আমরা নিশ্চিত করব।",
    },
    image: "/images/counter-advice.jpg",
    imageAlt: "A pharmacist showing a medicine bottle to a customer",
    tag: {
      en: "नेपाली · हिन्दी · বাংলা · English",
      ne: "नेपाली · हिन्दी · বাংলা · English",
      bn: "नेपाली · हिन्दी · বাংলা · English",
    },
    points: [
      {
        en: "Counter staff speak Nepali, Hindi, Bengali and English.",
        ne: "काउन्टरका कर्मचारी नेपाली, हिन्दी, बंगाली र अंग्रेजी बोल्छन्।",
        bn: "কাউন্টারের কর্মীরা নেপালি, হিন্দি, বাংলা ও ইংরেজি বলেন।",
      },
      {
        en: "Dosage written on the strip in the script you read best.",
        ne: "तपाईंले पढ्न सजिलो लिपिमा पत्तामा मात्रा लेखिन्छ।",
        bn: "আপনি যে লিপি সহজে পড়েন, সেটিতে স্ট্রিপে ডোজ লিখে দেওয়া হয়।",
      },
      {
        en: "Help understanding prescriptions from Siliguri and Darjeeling hospitals.",
        ne: "सिलिगुडी र दार्जिलिङका अस्पतालका प्रेस्क्रिप्सन बुझ्न सहयोग।",
        bn: "শিলিগুড়ি ও দার্জিলিংয়ের হাসপাতালের প্রেসক্রিপশন বুঝতে সাহায্য।",
      },
    ],
  },
];

// Extra services listed only on /services/. Written for what a hill-town counter is
// asked for most: confirm each one with the shop before publishing.
export const moreServices: Service[] = [
  {
    slug: "doctor-consultations",
    icon: "i-stethoscope",
    title: { en: "Doctor consultations", ne: "डाक्टर परामर्श", bn: "ডাক্তার পরামর্শ" },
    description: {
      en: "Visiting general physicians and an ENT specialist consult at OPD Cabin 101, so you do not have to travel to Siliguri for a routine check.",
      ne: "आउने जनरल फिजिसियन र ENT विशेषज्ञले OPD केबिन १०१ मा परामर्श दिन्छन्, सामान्य जाँचका लागि सिलिगुडी जानु पर्दैन।",
      bn: "আগত জেনারেল ফিজিশিয়ান ও ENT বিশেষজ্ঞ OPD কেবিন ১০১-এ পরামর্শ দেন, রুটিন চেক-আপের জন্য শিলিগুড়ি যেতে হয় না।",
    },
    image: "/images/doctor-stethoscope.jpg",
    imageAlt: "A doctor holding a stethoscope",
    points: [
      {
        en: "General medicine, primary care and ENT.",
        ne: "जनरल मेडिसिन, प्राथमिक हेरचाह र ENT।",
        bn: "জেনারেল মেডিসিন, প্রাথমিক চিকিৎসা ও ENT।",
      },
      {
        en: "Call the counter to reserve a slot. Walk-ins taken when free.",
        ne: "स्लट बुक गर्न काउन्टरमा फोन गर्नुहोस्। खाली हुँदा वाक-इन पनि।",
        bn: "স্লট বুক করতে কাউন্টারে কল করুন। ফাঁকা থাকলে ওয়াক-ইনও নেওয়া হয়।",
      },
      {
        en: "Medicines prescribed are available at the same counter.",
        ne: "लेखिएका औषधि सोही काउन्टरमा उपलब्ध।",
        bn: "প্রেসক্রাইব করা ওষুধ একই কাউন্টারে পাওয়া যায়।",
      },
    ],
  },
  {
    slug: "chronic-care",
    icon: "i-heart",
    title: {
      en: "Monthly chronic-care refills",
      ne: "मासिक दीर्घरोग रिफिल",
      bn: "মাসিক ক্রনিক-কেয়ার রিফিল",
    },
    description: {
      en: "Diabetes, blood pressure, thyroid and heart medicines kept aside for you every month, with a reminder before you run out.",
      ne: "मधुमेह, रक्तचाप, थाइरोइड र मुटुका औषधि हरेक महिना तपाईंका लागि छुट्याइन्छ, सकिनुअघि सम्झना गराइन्छ।",
      bn: "ডায়াবেটিস, রক্তচাপ, থাইরয়েড ও হার্টের ওষুধ প্রতি মাসে আপনার জন্য আলাদা রাখা হয়, শেষ হওয়ার আগে মনে করিয়ে দেওয়া হয়।",
    },
    image: "/images/pill-bottle.jpg",
    imageAlt: "Medicine bottle",
    points: [
      {
        en: "Your regular list stays on file at the counter.",
        ne: "तपाईंको नियमित सूची काउन्टरमा सुरक्षित रहन्छ।",
        bn: "আপনার নিয়মিত তালিকা কাউন্টারে রাখা থাকে।",
      },
      {
        en: "WhatsApp reminder a few days before your stock ends.",
        ne: "स्टक सकिनु केही दिनअघि WhatsApp सम्झना।",
        bn: "স্টক শেষ হওয়ার কয়েক দিন আগে WhatsApp রিমাইন্ডার।",
      },
    ],
  },
  {
    slug: "cold-chain",
    icon: "i-shield",
    title: {
      en: "Insulin and cold-chain medicines",
      ne: "इन्सुलिन र कोल्ड-चेन औषधि",
      bn: "ইনসুলিন ও কোল্ড-চেইন ওষুধ",
    },
    description: {
      en: "Insulin, certain injections and eye drops stored in a monitored refrigerator and handed over in an ice pack for the journey home.",
      ne: "इन्सुलिन, केही इन्जेक्सन र आँखाका औषधि निगरानी गरिएको फ्रिजमा राखिन्छ र घर लैजान आइस प्याकमा दिइन्छ।",
      bn: "ইনসুলিন, কিছু ইনজেকশন ও চোখের ড্রপ মনিটর করা ফ্রিজে রাখা হয় এবং বাড়ি নেওয়ার জন্য আইস প্যাকে দেওয়া হয়।",
    },
    image: "/images/medicine-shelves.jpg",
    imageAlt: "Medicine shelves",
    points: [
      {
        en: "Insulin pens, cartridges and vials.",
        ne: "इन्सुलिन पेन, कार्ट्रिज र भाइल।",
        bn: "ইনসুলিন পেন, কার্ট্রিজ ও ভায়াল।",
      },
      {
        en: "Guidance on storing medicines at home in the hills.",
        ne: "पहाडमा घरमा औषधि कसरी राख्ने भन्ने सल्लाह।",
        bn: "পাহাড়ে বাড়িতে ওষুধ সংরক্ষণের পরামর্শ।",
      },
    ],
  },
  {
    slug: "first-aid-surgical",
    icon: "i-pill",
    title: {
      en: "First aid and surgical supplies",
      ne: "प्राथमिक उपचार र सर्जिकल सामग्री",
      bn: "প্রাথমিক চিকিৎসা ও সার্জিক্যাল সামগ্রী",
    },
    description: {
      en: "Dressings, bandages, antiseptics, gloves, masks, syringes and supports for sprains and falls on steep hill roads.",
      ne: "ड्रेसिङ, ब्यान्डेज, एन्टिसेप्टिक, पन्जा, मास्क, सिरिन्ज र ठाडो पहाडी बाटोमा मर्किँदा वा लड्दाका लागि सपोर्ट।",
      bn: "ড্রেসিং, ব্যান্ডেজ, অ্যান্টিসেপটিক, গ্লাভস, মাস্ক, সিরিঞ্জ এবং খাড়া পাহাড়ি রাস্তায় মচকানো বা পড়ে যাওয়ার জন্য সাপোর্ট।",
    },
    image: "/images/pills-table.jpg",
    imageAlt: "Medical supplies",
    points: [
      {
        en: "Knee caps, crepe bandages, cervical collars and walking sticks.",
        ne: "घुँडा क्याप, क्रेप ब्यान्डेज, घाँटी कलर र लौरो।",
        bn: "নি-ক্যাপ, ক্রেপ ব্যান্ডেজ, সার্ভাইকাল কলার ও লাঠি।",
      },
      {
        en: "Ready first-aid kits for homes, schools and homestays.",
        ne: "घर, स्कुल र होमस्टेका लागि तयार प्राथमिक उपचार किट।",
        bn: "বাড়ি, স্কুল ও হোমস্টের জন্য তৈরি ফার্স্ট-এইড কিট।",
      },
    ],
  },
  {
    slug: "travellers",
    icon: "i-pin",
    title: {
      en: "Travellers and homestay guests",
      ne: "यात्रु र होमस्टे पाहुना",
      bn: "পর্যটক ও হোমস্টে অতিথি",
    },
    description: {
      en: "Visiting Mirik Lake or the tea gardens? Motion-sickness tablets, ORS, altitude and cold-weather advice, and a pharmacist who can read prescriptions from anywhere in India.",
      ne: "मिरिक ताल वा चिया बगान घुम्न आउनुभएको? गाडी लाग्ने चक्की, ORS, उचाइ र जाडोको सल्लाह, र भारतभरका प्रेस्क्रिप्सन पढ्न सक्ने फार्मासिस्ट।",
      bn: "মিরিক লেক বা চা-বাগানে বেড়াতে এসেছেন? মোশন-সিকনেস ট্যাবলেট, ORS, উচ্চতা ও ঠান্ডার পরামর্শ, আর ভারতের যেকোনো জায়গার প্রেসক্রিপশন পড়তে পারা ফার্মাসিস্ট।",
    },
    image: "/images/counter-advice.jpg",
    imageAlt: "Pharmacist advising a customer",
    points: [
      {
        en: "Open Monday to Saturday, 8 AM to 8 PM, a short walk from Mirik Lake.",
        ne: "सोमबारदेखि शनिबार, बिहान ८ देखि बेलुका ८, मिरिक तालबाट छोटो हिँडाइ।",
        bn: "সোম থেকে শনি, সকাল ৮ থেকে রাত ৮, মিরিক লেক থেকে অল্প হাঁটাপথ।",
      },
      {
        en: "Homestay owners can keep a standing first-aid order with us.",
        ne: "होमस्टे सञ्चालकले हामीसँग नियमित प्राथमिक उपचार अर्डर राख्न सक्छन्।",
        bn: "হোমস্টে মালিকেরা আমাদের কাছে নিয়মিত ফার্স্ট-এইড অর্ডার রাখতে পারেন।",
      },
    ],
  },
  {
    slug: "ayurvedic",
    icon: "i-om",
    title: { en: "Ayurvedic and herbal", ne: "आयुर्वेदिक र जडीबुटी", bn: "আয়ুর্বেদিক ও ভেষজ" },
    description: {
      en: "Trusted Ayurvedic brands, chyawanprash, herbal teas and balms alongside regular medicines, with advice on what is safe to combine.",
      ne: "भरपर्दा आयुर्वेदिक ब्रान्ड, च्यवनप्राश, जडीबुटी चिया र बाम, नियमित औषधिसँगै के मिलाउन सुरक्षित छ भन्ने सल्लाहसहित।",
      bn: "বিশ্বস্ত আয়ুর্বেদিক ব্র্যান্ড, চ্যবনপ্রাশ, ভেষজ চা ও বাম, নিয়মিত ওষুধের সঙ্গে কী মেশানো নিরাপদ তার পরামর্শসহ।",
    },
    image: "/images/pills-table.jpg",
    imageAlt: "Herbal products",
    points: [
      {
        en: "Winter immunity and joint-care ranges.",
        ne: "जाडोको प्रतिरोध क्षमता र जोर्नी हेरचाह दायरा।",
        bn: "শীতের ইমিউনিটি ও জয়েন্ট-কেয়ার রেঞ্জ।",
      },
    ],
  },
];
