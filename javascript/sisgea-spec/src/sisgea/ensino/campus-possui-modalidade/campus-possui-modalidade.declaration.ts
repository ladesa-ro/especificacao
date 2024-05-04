import { IObjectUuid, ObjectUuid } from '../../../core';
import { IDeclaration, Mixed, PropertiesRequireness } from '../../../helpers';
import { CampusFindOneByIdInput, CampusFindOneResult, ICampusModel } from '../../ambientes';
import { UsuarioFindOneByIdInput, UsuarioFindOneResult } from '../../autenticacao';
import { IModalidadeModel } from '../modalidade';

export interface ICampusPossuiModalidadeModel {
  //
  id: string;
  //
  campus: ICampusModel;
  modalidade: IModalidadeModel;
  //
}

export interface ICampusPossuiModalidadeCreateInput {
  campus: IObjectUuid;
  modalidade: IObjectUuid;
}

export interface ICampusPossuiModalidadeDeleteOneByIdInput {
  id: string;
}

//

export const CampusPossuiModalidadeFindOneByIdInput = ObjectUuid;

export const CampusPossuiModalidade = () => {
  return {
    name: 'CampusPossuiModalidade',

    properties: {
      ...CampusPossuiModalidadeFindOneByIdInput().properties,

      modalidade: Mixed({
        required: true,
        nullable: false,
        input: UsuarioFindOneResult as any,
        output: UsuarioFindOneByIdInput as any,
        description: 'Modalidade do vínculo.',
        validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
      }),

      campus: Mixed({
        required: true,
        nullable: false,
        input: CampusFindOneByIdInput as any,
        output: CampusFindOneResult as any,
        description: 'Campus do vínculo.',
        validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
      }),
    },
  } satisfies IDeclaration;
};

export const CampusPossuiModalidadeFindOneResult = () => {
  const { properties } = CampusPossuiModalidade();

  return {
    name: 'CampusPossuiModalidadeFindOneResult',
    partialOf: CampusPossuiModalidade as any,

    properties: {
      //
      id: properties.id,
      //
      campus: properties.campus,
      modalidade: properties.modalidade,
      //
    },
  } satisfies IDeclaration;
};

export const CampusPossuiModalidadeInput = (required: boolean) => {
  const { properties } = CampusPossuiModalidade();

  return {
    name: 'CampusPossuiModalidadeInput',

    properties: {
      ...PropertiesRequireness(
        {
          campus: properties.campus,
          modalidade: properties.modalidade,
        },
        required,
      ),
    },
  } satisfies IDeclaration;
};

export const CampusPossuiModalidadeCreate = () => {
  return {
    name: 'CampusPossuiModalidadeCreate',
    properties: {
      ...CampusPossuiModalidadeInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const CampusPossuiModalidadeDeleteOneByIdInput = CampusPossuiModalidadeFindOneByIdInput;
