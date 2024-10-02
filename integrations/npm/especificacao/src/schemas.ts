/**
 * Data e hora da criação do registro.
 *
 * Date time ISO 8601.
 *
 * Data e hora da alteração do registro.
 *
 * Data e hora de início da reserva.
 *
 * Data e hora de término da reserva.
 *
 * Date ISO 8601.
 *
 * Data.
 */
export type PurpleDate = Date

/**
 * Data e hora da criação do registro.
 *
 * Date time ISO 8601.
 *
 * Data e hora da alteração do registro.
 *
 * Data e hora de início da reserva.
 *
 * Data e hora de término da reserva.
 *
 * Date ISO 8601.
 *
 * Data.
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
  success: AmbienteElement
  [property: string]: any
}

/**
 * Visão FindOne de um ambiente.
 */
export interface AmbienteElement {
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
  success: AmbienteElement
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
  imagemCapa: BlocoImagem
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
 *
 * Ambiente reservado.
 */
export interface AmbientePadraoElement {
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
  imagemCapa: BlocoImagem
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
  ambientes: AmbientePadraoElement[]
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
  imagemCapa: BlocoImagem
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
  imagem: BlocoImagem
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
 * Imagem de capa do curso.
 *
 * Imagem de capa da disciplina.
 *
 * Imagem de capa do diário.
 *
 * Imagem de capa da Turma.
 *
 * Imagem de capa do usuário.
 *
 * Imagem de perfil do usuário.
 */
export interface BlocoImagem {
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
 *
 * Campus ao qual o calendário letivo pertence.
 *
 * Campus que o curso pertence.
 *
 * Campus associado ao vínculo.
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
  data: AmbienteElement[]
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

/**
 * Resultados da busca a ambientes.
 */
export interface AmbienteListResultView {
  /**
   * Resultados da busca atual.
   */
  data: AmbienteElement[]
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
  success: AmbienteElement
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

/**
 * Dados de entrada para definir a senha inicial.
 */
export interface AuthCredentialsSetInitialPasswordInputView {
  /**
   * Matrícula SIAPE.
   */
  matriculaSiape: string
  /**
   * Nova senha.
   */
  senha: string
}

/**
 * Operação para definir a senha inicial.
 */
export interface AuthCredentialsSetInitialPasswordOperation {
  input: AuthCredentialsSetInitialPasswordOperationInput
  output: AuthCredentialsSetInitialPasswordOperationOutput
}

export interface AuthCredentialsSetInitialPasswordOperationInput {
  body: TentacledBody
  [property: string]: any
}

/**
 * Dados de entrada para definir a senha inicial.
 */
export interface TentacledBody {
  /**
   * Matrícula SIAPE.
   */
  matriculaSiape: string
  /**
   * Nova senha.
   */
  senha: string
}

export interface AuthCredentialsSetInitialPasswordOperationOutput {
  success: boolean
  [property: string]: any
}

/**
 * Dados de entrada para autenticação.
 */
export interface AuthLoginInputView {
  /**
   * Matrícula SIAPE.
   */
  matriculaSiape: string
  /**
   * Senha do usuário.
   */
  senha: string
}

/**
 * Operação de login.
 */
export interface AuthLoginOperation {
  input: AuthLoginOperationInput
  output: AuthLoginOperationOutput
}

export interface AuthLoginOperationInput {
  body: StickyBody
  [property: string]: any
}

/**
 * Dados de entrada para autenticação.
 */
export interface StickyBody {
  /**
   * Matrícula SIAPE.
   */
  matriculaSiape: string
  /**
   * Senha do usuário.
   */
  senha: string
}

export interface AuthLoginOperationOutput {
  success: FluffySuccess
  [property: string]: any
}

/**
 * Credenciais de sessão.
 */
export interface FluffySuccess {
  /**
   * Token de acesso.
   */
  access_token: null | string
  /**
   * Tempo de expiração do token.
   */
  expires_at: number | null
  /**
   * Tempo de expiração do token.
   */
  expires_in: number | null
  /**
   * Token de identificação.
   */
  id_token: null | string
  /**
   * Token de refresh.
   */
  refresh_token: null | string
  /**
   * Escopo da autenticação.
   */
  scope: null | string
  /**
   * Estado da sessão.
   */
  session_state: null | string
  /**
   * Tipo do token.
   */
  token_type: null | string
}

/**
 * Dados de entrada para refresh de autenticação.
 */
export interface AuthRefreshInputView {
  /**
   * Token de refresh.
   */
  refreshToken: string
}

/**
 * Obtêm as credenciais de sessão por meio do envio do token de refresh.
 */
export interface AuthRefreshOperation {
  input: AuthRefreshOperationInput
  output: AuthRefreshOperationOutput
}

export interface AuthRefreshOperationInput {
  body: IndigoBody
  [property: string]: any
}

/**
 * Dados de entrada para refresh de autenticação.
 */
export interface IndigoBody {
  /**
   * Token de refresh.
   */
  refreshToken: string
}

export interface AuthRefreshOperationOutput {
  success: FluffySuccess
  [property: string]: any
}

/**
 * Credenciais de sessão.
 */
export interface AuthSessionCredentialsView {
  /**
   * Token de acesso.
   */
  access_token: null | string
  /**
   * Tempo de expiração do token.
   */
  expires_at: number | null
  /**
   * Tempo de expiração do token.
   */
  expires_in: number | null
  /**
   * Token de identificação.
   */
  id_token: null | string
  /**
   * Token de refresh.
   */
  refresh_token: null | string
  /**
   * Escopo da autenticação.
   */
  scope: null | string
  /**
   * Estado da sessão.
   */
  session_state: null | string
  /**
   * Tipo do token.
   */
  token_type: null | string
}

/**
 * Obtêm informações sobre o estado de autenticação do ator.
 */
export interface AuthWhoAmIOperation {
  output: AuthWhoAmIOperationOutput
}

export interface AuthWhoAmIOperationOutput {
  success: TentacledSuccess
  [property: string]: any
}

/**
 * Informações sobre o ator..
 */
export interface TentacledSuccess {
  /**
   * Vínculos do usuário logado.
   */
  perfisAtivos: PerfisAtivoElement[]
  /**
   * Usuário autenticado.
   */
  usuario: UsuarioElement
}

/**
 * Visão FindOne de um Vínculo.
 */
export interface PerfisAtivoElement {
  /**
   * Indica se o vínculo está ativo.
   */
  ativo: boolean
  campus: CampusElement
  /**
   * Cargo do usuário no vínculo.
   */
  cargo: string
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
  usuario: UsuarioElement
}

/**
 * Visão FindOne de um Usuário.
 *
 * Usuário autenticado.
 */
export interface UsuarioElement {
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
  email: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  imagemPerfil: SuccessImagemCapa
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

/**
 * Informações sobre o ator..
 */
export interface AuthWhoAmIResultView {
  /**
   * Vínculos do usuário logado.
   */
  perfisAtivos: PerfisAtivoElement[]
  /**
   * Usuário autenticado.
   */
  usuario: UsuarioElement
}

export interface BlocoCreateOperation {
  input: BlocoCreateOperationInput
  output: BlocoCreateOperationOutput
}

export interface BlocoCreateOperationInput {
  body: IndecentBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um bloco.
 */
export interface IndecentBody {
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
  ambientes: AmbientePadraoElement[]
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
  imagemCapa: BlocoImagem
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
  success: StickySuccess
  [property: string]: any
}

/**
 * Resultados da busca a blocos.
 */
export interface StickySuccess {
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

/**
 * Resultados da busca a blocos.
 */
export interface BlocoListResultView {
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
  body: HilariousBody
  params: MagentaParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um bloco.
 */
export interface HilariousBody {
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
  ambientes: AmbienteElement[]
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

export interface CalendarioLetivoCreateOperation {
  input: CalendarioLetivoCreateOperationInput
  output: CalendarioLetivoCreateOperationOutput
}

export interface CalendarioLetivoCreateOperationInput {
  body: AmbitiousBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um calendário letivo.
 */
export interface AmbitiousBody {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  campus: BodyCampus
  /**
   * Nome do calendário letivo.
   */
  nome: string
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface BodyOfertaFormacao {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface CalendarioLetivoCreateOperationOutput {
  success: CalendarioElement
  [property: string]: any
}

/**
 * Visão FindOne de um calendário letivo.
 */
export interface CalendarioElement {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  campus: CampusElement
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
   * Nome do calendário letivo.
   */
  nome: string
  ofertaFormacao: OfertaFormacaoElement
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface OfertaFormacaoElement {
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
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

export interface CalendarioLetivoDeleteByIDOperation {
  input: CalendarioLetivoDeleteByIDOperationInput
  output: CalendarioLetivoDeleteByIDOperationOutput
}

export interface CalendarioLetivoDeleteByIDOperationInput {
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

export interface CalendarioLetivoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CalendarioLetivoFindOneByIDOperation {
  input: CalendarioLetivoFindOneByIDOperationInput
  output: CalendarioLetivoFindOneByIDOperationOutput
}

export interface CalendarioLetivoFindOneByIDOperationInput {
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

export interface CalendarioLetivoFindOneByIDOperationOutput {
  success: CalendarioElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um calendário letivo por ID.
 */
export interface CalendarioLetivoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um calendário letivo.
 */
export interface CalendarioLetivoFindOneResultView {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  campus: CampusElement
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
   * Nome do calendário letivo.
   */
  nome: string
  ofertaFormacao: OfertaFormacaoElement
}

/**
 * Dados de entrada para a criação de um calendário letivo.
 */
export interface CalendarioLetivoInputCreateView {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  campus: BodyCampus
  /**
   * Nome do calendário letivo.
   */
  nome: string
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para a atualização de um calendário letivo.
 */
export interface CalendarioLetivoInputUpdateView {
  /**
   * Ano do calendário letivo.
   */
  ano?: number
  campus?: BodyCampus
  /**
   * Nome do calendário letivo.
   */
  nome?: string
  ofertaFormacao?: BodyOfertaFormacao
}

/**
 * CalendarioLetivo.
 */
export interface CalendarioLetivo {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  /**
   * Campus ao qual o calendário letivo pertence.
   */
  campus: BlocoCampus
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
   * Nome do calendário letivo.
   */
  nome: string
  /**
   * Oferta de formação do calendário letivo.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

/**
 * Oferta de formação do calendário letivo.
 *
 * OfertaFormacao.
 *
 * Oferta de formação do curso.
 *
 * Oferta de formação.
 */
export interface CalendarioLetivoOfertaFormacao {
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
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

export interface CalendarioLetivoListOperation {
  input: CalendarioLetivoListOperationInput
  output: CalendarioLetivoListOperationOutput
}

export interface CalendarioLetivoListOperationInput {
  queries: StickyQueries
  [property: string]: any
}

export interface StickyQueries {
  filter_campus_id?: string[]
  filter_ofertaFormacao_id?: string[]
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

export interface CalendarioLetivoListOperationOutput {
  success: IndigoSuccess
  [property: string]: any
}

/**
 * Resultados da busca a CalendarioLetivos.
 */
export interface IndigoSuccess {
  /**
   * Resultados da busca atual.
   */
  data: CalendarioElement[]
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
 * Resultados da busca a CalendarioLetivos.
 */
export interface CalendarioLetivoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: CalendarioElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface CalendarioLetivoUpdateByIDOperation {
  input: CalendarioLetivoUpdateByIDOperationInput
  output: CalendarioLetivoUpdateByIDOperationOutput
}

export interface CalendarioLetivoUpdateByIDOperationInput {
  body: CunningBody
  params: BraggadociousParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um calendário letivo.
 */
export interface CunningBody {
  /**
   * Ano do calendário letivo.
   */
  ano?: number
  campus?: BodyCampus
  /**
   * Nome do calendário letivo.
   */
  nome?: string
  ofertaFormacao?: BodyOfertaFormacao
}

export interface BraggadociousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CalendarioLetivoUpdateByIDOperationOutput {
  success: CalendarioElement
  [property: string]: any
}

/**
 * Visão completa de um calendário letivo.
 */
export interface CalendarioLetivoView {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  campus: CampusElement
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
   * Nome do calendário letivo.
   */
  nome: string
  ofertaFormacao: OfertaFormacaoElement
}

/**
 * Operação de criação de um campus.
 */
export interface CampusCreateOperation {
  input: CampusCreateOperationInput
  output: CampusCreateOperationOutput
}

export interface CampusCreateOperationInput {
  body: MagentaBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um campus.
 */
export interface MagentaBody {
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
  params: Params1
  [property: string]: any
}

export interface Params1 {
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

export interface CampusFindOneByIDOperation {
  input: CampusFindOneByIDOperationInput
  output: CampusFindOneByIDOperationOutput
}

export interface CampusFindOneByIDOperationInput {
  params: Params2
  [property: string]: any
}

export interface Params2 {
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

export interface CampusListOperation {
  input: CampusListOperationInput
  output: CampusListOperationOutput
}

export interface CampusListOperationInput {
  queries: IndigoQueries
  [property: string]: any
}

export interface IndigoQueries {
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

export interface CampusListOperationOutput {
  success: IndecentSuccess
  [property: string]: any
}

/**
 * Resultados da busca a campi.
 */
export interface IndecentSuccess {
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
export interface CampusListResultView {
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
 * Operação de atualização de um campus.
 */
export interface CampusUpdateOperation {
  input: CampusUpdateOperationInput
  output: CampusUpdateOperationOutput
}

export interface CampusUpdateOperationInput {
  body: FriskyBody
  params: Params3
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um campus.
 */
export interface FriskyBody {
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

export interface Params3 {
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

export interface CidadeFindOneByIDOperation {
  input: CidadeFindOneByIDOperationInput
  output: CidadeFindOneByIDOperationOutput
}

export interface CidadeFindOneByIDOperationInput {
  params: Params4
  [property: string]: any
}

export interface Params4 {
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

export interface CidadeListOperation {
  input: CidadeListOperationInput
  output: CidadeListOperationOutput
}

export interface CidadeListOperationInput {
  queries: IndecentQueries
  [property: string]: any
}

export interface IndecentQueries {
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

export interface CidadeListOperationOutput {
  success: HilariousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a cidades.
 */
export interface HilariousSuccess {
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
export interface CidadeListResultView {
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

export interface CursoCreateOperation {
  input: CursoCreateOperationInput
  output: CursoCreateOperationOutput
}

export interface CursoCreateOperationInput {
  body: MischievousBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um Curso.
 */
export interface MischievousBody {
  campus: BodyCampus
  /**
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  ofertaFormacao: BodyOfertaFormacao
}

export interface CursoCreateOperationOutput {
  success: CursoElement
  [property: string]: any
}

/**
 * Visão FindOne de um Curso.
 */
export interface CursoElement {
  campus: CampusElement
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
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  ofertaFormacao: OfertaFormacaoElement
}

export interface CursoDeleteByIDOperation {
  input: CursoDeleteByIDOperationInput
  output: CursoDeleteByIDOperationOutput
}

export interface CursoDeleteByIDOperationInput {
  params: Params5
  [property: string]: any
}

export interface Params5 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CursoFindOneByIDOperation {
  input: CursoFindOneByIDOperationInput
  output: CursoFindOneByIDOperationOutput
}

export interface CursoFindOneByIDOperationInput {
  params: Params6
  [property: string]: any
}

export interface Params6 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoFindOneByIDOperationOutput {
  success: CursoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um Curso por ID.
 */
export interface CursoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um Curso.
 */
export interface CursoFindOneResultView {
  campus: CampusElement
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
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  ofertaFormacao: OfertaFormacaoElement
}

export interface CursoGetImagemCapa {
  input: CursoGetImagemCapaInput
  output: CursoGetImagemCapaOutput
}

export interface CursoGetImagemCapaInput {
  params: Params7
  [property: string]: any
}

export interface Params7 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoGetImagemCapaOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um Curso.
 */
export interface CursoInputCreateView {
  campus: BodyCampus
  /**
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para a atualização de um Curso.
 */
export interface CursoInputUpdateView {
  campus?: BodyCampus
  /**
   * Nome do curso.
   */
  nome?: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado?: string
  ofertaFormacao?: BodyOfertaFormacao
}

/**
 * Curso.
 */
export interface Curso {
  /**
   * Campus que o curso pertence.
   */
  campus: BlocoCampus
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
   * Imagem de capa do curso.
   */
  imagemCapa: BlocoImagem
  /**
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  /**
   * Oferta de formação do curso.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

export interface CursoListOperation {
  input: CursoListOperationInput
  output: CursoListOperationOutput
}

export interface CursoListOperationInput {
  queries: HilariousQueries
  [property: string]: any
}

export interface HilariousQueries {
  filter_campus_id?: string[]
  filter_ofertaFormacao_id?: string[]
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

export interface CursoListOperationOutput {
  success: AmbitiousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a Cursos.
 */
export interface AmbitiousSuccess {
  /**
   * Resultados da busca atual.
   */
  data: CursoElement[]
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
 * Resultados da busca a Cursos.
 */
export interface CursoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: CursoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface CursoSetImagemCapa {
  input: CursoSetImagemCapaInput
  output: CursoSetImagemCapaOutput
}

export interface CursoSetImagemCapaInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params8
  [property: string]: any
}

export interface Params8 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface CursoUpdateByIDOperation {
  input: CursoUpdateByIDOperationInput
  output: CursoUpdateByIDOperationOutput
}

export interface CursoUpdateByIDOperationInput {
  body: BraggadociousBody
  params: Params9
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um Curso.
 */
export interface BraggadociousBody {
  campus?: BodyCampus
  /**
   * Nome do curso.
   */
  nome?: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado?: string
  ofertaFormacao?: BodyOfertaFormacao
}

export interface Params9 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoUpdateByIDOperationOutput {
  success: CursoElement
  [property: string]: any
}

/**
 * Visão completa de um Curso.
 */
export interface CursoView {
  campus: CampusElement
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
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  ofertaFormacao: OfertaFormacaoElement
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

export interface DiaCalendarioCreateOperation {
  input: DiaCalendarioCreateOperationInput
  output: DiaCalendarioCreateOperationOutput
}

export interface DiaCalendarioCreateOperationInput {
  body: Body1
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um DiaCalendario.
 */
export interface Body1 {
  calendario: CalendarioLetivoClass | null
  data: Date
  diaLetivo: boolean
  feriado: boolean
}

/**
 * Dados de entrada para encontrar um calendário letivo por ID.
 */
export interface CalendarioLetivoClass {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DiaCalendarioCreateOperationOutput {
  success: DiaCalendarioListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um DiaCalendario.
 */
export interface DiaCalendarioListResultViewSuccess {
  calendario: CalendarioElement
  /**
   * Data.
   */
  data: Date
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
   * Define que o dia é letivo.
   */
  diaLetivo: boolean
  /**
   * Define que o dia é feriado.
   */
  feriado: boolean
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DiaCalendarioDeleteByIDOperation {
  input: DiaCalendarioDeleteByIDOperationInput
  output: DiaCalendarioDeleteByIDOperationOutput
}

export interface DiaCalendarioDeleteByIDOperationInput {
  params: Params10
  [property: string]: any
}

export interface Params10 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiaCalendarioDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiaCalendarioFindOneByIDOperation {
  input: DiaCalendarioFindOneByIDOperationInput
  output: DiaCalendarioFindOneByIDOperationOutput
}

export interface DiaCalendarioFindOneByIDOperationInput {
  params: Params11
  [property: string]: any
}

export interface Params11 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiaCalendarioFindOneByIDOperationOutput {
  success: DiaCalendarioListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um DiaCalendario por ID.
 */
export interface DiaCalendarioFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um DiaCalendario.
 */
export interface DiaCalendarioFindOneResultView {
  calendario: CalendarioElement
  /**
   * Data.
   */
  data: Date
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
   * Define que o dia é letivo.
   */
  diaLetivo: boolean
  /**
   * Define que o dia é feriado.
   */
  feriado: boolean
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para a criação de um DiaCalendario.
 */
export interface DiaCalendarioInputCreateView {
  calendario: CalendarioLetivoClass | null
  data: Date
  diaLetivo: boolean
  feriado: boolean
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 */
export interface DiaCalendarioInputUpdateView {
  calendario?: CalendarioLetivoClass | null
  data?: Date
  diaLetivo?: boolean
  feriado?: boolean
}

/**
 * DiaCalendario.
 */
export interface DiaCalendario {
  /**
   * Calendario.
   */
  calendario: Calendario
  /**
   * Data.
   */
  data: Date
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
   * Define que o dia é letivo.
   */
  diaLetivo: boolean
  /**
   * Define que o dia é feriado.
   */
  feriado: boolean
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Calendario.
 *
 * CalendarioLetivo.
 *
 * Calendário Letivo vinculado ao diário.
 */
export interface Calendario {
  /**
   * Ano do calendário letivo.
   */
  ano: number
  /**
   * Campus ao qual o calendário letivo pertence.
   */
  campus: BlocoCampus
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
   * Nome do calendário letivo.
   */
  nome: string
  /**
   * Oferta de formação do calendário letivo.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

export interface DiaCalendarioListOperation {
  input: DiaCalendarioListOperationInput
  output: DiaCalendarioListOperationOutput
}

export interface DiaCalendarioListOperationInput {
  queries: AmbitiousQueries
  [property: string]: any
}

export interface AmbitiousQueries {
  filter_calendario_id?: string[]
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

export interface DiaCalendarioListOperationOutput {
  success: CunningSuccess
  [property: string]: any
}

/**
 * Resultados da busca a DiaCalendarios.
 */
export interface CunningSuccess {
  /**
   * Resultados da busca atual.
   */
  data: DiaCalendarioListResultViewSuccess[]
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
 * Resultados da busca a DiaCalendarios.
 */
export interface DiaCalendarioListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DiaCalendarioListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DiaCalendarioUpdateByIDOperation {
  input: DiaCalendarioUpdateByIDOperationInput
  output: DiaCalendarioUpdateByIDOperationOutput
}

export interface DiaCalendarioUpdateByIDOperationInput {
  body: Body2
  params: Params12
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 */
export interface Body2 {
  calendario?: CalendarioLetivoClass | null
  data?: Date
  diaLetivo?: boolean
  feriado?: boolean
}

export interface Params12 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiaCalendarioUpdateByIDOperationOutput {
  success: DiaCalendarioListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um DiaCalendario.
 */
export interface DiaCalendarioView {
  calendario: CalendarioElement
  /**
   * Data.
   */
  data: Date
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
   * Define que o dia é letivo.
   */
  diaLetivo: boolean
  /**
   * Define que o dia é feriado.
   */
  feriado: boolean
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DiarioCreateOperation {
  input: DiarioCreateOperationInput
  output: DiarioCreateOperationOutput
}

export interface DiarioCreateOperationInput {
  body: Body3
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um diário.
 */
export interface Body3 {
  ambientePadrao: BodyAmbiente | null
  ativo: boolean
  calendarioLetivo: CalendarioLetivoClass
  disciplina: BodyDisciplina
  turma: BodyTurma
}

/**
 * Dados de entrada para encontrar um ambiente por id.
 */
export interface BodyAmbiente {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para encontrar uma Disciplina por ID.
 */
export interface BodyDisciplina {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para encontrar uma Turma por ID.
 */
export interface BodyTurma {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DiarioCreateOperationOutput {
  success: DiarioListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um diário.
 */
export interface DiarioListResultViewSuccess {
  ambientePadrao: AmbienteElement | null
  /**
   * Situação do diário.
   */
  ativo: boolean
  calendarioLetivo: CalendarioElement
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
  disciplina: DisciplinaElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  turma: TurmaElement
}

/**
 * Visão FindOne de uma Disciplina.
 */
export interface DisciplinaElement {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
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
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

/**
 * Visão FindOne de uma Turma.
 */
export interface TurmaElement {
  ambientePadraoAula: AmbienteElement
  curso: CursoElement
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
   * Período da Turma.
   */
  periodo: string
}

export interface DiarioDeleteByIDOperation {
  input: DiarioDeleteByIDOperationInput
  output: DiarioDeleteByIDOperationOutput
}

export interface DiarioDeleteByIDOperationInput {
  params: Params13
  [property: string]: any
}

export interface Params13 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiarioFindOneByIDOperation {
  input: DiarioFindOneByIDOperationInput
  output: DiarioFindOneByIDOperationOutput
}

export interface DiarioFindOneByIDOperationInput {
  params: Params14
  [property: string]: any
}

export interface Params14 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioFindOneByIDOperationOutput {
  success: DiarioListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um diário por ID.
 */
export interface DiarioFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um diário.
 */
export interface DiarioFindOneResultView {
  ambientePadrao: AmbienteElement | null
  /**
   * Situação do diário.
   */
  ativo: boolean
  calendarioLetivo: CalendarioElement
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
  disciplina: DisciplinaElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  turma: TurmaElement
}

/**
 * Operações extras para a imagem de capa do diário.
 */
export interface DiarioGetCoverImageOperation {
  input: DiarioGetCoverImageOperationInput
  output: DiarioGetCoverImageOperationOutput
}

export interface DiarioGetCoverImageOperationInput {
  params: Params15
  [property: string]: any
}

export interface Params15 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioGetCoverImageOperationOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um diário.
 */
export interface DiarioInputCreateView {
  ambientePadrao: BodyAmbiente | null
  ativo: boolean
  calendarioLetivo: CalendarioLetivoClass
  disciplina: BodyDisciplina
  turma: BodyTurma
}

/**
 * Dados de entrada para a atualização de um diário.
 */
export interface DiarioInputUpdateView {
  ambientePadrao?: BodyAmbiente | null
  ativo?: boolean
  calendarioLetivo?: CalendarioLetivoClass
  disciplina?: BodyDisciplina
  turma?: BodyTurma
}

/**
 * Diario.
 */
export interface Diario {
  /**
   * Ambiente padrão.
   */
  ambientePadrao: AmbientePadraoElement | null
  /**
   * Situação do diário.
   */
  ativo: boolean
  /**
   * Calendário Letivo vinculado ao diário.
   */
  calendarioLetivo: Calendario
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
   * Disciplina vinculada ao diário.
   */
  disciplina: DiarioDisciplina
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Imagem de capa do diário.
   */
  imagemCapa: BlocoImagem
  /**
   * Turma vinculada ao diário.
   */
  turma: DiarioTurma
}

/**
 * Disciplina vinculada ao diário.
 *
 * Disciplina.
 */
export interface DiarioDisciplina {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
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
   * Imagem de capa da disciplina.
   */
  imagemCapa: BlocoImagem
  /**
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

/**
 * Turma vinculada ao diário.
 *
 * Turma.
 */
export interface DiarioTurma {
  /**
   * Ambiente padrão da sala de aula.
   */
  ambientePadraoAula: AmbientePadraoElement | null
  /**
   * Curso da Turma.
   */
  curso: TurmaCurso
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
   * Imagem de capa da Turma.
   */
  imagemCapa: BlocoImagem
  /**
   * Período da Turma.
   */
  periodo: string
}

/**
 * Curso da Turma.
 *
 * Curso.
 */
export interface TurmaCurso {
  /**
   * Campus que o curso pertence.
   */
  campus: BlocoCampus
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
   * Imagem de capa do curso.
   */
  imagemCapa: BlocoImagem
  /**
   * Nome do curso.
   */
  nome: string
  /**
   * Nome abreviado do curso.
   */
  nomeAbreviado: string
  /**
   * Oferta de formação do curso.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

export interface DiarioListOperation {
  input: DiarioListOperationInput
  output: DiarioListOperationOutput
}

export interface DiarioListOperationInput {
  queries: CunningQueries
  [property: string]: any
}

export interface CunningQueries {
  filter_ambientePadrao_id?: string[]
  filter_calendarioLetivo_id?: string[]
  filter_disciplina_id?: string[]
  filter_turma_id?: string[]
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

export interface DiarioListOperationOutput {
  success: MagentaSuccess
  [property: string]: any
}

/**
 * Resultados da busca a Diarios.
 */
export interface MagentaSuccess {
  /**
   * Resultados da busca atual.
   */
  data: DiarioListResultViewSuccess[]
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
 * Resultados da busca a Diarios.
 */
export interface DiarioListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DiarioListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DiarioSetCoverImageOperation {
  input: DiarioSetCoverImageOperationInput
  output: DiarioSetCoverImageOperationOutput
}

export interface DiarioSetCoverImageOperationInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params16
  [property: string]: any
}

export interface Params16 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioSetCoverImageOperationOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface DiarioUpdateByIDOperation {
  input: DiarioUpdateByIDOperationInput
  output: DiarioUpdateByIDOperationOutput
}

export interface DiarioUpdateByIDOperationInput {
  body: Body4
  params: Params17
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um diário.
 */
export interface Body4 {
  ambientePadrao?: BodyAmbiente | null
  ativo?: boolean
  calendarioLetivo?: CalendarioLetivoClass
  disciplina?: BodyDisciplina
  turma?: BodyTurma
}

export interface Params17 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioUpdateByIDOperationOutput {
  success: DiarioListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um diário.
 */
export interface DiarioView {
  ambientePadrao: AmbienteElement | null
  /**
   * Situação do diário.
   */
  ativo: boolean
  calendarioLetivo: CalendarioElement
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
  disciplina: DisciplinaElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  turma: TurmaElement
}

export interface DisciplinaCreateOperation {
  input: DisciplinaCreateOperationInput
  output: DisciplinaCreateOperationOutput
}

export interface DisciplinaCreateOperationInput {
  body: Body5
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Disciplina.
 */
export interface Body5 {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
  /**
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

export interface DisciplinaCreateOperationOutput {
  success: DisciplinaElement
  [property: string]: any
}

export interface DisciplinaDeleteByIDOperation {
  input: DisciplinaDeleteByIDOperationInput
  output: DisciplinaDeleteByIDOperationOutput
}

export interface DisciplinaDeleteByIDOperationInput {
  params: Params18
  [property: string]: any
}

export interface Params18 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DisciplinaFindOneByIDOperation {
  input: DisciplinaFindOneByIDOperationInput
  output: DisciplinaFindOneByIDOperationOutput
}

export interface DisciplinaFindOneByIDOperationInput {
  params: Params19
  [property: string]: any
}

export interface Params19 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaFindOneByIDOperationOutput {
  success: DisciplinaElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Disciplina por ID.
 */
export interface DisciplinaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Disciplina.
 */
export interface DisciplinaFindOneResultView {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
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
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

export interface DisciplinaGetImagemCapa {
  input: DisciplinaGetImagemCapaInput
  output: DisciplinaGetImagemCapaOutput
}

export interface DisciplinaGetImagemCapaInput {
  params: Params20
  [property: string]: any
}

export interface Params20 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaGetImagemCapaOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Disciplina.
 */
export interface DisciplinaInputCreateView {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
  /**
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

/**
 * Dados de entrada para a atualização de uma Disciplina.
 */
export interface DisciplinaInputUpdateView {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria?: number
  /**
   * Nome da disciplina.
   */
  nome?: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado?: string
}

/**
 * Disciplina.
 */
export interface Disciplina {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
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
   * Imagem de capa da disciplina.
   */
  imagemCapa: BlocoImagem
  /**
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
}

export interface DisciplinaListOperation {
  input: DisciplinaListOperationInput
  output: DisciplinaListOperationOutput
}

export interface DisciplinaListOperationInput {
  queries: MagentaQueries
  [property: string]: any
}

export interface MagentaQueries {
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

export interface DisciplinaListOperationOutput {
  success: FriskySuccess
  [property: string]: any
}

/**
 * Resultados da busca a Disciplinas.
 */
export interface FriskySuccess {
  /**
   * Resultados da busca atual.
   */
  data: DisciplinaElement[]
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
 * Resultados da busca a Disciplinas.
 */
export interface DisciplinaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DisciplinaElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DisciplinaSetImagemCapa {
  input: DisciplinaSetImagemCapaInput
  output: DisciplinaSetImagemCapaOutput
}

export interface DisciplinaSetImagemCapaInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params21
  [property: string]: any
}

export interface Params21 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface DisciplinaUpdateByIDOperation {
  input: DisciplinaUpdateByIDOperationInput
  output: DisciplinaUpdateByIDOperationOutput
}

export interface DisciplinaUpdateByIDOperationInput {
  body: Body6
  params: Params22
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Disciplina.
 */
export interface Body6 {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria?: number
  /**
   * Nome da disciplina.
   */
  nome?: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado?: string
}

export interface Params22 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaUpdateByIDOperationOutput {
  success: DisciplinaElement
  [property: string]: any
}

/**
 * Visão completa de uma Disciplina.
 */
export interface DisciplinaView {
  /**
   * Carga horária da disciplina.
   */
  cargaHoraria: number
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
   * Nome da disciplina.
   */
  nome: string
  /**
   * Nome abreviado da disciplina.
   */
  nomeAbreviado: string
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

export interface EstadoFindOneByIDOperation {
  input: EstadoFindOneByIDOperationInput
  output: EstadoFindOneByIDOperationOutput
}

export interface EstadoFindOneByIDOperationInput {
  params: Params23
  [property: string]: any
}

export interface Params23 {
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

export interface EstadoListOperation {
  input: EstadoListOperationInput
  output: EstadoListOperationOutput
}

export interface EstadoListOperationInput {
  queries: FriskyQueries
  [property: string]: any
}

export interface FriskyQueries {
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

export interface EstadoListOperationOutput {
  success: MischievousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a estados.
 */
export interface MischievousSuccess {
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
export interface EstadoListResultView {
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

export interface GradeHorarioOfertaFormacaoCreateOperation {
  input: GradeHorarioOfertaFormacaoCreateOperationInput
  output: GradeHorarioOfertaFormacaoCreateOperationOutput
}

export interface GradeHorarioOfertaFormacaoCreateOperationInput {
  body: Body7
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body7 {
  campus: BodyCampus
  ofertaFormacao: BodyOfertaFormacao
}

export interface GradeHorarioOfertaFormacaoCreateOperationOutput {
  success: GradeHorarioOfertaFormacaoElement
  [property: string]: any
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoElement {
  campus: CampusElement
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
  ofertaFormacao: OfertaFormacaoElement
}

export interface GradeHorarioOfertaFormacaoDeleteByIDOperation {
  input: GradeHorarioOfertaFormacaoDeleteByIDOperationInput
  output: GradeHorarioOfertaFormacaoDeleteByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoDeleteByIDOperationInput {
  params: Params24
  [property: string]: any
}

export interface Params24 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoFindOneByIDOperation {
  input: GradeHorarioOfertaFormacaoFindOneByIDOperationInput
  output: GradeHorarioOfertaFormacaoFindOneByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoFindOneByIDOperationInput {
  params: Params25
  [property: string]: any
}

export interface Params25 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoFindOneByIDOperationOutput {
  success: GradeHorarioOfertaFormacaoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface GradeHorarioOfertaFormacaoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoFindOneResultView {
  campus: CampusElement
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
  ofertaFormacao: OfertaFormacaoElement
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoInputCreateView {
  campus: BodyCampus
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoInputUpdateView {
  campus?: BodyCampus
  ofertaFormacao?: BodyOfertaFormacao
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperationInput {
  body: Body8
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body8 {
  gradeHorarioOfertaFormacao: BodyGradeHorarioOfertaFormacao
  intervaloDeTempo: BodyIntervaloDeTempo
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface BodyGradeHorarioOfertaFormacao {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para um Intervalo de Tempo.
 */
export interface BodyIntervaloDeTempo {
  /**
   * Horário que o intervalo de tempo termina.
   */
  periodoFim: string
  /**
   * Horário que o intervalo de tempo inicia.
   */
  periodoInicio: string
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoCreateOperationOutput {
  success: GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess {
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
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * Visão FindOne de um Intervalo de Tempo.
 */
export interface SuccessIntervaloDeTempo {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIDOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIDOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIDOperationInput {
  params: Params26
  [property: string]: any
}

export interface Params26 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIDOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIDOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIDOperationInput {
  params: Params27
  [property: string]: any
}

export interface Params27 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIDOperationOutput {
  success: GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView {
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
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView {
  gradeHorarioOfertaFormacao: BodyGradeHorarioOfertaFormacao
  intervaloDeTempo: BodyIntervaloDeTempo
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView {
  gradeHorarioOfertaFormacao?: BodyGradeHorarioOfertaFormacao
  intervaloDeTempo?: BodyIntervaloDeTempo
}

/**
 * GradeHorarioOfertaFormacaoIntervaloDeTempo.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempo {
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
   * Grade de horário da oferta de formação.
   */
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoIntervaloDeTempoGradeHorarioOfertaFormacao
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Intervalo de tempo.
   */
  intervaloDeTempo: GradeHorarioOfertaFormacaoIntervaloDeTempoIntervaloDeTempo
}

/**
 * Grade de horário da oferta de formação.
 *
 * GradeHorarioOfertaFormacao.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoGradeHorarioOfertaFormacao {
  /**
   * Campus.
   */
  campus: BlocoCampus
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
   * Oferta de formação.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

/**
 * Intervalo de tempo.
 *
 * Intervalo de Tempo.
 *
 * Intervalo de tempo reservado.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoIntervaloDeTempo {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationInput {
  queries: MischievousQueries
  [property: string]: any
}

export interface MischievousQueries {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationOutput {
  success: BraggadociousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a GradeHorarioOfertaFormacaoIntervaloDeTempos.
 */
export interface BraggadociousSuccess {
  /**
   * Resultados da busca atual.
   */
  data: GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess[]
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
 * Resultados da busca a GradeHorarioOfertaFormacaoIntervaloDeTempos.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIDOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIDOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIDOperationInput {
  body: Body9
  params: Params28
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body9 {
  gradeHorarioOfertaFormacao?: BodyGradeHorarioOfertaFormacao
  intervaloDeTempo?: BodyIntervaloDeTempo
}

export interface Params28 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIDOperationOutput {
  success: GradeHorarioOfertaFormacaoIntervaloDeTempoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoIntervaloDeTempoView {
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
  gradeHorarioOfertaFormacao: GradeHorarioOfertaFormacaoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * GradeHorarioOfertaFormacao.
 */
export interface GradeHorarioOfertaFormacao {
  /**
   * Campus.
   */
  campus: BlocoCampus
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
   * Oferta de formação.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

export interface GradeHorarioOfertaFormacaoListOperation {
  input: GradeHorarioOfertaFormacaoListOperationInput
  output: GradeHorarioOfertaFormacaoListOperationOutput
}

export interface GradeHorarioOfertaFormacaoListOperationInput {
  queries: BraggadociousQueries
  [property: string]: any
}

export interface BraggadociousQueries {
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

export interface GradeHorarioOfertaFormacaoListOperationOutput {
  success: Success1
  [property: string]: any
}

/**
 * Resultados da busca a GradeHorarioOfertaFormacaos.
 */
export interface Success1 {
  /**
   * Resultados da busca atual.
   */
  data: GradeHorarioOfertaFormacaoElement[]
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
 * Resultados da busca a GradeHorarioOfertaFormacaos.
 */
export interface GradeHorarioOfertaFormacaoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: GradeHorarioOfertaFormacaoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface GradeHorarioOfertaFormacaoUpdateByIDOperation {
  input: GradeHorarioOfertaFormacaoUpdateByIDOperationInput
  output: GradeHorarioOfertaFormacaoUpdateByIDOperationOutput
}

export interface GradeHorarioOfertaFormacaoUpdateByIDOperationInput {
  body: Body10
  params: Params29
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body10 {
  campus?: BodyCampus
  ofertaFormacao?: BodyOfertaFormacao
}

export interface Params29 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoUpdateByIDOperationOutput {
  success: GradeHorarioOfertaFormacaoElement
  [property: string]: any
}

/**
 * Visão completa de uma oferta de formação.
 */
export interface GradeHorarioOfertaFormacaoView {
  campus: CampusElement
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
  ofertaFormacao: OfertaFormacaoElement
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
  imagem: BlocoImagem
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

export interface ModalidadeCreateOperation {
  input: ModalidadeCreateOperationInput
  output: ModalidadeCreateOperationOutput
}

export interface ModalidadeCreateOperationInput {
  body: Body11
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma modalidade.
 */
export interface Body11 {
  /**
   * Apelido da modalidade.
   */
  slug: string
}

export interface ModalidadeCreateOperationOutput {
  success: ModalidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma modalidade.
 */
export interface ModalidadeListResultViewSuccess {
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
   * Apelido da modalidade.
   */
  slug: string
}

export interface ModalidadeDeleteByIDOperation {
  input: ModalidadeDeleteByIDOperationInput
  output: ModalidadeDeleteByIDOperationOutput
}

export interface ModalidadeDeleteByIDOperationInput {
  params: Params30
  [property: string]: any
}

export interface Params30 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface ModalidadeFindOneByIDOperation {
  input: ModalidadeFindOneByIDOperationInput
  output: ModalidadeFindOneByIDOperationOutput
}

export interface ModalidadeFindOneByIDOperationInput {
  params: Params31
  [property: string]: any
}

export interface Params31 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeFindOneByIDOperationOutput {
  success: ModalidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma modalidade por ID.
 */
export interface ModalidadeFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma modalidade.
 */
export interface ModalidadeFindOneResultView {
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
   * Apelido da modalidade.
   */
  slug: string
}

/**
 * Dados de entrada para a criação de uma modalidade.
 */
export interface ModalidadeInputCreateView {
  /**
   * Apelido da modalidade.
   */
  slug: string
}

/**
 * Dados de entrada para a atualização de uma modalidade.
 */
export interface ModalidadeInputUpdateView {
  /**
   * Apelido da modalidade.
   */
  slug?: string
}

/**
 * Modalidade.
 */
export interface Modalidade {
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
   * Nome da modalidade.
   */
  nome: string
  /**
   * Apelido da modalidade.
   */
  slug: string
}

export interface ModalidadeListOperation {
  input: ModalidadeListOperationInput
  output: ModalidadeListOperationOutput
}

export interface ModalidadeListOperationInput {
  queries: Queries1
  [property: string]: any
}

export interface Queries1 {
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

export interface ModalidadeListOperationOutput {
  success: Success2
  [property: string]: any
}

/**
 * Resultados da busca a Modalidades.
 */
export interface Success2 {
  /**
   * Resultados da busca atual.
   */
  data: ModalidadeListResultViewSuccess[]
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
 * Resultados da busca a Modalidades.
 */
export interface ModalidadeListResultView {
  /**
   * Resultados da busca atual.
   */
  data: ModalidadeListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface ModalidadeUpdateByIDOperation {
  input: ModalidadeUpdateByIDOperationInput
  output: ModalidadeUpdateByIDOperationOutput
}

export interface ModalidadeUpdateByIDOperationInput {
  body: Body12
  params: Params32
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma modalidade.
 */
export interface Body12 {
  /**
   * Apelido da modalidade.
   */
  slug?: string
}

export interface Params32 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeUpdateByIDOperationOutput {
  success: ModalidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma modalidade.
 */
export interface ModalidadeView {
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
   * Nome da modalidade.
   */
  nome: string
  /**
   * Apelido da modalidade.
   */
  slug: string
}

export interface NivelDeFormacaoCreateOperation {
  input: NivelDeFormacaoCreateOperationInput
  output: NivelDeFormacaoCreateOperationOutput
}

export interface NivelDeFormacaoCreateOperationInput {
  body: Body13
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um nível de formação.
 */
export interface Body13 {
  /**
   * Apelido do nível de formação.
   */
  slug: string
}

export interface NivelDeFormacaoCreateOperationOutput {
  success: NivelFormcaoElement
  [property: string]: any
}

/**
 * Visão FindOne de um nível de formação.
 */
export interface NivelFormcaoElement {
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
   * Apelido do nível de formação.
   */
  slug: string
}

export interface NivelDeFormacaoDeleteByIDOperation {
  input: NivelDeFormacaoDeleteByIDOperationInput
  output: NivelDeFormacaoDeleteByIDOperationOutput
}

export interface NivelDeFormacaoDeleteByIDOperationInput {
  params: Params33
  [property: string]: any
}

export interface Params33 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface NivelDeFormacaoFindOneByIDOperation {
  input: NivelDeFormacaoFindOneByIDOperationInput
  output: NivelDeFormacaoFindOneByIDOperationOutput
}

export interface NivelDeFormacaoFindOneByIDOperationInput {
  params: Params34
  [property: string]: any
}

export interface Params34 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoFindOneByIDOperationOutput {
  success: NivelFormcaoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um nível de formação por ID.
 */
export interface NivelDeFormacaoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um nível de formação.
 */
export interface NivelDeFormacaoFindOneResultView {
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
   * Apelido do nível de formação.
   */
  slug: string
}

/**
 * Dados de entrada para a criação de um nível de formação.
 */
export interface NivelDeFormacaoInputCreateView {
  /**
   * Apelido do nível de formação.
   */
  slug: string
}

/**
 * Dados de entrada para a atualização de um nível de formação.
 */
export interface NivelDeFormacaoInputUpdateView {
  /**
   * Apelido do nível de formação.
   */
  slug?: string
}

/**
 * NivelDeFormacao.
 */
export interface NivelDeFormacao {
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
   * Apelido do nível de formação.
   */
  slug: string
}

export interface NivelDeFormacaoListOperation {
  input: NivelDeFormacaoListOperationInput
  output: NivelDeFormacaoListOperationOutput
}

export interface NivelDeFormacaoListOperationInput {
  queries: Queries2
  [property: string]: any
}

export interface Queries2 {
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

export interface NivelDeFormacaoListOperationOutput {
  success: Success3
  [property: string]: any
}

/**
 * Resultados da busca aos níveis de formações.
 */
export interface Success3 {
  /**
   * Resultados da busca atual.
   */
  data: NivelFormcaoElement[]
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
 * Resultados da busca aos níveis de formações.
 */
export interface NivelDeFormacaoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: NivelFormcaoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface NivelDeFormacaoUpdateByIDOperation {
  input: NivelDeFormacaoUpdateByIDOperationInput
  output: NivelDeFormacaoUpdateByIDOperationOutput
}

export interface NivelDeFormacaoUpdateByIDOperationInput {
  body: Body14
  params: Params35
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um nível de formação.
 */
export interface Body14 {
  /**
   * Apelido do nível de formação.
   */
  slug?: string
}

export interface Params35 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoUpdateByIDOperationOutput {
  success: NivelFormcaoElement
  [property: string]: any
}

/**
 * Visão completa de um nível de formação.
 */
export interface NivelDeFormacaoView {
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
   * Apelido do nível de formação.
   */
  slug: string
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

export interface OfertaFormacaoCreateOperation {
  input: OfertaFormacaoCreateOperationInput
  output: OfertaFormacaoCreateOperationOutput
}

export interface OfertaFormacaoCreateOperationInput {
  body: Body15
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body15 {
  /**
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

export interface OfertaFormacaoCreateOperationOutput {
  success: OfertaFormacaoElement
  [property: string]: any
}

export interface OfertaFormacaoDeleteByIDOperation {
  input: OfertaFormacaoDeleteByIDOperationInput
  output: OfertaFormacaoDeleteByIDOperationOutput
}

export interface OfertaFormacaoDeleteByIDOperationInput {
  params: Params36
  [property: string]: any
}

export interface Params36 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface OfertaFormacaoFindOneByIDOperation {
  input: OfertaFormacaoFindOneByIDOperationInput
  output: OfertaFormacaoFindOneByIDOperationOutput
}

export interface OfertaFormacaoFindOneByIDOperationInput {
  params: Params37
  [property: string]: any
}

export interface Params37 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoFindOneByIDOperationOutput {
  success: OfertaFormacaoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface OfertaFormacaoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface OfertaFormacaoFindOneResultView {
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
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface OfertaFormacaoInputCreateView {
  /**
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface OfertaFormacaoInputUpdateView {
  /**
   * Nome da oferta de formação.
   */
  nome?: string
  /**
   * Apelido da oferta de formação.
   */
  slug?: string
}

/**
 * OfertaFormacao.
 */
export interface OfertaFormacao {
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
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
}

export interface OfertaFormacaoListOperation {
  input: OfertaFormacaoListOperationInput
  output: OfertaFormacaoListOperationOutput
}

export interface OfertaFormacaoListOperationInput {
  queries: Queries3
  [property: string]: any
}

export interface Queries3 {
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

export interface OfertaFormacaoListOperationOutput {
  success: Success4
  [property: string]: any
}

/**
 * Resultados da busca a OfertaFormacaos.
 */
export interface Success4 {
  /**
   * Resultados da busca atual.
   */
  data: OfertaFormacaoElement[]
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
 * Resultados da busca a OfertaFormacaos.
 */
export interface OfertaFormacaoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: OfertaFormacaoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface OfertaFormacaoNivelFormacaoCreateOperation {
  input: OfertaFormacaoNivelFormacaoCreateOperationInput
  output: OfertaFormacaoNivelFormacaoCreateOperationOutput
}

export interface OfertaFormacaoNivelFormacaoCreateOperationInput {
  body: Body16
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body16 {
  nivelFormcao: Nivel
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para encontrar um nível de formação por ID.
 */
export interface Nivel {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface OfertaFormacaoNivelFormacaoCreateOperationOutput {
  success: OfertaFormacaoNivelFormacaoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface OfertaFormacaoNivelFormacaoListResultViewSuccess {
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
  ofertaFormacao: OfertaFormacaoElement
}

export interface OfertaFormacaoNivelFormacaoDeleteByIDOperation {
  input: OfertaFormacaoNivelFormacaoDeleteByIDOperationInput
  output: OfertaFormacaoNivelFormacaoDeleteByIDOperationOutput
}

export interface OfertaFormacaoNivelFormacaoDeleteByIDOperationInput {
  params: Params38
  [property: string]: any
}

export interface Params38 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoFindOneByIDOperation {
  input: OfertaFormacaoNivelFormacaoFindOneByIDOperationInput
  output: OfertaFormacaoNivelFormacaoFindOneByIDOperationOutput
}

export interface OfertaFormacaoNivelFormacaoFindOneByIDOperationInput {
  params: Params39
  [property: string]: any
}

export interface Params39 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoFindOneByIDOperationOutput {
  success: OfertaFormacaoNivelFormacaoListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma oferta de formação por ID.
 */
export interface OfertaFormacaoNivelFormacaoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma oferta de formação.
 */
export interface OfertaFormacaoNivelFormacaoFindOneResultView {
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
  ofertaFormacao: OfertaFormacaoElement
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface OfertaFormacaoNivelFormacaoInputCreateView {
  nivelFormcao: Nivel
  ofertaFormacao: BodyOfertaFormacao
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface OfertaFormacaoNivelFormacaoInputUpdateView {
  nivelFormcao?: Nivel
  ofertaFormacao?: BodyOfertaFormacao
}

/**
 * OfertaFormacaoNivelFormacao.
 */
export interface OfertaFormacaoNivelFormacao {
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
   * Nível de formação.
   */
  nivelFormacao: NivelFormacao
  /**
   * Oferta de formação.
   */
  ofertaFormacao: CalendarioLetivoOfertaFormacao
}

/**
 * Nível de formação.
 *
 * NivelDeFormacao.
 */
export interface NivelFormacao {
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
   * Apelido do nível de formação.
   */
  slug: string
}

export interface OfertaFormacaoNivelFormacaoListOperation {
  input: OfertaFormacaoNivelFormacaoListOperationInput
  output: OfertaFormacaoNivelFormacaoListOperationOutput
}

export interface OfertaFormacaoNivelFormacaoListOperationInput {
  queries: Queries4
  [property: string]: any
}

export interface Queries4 {
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

export interface OfertaFormacaoNivelFormacaoListOperationOutput {
  success: Success5
  [property: string]: any
}

/**
 * Resultados da busca a OfertaFormacaoNivelFormacaos.
 */
export interface Success5 {
  /**
   * Resultados da busca atual.
   */
  data: OfertaFormacaoNivelFormacaoListResultViewSuccess[]
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
 * Resultados da busca a OfertaFormacaoNivelFormacaos.
 */
export interface OfertaFormacaoNivelFormacaoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: OfertaFormacaoNivelFormacaoListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface OfertaFormacaoNivelFormacaoUpdateByIDOperation {
  input: OfertaFormacaoNivelFormacaoUpdateByIDOperationInput
  output: OfertaFormacaoNivelFormacaoUpdateByIDOperationOutput
}

export interface OfertaFormacaoNivelFormacaoUpdateByIDOperationInput {
  body: Body17
  params: Params40
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body17 {
  nivelFormcao?: Nivel
  ofertaFormacao?: BodyOfertaFormacao
}

export interface Params40 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoUpdateByIDOperationOutput {
  success: OfertaFormacaoNivelFormacaoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma oferta de formação.
 */
export interface OfertaFormacaoNivelFormacaoView {
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
  nivelFormcao: NivelFormcaoElement
  ofertaFormacao: OfertaFormacaoElement
}

export interface OfertaFormacaoUpdateByIDOperation {
  input: OfertaFormacaoUpdateByIDOperationInput
  output: OfertaFormacaoUpdateByIDOperationOutput
}

export interface OfertaFormacaoUpdateByIDOperationInput {
  body: Body18
  params: Params41
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body18 {
  /**
   * Nome da oferta de formação.
   */
  nome?: string
  /**
   * Apelido da oferta de formação.
   */
  slug?: string
}

export interface Params41 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoUpdateByIDOperationOutput {
  success: OfertaFormacaoElement
  [property: string]: any
}

/**
 * Visão completa de uma oferta de formação.
 */
export interface OfertaFormacaoView {
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
   * Nome da oferta de formação.
   */
  nome: string
  /**
   * Apelido da oferta de formação.
   */
  slug: string
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

export interface PerfilFindOneByIDOperation {
  input: PerfilFindOneByIDOperationInput
  output: PerfilFindOneByIDOperationOutput
}

export interface PerfilFindOneByIDOperationInput {
  params: Params42
  [property: string]: any
}

export interface Params42 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface PerfilFindOneByIDOperationOutput {
  success: PerfisAtivoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um Vínculo por ID.
 */
export interface PerfilFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um Vínculo.
 */
export interface PerfilFindOneResultView {
  /**
   * Indica se o vínculo está ativo.
   */
  ativo: boolean
  campus: CampusElement
  /**
   * Cargo do usuário no vínculo.
   */
  cargo: string
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
  usuario: UsuarioElement
}

/**
 * Vínculo.
 */
export interface Perfil {
  /**
   * Indica se o vínculo está ativo.
   */
  ativo: boolean
  /**
   * Campus associado ao vínculo.
   */
  campus: BlocoCampus
  /**
   * Cargo do usuário no vínculo.
   */
  cargo: string
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
   * Usuário associado ao vínculo.
   */
  usuario: PerfilUsuario
}

/**
 * Usuário associado ao vínculo.
 *
 * Usuário.
 *
 * Usuário que fez a reserva.
 */
export interface PerfilUsuario {
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
  email: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Imagem de capa do usuário.
   */
  imagemCapa: BlocoImagem
  /**
   * Imagem de perfil do usuário.
   */
  imagemPerfil: BlocoImagem
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

export interface PerfilListOperation {
  input: PerfilListOperationInput
  output: PerfilListOperationOutput
}

export interface PerfilListOperationInput {
  queries: Queries5
  [property: string]: any
}

export interface Queries5 {
  filterAtivo?: string[]
  filterCampusId?: string[]
  filterUsuarioId?: string[]
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

export interface PerfilListOperationOutput {
  success: Success6
  [property: string]: any
}

/**
 * Resultados da busca a Vínculos.
 */
export interface Success6 {
  /**
   * Resultados da busca atual.
   */
  data: PerfisAtivoElement[]
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
 * Resultados da busca a Vínculos.
 */
export interface PerfilListResultView {
  /**
   * Resultados da busca atual.
   */
  data: PerfisAtivoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface PerfilUpdateOperation {
  input: PerfilUpdateOperationInput
  output: PerfilUpdateOperationOutput
}

export interface PerfilUpdateOperationInput {
  body: Body19
  [property: string]: any
}

/**
 * Dados de entrada para a alteração de vínculo de um Usuário a um Campus.
 */
export interface Body19 {
  campus: BodyCampus
  /**
   * Cargos do usuário no vínculo.
   */
  cargos: string[]
  usuario: BodyUsuario
}

/**
 * Dados de entrada para encontrar um Usuário por ID.
 */
export interface BodyUsuario {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface PerfilUpdateOperationOutput {
  success: Success6
  [property: string]: any
}

/**
 * Dados de entrada para a alteração de vínculo de um Usuário a um Campus.
 */
export interface PerfilUpdateView {
  campus: BodyCampus
  /**
   * Cargos do usuário no vínculo.
   */
  cargos: string[]
  usuario: BodyUsuario
}

/**
 * Visão completa de um Vínculo.
 */
export interface PerfilView {
  /**
   * Indica se o vínculo está ativo.
   */
  ativo: boolean
  campus: CampusElement
  /**
   * Cargo do usuário no vínculo.
   */
  cargo: string
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
  usuario: UsuarioElement
}

export interface ReservaCreateOperation {
  input: ReservaCreateOperationInput
  output: ReservaCreateOperationOutput
}

export interface ReservaCreateOperationInput {
  body: Body20
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Reserva.
 */
export interface Body20 {
  ambiente: BodyAmbiente
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
  intervaloDeTempo: BodyIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario: BodyUsuario
}

export interface ReservaCreateOperationOutput {
  success: ReservaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma Reserva.
 */
export interface ReservaListResultViewSuccess {
  ambiente: AmbienteElement
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
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
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario: UsuarioElement
}

export interface ReservaDeleteByIDOperation {
  input: ReservaDeleteByIDOperationInput
  output: ReservaDeleteByIDOperationOutput
}

export interface ReservaDeleteByIDOperationInput {
  params: Params43
  [property: string]: any
}

export interface Params43 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface ReservaFindOneByIDOperation {
  input: ReservaFindOneByIDOperationInput
  output: ReservaFindOneByIDOperationOutput
}

export interface ReservaFindOneByIDOperationInput {
  params: Params44
  [property: string]: any
}

export interface Params44 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaFindOneByIDOperationOutput {
  success: ReservaListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Reserva por ID.
 */
export interface ReservaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Reserva.
 */
export interface ReservaFindOneResultView {
  ambiente: AmbienteElement
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
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
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario: UsuarioElement
}

/**
 * Dados de entrada para a criação de uma Reserva.
 */
export interface ReservaInputCreateView {
  ambiente: BodyAmbiente
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
  intervaloDeTempo: BodyIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario: BodyUsuario
}

/**
 * Dados de entrada para a atualização de uma Reserva.
 */
export interface ReservaInputUpdateView {
  ambiente?: BodyAmbiente
  /**
   * Data e hora de início da reserva.
   */
  dataInicio?: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
  intervaloDeTempo?: BodyIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao?: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario?: BodyUsuario
}

/**
 * Reserva.
 */
export interface Reserva {
  /**
   * Ambiente reservado.
   */
  ambiente: AmbientePadraoElement
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
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
   * Intervalo de tempo reservado.
   */
  intervaloDeTempo: GradeHorarioOfertaFormacaoIntervaloDeTempoIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  /**
   * Usuário que fez a reserva.
   */
  usuario: PerfilUsuario
}

export interface ReservaListOperation {
  input: ReservaListOperationInput
  output: ReservaListOperationOutput
}

export interface ReservaListOperationInput {
  queries: Queries6
  [property: string]: any
}

export interface Queries6 {
  filterDataInicio?: string[]
  filterDataTermino?: string[]
  filterIntervaloDeTempoPeriodoFim?: string[]
  filterIntervaloDeTempoPeriodoInicio?: string[]
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

export interface ReservaListOperationOutput {
  success: Success7
  [property: string]: any
}

/**
 * Resultados da busca a Reservas.
 */
export interface Success7 {
  /**
   * Resultados da busca atual.
   */
  data: ReservaListResultViewSuccess[]
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
 * Resultados da busca a Reservas.
 */
export interface ReservaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: ReservaListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface ReservaUpdateByIDOperation {
  input: ReservaUpdateByIDOperationInput
  output: ReservaUpdateByIDOperationOutput
}

export interface ReservaUpdateByIDOperationInput {
  body: Body21
  params: Params45
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Reserva.
 */
export interface Body21 {
  ambiente?: BodyAmbiente
  /**
   * Data e hora de início da reserva.
   */
  dataInicio?: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
  intervaloDeTempo?: BodyIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao?: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario?: BodyUsuario
}

export interface Params45 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaUpdateByIDOperationOutput {
  success: ReservaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma Reserva.
 */
export interface ReservaView {
  ambiente: AmbienteElement
  /**
   * Data e hora de início da reserva.
   */
  dataInicio: Date
  /**
   * Data e hora de término da reserva.
   */
  dataTermino?: Date
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
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Motivo da reserva.
   */
  motivo?: string
  /**
   * Situação da reserva.
   */
  situacao: string
  /**
   * Tipo da reserva.
   */
  tipo?: string
  usuario: UsuarioElement
}

/**
 * Define os nomes de indentificação das entidades.
 */
export enum Tokens {
  Ambiente = "Ambiente",
  AmbienteCreate = "AmbienteCreate",
  AmbienteDeleteOneByID = "AmbienteDeleteOneById",
  AmbienteFindOneByID = "AmbienteFindOneById",
  AmbienteFindOneInputView = "AmbienteFindOneInputView",
  AmbienteFindOneResultView = "AmbienteFindOneResultView",
  AmbienteGetImagemCapa = "AmbienteGetImagemCapa",
  AmbienteInputCreateView = "AmbienteInputCreateView",
  AmbienteInputUpdateView = "AmbienteInputUpdateView",
  AmbienteList = "AmbienteList",
  AmbienteListResultView = "AmbienteListResultView",
  AmbienteSetImagemCapa = "AmbienteSetImagemCapa",
  AmbienteUpdateOneByID = "AmbienteUpdateOneById",
  AmbienteView = "AmbienteView",
  Arquivo = "Arquivo",
  ArquivoFindOneInputView = "ArquivoFindOneInputView",
  ArquivoFindOneResultView = "ArquivoFindOneResultView",
  ArquivoGetFile = "ArquivoGetFile",
  ArquivoView = "ArquivoView",
  AuthLogin = "AuthLogin",
  AuthLoginInputView = "AuthLoginInputView",
  AuthRefresh = "AuthRefresh",
  AuthRefreshInputView = "AuthRefreshInputView",
  AuthSessionCredentialsView = "AuthSessionCredentialsView",
  AuthSetInitialPassword = "AuthSetInitialPassword",
  AuthSetInitialPasswordInputView = "AuthSetInitialPasswordInputView",
  AuthWhoAmI = "AuthWhoAmI",
  AuthWhoAmIInputView = "AuthWhoAmIInputView",
  Bloco = "Bloco",
  BlocoCreate = "BlocoCreate",
  BlocoDeleteOneByID = "BlocoDeleteOneById",
  BlocoFindOneByID = "BlocoFindOneById",
  BlocoFindOneInputView = "BlocoFindOneInputView",
  BlocoFindOneResultView = "BlocoFindOneResultView",
  BlocoGetImagemCapa = "BlocoGetImagemCapa",
  BlocoInputCreateView = "BlocoInputCreateView",
  BlocoInputUpdateView = "BlocoInputUpdateView",
  BlocoList = "BlocoList",
  BlocoListResultView = "BlocoListResultView",
  BlocoSetImagemCapa = "BlocoSetImagemCapa",
  BlocoUpdateOneByID = "BlocoUpdateOneById",
  BlocoView = "BlocoView",
  CalendarioLetivo = "CalendarioLetivo",
  CalendarioLetivoCreate = "CalendarioLetivoCreate",
  CalendarioLetivoDeleteOneByID = "CalendarioLetivoDeleteOneById",
  CalendarioLetivoFindOneByID = "CalendarioLetivoFindOneById",
  CalendarioLetivoFindOneInputView = "CalendarioLetivoFindOneInputView",
  CalendarioLetivoFindOneResultView = "CalendarioLetivoFindOneResultView",
  CalendarioLetivoInputCreateView = "CalendarioLetivoInputCreateView",
  CalendarioLetivoInputUpdateView = "CalendarioLetivoInputUpdateView",
  CalendarioLetivoList = "CalendarioLetivoList",
  CalendarioLetivoListResultView = "CalendarioLetivoListResultView",
  CalendarioLetivoUpdateOneByID = "CalendarioLetivoUpdateOneById",
  CalendarioLetivoView = "CalendarioLetivoView",
  Campus = "Campus",
  CampusCreate = "CampusCreate",
  CampusDeleteOneByID = "CampusDeleteOneById",
  CampusFindOneByID = "CampusFindOneById",
  CampusFindOneInputView = "CampusFindOneInputView",
  CampusFindOneResultView = "CampusFindOneResultView",
  CampusInputCreateView = "CampusInputCreateView",
  CampusInputUpdateView = "CampusInputUpdateView",
  CampusList = "CampusList",
  CampusListResultView = "CampusListResultView",
  CampusUpdateOneByID = "CampusUpdateOneById",
  CampusView = "CampusView",
  Cidade = "Cidade",
  CidadeFindOneByID = "CidadeFindOneById",
  CidadeFindOneInputView = "CidadeFindOneInputView",
  CidadeFindOneResultView = "CidadeFindOneResultView",
  CidadeList = "CidadeList",
  CidadeListResultView = "CidadeListResultView",
  CidadeView = "CidadeView",
  Curso = "Curso",
  CursoCreate = "CursoCreate",
  CursoDeleteOneByID = "CursoDeleteOneById",
  CursoFindOneByID = "CursoFindOneById",
  CursoFindOneInputView = "CursoFindOneInputView",
  CursoFindOneResultView = "CursoFindOneResultView",
  CursoGetImagemCapa = "CursoGetImagemCapa",
  CursoInputCreateView = "CursoInputCreateView",
  CursoInputUpdateView = "CursoInputUpdateView",
  CursoList = "CursoList",
  CursoListResultView = "CursoListResultView",
  CursoSetImagemCapa = "CursoSetImagemCapa",
  CursoUpdateOneByID = "CursoUpdateOneById",
  CursoView = "CursoView",
  DiaCalendario = "DiaCalendario",
  DiaCalendarioCreate = "DiaCalendarioCreate",
  DiaCalendarioDeleteOneByID = "DiaCalendarioDeleteOneById",
  DiaCalendarioFindOneByID = "DiaCalendarioFindOneById",
  DiaCalendarioFindOneInputView = "DiaCalendarioFindOneInputView",
  DiaCalendarioFindOneResultView = "DiaCalendarioFindOneResultView",
  DiaCalendarioInputCreateView = "DiaCalendarioInputCreateView",
  DiaCalendarioInputUpdateView = "DiaCalendarioInputUpdateView",
  DiaCalendarioList = "DiaCalendarioList",
  DiaCalendarioListResultView = "DiaCalendarioListResultView",
  DiaCalendarioUpdateOneByID = "DiaCalendarioUpdateOneById",
  DiaCalendarioView = "DiaCalendarioView",
  Diario = "Diario",
  DiarioCreate = "DiarioCreate",
  DiarioDeleteOneByID = "DiarioDeleteOneById",
  DiarioFindOneByID = "DiarioFindOneById",
  DiarioFindOneInputView = "DiarioFindOneInputView",
  DiarioFindOneResultView = "DiarioFindOneResultView",
  DiarioGetImagemCapa = "DiarioGetImagemCapa",
  DiarioInputCreateView = "DiarioInputCreateView",
  DiarioInputUpdateView = "DiarioInputUpdateView",
  DiarioList = "DiarioList",
  DiarioListResultView = "DiarioListResultView",
  DiarioSetImagemCapa = "DiarioSetImagemCapa",
  DiarioUpdateOneByID = "DiarioUpdateOneById",
  DiarioView = "DiarioView",
  Disciplina = "Disciplina",
  DisciplinaCreate = "DisciplinaCreate",
  DisciplinaDeleteOneByID = "DisciplinaDeleteOneById",
  DisciplinaFindOneByID = "DisciplinaFindOneById",
  DisciplinaFindOneInputView = "DisciplinaFindOneInputView",
  DisciplinaFindOneResultView = "DisciplinaFindOneResultView",
  DisciplinaGetImagemCapa = "DisciplinaGetImagemCapa",
  DisciplinaInputCreateView = "DisciplinaInputCreateView",
  DisciplinaInputUpdateView = "DisciplinaInputUpdateView",
  DisciplinaList = "DisciplinaList",
  DisciplinaListResultView = "DisciplinaListResultView",
  DisciplinaSetImagemCapa = "DisciplinaSetImagemCapa",
  DisciplinaUpdateOneByID = "DisciplinaUpdateOneById",
  DisciplinaView = "DisciplinaView",
  Endereco = "Endereco",
  EnderecoFindOneByID = "EnderecoFindOneById",
  EnderecoFindOneInputView = "EnderecoFindOneInputView",
  EnderecoFindOneResultView = "EnderecoFindOneResultView",
  EnderecoInputView = "EnderecoInputView",
  EnderecoView = "EnderecoView",
  Estado = "Estado",
  EstadoFindOneByID = "EstadoFindOneById",
  EstadoFindOneInputView = "EstadoFindOneInputView",
  EstadoFindOneResultView = "EstadoFindOneResultView",
  EstadoList = "EstadoList",
  EstadoListResultView = "EstadoListResultView",
  EstadoView = "EstadoView",
  GetImagem = "GetImagem",
  GradeHorarioOfertaFormacao = "GradeHorarioOfertaFormacao",
  GradeHorarioOfertaFormacaoCreate = "GradeHorarioOfertaFormacaoCreate",
  GradeHorarioOfertaFormacaoDeleteOneByID = "GradeHorarioOfertaFormacaoDeleteOneById",
  GradeHorarioOfertaFormacaoFindOneByID = "GradeHorarioOfertaFormacaoFindOneById",
  GradeHorarioOfertaFormacaoFindOneInputView = "GradeHorarioOfertaFormacaoFindOneInputView",
  GradeHorarioOfertaFormacaoFindOneResultView = "GradeHorarioOfertaFormacaoFindOneResultView",
  GradeHorarioOfertaFormacaoInputCreateView = "GradeHorarioOfertaFormacaoInputCreateView",
  GradeHorarioOfertaFormacaoInputUpdateView = "GradeHorarioOfertaFormacaoInputUpdateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo = "GradeHorarioOfertaFormacaoIntervaloDeTempo",
  GradeHorarioOfertaFormacaoIntervaloDeTempoCreate = "GradeHorarioOfertaFormacaoIntervaloDeTempoCreate",
  GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneByID = "GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByID = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView = "GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView = "GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoList = "GradeHorarioOfertaFormacaoIntervaloDeTempoList",
  GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView = "GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneByID = "GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoView = "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
  GradeHorarioOfertaFormacaoList = "GradeHorarioOfertaFormacaoList",
  GradeHorarioOfertaFormacaoListResultView = "GradeHorarioOfertaFormacaoListResultView",
  GradeHorarioOfertaFormacaoUpdateOneByID = "GradeHorarioOfertaFormacaoUpdateOneById",
  GradeHorarioOfertaFormacaoView = "GradeHorarioOfertaFormacaoView",
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
  Modalidade = "Modalidade",
  ModalidadeCreate = "ModalidadeCreate",
  ModalidadeDeleteOneByID = "ModalidadeDeleteOneById",
  ModalidadeFindOneByID = "ModalidadeFindOneById",
  ModalidadeFindOneInputView = "ModalidadeFindOneInputView",
  ModalidadeFindOneResultView = "ModalidadeFindOneResultView",
  ModalidadeInputCreateView = "ModalidadeInputCreateView",
  ModalidadeInputUpdateView = "ModalidadeInputUpdateView",
  ModalidadeList = "ModalidadeList",
  ModalidadeListResultView = "ModalidadeListResultView",
  ModalidadeUpdateOneByID = "ModalidadeUpdateOneById",
  ModalidadeView = "ModalidadeView",
  NivelDeFormacao = "NivelDeFormacao",
  NivelDeFormacaoCreate = "NivelDeFormacaoCreate",
  NivelDeFormacaoDeleteOneByID = "NivelDeFormacaoDeleteOneById",
  NivelDeFormacaoFindOneByID = "NivelDeFormacaoFindOneById",
  NivelDeFormacaoFindOneInputView = "NivelDeFormacaoFindOneInputView",
  NivelDeFormacaoFindOneResultView = "NivelDeFormacaoFindOneResultView",
  NivelDeFormacaoInputCreateView = "NivelDeFormacaoInputCreateView",
  NivelDeFormacaoInputUpdateView = "NivelDeFormacaoInputUpdateView",
  NivelDeFormacaoList = "NivelDeFormacaoList",
  NivelDeFormacaoListResultView = "NivelDeFormacaoListResultView",
  NivelDeFormacaoUpdateOneByID = "NivelDeFormacaoUpdateOneById",
  NivelDeFormacaoView = "NivelDeFormacaoView",
  OfertaFormacao = "OfertaFormacao",
  OfertaFormacaoCreate = "OfertaFormacaoCreate",
  OfertaFormacaoDeleteOneByID = "OfertaFormacaoDeleteOneById",
  OfertaFormacaoFindOneByID = "OfertaFormacaoFindOneById",
  OfertaFormacaoFindOneInputView = "OfertaFormacaoFindOneInputView",
  OfertaFormacaoFindOneResultView = "OfertaFormacaoFindOneResultView",
  OfertaFormacaoInputCreateView = "OfertaFormacaoInputCreateView",
  OfertaFormacaoInputUpdateView = "OfertaFormacaoInputUpdateView",
  OfertaFormacaoList = "OfertaFormacaoList",
  OfertaFormacaoListResultView = "OfertaFormacaoListResultView",
  OfertaFormacaoNivelFormacao = "OfertaFormacaoNivelFormacao",
  OfertaFormacaoNivelFormacaoCreate = "OfertaFormacaoNivelFormacaoCreate",
  OfertaFormacaoNivelFormacaoDeleteOneByID = "OfertaFormacaoNivelFormacaoDeleteOneById",
  OfertaFormacaoNivelFormacaoFindOneByID = "OfertaFormacaoNivelFormacaoFindOneById",
  OfertaFormacaoNivelFormacaoFindOneInputView = "OfertaFormacaoNivelFormacaoFindOneInputView",
  OfertaFormacaoNivelFormacaoFindOneResultView = "OfertaFormacaoNivelFormacaoFindOneResultView",
  OfertaFormacaoNivelFormacaoInputCreateView = "OfertaFormacaoNivelFormacaoInputCreateView",
  OfertaFormacaoNivelFormacaoInputUpdateView = "OfertaFormacaoNivelFormacaoInputUpdateView",
  OfertaFormacaoNivelFormacaoList = "OfertaFormacaoNivelFormacaoList",
  OfertaFormacaoNivelFormacaoListResultView = "OfertaFormacaoNivelFormacaoListResultView",
  OfertaFormacaoNivelFormacaoUpdateOneByID = "OfertaFormacaoNivelFormacaoUpdateOneById",
  OfertaFormacaoNivelFormacaoView = "OfertaFormacaoNivelFormacaoView",
  OfertaFormacaoUpdateOneByID = "OfertaFormacaoUpdateOneById",
  OfertaFormacaoView = "OfertaFormacaoView",
  PaginatedFilterView = "PaginatedFilterView",
  PaginatedInputBaseView = "PaginatedInputBaseView",
  PaginatedInputView = "PaginatedInputView",
  PaginatedResultLinksView = "PaginatedResultLinksView",
  PaginatedResultMetaView = "PaginatedResultMetaView",
  PaginatedResultView = "PaginatedResultView",
  PaginatedSortByView = "PaginatedSortByView",
  Perfil = "Perfil",
  PerfilCreate = "PerfilCreate",
  PerfilDeleteOneByID = "PerfilDeleteOneById",
  PerfilFindOneByID = "PerfilFindOneById",
  PerfilFindOneInputView = "PerfilFindOneInputView",
  PerfilFindOneResultView = "PerfilFindOneResultView",
  PerfilInputCreateView = "PerfilInputCreateView",
  PerfilInputUpdateView = "PerfilInputUpdateView",
  PerfilList = "PerfilList",
  PerfilListResultView = "PerfilListResultView",
  PerfilUpdateOneByID = "PerfilUpdateOneById",
  PerfilView = "PerfilView",
  Reserva = "Reserva",
  ReservaCreate = "ReservaCreate",
  ReservaDeleteOneByID = "ReservaDeleteOneById",
  ReservaFindOneByID = "ReservaFindOneById",
  ReservaFindOneInputView = "ReservaFindOneInputView",
  ReservaFindOneResultView = "ReservaFindOneResultView",
  ReservaInputCreateView = "ReservaInputCreateView",
  ReservaInputUpdateView = "ReservaInputUpdateView",
  ReservaList = "ReservaList",
  ReservaListResultView = "ReservaListResultView",
  ReservaUpdateOneByID = "ReservaUpdateOneById",
  ReservaView = "ReservaView",
  SearchInputView = "SearchInputView",
  SetImagem = "SetImagem",
  Turma = "Turma",
  TurmaCreate = "TurmaCreate",
  TurmaDeleteOneByID = "TurmaDeleteOneById",
  TurmaFindOneByID = "TurmaFindOneById",
  TurmaFindOneInputView = "TurmaFindOneInputView",
  TurmaFindOneResultView = "TurmaFindOneResultView",
  TurmaGetImagemCapa = "TurmaGetImagemCapa",
  TurmaInputCreateView = "TurmaInputCreateView",
  TurmaInputUpdateView = "TurmaInputUpdateView",
  TurmaList = "TurmaList",
  TurmaListResultView = "TurmaListResultView",
  TurmaSetImagemCapa = "TurmaSetImagemCapa",
  TurmaUpdateOneByID = "TurmaUpdateOneById",
  TurmaView = "TurmaView",
  Usuario = "Usuario",
  UsuarioCreate = "UsuarioCreate",
  UsuarioDeleteOneByID = "UsuarioDeleteOneById",
  UsuarioFindOneByID = "UsuarioFindOneById",
  UsuarioFindOneInputView = "UsuarioFindOneInputView",
  UsuarioFindOneResultView = "UsuarioFindOneResultView",
  UsuarioGetImagemCapa = "UsuarioGetImagemCapa",
  UsuarioGetImagemPerfil = "UsuarioGetImagemPerfil",
  UsuarioInputCreateView = "UsuarioInputCreateView",
  UsuarioInputUpdateView = "UsuarioInputUpdateView",
  UsuarioList = "UsuarioList",
  UsuarioListResultView = "UsuarioListResultView",
  UsuarioSetImagemCapa = "UsuarioSetImagemCapa",
  UsuarioSetImagemPerfil = "UsuarioSetImagemPerfil",
  UsuarioUpdateOneByID = "UsuarioUpdateOneById",
  UsuarioView = "UsuarioView",
}

export interface TurmaCreateOperation {
  input: TurmaCreateOperationInput
  output: TurmaCreateOperationOutput
}

export interface TurmaCreateOperationInput {
  body: Body22
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Turma.
 */
export interface Body22 {
  ambientePadraoAula: BodyAmbiente
  curso: BodyCurso
  /**
   * Período da Turma.
   */
  periodo: string
}

/**
 * Dados de entrada para encontrar um Curso por ID.
 */
export interface BodyCurso {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface TurmaCreateOperationOutput {
  success: TurmaElement
  [property: string]: any
}

export interface TurmaDeleteByIDOperation {
  input: TurmaDeleteByIDOperationInput
  output: TurmaDeleteByIDOperationOutput
}

export interface TurmaDeleteByIDOperationInput {
  params: Params46
  [property: string]: any
}

export interface Params46 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface TurmaFindOneByIDOperation {
  input: TurmaFindOneByIDOperationInput
  output: TurmaFindOneByIDOperationOutput
}

export interface TurmaFindOneByIDOperationInput {
  params: Params47
  [property: string]: any
}

export interface Params47 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaFindOneByIDOperationOutput {
  success: TurmaElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Turma por ID.
 */
export interface TurmaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Turma.
 */
export interface TurmaFindOneResultView {
  ambientePadraoAula: AmbienteElement
  curso: CursoElement
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
   * Período da Turma.
   */
  periodo: string
}

export interface TurmaGetImagemCapa {
  input: TurmaGetImagemCapaInput
  output: TurmaGetImagemCapaOutput
}

export interface TurmaGetImagemCapaInput {
  params: Params48
  [property: string]: any
}

export interface Params48 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaGetImagemCapaOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Turma.
 */
export interface TurmaInputCreateView {
  ambientePadraoAula: BodyAmbiente
  curso: BodyCurso
  /**
   * Período da Turma.
   */
  periodo: string
}

/**
 * Dados de entrada para a atualização de uma Turma.
 */
export interface TurmaInputUpdateView {
  ambientePadraoAula?: BodyAmbiente
  curso?: BodyCurso
  /**
   * Período da Turma.
   */
  periodo?: string
}

/**
 * Turma.
 */
export interface Turma {
  /**
   * Ambiente padrão da sala de aula.
   */
  ambientePadraoAula: AmbientePadraoElement | null
  /**
   * Curso da Turma.
   */
  curso: TurmaCurso
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
   * Imagem de capa da Turma.
   */
  imagemCapa: BlocoImagem
  /**
   * Período da Turma.
   */
  periodo: string
}

export interface TurmaListOperation {
  input: TurmaListOperationInput
  output: TurmaListOperationOutput
}

export interface TurmaListOperationInput {
  queries: Queries7
  [property: string]: any
}

export interface Queries7 {
  filter_ambientePadraoAula_capacidade?: string[]
  filter_ambientePadraoAula_codigo?: string[]
  filter_ambientePadraoAula_nome?: string[]
  filter_ambientePadraoAula_tipo?: string[]
  filter_curso_campus_id?: string[]
  filter_curso_modalidade_id?: string[]
  filter_curso_nome?: string[]
  filter_curso_nomeAbreviado?: string[]
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

export interface TurmaListOperationOutput {
  success: Success8
  [property: string]: any
}

/**
 * Resultados da busca a Turmas.
 */
export interface Success8 {
  /**
   * Resultados da busca atual.
   */
  data: TurmaElement[]
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
 * Resultados da busca a Turmas.
 */
export interface TurmaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: TurmaElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface TurmaSetImagemCapa {
  input: TurmaSetImagemCapaInput
  output: TurmaSetImagemCapaOutput
}

export interface TurmaSetImagemCapaInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params49
  [property: string]: any
}

export interface Params49 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface TurmaUpdateByIDOperation {
  input: TurmaUpdateByIDOperationInput
  output: TurmaUpdateByIDOperationOutput
}

export interface TurmaUpdateByIDOperationInput {
  body: Body23
  params: Params50
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Turma.
 */
export interface Body23 {
  ambientePadraoAula?: BodyAmbiente
  curso?: BodyCurso
  /**
   * Período da Turma.
   */
  periodo?: string
}

export interface Params50 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaUpdateByIDOperationOutput {
  success: TurmaElement
  [property: string]: any
}

/**
 * Visão completa de uma Turma.
 */
export interface TurmaView {
  ambientePadraoAula: AmbienteElement
  curso: CursoElement
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
   * Período da Turma.
   */
  periodo: string
}

export interface UsuarioCreateOperation {
  input: UsuarioCreateOperationInput
  output: UsuarioCreateOperationOutput
}

export interface UsuarioCreateOperationInput {
  body: Body24
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um usuário.
 */
export interface Body24 {
  /**
   * E-mail do usuário.
   */
  email: string
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

export interface UsuarioCreateOperationOutput {
  success: UsuarioElement
  [property: string]: any
}

export interface UsuarioDeleteByIDOperation {
  input: UsuarioDeleteByIDOperationInput
  output: UsuarioDeleteByIDOperationOutput
}

export interface UsuarioDeleteByIDOperationInput {
  params: Params51
  [property: string]: any
}

export interface Params51 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioDeleteByIDOperationOutput {
  success: boolean
  [property: string]: any
}

export interface UsuarioFindOneByIDOperation {
  input: UsuarioFindOneByIDOperationInput
  output: UsuarioFindOneByIDOperationOutput
}

export interface UsuarioFindOneByIDOperationInput {
  params: Params52
  [property: string]: any
}

export interface Params52 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioFindOneByIDOperationOutput {
  success: UsuarioElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um Usuário por ID.
 */
export interface UsuarioFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um Usuário.
 */
export interface UsuarioFindOneResultView {
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
  email: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  imagemPerfil: SuccessImagemCapa
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

export interface UsuarioGetImagemCapa {
  input: UsuarioGetImagemCapaInput
  output: UsuarioGetImagemCapaOutput
}

export interface UsuarioGetImagemCapaInput {
  params: Params53
  [property: string]: any
}

export interface Params53 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioGetImagemCapaOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Obtêm a imagem de perfil.
 */
export interface UsuarioGetImagemPerfil {
  input: UsuarioGetImagemPerfilInput
  output: UsuarioGetImagemPerfilOutput
}

export interface UsuarioGetImagemPerfilInput {
  params: Params54
  [property: string]: any
}

export interface Params54 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioGetImagemPerfilOutput {
  /**
   * Binário.
   */
  success: string
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um usuário.
 */
export interface UsuarioInputCreateView {
  /**
   * E-mail do usuário.
   */
  email: string
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

/**
 * Dados de entrada para a atualização de um Usuário.
 */
export interface UsuarioInputUpdateView {
  /**
   * E-mail do usuário.
   */
  email?: string
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape?: string
  /**
   * Nome do usuário.
   */
  nome?: string
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
  email: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Imagem de capa do usuário.
   */
  imagemCapa: BlocoImagem
  /**
   * Imagem de perfil do usuário.
   */
  imagemPerfil: BlocoImagem
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}

export interface UsuarioListOperation {
  input: UsuarioListOperationInput
  output: UsuarioListOperationOutput
}

export interface UsuarioListOperationInput {
  queries: Queries8
  [property: string]: any
}

export interface Queries8 {
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

export interface UsuarioListOperationOutput {
  success: Success9
  [property: string]: any
}

/**
 * Resultados da busca a usuários.
 */
export interface Success9 {
  /**
   * Resultados da busca atual.
   */
  data: UsuarioElement[]
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
 * Resultados da busca a usuários.
 */
export interface UsuarioListResultView {
  /**
   * Resultados da busca atual.
   */
  data: UsuarioElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface UsuarioSetImagemCapa {
  input: UsuarioSetImagemCapaInput
  output: UsuarioSetImagemCapaOutput
}

export interface UsuarioSetImagemCapaInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params55
  [property: string]: any
}

export interface Params55 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

/**
 * Define a imagem de perfil.
 */
export interface UsuarioSetImagemPerfil {
  input: UsuarioSetImagemPerfilInput
  output: UsuarioSetImagemPerfilOutput
}

export interface UsuarioSetImagemPerfilInput {
  /**
   * Binário da imagem.
   */
  body: string
  params: Params56
  [property: string]: any
}

export interface Params56 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioSetImagemPerfilOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface UsuarioUpdateByIDOperation {
  input: UsuarioUpdateByIDOperationInput
  output: UsuarioUpdateByIDOperationOutput
}

export interface UsuarioUpdateByIDOperationInput {
  body: Body25
  params: Params57
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um Usuário.
 */
export interface Body25 {
  /**
   * E-mail do usuário.
   */
  email?: string
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape?: string
  /**
   * Nome do usuário.
   */
  nome?: string
}

export interface Params57 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioUpdateByIDOperationOutput {
  success: UsuarioElement
  [property: string]: any
}

/**
 * Visão completa de um Usuário.
 */
export interface UsuarioView {
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
  email: string
  /**
   * Identificador do registro (uuid).
   */
  id: string
  imagemCapa: SuccessImagemCapa
  imagemPerfil: SuccessImagemCapa
  /**
   * Diz que o usuário tem poderes de administrador.
   */
  isSuperUser: boolean
  /**
   * Matrícula SIAPE do usuário.
   */
  matriculaSiape: string
  /**
   * Nome do usuário.
   */
  nome: string
}
