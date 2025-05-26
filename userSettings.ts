import { createTranslationResource } from "@backstage/core-plugin-api/alpha";
import { userSettingsTranslationRef } from "@backstage/plugin-user-settings/alpha";

export const userSettingsTranslations = createTranslationResource({
  ref: userSettingsTranslationRef,
  translations: {
    'pt': () => import("./pt-br/userSettings")
  },
});