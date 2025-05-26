import { createTranslationMessages } from "@backstage/core-plugin-api/alpha";
import { scaffolderReactTranslationRef } from "@backstage/plugin-scaffolder-react/alpha";

const pt = createTranslationMessages({
    ref: scaffolderReactTranslationRef,
    full: false,
    messages: {
        "workflow.noDescription": "Sem descrição",
        "passwordWidget.content": "Este widget é inseguro. Por favor, use [`ui:field: Secret`](https://backstage.io/docs/features/software-templates/writing-templates/#using-secrets) em vez de `ui:widget: password`",
        "scaffolderPageContextMenu.createLabel": "Criar",
        "scaffolderPageContextMenu.moreLabel": "mais",
        "scaffolderPageContextMenu.editorLabel": "Gerenciar Modelos",
        "scaffolderPageContextMenu.actionsLabel": "Ações Instaladas",
        "scaffolderPageContextMenu.tasksLabel": "Lista de Tarefas",
        "scaffolderPageContextMenu.templatingExtensionsLabel": "Extensões de Modelagem",
        "stepper.backButtonText": "Voltar",
        "stepper.createButtonText": "Criar",
        "stepper.reviewButtonText": "Revisar",
        "stepper.nextButtonText": "Próximo",
        "stepper.stepIndexLabel": "Passo {{index, number}}",
        "templateCategoryPicker.title": "Categorias",
        "templateCard.noDescription": "Sem descrição",
        "templateCard.chooseButtonText": "Escolher",
        "cardHeader.detailBtnTitle": "Mostrar detalhes da entidade do modelo",
        "templateOutputs.title": "Saída de Texto"
    },
});

export default pt;