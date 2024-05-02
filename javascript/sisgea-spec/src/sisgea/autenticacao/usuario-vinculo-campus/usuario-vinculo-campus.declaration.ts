import {
  DatedObjectDeclarationFactory,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '../../../core';
import { IDeclaration, PropertyTypes } from '../../../helpers';
import { CampusFindOneByIdInput, CampusFindOneResult, ICampusFindOneResultDto, ICampusModel } from '../../ambientes';
import { IUsuarioFindOneResultDto, IUsuarioModel, UsuarioFindOneByIdInput, UsuarioFindOneResult } from '../usuario/usuario.declaration';

// =================================================================
export interface IUsuarioVinculoCampusModel {
  //
  id: string;
  //
  ativo: boolean;
  cargo: string;
  //
  campus: ICampusModel;
  usuario: IUsuarioModel;
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}
// =================================================================
export interface IUsuarioVinculoCampusFindOneByIdInputDto {
  id: IUsuarioVinculoCampusModel['id'];
}

export interface IUsuarioVinculoCampusFindOneResultDto {
  //
  id: IUsuarioVinculoCampusModel['id'];
  //
  ativo: IUsuarioVinculoCampusModel['ativo'];
  cargo: IUsuarioVinculoCampusModel['cargo'];
  //
  usuario: IUsuarioFindOneResultDto;
  campus: ICampusFindOneResultDto;
}

export interface IUsuarioVinculoCampusFindAllResultDto extends IPaginatedResultDto<IUsuarioVinculoCampusFindOneResultDto> {}
// =================================================================
export interface IUsuarioVinculoCampusListByUsuarioAndCampusInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;
}
// =================================================================
export interface IUsuarioVinculoCampusSetVinculosInputDto {
  campus: IObjectUuid;
  usuario: IObjectUuid;
  //
  cargos: string[];
}
// =======================================================================

export const UsuarioVinculoCampusFindOneByIdInput = ObjectUuid;

export const UsuarioVinculoCampus = () => {
  return {
    name: 'UsuarioVinculoCampus',

    properties: {
      ...UsuarioVinculoCampusFindOneByIdInput().properties,

      ativo: {
        nullable: false,
        type: PropertyTypes.BOOLEAN,
        description: 'Situação do vínculo.',
        validator: ({ yup }) => yup.bool(),
      },

      cargo: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Cargo do vínculo.',
        validator: ({ custom }) => custom.string().oneOf(['dape', 'professor']).required().nonNullable(),
      },

      usuario: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: UsuarioFindOneByIdInput,
          description: 'Usuário do vínculo.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: UsuarioFindOneResult,
          description: 'Usuário do vínculo.',
        },
      },

      campus: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: CampusFindOneByIdInput,
          description: 'Campus do vínculo.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: CampusFindOneResult,
          description: 'Campus do vínculo.',
        },
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const UsuarioVinculoCampusFindOneResult = () => {
  const { properties } = UsuarioVinculoCampus();

  return {
    name: 'UsuarioVinculoCampusFindOneResult',
    partialOf: UsuarioVinculoCampus as any,

    properties: {
      id: properties.id,
      //
      ativo: properties.ativo,
      cargo: properties.cargo,
      usuario: properties.usuario,
      campus: properties.campus,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  } satisfies IDeclaration;
};

export const UsuarioVinculoCampusFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(
  UsuarioVinculoCampusFindOneResult,
  'UsuarioVinculoCampusFindAllResult',
);
