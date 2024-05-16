import { PaginatedResultView } from '../../-shared';
import {
  UniDeclarator,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
import { Tokens } from '../../tokens';

const ReservaEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  properties: {
    situacao: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Situação da reserva.',
    }),

    motivo: UniTypeString({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Motivo da reserva.',
    }),

    tipo: UniTypeString({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Definir tipo da reserva.',
    }),

    dataInicio: UniTypeString({
      nullable: false,
      format: 'date-time',
      description: 'Data e hora de início da reserva.',
    }),

    dataTermino: UniTypeString({
      nullable: true,
      format: 'date',
      description: 'Data e hora de término da reserva.',
    }),

    //

    usuario: UniTypeReference({
      targetsTo: Tokens.Usuario.Entity,
      description: 'Usuário que fez a reserva.',
    }),

    ambiente: UniTypeReference({
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente que foi reservado.',
    }),
  },
});

export const ReservaView = UniView({
  name: Tokens.Reserva.Entity,
  description: 'Visão completa de uma Reserva.',
  properties: {
    ...ReservaEntity.properties,

    usuario: UniTypeReferenceExtends(ReservaEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneResult,
    }),

    ambiente: UniTypeReferenceExtends(ReservaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),
  },
});

export const ReservaFindOneInputView = UniView({
  name: Tokens.Reserva.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Reserva por ID.',
  properties: { ...UniTypePick(ReservaView, { id: true }) },
});

export const ReservaFindOneResultView = UniView({
  name: Tokens.Reserva.Views.FindOneResult,

  partialOf: Tokens.Reserva.Entity,
  description: 'Visão FindOne de um Reserva.',

  properties: {
    ...UniTypePick(ReservaView, {
      id: true,
      //
      situacao: true,
      motivo: true,
      tipo: true,
      dataInicio: true,
      dataTermino: true,
      //
      usuario: true,
      ambiente: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const ReservaInputCreateView = UniView({
  name: Tokens.Reserva.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Reserva.',
  properties: {
    ...UniTypePick(ReservaView, {
      situacao: true,
      motivo: true,
      tipo: true,
      dataInicio: true,
      dataTermino: true,
    }),

    usuario: UniTypeReferenceExtends(ReservaEntity.properties.usuario, {
      targetsTo: Tokens.Usuario.Views.FindOneInput,
    }),

    ambiente: UniTypeReferenceExtends(ReservaEntity.properties.ambiente, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const ReservaInputUpdateView = UniView({
  name: Tokens.Reserva.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Reserva.',
  properties: {
    ...UniTypePartial(ReservaInputCreateView),
  },
});

export const ReservaFindAllResult = PaginatedResultView({
  name: Tokens.Reserva.Views.FindAllResult,
  description: 'Realiza a busca a Reservas.',
  targetsTo: Tokens.Reserva.Views.FindOneResult,
});

export const ReservaDeclarator = UniDeclarator({
  entity: Tokens.Reserva.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Reserva.Views.FindOneInput,
        output: Tokens.Reserva.Views.FindOneResult,
      },

      deleteById: Tokens.Reserva.Views.FindOneInput,

      create: Tokens.Reserva.Views.InputCreate,
      updateById: Tokens.Reserva.Views.InputUpdate,

      list: {
        view: Tokens.Reserva.Views.FindAllResult,
        filters: [],
      },
    },
  },
});
