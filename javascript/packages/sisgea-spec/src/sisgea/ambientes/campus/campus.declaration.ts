import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { ModalidadeDeclarationFactory } from '@/sisgea/ensino';
import { EnderecoDeclarationFactory } from '../endereco';

export type ICampusModel = SpecHelpers.InferFactoryEntityType<typeof CampusDeclarationFactory>;

export const CampusDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Campus',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(SpecCore.ObjectUuidDeclarationFactory),
      //

      id: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Identificador do Campus.',
      },

      razaoSocial: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Razão social do Campus.',
      },

      nomeFantasia: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome fantasia do Campus.',
      },

      apelido: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Apelido do Campus.',
      },

      cnpj: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'CNPJ do Campus.',
      },

      endereco: {
        nullable: false,
        type: EnderecoDeclarationFactory,
        description: 'Endereço do Campus.',
      },

      modalidades: {
        arrayOf: true,
        nullable: false,
        type: ModalidadeDeclarationFactory,
        description: 'Modalidades oferecidas pelo Campus.',
      },

      //

      ...SpecHelpers.GetDeclarationProperties(SpecCore.DatedObjectDeclarationFactory),

      //
    },
  };
});
