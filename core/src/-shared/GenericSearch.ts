import { U } from "@unispec/core";
import { Tokens } from "../tokens";

export const GenericSearch = U.View({
  name: Tokens.Shared.Search.Entity,

  type: U.Object({
    properties: {
      page: U.Integer({
        required: false,
        description: "Página.",
      }),
      limit: U.Integer({
        required: false,
        description: "Limite de resultados por página.",
      }),
      search: U.String({
        required: false,
        description: "Busca textual.",
      }),
      sortBy: U.Array({
        required: false,
        items: U.String({
          required: true,
          description: "Campo de ordenação.",
        }),
        description: "Ordenação.",
      }),
      filters: U.Array({
        required: false,
        items: U.Array({
          required: true,
          items: U.String({
            required: true,
            description: "Campo de filtro.",
          }),
          description: "Filtro.",
        }),
        description: "Filtros.",
      }),
    },
  }),
});

export const GenericSearchProvider = U.Provider((ctx) => {
  ctx.Add(GenericSearch);
});
