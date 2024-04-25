import { DatedObjectDeclarationFactory, IDatedObject, IEntityDate, IObjectUuid, IPaginatedResultDto, ObjectUuidDeclarationFactory, PaginatedResultDtoDeclarationFactoryBuilder } from "@/core";
import * as SpecHelpers from '@/helpers';
import { IImagemFindOneResultDto, IImagemModel, ImagemDeclarationFactory } from "@/sisgea/base";
import { ModalidadeDeclarationFactory } from "../../ensino";
import { IAmbienteModel } from "../ambiente";
import { CampusDeclarationFactory, ICampusFindOneResultDto, ICampusModel } from "../campus";

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

// ==================================


export const BlocoFindOneByIdInputDeclaration = ObjectUuidDeclarationFactory;


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


export interface IBlocoFindAllResultDto extends IPaginatedResultDto<IBlocoFindOneResultDto> { }


export interface IBlocoInputDto extends Pick<IBlocoModel, 'nome' | 'codigo'> {
  campus: IObjectUuid;
}


export type IBlocoCreateDto = IPaginatedResultDto<IBlocoFindAllResultDto>

export interface IBlocoUpdateDto extends IBlocoFindOneByIdInputDto, Partial<Omit<IBlocoInputDto, 'campus'>> {
  //

  id: string;

  //

  nome?: string;
  codigo?: string;

  //

  // campus?: IObjectUuid;

  //
}



export type ICampusCreateDto = SpecHelpers.InferFactoryEntityType<typeof BlocoCreateDeclaration>;
export type ICampusUpdateDto = SpecHelpers.InferFactoryEntityType<typeof BlocoUpdateDeclaration>;

export const BlocoDeclarationFactory = SpecHelpers.DeclareEntity(() => {

  return {

    name: 'Bloco',

    properties: {
      //
      ...SpecHelpers.GetDeclarationProperties(BlocoFindOneByIdInputDeclaration),
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
          type: CampusDeclarationFactory,
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
          type: ImagemDeclarationFactory,
        },
      },

      ambientes: {
        arrayOf: true,
        nullable: false,
        description: 'Ambientes do Bloco.',
        type: ModalidadeDeclarationFactory,
      },

      //

      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),

      //
    },



  }

});




export const BlocoFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(BlocoDeclarationFactory);

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
});




// Quando uma propriedade entra num input???
export const BlocoInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(BlocoDeclarationFactory);

  return {
    name: 'BlocoInput',

    properties: {
      nome: properties.nome,
      codigo: properties.codigo,
      //
      campus: properties.campus,
      imagemCapa: properties.imagemCapa,
      ambientes: properties.ambientes,
    },
  };
});



export const BlocoCreateDeclaration = SpecHelpers.DeclareEntity(() => {
  return {
    ...SpecHelpers.GetDeclaration(BlocoInputDeclaration),
  };
});



export const BlocoUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(BlocoDeclarationFactory);

  return {
    name: 'BlocoUpdate',

    properties: {
      id: properties.id,
      //
      nome: {
        ...properties.nome,
        required: false,
      },
      codigo: {
        ...properties.codigo,
        required: false,
      },
      campus: {
        ...properties.campus,
        required: false,
      },
      imagemCapa: {
        ...properties.imagemCapa,
        required: false,
      },
      //
      ambientes: {
        ...properties.ambientes,
        required: false,
      },
    },
  };
});



export const BlocoDeleteOneByIdInputDeclaration = BlocoFindOneByIdInputDeclaration;

export const BlocoFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
  BlocoFindOneResultDeclaration,
  'BlocoFindAllResult',
);

/* 
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
*/

