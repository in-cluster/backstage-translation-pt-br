import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { coreComponentsTranslationRef } from "@backstage/core-components/alpha";

export const coreComponentsTranslations = createTranslationResource({
  ref: coreComponentsTranslationRef,
  translations: {
    'pt': () => import("./pt-br/coreComponents")
  },
});