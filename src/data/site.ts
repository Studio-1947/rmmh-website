// Single source of truth for business details used across the site.
// Address, map link, rating and coordinates come from the Google Business listing:
// https://maps.app.goo.gl/5dfmX17yyFWREbAVA
// Email is still a placeholder  replace before going live.
export const site = {
  name: "Radhamadhav Medical Hall",
  nameLocal: "राधा माधव मेडिकल हॉल",
  tagline: "Pharmacy & Health Counter",
  establishedYear: "[Sample Year]",
  phoneDisplay: "+91 70636 57635",
  phoneHref: "tel:+919434431319",
  whatsappDisplay: "+91 70636 57635",
  whatsappHref:
    "https://wa.me/919434431319?text=Namaste%2C%20I%20have%20a%20query%20for%20Radhamadhav%20Medical%20Hall.",
  email: "radhamadhavmirik@gmail.com",

  // Address lines & hours are translated  see src/i18n/ui.ts ("address.*", "hours.*").
  locality: "Mirik",
  plusCode: "V5PQ+8F Mirik, West Bengal",
  lat: 26.8857507,
  lng: 88.1886989,
  mapsHref: "https://maps.app.goo.gl/5dfmX17yyFWREbAVA",
  mapsEmbed:
    "https://www.google.com/maps?q=Radha+Madhav+Medical+Hall,+Mirik&ll=26.8857507,88.1886989&z=17&output=embed",

  google: {
    rating: 4.9,
    reviewCount: 16,
    reviewsHref: "https://maps.app.goo.gl/DUPGb1Na16tpNsoB7",
    writeReviewHref:
      "https://search.google.com/local/writereview?placeid=ChIJOyh_CzwZ5DkRh4qZGXboV-A",
  },

  licenceNos: ["WB/DJL/BIO/R/673796", "WB/DJL/BO/R/673796"],
} as const;
