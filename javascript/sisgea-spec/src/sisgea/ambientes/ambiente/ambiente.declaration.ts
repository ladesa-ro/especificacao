import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { Bloco, IBlocoFindOneResultDto, IBlocoModel } from '@/sisgea/ambientes/bloco';
import { IImagemFindOneResultDto, IImagemModel, ImagemFindOneResult } from '@/sisgea/base/imagem';

// =================================================================
export type IAmbienteModel = {
  id: string;
  //
  nome: string;
  descricao: string;
  codigo: string;
  capacidade: number | null;
  tipo: string | null;
  bloco: IBlocoModel;
  imagemCapa: IImagemModel | null;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: IEntityDate | null;
};
// =================================================================
export type IAmbienteInputDto = {
  nome: IAmbienteModel['nome'];
  descricao: IAmbienteModel['descricao'];
  codigo: IAmbienteModel['codigo'];
  capacidade: IAmbienteModel['capacidade'];
  tipo: IAmbienteModel['tipo'];
  //
  bloco: IObjectUuid;
};
// =================================================================
export type IAmbienteFindOneResultDto = {
  id: IAmbienteModel['id'];
  //
  nome: IAmbienteModel['nome'];
  descricao: IAmbienteModel['descricao'];
  codigo: IAmbienteModel['codigo'];
  capacidade: IAmbienteModel['capacidade'] | null;
  tipo: IAmbienteModel['tipo'] | null;
  //
  bloco: IBlocoFindOneResultDto;
  imagemCapa: IImagemFindOneResultDto | null;
};
// =================================================================
export type IAmbienteFindOneByIdInputDto = { id: IAmbienteModel['id'] };
export type IAmbienteFindAllResultDto = IPaginatedResultDto<IAmbienteFindOneResultDto>;
// =================================================================
export type IAmbienteCreateDto = IAmbienteInputDto;
export type IAmbienteUpdateDto = IAmbienteFindOneByIdInputDto & Partial<Omit<IAmbienteInputDto, 'id'>>;
// =================================================================
export type IAmbienteDeleteOneByIdInputDto = IAmbienteFindOneByIdInputDto;
// =================================================================
export enum AmbienteValidationErrorCode {
  AMBIENTE_MODALIDADE_NOT_FOUND = 'ambiente.modalidade.not_found',
}
// =================================================================

export const AmbienteFindOneByIdInput = ObjectUuid;

export const Ambiente = () => {
  return {
    name: 'Ambiente',

    properties: {
      ...AmbienteFindOneByIdInput().properties,

      nome: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do ambiente/sala.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      descricao: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Descrição do ambiente/sala.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      codigo: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Código do ambiente/sala.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      capacidade: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Capacidade do ambiente/sala.',
        nullable: true,
        validator: ({ custom }) => custom.number().integer().moreThan(0).nullable(),
      },

      tipo: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.',
        nullable: true,
        validator: ({ custom }) => custom.string().nullable(),
      },

      bloco: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuid,
          description: 'Bloco que o ambiente/sala pertence.',
          validator: ({ custom }) => custom.objectId({ required: true }),
        },
        output: {
          nullable: false,
          type: Bloco as any,
          description: 'Bloco que o ambiente/sala pertence.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa do ambiente/sala.',
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const AmbienteFindOneResult = () => {
  const { properties } = Ambiente();

  return {
    name: 'AmbienteFindOneResult',
    partialOf: Ambiente as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      descricao: properties.descricao,
      codigo: properties.codigo,
      capacidade: properties.capacidade,
      tipo: properties.tipo,
      bloco: properties.bloco,
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
};

export const AmbienteFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(AmbienteFindOneResult, 'AmbienteFindAllResult');

export const AmbienteInput = (required: boolean) => {
  const { properties } = Ambiente();

  return {
    name: 'AmbienteInput',
    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      descricao: {
        ...properties.descricao,
        required,
      },
      codigo: {
        ...properties.codigo,
        required,
      },
      capacidade: {
        ...properties.capacidade,
        required,
      },
      tipo: {
        ...properties.tipo,
        required,
      },
      bloco: {
        ...properties.bloco,
        required,
      },
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const AmbienteUpdate = () => {
  return {
    name: 'AmbienteUpdate',
    properties: {
      ...AmbienteFindOneByIdInput().properties,
      ...AmbienteInput(false).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const AmbienteCreate = () => {
  return {
    name: 'AmbienteCreate',
    properties: {
      ...AmbienteInput(true).properties,
    },
  } satisfies SpecHelpers.IDeclaration;
};

export const AmbienteDeleteOneByIdInput = AmbienteFindOneByIdInput;

// =================================================================
