import * as SpecHelpers from '@/helpers';
import { CampusDeclarationFactory } from './campus.declaration';

// =================================================================

export type ICampusFindOneByIdInputDto = SpecHelpers.InferFactoryEntityType<typeof CampusFindOneByIdInputDeclaration>;

export const CampusFindOneByIdInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusFindOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});

// =================================================================

export type ICampusFindOneResultDto = SpecHelpers.InferFactoryEntityType<typeof CampusFindOneResultDeclaration, 'output'>;

export const CampusFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusFindOneResult',
    partialOf: CampusDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nomeFantasia: properties.nomeFantasia,
      razaoSocial: properties.razaoSocial,
      apelido: properties.apelido,
      cnpj: properties.cnpj,
      //
      endereco: properties.endereco,
      modalidades: properties.modalidades,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  };
});

// =================================================================
