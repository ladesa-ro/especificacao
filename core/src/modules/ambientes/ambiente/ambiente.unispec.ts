import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypeInteger,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common/unispec/types';
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

    imagemCapa: CoverImage(),
  },
});

export const AmbienteView = UniView({
  name: Tokens.Ambiente.Entity,
  description: 'Visão completa de um Ambiente.',
  properties: {
    ...AmbienteEntity.properties,

    bloco: UniTypeReferenceExtends(AmbienteEntity.properties.bloco, {
      targetsTo: Tokens.Bloco.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const AmbienteFindOneInputView = UniView({
  name: Tokens.Ambiente.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Ambiente por ID.',
  properties: { ...UniTypePick(AmbienteView, { id: true }) },
});

export const AmbienteFindOneResultView = UniView({
  name: Tokens.Ambiente.Views.FindOneResult,

  partialOf: Tokens.Ambiente.Entity,
  description: 'Visão FindOne de um Ambiente.',

  properties: {
    ...UniTypePick(AmbienteView, {
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

export const AmbienteInputCreateView = UniView({
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

    bloco: UniTypeReferenceExtends(AmbienteEntity.properties.bloco, {
      targetsTo: Tokens.Bloco.Views.FindOneInput,
    }),
  },
});

export const AmbienteInputUpdateView = UniView({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um ambiente.',
  properties: {
    ...UniTypePartial(AmbienteInputCreateView),
  },
});

export const AmbienteFindAllResult = PaginatedResultView({
  name: Tokens.Ambiente.Views.FindAllResult,
  description: 'Realiza a busca a Ambientes.',
  targetsTo: Tokens.Ambiente.Views.FindOneResult,
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
        view: Tokens.Ambiente.Views.FindAllResult,
        filters: [
          ['bloco.id', ['$eq']],
          ['bloco.campus.id', ['$eq']],
        ],
      },
    },
    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const AmbienteProvider = UniProvider((ctx) => {
  ctx.Add(AmbienteEntity);
  ctx.Add(AmbienteView);
  ctx.Add(AmbienteFindOneInputView);
  ctx.Add(AmbienteFindOneResultView);
  ctx.Add(AmbienteInputCreateView);
  ctx.Add(AmbienteInputUpdateView);
  ctx.Add(AmbienteFindAllResult);
  ctx.Add(AmbienteDeclarator);
});
