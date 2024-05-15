import { UniTypeArray, UniTypeInteger, UniTypeString, UniView } from '../../common/unispec/types';
import { Tokens } from '../tokens';

export const GenericSearch = UniView({
  name: Tokens.Shared.Search.Entity,

  properties: {
    page: UniTypeInteger({
      required: false,
      description: 'Página.',
    }),
    limit: UniTypeInteger({
      required: false,
      description: 'Limite de resultados por página.',
    }),
    search: UniTypeString({
      required: false,
      description: 'Busca textual.',
    }),
    sortBy: UniTypeArray({
      required: false,
      of: UniTypeString({
        required: true,
        description: 'Campo de ordenação.',
      }),
      description: 'Ordenação.',
    }),
    filters: UniTypeArray({
      required: false,
      of: UniTypeArray({
        required: true,
        of: UniTypeString({
          required: true,
          description: 'Campo de filtro.',
        }),
        description: 'Filtro.',
      }),
      description: 'Filtros.',
    }),
  },
});
