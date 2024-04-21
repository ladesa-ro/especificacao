import * as SpecHelpers from '@/helpers';
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
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeUpdate',

    properties: {
      id: properties.id,
      //
      nome: {
        ...properties.nome,
        required: false,
      },
      slug: {
        ...properties.slug,
        required: false,
      },
    },
  };
});
