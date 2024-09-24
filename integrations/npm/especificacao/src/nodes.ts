export const Nodes = [
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "uuid.json",
    type: "string",
    format: "uuid",
    description: "Identificador Único Universal.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ArquivoView.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
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
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "Arquivo.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
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
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "Imagem.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
      },
      descricao: {
        type: "string",
        description: "Descrição da imagem.",
      },
      dateCreated: {
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "EntityToken.json",
    type: "string",
    enum: ["Arquivo", "ArquivoView", "ArquivoFindOneInputView", "ArquivoFindOneResultView", "Usuario", "Imagem", "ImagemArquivo"],
    description: "Define os nomes das entidades.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ArquivoFindOneResultView.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
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
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "DatedObject.json",
    type: "object",
    properties: {
      dateCreated: {
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "ObjectUuid.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
      },
    },
    required: ["id"],
    description: "Estrutura identificada por id no formato uuid.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "date_time.json",
    type: "string",
    format: "date-time",
    description: "Date time ISO 8601.",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "ImagemArquivo.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
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
        $ref: "Imagem.json",
        description: "Imagem.",
      },
      arquivo: {
        $ref: "Arquivo.json",
        description: "Arquivo.",
      },
      dateCreated: {
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
    $id: "ArquivoFindOneInputView.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
      },
    },
    required: ["id"],
    description: "Dados de entrada para encontrar um Arquivo por ID.",
    additionalProperties: false,
    "x-ladesa-entity-token": "ArquivoFindOneInputView",
  },
  {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "Usuario.json",
    type: "object",
    properties: {
      id: {
        $ref: "uuid.json",
        description: "Identificador do registro.",
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
        $ref: "Imagem.json",
        description: "Imagem de capa do usuário.",
      },
      imagemPerfil: {
        $ref: "Imagem.json",
        description: "Imagem de perfil do usuário.",
      },
      dateCreated: {
        $ref: "date_time.json",
        description: "Data e hora da criação do registro.",
      },
      dateUpdated: {
        $ref: "date_time.json",
        description: "Data e hora da alteração do registro.",
      },
      dateDeleted: {
        anyOf: [
          {
            $ref: "date_time.json",
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
