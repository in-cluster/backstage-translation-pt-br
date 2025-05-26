import { createTranslationMessages } from "@backstage/core-plugin-api/alpha";
import { searchReactTranslationRef } from "@backstage/plugin-search-react/alpha";

const pt = createTranslationMessages({
    ref: searchReactTranslationRef,
    full: false,
    messages: {
        "searchBar.title": "Pesquisar",
        "searchBar.placeholder": "Pesquisar em {{org}}",
        "searchFilter.allOptionTitle": "Todos",
        "searchPagination.limitLabel": "Resultados por página:",
        "searchPagination.limitText": "de {{num}}",
        "noResultsDescription": "Desculpe, nenhum resultado foi encontrado",
        "searchResultGroup.linkTitle": "Ver Todos",
        "searchResultGroup.addFilterButtonTitle": "Adicionar filtro",
        "searchResultPager.next": "Próximo",
        "searchResultPager.previous": "Anterior"
    },
});

export default pt;