import * as SpecHelpers from '@/helpers';
import { ModalidadeDeclarationFactory } from './modalidade.declaration';

export type IModalidadeDeleteOneByIdInputDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeDeleteOneByIdInputDeclaration>;

export const ModalidadeDeleteOneByIdInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(ModalidadeDeclarationFactory);

  return {
    name: 'ModalidadeDeleteOneByIdInput',

    properties: {
      id: properties.id,
    },
  };
});
