export const Nodes = [
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/uuid.json",
    type: "string",
    format: "uuid",
    description: "Identificador Único Universal.",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedResultLinksView",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedResultMetaView",
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
    description: "Visão completa de um Arquivo.",
    additionalProperties: false,
    "x-ladesa-entity-token": "ArquivoView",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "Arquivo",
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
    required: ["id", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Imagem.",
    additionalProperties: false,
    "x-ladesa-entity-token": "Imagem",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/Tokens.json",
    type: "string",
    enum: [
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
      "Usuario",
      "Imagem",
      "ImagemArquivo",
    ],
    description: "Define os nomes de indentificação das entidades.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationInputView.json",
    type: "object",
    properties: {
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedInputView",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/PaginationInputBaseView.json",
    type: "object",
    properties: {
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedInputBaseView",
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
    description: "Dados de saída para encontrar um Arquivo por ID.",
    "x-ladesa-entity-partial-of-token": "ArquivoView",
    additionalProperties: false,
    "x-ladesa-entity-token": "ArquivoFindOneResultView",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ladesa://schemas/v3/generics/ObjectIntegerId.json",
    type: "object",
    properties: {
      id: {
        type: "integer",
        minimum: -2147483648,
        maximum: 2147483647,
        description: "Identificador do registro (numérico).",
      },
    },
    required: ["id"],
    description: "Estrutura identificada por id no formato numérico.",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedSortByView",
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
        $ref: "ladesa://schemas/v3/generics/Imagem.json",
        description: "Imagem.",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "ImagemArquivo",
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
    additionalProperties: false,
    "x-ladesa-entity-token": "PaginatedFilterView",
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
    description: "Dados de entrada para encontrar um Arquivo por ID.",
    additionalProperties: false,
    "x-ladesa-entity-token": "ArquivoFindOneInputView",
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
        description: "Nome do usuário.",
      },
      matriculaSiape: {
        type: "string",
        description: "Matrícula SIAPE do usuário.",
      },
      email: {
        type: "string",
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
    required: ["id", "isSuperUser", "dateCreated", "dateUpdated", "dateDeleted"],
    description: "Usuário.",
    additionalProperties: false,
    "x-ladesa-entity-token": "Usuario",
  },
]
