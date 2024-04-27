import {
  DatedObjectDeclarationFactory,
  IDatedObject,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuidDeclarationFactory,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { IImagemFindOneResultDto, IImagemModel, ImagemDeclarationFactory } from '@/sisgea/base';
import { AmbienteDeclarationFactory, IAmbienteModel } from '../ambiente';
import { CampusDeclarationFactory, ICampusFindOneResultDto, ICampusModel } from '../campus';

export interface IBlocoModel extends IObjectUuid, IDatedObject {
  // =================================

  id: string;

  // =================================

  nome: string;
  codigo: string;

  // =================================

  campus: ICampusModel;
  imagemCapa: IImagemModel | null;

  // =================================

  ambientes: IAmbienteModel[];

  // =================================

  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;

  // =================================
}

export interface IBlocoFindOneByIdInputDto extends Pick<IBlocoModel, 'id'> {
  id: string;
}

export interface IBlocoFindOneResultDto extends Pick<IBlocoModel, 'id' | 'nome' | 'codigo'> {
  campus: ICampusFindOneResultDto;
  imagemCapa: IImagemFindOneResultDto | null;
}

export interface IBlocoDeleteOneByIdInputDto extends IBlocoFindOneByIdInputDto {
  id: string;
}

export interface IBlocoFindAllResultDto extends IPaginatedResultDto<IBlocoFindOneResultDto> {}

export interface IBlocoInputDto {
  nome: string;
  codigo: string;
  campus: IObjectUuid;
}

export type IBlocoCreateDto = IBlocoInputDto;

export type IBlocoUpdateDto = {
  id: string;
  nome: string | undefined;
  codigo: string | undefined;
  campus: IObjectUuid | undefined;
};

// ==================================

export const BlocoFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;

export const BlocoDeclarationFactory = () => {
  return {
    name: 'Bloco',

    properties: {
      //
      ...BlocoFindOneByIdInputDeclaration().properties,
      //

      nome: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do Bloco.',
      },

      codigo: {
        nullable: false,
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Código do Bloco.',
      },

      campus: {
        type: SpecHelpers.PropertyTypes.MIXED,

        input: {
          nullable: false,
          description: 'Campus do Bloco.',
          type: ObjectUuidDeclarationFactory,
        },

        output: {
          nullable: false,
          description: 'Campus do Bloco.',
          type: CampusDeclarationFactory as any,
        },
      },

      imagemCapa: {
        type: SpecHelpers.PropertyTypes.MIXED,

        input: {
          nullable: true,
          description: 'Imagem do Bloco.',
          type: ObjectUuidDeclarationFactory,
        },

        output: {
          nullable: true,
          description: 'ImagemCapa.',
          type: ImagemDeclarationFactory as any,
        },
      },

      ambientes: {
        arrayOf: true,
        nullable: false,
        description: 'Ambientes do Bloco.',
        type: AmbienteDeclarationFactory,
      },

      //
      ...DatedObjectDeclarationFactory().properties,
      //
    },
  } satisfies SpecHelpers.IEntityDeclarationRaw;
};

export const BlocoFindOneResultDeclaration = () => {
  const { properties } = BlocoDeclarationFactory();

  return {
    name: 'BlocoFindOneResult',
    partialOf: CampusDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      codigo: properties.codigo,
      //
      campus: properties.campus,
      imagemCapa: properties.imagemCapa,
      ambientes: properties.ambientes,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  };
};

export const BlocoInputDeclaration = (required: boolean) => {
  const { properties } = BlocoDeclarationFactory();

  return {
    name: 'BlocoInput',

    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      codigo: {
        ...properties.codigo,
        required,
      },
      //
      campus: {
        ...properties.campus,
        required,
      },
      imagemCapa: {
        ...properties.imagemCapa,
        required,
      },
      ambientes: {
        ...properties.ambientes,
        required,
      },
    },
  };
};

export const BlocoCreateDeclaration = () => {
  return {
    name: 'BlocoCreate',
    properties: {
      ...BlocoInputDeclaration(true).properties,
    },
  };
};

export const BlocoUpdateDeclaration = () => {
  return {
    name: 'BlocoCreate',
    properties: {
      ...BlocoFindOneByIdInputDeclaration().properties,
      ...BlocoInputDeclaration(false).properties,
    },
  };
};

export const BlocoDeleteOneByIdInputDeclaration = BlocoFindOneByIdInputDeclaration;

export const BlocoFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  BlocoFindOneResultDeclaration,
  'BlocoFindAllResult',
);
