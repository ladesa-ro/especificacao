import { DeclareEntity, GetDeclaration, IOutputDeclarationModes, InferFactoryEntityType } from '@/helpers';
import { ObjectUuidDeclarationFactory } from '../../../core';
import { ArquivoDeclarationFactory } from './arquivo.declaration';

// ======================================

export type IArquivoFindOneByIdInputDto = InferFactoryEntityType<typeof ArquivoFindOneByIdInputDeclaration>;

export const ArquivoFindOneByIdInputDeclaration = DeclareEntity(() => ObjectUuidDeclarationFactory('ArquivoFindOneByIdInput'));

// ======================================

export type IArquivoFindOneByIdResultDto = InferFactoryEntityType<
  typeof ArquivoFindOneByIdResultDeclaration,
  IOutputDeclarationModes['OUTPUT']
>;

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

// ======================================
