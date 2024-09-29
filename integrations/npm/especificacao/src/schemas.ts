/**
 * Data e hora da criação do registro.
 *
 * Date time ISO 8601.
 *
 * Data e hora da alteração do registro.
 */
export type DateTime = Date

/**
 * Identificador do registro (numérico).
 *
 * Identificador numérico.
 */
export type NumericID = number

export type SortByConstraint = string

/**
 * Identificador do registro (uuid).
 *
 * Identificador Único Universal.
 *
 * Horário que o intervalo de tempo termina.
 *
 * Time ISO 8601.
 *
 * Horário que o intervalo de tempo inicia.
 */
export type Time = string

/**
 * Identificador do registro (uuid).
 *
 * Identificador Único Universal.
 *
 * Horário que o intervalo de tempo termina.
 *
 * Time ISO 8601.
 *
 * Horário que o intervalo de tempo inicia.
 */
export type UUID = string

export interface AmbienteCreateOperation {
  input: AmbienteCreateOperationInput
  output: AmbienteCreateOperationOutput
}

export interface AmbienteCreateOperationInput {
  body: PurpleBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um ambiente.
 */
export interface PurpleBody {
  bloco: BodyBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
  /**
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Dados de entrada para encontrar um bloco por id.
 */
export interface BodyBloco {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface AmbienteCreateOperationOutput {
  success: SuccessElement
  [property: string]: any
}

/**
 * Visão FindOne de um ambiente.
 */
export interface SuccessElement {
  bloco: BlocoElement
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
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
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Visão FindOne de um bloco.
 */
export interface BlocoElement {
  campus: CampusElement
  /**
   * Código do Bloco.
   */
  codigo: string
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
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do Bloco.
   */
  nome: string
}

/**
 * Visão FindOne de um campus.
 */
export interface CampusElement {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
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
  endereco: SuccessEndereco
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Visão FindOne de um endereço.
 */
export interface SuccessEndereco {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  cidade: CidadeElement
  /**
   * Complemento.
   */
  complemento: null | string
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
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Visão FindOne de uma cidade.
 */
export interface CidadeElement {
  estado: EstadoElement
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial da cidade.
   */
  nome: string
}

/**
 * Visão FindOne de um estado.
 */
export interface EstadoElement {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial do estado.
   */
  nome: string
  /**
   * Sigla do estado.
   */
  sigla: string
}

/**
 * Visão FindOne de uma imagem.
 */
export interface SuccessImagemCapa {
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
  versoes: VersoeElement[]
}

/**
 * Visão FindOneFromImagem de uma versão de imagem.
 */
export interface VersoeElement {
  /**
   * Altura da imagem.
   */
  altura: number
  arquivo: ImagemArquivoFindOneFromImagemResultViewArquivo
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
   * Largura da imagem.
   */
  largura: number
  /**
   * Mime-type da imagem.
   */
  mimeType: string
}

/**
 * Dados de saída para encontrar um arquivo por id.
 */
export interface ImagemArquivoFindOneFromImagemResultViewArquivo {
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

export interface AmbienteDeleteByIDOperation {
  input: AmbienteDeleteByIDOperationInput
  output: AmbienteDeleteByIDOperationOutput
}

export interface AmbienteDeleteByIDOperationInput {
  params: PurpleParams
  [property: string]: any
}

export interface PurpleParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AmbienteDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

/**
 * Resultados da busca a ambientes.
 */
export interface AmbienteFindAllResultView {
  /**
   * Resultados da busca atual.
   */
  data: SuccessElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

/**
 * Links da busca.
 */
export interface Links {
  current: null | string
  first: null | string
  last: null | string
  next: null | string
  previous: null | string
}

/**
 * Metadados da busca.
 *
 * Metadados dos resultados de busca.
 */
export interface Meta {
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

export interface AmbienteFindOneByIDOperation {
  input: AmbienteFindOneByIDOperationInput
  output: AmbienteFindOneByIDOperationOutput
}

export interface AmbienteFindOneByIDOperationInput {
  params: FluffyParams
  [property: string]: any
}

export interface FluffyParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AmbienteFindOneByIDOperationOutput {
  success: SuccessElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um ambiente por id.
 */
export interface AmbienteFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um ambiente.
 */
export interface AmbienteFindOneResultView {
  bloco: BlocoElement
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
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
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

export interface AmbienteGetCoverImage {
  input: AmbienteGetCoverImageInput
  output: AmbienteGetCoverImageOutput
}

export interface AmbienteGetCoverImageInput {
  params: TentacledParams
  [property: string]: any
}

export interface TentacledParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AmbienteGetCoverImageOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um ambiente.
 */
export interface AmbienteInputCreateView {
  bloco: BodyBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
  /**
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Dados de entrada para a atualização de um ambiente.
 */
export interface AmbienteInputUpdateView {
  bloco?: BodyBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade?: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo?: string
  /**
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Nome do ambiente/sala.
   */
  nome?: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo?: null | string
}

/**
 * Ambiente.
 */
export interface Ambiente {
  /**
   * Bloco que o ambiente/sala pertence.
   */
  bloco: AmbienteBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
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
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Imagem de capa.
   */
  imagemCapa: ImagemPerfilClass
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Ambiente.
 */
export interface AmbienteElement {
  /**
   * Bloco que o ambiente/sala pertence.
   */
  bloco: AmbienteBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
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
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Imagem de capa.
   */
  imagemCapa: ImagemPerfilClass
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Bloco que o ambiente/sala pertence.
 *
 * Bloco.
 */
export interface AmbienteBloco {
  /**
   * Ambientes.
   */
  ambientes: AmbienteElement[]
  /**
   * Campus.
   */
  campus: BlocoCampus
  /**
   * Código do Bloco.
   */
  codigo: string
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
   * Imagem de capa.
   */
  imagemCapa: ImagemPerfilClass
  /**
   * Nome do Bloco.
   */
  nome: string
}

/**
 * ImagemArquivo.
 */
export interface VersoeClass {
  /**
   * Altura da imagem.
   */
  altura: number
  /**
   * Arquivo.
   */
  arquivo: ImagemArquivoArquivo
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
  imagem: ImagemPerfilClass
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
 * Imagem de capa.
 *
 * Imagem.
 *
 * Imagem de capa do usuário.
 *
 * Imagem de perfil do usuário.
 */
export interface ImagemPerfilClass {
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
  /**
   * Versões da imagem.
   */
  versoes: VersoeClass[]
}

/**
 * Arquivo.
 */
export interface ImagemArquivoArquivo {
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
 * Campus.
 */
export interface BlocoCampus {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
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
   * Endereço do campus
   */
  endereco: CampusEndereco
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Endereço do campus
 *
 * Endereço.
 */
export interface CampusEndereco {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  /**
   * Cidade.
   */
  cidade: EnderecoCidade
  /**
   * Complemento.
   */
  complemento: null | string
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
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Cidade.
 */
export interface EnderecoCidade {
  /**
   * Estado da cidade
   */
  estado: CidadeEstado
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial da cidade.
   */
  nome: string
}

/**
 * Estado da cidade
 *
 * Estado.
 */
export interface CidadeEstado {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial do estado.
   */
  nome: string
  /**
   * Sigla do estado.
   */
  sigla: string
}

export interface AmbienteListOperation {
  input: AmbienteListOperationInput
  output: AmbienteListOperationOutput
}

export interface AmbienteListOperationInput {
  queries: PurpleQueries
  [property: string]: any
}

export interface PurpleQueries {
  filterBlocoId?: string[]
  filterCampusId?: string[]
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
  sortBy?: string[]
  [property: string]: any
}

export interface AmbienteListOperationOutput {
  success: PurpleSuccess
  [property: string]: any
}

/**
 * Resultados da busca a ambientes.
 */
export interface PurpleSuccess {
  /**
   * Resultados da busca atual.
   */
  data: SuccessElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface AmbienteSetCoverImage {
  input: AmbienteSetCoverImageInput
  output: AmbienteSetCoverImageOutput
}

export interface AmbienteSetCoverImageInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: StickyParams
  [property: string]: any
}

export interface StickyParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AmbienteSetCoverImageOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface AmbienteUpdateByIDOperation {
  input: AmbienteUpdateByIDOperationInput
  output: AmbienteUpdateByIDOperationOutput
}

export interface AmbienteUpdateByIDOperationInput {
  body: FluffyBody
  params: IndigoParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um ambiente.
 */
export interface FluffyBody {
  bloco?: BodyBloco
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade?: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo?: string
  /**
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Nome do ambiente/sala.
   */
  nome?: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo?: null | string
}

export interface IndigoParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AmbienteUpdateByIDOperationOutput {
  success: SuccessElement
  [property: string]: any
}

/**
 * Visão completa de um ambiente.
 */
export interface AmbienteView {
  bloco: BlocoElement
  /**
   * Capacidade do ambiente/sala.
   */
  capacidade: number | null
  /**
   * Código do ambiente/sala.
   */
  codigo: string
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
   * Descrição do ambiente/sala.
   */
  descricao?: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do ambiente/sala.
   */
  nome: string
  /**
   * Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química.
   */
  tipo: null | string
}

/**
 * Dados de entrada para encontrar um arquivo por id.
 */
export interface ArquivoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de saída para encontrar um arquivo por id.
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
 * Obtêm o conteúdo de um Arquivo.
 */
export interface ArquivoGetFileOperation {
  input: ArquivoGetFileOperationInput
  output: ArquivoGetFileOperationOutput
}

export interface ArquivoGetFileOperationInput {
  queries: FluffyQueries
  [property: string]: any
}

export interface FluffyQueries {
  /**
   * Acesso via recurso: id.
   */
  idRecurso: string
  /**
   * Acesso via recurso: nome.
   */
  nomeRecurso: string
  [property: string]: any
}

export interface ArquivoGetFileOperationOutput {
  /**
   * Binário do Arquivo.
   */
  success: string
  [property: string]: any
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
 * Visão completa de um arquivo.
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

export interface BlocoCreateOperation {
  input: BlocoCreateOperationInput
  output: BlocoCreateOperationOutput
}

export interface BlocoCreateOperationInput {
  body: TentacledBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um bloco.
 */
export interface TentacledBody {
  campus: BodyCampus
  /**
   * Código do Bloco.
   */
  codigo: string
  /**
   * Nome do Bloco.
   */
  nome: string
}

/**
 * Dados de entrada para encontrar um campus por id.
 */
export interface BodyCampus {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface BlocoCreateOperationOutput {
  success: BlocoElement
  [property: string]: any
}

export interface BlocoDeleteByIDOperation {
  input: BlocoDeleteByIDOperationInput
  output: BlocoDeleteByIDOperationOutput
}

export interface BlocoDeleteByIDOperationInput {
  params: IndecentParams
  [property: string]: any
}

export interface IndecentParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

/**
 * Resultados da busca a blocos.
 */
export interface BlocoFindAllResultView {
  /**
   * Resultados da busca atual.
   */
  data: BlocoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface BlocoFindOneByIDOperation {
  input: BlocoFindOneByIDOperationInput
  output: BlocoFindOneByIDOperationOutput
}

export interface BlocoFindOneByIDOperationInput {
  params: HilariousParams
  [property: string]: any
}

export interface HilariousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoFindOneByIDOperationOutput {
  success: BlocoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um bloco por id.
 */
export interface BlocoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um bloco.
 */
export interface BlocoFindOneResultView {
  campus: CampusElement
  /**
   * Código do Bloco.
   */
  codigo: string
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
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do Bloco.
   */
  nome: string
}

export interface BlocoGetCoverImage {
  input: BlocoGetCoverImageInput
  output: BlocoGetCoverImageOutput
}

export interface BlocoGetCoverImageInput {
  params: AmbitiousParams
  [property: string]: any
}

export interface AmbitiousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoGetCoverImageOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um bloco.
 */
export interface BlocoInputCreateView {
  campus: BodyCampus
  /**
   * Código do Bloco.
   */
  codigo: string
  /**
   * Nome do Bloco.
   */
  nome: string
}

/**
 * Dados de entrada para a atualização de um bloco.
 */
export interface BlocoInputUpdateView {
  campus?: BodyCampus
  /**
   * Código do Bloco.
   */
  codigo?: string
  /**
   * Nome do Bloco.
   */
  nome?: string
}

/**
 * Bloco.
 */
export interface Bloco {
  /**
   * Ambientes.
   */
  ambientes: AmbienteElement[]
  /**
   * Campus.
   */
  campus: BlocoCampus
  /**
   * Código do Bloco.
   */
  codigo: string
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
   * Imagem de capa.
   */
  imagemCapa: ImagemPerfilClass
  /**
   * Nome do Bloco.
   */
  nome: string
}

export interface BlocoListOperation {
  input: BlocoListOperationInput
  output: BlocoListOperationOutput
}

export interface BlocoListOperationInput {
  queries: TentacledQueries
  [property: string]: any
}

export interface TentacledQueries {
  filterCampusId?: string[]
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
  sortBy?: string[]
  [property: string]: any
}

export interface BlocoListOperationOutput {
  success: FluffySuccess
  [property: string]: any
}

/**
 * Resultados da busca a blocos.
 */
export interface FluffySuccess {
  /**
   * Resultados da busca atual.
   */
  data: BlocoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface BlocoSetCoverImage {
  input: BlocoSetCoverImageInput
  output: BlocoSetCoverImageOutput
}

export interface BlocoSetCoverImageInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: CunningParams
  [property: string]: any
}

export interface CunningParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoSetCoverImageOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface BlocoUpdateByIDOperation {
  input: BlocoUpdateByIDOperationInput
  output: BlocoUpdateByIDOperationOutput
}

export interface BlocoUpdateByIDOperationInput {
  body: StickyBody
  params: MagentaParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um bloco.
 */
export interface StickyBody {
  campus?: BodyCampus
  /**
   * Código do Bloco.
   */
  codigo?: string
  /**
   * Nome do Bloco.
   */
  nome?: string
}

export interface MagentaParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoUpdateByIDOperationOutput {
  success: BlocoElement
  [property: string]: any
}

/**
 * Visão completa de um bloco.
 */
export interface BlocoView {
  ambientes: SuccessElement[]
  campus: CampusElement
  /**
   * Código do Bloco.
   */
  codigo: string
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
  imagemCapa: SuccessImagemCapa
  /**
   * Nome do Bloco.
   */
  nome: string
}

/**
 * Operação de criação de um campus.
 */
export interface CampusCreateOperation {
  input: CampusCreateOperationInput
  output: CampusCreateOperationOutput
}

export interface CampusCreateOperationInput {
  body: IndigoBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um campus.
 */
export interface IndigoBody {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
  endereco: BodyEndereco
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Dados de entrada para um endereco.
 */
export interface BodyEndereco {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  cidade: EnderecoInputCidade
  /**
   * Complemento.
   */
  complemento: null | string
  /**
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Dados de entrada para encontrar uma cidade por id.
 */
export interface EnderecoInputCidade {
  /**
   * Identificador do registro (numérico).
   */
  id: number
}

export interface CampusCreateOperationOutput {
  success: CampusElement
  [property: string]: any
}

export interface CampusDeleteOneByIDOperation {
  input: CampusDeleteOneByIDOperationInput
  output: CampusDeleteOneByIDOperationOutput
}

export interface CampusDeleteOneByIDOperationInput {
  params: FriskyParams
  [property: string]: any
}

export interface FriskyParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CampusDeleteOneByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CampusFindAllOperation {
  input: CampusFindAllOperationInput
  output: CampusFindAllOperationOutput
}

export interface CampusFindAllOperationInput {
  queries: StickyQueries
  [property: string]: any
}

export interface StickyQueries {
  filterEnderecoCidadeEstadoId?: string[]
  filterEnderecoCidadeId?: string[]
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
  sortBy?: string[]
  [property: string]: any
}

export interface CampusFindAllOperationOutput {
  success: TentacledSuccess
  [property: string]: any
}

/**
 * Resultados da busca a campi.
 */
export interface TentacledSuccess {
  /**
   * Resultados da busca atual.
   */
  data: CampusElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

/**
 * Resultados da busca a campi.
 */
export interface CampusFindAllResultView {
  /**
   * Resultados da busca atual.
   */
  data: CampusElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface CampusFindOneByIDOperation {
  input: CampusFindOneByIDOperationInput
  output: CampusFindOneByIDOperationOutput
}

export interface CampusFindOneByIDOperationInput {
  params: MischievousParams
  [property: string]: any
}

export interface MischievousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CampusFindOneByIDOperationOutput {
  success: CampusElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um campus por id.
 */
export interface CampusFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um campus.
 */
export interface CampusFindOneResultView {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
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
  endereco: SuccessEndereco
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Dados de entrada para a criação de um campus.
 */
export interface CampusInputCreateView {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
  endereco: BodyEndereco
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Dados de entrada para a atualização de um campus.
 */
export interface CampusInputUpdateView {
  /**
   * Apelido do campus.
   */
  apelido?: string
  /**
   * CNPJ do campus.
   */
  cnpj?: string
  endereco?: BodyEndereco
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia?: string
  /**
   * Razão social do campus.
   */
  razaoSocial?: string
}

/**
 * Campus.
 */
export interface Campus {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
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
   * Endereço do campus
   */
  endereco: CampusEndereco
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

/**
 * Operação de atualização de um campus.
 */
export interface CampusUpdateOperation {
  input: CampusUpdateOperationInput
  output: CampusUpdateOperationOutput
}

export interface CampusUpdateOperationInput {
  body: IndecentBody
  params: BraggadociousParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um campus.
 */
export interface IndecentBody {
  /**
   * Apelido do campus.
   */
  apelido?: string
  /**
   * CNPJ do campus.
   */
  cnpj?: string
  endereco?: BodyEndereco
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia?: string
  /**
   * Razão social do campus.
   */
  razaoSocial?: string
}

export interface BraggadociousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CampusUpdateOperationOutput {
  success: CampusElement
  [property: string]: any
}

/**
 * Visão completa de um campus.
 */
export interface CampusView {
  /**
   * Apelido do campus.
   */
  apelido: string
  /**
   * CNPJ do campus.
   */
  cnpj: string
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
  endereco: SuccessEndereco
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Nome fantasia do campus.
   */
  nomeFantasia: string
  /**
   * Razão social do campus.
   */
  razaoSocial: string
}

export interface CidadeFindAllOperation {
  input: CidadeFindAllOperationInput
  output: CidadeFindAllOperationOutput
}

export interface CidadeFindAllOperationInput {
  queries: IndigoQueries
  [property: string]: any
}

export interface IndigoQueries {
  filterEstadoId?: string[]
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
  sortBy?: string[]
  [property: string]: any
}

export interface CidadeFindAllOperationOutput {
  success: StickySuccess
  [property: string]: any
}

/**
 * Resultados da busca a cidades.
 */
export interface StickySuccess {
  /**
   * Resultados da busca atual.
   */
  data: CidadeElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

/**
 * Resultados da busca a cidades.
 */
export interface CidadeFindAllResultView {
  /**
   * Resultados da busca atual.
   */
  data: CidadeElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface CidadeFindOneByIDOperation {
  input: CidadeFindOneByIDOperationInput
  output: CidadeFindOneByIDOperationOutput
}

export interface CidadeFindOneByIDOperationInput {
  params: Params1
  [property: string]: any
}

export interface Params1 {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

export interface CidadeFindOneByIDOperationOutput {
  success: CidadeElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma cidade por id.
 */
export interface CidadeFindOneInputView {
  /**
   * Identificador do registro (numérico).
   */
  id: number
}

/**
 * Visão FindOne de uma cidade.
 */
export interface CidadeFindOneResultView {
  estado: EstadoElement
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial da cidade.
   */
  nome: string
}

/**
 * Cidade.
 */
export interface Cidade {
  /**
   * Estado da cidade
   */
  estado: CidadeEstado
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial da cidade.
   */
  nome: string
}

/**
 * Visão completa de uma cidade.
 */
export interface CidadeView {
  estado: EstadoElement
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial da cidade.
   */
  nome: string
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
 * Dados de entrada para encontrar um endereço por id.
 */
export interface EnderecoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um endereço.
 */
export interface EnderecoFindOneResultView {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  cidade: CidadeElement
  /**
   * Complemento.
   */
  complemento: null | string
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
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Dados de entrada para um endereco.
 */
export interface EnderecoInput {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  cidade: EnderecoInputCidade
  /**
   * Complemento.
   */
  complemento: null | string
  /**
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Endereço.
 */
export interface Endereco {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  /**
   * Cidade.
   */
  cidade: EnderecoCidade
  /**
   * Complemento.
   */
  complemento: null | string
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
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

/**
 * Visão completa de um endereco.
 */
export interface EnderecoView {
  /**
   * Bairro.
   */
  bairro: string
  /**
   * Código postal (CEP).
   */
  cep: string
  cidade: CidadeElement
  /**
   * Complemento.
   */
  complemento: null | string
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
   * Logradouro.
   */
  logradouro: string
  /**
   * Número.
   */
  numero: number
  /**
   * Ponto de referência.
   */
  pontoReferencia: null | string
}

export interface EstadoFindAllOperation {
  input: EstadoFindAllOperationInput
  output: EstadoFindAllOperationOutput
}

export interface EstadoFindAllOperationInput {
  queries: IndecentQueries
  [property: string]: any
}

export interface IndecentQueries {
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
  sortBy?: string[]
  [property: string]: any
}

export interface EstadoFindAllOperationOutput {
  success: IndigoSuccess
  [property: string]: any
}

/**
 * Resultados da busca a estados.
 */
export interface IndigoSuccess {
  /**
   * Resultados da busca atual.
   */
  data: EstadoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

/**
 * Resultados da busca a estados.
 */
export interface EstadoFindAllResultView {
  /**
   * Resultados da busca atual.
   */
  data: EstadoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface EstadoFindOneByIDOperation {
  input: EstadoFindOneByIDOperationInput
  output: EstadoFindOneByIDOperationOutput
}

export interface EstadoFindOneByIDOperationInput {
  params: Params2
  [property: string]: any
}

export interface Params2 {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

export interface EstadoFindOneByIDOperationOutput {
  success: EstadoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um estado por id.
 */
export interface EstadoFindOneInputView {
  /**
   * Identificador do registro (numérico).
   */
  id: number
}

/**
 * Visão FindOne de um estado.
 */
export interface EstadoFindOneResultView {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial do estado.
   */
  nome: string
  /**
   * Sigla do estado.
   */
  sigla: string
}

/**
 * Estado.
 */
export interface Estado {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial do estado.
   */
  nome: string
  /**
   * Sigla do estado.
   */
  sigla: string
}

/**
 * Visão completa de um estado.
 */
export interface EstadoView {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  /**
   * Nome oficial do estado.
   */
  nome: string
  /**
   * Sigla do estado.
   */
  sigla: string
}

export interface GenericSearchInputView {
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
  sortBy: string[]
}

/**
 * Visão FindOneFromImagem de uma versão de imagem.
 */
export interface ImagemArquivoFindOneFromImagemResultView {
  /**
   * Altura da imagem.
   */
  altura: number
  arquivo: ImagemArquivoFindOneFromImagemResultViewArquivo
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
   * Largura da imagem.
   */
  largura: number
  /**
   * Mime-type da imagem.
   */
  mimeType: string
}

/**
 * Dados de entrada para encontrar uma versão de uma imagem por ID.
 */
export interface ImagemArquivoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma versão de uma versão de imagem.
 */
export interface ImagemArquivoFindOneResultView {
  /**
   * Altura da imagem.
   */
  altura: number
  arquivo: ImagemArquivoFindOneFromImagemResultViewArquivo
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
  imagem: ImagemArquivoFindOneResultViewImagem
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
 * Visão FindOneFromImagemArquivo de uma imagem.
 */
export interface ImagemArquivoFindOneResultViewImagem {
  /**
   * Identificador do registro (uuid).
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
  arquivo: ImagemArquivoArquivo
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
  imagem: ImagemPerfilClass
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
 * Visão completa de uma versão de uma imagem.
 */
export interface ImagemArquivoView {
  /**
   * Altura da imagem.
   */
  altura: number
  arquivo: ImagemArquivoFindOneFromImagemResultViewArquivo
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
  imagem: ImagemArquivoFindOneResultViewImagem
  /**
   * Largura da imagem.
   */
  largura: number
  /**
   * Mime-type da imagem.
   */
  mimeType: string
  [property: string]: any
}

/**
 * Visão FindOneFromImagemArquivo de uma imagem.
 */
export interface ImagemFindOneFromImagemArquivoResultView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para encontrar uma imagem por ID.
 */
export interface ImagemFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma imagem.
 */
export interface ImagemFindOneResultView {
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
  versoes: VersoeElement[]
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
  /**
   * Versões da imagem.
   */
  versoes: VersoeClass[]
}

/**
 * Visão completa de uma Imagem.
 */
export interface ImagemView {
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
  versoes: VersoeElement[]
}

/**
 * Visão FindOne de um Intervalo de Tempo.
 */
export interface IntervaloDeTempoFindOneResultView {
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
   * Horário que o intervalo de tempo termina.
   */
  periodoFim: string
  /**
   * Horário que o intervalo de tempo inicia.
   */
  periodoInicio: string
}

/**
 * Dados de entrada para um Intervalo de Tempo.
 */
export interface IntervaloDeTempoInputView {
  /**
   * Horário que o intervalo de tempo termina.
   */
  periodoFim: string
  /**
   * Horário que o intervalo de tempo inicia.
   */
  periodoInicio: string
}

/**
 * Intervalo de Tempo.
 */
export interface IntervaloDeTempo {
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
   * Horário que o intervalo de tempo termina.
   */
  periodoFim: string
  /**
   * Horário que o intervalo de tempo inicia.
   */
  periodoInicio: string
}

/**
 * Visão completa de um Intervalo de Tempo.
 */
export interface IntervaloDeTempoView {
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
   * Horário que o intervalo de tempo termina.
   */
  periodoFim: string
  /**
   * Horário que o intervalo de tempo inicia.
   */
  periodoInicio: string
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
  Ambiente = "Ambiente",
  AmbienteCreate = "AmbienteCreate",
  AmbienteDeleteOneByID = "AmbienteDeleteOneById",
  AmbienteFindAll = "AmbienteFindAll",
  AmbienteFindAllResultView = "AmbienteFindAllResultView",
  AmbienteFindOneByID = "AmbienteFindOneById",
  AmbienteFindOneInputView = "AmbienteFindOneInputView",
  AmbienteFindOneResultView = "AmbienteFindOneResultView",
  AmbienteGetImagemCapa = "AmbienteGetImagemCapa",
  AmbienteInputCreateView = "AmbienteInputCreateView",
  AmbienteInputUpdateView = "AmbienteInputUpdateView",
  AmbienteSetImagemCapa = "AmbienteSetImagemCapa",
  AmbienteUpdate = "AmbienteUpdate",
  AmbienteView = "AmbienteView",
  Arquivo = "Arquivo",
  ArquivoFindOneInputView = "ArquivoFindOneInputView",
  ArquivoFindOneResultView = "ArquivoFindOneResultView",
  ArquivoGetFile = "ArquivoGetFile",
  ArquivoView = "ArquivoView",
  Bloco = "Bloco",
  BlocoCreate = "BlocoCreate",
  BlocoDeleteOneByID = "BlocoDeleteOneById",
  BlocoFindAll = "BlocoFindAll",
  BlocoFindAllResultView = "BlocoFindAllResultView",
  BlocoFindOneByID = "BlocoFindOneById",
  BlocoFindOneInputView = "BlocoFindOneInputView",
  BlocoFindOneResultView = "BlocoFindOneResultView",
  BlocoGetImagemCapa = "BlocoGetImagemCapa",
  BlocoInputCreateView = "BlocoInputCreateView",
  BlocoInputUpdateView = "BlocoInputUpdateView",
  BlocoSetImagemCapa = "BlocoSetImagemCapa",
  BlocoUpdate = "BlocoUpdate",
  BlocoView = "BlocoView",
  Campus = "Campus",
  CampusCreate = "CampusCreate",
  CampusDeleteOneByID = "CampusDeleteOneById",
  CampusFindAll = "CampusFindAll",
  CampusFindAllResultView = "CampusFindAllResultView",
  CampusFindOneByID = "CampusFindOneById",
  CampusFindOneInputView = "CampusFindOneInputView",
  CampusFindOneResultView = "CampusFindOneResultView",
  CampusInputCreateView = "CampusInputCreateView",
  CampusInputUpdateView = "CampusInputUpdateView",
  CampusUpdate = "CampusUpdate",
  CampusView = "CampusView",
  Cidade = "Cidade",
  CidadeFindAll = "CidadeFindAll",
  CidadeFindAllResultView = "CidadeFindAllResultView",
  CidadeFindOneByID = "CidadeFindOneById",
  CidadeFindOneInputView = "CidadeFindOneInputView",
  CidadeFindOneResultView = "CidadeFindOneResultView",
  CidadeView = "CidadeView",
  Endereco = "Endereco",
  EnderecoFindOneByID = "EnderecoFindOneById",
  EnderecoFindOneInputView = "EnderecoFindOneInputView",
  EnderecoFindOneResultView = "EnderecoFindOneResultView",
  EnderecoInputView = "EnderecoInputView",
  EnderecoView = "EnderecoView",
  Estado = "Estado",
  EstadoFindAll = "EstadoFindAll",
  EstadoFindAllResultView = "EstadoFindAllResultView",
  EstadoFindOneByID = "EstadoFindOneById",
  EstadoFindOneInputView = "EstadoFindOneInputView",
  EstadoFindOneResultView = "EstadoFindOneResultView",
  EstadoView = "EstadoView",
  GetImagem = "GetImagem",
  ImageFindOneFromImagemArquivoResultView = "ImageFindOneFromImagemArquivoResultView",
  Imagem = "Imagem",
  ImagemArquivo = "ImagemArquivo",
  ImagemArquivoFindOneFromImagemResultView = "ImagemArquivoFindOneFromImagemResultView",
  ImagemArquivoFindOneInputView = "ImagemArquivoFindOneInputView",
  ImagemArquivoFindOneResultView = "ImagemArquivoFindOneResultView",
  ImagemArquivoView = "ImagemArquivoView",
  ImagemFindOneInputView = "ImagemFindOneInputView",
  ImagemFindOneResultView = "ImagemFindOneResultView",
  ImagemView = "ImagemView",
  IntervaloDeTempo = "IntervaloDeTempo",
  IntervaloDeTempoFindOneResultView = "IntervaloDeTempoFindOneResultView",
  IntervaloDeTempoInputView = "IntervaloDeTempoInputView",
  IntervaloDeTempoView = "IntervaloDeTempoView",
  PaginatedFilterView = "PaginatedFilterView",
  PaginatedInputBaseView = "PaginatedInputBaseView",
  PaginatedInputView = "PaginatedInputView",
  PaginatedResultLinksView = "PaginatedResultLinksView",
  PaginatedResultMetaView = "PaginatedResultMetaView",
  PaginatedResultView = "PaginatedResultView",
  PaginatedSortByView = "PaginatedSortByView",
  SearchInputView = "SearchInputView",
  SetImagem = "SetImagem",
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
  imagemCapa?: ImagemPerfilClass
  /**
   * Imagem de perfil do usuário.
   */
  imagemPerfil?: ImagemPerfilClass
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
