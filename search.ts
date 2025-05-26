import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { searchTranslationRef } from "@backstage/plugin-search/alpha";

export const searchTranslations = createTranslationResource({
  ref: searchTranslationRef,
  translations: {
    'pt': () => import("./pt-br/search")
  },
});