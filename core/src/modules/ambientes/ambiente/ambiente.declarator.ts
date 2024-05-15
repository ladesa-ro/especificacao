import {
  UniDeclarator,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeString,
  UniTypeView,
} from '../../../common/unispec/types';
import { GetImagemCapa, ImagemCapa, SetImagemCapa } from '../../../generic';
import { Tokens } from '../../tokens';

const AmbienteEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Ambiente',

  properties: {
    nome: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Nome do ambiente/sala',
    }),

    descricao: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Descrição do ambiente/sala.',
    }),

    codigo: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Código do ambiente/sala.',
    }),

    capacidade: UniTypeInteger({
      nullable: true,
      description: 'Capacidade do ambiente/sala.',
    }),

    tipo: UniTypeString({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.',
    }),

    bloco: UniTypeReference({
      targetsTo: Tokens.Bloco.Entity,
      description: 'Bloco que o ambiente/sala pertence.',
    }),

    imagemCapa: ImagemCapa(),
  },
});

export const AmbienteView = UniTypeView({
  name: Tokens.Ambiente.Entity,
  description: 'Visão completa de um Ambiente.',
  properties: AmbienteEntity.properties,
});

export const AmbienteFindOneInputView = UniTypeView({
  name: Tokens.Ambiente.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Ambiente por ID.',
  properties: { ...UniTypePick(AmbienteEntity, { id: true }) },
});

export const AmbienteFindOneResultView = UniTypeView({
  name: Tokens.Ambiente.Views.FindOneResult,

  partialOf: Tokens.Ambiente.Entity,
  description: 'Visão FindOne de um Ambiente.',

  properties: {
    ...UniTypePick(AmbienteEntity, {
      id: true,
      //
      nome: true,
      descricao: true,
      codigo: true,
      capacidade: true,
      tipo: true,
      //
      bloco: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const AmbienteInputCreateView = UniTypeView({
  name: Tokens.Ambiente.Views.InputCreate,
  description: 'Dados de entrada para a criação de um ambiente.',
  properties: {
    ...UniTypePick(AmbienteView, {
      nome: true,
      descricao: true,
      codigo: true,
      capacidade: true,
      tipo: true,
    }),

    bloco: UniTypeReference({
      targetsTo: Tokens.Bloco.Views.FindOneInput,
      description: 'Bloco que o ambiente/sala pertence.',
    }),
  },
});

export const AmbienteInputUpdateView = UniTypeView({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um ambiente.',
  properties: {
    ...UniTypePartial(AmbienteInputCreateView),
  },
});

export const AmbienteDeclarator = UniDeclarator({
  entity: Tokens.Ambiente.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Ambiente.Views.FindOneInput,
        output: Tokens.Ambiente.Views.FindOneResult,
      },

      deleteById: Tokens.Ambiente.Views.FindOneInput,

      create: Tokens.Ambiente.Views.InputCreate,
      updateById: Tokens.Ambiente.Views.InputUpdate,

      list: {
        view: Tokens.Ambiente.Views.FindOneResult,
        filters: [
          ['bloco.id', ['$eq']],
          ['bloco.campus.id', ['$eq']],
        ],
      },
    },
    extra: {
      getImagemCapa: GetImagemCapa(),
      setImagemCapa: SetImagemCapa(),
    },
  },
});
