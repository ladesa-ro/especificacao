import { DeclareEntity, IOutputDeclarationModes, InferFactoryEntityType, PropertyTypes } from '@/helpers';

export type IArquivoModel = InferFactoryEntityType<typeof ArquivoDeclarationFactory, IOutputDeclarationModes['OUTPUT']>;

export const ArquivoDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'Arquivo',

    properties: {
      //

      id: {
        nullable: false,
        type: PropertyTypes.UUID,
        description: 'ID do Registro.',
      },

      //

      nome: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Nome do arquivo.',
      },

      mimeType: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Mime-type do arquivo.',
      },

      //

      sizeBytes: {
        nullable: true,
        type: PropertyTypes.INTEGER,
        description: 'Tamanho do arquivo (em bytes).',
      },

      //

      storageType: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Estratégia de armazenamento do arquivo.',
      },

      //

      dateCreated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de criação do registro.',
      },

      dateUpdated: {
        nullable: false,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de atualização do registro.',
      },

      dateDeleted: {
        nullable: true,
        type: PropertyTypes.DATE_TIME,
        description: 'Data de remoção do registro.',
      },
    },
  } as const;
});
