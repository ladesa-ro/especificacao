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
import { DisciplinaFindOneResult, IDisciplinaFindOneResultDto, IDisciplinaModel } from '../disciplina';
import { ITurmaFindOneResultDto, ITurmaModel, TurmaFindOneResult } from '../turma';

export interface IDiarioModel {
  //
  id: string;
  //
  situacao: string;
  ano: number;
  etapa: string | null;
  //
  turma: ITurmaModel;
  disciplina: IDisciplinaModel;
  ambientePadrao: IAmbienteModel | null;
  //
  imagemCapa: IImagemModel | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}

export interface IDiarioDeleteOneByIdInputDto {
  id: IDiarioModel['id'];
}

export interface IDiarioFindAllResultDto extends IPaginatedResultDto<IDiarioFindOneResultDto> {}

export interface IDiarioFindOneByIdInputDto {
  id: IDiarioModel['id'];
}

export interface IDiarioFindOneResultDto {
  id: IDiarioModel['id'];
  //
  situacao: IDiarioModel['situacao'];
  ano: IDiarioModel['ano'];
  etapa: IDiarioModel['etapa'];
  //
  turma: ITurmaFindOneResultDto;
  disciplina: IDisciplinaFindOneResultDto;
  ambientePadrao: IAmbienteFindOneResultDto | null;
  //
  imagemCapa: IImagemFindOneResultDto | null;
}

export interface IDiarioCreateDto extends IDiarioInputDto {}

export interface IDiarioInputDto {
  //
  situacao: IDiarioModel['situacao'];
  ano: IDiarioModel['ano'];
  etapa: IDiarioModel['etapa'];
  //
  turma: IObjectUuid;
  disciplina: IObjectUuid;
  ambientePadrao: IObjectUuid | null;
  //
}

export interface IDiarioUpdateDto {
  //
  id: string;
  //
  situacao: IDiarioModel['situacao'] | undefined;
  ano: IDiarioModel['ano'] | undefined;
  etapa: IDiarioModel['etapa'] | undefined;
  //
  turma: IObjectUuid | undefined;
  disciplina: IObjectUuid | undefined;
  ambientePadrao: IObjectUuid | null | undefined;
  //
}

// =================================================================

export const DiarioFindOneByIdInput = ObjectUuid;

export const Diario = () => {
  return {
    name: 'Diario',

    properties: {
      //
      ...DiarioFindOneByIdInput().properties,
      //

      situacao: {
        nullable: false,
        type: PropertyTypes.BOOLEAN,
        description: 'Situação do diário.',
        validator: Validator(({ yup }) => yup.bool().required().nonNullable()),
      },

      ano: {
        nullable: false,
        type: PropertyTypes.INTEGER,
        description: 'Ano do diário.',
        validator: Validator(({ custom }) => custom.number().required().nonNullable()),
      },

      etapa: {
        nullable: true,
        type: PropertyTypes.STRING,
        description: 'Etapa do diário.',
        validator: Validator(({ yup }) => yup.string().required().nullable()),
      },

      turma: {
        type: PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Turma vinculada ao diário.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          nullable: false,
          type: TurmaFindOneResult as any,
          description: 'Turma vinculada ao diário.',
        },
      },

      disciplina: {
        type: PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Disciplina vinculada ao diário.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          nullable: false,
          type: DisciplinaFindOneResult as any,
          description: 'Disciplina vinculada ao diário.',
        },
      },

      ambientePadrao: {
        type: PropertyTypes.MIXED,
        input: {
          nullable: true,
          type: ObjectUuid,
          description: 'Ambiente padrão.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: false, optional: false }),
        },
        output: {
          nullable: true,
          type: AmbienteFindOneResult as any,
          description: 'Ambiente padrão.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa do diário.',
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies IDeclaration;
};

export const DiarioFindOneResult = () => {
  const { properties } = Diario();

  return {
    name: 'DiarioFindOneResult',
    partialOf: Diario as any,

    properties: {
      id: properties.id,
      //
      situacao: properties.situacao,
      ano: properties.ano,
      etapa: properties.etapa,
      //
      turma: properties.turma,
      disciplina: properties.disciplina,
      ambientePadrao: properties.ambientePadrao,
      //
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const DiarioFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(DiarioFindOneResult, 'DiarioFindAllResult');

export const DiarioInput = (required: boolean) => {
  const { properties } = Diario();

  return {
    name: 'DiarioInput',

    properties: {
      situacao: {
        ...properties.situacao,
        required,
      },
      ano: {
        ...properties.ano,
        required,
      },
      etapa: {
        ...properties.etapa,
        required,
      },
      //
      turma: {
        ...properties.turma,
        required,
      },
      disciplina: {
        ...properties.disciplina,
        required,
      },
      ambientePadrao: {
        ...properties.ambientePadrao,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const DiarioCreate = () => {
  return {
    name: 'DiarioCreate',

    properties: {
      ...DiarioInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const DiarioUpdate = () => {
  return {
    name: 'DiarioUpdate',

    properties: {
      ...DiarioFindOneByIdInput().properties,
      ...DiarioInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const DiarioDeleteOneByIdInputDeclarationFactory = DiarioFindOneByIdInput;

// =================================================================