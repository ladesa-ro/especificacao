import * as SpecHelpers from '@/helpers';
import { EnderecoDeclarationFactory } from './endereco.declaration';

// =================================================================

export type IEnderecoFindOneByIdInputDto = SpecHelpers.InferFactoryEntityType<typeof EnderecoFindOneByIdInputDeclaration>;

export const EnderecoFindOneByIdInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(EnderecoDeclarationFactory);

  return {
    name: 'EnderecoFindOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});

// =================================================================

export type IEnderecoFindOneResultDto = SpecHelpers.InferFactoryEntityType<typeof EnderecoFindOneResultDeclaration, 'output'>;

export const EnderecoFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(EnderecoDeclarationFactory);

  return {
    name: 'EnderecoFindOneResult',
    partialOf: EnderecoDeclarationFactory,

    properties: {
      id: properties.id,
      //
      cep: properties.cep,
      logradouro: properties.logradouro,
      numero: properties.numero,
      bairro: properties.bairro,
      complemento: properties.complemento,
      pontoReferencia: properties.pontoReferencia,
      //
      cidade: properties.cidade,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
});
