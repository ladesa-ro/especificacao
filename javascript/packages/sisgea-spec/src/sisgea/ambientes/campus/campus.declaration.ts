import * as SpecCore from '@/core';
import * as SpecHelpers from '@/helpers';
import { ModalidadeDeclarationFactory } from '@/sisgea/ensino';
import { EnderecoDeclarationFactory } from '../endereco';

export type ICampusModel = SpecHelpers.InferFactoryEntityType<typeof CampusDeclarationFactory, 'output'>;

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
        type: SpecHelpers.PropertyTypes.MIXED,

        input: {
          nullable: false,
          description: 'Endereço do Campus.',
          type: SpecCore.ObjectUuidDeclarationFactory,
        },

        output: {
          nullable: false,
          description: 'Endereço do Campus.',
          type: EnderecoDeclarationFactory,
        },
      },

      modalidades: {
        arrayOf: true,
        nullable: false,
        description: 'Modalidades oferecidas pelo Campus.',
        type: ModalidadeDeclarationFactory,
      },

      //

      ...SpecHelpers.GetDeclarationProperties(SpecCore.DatedObjectDeclarationFactory),

      //
    },
  };
});
