import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { catalogReactTranslationRef } from "@backstage/plugin-catalog-react/alpha";

export const catalogReactTranslations = createTranslationResource({
  ref: catalogReactTranslationRef,
  translations: {
    'pt': () => import("./pt-br/catalogReact")
  },
});