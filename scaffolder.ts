import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { scaffolderTranslationRef } from "@backstage/plugin-scaffolder/alpha";

export const scaffolderTranslations = createTranslationResource({
  ref: scaffolderTranslationRef,
  translations: {
    'pt': () => import("./pt-br/scaffolder")
  },
});