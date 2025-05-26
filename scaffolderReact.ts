import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { scaffolderReactTranslationRef } from "@backstage/plugin-scaffolder-react/alpha";

export const scaffolderReactTranslations = createTranslationResource({
  ref: scaffolderReactTranslationRef,
  translations: {
    'pt': () => import("./pt-br/scaffolderReact")
  },
});