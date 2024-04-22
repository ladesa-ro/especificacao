import * as SpecHelpers from '@/helpers';
import { CampusDeclarationFactory } from './campus.declaration';

// ================================================

export type ICampusInputDto = SpecHelpers.InferFactoryEntityType<typeof CampusInputDeclaration>;

export const CampusInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusInput',

    properties: {
      nomeFantasia: properties.nomeFantasia,
      razaoSocial: properties.razaoSocial,
      apelido: properties.apelido,
      cnpj: properties.cnpj,
      //
      endereco: properties.endereco,
      modalidades: properties.modalidades,
    },
  };
});

// ================================================

export type ICampusCreateDto = SpecHelpers.InferFactoryEntityType<typeof CampusCreateDeclaration>;

export const CampusCreateDeclaration = SpecHelpers.DeclareEntity(() => {
  return {
    ...SpecHelpers.GetDeclaration(CampusInputDeclaration),
  };
});

// ================================================

export type ICampusUpdateDto = SpecHelpers.InferFactoryEntityType<typeof CampusUpdateDeclaration>;

export const CampusUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CampusDeclarationFactory);

  return {
    name: 'CampusUpdate',

    properties: {
      id: properties.id,
      //
      nomeFantasia: {
        ...properties.nomeFantasia,
        required: false,
      },
      razaoSocial: {
        ...properties.razaoSocial,
        required: false,
      },
      apelido: {
        ...properties.apelido,
        required: false,
      },
      cnpj: {
        ...properties.cnpj,
        required: false,
      },
      //
      endereco: {
        ...properties.endereco,
        required: false,
      },
      modalidades: {
        ...properties.modalidades,
        required: false,
      },
    },
  };
});

// ================================================
