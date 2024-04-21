import * as SpecHelpers from '@/helpers';
import { ModalidadeFindOneByIdInputDeclaration } from './modalidade-find-one.operation';
import { ModalidadeDeclarationFactory } from './modalidade.declaration';

export type IModalidadeInputDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeInputDeclaration>;

export const ModalidadeInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeInput',

    properties: {
      nome: properties.nome,
      slug: properties.slug,
    },
  };
});

export type IModalidadeCreateDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeCreateDeclaration>;

export const ModalidadeCreateDeclaration = SpecHelpers.DeclareEntity(() => {
  return {
    ...SpecHelpers.GetDeclaration(ModalidadeInputDeclaration),
  };
});

export type IModalidadeUpdateDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeUpdateDeclaration>;

export const ModalidadeUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeFindOneByIdInputDeclaration);

  return {
    name: 'ModalidadeUpdate',

    properties: {
      ...properties,

      id: {
        required: true,
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Identificador da modalidade.',
      },

      nome: {
        required: false,
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome da modalidade.',
      },

      slug: {
        required: false,
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Slug da modalidade.',
      },
    },
  };
});
