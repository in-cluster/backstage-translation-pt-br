import { createTranslationMessages } from "@backstage/core-plugin-api/alpha";
import { apiDocsTranslationRef } from "@backstage/plugin-api-docs/alpha";

const pt = createTranslationMessages({
    ref: apiDocsTranslationRef,
    full: false,
    messages: {
        "apiDefinitionDialog.closeButtonTitle": "Fechar",
        "apiDefinitionDialog.tabsAriaLabel": "Opções de definição da API",
        "apiDefinitionDialog.toggleButtonAriaLabel": "Alternar Diálogo de Definição da API",
        "defaultApiExplorerPage.title": "APIs",
        "defaultApiExplorerPage.subtitle": "Explorador de API {{orgName}}",
        "defaultApiExplorerPage.pageTitleOverride": "APIs",
        "defaultApiExplorerPage.createButtonTitle": "Registrar API Existente",
        "defaultApiExplorerPage.supportButtonTitle": "Todas as suas APIs",
        "consumedApisCard.error.title": "Não foi possível carregar as APIs",
        "consumedApisCard.title": "APIs Consumidas",
        "consumedApisCard.emptyContent.title": "Esta {{entity}} não consome nenhuma API.",
        "hasApisCard.error.title": "Não foi possível carregar as APIs",
        "hasApisCard.title": "APIs",
        "hasApisCard.emptyContent.title": "Esta {{entity}} não contém nenhuma API.",
        "providedApisCard.error.title": "Não foi possível carregar as APIs",
        "providedApisCard.title": "APIs Fornecidas",
        "providedApisCard.emptyContent.title": "Esta {{entity}} não fornece nenhuma API.",
        "apiEntityColumns.typeTitle": "Tipo",
        "apiEntityColumns.apiDefinitionTitle": "Definição da API",
        "consumingComponentsCard.error.title": "Não foi possível carregar os componentes",
        "consumingComponentsCard.title": "Consumidores",
        "consumingComponentsCard.emptyContent.title": "Nenhum componente consome esta API.",
        "providingComponentsCard.error.title": "Não foi possível carregar os componentes",
        "providingComponentsCard.title": "Provedores",
        "providingComponentsCard.emptyContent.title": "Nenhum componente fornece esta API.",
        "apisCardHelpLinkTitle": "Saiba como alterar isso"
    }
});

export default pt;

