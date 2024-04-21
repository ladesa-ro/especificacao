import { DeclareEntity, GetDeclarationProperties, IOutputDeclarationModes, InferFactoryEntityType, PropertyTypes } from '@/helpers';
import { DatedObjectDeclarationFactory, ObjectUuidDeclarationFactory } from '../../../core';

export type IArquivoModel = InferFactoryEntityType<typeof ArquivoDeclarationFactory, IOutputDeclarationModes['OUTPUT']>;

export const ArquivoDeclarationFactory = DeclareEntity(() => {
  return {
    name: 'Arquivo',

    properties: {
      //
      ...GetDeclarationProperties(ObjectUuidDeclarationFactory),
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

      ...GetDeclarationProperties(DatedObjectDeclarationFactory),
    },
  } as const;
});
