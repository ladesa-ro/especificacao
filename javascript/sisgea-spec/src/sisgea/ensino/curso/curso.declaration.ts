import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { Campus, ICampusFindOneResultDto, ICampusModel } from '@/sisgea/ambientes/campus';
import { IImagemFindOneResultDto, IImagemModel, Imagem } from '@/sisgea/base/imagem';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeDeclarationFactory } from '@/sisgea/ensino/modalidade';

// =================================================================

export type ICursoModel = {
  id: string;
  //
  nome: string;
  nomeAbreviado: string;
  campus: ICampusModel;
  modalidade: IModalidadeModel;
  imagemCapa: IImagemModel | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};

export type ICursoInputDto = {
  nome: ICursoModel['nome'];
  nomeAbreviado: ICursoModel['nomeAbreviado'];
  //
  campus: IObjectUuid;
  modalidade: IObjectUuid;
};

export type ICursoFindOneResultDto = {
  id: ICursoModel['id'];
  //
  nome: ICursoModel['nome'];
  nomeAbreviado: ICursoModel['nomeAbreviado'];
  //
  campus: ICampusFindOneResultDto;
  modalidade: IModalidadeFindOneResultDto;
  imagemCapa: IImagemFindOneResultDto | null;
};

// =================================================================
export type ICursoFindOneByIdInputDto = { id: ICursoModel['id'] };
export type ICursoFindAllResultDto = IPaginatedResultDto<ICursoFindOneResultDto>;
// =================================================================
export type ICursoCreateDto = ICursoInputDto;
export type ICursoUpdateDto = ICursoFindOneByIdInputDto & Partial<Omit<ICursoInputDto, 'id'>>;
// =================================================================
export type ICursoDeleteOneByIdInputDto = ICursoFindOneByIdInputDto;
// =================================================================

export const CursoFindOneByIdInputDeclarationFactory = ObjectUuid;

export const CursoDeclarationFactory = () => {
  return {
    name: 'Curso',

    properties: {
      //
      ...CursoFindOneByIdInputDeclarationFactory().properties,
      //

      nome: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do curso.',
        nullable: false,
      },

      nomeAbreviado: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome abreviado do curso.',
        nullable: false,
      },

      campus: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Campus que o curso pertence.',
        },
        output: {
          nullable: false,
          type: Campus as any,
          description: 'Campus que o curso pertence.',
        },
      },

      modalidade: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Modalidade a que o curso pertence.',
        },
        output: {
          nullable: false,
          type: ModalidadeDeclarationFactory as any,
          description: 'Modalidade a que o curso pertence.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: Imagem as any,
        description: 'Imagem de capa do curso.',
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CursoFindOneResultDeclaration = () => {
  const { properties } = CursoDeclarationFactory();

  return {
    name: 'CursoFindOneResult',
    partialOf: CursoDeclarationFactory as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      nomeAbreviado: properties.nomeAbreviado,
      campus: properties.campus,
      modalidade: properties.modalidade,
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CursoFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  CursoFindOneResultDeclaration,
  'CursoFindAllResult',
);

export const CursoInputDeclaration = () => {
  const { properties } = CursoDeclarationFactory();

  return {
    name: 'CursoInput',

    properties: {
      nome: properties.nome,
      nomeAbreviado: properties.nomeAbreviado,
      campus: properties.campus,
      modalidade: properties.modalidade,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CursoUpdateDeclaration = () => {
  const { properties } = CursoDeclarationFactory();

  return {
    name: 'CursoUpdate',

    properties: {
      id: properties.id,
      //
      nome: {
        ...properties.nome,
        required: false,
      },
      nomeAbreviado: {
        ...properties.nomeAbreviado,
        required: false,
      },
      campus: {
        ...properties.campus.input,
        required: false,
      },
      modalidade: {
        ...properties.modalidade.input,
        required: false,
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const CursoDeleteOneByIdInputDeclarationFactory = CursoFindOneByIdInputDeclarationFactory;

// =================================================================
