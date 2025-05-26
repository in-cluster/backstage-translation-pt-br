import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { catalogTranslationRef } from "@backstage/plugin-catalog/alpha";

export const catalogTranslations = createTranslationResource({
  ref: catalogTranslationRef,
  translations: {
    'pt': () => import("./pt-br/catalog")
  },
});