export const Nodes: readonly any[] = [
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do curso.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado do curso.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "campus", "ofertaFormacao", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um Curso.",
    "x-unispec-entity-partial-of": "CursoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Bloco",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/uuid.json",
    type: "string",
    format: "uuid",
    description: "Identificador Único Universal.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/BlocoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "string",
        minLength: 1,
        description: "Situação da reserva.",
      },
      motivo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Motivo da reserva.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Tipo da reserva.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora de início da reserva.",
      },
      dataTermino: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora de término da reserva.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "situacao",
      "motivo",
      "tipo",
      "dataInicio",
      "dataTermino",
      "usuario",
      "ambiente",
      "intervaloDeTempo",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de uma Reserva.",
    "x-unispec-entity-partial-of": "ReservaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "NivelDeFormacaoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GenericSearchInputView.json",
    type: "object",
    properties: {
      page: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        default: 1,
        minimum: 1,
        description: "Página de consulta.",
      },
      limit: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        minimum: 1,
        description: "Limite da quantidade de resultados por página.",
      },
      search: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Busca textual.",
      },
      sortBy: {
        type: "array",
        items: {
          type: "string",
        },
        description: "Ordenação.",
      },
    },
    required: ["sortBy"],
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "SearchInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial do estado.",
      },
      sigla: {
        type: "string",
        description: "Sigla do estado.",
        "x-unispec-constraint-estado-sigla": true,
      },
    },
    required: ["id", "nome", "sigla"],
    description: "Visão completa de um estado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EstadoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacaoNivelFormacao",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoNivelFormacaoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.perfil.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.perfil.id",
                "x-unispec-gql-key": "filterPerfilId",
              },
              "filter.diario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.diario.id",
                "x-unispec-gql-key": "filterDiarioId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioProfessorList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "ofertaFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma oferta de formação.",
    "x-unispec-entity-partial-of": "OfertaFormacaoNivelFormacaoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioInputUpdateView.json",
    type: "object",
    properties: {
      ativo: {
        type: "boolean",
      },
      calendarioLetivo: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneInputView.json",
      },
      disciplina: {
        $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneInputView.json",
      },
      ambientePadrao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    description: "Dados de entrada para a atualização de um diário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidade.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/Disponibilidade.json",
        description: "Disponibilidade.",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/Turma.json",
        description: "Turma.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "disponibilidade", "turma", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "TurmaDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidade",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da oferta de formação.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da oferta de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma oferta de formação.",
    "x-unispec-entity-partial-of": "OfertaFormacaoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "DiaCalendario",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um DiaCalendario por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/numeric_id.json",
                description: "Identificador do registro (numérico).",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EstadoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EstadoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Aula",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Aula por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Diario",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um diário por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca de HorariosGerados.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a campi.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/AulaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Aulas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoSetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Curso",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do Bloco.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do Bloco.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
    },
    required: ["nome", "codigo", "campus"],
    description: "Dados de entrada para a criação de um bloco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Ambiente",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Turmas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
    type: "object",
    properties: {
      first: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      previous: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      current: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      next: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      last: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["first", "previous", "current", "next", "last"],
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedResultLinksView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido do nível de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de um nível de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca de DiarioPreferenciaAgrupamentos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioGetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacao",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Perfil",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um Vínculo por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PerfilFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioInputCreateView.json",
    type: "object",
    properties: {
      ativo: {
        type: "boolean",
      },
      calendarioLetivo: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneInputView.json",
      },
      disciplina: {
        $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneInputView.json",
      },
      ambientePadrao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["ativo", "calendarioLetivo", "turma", "disciplina", "ambientePadrao"],
    description: "Dados de entrada para a criação de um diário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacao.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da oferta de formação.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da oferta de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "OfertaFormacao.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacao",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disciplina",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Início da vigência da preferência de agrupamento.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência da preferência de agrupamento.",
      },
      diaSemanaIso: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Dia da semana.",
      },
      aulasSeguidas: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Quantidade de aulas seguidas.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "dataInicio",
      "dataFim",
      "diaSemanaIso",
      "aulasSeguidas",
      "intervaloDeTempo",
      "diario",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um DiarioPreferenciaAgrupamento.",
    "x-unispec-entity-partial-of": "DiarioPreferenciaAgrupamento",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      nivelFormcao: {
        $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
      },
    },
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "ofertaFormacao", "nivelFormcao"],
    description: "Visão completa de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/EtapaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EtapaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EtapaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Bloco.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do Bloco.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do Bloco.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/Campus.json",
        description: "Campus.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa.",
      },
      ambientes: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/Ambiente.json",
        },
        description: "Ambientes.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "codigo", "campus", "imagemCapa", "ambientes", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Bloco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Bloco",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView.json",
    type: "object",
    properties: {
      gradeHorarioOfertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneInputView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
    },
    required: ["gradeHorarioOfertaFormacao", "intervaloDeTempo"],
    description: "Dados de entrada para a criação de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioProfessorCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGerado",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteSetCoverImage.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Ambiente",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioPreferenciaAgrupamentoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodo: {
        type: "string",
        minLength: 1,
        description: "Período da Turma.",
      },
      curso: {
        $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
      },
      ambientePadraoAula: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "periodo", "curso", "ambientePadraoAula", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma Turma.",
    "x-unispec-entity-partial-of": "TurmaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Cidade.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial da cidade.",
      },
      estado: {
        $ref: "ladesa://schemas/v3/generics/Estado.json",
        description: "Estado da cidade",
      },
    },
    required: ["id", "nome", "estado"],
    description: "Cidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Cidade",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Bloco",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "ProfessorDisponibilidade",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma ProfessorDisponibilidade por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ModalidadeFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Modalidades.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/CidadeFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a cidades.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CidadeListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      numero: {
        anyOf: [
          {
            type: "integer",
            minimum: 0,
            maximum: 255,
          },
          {
            type: "null",
          },
        ],
        description: "Número da etapa.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataTermino: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de término.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da etapa.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "numero", "dataInicio", "dataTermino", "cor", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma Etapa.",
    "x-unispec-entity-partial-of": "EtapaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoGetCoverImage.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Bloco",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a CalendarioLetivos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessor.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "boolean",
        description: "Situação do vínculo.",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/Perfil.json",
        description: "Perfil do usuário ao campus.",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/Diario.json",
        description: "Diário vinculado.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "situacao", "perfil", "diario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "DiarioProfessor.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessor",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDia.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de tempo.",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/Disponibilidade.json",
        description: "Disponibilidade.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "rrule", "intervaloDeTempo", "disponibilidade", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "DisponibilidadeDia.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDia",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioProfessor",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioProfessorUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaSetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Turma",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do curso.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado do curso.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um Curso.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "ProfessorDisponibilidade",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ProfessorDisponibilidadeUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Etapa",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EtapaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeInputUpdateView.json",
    type: "object",
    properties: {
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da modalidade.",
      },
    },
    description: "Dados de entrada para a atualização de uma modalidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidade.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/Disponibilidade.json",
        description: "Disponibilidade.",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/Perfil.json",
        description: "Professor.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "disponibilidade", "perfil", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "ProfessorDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidade",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula gerada.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diarioProfessor: {
        $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
      },
      horarioGerado: {
        $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
      },
    },
    required: ["id", "data", "intervaloDeTempo", "diarioProfessor", "horarioGerado"],
    description: "Visão FindOne de um HorarioGeradoAula.",
    "x-unispec-entity-partial-of": "HorarioGeradoAula",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Disponibilidade",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Disponibilidade por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Evento.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do evento.",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da Evento.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
        description: "Calendario.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "rrule", "cor", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Evento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Evento",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "campus", "ofertaFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma oferta de formação.",
    "x-unispec-entity-partial-of": "GradeHorarioOfertaFormacaoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DisponibilidadeDia",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDiaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Usuario",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um Usuário por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/AmbienteInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoInputUpdateView.json",
    type: "object",
    properties: {
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Curso",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Diario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioProfessor",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioProfessorFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeInputCreateView.json",
    type: "object",
    properties: {
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["dataInicio", "dataFim"],
    description: "Dados de entrada para a criação de uma Disponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "HorarioGeradoAula",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um HorarioGeradoAula por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do Bloco.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do Bloco.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "codigo", "campus", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um bloco.",
    "x-unispec-entity-partial-of": "BlocoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do curso.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado do curso.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    required: ["nome", "nomeAbreviado", "campus", "ofertaFormacao"],
    description: "Dados de entrada para a criação de um Curso.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "NivelDeFormacao",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "NivelDeFormacaoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaInputCreateView.json",
    type: "object",
    properties: {
      numero: {
        anyOf: [
          {
            type: "integer",
            minimum: 0,
            maximum: 255,
          },
          {
            type: "null",
          },
        ],
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      dataTermino: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    required: ["numero", "dataInicio", "dataTermino", "cor", "calendario"],
    description: "Dados de entrada para a criação de uma Etapa.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAula.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula gerada.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de tempo.",
      },
      diarioProfessor: {
        $ref: "ladesa://schemas/v3/generics/DiarioProfessor.json",
        description: "Vínculo de diário e professor.",
      },
      horarioGerado: {
        $ref: "ladesa://schemas/v3/generics/HorarioGerado.json",
        description: "Horário ao qual a aula pertence.",
      },
    },
    required: ["id", "data", "intervaloDeTempo", "diarioProfessor", "horarioGerado"],
    description: "HorarioGeradoAula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAula",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaInputCreateView.json",
    type: "object",
    properties: {
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
    },
    required: ["rrule", "intervaloDeTempo", "disponibilidade"],
    description: "Dados de entrada para a criação de um DisponibilidadeDia.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DiaCalendarioFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a DiaCalendarios.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoInputUpdateView.json",
    type: "object",
    properties: {
      status: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Status do horário gerado.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do horário gerado.",
      },
      dataGeracao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data em que o horário foi gerado.",
      },
      vigenciaInicio: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Início da vigência do horário gerado.",
      },
      vigenciaFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência do horário gerado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um HorarioGerado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacaoIntervaloDeTempo",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "NivelDeFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "NivelDeFormacaoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              filter_professor_id: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  {
                    type: "null",
                  },
                ],
                "x-unispec-http-key": "filter.perfil.id",
                "x-unispec-gql-key": "filterPerfilId",
              },
            },
            required: ["filter_professor_id"],
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ProfessorDisponibilidadeList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
    type: "object",
    properties: {
      itemsPerPage: {
        type: "integer",
        description: "Quantidade de itens por página.",
      },
      totalItems: {
        type: "integer",
        description: "Total de itens.",
      },
      currentPage: {
        type: "integer",
        description: "Página atual.",
      },
      totalPages: {
        type: "integer",
        description: "Quantidade total de páginas.",
      },
      search: {
        type: "string",
        description: "Termo textual da busca.",
      },
      sortBy: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PaginationSortByView.json",
        },
        description: "Ordenação.",
      },
      filter: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PaginationFilterView.json",
        },
        description: "Filtros.",
      },
    },
    required: ["itemsPerPage", "totalItems", "currentPage", "totalPages", "search", "sortBy", "filter"],
    description: "Metadados dos resultados de busca.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedResultMetaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacao",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusInputUpdateView.json",
    type: "object",
    properties: {
      nomeFantasia: {
        type: "string",
        minLength: 1,
        description: "Nome fantasia do campus.",
      },
      razaoSocial: {
        type: "string",
        minLength: 1,
        description: "Razão social do campus.",
      },
      apelido: {
        type: "string",
        minLength: 1,
        description: "Apelido do campus.",
      },
      cnpj: {
        type: "string",
        minLength: 1,
        description: "CNPJ do campus.",
      },
      endereco: {
        $ref: "ladesa://schemas/v3/generics/EnderecoInput.json",
      },
    },
    description: "Dados de entrada para a atualização de um campus.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioSetCoverImageOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Diario",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Diarios.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaInputUpdateView.json",
    type: "object",
    properties: {
      numero: {
        anyOf: [
          {
            type: "integer",
            minimum: 0,
            maximum: 255,
          },
          {
            type: "null",
          },
        ],
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      dataTermino: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma Etapa.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/CampusInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Operação de criação de um campus.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        format: "email",
        description: "E-mail do usuário.",
      },
    },
    description: "Dados de entrada para a atualização de um Usuário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      status: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Status do horário gerado.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do horário gerado.",
      },
      dataGeracao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data em que o horário foi gerado.",
      },
      vigenciaInicio: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Início da vigência do horário gerado.",
      },
      vigenciaFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência do horário gerado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "status",
      "tipo",
      "dataGeracao",
      "vigenciaInicio",
      "vigenciaFim",
      "calendario",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um HorarioGerado.",
    "x-unispec-entity-partial-of": "HorarioGerado",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial da cidade.",
      },
      estado: {
        $ref: "ladesa://schemas/v3/generics/EstadoFindOneResultView.json",
      },
    },
    required: ["id", "nome", "estado"],
    description: "Visão FindOne de uma cidade.",
    "x-unispec-entity-partial-of": "CidadeView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CidadeFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EnderecoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      cep: {
        type: "string",
        description: "Código postal (CEP).",
        "x-unispec-constraint-cep": true,
      },
      logradouro: {
        type: "string",
        description: "Logradouro.",
      },
      numero: {
        type: "integer",
        minimum: 0,
        maximum: 99999,
        description: "Número.",
      },
      bairro: {
        type: "string",
        description: "Bairro.",
      },
      complemento: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Complemento.",
      },
      pontoReferencia: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Ponto de referência.",
      },
      cidade: {
        $ref: "ladesa://schemas/v3/generics/CidadeFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "cep",
      "logradouro",
      "numero",
      "bairro",
      "complemento",
      "pontoReferencia",
      "cidade",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um endereço.",
    "x-unispec-entity-partial-of": "EnderecoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EnderecoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "DisponibilidadeDia",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um DisponibilidadeDia por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Modalidade",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ModalidadeUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      status: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Status do horário gerado.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do horário gerado.",
      },
      dataGeracao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data em que o horário foi gerado.",
      },
      vigenciaInicio: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Início da vigência do horário gerado.",
      },
      vigenciaFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência do horário gerado.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
    },
    required: [
      "id",
      "status",
      "tipo",
      "dataGeracao",
      "vigenciaInicio",
      "vigenciaFim",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "calendario",
    ],
    description: "Visão completa de um HorarioGerado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoInputUpdateView.json",
    type: "object",
    properties: {
      diaSemanaIso: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Dia da semana.",
      },
      aulasSeguidas: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Quantidade de aulas seguidas.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Início da vigência da preferência de agrupamento.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência da preferência de agrupamento.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um DiarioPreferenciaAgrupamento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioSetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ArquivoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      name: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do arquivo.",
      },
      mimeType: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Tamanho do arquivo (em bytes).",
      },
      storageType: {
        type: "string",
        description: "Estratégia de armazenamento do conteúdo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "name", "mimeType", "sizeBytes", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de um arquivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ArquivoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "TurmaDisponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDisponibilidadeFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/ReservaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ReservaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ReservaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.estado.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.estado.id",
                "x-unispec-gql-key": "filterEstadoId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CidadeListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CidadeList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDiaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ArquivoGetFileOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              nomeRecurso: {
                type: "string",
                description: "Acesso via recurso: nome.",
              },
              idRecurso: {
                type: "string",
                description: "Acesso via recurso: id.",
              },
            },
            required: ["nomeRecurso", "idRecurso"],
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário do Arquivo.",
            mimeTypes: ["application/octet-stream"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Obtêm o conteúdo de um Arquivo.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ArquivoGetFile",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
    },
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "campus", "ofertaFormacao"],
    description: "Visão completa de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.diario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.diario.id",
                "x-unispec-gql-key": "filterDiarioId",
              },
              "filter.ambiente.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambiente.id",
                "x-unispec-gql-key": "filterAmbienteId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AulaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AulaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do evento.",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da Evento.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
    },
    required: ["id", "nome", "rrule", "cor", "dateCreated", "dateUpdated", "dateDeleted", "calendario"],
    description: "Visão completa de um Evento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      rrule: {
        type: "string",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um Evento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "TurmaDisponibilidade",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDisponibilidadeUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "ProfessorDisponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ProfessorDisponibilidadeFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorInputCreateView.json",
    type: "object",
    properties: {
      situacao: {
        type: "boolean",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
    },
    required: ["situacao", "perfil", "diario"],
    description: "Dados de entrada para a criação de um DiarioProfessor.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaGetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Turma",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "disponibilidade", "perfil", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma ProfessorDisponibilidade.",
    "x-unispec-entity-partial-of": "ProfessorDisponibilidade",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodoInicio: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo inicia.",
      },
      periodoFim: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo termina.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "periodoInicio", "periodoFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um Intervalo de Tempo.",
    "x-unispec-entity-partial-of": "IntervaloDeTempoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "IntervaloDeTempoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeInputUpdateView.json",
    type: "object",
    properties: {
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma TurmaDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.campus.id",
                "x-unispec-gql-key": "filterCampusId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/BlocoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaSetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disciplina",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Diario",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        format: "email",
        description: "E-mail do usuário.",
      },
      isSuperUser: {
        type: "boolean",
        description: "Diz que o usuário tem poderes de administrador.",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      imagemPerfil: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "nome",
      "matriculaSiape",
      "email",
      "isSuperUser",
      "imagemCapa",
      "imagemPerfil",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um Usuário.",
    "x-unispec-entity-partial-of": "UsuarioView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a ambientes.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      rrule: {
        type: "string",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    required: ["nome", "rrule", "cor", "calendario"],
    description: "Dados de entrada para a criação de um Evento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamento.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Início da vigência da preferência de agrupamento.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência da preferência de agrupamento.",
      },
      diaSemanaIso: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Dia da semana.",
      },
      aulasSeguidas: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Quantidade de aulas seguidas.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de tempo.",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/Diario.json",
        description: "Diário vinculado.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "dataInicio",
      "dataFim",
      "diaSemanaIso",
      "aulasSeguidas",
      "intervaloDeTempo",
      "diario",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "DiarioPreferenciaAgrupamento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamento",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Ambiente",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/AmbienteInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.calendario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.calendario.id",
                "x-unispec-gql-key": "filterCalendarioId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EventoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EventoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Modalidade.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da modalidade.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da modalidade.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Modalidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Modalidade",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/sort_by_constraint.json",
    type: "string",
    pattern: "^[\\D\\.]+:(ASC|DESC)$",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DisponibilidadeDia",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDiaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do curso.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado do curso.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "dateCreated", "dateUpdated", "dateDeleted", "campus", "ofertaFormacao", "imagemCapa"],
    description: "Visão completa de um Curso.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeInputCreateView.json",
    type: "object",
    properties: {
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneInputView.json",
      },
    },
    required: ["disponibilidade", "turma"],
    description: "Dados de entrada para a criação de uma TurmaDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Modalidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ModalidadeDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Etapa",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Etapa por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da modalidade.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da modalidade.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de uma modalidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ModalidadeList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Arquivo.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      name: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do arquivo.",
      },
      mimeType: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Tamanho do arquivo (em bytes).",
      },
      storageType: {
        type: "string",
        description: "Estratégia de armazenamento do conteúdo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "name", "mimeType", "sizeBytes", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Arquivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Arquivo",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusDeleteOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Campus",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiaCalendario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiaCalendarioDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        description: "Nome do calendário letivo.",
      },
      ano: {
        type: "integer",
        minimum: 0,
        maximum: 65535,
        description: "Ano do calendário letivo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "ano", "campus", "ofertaFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um calendário letivo.",
    "x-unispec-entity-partial-of": "CalendarioLetivoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaInputUpdateView.json",
    type: "object",
    properties: {
      situacao: {
        type: "string",
        minLength: 1,
        description: "Situação da reserva.",
      },
      motivo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Motivo da reserva.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Tipo da reserva.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora de início da reserva.",
      },
      dataTermino: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora de término da reserva.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneInputView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma Reserva.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ModalidadeCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "TurmaDisponibilidade",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma TurmaDisponibilidade por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/UsuarioInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Curso",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um Curso por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/EstadoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a estados.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EstadoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data de término.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "dataInicio", "dataFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma Disponibilidade.",
    "x-unispec-entity-partial-of": "Disponibilidade",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "OfertaFormacaoNivelFormacao",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma oferta de formação por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        format: "email",
        description: "E-mail do usuário.",
      },
      isSuperUser: {
        type: "boolean",
        description: "Diz que o usuário tem poderes de administrador.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      imagemPerfil: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: [
      "id",
      "nome",
      "matriculaSiape",
      "email",
      "isSuperUser",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "imagemCapa",
      "imagemPerfil",
    ],
    description: "Visão completa de um Usuário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "NivelDeFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "NivelDeFormacaoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do evento.",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da Evento.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "rrule", "cor", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um Evento.",
    "x-unispec-entity-partial-of": "EventoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição do ambiente/sala.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do ambiente/sala.",
      },
      capacidade: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Capacidade do ambiente/sala.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      },
      bloco: {
        $ref: "ladesa://schemas/v3/generics/BlocoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDisponibilidadeCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Indica se o vínculo está ativo.",
      },
      cargo: {
        type: "string",
        description: "Cargo do usuário no vínculo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "ativo", "cargo", "campus", "usuario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um Vínculo.",
    "x-unispec-entity-partial-of": "PerfilView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PerfilFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um estado por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EstadoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeInputUpdateView.json",
    type: "object",
    properties: {
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma ProfessorDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do Bloco.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do Bloco.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um bloco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthCredentialsSetInitialPasswordInputView.json",
    type: "object",
    properties: {
      matriculaSiape: {
        type: "string",
        description: "Matrícula SIAPE.",
      },
      senha: {
        type: "string",
        description: "Nova senha.",
      },
    },
    required: ["matriculaSiape", "senha"],
    description: "Dados de entrada para definir a senha inicial.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AuthSetInitialPasswordInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGeradoAula",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoAulaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EstadoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EstadoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoAulaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Campus.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nomeFantasia: {
        type: "string",
        minLength: 1,
        description: "Nome fantasia do campus.",
      },
      razaoSocial: {
        type: "string",
        minLength: 1,
        description: "Razão social do campus.",
      },
      apelido: {
        type: "string",
        minLength: 1,
        description: "Apelido do campus.",
      },
      cnpj: {
        type: "string",
        minLength: 1,
        description: "CNPJ do campus.",
      },
      endereco: {
        $ref: "ladesa://schemas/v3/generics/Endereco.json",
        description: "Endereço do campus",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nomeFantasia", "razaoSocial", "apelido", "cnpj", "endereco", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Campus.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Campus",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Aula.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula.",
      },
      modalidade: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Modalidade da aula.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de Tempo associado à aula.",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/Diario.json",
        description: "Diário associado à aula.",
      },
      ambiente: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Ambiente.json",
          },
          {
            type: "null",
          },
        ],
        description: "Ambiente associado à aula.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "data", "modalidade", "intervaloDeTempo", "diario", "ambiente", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Aula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Aula",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Indica se o vínculo está ativo.",
      },
      cargo: {
        type: "string",
        description: "Cargo do usuário no vínculo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
      },
    },
    required: ["id", "ativo", "cargo", "dateCreated", "dateUpdated", "dateDeleted", "campus", "usuario"],
    description: "Visão completa de um Vínculo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PerfilView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              filterAtivo: {
                type: "array",
                items: {
                  type: "string",
                },
              },
              "filter.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.campus.id",
                "x-unispec-gql-key": "filterCampusId",
              },
              "filter.usuario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.usuario.id",
                "x-unispec-gql-key": "filterUsuarioId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/PerfilListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "PerfilList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição da imagem.",
      },
      versoes: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ImagemArquivoFindOneFromImagemResultView.json",
        },
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "descricao", "versoes", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma imagem.",
    "x-unispec-entity-partial-of": "ImagemView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaInputUpdateView.json",
    type: "object",
    properties: {
      periodo: {
        type: "string",
        minLength: 1,
        description: "Período da Turma.",
      },
      curso: {
        $ref: "ladesa://schemas/v3/generics/CursoFindOneInputView.json",
      },
      ambientePadraoAula: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma Turma.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Reserva",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Reserva por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      gradeHorarioOfertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "gradeHorarioOfertaFormacao", "intervaloDeTempo", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma oferta de formação.",
    "x-unispec-entity-partial-of": "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Imagem.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição da imagem.",
      },
      versoes: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ImagemArquivo.json",
        },
        description: "Versões da imagem.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "descricao", "versoes", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Imagem.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Imagem",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Evento",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um Evento por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioPreferenciaAgrupamento",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioPreferenciaAgrupamentoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Curso",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Tokens.json",
    type: "string",
    enum: [
      "SearchInputView",
      "PaginatedSortByView",
      "PaginatedFilterView",
      "PaginatedInputView",
      "PaginatedInputBaseView",
      "PaginatedResultMetaView",
      "PaginatedResultLinksView",
      "PaginatedResultView",
      "Arquivo",
      "ArquivoView",
      "ArquivoFindOneInputView",
      "ArquivoFindOneResultView",
      "ArquivoGetFile",
      "Usuario",
      "UsuarioView",
      "UsuarioFindOneInputView",
      "UsuarioFindOneResultView",
      "UsuarioListResultView",
      "UsuarioInputCreateView",
      "UsuarioInputUpdateView",
      "UsuarioFindOneById",
      "UsuarioDeleteOneById",
      "UsuarioList",
      "UsuarioCreate",
      "UsuarioUpdateOneById",
      "UsuarioGetImagemCapa",
      "UsuarioSetImagemCapa",
      "UsuarioGetImagemPerfil",
      "UsuarioSetImagemPerfil",
      "AuthLoginInputView",
      "AuthWhoAmIInputView",
      "AuthRefreshInputView",
      "AuthSessionCredentialsView",
      "AuthSetInitialPasswordInputView",
      "AuthLogin",
      "AuthRefresh",
      "AuthWhoAmI",
      "AuthSetInitialPassword",
      "Imagem",
      "ImagemView",
      "ImagemFindOneInputView",
      "ImagemFindOneResultView",
      "ImageFindOneFromImagemArquivoResultView",
      "GetImagem",
      "SetImagem",
      "ImagemArquivo",
      "ImagemArquivoView",
      "ImagemArquivoFindOneInputView",
      "ImagemArquivoFindOneResultView",
      "ImagemArquivoFindOneFromImagemResultView",
      "IntervaloDeTempo",
      "IntervaloDeTempoView",
      "IntervaloDeTempoFindOneResultView",
      "IntervaloDeTempoInputView",
      "Estado",
      "EstadoView",
      "EstadoFindOneInputView",
      "EstadoFindOneResultView",
      "EstadoListResultView",
      "EstadoFindOneById",
      "EstadoList",
      "Cidade",
      "CidadeView",
      "CidadeFindOneInputView",
      "CidadeFindOneResultView",
      "CidadeListResultView",
      "CidadeFindOneById",
      "CidadeList",
      "Endereco",
      "EnderecoView",
      "EnderecoFindOneInputView",
      "EnderecoFindOneResultView",
      "EnderecoFindOneById",
      "EnderecoInputView",
      "Campus",
      "CampusView",
      "CampusFindOneInputView",
      "CampusFindOneResultView",
      "CampusListResultView",
      "CampusInputUpdateView",
      "CampusInputCreateView",
      "CampusFindOneById",
      "CampusDeleteOneById",
      "CampusList",
      "CampusCreate",
      "CampusUpdateOneById",
      "Bloco",
      "BlocoView",
      "BlocoInputUpdateView",
      "BlocoInputCreateView",
      "BlocoFindOneInputView",
      "BlocoFindOneResultView",
      "BlocoListResultView",
      "BlocoFindOneById",
      "BlocoDeleteOneById",
      "BlocoList",
      "BlocoCreate",
      "BlocoUpdateOneById",
      "BlocoGetImagemCapa",
      "BlocoSetImagemCapa",
      "Ambiente",
      "AmbienteView",
      "AmbienteFindOneInputView",
      "AmbienteFindOneResultView",
      "AmbienteListResultView",
      "AmbienteInputUpdateView",
      "AmbienteInputCreateView",
      "AmbienteFindOneById",
      "AmbienteDeleteOneById",
      "AmbienteList",
      "AmbienteCreate",
      "AmbienteUpdateOneById",
      "AmbienteGetImagemCapa",
      "AmbienteSetImagemCapa",
      "Perfil",
      "PerfilView",
      "PerfilFindOneInputView",
      "PerfilFindOneResultView",
      "PerfilListResultView",
      "PerfilInputUpdateView",
      "PerfilInputCreateView",
      "PerfilFindOneById",
      "PerfilDeleteOneById",
      "PerfilList",
      "PerfilCreate",
      "PerfilUpdateOneById",
      "NivelDeFormacao",
      "NivelDeFormacaoView",
      "NivelDeFormacaoFindOneInputView",
      "NivelDeFormacaoFindOneResultView",
      "NivelDeFormacaoListResultView",
      "NivelDeFormacaoInputCreateView",
      "NivelDeFormacaoInputUpdateView",
      "NivelDeFormacaoFindOneById",
      "NivelDeFormacaoDeleteOneById",
      "NivelDeFormacaoUpdateOneById",
      "NivelDeFormacaoList",
      "NivelDeFormacaoCreate",
      "Modalidade",
      "ModalidadeView",
      "ModalidadeFindOneInputView",
      "ModalidadeFindOneResultView",
      "ModalidadeListResultView",
      "ModalidadeInputCreateView",
      "ModalidadeInputUpdateView",
      "ModalidadeFindOneById",
      "ModalidadeDeleteOneById",
      "ModalidadeUpdateOneById",
      "ModalidadeList",
      "ModalidadeCreate",
      "OfertaFormacao",
      "OfertaFormacaoView",
      "OfertaFormacaoFindOneInputView",
      "OfertaFormacaoFindOneResultView",
      "OfertaFormacaoListResultView",
      "OfertaFormacaoInputCreateView",
      "OfertaFormacaoInputUpdateView",
      "OfertaFormacaoFindOneById",
      "OfertaFormacaoDeleteOneById",
      "OfertaFormacaoUpdateOneById",
      "OfertaFormacaoList",
      "OfertaFormacaoCreate",
      "OfertaFormacaoNivelFormacao",
      "OfertaFormacaoNivelFormacaoView",
      "OfertaFormacaoNivelFormacaoFindOneInputView",
      "OfertaFormacaoNivelFormacaoFindOneResultView",
      "OfertaFormacaoNivelFormacaoListResultView",
      "OfertaFormacaoNivelFormacaoInputCreateView",
      "OfertaFormacaoNivelFormacaoInputUpdateView",
      "OfertaFormacaoNivelFormacaoFindOneById",
      "OfertaFormacaoNivelFormacaoDeleteOneById",
      "OfertaFormacaoNivelFormacaoUpdateOneById",
      "OfertaFormacaoNivelFormacaoList",
      "OfertaFormacaoNivelFormacaoCreate",
      "Curso",
      "CursoView",
      "CursoFindOneInputView",
      "CursoFindOneResultView",
      "CursoListResultView",
      "CursoInputCreateView",
      "CursoInputUpdateView",
      "CursoFindOneById",
      "CursoDeleteOneById",
      "CursoUpdateOneById",
      "CursoList",
      "CursoCreate",
      "CursoGetImagemCapa",
      "CursoSetImagemCapa",
      "Disciplina",
      "DisciplinaView",
      "DisciplinaFindOneInputView",
      "DisciplinaFindOneResultView",
      "DisciplinaListResultView",
      "DisciplinaInputCreateView",
      "DisciplinaInputUpdateView",
      "DisciplinaFindOneById",
      "DisciplinaDeleteOneById",
      "DisciplinaUpdateOneById",
      "DisciplinaList",
      "DisciplinaCreate",
      "DisciplinaGetImagemCapa",
      "DisciplinaSetImagemCapa",
      "CalendarioLetivo",
      "CalendarioLetivoView",
      "CalendarioLetivoFindOneInputView",
      "CalendarioLetivoFindOneResultView",
      "CalendarioLetivoListResultView",
      "CalendarioLetivoInputCreateView",
      "CalendarioLetivoInputUpdateView",
      "CalendarioLetivoFindOneById",
      "CalendarioLetivoDeleteOneById",
      "CalendarioLetivoUpdateOneById",
      "CalendarioLetivoList",
      "CalendarioLetivoCreate",
      "Reserva",
      "ReservaView",
      "ReservaFindOneInputView",
      "ReservaFindOneResultView",
      "ReservaListResultView",
      "ReservaInputUpdateView",
      "ReservaInputCreateView",
      "ReservaFindOneById",
      "ReservaDeleteOneById",
      "ReservaList",
      "ReservaCreate",
      "ReservaUpdateOneById",
      "GradeHorarioOfertaFormacao",
      "GradeHorarioOfertaFormacaoView",
      "GradeHorarioOfertaFormacaoFindOneInputView",
      "GradeHorarioOfertaFormacaoFindOneResultView",
      "GradeHorarioOfertaFormacaoListResultView",
      "GradeHorarioOfertaFormacaoInputUpdateView",
      "GradeHorarioOfertaFormacaoInputCreateView",
      "GradeHorarioOfertaFormacaoFindOneById",
      "GradeHorarioOfertaFormacaoDeleteOneById",
      "GradeHorarioOfertaFormacaoList",
      "GradeHorarioOfertaFormacaoCreate",
      "GradeHorarioOfertaFormacaoUpdateOneById",
      "GradeHorarioOfertaFormacaoIntervaloDeTempo",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoList",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoCreate",
      "GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById",
      "DiaCalendario",
      "DiaCalendarioView",
      "DiaCalendarioInputUpdateView",
      "DiaCalendarioInputCreateView",
      "DiaCalendarioFindOneInputView",
      "DiaCalendarioFindOneResultView",
      "DiaCalendarioListResultView",
      "DiaCalendarioFindOneById",
      "DiaCalendarioDeleteOneById",
      "DiaCalendarioList",
      "DiaCalendarioCreate",
      "DiaCalendarioUpdateOneById",
      "Evento",
      "EventoView",
      "EventoFindOneInputView",
      "EventoFindOneResultView",
      "EventoListResultView",
      "EventoInputCreateView",
      "EventoInputUpdateView",
      "EventoFindOneById",
      "EventoDeleteOneById",
      "EventoUpdateOneById",
      "EventoList",
      "EventoCreate",
      "Etapa",
      "EtapaView",
      "EtapaFindOneInputView",
      "EtapaFindOneResultView",
      "EtapaListResultView",
      "EtapaInputCreateView",
      "EtapaInputUpdateView",
      "EtapaFindOneById",
      "EtapaDeleteOneById",
      "EtapaUpdateOneById",
      "EtapaList",
      "EtapaCreate",
      "Turma",
      "TurmaView",
      "TurmaFindOneInputView",
      "TurmaFindOneResultView",
      "TurmaListResultView",
      "TurmaInputCreateView",
      "TurmaInputUpdateView",
      "TurmaFindOneById",
      "TurmaDeleteOneById",
      "TurmaUpdateOneById",
      "TurmaList",
      "TurmaCreate",
      "TurmaGetImagemCapa",
      "TurmaSetImagemCapa",
      "Diario",
      "DiarioView",
      "DiarioFindOneInputView",
      "DiarioFindOneResultView",
      "DiarioListResultView",
      "DiarioInputCreateView",
      "DiarioInputUpdateView",
      "DiarioFindOneById",
      "DiarioDeleteOneById",
      "DiarioUpdateOneById",
      "DiarioList",
      "DiarioCreate",
      "DiarioGetImagemCapa",
      "DiarioSetImagemCapa",
      "DiarioProfessor",
      "DiarioProfessorView",
      "DiarioProfessorFindOneInputView",
      "DiarioProfessorFindOneResultView",
      "DiarioProfessorListResultView",
      "DiarioProfessorInputCreateView",
      "DiarioProfessorInputUpdateView",
      "DiarioProfessorFindOneById",
      "DiarioProfessorDeleteOneById",
      "DiarioProfessorUpdateOneById",
      "DiarioProfessorList",
      "DiarioProfessorCreate",
      "Aula",
      "AulaView",
      "AulaFindOneInputView",
      "AulaFindOneResultView",
      "AulaListResultView",
      "AulaInputCreateView",
      "AulaInputUpdateView",
      "AulaFindOneById",
      "AulaDeleteOneById",
      "AulaUpdateOneById",
      "AulaList",
      "AulaCreate",
      "Disponibilidade",
      "DisponibilidadeView",
      "DisponibilidadeFindOneInputView",
      "DisponibilidadeFindOneResultView",
      "DisponibilidadeListResultView",
      "DisponibilidadeInputCreateView",
      "DisponibilidadeInputUpdateView",
      "DisponibilidadeFindOneById",
      "DisponibilidadeDeleteOneById",
      "DisponibilidadeUpdateOneById",
      "DisponibilidadeList",
      "DisponibilidadeCreate",
      "DisponibilidadeDia",
      "DisponibilidadeDiaView",
      "DisponibilidadeDiaFindOneInputView",
      "DisponibilidadeDiaFindOneResultView",
      "DisponibilidadeDiaListResultView",
      "DisponibilidadeDiaInputCreateView",
      "DisponibilidadeDiaInputUpdateView",
      "DisponibilidadeDiaFindOneById",
      "DisponibilidadeDiaDeleteOneById",
      "DisponibilidadeDiaUpdateOneById",
      "DisponibilidadeDiaList",
      "DisponibilidadeDiaCreate",
      "TurmaDisponibilidade",
      "TurmaDisponibilidadeView",
      "TurmaDisponibilidadeFindOneInputView",
      "TurmaDisponibilidadeFindOneResultView",
      "TurmaDisponibilidadeListResultView",
      "TurmaDisponibilidadeInputCreateView",
      "TurmaDisponibilidadeInputUpdateView",
      "TurmaDisponibilidadeFindOneById",
      "TurmaDisponibilidadeDeleteOneById",
      "TurmaDisponibilidadeUpdateOneById",
      "TurmaDisponibilidadeList",
      "TurmaDisponibilidadeCreate",
      "ProfessorDisponibilidade",
      "ProfessorDisponibilidadeView",
      "ProfessorDisponibilidadeFindOneInputView",
      "ProfessorDisponibilidadeFindOneResultView",
      "ProfessorDisponibilidadeListResultView",
      "ProfessorDisponibilidadeInputCreateView",
      "ProfessorDisponibilidadeInputUpdateView",
      "ProfessorDisponibilidadeFindOneById",
      "ProfessorDisponibilidadeDeleteOneById",
      "ProfessorDisponibilidadeUpdateOneById",
      "ProfessorDisponibilidadeList",
      "ProfessorDisponibilidadeCreate",
      "DiarioPreferenciaAgrupamento",
      "DiarioPreferenciaAgrupamentoView",
      "DiarioPreferenciaAgrupamentoFindOneInputView",
      "DiarioPreferenciaAgrupamentoFindOneResultView",
      "DiarioPreferenciaAgrupamentoListResultView",
      "DiarioPreferenciaAgrupamentoInputCreateView",
      "DiarioPreferenciaAgrupamentoInputUpdateView",
      "DiarioPreferenciaAgrupamentoFindOneById",
      "DiarioPreferenciaAgrupamentoDeleteOneById",
      "DiarioPreferenciaAgrupamentoUpdateOneById",
      "DiarioPreferenciaAgrupamentoList",
      "DiarioPreferenciaAgrupamentoCreate",
      "HorarioGerado",
      "HorarioGeradoView",
      "HorarioGeradoFindOneInputView",
      "HorarioGeradoFindOneResultView",
      "HorarioGeradoListResultView",
      "HorarioGeradoInputCreateView",
      "HorarioGeradoInputUpdateView",
      "HorarioGeradoFindOneById",
      "HorarioGeradoDeleteOneById",
      "HorarioGeradoUpdateOneById",
      "HorarioGeradoList",
      "HorarioGeradoCreate",
      "HorarioGeradoAula",
      "HorarioGeradoAulaView",
      "HorarioGeradoAulaFindOneInputView",
      "HorarioGeradoAulaFindOneResultView",
      "HorarioGeradoAulaListResultView",
      "HorarioGeradoAulaInputCreateView",
      "HorarioGeradoAulaInputUpdateView",
      "HorarioGeradoAulaFindOneById",
      "HorarioGeradoAulaDeleteOneById",
      "HorarioGeradoAulaUpdateOneById",
      "HorarioGeradoAulaList",
      "HorarioGeradoAulaCreate",
    ],
    description: "Define os nomes de indentificação das entidades.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Disponibilidades.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da disciplina.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado da disciplina.",
      },
      cargaHoraria: {
        type: "integer",
        minimum: 1,
        maximum: 65535,
        description: "Carga horária da disciplina.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "cargaHoraria", "dateCreated", "dateUpdated", "dateDeleted", "imagemCapa"],
    description: "Visão completa de uma Disciplina.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemArquivoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      largura: {
        type: "integer",
        description: "Largura da imagem.",
      },
      altura: {
        type: "integer",
        description: "Altura da imagem.",
      },
      formato: {
        type: "string",
        description: "Formato da imagem.",
      },
      mimeType: {
        type: "string",
        description: "Mime-type da imagem.",
      },
      imagem: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneFromImagemArquivoResultView.json",
      },
      arquivo: {
        $ref: "ladesa://schemas/v3/generics/ArquivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "largura", "altura", "formato", "mimeType", "imagem", "arquivo", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma versão de uma versão de imagem.",
    "x-unispec-entity-partial-of": "ImagemArquivoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemArquivoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView.json",
    type: "object",
    properties: {
      gradeHorarioOfertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneInputView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaInputCreateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula gerada.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diarioProfessor: {
        $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneInputView.json",
      },
      horarioGerado: {
        $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneInputView.json",
      },
    },
    required: ["data", "intervaloDeTempo", "diarioProfessor", "horarioGerado"],
    description: "Dados de entrada para a criação de um HorarioGeradoAula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Início da vigência da preferência de agrupamento.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência da preferência de agrupamento.",
      },
      diaSemanaIso: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Dia da semana.",
      },
      aulasSeguidas: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Quantidade de aulas seguidas.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
    },
    required: [
      "id",
      "dataInicio",
      "dataFim",
      "diaSemanaIso",
      "aulasSeguidas",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "intervaloDeTempo",
      "diario",
    ],
    description: "Visão completa de um DiarioPreferenciaAgrupamento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioGetCoverImageOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Diario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Operações extras para a imagem de capa do diário.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Reserva",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/ReservaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ReservaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ReservaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/date.json",
    type: "string",
    format: "date",
    description: "Date ISO 8601.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EnderecoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      cep: {
        type: "string",
        description: "Código postal (CEP).",
        "x-unispec-constraint-cep": true,
      },
      logradouro: {
        type: "string",
        description: "Logradouro.",
      },
      numero: {
        type: "integer",
        minimum: 0,
        maximum: 99999,
        description: "Número.",
      },
      bairro: {
        type: "string",
        description: "Bairro.",
      },
      complemento: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Complemento.",
      },
      pontoReferencia: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Ponto de referência.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      cidade: {
        $ref: "ladesa://schemas/v3/generics/CidadeFindOneResultView.json",
      },
    },
    required: [
      "id",
      "cep",
      "logradouro",
      "numero",
      "bairro",
      "complemento",
      "pontoReferencia",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "cidade",
    ],
    description: "Visão completa de um endereco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EnderecoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Modalidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ModalidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ModalidadeFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição do ambiente/sala.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do ambiente/sala.",
      },
      capacidade: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Capacidade do ambiente/sala.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      },
      bloco: {
        $ref: "ladesa://schemas/v3/generics/BlocoFindOneInputView.json",
      },
    },
    required: ["nome", "descricao", "codigo", "capacidade", "tipo", "bloco"],
    description: "Dados de entrada para a criação de um ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthLoginOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/AuthLoginInputView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AuthSessionCredentialsView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Operação de login.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AuthLogin",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeInputCreateView.json",
    type: "object",
    properties: {
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneInputView.json",
      },
    },
    required: ["disponibilidade", "perfil"],
    description: "Dados de entrada para a criação de uma ProfessorDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
      },
    },
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "disponibilidade", "turma"],
    description: "Visão completa de uma TurmaDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationInputView.json",
    type: "object",
    properties: {
      page: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        default: 1,
        minimum: 1,
        description: "Página de consulta.",
      },
      limit: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        minimum: 1,
        description: "Limite da quantidade de resultados por página.",
      },
      search: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Busca textual.",
      },
      sortBy: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PaginationSortByView.json",
        },
        description: "Ordenação.",
      },
      filter: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PaginationFilterView.json",
        },
        description: "Filtros.",
      },
    },
    required: ["sortBy", "filter"],
    deprecated: true,
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Etapa",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EtapaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EtapaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiaCalendario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiaCalendarioFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteGetCoverImage.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Ambiente",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        description: "Nome do calendário letivo.",
      },
      ano: {
        type: "integer",
        minimum: 0,
        maximum: 65535,
        description: "Ano do calendário letivo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um calendário letivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthWhoAmIOperation.json",
    type: "object",
    properties: {
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AuthWhoAmIResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["output"],
    description: "Obtêm informações sobre o estado de autenticação do ator.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AuthWhoAmI",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do Bloco.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do Bloco.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      ambientes: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
        },
      },
    },
    required: ["id", "nome", "codigo", "dateCreated", "dateUpdated", "dateDeleted", "campus", "imagemCapa", "ambientes"],
    description: "Visão completa de um bloco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoInputUpdateView.json",
    type: "object",
    properties: {
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido do nível de formação.",
      },
    },
    description: "Dados de entrada para a atualização de um nível de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioInputCreateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      feriado: {
        type: "boolean",
      },
      diaLetivo: {
        type: "boolean",
      },
      calendario: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["data", "feriado", "diaLetivo", "calendario"],
    description: "Dados de entrada para a criação de um DiaCalendario.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/IntervaloDeTempoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodoInicio: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo inicia.",
      },
      periodoFim: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo termina.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "periodoInicio", "periodoFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de um Intervalo de Tempo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "IntervaloDeTempoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da oferta de formação.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da oferta de formação.",
      },
    },
    description: "Dados de entrada para a atualização de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ReservaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Reservas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/AulaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AulaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoInputCreateView.json",
    type: "object",
    properties: {
      diaSemanaIso: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Dia da semana.",
      },
      aulasSeguidas: {
        type: "integer",
        minimum: 0,
        maximum: 255,
        description: "Quantidade de aulas seguidas.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Início da vigência da preferência de agrupamento.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência da preferência de agrupamento.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
    },
    required: ["diaSemanaIso", "aulasSeguidas", "dataInicio", "dataFim", "intervaloDeTempo", "diario"],
    description: "Dados de entrada para a criação de um DiarioPreferenciaAgrupamento.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Bloco",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/BlocoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/UsuarioInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioPreferenciaAgrupamento",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioPreferenciaAgrupamentoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoInputCreateView.json",
    type: "object",
    properties: {
      status: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Status do horário gerado.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do horário gerado.",
      },
      dataGeracao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data em que o horário foi gerado.",
      },
      vigenciaInicio: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Início da vigência do horário gerado.",
      },
      vigenciaFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência do horário gerado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
      },
    },
    required: ["status", "tipo", "dataGeracao", "vigenciaInicio", "vigenciaFim", "calendario"],
    description: "Dados de entrada para a criação de um HorarioGerado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Evento",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EventoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationInputBaseView.json",
    type: "object",
    properties: {
      page: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        default: 1,
        minimum: 1,
        description: "Página de consulta.",
      },
      limit: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        minimum: 1,
        description: "Limite da quantidade de resultados por página.",
      },
      search: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Busca textual.",
      },
    },
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedInputBaseView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacaoIntervaloDeTempo",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da disciplina.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado da disciplina.",
      },
      cargaHoraria: {
        type: "integer",
        minimum: 1,
        maximum: 65535,
        description: "Carga horária da disciplina.",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "cargaHoraria", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma Disciplina.",
    "x-unispec-entity-partial-of": "DisciplinaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Reserva.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "string",
        minLength: 1,
        description: "Situação da reserva.",
      },
      motivo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Motivo da reserva.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Tipo da reserva.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora de início da reserva.",
      },
      dataTermino: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora de término da reserva.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/Usuario.json",
        description: "Usuário que fez a reserva.",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/Ambiente.json",
        description: "Ambiente reservado.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de tempo reservado.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "situacao",
      "motivo",
      "tipo",
      "dataInicio",
      "dataTermino",
      "usuario",
      "ambiente",
      "intervaloDeTempo",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Reserva.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Reserva",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaInputUpdateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula gerada.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diarioProfessor: {
        $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneInputView.json",
      },
      horarioGerado: {
        $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um HorarioGeradoAula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthLoginInputView.json",
    type: "object",
    properties: {
      matriculaSiape: {
        type: "string",
        description: "Matrícula SIAPE.",
      },
      senha: {
        type: "string",
        description: "Senha do usuário.",
      },
    },
    required: ["matriculaSiape", "senha"],
    description: "Dados de entrada para autenticação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AuthLoginInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "TurmaDisponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDisponibilidadeDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGerado",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a DiarioProfessor.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaInputCreateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      modalidade: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
      ambiente: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    required: ["data", "modalidade", "intervaloDeTempo", "diario", "ambiente"],
    description: "Dados de entrada para a criação de uma Aula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioInputUpdateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      feriado: {
        type: "boolean",
      },
      diaLetivo: {
        type: "boolean",
      },
      calendario: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    description: "Dados de entrada para a atualização de um DiaCalendario.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.endereco.cidade.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.endereco.cidade.id",
                "x-unispec-gql-key": "filterEnderecoCidadeId",
              },
              "filter.endereco.cidade.estado.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.endereco.cidade.estado.id",
                "x-unispec-gql-key": "filterEnderecoCidadeEstadoId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CampusListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Turma",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/TurmaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacaoNivelFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoNivelFormacaoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disciplina",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a GradeHorarioOfertaFormacaos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacaoNivelFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoNivelFormacaoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma cidade por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CidadeFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacaoIntervaloDeTempo",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma oferta de formação por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Reserva",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ReservaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilUpdateView.json",
    type: "object",
    properties: {
      cargos: {
        type: "array",
        items: {
          type: "string",
        },
        description: "Cargos do usuário no vínculo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneInputView.json",
      },
    },
    required: ["cargos", "campus", "usuario"],
    description: "Dados de entrada para a alteração de vínculo de um Usuário a um Campus.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PerfilInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacao.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido do nível de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "NivelDeFormacao.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacao",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "CalendarioLetivo",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CalendarioLetivoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ProfessorDisponibilidadeCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/numeric_id.json",
    type: "integer",
    minimum: 1,
    description: "Identificador numérico.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacao.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/Campus.json",
        description: "Campus.",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacao.json",
        description: "Oferta de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "campus", "ofertaFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "GradeHorarioOfertaFormacao.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacao",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoInputCreateView.json",
    type: "object",
    properties: {
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido do nível de formação.",
      },
    },
    required: ["slug"],
    description: "Dados de entrada para a criação de um nível de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
      },
    },
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "disponibilidade", "perfil"],
    description: "Visão completa de uma ProfessorDisponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodoInicio: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo inicia.",
      },
      periodoFim: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo termina.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "periodoInicio", "periodoFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Intervalo de Tempo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "IntervaloDeTempo",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/UsuarioListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nomeFantasia: {
        type: "string",
        minLength: 1,
        description: "Nome fantasia do campus.",
      },
      razaoSocial: {
        type: "string",
        minLength: 1,
        description: "Razão social do campus.",
      },
      apelido: {
        type: "string",
        minLength: 1,
        description: "Apelido do campus.",
      },
      cnpj: {
        type: "string",
        minLength: 1,
        description: "CNPJ do campus.",
      },
      endereco: {
        $ref: "ladesa://schemas/v3/generics/EnderecoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nomeFantasia", "razaoSocial", "apelido", "cnpj", "endereco", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um campus.",
    "x-unispec-entity-partial-of": "CampusView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoSetCoverImage.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Bloco",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoSetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Estado.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial do estado.",
      },
      sigla: {
        type: "string",
        description: "Sigla do estado.",
        "x-unispec-constraint-estado-sigla": true,
      },
    },
    required: ["id", "nome", "sigla"],
    description: "Estado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Estado",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição do ambiente/sala.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do ambiente/sala.",
      },
      capacidade: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Capacidade do ambiente/sala.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      bloco: {
        $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: [
      "id",
      "nome",
      "descricao",
      "codigo",
      "capacidade",
      "tipo",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "bloco",
      "imagemCapa",
    ],
    description: "Visão completa de um ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DisponibilidadeDia",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDiaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempo.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      gradeHorarioOfertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacao.json",
        description: "Grade de horário da oferta de formação.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempo.json",
        description: "Intervalo de tempo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "gradeHorarioOfertaFormacao", "intervaloDeTempo", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "GradeHorarioOfertaFormacaoIntervaloDeTempo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempo",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data de término.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "dataInicio", "dataFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de uma Disponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data.",
      },
      diaLetivo: {
        type: "boolean",
        description: "Define que o dia é letivo.",
      },
      feriado: {
        type: "boolean",
        description: "Define que o dia é feriado.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
    },
    required: ["id", "data", "diaLetivo", "feriado", "dateCreated", "dateUpdated", "dateDeleted", "calendario"],
    description: "Visão completa de um DiaCalendario.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Situação do diário.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      calendarioLetivo: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
      },
      disciplina: {
        $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
      },
      ambientePadrao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
          },
          {
            type: "null",
          },
        ],
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: [
      "id",
      "ativo",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "calendarioLetivo",
      "turma",
      "disciplina",
      "ambientePadrao",
      "imagemCapa",
    ],
    description: "Visão completa de um diário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "DiarioPreferenciaAgrupamento",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um DiarioPreferenciaAgrupamento por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioPreferenciaAgrupamentoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Modalidade",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma modalidade por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a ProfessorDisponibilidades.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ProfessorDisponibilidadeListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoAulaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
    },
    required: ["id", "rrule", "dateCreated", "dateUpdated", "dateDeleted", "intervaloDeTempo", "disponibilidade"],
    description: "Visão completa de um DisponibilidadeDia.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da disciplina.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado da disciplina.",
      },
      cargaHoraria: {
        type: "integer",
        minimum: 1,
        maximum: 65535,
        description: "Carga horária da disciplina.",
      },
    },
    description: "Dados de entrada para a atualização de uma Disciplina.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Evento",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EventoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EventoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.turma.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.turma.id",
                "x-unispec-gql-key": "filterTurmaId",
              },
              "filter.disciplina.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.disciplina.id",
                "x-unispec-gql-key": "filterDisciplinaId",
              },
              "filter.ambientePadrao.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambientePadrao.id",
                "x-unispec-gql-key": "filterAmbientePadraoId",
              },
              "filter.calendarioLetivo.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.calendarioLetivo.id",
                "x-unispec-gql-key": "filterCalendarioLetivoId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ArquivoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      name: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Nome do arquivo.",
      },
      mimeType: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Tamanho do arquivo (em bytes).",
      },
      storageType: {
        type: "string",
        description: "Estratégia de armazenamento do conteúdo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "name", "mimeType", "sizeBytes", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Dados de saída para encontrar um arquivo por id.",
    "x-unispec-entity-partial-of": "ArquivoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ArquivoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Diario.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Situação do diário.",
      },
      calendarioLetivo: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
        description: "Calendário Letivo vinculado ao diário.",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/Turma.json",
        description: "Turma vinculada ao diário.",
      },
      disciplina: {
        $ref: "ladesa://schemas/v3/generics/Disciplina.json",
        description: "Disciplina vinculada ao diário.",
      },
      ambientePadrao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Ambiente.json",
          },
          {
            type: "null",
          },
        ],
        description: "Ambiente padrão.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa do diário.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "ativo",
      "calendarioLetivo",
      "turma",
      "disciplina",
      "ambientePadrao",
      "imagemCapa",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Diario.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Diario",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nomeFantasia: {
        type: "string",
        minLength: 1,
        description: "Nome fantasia do campus.",
      },
      razaoSocial: {
        type: "string",
        minLength: 1,
        description: "Razão social do campus.",
      },
      apelido: {
        type: "string",
        minLength: 1,
        description: "Apelido do campus.",
      },
      cnpj: {
        type: "string",
        minLength: 1,
        description: "CNPJ do campus.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      endereco: {
        $ref: "ladesa://schemas/v3/generics/EnderecoFindOneResultView.json",
      },
    },
    required: ["id", "nomeFantasia", "razaoSocial", "apelido", "cnpj", "dateCreated", "dateUpdated", "dateDeleted", "endereco"],
    description: "Visão completa de um campus.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a usuários.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da oferta de formação.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da oferta de formação.",
      },
    },
    required: ["nome", "slug"],
    description: "Dados de entrada para a criação de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Aula",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AulaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiaCalendarioCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ObjectIntegerId.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
    },
    required: ["id"],
    description: "Estrutura identificada por id no formato numérico.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Reserva",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ReservaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ReservaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "CalendarioLetivo",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CalendarioLetivoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaInputUpdateView.json",
    type: "object",
    properties: {
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um DisponibilidadeDia.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Disciplina.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da disciplina.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado da disciplina.",
      },
      cargaHoraria: {
        type: "integer",
        minimum: 1,
        maximum: 65535,
        description: "Carga horária da disciplina.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa da disciplina.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "cargaHoraria", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Disciplina.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Disciplina",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusInputCreateView.json",
    type: "object",
    properties: {
      nomeFantasia: {
        type: "string",
        minLength: 1,
        description: "Nome fantasia do campus.",
      },
      razaoSocial: {
        type: "string",
        minLength: 1,
        description: "Razão social do campus.",
      },
      apelido: {
        type: "string",
        minLength: 1,
        description: "Apelido do campus.",
      },
      cnpj: {
        type: "string",
        minLength: 1,
        description: "CNPJ do campus.",
      },
      endereco: {
        $ref: "ladesa://schemas/v3/generics/EnderecoInput.json",
      },
    },
    required: ["nomeFantasia", "razaoSocial", "apelido", "cnpj", "endereco"],
    description: "Dados de entrada para a criação de um campus.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaInputCreateView.json",
    type: "object",
    properties: {
      periodo: {
        type: "string",
        minLength: 1,
        description: "Período da Turma.",
      },
      curso: {
        $ref: "ladesa://schemas/v3/generics/CursoFindOneInputView.json",
      },
      ambientePadraoAula: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
      },
    },
    required: ["periodo", "curso", "ambientePadraoAula"],
    description: "Dados de entrada para a criação de uma Turma.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.calendario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.calendario.id",
                "x-unispec-gql-key": "filterCalendarioId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiaCalendarioList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              filter_turma_id: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  {
                    type: "null",
                  },
                ],
                "x-unispec-http-key": "filter.turma.id",
                "x-unispec-gql-key": "filterTurmaId",
              },
            },
            required: ["filter_turma_id"],
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDisponibilidadeList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "CalendarioLetivo",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um calendário letivo por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodo: {
        type: "string",
        minLength: 1,
        description: "Período da Turma.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      curso: {
        $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
      },
      ambientePadraoAula: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
    },
    required: ["id", "periodo", "dateCreated", "dateUpdated", "dateDeleted", "curso", "ambientePadraoAula", "imagemCapa"],
    description: "Visão completa de uma Turma.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        description: "Nome do calendário letivo.",
      },
      ano: {
        type: "integer",
        minimum: 0,
        maximum: 65535,
        description: "Ano do calendário letivo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
      },
    },
    required: ["id", "nome", "ano", "dateCreated", "dateUpdated", "dateDeleted", "campus", "ofertaFormacao"],
    description: "Visão completa de um calendário letivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthSessionCredentialsView.json",
    type: "object",
    properties: {
      access_token: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Token de acesso.",
      },
      token_type: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do token.",
      },
      id_token: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Token de identificação.",
      },
      refresh_token: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Token de refresh.",
      },
      expires_in: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Tempo de expiração do token.",
      },
      expires_at: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Tempo de expiração do token.",
      },
      session_state: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Estado da sessão.",
      },
      scope: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Escopo da autenticação.",
      },
    },
    required: ["access_token", "token_type", "id_token", "refresh_token", "expires_in", "expires_at", "session_state", "scope"],
    description: "Credenciais de sessão.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AuthSessionCredentialsView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.campus.id",
                "x-unispec-gql-key": "filterCampusId",
              },
              "filter.ofertaFormacao.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ofertaFormacao.id",
                "x-unispec-gql-key": "filterOfertaFormacaoId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CalendarioLetivoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeInputUpdateView.json",
    type: "object",
    properties: {
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    description: "Dados de entrada para a atualização de uma Disponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      numero: {
        anyOf: [
          {
            type: "integer",
            minimum: 0,
            maximum: 255,
          },
          {
            type: "null",
          },
        ],
        description: "Número da etapa.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataTermino: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de término.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da etapa.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
    },
    required: ["id", "numero", "dataInicio", "dataTermino", "cor", "dateCreated", "dateUpdated", "dateDeleted", "calendario"],
    description: "Visão completa de uma Etapa.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial da cidade.",
      },
      estado: {
        $ref: "ladesa://schemas/v3/generics/EstadoFindOneResultView.json",
      },
    },
    required: ["id", "nome", "estado"],
    description: "Visão completa de uma cidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CidadeView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Cursos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CursoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioSetImagemPerfil.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
          body: {
            type: "string",
            description: "Binário da imagem.",
            mimeTypes: ["image/jpeg", "image/png", "image/jpeg", "image/webp", "binary/octet-stream"],
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description: "Resultado da operação.",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Define a imagem de perfil.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioSetImagemPerfil",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        description: "Nome do calendário letivo.",
      },
      ano: {
        type: "integer",
        minimum: 0,
        maximum: 65535,
        description: "Ano do calendário letivo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/Campus.json",
        description: "Campus ao qual o calendário letivo pertence.",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacao.json",
        description: "Oferta de formação do calendário letivo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "ano", "campus", "ofertaFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "CalendarioLetivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivo",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemFindOneFromImagemArquivoResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Visão FindOneFromImagemArquivo de uma imagem.",
    "x-unispec-entity-partial-of": "ImagemView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImageFindOneFromImagemArquivoResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição do ambiente/sala.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do ambiente/sala.",
      },
      capacidade: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Capacidade do ambiente/sala.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      },
      bloco: {
        $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "nome",
      "descricao",
      "codigo",
      "capacidade",
      "tipo",
      "bloco",
      "imagemCapa",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um ambiente.",
    "x-unispec-entity-partial-of": "AmbienteView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CidadeFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/numeric_id.json",
                description: "Identificador do registro (numérico).",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CidadeFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CalendarioLetivoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EnderecoInput.json",
    type: "object",
    properties: {
      cep: {
        type: "string",
        description: "Código postal (CEP).",
        "x-unispec-constraint-cep": true,
      },
      logradouro: {
        type: "string",
        description: "Logradouro.",
      },
      numero: {
        type: "integer",
        minimum: 0,
        maximum: 99999,
        description: "Número.",
      },
      bairro: {
        type: "string",
        description: "Bairro.",
      },
      complemento: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Complemento.",
      },
      pontoReferencia: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Ponto de referência.",
      },
      cidade: {
        $ref: "ladesa://schemas/v3/generics/CidadeFindOneInputView.json",
      },
    },
    required: ["cep", "logradouro", "numero", "bairro", "complemento", "pontoReferencia", "cidade"],
    description: "Dados de entrada para um endereco.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EnderecoInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemArquivoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma versão de uma imagem por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemArquivoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/BlocoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a blocos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoFindByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGerado",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/CursoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "OfertaFormacao",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma oferta de formação por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "NivelDeFormacaoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        description: "Nome do calendário letivo.",
      },
      ano: {
        type: "integer",
        minimum: 0,
        maximum: 65535,
        description: "Ano do calendário letivo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    required: ["nome", "ano", "campus", "ofertaFormacao"],
    description: "Dados de entrada para a criação de um calendário letivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CalendarioLetivoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacaoIntervaloDeTempo",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "NivelDeFormacao",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um nível de formação por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGeradoAula",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoAulaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaInputUpdateView.json",
    type: "object",
    properties: {
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
      },
      modalidade: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
      ambiente: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
          },
          {
            type: "null",
          },
        ],
      },
    },
    description: "Dados de entrada para a atualização de uma Aula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a GradeHorarioOfertaFormacaoIntervaloDeTempos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido do nível de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um nível de formação.",
    "x-unispec-entity-partial-of": "NivelDeFormacaoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/EventoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Eventos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EventoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Evento",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/EventoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EventoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EventoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Disciplina",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Disciplina por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a OfertaFormacaoNivelFormacaos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DatedObject.json",
    type: "object",
    properties: {
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["dateCreated", "dateUpdated", "dateDeleted"],
    description: "Estrutura datada.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoGetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Curso",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/EtapaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Etapas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EtapaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "HorarioGeradoAula",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoAulaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Aula",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AulaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula gerada.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diarioProfessor: {
        $ref: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
      },
      horarioGerado: {
        $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
      },
    },
    required: ["id", "data", "intervaloDeTempo", "diarioProfessor", "horarioGerado"],
    description: "Visão completa de um HorarioGeradoAula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoNivelFormacaoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "string",
        minLength: 1,
        description: "Situação da reserva.",
      },
      motivo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Motivo da reserva.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Tipo da reserva.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora de início da reserva.",
      },
      dataTermino: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora de término da reserva.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
    },
    required: [
      "id",
      "situacao",
      "motivo",
      "tipo",
      "dataInicio",
      "dataTermino",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
      "usuario",
      "ambiente",
      "intervaloDeTempo",
    ],
    description: "Visão completa de uma Reserva.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/NivelDeFormacaoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca aos níveis de formações.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "NivelDeFormacaoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da modalidade.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma modalidade.",
    "x-unispec-entity-partial-of": "ModalidadeView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Curso",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/CursoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CursoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthRefreshOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/AuthRefreshInputView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AuthSessionCredentialsView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Obtêm as credenciais de sessão por meio do envio do token de refresh.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AuthRefresh",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoIntervaloDeTempoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      gradeHorarioOfertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
    },
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "gradeHorarioOfertaFormacao", "intervaloDeTempo"],
    description: "Visão completa de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Disponibilidade.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data de término.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "dataInicio", "dataFim", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Disponibilidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Disponibilidade",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Turma",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilUpdateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/PerfilUpdateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/PerfilListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "PerfilUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula.",
      },
      modalidade: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Modalidade da aula.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "data", "modalidade", "intervaloDeTempo", "diario", "ambiente", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma Aula.",
    "x-unispec-entity-partial-of": "AulaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Etapa",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/EtapaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EtapaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EtapaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "boolean",
        description: "Situação do vínculo.",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "situacao", "perfil", "diario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um DiarioProfessor.",
    "x-unispec-entity-partial-of": "DiarioProfessorView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoInputUpdateView.json",
    type: "object",
    properties: {
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
      nivelFormcao: {
        $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorInputUpdateView.json",
    type: "object",
    properties: {
      situacao: {
        type: "boolean",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneInputView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneInputView.json",
      },
    },
    description: "Dados de entrada para a atualização de um DiarioProfessor.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorInputUpdateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusUpdateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Campus",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/CampusInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Operação de atualização de um campus.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        format: "email",
        description: "E-mail do usuário.",
      },
    },
    required: ["nome", "matriculaSiape", "email"],
    description: "Dados de entrada para a criação de um usuário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "UsuarioInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendario.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data.",
      },
      diaLetivo: {
        type: "boolean",
        description: "Define que o dia é letivo.",
      },
      feriado: {
        type: "boolean",
        description: "Define que o dia é feriado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
        description: "Calendario.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "data", "diaLetivo", "feriado", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "DiaCalendario.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendario",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ObjectUuid.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Estrutura identificada por id no formato uuid.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/TurmaInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a DisponibilidadeDia.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.ambientePadraoAula.nome": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambientePadraoAula.nome",
                "x-unispec-gql-key": "filterAmbientePadraoAulaNome",
              },
              "filter.ambientePadraoAula.codigo": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambientePadraoAula.codigo",
                "x-unispec-gql-key": "filterAmbientePadraoAulaCodigo",
              },
              "filter.ambientePadraoAula.capacidade": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambientePadraoAula.capacidade",
                "x-unispec-gql-key": "filterAmbientePadraoAulaCapacidade",
              },
              "filter.ambientePadraoAula.tipo": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ambientePadraoAula.tipo",
                "x-unispec-gql-key": "filterAmbientePadraoAulaTipo",
              },
              "filter.curso.nome": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.curso.nome",
                "x-unispec-gql-key": "filterCursoNome",
              },
              "filter.curso.nomeAbreviado": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.curso.nomeAbreviado",
                "x-unispec-gql-key": "filterCursoNomeAbreviado",
              },
              "filter.curso.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.curso.campus.id",
                "x-unispec-gql-key": "filterCursoCampusId",
              },
              "filter.curso.modalidade.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.curso.modalidade.id",
                "x-unispec-gql-key": "filterCursoModalidadeId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EnderecoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um endereço por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EnderecoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthCredentialsSetInitialPasswordOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/AuthCredentialsSetInitialPasswordInputView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Operação para definir a senha inicial.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AuthSetInitialPassword",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a TurmaDisponibilidades.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da oferta de formação.",
      },
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da oferta de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "slug", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma imagem por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.bloco.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.bloco.id",
                "x-unispec-gql-key": "filterBlocoId",
              },
              "filter.bloco.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.bloco.campus.id",
                "x-unispec-gql-key": "filterBlocoCampusId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AmbienteListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationSortByView.json",
    type: "object",
    properties: {
      property: {
        type: "string",
        pattern: "^[\\D\\.]+$",
        description: "Propriedade ordenada.",
      },
      mode: {
        type: "string",
        pattern: "^(ASC|DESC)$",
        description: "Modo de ordenação.",
      },
    },
    required: ["property", "mode"],
    description: "Configuração de ordenação de uma propriedade.",
    deprecated: true,
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedSortByView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Vínculos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PerfilListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Ambiente",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaDisponibilidadeFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "disponibilidade", "turma", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma TurmaDisponibilidade.",
    "x-unispec-entity-partial-of": "TurmaDisponibilidade",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaDisponibilidadeFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PerfilFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Perfil",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "PerfilFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "OfertaFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Aula",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/AulaInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/AulaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AulaUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
    type: "object",
    properties: {
      periodoInicio: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo inicia.",
      },
      periodoFim: {
        $ref: "ladesa://schemas/v3/generics/time.json",
        description: "Horário que o intervalo de tempo termina.",
      },
    },
    required: ["periodoInicio", "periodoFim"],
    description: "Dados de entrada para um Intervalo de Tempo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "IntervaloDeTempoInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.disponibilidade.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.disponibilidade.id",
                "x-unispec-gql-key": "filterDisponibilidadeId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeDiaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeDiaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      situacao: {
        type: "boolean",
        description: "Situação do vínculo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      perfil: {
        $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
    },
    required: ["id", "situacao", "dateCreated", "dateUpdated", "dateDeleted", "perfil", "diario"],
    description: "Visão completa de um DiarioProfessor.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disciplina",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemArquivoFindOneFromImagemResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      largura: {
        type: "integer",
        description: "Largura da imagem.",
      },
      altura: {
        type: "integer",
        description: "Altura da imagem.",
      },
      formato: {
        type: "string",
        description: "Formato da imagem.",
      },
      mimeType: {
        type: "string",
        description: "Mime-type da imagem.",
      },
      arquivo: {
        $ref: "ladesa://schemas/v3/generics/ArquivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "largura", "altura", "formato", "mimeType", "arquivo", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOneFromImagem de uma versão de imagem.",
    "x-unispec-entity-partial-of": "ImagemArquivoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemArquivoFindOneFromImagemResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Ambiente.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição do ambiente/sala.",
      },
      codigo: {
        type: "string",
        minLength: 1,
        description: "Código do ambiente/sala.",
      },
      capacidade: {
        anyOf: [
          {
            type: "integer",
          },
          {
            type: "null",
          },
        ],
        description: "Capacidade do ambiente/sala.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.",
      },
      bloco: {
        description: "Bloco que o ambiente/sala pertence.",
        $ref: "ladesa://schemas/v3/generics/Bloco.json",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "nome",
      "descricao",
      "codigo",
      "capacidade",
      "tipo",
      "bloco",
      "imagemCapa",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Ambiente",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "DiarioProfessor",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um DiarioProfessor por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioProfessorFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/HorarioGeradoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "HorarioGeradoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoInputCreateView.json",
    type: "object",
    properties: {
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
      nivelFormcao: {
        $ref: "ladesa://schemas/v3/generics/NivelDeFormacaoFindOneInputView.json",
      },
    },
    required: ["ofertaFormacao", "nivelFormcao"],
    description: "Dados de entrada para a criação de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacaoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Turma",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma Turma por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "TurmaFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacaoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "OfertaFormacaoNivelFormacaoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoNivelFormacao.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacao.json",
        description: "Oferta de formação.",
      },
      nivelFormacao: {
        $ref: "ladesa://schemas/v3/generics/NivelDeFormacao.json",
        description: "Nível de formação.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "ofertaFormacao", "nivelFormacao", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "OfertaFormacaoNivelFormacao.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoNivelFormacao",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/date_time.json",
    type: "string",
    format: "date-time",
    description: "Date time ISO 8601.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/TurmaFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Turma",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "TurmaFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a Disciplinas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/OfertaFormacaoListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca a OfertaFormacaos.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "OfertaFormacaoListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Descrição da imagem.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      versoes: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/ImagemArquivoFindOneFromImagemResultView.json",
        },
      },
    },
    required: ["id", "descricao", "dateCreated", "dateUpdated", "dateDeleted", "versoes"],
    description: "Visão completa de uma Imagem.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.dataInicio": {
                type: "array",
                items: {
                  anyOf: [
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                  ],
                },
                "x-unispec-http-key": "filter.dataInicio",
                "x-unispec-gql-key": "filterDataInicio",
              },
              "filter.dataTermino": {
                type: "array",
                items: {
                  anyOf: [
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                  ],
                },
                "x-unispec-http-key": "filter.dataTermino",
                "x-unispec-gql-key": "filterDataTermino",
              },
              "intervaloDeTempo.periodoInicio": {
                type: "array",
                items: {
                  anyOf: [
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                  ],
                },
                "x-unispec-http-key": "intervaloDeTempo.periodoInicio",
                "x-unispec-gql-key": "filterIntervaloDeTempoPeriodoInicio",
              },
              "intervaloDeTempo.periodoFim": {
                type: "array",
                items: {
                  anyOf: [
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "string",
                    },
                  ],
                },
                "x-unispec-http-key": "intervaloDeTempo.periodoFim",
                "x-unispec-gql-key": "filterIntervaloDeTempoPeriodoFim",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/ReservaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ReservaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthWhoAmIResultView.json",
    type: "object",
    properties: {
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
        description: "Usuário autenticado.",
      },
      perfisAtivos: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/PerfilFindOneResultView.json",
        },
        description: "Vínculos do usuário logado.",
      },
    },
    required: ["usuario", "perfisAtivos"],
    description: "Informações sobre o ator..",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AuthWhoAmIInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacao",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "GradeHorarioOfertaFormacaoFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemArquivo.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      largura: {
        type: "integer",
        description: "Largura da imagem.",
      },
      altura: {
        type: "integer",
        description: "Altura da imagem.",
      },
      formato: {
        type: "string",
        description: "Formato da imagem.",
      },
      mimeType: {
        type: "string",
        description: "Mime-type da imagem.",
      },
      imagem: {
        description: "Imagem.",
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
      },
      arquivo: {
        $ref: "ladesa://schemas/v3/generics/Arquivo.json",
        description: "Arquivo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "largura", "altura", "formato", "mimeType", "imagem", "arquivo", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "ImagemArquivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemArquivo",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoAulaListResultView.json",
    type: "object",
    properties: {
      meta: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultMeta.json",
        description: "Metadados da busca.",
      },
      data: {
        type: "array",
        items: {
          $ref: "ladesa://schemas/v3/generics/HorarioGeradoAulaFindOneResultView.json",
        },
        description: "Resultados da busca atual.",
      },
      links: {
        $ref: "ladesa://schemas/v3/generics/PaginationResultLinks.json",
        description: "Links da busca.",
      },
    },
    required: ["meta", "data", "links"],
    description: "Resultados da busca de HorarioGeradoAulas.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoAulaListResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ReservaInputCreateView.json",
    type: "object",
    properties: {
      situacao: {
        type: "string",
        minLength: 1,
        description: "Situação da reserva.",
      },
      motivo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Motivo da reserva.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Tipo da reserva.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora de início da reserva.",
      },
      dataTermino: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora de término da reserva.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/UsuarioFindOneInputView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoInputView.json",
      },
    },
    required: ["situacao", "motivo", "tipo", "dataInicio", "dataTermino", "usuario", "ambiente", "intervaloDeTempo"],
    description: "Dados de entrada para a criação de uma Reserva.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ReservaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoInputCreateView.json",
    type: "object",
    properties: {
      campus: {
        $ref: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacaoFindOneInputView.json",
      },
    },
    required: ["campus", "ofertaFormacao"],
    description: "Dados de entrada para a criação de uma oferta de formação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaGetImagemCapa.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disciplina",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaGetImagemCapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CalendarioLetivoDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "CalendarioLetivo",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CalendarioLetivoDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/GradeHorarioOfertaFormacaoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "GradeHorarioOfertaFormacao",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar uma oferta de formação por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "GradeHorarioOfertaFormacaoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Etapa.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      numero: {
        anyOf: [
          {
            type: "integer",
            minimum: 0,
            maximum: 255,
          },
          {
            type: "null",
          },
        ],
        description: "Número da etapa.",
      },
      dataInicio: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de início.",
      },
      dataTermino: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data de término.",
      },
      cor: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Cor da etapa.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
        description: "Calendario.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "numero", "dataInicio", "dataTermino", "cor", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Etapa.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Etapa",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Curso.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do curso.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado do curso.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/Campus.json",
        description: "Campus que o curso pertence.",
      },
      ofertaFormacao: {
        $ref: "ladesa://schemas/v3/generics/OfertaFormacao.json",
        description: "Oferta de formação do curso.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa do curso.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "nome", "nomeAbreviado", "campus", "ofertaFormacao", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Curso.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Curso",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisciplinaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisciplinaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data.",
      },
      diaLetivo: {
        type: "boolean",
        description: "Define que o dia é letivo.",
      },
      feriado: {
        type: "boolean",
        description: "Define que o dia é feriado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "data", "diaLetivo", "feriado", "calendario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um DiaCalendario.",
    "x-unispec-entity-partial-of": "DiaCalendarioView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiaCalendarioFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationFilterView.json",
    type: "object",
    properties: {
      property: {
        type: "string",
        description: "Propriedade filtrada.",
      },
      restrictions: {
        type: "array",
        items: {
          type: "string",
        },
        description: "Restrições de filtragem.",
      },
    },
    required: ["property", "restrictions"],
    description: "Configuração de filtro por restrições de uma propriedade.",
    deprecated: true,
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "PaginatedFilterView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGerado.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      status: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Status do horário gerado.",
      },
      tipo: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Tipo do horário gerado.",
      },
      dataGeracao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data em que o horário foi gerado.",
      },
      vigenciaInicio: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Início da vigência do horário gerado.",
      },
      vigenciaFim: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date.json",
          },
          {
            type: "null",
          },
        ],
        description: "Fim da vigência do horário gerado.",
      },
      calendario: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivo.json",
        description: "calendário.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "status",
      "tipo",
      "dataGeracao",
      "vigenciaInicio",
      "vigenciaFim",
      "calendario",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "HorarioGerado.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGerado",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisciplinaInputCreateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome da disciplina.",
      },
      nomeAbreviado: {
        type: "string",
        minLength: 1,
        description: "Nome abreviado da disciplina.",
      },
      cargaHoraria: {
        type: "integer",
        minimum: 1,
        maximum: 65535,
        description: "Carga horária da disciplina.",
      },
    },
    required: ["nome", "nomeAbreviado", "cargaHoraria"],
    description: "Dados de entrada para a criação de uma Disciplina.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisciplinaInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Endereco.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      cep: {
        type: "string",
        description: "Código postal (CEP).",
        "x-unispec-constraint-cep": true,
      },
      logradouro: {
        type: "string",
        description: "Logradouro.",
      },
      numero: {
        type: "integer",
        minimum: 0,
        maximum: 99999,
        description: "Número.",
      },
      bairro: {
        type: "string",
        description: "Bairro.",
      },
      complemento: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Complemento.",
      },
      pontoReferencia: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Ponto de referência.",
      },
      cidade: {
        $ref: "ladesa://schemas/v3/generics/Cidade.json",
        description: "Cidade.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "cep",
      "logradouro",
      "numero",
      "bairro",
      "complemento",
      "pontoReferencia",
      "cidade",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Endereço.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Endereco",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioGetImagemPerfil.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "string",
            format: "binary",
            description: "Binário.",
            mimeTypes: ["image/jpeg"],
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    description: "Obtêm a imagem de perfil.",
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioGetImagemPerfil",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Campus",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um campus por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "CampusFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EtapaListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.calendario.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.calendario.id",
                "x-unispec-gql-key": "filterCalendarioId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EtapaListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EtapaList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Diario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ArquivoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um arquivo por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ArquivoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Disponibilidade",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AulaView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      data: {
        $ref: "ladesa://schemas/v3/generics/date.json",
        description: "Data da aula.",
      },
      modalidade: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        description: "Modalidade da aula.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      diario: {
        $ref: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
      },
      ambiente: {
        $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
      },
    },
    required: ["id", "data", "modalidade", "dateCreated", "dateUpdated", "dateDeleted", "intervaloDeTempo", "diario", "ambiente"],
    description: "Visão completa de uma Aula.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AulaView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/HorarioGeradoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "HorarioGerado",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um HorarioGerado por ID.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "HorarioGeradoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Situação do diário.",
      },
      calendarioLetivo: {
        $ref: "ladesa://schemas/v3/generics/CalendarioLetivoFindOneResultView.json",
      },
      turma: {
        $ref: "ladesa://schemas/v3/generics/TurmaFindOneResultView.json",
      },
      disciplina: {
        $ref: "ladesa://schemas/v3/generics/DisciplinaFindOneResultView.json",
      },
      ambientePadrao: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/AmbienteFindOneResultView.json",
          },
          {
            type: "null",
          },
        ],
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "ativo",
      "calendarioLetivo",
      "turma",
      "disciplina",
      "ambientePadrao",
      "imagemCapa",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Visão FindOne de um diário.",
    "x-unispec-entity-partial-of": "DiarioView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DiarioFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AuthRefreshInputView.json",
    type: "object",
    properties: {
      refreshToken: {
        type: "string",
        description: "Token de refresh.",
      },
    },
    required: ["refreshToken"],
    description: "Dados de entrada para refresh de autenticação.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AuthRefreshInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ModalidadeInputCreateView.json",
    type: "object",
    properties: {
      slug: {
        type: "string",
        minLength: 1,
        description: "Apelido da modalidade.",
      },
    },
    required: ["slug"],
    description: "Dados de entrada para a criação de uma modalidade.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ModalidadeInputCreateView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Usuario",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/UsuarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioPreferenciaAgrupamento",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioPreferenciaAgrupamentoUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Bloco",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um bloco por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "BlocoFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ProfessorDisponibilidadeDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "ProfessorDisponibilidade",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "ProfessorDisponibilidadeDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DisponibilidadeListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DisponibilidadeList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              filter_diario_id: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  {
                    type: "null",
                  },
                ],
                "x-unispec-http-key": "filter.diario.id",
                "x-unispec-gql-key": "filterDiarioId",
              },
            },
            required: ["filter_diario_id"],
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiarioPreferenciaAgrupamentoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioPreferenciaAgrupamentoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/AmbienteFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
        "x-unispec-constraint-entity-exists": "Ambiente",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um ambiente por id.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteFindOneInputView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EventoCreateOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          body: {
            $ref: "ladesa://schemas/v3/generics/EventoInputCreateView.json",
          },
        },
        required: ["body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/EventoFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EventoCreate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiaCalendarioUpdateByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiaCalendario",
              },
            },
            required: ["id"],
          },
          body: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioInputUpdateView.json",
          },
        },
        required: ["params", "body"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/DiaCalendarioFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiaCalendarioUpdateOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DiarioProfessorDeleteByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "DiarioProfessor",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "DiarioProfessorDeleteOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Usuario.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "null",
          },
        ],
        format: "email",
        description: "E-mail do usuário.",
      },
      isSuperUser: {
        type: "boolean",
        description: "Diz que o usuário tem poderes de administrador.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa do usuário.",
      },
      imagemPerfil: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de perfil do usuário.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: [
      "id",
      "nome",
      "matriculaSiape",
      "email",
      "isSuperUser",
      "imagemCapa",
      "imagemPerfil",
      "dateCreated",
      "dateUpdated",
      "dateDeleted",
    ],
    description: "Usuário.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Usuario",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Turma.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      periodo: {
        type: "string",
        minLength: 1,
        description: "Período da Turma.",
      },
      curso: {
        $ref: "ladesa://schemas/v3/generics/Curso.json",
        description: "Curso da Turma.",
      },
      ambientePadraoAula: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Ambiente.json",
          },
          {
            type: "null",
          },
        ],
        description: "Ambiente padrão da sala de aula.",
      },
      imagemCapa: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/Imagem.json",
          },
          {
            type: "null",
          },
        ],
        description: "Imagem de capa da Turma.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "periodo", "curso", "ambientePadraoAula", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Turma.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Turma",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/EstadoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/numeric_id.json",
        description: "Identificador do registro (numérico).",
      },
      nome: {
        type: "string",
        description: "Nome oficial do estado.",
      },
      sigla: {
        type: "string",
        description: "Sigla do estado.",
        "x-unispec-constraint-estado-sigla": true,
      },
    },
    required: ["id", "nome", "sigla"],
    description: "Visão FindOne de um estado.",
    "x-unispec-entity-partial-of": "EstadoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "EstadoFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CampusFindOneByIdOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          params: {
            type: "object",
            properties: {
              id: {
                $ref: "ladesa://schemas/v3/generics/uuid.json",
                description: "Identificador do registro (uuid).",
                "x-unispec-constraint-entity-exists": "Campus",
              },
            },
            required: ["id"],
          },
        },
        required: ["params"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CampusFindOneResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusFindOneById",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/time.json",
    type: "string",
    format: "time",
    description: "Time ISO 8601.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Perfil.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      ativo: {
        type: "boolean",
        description: "Indica se o vínculo está ativo.",
      },
      cargo: {
        type: "string",
        description: "Cargo do usuário no vínculo.",
      },
      campus: {
        $ref: "ladesa://schemas/v3/generics/Campus.json",
        description: "Campus associado ao vínculo.",
      },
      usuario: {
        $ref: "ladesa://schemas/v3/generics/Usuario.json",
        description: "Usuário associado ao vínculo.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "ativo", "cargo", "campus", "usuario", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Vínculo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Perfil",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/DisponibilidadeDiaFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      rrule: {
        type: "string",
        description: "Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.",
      },
      intervaloDeTempo: {
        $ref: "ladesa://schemas/v3/generics/IntervaloDeTempoFindOneResultView.json",
      },
      disponibilidade: {
        $ref: "ladesa://schemas/v3/generics/DisponibilidadeFindOneResultView.json",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
    },
    required: ["id", "rrule", "intervaloDeTempo", "disponibilidade", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de um DisponibilidadeDia.",
    "x-unispec-entity-partial-of": "DisponibilidadeDiaView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "DisponibilidadeDiaFindOneResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ImagemArquivoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      largura: {
        type: "integer",
        description: "Largura da imagem.",
      },
      altura: {
        type: "integer",
        description: "Altura da imagem.",
      },
      formato: {
        type: "string",
        description: "Formato da imagem.",
      },
      mimeType: {
        type: "string",
        description: "Mime-type da imagem.",
      },
      dateCreated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "ladesa://schemas/v3/generics/date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "ladesa://schemas/v3/generics/date_time.json",
          },
          {
            type: "null",
          },
        ],
        description: "Data e hora da exclusão do registro.",
      },
      imagem: {
        $ref: "ladesa://schemas/v3/generics/ImagemFindOneFromImagemArquivoResultView.json",
      },
      arquivo: {
        $ref: "ladesa://schemas/v3/generics/ArquivoFindOneResultView.json",
      },
    },
    required: ["id", "largura", "altura", "formato", "mimeType", "dateCreated", "dateUpdated", "dateDeleted", "imagem", "arquivo"],
    description: "Visão completa de uma versão de uma imagem.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/CursoListOperation.json",
    type: "object",
    properties: {
      input: {
        type: "object",
        properties: {
          queries: {
            type: "object",
            properties: {
              page: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Página de consulta.",
              },
              limit: {
                anyOf: [
                  {
                    type: "integer",
                  },
                  {
                    type: "null",
                  },
                ],
                minimum: 1,
                description: "Limite da quantidade de resultados por página.",
              },
              search: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "null",
                  },
                ],
                description: "Busca textual.",
              },
              sortBy: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "Ordenação.",
              },
              "filter.campus.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.campus.id",
                "x-unispec-gql-key": "filterCampusId",
              },
              "filter.ofertaFormacao.id": {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.ofertaFormacao.id",
                "x-unispec-gql-key": "filterOfertaFormacaoId",
              },
            },
          },
        },
        required: ["queries"],
      },
      output: {
        type: "object",
        properties: {
          success: {
            $ref: "ladesa://schemas/v3/generics/CursoListResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CursoList",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
] as const
