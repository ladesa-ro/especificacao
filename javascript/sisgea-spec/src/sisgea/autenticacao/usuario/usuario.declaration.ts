import {
  DatedObjectDeclarationFactory,
  IDatedObject,
  IEntityDate,
  IObjectUuid,
  IPaginatedResultDto,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
} from '../../../core';
import { IDeclaration, PropertyTypes } from '../../../helpers';
import { ICampusModel } from '../../ambientes';
import { IImagemFindOneResultDto, IImagemModel, ImagemFindOneResult } from '../../base';
import { IUsuarioVinculoCampusModel } from '../usuario-vinculo-campus';

// =================================================================
export interface IUsuarioModel extends IObjectUuid, IDatedObject {
  //
  id: string;
  //
  nome: string;
  matriculaSiape: string;
  email: string;
  //
  isSuperUser: boolean;
  //
  imagemCapa: IImagemModel | null;
  imagemPerfil: IImagemModel | null;
  //
  vinculosAtivos: IUsuarioVinculoCampusModel[];
  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}
// =================================================================
export interface IUsuarioFindOneByIdInputDto {
  id: IUsuarioModel['id'];
}
// =================================================================
export interface IUsuarioInputDto {
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
}
// =================================================================
export interface IUsuarioFindOneResultDtoVinculoAtivoCampus extends Pick<ICampusModel, 'id' | 'razaoSocial' | 'nomeFantasia'> {}

export interface IUsuarioFindOneResultDtoVinculoAtivo extends Pick<IUsuarioVinculoCampusModel, 'id' | 'cargo' | 'ativo'> {
  campus: IUsuarioFindOneResultDtoVinculoAtivoCampus;
}

export interface IUsuarioFindOneResultDto {
  //
  id: IUsuarioModel['id'];
  //
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
  //
  imagemCapa: IImagemFindOneResultDto | null;
  imagemPerfil: IImagemFindOneResultDto | null;
  //
  vinculosAtivos: IUsuarioFindOneResultDtoVinculoAtivo[];
  //
}

export interface IUsuarioFindAllResultDto extends IPaginatedResultDto<IUsuarioFindOneResultDto> {}
// =================================================================
export interface IUsuarioCreateDto extends IUsuarioInputDto {}

export interface IUsuarioUpdateDto extends IUsuarioFindOneByIdInputDto, Partial<Omit<IUsuarioInputDto, never>> {
  id: IUsuarioModel['id'];
  nome: IUsuarioModel['nome'];
  matriculaSiape: IUsuarioModel['matriculaSiape'];
  email: IUsuarioModel['email'];
}
// =================================================================
export interface IUsuarioDeleteOneByIdInputDto extends IUsuarioFindOneByIdInputDto {}
// =================================================================
export enum ISisgeaSisghaValidationErrorCodeUsuario {
  USUARIO_EMAIL_ALREADY_IN_USE = 'usuario.email.already_in_use',
  USUARIO_MATRICULA_SIAPE_ALREADY_IN_USE = 'usuario.matriculaSiape.already_in_use',
}
// =================================================================

export const UsuarioFindOneByIdInput = ObjectUuid;

export const Usuario = () => {
  return {
    name: 'Usuario',

    properties: {
      ...UsuarioFindOneByIdInput().properties,

      nome: {
        type: PropertyTypes.STRING,
        description: 'Nome do usuário.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      matriculaSiape: {
        type: PropertyTypes.STRING,
        description: 'Matrícula Siape do usuário.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      email: {
        type: PropertyTypes.STRING,
        description: 'E-mail do usuário.',
        nullable: false,
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa do usuário.',
      },

      imagemPerfil: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de perfil do usuário.',
      },

      isSuperUser: {
        nullable: false,
        type: PropertyTypes.BOOLEAN,
        description: 'Indentifica que o usuário é um super usuário.',
      },

      vinculosAtivos: {
        arrayOf: true,
        nullable: false,
        type: ObjectUuid,
        description: 'Vínculos ativos do usuário.',
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const UsuarioFindOneResult = () => {
  const { properties } = Usuario();

  return {
    name: 'UsuarioFindOneResult',
    partialOf: Usuario as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      matriculaSiape: properties.matriculaSiape,
      email: properties.email,
      //
      imagemCapa: properties.imagemCapa,
      imagemPerfil: properties.imagemPerfil,
      //
      isSuperUser: properties.isSuperUser,
      //
      vinculosAtivos: properties.vinculosAtivos,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
};

export const UsuarioFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(UsuarioFindOneResult, 'UsuarioFindAllResult');

export const UsuarioInput = (required: boolean) => {
  const { properties } = Usuario();

  return {
    name: 'UsuarioInput',
    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      matriculaSiape: {
        ...properties.matriculaSiape,
        required,
      },
      email: {
        ...properties.email,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const UsuarioUpdate = () => {
  return {
    name: 'UsuarioUpdate',
    properties: {
      ...UsuarioFindOneByIdInput().properties,
      ...UsuarioInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const UsuarioCreate = () => {
  return {
    name: 'UsuarioCreate',
    properties: {
      ...UsuarioInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const UsuarioDeleteOneByIdInput = UsuarioFindOneByIdInput;

// =================================================================
