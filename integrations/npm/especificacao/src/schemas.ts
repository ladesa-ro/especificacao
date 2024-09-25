/**
 * Data e hora da criação do registro.
 *
 * Date time ISO 8601.
 *
 * Data e hora da alteração do registro.
 */
export type DateTime = Date

/**
 * Identificador do registro (uuid).
 *
 * Identificador Único Universal.
 */
export type UUID = string

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneInputView {
  /**
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
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
   * Identificador do registro (uuid).
   */
  id: string
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
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Estrutura identificada por id no formato numérico.
 */
export interface ObjectIntegerID {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

/**
 * Estrutura identificada por id no formato uuid.
 */
export interface ObjectUUID {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

/**
 * Configuração de filtro por restrições de uma propriedade.
 */
export interface PaginationFilterView {
  /**
   * Propriedade filtrada.
   */
  property: string
  /**
   * Restrições de filtragem.
   */
  restrictions: string[]
}

export interface PaginationInputBaseView {
  /**
   * Limite da quantidade de resultados por página.
   */
  limit?: number | null
  /**
   * Página de consulta.
   */
  page?: number | null
  /**
   * Busca textual.
   */
  search?: null | string
}

export interface PaginationInputView {
  /**
   * Filtros.
   */
  filter: FilterElement[]
  /**
   * Limite da quantidade de resultados por página.
   */
  limit?: number | null
  /**
   * Página de consulta.
   */
  page?: number | null
  /**
   * Busca textual.
   */
  search?: null | string
  /**
   * Ordenação.
   */
  sortBy: SortByElement[]
}

/**
 * Configuração de filtro por restrições de uma propriedade.
 */
export interface FilterElement {
  /**
   * Propriedade filtrada.
   */
  property: string
  /**
   * Restrições de filtragem.
   */
  restrictions: string[]
}

/**
 * Configuração de ordenação de uma propriedade.
 */
export interface SortByElement {
  /**
   * Modo de ordenação.
   */
  mode: string
  /**
   * Propriedade ordenada.
   */
  property: string
}

export interface PaginationResultLinks {
  current: null | string
  first: null | string
  last: null | string
  next: null | string
  previous: null | string
}

/**
 * Metadados dos resultados de busca.
 */
export interface PaginationResultMeta {
  /**
   * Página atual.
   */
  currentPage: number
  /**
   * Filtros.
   */
  filter: FilterElement[]
  /**
   * Quantidade de itens por página.
   */
  itemsPerPage: number
  /**
   * Termo textual da busca.
   */
  search: string
  /**
   * Ordenação.
   */
  sortBy: SortByElement[]
  /**
   * Total de itens.
   */
  totalItems: number
  /**
   * Quantidade total de páginas.
   */
  totalPages: number
}

/**
 * Configuração de ordenação de uma propriedade.
 */
export interface PaginationSortByView {
  /**
   * Modo de ordenação.
   */
  mode: string
  /**
   * Propriedade ordenada.
   */
  property: string
}

/**
 * Define os nomes de indentificação das entidades.
 */
export enum Tokens {
  Arquivo = "Arquivo",
  ArquivoFindOneInputView = "ArquivoFindOneInputView",
  ArquivoFindOneResultView = "ArquivoFindOneResultView",
  ArquivoView = "ArquivoView",
  Imagem = "Imagem",
  ImagemArquivo = "ImagemArquivo",
  PaginatedFilterView = "PaginatedFilterView",
  PaginatedInputBaseView = "PaginatedInputBaseView",
  PaginatedInputView = "PaginatedInputView",
  PaginatedResultLinksView = "PaginatedResultLinksView",
  PaginatedResultMetaView = "PaginatedResultMetaView",
  PaginatedResultView = "PaginatedResultView",
  PaginatedSortByView = "PaginatedSortByView",
  Usuario = "Usuario",
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
   * Identificador do registro (uuid).
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
