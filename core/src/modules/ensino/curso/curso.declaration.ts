import {
  DatedObject,
  IEntityDate,
  IEntityDateNullable,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
  Validator,
} from '@/core';
import { CampusFindOneResult, ICampusFindOneResultDto, ICampusModel } from '@/sisgea/ambientes/campus';
import { IImagemFindOneResultDto, IImagemModel, ImagemFindOneResult } from '@/sisgea/base/imagem';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeFindOneResult } from '@/sisgea/ensino/modalidade';
import { IDeclaration, Mixed, PropertiesRequireness, PropertyTypes } from '../../../legacy/helpers';

// =================================================================

export type ICursoModel = {
  id: string;
  //
  nome: string;
  nomeAbreviado: string;
  //
  campus: ICampusModel;
  modalidade: IModalidadeModel;
  //
  imagemCapa: IImagemModel | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDateNullable;
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

export const CursoFindOneByIdInput = ObjectUuid;

export const Curso = () => {
  return {
    name: 'Curso',

    properties: {
      //
      ...CursoFindOneByIdInput().properties,
      //

      nome: {
        type: PropertyTypes.STRING,
        description: 'Nome do curso.',
        nullable: false,
        validator: Validator(({ custom }) => custom.string().required().nonNullable()),
      },

      nomeAbreviado: {
        type: PropertyTypes.STRING,
        description: 'Nome abreviado do curso.',
        nullable: false,
        validator: Validator(({ custom }) => custom.string().required().nonNullable()),
      },

      campus: Mixed({
        nullable: false,
        input: ObjectUuid,
        output: CampusFindOneResult as any,
        description: 'Campus que o curso pertence.',
      }),

      modalidade: Mixed({
        nullable: false,
        input: ObjectUuid,
        output: ModalidadeFindOneResult as any,
        description: 'Modalidade a que o curso pertence.',
      }),

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa do curso.',
      },

      //
      ...DatedObject().properties,
      //
    },
  } satisfies IDeclaration;
};

export const CursoFindOneResult = () => {
  const { properties } = Curso();

  return {
    name: 'CursoFindOneResult',
    partialOf: Curso as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      nomeAbreviado: properties.nomeAbreviado,
      //
      campus: properties.campus,
      modalidade: properties.modalidade,
      //
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const CursoFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(CursoFindOneResult, 'CursoFindAllResult');

export const CursoInput = (required: boolean) => {
  const { properties } = Curso();

  return {
    name: 'CursoInput',

    properties: {
      ...PropertiesRequireness(
        {
          nome: properties.nome,
          nomeAbreviado: properties.nomeAbreviado,
          campus: properties.campus,
          modalidade: properties.modalidade,
        },
        required,
      ),
    },
  } satisfies IDeclaration;
};

export const CursoCreate = () => {
  return {
    name: 'CursoCreate',

    properties: {
      ...CursoInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const CursoUpdate = () => {
  return {
    name: 'CursoUpdate',

    properties: {
      ...CursoFindOneByIdInput().properties,
      ...CursoInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const CursoDeleteOneByIdInputDeclarationFactory = CursoFindOneByIdInput;

// =================================================================
