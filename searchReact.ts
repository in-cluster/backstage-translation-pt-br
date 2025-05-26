import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { searchReactTranslationRef } from "@backstage/plugin-search-react/alpha";

export const searchReactTranslations = createTranslationResource({
  ref: searchReactTranslationRef,
  translations: {
    'pt': () => import("./pt-br/searchReact")
  },
});