import { CoverImage, CoverImageView, GetCoverImage, PaginatedResultView, SetCoverImage } from '../../-shared';
import {
  UniDeclarator,
  UniProvider,
  UniTypeEntity,
  UniTypePartial,
  UniTypePick,
  UniTypeReference,
  UniTypeReferenceExtends,
  UniTypeString,
  UniView,
} from '../../../common';
import { Tokens } from '../../tokens';

export const TurmaEntity = UniTypeEntity({
  id: 'uuid',
  dated: true,

  description: 'Turma',

  properties: {
    periodo: UniTypeString({
      constraints: { minLength: 1 },
      description: 'Período do Turma.',
    }),

    curso: UniTypeReference({
      targetsTo: Tokens.Curso.Entity,
      description: 'Curso da Turma.',
    }),

    ambientePadraoAula: UniTypeReference({
      nullable: true,
      required: false,
      targetsTo: Tokens.Ambiente.Entity,
      description: 'Ambiente padrão da sala de aula.',
    }),

    imagemCapa: CoverImage(),
  },
});

export const TurmaView = UniView({
  name: Tokens.Turma.Entity,

  default: 'Visão completa de uma Turma',

  properties: {
    ...TurmaEntity.properties,

    curso: UniTypeReferenceExtends(TurmaEntity.properties.curso, {
      targetsTo: Tokens.Curso.Views.FindOneResult,
    }),

    ambientePadraoAula: UniTypeReferenceExtends(TurmaEntity.properties.ambientePadraoAula, {
      targetsTo: Tokens.Ambiente.Views.FindOneResult,
    }),

    imagemCapa: CoverImageView(),
  },
});

export const TurmaFindOneInputView = UniView({
  name: Tokens.Turma.Views.FindOneInput,
  description: 'Dados de entrada para encontrar uma Turma por ID.',
  properties: { ...UniTypePick(TurmaView, { id: true }) },
});

export const TurmaFindOneResultView = UniView({
  name: Tokens.Turma.Views.FindOneResult,

  partialOf: Tokens.Turma.Entity,
  description: 'Visão FindOne de uma Turma.',

  properties: {
    ...UniTypePick(TurmaView, {
      id: true,
      //
      periodo: true,
      //
      curso: true,
      ambientePadraoAula: true,
      imagemCapa: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    }),
  },
});

export const TurmaInputCreateView = UniView({
  name: Tokens.Turma.Views.InputCreate,
  description: 'Dados de entrada para a criação de uma Turma.',
  properties: {
    ...UniTypePick(TurmaView, {
      periodo: true,
    }),

    curso: UniTypeReferenceExtends(TurmaEntity.properties.curso, {
      targetsTo: Tokens.Curso.Views.FindOneInput,
    }),

    ambientePadraoAula: UniTypeReferenceExtends(TurmaEntity.properties.ambientePadraoAula, {
      targetsTo: Tokens.Ambiente.Views.FindOneInput,
    }),
  },
});

export const TurmaInputUpdateView = UniView({
  name: Tokens.Turma.Views.InputUpdate,
  description: 'Dados de entrada para a atualização de uma Turma.',
  properties: {
    ...UniTypePartial(TurmaInputCreateView),
  },
});

export const TurmaFindAllResult = PaginatedResultView({
  name: Tokens.Turma.Views.FindAllResult,
  description: 'Realiza a busca a Turmas.',
  targetsTo: Tokens.Turma.Views.FindOneResult,
});

export const TurmaDeclarator = UniDeclarator({
  entity: Tokens.Turma.Entity,

  operations: {
    crud: {
      findById: {
        input: Tokens.Turma.Views.FindOneInput,
        output: Tokens.Turma.Views.FindOneResult,
      },

      deleteById: Tokens.Turma.Views.FindOneInput,

      create: Tokens.Turma.Views.InputCreate,
      updateById: Tokens.Turma.Views.InputUpdate,

      list: {
        view: Tokens.Turma.Views.FindAllResult,
        filters: [
          ['ambientePadraoAula.nome', ['$eq']],
          ['ambientePadraoAula.codigo', ['$eq']],
          ['ambientePadraoAula.capacidade', ['$eq']],
          ['ambientePadraoAula.tipo', ['$eq']],
          ['curso.nome', ['$eq']],
          ['curso.nomeAbreviado', ['$eq']],
          ['curso.campus.id', ['$eq']],
          ['curso.modalidade.id', ['$eq']],
        ],
      },
    },

    extra: {
      getCoverImage: GetCoverImage(),
      setCoverImage: SetCoverImage(),
    },
  },
});

export const TurmaProvider = UniProvider((ctx) => {
  ctx.Add(TurmaEntity);
  ctx.Add(TurmaView);
  ctx.Add(TurmaFindOneInputView);
  ctx.Add(TurmaFindOneResultView);
  ctx.Add(TurmaInputCreateView);
  ctx.Add(TurmaInputUpdateView);
  ctx.Add(TurmaFindAllResult);
  ctx.Add(TurmaDeclarator);
});
