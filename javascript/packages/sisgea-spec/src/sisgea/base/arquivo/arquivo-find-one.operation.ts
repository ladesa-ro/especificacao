import { EntityDeclaration, EntityFactory, InferFactoryEntityType, Types } from '@/helpers';
import { ArquivoDeclarationFactory } from './arquivo.declaration';

export type IArquivoFindOneByIdInputDto = InferFactoryEntityType<typeof ArquivoFindOneByIdInputDeclaration, 'simple'>;

export const ArquivoFindOneByIdInputDeclaration = EntityFactory(() => ({
  name: 'Arquivo',

  properties: {
    id: {
      nullable: false,
      type: Types.UUID,
      description: 'ID do Registro.',
    },
  },
}));

export type IArquivoFindOneByIdResultDto = InferFactoryEntityType<typeof ArquivoFindOneByIdResultDeclaration, 'output'>;

export const ArquivoFindOneByIdResultDeclaration = EntityFactory(() => {
  const { properties } = EntityDeclaration(ArquivoDeclarationFactory);

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
  };
});
