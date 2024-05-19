import { U } from '@unispec/core';
import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import { Tokens } from '../../tokens';

const AmbienteEntity = U.ObjectEntity({
  id: 'uuid',
  dated: true,

  description: 'Ambiente',

  properties: {
    nome: U.String({
      constraints: { minLength: 1 },
      description: 'Nome do ambiente/sala',
    }),

    descricao: U.String({
      constraints: { minLength: 1 },
      description: 'Descrição do ambiente/sala.',
    }),

    codigo: U.String({
      constraints: { minLength: 1 },
      description: 'Código do ambiente/sala.',
    }),

    capacidade: U.Integer({
      nullable: true,
      description: 'Capacidade do ambiente/sala.',
    }),

    tipo: U.String({
      nullable: true,
      constraints: { minLength: 1 },
      description: 'Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.',
    }),

    bloco: U.Reference({
      targetsTo: Tokens.Bloco.Entity,
      description: 'Bloco que o ambiente/sala pertence.',
    }),

    imagemCapa: CoverImage(),
  },
});

export const AmbienteView = U.View({
  name: Tokens.Ambiente.Entity,
  description: 'Visão completa de um Ambiente.',
  properties: {
    ...AmbienteEntity.properties,

    bloco: U.ReferenceExtends(AmbienteEntity.properties.bloco, {
      targetsTo: Tokens.Bloco.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const AmbienteFindOneInputView = U.View({
  name: Tokens.Ambiente.Views.FindOneInput,
  description: 'Dados de entrada para encontrar um Ambiente por ID.',
  properties: { ...U.ObjectPick(AmbienteView, { id: true }) },
});

export const AmbienteFindOneResultView = U.View({
  name: Tokens.Ambiente.Views.FindOneResult,

  partialOf: Tokens.Ambiente.Entity,
  description: 'Visão FindOne de um Ambiente.',

  properties: {
    ...U.ObjectPick(AmbienteView, {
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

export const AmbienteInputCreateView = U.View({
  name: Tokens.Ambiente.Views.InputCreate,
  description: 'Dados de entrada para a criação de um ambiente.',
  properties: {
    ...U.ObjectPick(AmbienteView, {
      nome: true,
      descricao: true,
      codigo: true,
      capacidade: true,
      tipo: true,
    }),

    bloco: U.ReferenceExtends(AmbienteEntity.properties.bloco, {
      targetsTo: Tokens.Bloco.Views.FindOneInput,
    }),
  },
});

export const AmbienteInputUpdateView = U.View({
  name: Tokens.Ambiente.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de um ambiente.',
  properties: {
    ...U.ObjectPartial(AmbienteInputCreateView),
  },
});

export const AmbienteFindAllResult = PaginatedResultView({
  name: Tokens.Ambiente.Views.FindAllResult,
  description: 'Realiza a busca a Ambientes.',
  targetsTo: Tokens.Ambiente.Views.FindOneResult,
});

export const AmbienteDeclarator = U.Declarator({
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

export const AmbienteProvider = U.Provider((ctx) => {
  ctx.Add(AmbienteEntity);
  ctx.Add(AmbienteView);
  ctx.Add(AmbienteFindOneInputView);
  ctx.Add(AmbienteFindOneResultView);
  ctx.Add(AmbienteInputCreateView);
  ctx.Add(AmbienteInputUpdateView);
  ctx.Add(AmbienteFindAllResult);
  ctx.Add(AmbienteDeclarator);
});
