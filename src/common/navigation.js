// Shared site navigation. Used by the header and the footer.
export const categories = [
  { key: "fashion", label: { EN: "Fashion", FR: "Mode" }, to: "/fashion" },
  { key: "beauty", label: { EN: "Beauty", FR: "Beauté" }, to: "/#beauty" },
  { key: "decor", label: { EN: "Decor", FR: "Décor" }, to: "/decor" },
  { key: "food", label: { EN: "Food", FR: "Gastronomie" }, to: "/food" },
];

// Sections that are linked from the site but do not have content yet.
export const forthcomingPages = {
  decor: { title: { EN: "Decor", FR: "Décor" } },
  food: { title: { EN: "Food", FR: "Gastronomie" } },
  about: { title: { EN: "About Aura", FR: "À propos d'Aura" } },
  privacy: { title: { EN: "Privacy Policy", FR: "Confidentialité" } },
  terms: { title: { EN: "Terms & Conditions", FR: "Conditions générales" } },
};
