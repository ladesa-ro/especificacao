import { GetImagemCapa, SetImagemCapa } from '../../../generic';
import { createDeclarator } from '../../../types';
import { Ambiente } from '../../ambientes';
import { Diario } from '../../ensino';
import { IntervaloDeTempo } from '../intervalo-de-tempo';

export const Aula = createDeclarator(() => ({
  name: 'Aula',

  id: 'uuid',
  dated: true,

  properties: {
    formato: {
      type: 'string',
      required: true,
      nullable: true,
      description: 'Formato da aula.',
    },

    data: {
      type: 'string',
      format: 'date',
      required: true,
      nullable: false,
      description: 'Data da aula.',
    },

    intervaloDeTempo: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => IntervaloDeTempo,
      description: 'Intervalo de Tempo associado à aula.',
    },

    diario: {
      type: 'reference',
      nullable: false,
      required: true,
      references: 'declarator',
      declarator: () => Diario,
      description: 'Diário associado à aula.',
    },

    ambiente: {
      type: 'reference',
      nullable: true,
      required: true,
      references: 'declarator',
      declarator: () => Ambiente,
      description: 'Ambiente associado à aula.',
    },
  },

  views: {
    default: ['formato', 'data', 'intervaloDeTempo@default', 'diario@default', 'ambiente@default'],
    input: ['formato', 'data', 'intervaloDeTempo@findById', 'diario@findById', 'ambiente@findById'],
  },

  operations: {
    crud: {
      findById: true,
      deleteById: true,
      create: true,
      updateById: true,
      list: {
        filters: [
          ['diario.id', ['$eq']],
          ['ambiente.id', ['$eq']],
        ],
      },
    },

    extra: {
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
}));
