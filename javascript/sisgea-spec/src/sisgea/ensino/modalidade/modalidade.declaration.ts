import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';

// =================================================================

export type IModalidadeFindOneByIdInputDto = IObjectUuid;

export type IModalidadeModel = {
  //
  id: IModalidadeFindOneByIdInputDto['id'];
  //
  nome: string;
  slug: string;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type IModalidadeFindOneResultDto = {
  //
  id: IModalidadeFindOneByIdInputDto['id'];
  //
  nome: string;
  slug: string;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
  //
};

export type IModalidadeInputDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeInputDeclaration>;
export type IModalidadeCreateDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeCreateDeclaration>;
export type IModalidadeUpdateDto = SpecHelpers.InferFactoryEntityType<typeof ModalidadeUpdateDeclaration>;

export type IModalidadeFindAllResultDto = IPaginatedResultDto<IModalidadeFindOneResultDto>;

export type IModalidadeDeleteOneByIdInputDto = IModalidadeFindOneByIdInputDto;

// =================================================================

export const ModalidadeFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const ModalidadeDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Modalidade',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(ObjectUuidDeclarationFactory),

      //

      nome: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome da modalidade.',
        nullable: false,
      },

      slug: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Slug da modalidade.',
        nullable: false,
      },

      //
      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),
      //
    },
  };
});

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

export const ModalidadeCreateDeclaration = ModalidadeInputDeclaration;

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

export const ModalidadeFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  ModalidadeFindOneResultDeclaration,
  'ModalidadeFindAllResult',
);

export const ModalidadeDeleteOneByIdInputDeclaration = ModalidadeFindOneByIdInputDeclaration;

// =================================================================
