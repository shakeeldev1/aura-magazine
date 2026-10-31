import { useMemo } from "react";
import { useLanguage } from "./language";
import { localizeStory } from "./stories";

export const useLocalizedStories = (stories) => {
  const { lang } = useLanguage();

  return useMemo(
    () => stories.map((story) => localizeStory(story, lang)),
    [stories, lang],
  );
};
