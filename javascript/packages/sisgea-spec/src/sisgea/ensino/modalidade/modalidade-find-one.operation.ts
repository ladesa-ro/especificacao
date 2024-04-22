import * as SpecHelpers from '@/helpers';
import { ModalidadeDeclarationFactory } from './modalidade.declaration';

// =================================================================

export type IModalidadeFindOneByIdInputDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeFindOneByIdInputDeclaration>;

export const ModalidadeFindOneByIdInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeFindOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});

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
