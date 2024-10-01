export const Nodes = [
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
    $id: "ladesa://schemas/v3/generics/AmbienteFindAllResultView.json",
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
    "x-unispec-entity-id": "AmbienteFindAllResultView",
    additionalProperties: false,
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
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
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
    $id: "ladesa://schemas/v3/generics/UsuarioInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
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
        default: null,
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
        default: null,
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
      nome: {
        type: "string",
        description: "Nome do arquivo.",
      },
      mimeType: {
        type: "string",
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        type: "integer",
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
    required: ["id", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão completa de um arquivo.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ArquivoView",
    additionalProperties: false,
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
              filterCampusId: {
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
            $ref: "ladesa://schemas/v3/generics/BlocoFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "BlocoFindAll",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
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
        type: "string",
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
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
    "x-unispec-operation-id": "AmbienteUpdate",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "mutation",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/sort_by_constraint.json",
    type: "string",
    pattern: "^[\\D\\.]+:(ASC|DESC)$",
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
      nome: {
        type: "string",
        description: "Nome do arquivo.",
      },
      mimeType: {
        type: "string",
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        type: "integer",
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
    required: ["id", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
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
    $id: "ladesa://schemas/v3/generics/UsuarioView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
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
    $id: "ladesa://schemas/v3/generics/AmbienteInputUpdateView.json",
    type: "object",
    properties: {
      nome: {
        type: "string",
        minLength: 1,
        description: "Nome do ambiente/sala.",
      },
      descricao: {
        type: "string",
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
    $id: "ladesa://schemas/v3/generics/ImagemFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        type: "string",
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
    required: ["id", "versoes", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Visão FindOne de uma imagem.",
    "x-unispec-entity-partial-of": "ImagemView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemFindOneResultView",
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
    $id: "ladesa://schemas/v3/generics/Imagem.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        type: "string",
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
    required: ["id", "versoes", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Imagem.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Imagem",
    additionalProperties: false,
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
      "UsuarioFindAllResultView",
      "UsuarioInputCreateView",
      "UsuarioInputUpdateView",
      "UsuarioFindOneById",
      "UsuarioDeleteOneById",
      "UsuarioFindAll",
      "UsuarioCreate",
      "UsuarioUpdate",
      "UsuarioGetImagemCapa",
      "UsuarioSetImagemCapa",
      "UsuarioGetImagemPerfil",
      "UsuarioSetImagemPerfil",
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
      "EstadoFindAllResultView",
      "EstadoFindOneById",
      "EstadoFindAll",
      "Cidade",
      "CidadeView",
      "CidadeFindOneInputView",
      "CidadeFindOneResultView",
      "CidadeFindAllResultView",
      "CidadeFindOneById",
      "CidadeFindAll",
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
      "CampusFindAllResultView",
      "CampusInputUpdateView",
      "CampusInputCreateView",
      "CampusFindOneById",
      "CampusDeleteOneById",
      "CampusFindAll",
      "CampusCreate",
      "CampusUpdate",
      "Bloco",
      "BlocoView",
      "BlocoInputUpdateView",
      "BlocoInputCreateView",
      "BlocoFindOneInputView",
      "BlocoFindOneResultView",
      "BlocoFindAllResultView",
      "BlocoFindOneById",
      "BlocoDeleteOneById",
      "BlocoFindAll",
      "BlocoCreate",
      "BlocoUpdate",
      "BlocoGetImagemCapa",
      "BlocoSetImagemCapa",
      "Ambiente",
      "AmbienteView",
      "AmbienteInputUpdateView",
      "AmbienteInputCreateView",
      "AmbienteFindOneInputView",
      "AmbienteFindOneResultView",
      "AmbienteFindAllResultView",
      "AmbienteFindOneById",
      "AmbienteDeleteOneById",
      "AmbienteFindAll",
      "AmbienteCreate",
      "AmbienteUpdate",
      "AmbienteGetImagemCapa",
      "AmbienteSetImagemCapa",
    ],
    description: "Define os nomes de indentificação das entidades.",
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
        default: null,
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
        default: null,
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
    $id: "ladesa://schemas/v3/generics/CampusFindAllOperation.json",
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
              filterEnderecoCidadeId: {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.endereco.cidade.id",
                "x-unispec-gql-key": "filterEnderecoCidadeId",
              },
              filterEnderecoCidadeEstadoId: {
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
            $ref: "ladesa://schemas/v3/generics/CampusFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CampusFindAll",
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
        type: "string",
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
    required: ["nome", "codigo", "capacidade", "tipo", "bloco"],
    description: "Dados de entrada para a criação de um ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteInputCreateView",
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
    $id: "ladesa://schemas/v3/generics/CidadeFindAllOperation.json",
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
              filterEstadoId: {
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
            $ref: "ladesa://schemas/v3/generics/CidadeFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "CidadeFindAll",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
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
    "x-unispec-operation-id": "BlocoUpdate",
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
    "x-unispec-operation-id": "UsuarioUpdate",
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
    $id: "ladesa://schemas/v3/generics/CampusFindAllResultView.json",
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
    "x-unispec-entity-id": "CampusFindAllResultView",
    additionalProperties: false,
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
    $id: "ladesa://schemas/v3/generics/numeric_id.json",
    type: "integer",
    minimum: 1,
    description: "Identificador numérico.",
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
            $ref: "ladesa://schemas/v3/generics/UsuarioFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "UsuarioFindAll",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/UsuarioFindAllResultView.json",
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
    "x-unispec-entity-id": "UsuarioFindAllResultView",
    additionalProperties: false,
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
        type: "string",
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
    required: ["id", "nome", "codigo", "capacidade", "tipo", "dateCreated", "dateUpdated", "dateDeleted", "bloco", "imagemCapa"],
    description: "Visão completa de um ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "AmbienteView",
    additionalProperties: false,
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
      nome: {
        type: "string",
        description: "Nome do arquivo.",
      },
      mimeType: {
        type: "string",
        description: "Formato do arquivo.",
      },
      sizeBytes: {
        type: "integer",
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
    required: ["id", "storageType", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Dados de saída para encontrar um arquivo por id.",
    "x-unispec-entity-partial-of": "ArquivoView",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ArquivoFindOneResultView",
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
    $id: "ladesa://schemas/v3/generics/EstadoFindAllResultView.json",
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
    "x-unispec-entity-id": "EstadoFindAllResultView",
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
        type: "string",
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
    required: ["id", "nome", "codigo", "capacidade", "tipo", "bloco", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
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
        default: null,
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
        default: null,
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
    $id: "ladesa://schemas/v3/generics/EstadoFindAllOperation.json",
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
            $ref: "ladesa://schemas/v3/generics/EstadoFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "EstadoFindAll",
    additionalProperties: false,
    "x-unispec-operation-meta": {
      gql: {
        kind: "query",
      },
    },
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
    "x-unispec-operation-id": "CampusUpdate",
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
        type: "string",
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
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
              filterBlocoId: {
                type: "array",
                items: {
                  type: "string",
                },
                "x-unispec-http-key": "filter.bloco.id",
                "x-unispec-gql-key": "filterBlocoId",
              },
              filterCampusId: {
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
            $ref: "ladesa://schemas/v3/generics/AmbienteFindAllResultView.json",
          },
        },
        required: ["success"],
      },
    },
    required: ["input", "output"],
    "x-unispec-kind": "operation",
    "x-unispec-operation-id": "AmbienteFindAll",
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
        type: "string",
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
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
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
    required: ["id", "nome", "codigo", "capacidade", "tipo", "bloco", "imagemCapa", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Ambiente.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "Ambiente",
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
    $id: "ladesa://schemas/v3/generics/ImagemView.json",
    type: "object",
    properties: {
      id: {
        $ref: "ladesa://schemas/v3/generics/uuid.json",
        description: "Identificador do registro (uuid).",
      },
      descricao: {
        type: "string",
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
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted", "versoes"],
    description: "Visão completa de uma Imagem.",
    "x-unispec-kind": "entity",
    "x-unispec-entity-id": "ImagemView",
    additionalProperties: false,
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
        default: null,
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
        default: null,
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
    $id: "ladesa://schemas/v3/generics/CidadeFindAllResultView.json",
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
    "x-unispec-entity-id": "CidadeFindAllResultView",
    additionalProperties: false,
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/BlocoFindAllResultView.json",
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
    "x-unispec-entity-id": "BlocoFindAllResultView",
    additionalProperties: false,
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
        type: "string",
        minLength: 1,
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        minLength: 1,
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
        format: "email",
        description: "E-mail do usuário.",
      },
      isSuperUser: {
        type: "boolean",
        description: "Diz que o usuário tem poderes de administrador.",
      },
      imagemCapa: {
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
        description: "Imagem de capa do usuário.",
      },
      imagemPerfil: {
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
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
]
