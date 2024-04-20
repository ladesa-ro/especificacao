import { EntityFactory, InferFactoryEntityType, Types } from '@/helpers';

export type IArquivoModel = InferFactoryEntityType<typeof ArquivoDeclarationFactory, 'output'>;

export const ArquivoDeclarationFactory = EntityFactory(() => ({
  name: 'Arquivo',

  properties: {
    //

    id: {
      nullable: false,
      type: Types.UUID,
      description: 'ID do Registro.',
    },

    //

    nome: {
      nullable: false,
      type: Types.STRING,
      description: 'Nome do arquivo.',
    },

    mimeType: {
      nullable: true,
      type: Types.STRING,
      description: 'Mime-type do arquivo.',
    },

    //

    sizeBytes: {
      nullable: true,
      type: Types.INTEGER,
      description: 'Tamanho do arquivo (em bytes).',
    },

    //

    storageType: {
      nullable: true,
      type: Types.STRING,
      description: 'Estratégia de armazenamento do arquivo.',
    },

    //

    dateCreated: {
      nullable: false,
      type: Types.DATE_TIME,
      description: 'Data de criação do registro.',
    },

    dateUpdated: {
      nullable: false,
      type: Types.DATE_TIME,
      description: 'Data de atualização do registro.',
    },

    dateDeleted: {
      nullable: true,
      type: Types.DATE_TIME,
      description: 'Data de remoção do registro.',
    },
  },
}));
