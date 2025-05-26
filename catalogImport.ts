import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { catalogImportTranslationRef } from "@backstage/plugin-catalog-import/alpha";

export const catalogImportTranslations = createTranslationResource({
  ref: catalogImportTranslationRef,
  translations: {
    'pt': () => import("./pt-br/catalogImport")
  },
});