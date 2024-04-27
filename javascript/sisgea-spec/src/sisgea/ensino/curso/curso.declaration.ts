import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { CampusDeclarationFactory, ICampusFindOneResultDto, ICampusModel } from '@/sisgea/ambientes/campus';
import { IImagemFindOneResultDto, IImagemModel, ImagemDeclarationFactory } from '@/sisgea/base/imagem';
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

export const CursoFindOneByIdInputDeclarationFactory = ObjectUuidDeclarationFactory;

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
          type: ObjectUuidDeclarationFactory,
          description: 'Campus que o curso pertence.',
        },
        output: {
          nullable: false,
          type: CampusDeclarationFactory as any,
          description: 'Campus que o curso pertence.',
        },
      },

      modalidade: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuidDeclarationFactory,
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
        type: ImagemDeclarationFactory,
        description: 'Imagem de capa do curso.',
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

export const CursoFindOneResultDeclaration = () => {
  const { properties } = CursoDeclarationFactory();

  return {
    name: 'CursoFindOneResult',
    partialOf: CursoDeclarationFactory,

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
  } satisfies SpecHelpers.IEntityDeclarationRaw;
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
  } satisfies SpecHelpers.IEntityDeclarationRaw;
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
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

export const CursoDeleteOneByIdInputDeclarationFactory = CursoFindOneByIdInputDeclarationFactory;

// =================================================================
