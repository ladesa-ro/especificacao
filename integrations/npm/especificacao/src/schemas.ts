/**
 * Data e hora da criação do registro.
 *
 * Date time ISO 8601.
 *
 * Data e hora da alteração do registro.
 */
export type DateTime = Date

/**
 * Identificador do registro.
 *
 * Identificador Único Universal.
 */
export type UUID = string

/**
 * Arquivo.
 */
export interface Arquivo {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Formato do arquivo.
   */
  mimeType?: string
  /**
   * Nome do arquivo.
   */
  nome?: string
  /**
   * Tamanho do arquivo (em bytes).
   */
  sizeBytes?: number
  /**
   * Estratégia de armazenamento do conteúdo.
   */
  storageType: string
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneInputView {
  /**
   * Identificador do registro.
   */
  id: string
}

/**
 * Dados de saída para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneResultView {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Formato do arquivo.
   */
  mimeType?: string
  /**
   * Nome do arquivo.
   */
  nome?: string
  /**
   * Tamanho do arquivo (em bytes).
   */
  sizeBytes?: number
  /**
   * Estratégia de armazenamento do conteúdo.
   */
  storageType: string
}

/**
 * Visão completa de um Arquivo.
 */
export interface ArquivoView {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Formato do arquivo.
   */
  mimeType?: string
  /**
   * Nome do arquivo.
   */
  nome?: string
  /**
   * Tamanho do arquivo (em bytes).
   */
  sizeBytes?: number
  /**
   * Estratégia de armazenamento do conteúdo.
   */
  storageType: string
}

/**
 * Estrutura datada.
 */
export interface DatedObject {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  [property: string]: any
}

/**
 * Define os nomes das entidades.
 */
export enum EntityToken {
  Arquivo = "Arquivo",
  ArquivoFindOneInputView = "ArquivoFindOneInputView",
  ArquivoFindOneResultView = "ArquivoFindOneResultView",
  ArquivoView = "ArquivoView",
  Imagem = "Imagem",
  ImagemArquivo = "ImagemArquivo",
  Usuario = "Usuario",
}

/**
 * Imagem.
 */
export interface Imagem {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Descrição da imagem.
   */
  descricao?: string
  /**
   * Identificador do registro.
   */
  id: string
}

/**
 * ImagemArquivo.
 */
export interface ImagemArquivo {
  /**
   * Altura da imagem.
   */
  altura: number
  /**
   * Arquivo.
   */
  arquivo: ArquivoClass
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Formato da imagem.
   */
  formato: string
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Imagem.
   */
  imagem: ImagemClass
  /**
   * Largura da imagem.
   */
  largura: number
  /**
   * Mime-type da imagem.
   */
  mimeType: string
}

/**
 * Arquivo.
 */
export interface ArquivoClass {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Formato do arquivo.
   */
  mimeType?: string
  /**
   * Nome do arquivo.
   */
  nome?: string
  /**
   * Tamanho do arquivo (em bytes).
   */
  sizeBytes?: number
  /**
   * Estratégia de armazenamento do conteúdo.
   */
  storageType: string
}

/**
 * Imagem.
 *
 * Imagem de capa do usuário.
 *
 * Imagem de perfil do usuário.
 */
export interface ImagemClass {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * Descrição da imagem.
   */
  descricao?: string
  /**
   * Identificador do registro.
   */
  id: string
}

/**
 * Estrutura identificada por id no formato uuid.
 */
export interface ObjectUUID {
  /**
   * Identificador do registro.
   */
  id: string
  [property: string]: any
}

/**
 * Usuário.
 */
export interface Usuario {
  /**
   * Data e hora da criação do registro.
   */
  dateCreated: Date
  /**
   * Data e hora da exclusão do registro.
   */
  dateDeleted: Date | null
  /**
   * Data e hora da alteração do registro.
   */
  dateUpdated: Date
  /**
   * E-mail do usuário.
   */
  email?: string
  /**
   * Identificador do registro.
   */
  id: string
  /**
   * Imagem de capa do usuário.
   */
  imagemCapa?: ImagemClass
  /**
   * Imagem de perfil do usuário.
   */
  imagemPerfil?: ImagemClass
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape?: string
  /**
   * Nome do usuário.
   */
  nome?: string
}
