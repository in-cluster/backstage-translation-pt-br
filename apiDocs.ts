import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { apiDocsTranslationRef } from "@backstage/plugin-api-docs/alpha";

export const apiDocsTranslations = createTranslationResource({
  ref: apiDocsTranslationRef,
  translations: {
    'pt': () => import("./pt-br/apiDocs")
  },
});