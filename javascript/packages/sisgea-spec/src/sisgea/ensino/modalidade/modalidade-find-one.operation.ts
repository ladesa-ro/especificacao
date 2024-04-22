import { IObjectUuid, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';
import { ModalidadeDeclarationFactory } from './modalidade.declaration';

// =================================================================

export type IModalidadeFindOneByIdInputDto = IObjectUuid;
export const ModalidadeFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

// =================================================================

export type IModalidadeFindOneResultDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeFindOneResultDeclaration, 'output'>;

export const ModalidadeFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeFindOneResult',
    partialOf: ModalidadeDeclarationFactory,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      slug: properties.slug,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
});

// =================================================================
