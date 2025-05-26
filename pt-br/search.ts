import { createTranslationMessages } from "@backstage/core-plugin-api/alpha";
import { searchTranslationRef } from "@backstage/plugin-search/alpha";

const pt = createTranslationMessages({
    ref: searchTranslationRef,
    full: false,
    messages: {
        "searchModal.viewFullResults": "Ver Resultados Completos",
        "searchType.tabs.allTitle": "Todos",
        "searchType.allResults": "Todos os Resultados",
        "searchType.accordion.collapse": "Recolher",
        "searchType.accordion.allTitle": "Todos",
        "searchType.accordion.numberOfResults": "{{number}} resultados",
        "sidebarSearchModal.title": "Pesquisar"
    },
});

export default pt;