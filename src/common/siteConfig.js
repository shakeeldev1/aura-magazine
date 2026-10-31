// Client details that are not known yet. Set them in a `.env` file (see `.env.example`).
// An empty value hides the matching footer link, or switches the newsletter form to its
// "not available yet" state.
export const siteConfig = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? "",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL ?? "",
  newsletterEndpoint: import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? "",
};
