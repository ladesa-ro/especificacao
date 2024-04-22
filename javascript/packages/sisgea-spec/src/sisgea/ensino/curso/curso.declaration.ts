import * as SpecCore from '@/core';
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
  dateCreated: SpecCore.IEntityDate;
  dateUpdated: SpecCore.IEntityDate;
  dateDeleted: SpecCore.IEntityDate | null;
};

export type ICursoInputDto = {
  nome: ICursoModel['nome'];
  nomeAbreviado: ICursoModel['nomeAbreviado'];
  campus: SpecCore.IObjectUuid;
  modalidade: SpecCore.IObjectUuid;
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
export type ICursoFindAllResultDto = SpecCore.IPaginatedResultDto<ICursoFindOneResultDto>;
// =================================================================
export type ICursoCreateDto = ICursoInputDto;
export type ICursoUpdateDto = ICursoFindOneByIdInputDto & Partial<Omit<ICursoInputDto, 'id'>>;
// =================================================================
export type ICursoDeleteOneByIdInputDto = ICursoFindOneByIdInputDto;
// =================================================================

export const CursoDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Curso',

    properties: {
      //

      ...SpecHelpers.GetDeclarationProperties(SpecCore.ObjectUuidDeclarationFactory),

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
          type: SpecCore.ObjectUuidDeclarationFactory,
          description: 'Campus que o curso pertence.',
        },
        output: {
          nullable: false,
          type: CampusDeclarationFactory,
          description: 'Campus que o curso pertence.',
        },
      },

      modalidade: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: SpecCore.ObjectUuidDeclarationFactory,
          description: 'Modalidade a que o curso pertence.',
        },
        output: {
          nullable: false,
          type: ModalidadeDeclarationFactory,
          description: 'Modalidade a que o curso pertence.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: ImagemDeclarationFactory,
        description: 'Imagem de capa do curso.',
      },

      //

      ...SpecHelpers.GetDeclarationProperties(SpecCore.DatedObjectDeclarationFactory),

      //
    },
  };
});

export const CursoInputDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CursoDeclarationFactory);

  return {
    name: 'CursoInput',

    properties: {
      nome: properties.nome,
      nomeAbreviado: properties.nomeAbreviado,
      campus: properties.campus,
      modalidade: properties.modalidade,
    },
  };
});

export const CursoFindOneByIdInputDeclarationFactory = SpecCore.ObjectUuidDeclarationFactory;

export const CursoFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
  const { properties } = SpecHelpers.GetDeclaration(CursoDeclarationFactory);

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
  };
});

export const CursoFindAllResultDeclaration = SpecCore.PaginatedResultDtoDeclarationFactoryBuilder(
  CursoFindOneResultDeclaration,
  'CursoFindAllResult',
);

export const CursoDeleteOneByIdInputDeclarationFactory = SpecCore.ObjectUuidDeclarationFactory;

// =================================================================
