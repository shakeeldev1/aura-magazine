import { useEffect } from "react";

export const SITE_NAME = "Insolite Magazine";

// Sets the tab title for a page, and restores the site name when the page unmounts.
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;

    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
};
