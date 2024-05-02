import { IObjectUuid, ObjectUuid } from '../../../core';
import { IDeclaration, PropertyTypes } from '../../../helpers';
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

      modalidade: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: UsuarioFindOneByIdInput,
          description: 'Modalidade do vínculo.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: UsuarioFindOneResult,
          description: 'Modalidade do vínculo.',
        },
      },

      campus: {
        type: PropertyTypes.MIXED,
        input: {
          required: true,
          nullable: false,
          type: CampusFindOneByIdInput as any,
          description: 'Campus do vínculo.',
          validator: ({ custom }) => custom.objectUuid({ nonNullable: true, optional: false }),
        },
        output: {
          required: true,
          nullable: false,
          type: CampusFindOneResult as any,
          description: 'Campus do vínculo.',
        },
      },
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
      campus: {
        ...properties.campus,
        required,
      },
      modalidade: {
        ...properties.modalidade,
        required,
      },
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
