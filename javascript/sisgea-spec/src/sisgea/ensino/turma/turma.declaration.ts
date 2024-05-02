import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
  Validator,
} from '../../../core';
import { IDeclaration, PropertyTypes } from '../../../helpers';
import { AmbienteFindOneResult, IAmbienteFindOneResultDto, IAmbienteModel } from '../../ambientes';
import { IImagemFindOneResultDto, IImagemModel, ImagemFindOneResult } from '../../base';
import { CursoFindOneResult, ICursoFindOneResultDto, ICursoModel } from '../curso';

export interface ITurmaModel {
  //
  id: string;
  //

  periodo: string;

  curso: ICursoModel;
  imagemCapa: IImagemModel | null;
  ambientePadraoAula: IAmbienteModel | null;

  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}

export interface ITurmaDeleteOneByIdInputDto extends ITurmaFindOneByIdInputDto {
  id: ITurmaModel['id'];
}

export interface ITurmaFindAllResultDto extends IPaginatedResultDto<ITurmaFindOneResultDto> {}

export interface ITurmaFindOneByIdInputDto {
  id: ITurmaModel['id'];
}

export interface ITurmaFindOneResultDto {
  id: ITurmaModel['id'];

  periodo: ITurmaModel['periodo'];

  curso: ICursoFindOneResultDto;
  ambientePadraoAula: IAmbienteFindOneResultDto | null;

  imagemCapa: IImagemFindOneResultDto | null;
}

export interface ITurmaCreateDto extends ITurmaInputDto {}

export interface ITurmaInputDto {
  periodo: ITurmaModel['periodo'];

  curso: IObjectUuid;
  ambientePadraoAula: IObjectUuid | null;
}

export interface ITurmaUpdateDto {
  id: ITurmaModel['id'];
  //
  periodo: ITurmaModel['periodo'] | undefined;
  //
  curso: ITurmaModel['curso'] | undefined;
  ambientePadraoAula: ITurmaModel['ambientePadraoAula'] | undefined;
  //
}

// =================================================================

export const TurmaFindOneByIdInput = ObjectUuid;

export const Turma = () => {
  return {
    name: 'Turma',

    properties: {
      //
      ...TurmaFindOneByIdInput().properties,
      //

      periodo: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Período do turma.',
        validator: Validator(({ custom }) => custom.string().required().nonNullable().min(1)),
      },

      curso: {
        type: PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Curso que o turma pertence.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          nullable: false,
          type: CursoFindOneResult as any,
          description: 'Curso que o turma pertence.',
        },
      },

      ambientePadraoAula: {
        type: PropertyTypes.MIXED,
        input: {
          nullable: true,
          type: ObjectUuid,
          description: 'Ambiente padrão da sala de aula.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: false, optional: false }),
        },
        output: {
          nullable: true,
          type: AmbienteFindOneResult as any,
          description: 'Ambiente padrão da sala de aula.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa do turma.',
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies IDeclaration;
};

export const TurmaFindOneResult = () => {
  const { properties } = Turma();

  return {
    name: 'TurmaFindOneResult',
    partialOf: Turma as any,

    properties: {
      id: properties.id,
      //
      periodo: properties.periodo,
      //
      curso: properties.curso,
      ambientePadraoAula: properties.ambientePadraoAula,
      //
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const TurmaFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(TurmaFindOneResult, 'TurmaFindAllResult');

export const TurmaInput = (required: boolean) => {
  const { properties } = Turma();

  return {
    name: 'TurmaInput',

    properties: {
      periodo: {
        ...properties.periodo,
        required,
      },
      curso: {
        ...properties.curso,
        required,
      },
      ambientePadraoAula: {
        ...properties.ambientePadraoAula,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const TurmaCreate = () => {
  return {
    name: 'TurmaCreate',

    properties: {
      ...TurmaInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const TurmaUpdate = () => {
  return {
    name: 'TurmaUpdate',

    properties: {
      ...TurmaFindOneByIdInput().properties,
      ...TurmaInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const TurmaDeleteOneByIdInputDeclarationFactory = TurmaFindOneByIdInput;

// =================================================================
