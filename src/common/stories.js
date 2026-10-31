// Helpers shared by story cards and the article page. Keep this file free of imports from
// the page components, so both can use it without a circular dependency.

export const slugify = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const storyPath = (story) => `/stories/${slugify(story.title)}`;

// Stories are either full image URLs or Unsplash photo IDs.
export const resolveImage = (image, width = 900) =>
  image.startsWith("http")
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=85`;
