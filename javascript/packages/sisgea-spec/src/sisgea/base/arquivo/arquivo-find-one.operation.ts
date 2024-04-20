import { DeclareEntity, GetDeclaration, InferFactoryEntityType, OutputDeclarationMode, PropertyTypes } from '@/helpers';
import { ArquivoDeclarationFactory } from './arquivo.declaration';

export type IArquivoFindOneByIdInputDto = InferFactoryEntityType<typeof ArquivoFindOneByIdInputDeclaration, OutputDeclarationMode.SIMPLE>;

export const ArquivoFindOneByIdInputDeclaration = DeclareEntity(() => {
  return {
    name: 'ArquivoFindOneByIdInput',

    properties: {
      id: {
        nullable: false,
        type: PropertyTypes.UUID,
        description: 'ID do Registro.',
      },
    },
  } as const;
});

export type IArquivoFindOneByIdResultDto = InferFactoryEntityType<typeof ArquivoFindOneByIdResultDeclaration, OutputDeclarationMode.OUTPUT>;

export const ArquivoFindOneByIdResultDeclaration = DeclareEntity(() => {
  const { properties } = GetDeclaration(ArquivoDeclarationFactory);

  return {
    name: 'ArquivoFindOneByIdResult',

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      mimeType: properties.mimeType,
      sizeBytes: properties.sizeBytes,
      storageType: properties.storageType,
      //
    },
  } as const;
});
