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
 * Data da aula.
 *
 * Data.
 *
 * Início da vigência da preferência de agrupamento.
 *
 * Data de início.
 *
 * Data de término.
 *
 * Data da aula gerada.
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
 * Data da aula.
 *
 * Data.
 *
 * Início da vigência da preferência de agrupamento.
 *
 * Data de início.
 *
 * Data de término.
 *
 * Data da aula gerada.
 */
export type DateTime = Date

/**
 * Identificador do registro (numérico).
 *
 * Identificador numérico.
 */
export type Numericid = number

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
export type Uuid = string

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

export interface AmbienteDeleteByIdOperation {
  input: AmbienteDeleteByIdOperationInput
  output: AmbienteDeleteByIdOperationOutput
}

export interface AmbienteDeleteByIdOperationInput {
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

export interface AmbienteDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface AmbienteFindOneByIdOperation {
  input: AmbienteFindOneByIdOperationInput
  output: AmbienteFindOneByIdOperationOutput
}

export interface AmbienteFindOneByIdOperationInput {
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

export interface AmbienteFindOneByIdOperationOutput {
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
 * Imagem de capa da disciplina.
 *
 * Imagem de capa do diário.
 *
 * Imagem de capa do curso.
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
  "filter.bloco.campus.id"?: string[]
  "filter.bloco.id"?: string[]
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

export interface AmbienteUpdateByIdOperation {
  input: AmbienteUpdateByIdOperationInput
  output: AmbienteUpdateByIdOperationOutput
}

export interface AmbienteUpdateByIdOperationInput {
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

export interface AmbienteUpdateByIdOperationOutput {
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

export interface AulaCreateOperation {
  input: AulaCreateOperationInput
  output: AulaCreateOperationOutput
}

export interface AulaCreateOperationInput {
  body: TentacledBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Aula.
 */
export interface TentacledBody {
  ambiente?: BodyAmbiente
  data: Date
  diario: BodyDiario
  intervaloDeTempo: BodyIntervaloDeTempo
  modalidade: null | string
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
 * Dados de entrada para encontrar um diário por ID.
 */
export interface BodyDiario {
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

export interface AulaCreateOperationOutput {
  success: AulaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma Aula.
 */
export interface AulaListResultViewSuccess {
  ambiente: AmbienteElement
  /**
   * Data da aula.
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Modalidade da aula.
   */
  modalidade: null | string
}

/**
 * Visão FindOne de um diário.
 */
export interface DiarioElement {
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

export interface AulaDeleteByIdOperation {
  input: AulaDeleteByIdOperationInput
  output: AulaDeleteByIdOperationOutput
}

export interface AulaDeleteByIdOperationInput {
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

export interface AulaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface AulaFindOneByIdOperation {
  input: AulaFindOneByIdOperationInput
  output: AulaFindOneByIdOperationOutput
}

export interface AulaFindOneByIdOperationInput {
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

export interface AulaFindOneByIdOperationOutput {
  success: AulaListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Aula por ID.
 */
export interface AulaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Aula.
 */
export interface AulaFindOneResultView {
  ambiente: AmbienteElement
  /**
   * Data da aula.
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Modalidade da aula.
   */
  modalidade: null | string
}

/**
 * Dados de entrada para a criação de uma Aula.
 */
export interface AulaInputCreateView {
  ambiente?: BodyAmbiente
  data: Date
  diario: BodyDiario
  intervaloDeTempo: BodyIntervaloDeTempo
  modalidade: null | string
}

/**
 * Dados de entrada para a atualização de uma Aula.
 */
export interface AulaInputUpdateView {
  ambiente?: BodyAmbiente
  data?: Date
  diario?: BodyDiario
  intervaloDeTempo?: BodyIntervaloDeTempo
  modalidade?: null | string
}

/**
 * Aula.
 */
export interface Aula {
  /**
   * Ambiente associado à aula.
   */
  ambiente: AmbientePadraoElement | null
  /**
   * Data da aula.
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
   * Diário associado à aula.
   */
  diario: AulaDiario
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Intervalo de Tempo associado à aula.
   */
  intervaloDeTempo: AulaIntervaloDeTempo
  /**
   * Modalidade da aula.
   */
  modalidade: null | string
}

/**
 * Diário associado à aula.
 *
 * Diario.
 *
 * Diário vinculado.
 */
export interface AulaDiario {
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
  calendarioLetivo: DiarioCalendario
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
 * Calendário Letivo vinculado ao diário.
 *
 * CalendarioLetivo.
 *
 * Calendario.
 *
 * calendário.
 */
export interface DiarioCalendario {
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

/**
 * Intervalo de Tempo associado à aula.
 *
 * Intervalo de Tempo.
 *
 * Intervalo de tempo.
 *
 * Intervalo de tempo reservado.
 */
export interface AulaIntervaloDeTempo {
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

export interface AulaListOperation {
  input: AulaListOperationInput
  output: AulaListOperationOutput
}

export interface AulaListOperationInput {
  queries: TentacledQueries
  [property: string]: any
}

export interface TentacledQueries {
  "filter.ambiente.id"?: string[]
  "filter.diario.id"?: string[]
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

export interface AulaListOperationOutput {
  success: FluffySuccess
  [property: string]: any
}

/**
 * Resultados da busca a Aulas.
 */
export interface FluffySuccess {
  /**
   * Resultados da busca atual.
   */
  data: AulaListResultViewSuccess[]
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
 * Resultados da busca a Aulas.
 */
export interface AulaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: AulaListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface AulaUpdateByIdOperation {
  input: AulaUpdateByIdOperationInput
  output: AulaUpdateByIdOperationOutput
}

export interface AulaUpdateByIdOperationInput {
  body: StickyBody
  params: AmbitiousParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Aula.
 */
export interface StickyBody {
  ambiente?: BodyAmbiente
  data?: Date
  diario?: BodyDiario
  intervaloDeTempo?: BodyIntervaloDeTempo
  modalidade?: null | string
}

export interface AmbitiousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface AulaUpdateByIdOperationOutput {
  success: AulaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma Aula.
 */
export interface AulaView {
  ambiente: AmbienteElement
  /**
   * Data da aula.
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Modalidade da aula.
   */
  modalidade: null | string
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
  body: IndigoBody
  [property: string]: any
}

/**
 * Dados de entrada para definir a senha inicial.
 */
export interface IndigoBody {
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
  body: IndecentBody
  [property: string]: any
}

/**
 * Dados de entrada para autenticação.
 */
export interface IndecentBody {
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
  success: TentacledSuccess
  [property: string]: any
}

/**
 * Credenciais de sessão.
 */
export interface TentacledSuccess {
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
  body: HilariousBody
  [property: string]: any
}

/**
 * Dados de entrada para refresh de autenticação.
 */
export interface HilariousBody {
  /**
   * Token de refresh.
   */
  refreshToken: string
}

export interface AuthRefreshOperationOutput {
  success: TentacledSuccess
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
  success: StickySuccess
  [property: string]: any
}

/**
 * Informações sobre o ator..
 */
export interface StickySuccess {
  /**
   * Vínculos do usuário logado.
   */
  perfisAtivos: PerfilElement[]
  /**
   * Usuário autenticado.
   */
  usuario: UsuarioElement
}

/**
 * Visão FindOne de um Vínculo.
 */
export interface PerfilElement {
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
  perfisAtivos: PerfilElement[]
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
  body: AmbitiousBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um bloco.
 */
export interface AmbitiousBody {
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

export interface BlocoDeleteByIdOperation {
  input: BlocoDeleteByIdOperationInput
  output: BlocoDeleteByIdOperationOutput
}

export interface BlocoDeleteByIdOperationInput {
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

export interface BlocoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface BlocoFindOneByIdOperation {
  input: BlocoFindOneByIdOperationInput
  output: BlocoFindOneByIdOperationOutput
}

export interface BlocoFindOneByIdOperationInput {
  params: MagentaParams
  [property: string]: any
}

export interface MagentaParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoFindOneByIdOperationOutput {
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
  queries: StickyQueries
  [property: string]: any
}

export interface StickyQueries {
  "filter.campus.id"?: string[]
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
  success: IndigoSuccess
  [property: string]: any
}

/**
 * Resultados da busca a blocos.
 */
export interface IndigoSuccess {
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

export interface BlocoSetCoverImageOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface BlocoUpdateByIdOperation {
  input: BlocoUpdateByIdOperationInput
  output: BlocoUpdateByIdOperationOutput
}

export interface BlocoUpdateByIdOperationInput {
  body: CunningBody
  params: BraggadociousParams
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um bloco.
 */
export interface CunningBody {
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

export interface BraggadociousParams {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface BlocoUpdateByIdOperationOutput {
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
  body: MagentaBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um calendário letivo.
 */
export interface MagentaBody {
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

export interface CalendarioLetivoDeleteByIdOperation {
  input: CalendarioLetivoDeleteByIdOperationInput
  output: CalendarioLetivoDeleteByIdOperationOutput
}

export interface CalendarioLetivoDeleteByIdOperationInput {
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

export interface CalendarioLetivoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CalendarioLetivoFindOneByIdOperation {
  input: CalendarioLetivoFindOneByIdOperationInput
  output: CalendarioLetivoFindOneByIdOperationOutput
}

export interface CalendarioLetivoFindOneByIdOperationInput {
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

export interface CalendarioLetivoFindOneByIdOperationOutput {
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

export interface CalendarioLetivoListOperation {
  input: CalendarioLetivoListOperationInput
  output: CalendarioLetivoListOperationOutput
}

export interface CalendarioLetivoListOperationInput {
  queries: IndigoQueries
  [property: string]: any
}

export interface IndigoQueries {
  "filter.campus.id"?: string[]
  "filter.ofertaFormacao.id"?: string[]
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
  success: IndecentSuccess
  [property: string]: any
}

/**
 * Resultados da busca a CalendarioLetivos.
 */
export interface IndecentSuccess {
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

export interface CalendarioLetivoUpdateByIdOperation {
  input: CalendarioLetivoUpdateByIdOperationInput
  output: CalendarioLetivoUpdateByIdOperationOutput
}

export interface CalendarioLetivoUpdateByIdOperationInput {
  body: FriskyBody
  params: Params3
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um calendário letivo.
 */
export interface FriskyBody {
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

export interface Params3 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CalendarioLetivoUpdateByIdOperationOutput {
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
  body: MischievousBody
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um campus.
 */
export interface MischievousBody {
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

export interface CampusDeleteOneByIdOperation {
  input: CampusDeleteOneByIdOperationInput
  output: CampusDeleteOneByIdOperationOutput
}

export interface CampusDeleteOneByIdOperationInput {
  params: Params4
  [property: string]: any
}

export interface Params4 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CampusDeleteOneByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CampusFindOneByIdOperation {
  input: CampusFindOneByIdOperationInput
  output: CampusFindOneByIdOperationOutput
}

export interface CampusFindOneByIdOperationInput {
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

export interface CampusFindOneByIdOperationOutput {
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
  queries: IndecentQueries
  [property: string]: any
}

export interface IndecentQueries {
  "filter.endereco.cidade.estado.id"?: string[]
  "filter.endereco.cidade.id"?: string[]
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
  success: HilariousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a campi.
 */
export interface HilariousSuccess {
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
  body: BraggadociousBody
  params: Params6
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um campus.
 */
export interface BraggadociousBody {
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

export interface Params6 {
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

export interface CidadeFindOneByIdOperation {
  input: CidadeFindOneByIdOperationInput
  output: CidadeFindOneByIdOperationOutput
}

export interface CidadeFindOneByIdOperationInput {
  params: Params7
  [property: string]: any
}

export interface Params7 {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

export interface CidadeFindOneByIdOperationOutput {
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
  queries: HilariousQueries
  [property: string]: any
}

export interface HilariousQueries {
  "filter.estado.id"?: string[]
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
  success: AmbitiousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a cidades.
 */
export interface AmbitiousSuccess {
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
  body: Body1
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um Curso.
 */
export interface Body1 {
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

export interface CursoDeleteByIdOperation {
  input: CursoDeleteByIdOperationInput
  output: CursoDeleteByIdOperationOutput
}

export interface CursoDeleteByIdOperationInput {
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

export interface CursoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface CursoFindOneByIdOperation {
  input: CursoFindOneByIdOperationInput
  output: CursoFindOneByIdOperationOutput
}

export interface CursoFindOneByIdOperationInput {
  params: Params9
  [property: string]: any
}

export interface Params9 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoFindOneByIdOperationOutput {
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
  queries: AmbitiousQueries
  [property: string]: any
}

export interface AmbitiousQueries {
  "filter.campus.id"?: string[]
  "filter.ofertaFormacao.id"?: string[]
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
  success: CunningSuccess
  [property: string]: any
}

/**
 * Resultados da busca a Cursos.
 */
export interface CunningSuccess {
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

export interface CursoSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface CursoUpdateByIdOperation {
  input: CursoUpdateByIdOperationInput
  output: CursoUpdateByIdOperationOutput
}

export interface CursoUpdateByIdOperationInput {
  body: Body2
  params: Params12
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um Curso.
 */
export interface Body2 {
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

export interface Params12 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface CursoUpdateByIdOperationOutput {
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
  body: Body3
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um DiaCalendario.
 */
export interface Body3 {
  calendario: BodyCalendarioLetivo | null
  data: Date
  diaLetivo: boolean
  feriado: boolean
}

/**
 * Dados de entrada para encontrar um calendário letivo por ID.
 */
export interface BodyCalendarioLetivo {
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

export interface DiaCalendarioDeleteByIdOperation {
  input: DiaCalendarioDeleteByIdOperationInput
  output: DiaCalendarioDeleteByIdOperationOutput
}

export interface DiaCalendarioDeleteByIdOperationInput {
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

export interface DiaCalendarioDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiaCalendarioFindOneByIdOperation {
  input: DiaCalendarioFindOneByIdOperationInput
  output: DiaCalendarioFindOneByIdOperationOutput
}

export interface DiaCalendarioFindOneByIdOperationInput {
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

export interface DiaCalendarioFindOneByIdOperationOutput {
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
  calendario: BodyCalendarioLetivo | null
  data: Date
  diaLetivo: boolean
  feriado: boolean
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 */
export interface DiaCalendarioInputUpdateView {
  calendario?: BodyCalendarioLetivo | null
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
  calendario: DiarioCalendario
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

export interface DiaCalendarioListOperation {
  input: DiaCalendarioListOperationInput
  output: DiaCalendarioListOperationOutput
}

export interface DiaCalendarioListOperationInput {
  queries: CunningQueries
  [property: string]: any
}

export interface CunningQueries {
  "filter.calendario.id"?: string[]
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
  success: MagentaSuccess
  [property: string]: any
}

/**
 * Resultados da busca a DiaCalendarios.
 */
export interface MagentaSuccess {
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

export interface DiaCalendarioUpdateByIdOperation {
  input: DiaCalendarioUpdateByIdOperationInput
  output: DiaCalendarioUpdateByIdOperationOutput
}

export interface DiaCalendarioUpdateByIdOperationInput {
  body: Body4
  params: Params15
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 */
export interface Body4 {
  calendario?: BodyCalendarioLetivo | null
  data?: Date
  diaLetivo?: boolean
  feriado?: boolean
}

export interface Params15 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiaCalendarioUpdateByIdOperationOutput {
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
  body: Body5
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um diário.
 */
export interface Body5 {
  ambientePadrao: BodyAmbiente | null
  ativo: boolean
  calendarioLetivo: BodyCalendarioLetivo
  disciplina: BodyDisciplina
  turma: BodyTurma
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
  success: DiarioElement
  [property: string]: any
}

export interface DiarioDeleteByIdOperation {
  input: DiarioDeleteByIdOperationInput
  output: DiarioDeleteByIdOperationOutput
}

export interface DiarioDeleteByIdOperationInput {
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

export interface DiarioDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiarioFindOneByIdOperation {
  input: DiarioFindOneByIdOperationInput
  output: DiarioFindOneByIdOperationOutput
}

export interface DiarioFindOneByIdOperationInput {
  params: Params17
  [property: string]: any
}

export interface Params17 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioFindOneByIdOperationOutput {
  success: DiarioElement
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
  calendarioLetivo: BodyCalendarioLetivo
  disciplina: BodyDisciplina
  turma: BodyTurma
}

/**
 * Dados de entrada para a atualização de um diário.
 */
export interface DiarioInputUpdateView {
  ambientePadrao?: BodyAmbiente | null
  ativo?: boolean
  calendarioLetivo?: BodyCalendarioLetivo
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
  calendarioLetivo: DiarioCalendario
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

export interface DiarioListOperation {
  input: DiarioListOperationInput
  output: DiarioListOperationOutput
}

export interface DiarioListOperationInput {
  queries: MagentaQueries
  [property: string]: any
}

export interface MagentaQueries {
  "filter.ambientePadrao.id"?: string[]
  "filter.calendarioLetivo.id"?: string[]
  "filter.disciplina.id"?: string[]
  "filter.turma.id"?: string[]
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
  success: FriskySuccess
  [property: string]: any
}

/**
 * Resultados da busca a Diarios.
 */
export interface FriskySuccess {
  /**
   * Resultados da busca atual.
   */
  data: DiarioElement[]
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
  data: DiarioElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DiarioPreferenciaAgrupamentoCreateOperation {
  input: DiarioPreferenciaAgrupamentoCreateOperationInput
  output: DiarioPreferenciaAgrupamentoCreateOperationOutput
}

export interface DiarioPreferenciaAgrupamentoCreateOperationInput {
  body: Body6
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um DiarioPreferenciaAgrupamento.
 */
export interface Body6 {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
  diario: BodyDiario
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  intervaloDeTempo: BodyIntervaloDeTempo
}

export interface DiarioPreferenciaAgrupamentoCreateOperationOutput {
  success: DiarioPreferenciaAgrupamentoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamentoListResultViewSuccess {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
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
  diario: DiarioElement
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

export interface DiarioPreferenciaAgrupamentoDeleteByIdOperation {
  input: DiarioPreferenciaAgrupamentoDeleteByIdOperationInput
  output: DiarioPreferenciaAgrupamentoDeleteByIdOperationOutput
}

export interface DiarioPreferenciaAgrupamentoDeleteByIdOperationInput {
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

export interface DiarioPreferenciaAgrupamentoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiarioPreferenciaAgrupamentoFindByIdOperation {
  input: DiarioPreferenciaAgrupamentoFindByIdOperationInput
  output: DiarioPreferenciaAgrupamentoFindByIdOperationOutput
}

export interface DiarioPreferenciaAgrupamentoFindByIdOperationInput {
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

export interface DiarioPreferenciaAgrupamentoFindByIdOperationOutput {
  success: DiarioPreferenciaAgrupamentoListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um DiarioPreferenciaAgrupamento por ID.
 */
export interface DiarioPreferenciaAgrupamentoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamentoFindOneResultView {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
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
  diario: DiarioElement
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * Dados de entrada para a criação de um DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamentoInputCreateView {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
  diario: BodyDiario
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  intervaloDeTempo: BodyIntervaloDeTempo
}

/**
 * Dados de entrada para a atualização de um DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamentoInputUpdateView {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas?: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim?: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio?: Date
  diario?: BodyDiario
  /**
   * Dia da semana.
   */
  diaSemanaIso?: number
  intervaloDeTempo?: BodyIntervaloDeTempo
}

/**
 * DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamento {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
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
   * Diário vinculado.
   */
  diario: AulaDiario
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Intervalo de tempo.
   */
  intervaloDeTempo: AulaIntervaloDeTempo
}

export interface DiarioPreferenciaAgrupamentoListOperation {
  input: DiarioPreferenciaAgrupamentoListOperationInput
  output: DiarioPreferenciaAgrupamentoListOperationOutput
}

export interface DiarioPreferenciaAgrupamentoListOperationInput {
  queries: FriskyQueries
  [property: string]: any
}

export interface FriskyQueries {
  filter_diario_id: string[] | null
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

export interface DiarioPreferenciaAgrupamentoListOperationOutput {
  success: MischievousSuccess
  [property: string]: any
}

/**
 * Resultados da busca de DiarioPreferenciaAgrupamentos.
 */
export interface MischievousSuccess {
  /**
   * Resultados da busca atual.
   */
  data: DiarioPreferenciaAgrupamentoListResultViewSuccess[]
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
 * Resultados da busca de DiarioPreferenciaAgrupamentos.
 */
export interface DiarioPreferenciaAgrupamentoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DiarioPreferenciaAgrupamentoListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DiarioPreferenciaAgrupamentoUpdateByIdOperation {
  input: DiarioPreferenciaAgrupamentoUpdateByIdOperationInput
  output: DiarioPreferenciaAgrupamentoUpdateByIdOperationOutput
}

export interface DiarioPreferenciaAgrupamentoUpdateByIdOperationInput {
  body: Body7
  params: Params21
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um DiarioPreferenciaAgrupamento.
 */
export interface Body7 {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas?: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim?: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio?: Date
  diario?: BodyDiario
  /**
   * Dia da semana.
   */
  diaSemanaIso?: number
  intervaloDeTempo?: BodyIntervaloDeTempo
}

export interface Params21 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioPreferenciaAgrupamentoUpdateByIdOperationOutput {
  success: DiarioPreferenciaAgrupamentoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um DiarioPreferenciaAgrupamento.
 */
export interface DiarioPreferenciaAgrupamentoView {
  /**
   * Quantidade de aulas seguidas.
   */
  aulasSeguidas: number
  /**
   * Fim da vigência da preferência de agrupamento.
   */
  dataFim: Date | null
  /**
   * Início da vigência da preferência de agrupamento.
   */
  dataInicio: Date
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
  diario: DiarioElement
  /**
   * Dia da semana.
   */
  diaSemanaIso: number
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

export interface DiarioProfessorCreateOperation {
  input: DiarioProfessorCreateOperationInput
  output: DiarioProfessorCreateOperationOutput
}

export interface DiarioProfessorCreateOperationInput {
  body: Body8
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um DiarioProfessor.
 */
export interface Body8 {
  diario: BodyDiario
  perfil: BodyPerfil
  situacao: boolean
}

/**
 * Dados de entrada para encontrar um Vínculo por ID.
 */
export interface BodyPerfil {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DiarioProfessorCreateOperationOutput {
  success: DiarioProfessorElement
  [property: string]: any
}

/**
 * Visão FindOne de um DiarioProfessor.
 */
export interface DiarioProfessorElement {
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
  /**
   * Situação do vínculo.
   */
  situacao: boolean
}

export interface DiarioProfessorDeleteByIdOperation {
  input: DiarioProfessorDeleteByIdOperationInput
  output: DiarioProfessorDeleteByIdOperationOutput
}

export interface DiarioProfessorDeleteByIdOperationInput {
  params: Params22
  [property: string]: any
}

export interface Params22 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioProfessorDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DiarioProfessorFindOneByIdOperation {
  input: DiarioProfessorFindOneByIdOperationInput
  output: DiarioProfessorFindOneByIdOperationOutput
}

export interface DiarioProfessorFindOneByIdOperationInput {
  params: Params23
  [property: string]: any
}

export interface Params23 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioProfessorFindOneByIdOperationOutput {
  success: DiarioProfessorElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um DiarioProfessor por ID.
 */
export interface DiarioProfessorFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um DiarioProfessor.
 */
export interface DiarioProfessorFindOneResultView {
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
  /**
   * Situação do vínculo.
   */
  situacao: boolean
}

/**
 * Dados de entrada para a criação de um DiarioProfessor.
 */
export interface DiarioProfessorInputCreateView {
  diario: BodyDiario
  perfil: BodyPerfil
  situacao: boolean
}

/**
 * Dados de entrada para a atualização de um DiarioProfessor.
 */
export interface DiarioProfessorInputUpdateView {
  diario?: BodyDiario
  perfil?: BodyPerfil
  situacao?: boolean
}

/**
 * DiarioProfessor.
 */
export interface DiarioProfessor {
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
   * Diário vinculado.
   */
  diario: AulaDiario
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Perfil do usuário ao campus.
   */
  perfil: DiarioProfessorPerfil
  /**
   * Situação do vínculo.
   */
  situacao: boolean
}

/**
 * Perfil do usuário ao campus.
 *
 * Vínculo.
 *
 * Professor.
 */
export interface DiarioProfessorPerfil {
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

export interface DiarioProfessorListOperation {
  input: DiarioProfessorListOperationInput
  output: DiarioProfessorListOperationOutput
}

export interface DiarioProfessorListOperationInput {
  queries: MischievousQueries
  [property: string]: any
}

export interface MischievousQueries {
  "filter.diario.id"?: string[]
  "filter.perfil.id"?: string[]
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

export interface DiarioProfessorListOperationOutput {
  success: BraggadociousSuccess
  [property: string]: any
}

/**
 * Resultados da busca a DiarioProfessor.
 */
export interface BraggadociousSuccess {
  /**
   * Resultados da busca atual.
   */
  data: DiarioProfessorElement[]
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
 * Resultados da busca a DiarioProfessor.
 */
export interface DiarioProfessorListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DiarioProfessorElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DiarioProfessorUpdateByIdOperation {
  input: DiarioProfessorUpdateByIdOperationInput
  output: DiarioProfessorUpdateByIdOperationOutput
}

export interface DiarioProfessorUpdateByIdOperationInput {
  body: Body9
  params: Params24
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um DiarioProfessor.
 */
export interface Body9 {
  diario?: BodyDiario
  perfil?: BodyPerfil
  situacao?: boolean
}

export interface Params24 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioProfessorUpdateByIdOperationOutput {
  success: DiarioProfessorElement
  [property: string]: any
}

/**
 * Visão completa de um DiarioProfessor.
 */
export interface DiarioProfessorView {
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
  diario: DiarioElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
  /**
   * Situação do vínculo.
   */
  situacao: boolean
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

export interface DiarioSetCoverImageOperationOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface DiarioUpdateByIdOperation {
  input: DiarioUpdateByIdOperationInput
  output: DiarioUpdateByIdOperationOutput
}

export interface DiarioUpdateByIdOperationInput {
  body: Body10
  params: Params26
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um diário.
 */
export interface Body10 {
  ambientePadrao?: BodyAmbiente | null
  ativo?: boolean
  calendarioLetivo?: BodyCalendarioLetivo
  disciplina?: BodyDisciplina
  turma?: BodyTurma
}

export interface Params26 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DiarioUpdateByIdOperationOutput {
  success: DiarioElement
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
  body: Body11
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Disciplina.
 */
export interface Body11 {
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

export interface DisciplinaDeleteByIdOperation {
  input: DisciplinaDeleteByIdOperationInput
  output: DisciplinaDeleteByIdOperationOutput
}

export interface DisciplinaDeleteByIdOperationInput {
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

export interface DisciplinaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DisciplinaFindOneByIdOperation {
  input: DisciplinaFindOneByIdOperationInput
  output: DisciplinaFindOneByIdOperationOutput
}

export interface DisciplinaFindOneByIdOperationInput {
  params: Params28
  [property: string]: any
}

export interface Params28 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaFindOneByIdOperationOutput {
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
  params: Params29
  [property: string]: any
}

export interface Params29 {
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

export interface DisciplinaListOperationOutput {
  success: Success1
  [property: string]: any
}

/**
 * Resultados da busca a Disciplinas.
 */
export interface Success1 {
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

export interface DisciplinaSetImagemCapaOutput {
  /**
   * Resultado da operação.
   */
  success: boolean
  [property: string]: any
}

export interface DisciplinaUpdateByIdOperation {
  input: DisciplinaUpdateByIdOperationInput
  output: DisciplinaUpdateByIdOperationOutput
}

export interface DisciplinaUpdateByIdOperationInput {
  body: Body12
  params: Params31
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Disciplina.
 */
export interface Body12 {
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

export interface Params31 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisciplinaUpdateByIdOperationOutput {
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

export interface DisponibilidadeCreateOperation {
  input: DisponibilidadeCreateOperationInput
  output: DisponibilidadeCreateOperationOutput
}

export interface DisponibilidadeCreateOperationInput {
  body: Body13
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Disponibilidade.
 */
export interface Body13 {
  dataFim: Date | null
  dataInicio: Date
}

export interface DisponibilidadeCreateOperationOutput {
  success: DisponibilidadeElement
  [property: string]: any
}

/**
 * Visão FindOne de uma Disponibilidade.
 */
export interface DisponibilidadeElement {
  /**
   * Data de término.
   */
  dataFim: Date | null
  /**
   * Data de início.
   */
  dataInicio: Date
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
}

export interface DisponibilidadeDeleteByIdOperation {
  input: DisponibilidadeDeleteByIdOperationInput
  output: DisponibilidadeDeleteByIdOperationOutput
}

export interface DisponibilidadeDeleteByIdOperationInput {
  params: Params32
  [property: string]: any
}

export interface Params32 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisponibilidadeDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DisponibilidadeDiaCreateOperation {
  input: DisponibilidadeDiaCreateOperationInput
  output: DisponibilidadeDiaCreateOperationOutput
}

export interface DisponibilidadeDiaCreateOperationInput {
  body: Body14
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um DisponibilidadeDia.
 */
export interface Body14 {
  disponibilidade: BodyDisponibilidade
  intervaloDeTempo: BodyIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

/**
 * Dados de entrada para encontrar uma Disponibilidade por ID.
 */
export interface BodyDisponibilidade {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface DisponibilidadeDiaCreateOperationOutput {
  success: DisponibilidadeDiaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um DisponibilidadeDia.
 */
export interface DisponibilidadeDiaListResultViewSuccess {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

export interface DisponibilidadeDiaDeleteByIdOperation {
  input: DisponibilidadeDiaDeleteByIdOperationInput
  output: DisponibilidadeDiaDeleteByIdOperationOutput
}

export interface DisponibilidadeDiaDeleteByIdOperationInput {
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

export interface DisponibilidadeDiaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface DisponibilidadeDiaFindOneByIdOperation {
  input: DisponibilidadeDiaFindOneByIdOperationInput
  output: DisponibilidadeDiaFindOneByIdOperationOutput
}

export interface DisponibilidadeDiaFindOneByIdOperationInput {
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

export interface DisponibilidadeDiaFindOneByIdOperationOutput {
  success: DisponibilidadeDiaListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um DisponibilidadeDia por ID.
 */
export interface DisponibilidadeDiaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um DisponibilidadeDia.
 */
export interface DisponibilidadeDiaFindOneResultView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

/**
 * Dados de entrada para a criação de um DisponibilidadeDia.
 */
export interface DisponibilidadeDiaInputCreateView {
  disponibilidade: BodyDisponibilidade
  intervaloDeTempo: BodyIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

/**
 * Dados de entrada para a atualização de um DisponibilidadeDia.
 */
export interface DisponibilidadeDiaInputUpdateView {
  disponibilidade?: BodyDisponibilidade
  intervaloDeTempo?: BodyIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule?: string
}

/**
 * DisponibilidadeDia.
 */
export interface DisponibilidadeDia {
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
   * Disponibilidade.
   */
  disponibilidade: DisponibilidadeDiaDisponibilidade
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Intervalo de tempo.
   */
  intervaloDeTempo: AulaIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

/**
 * Disponibilidade.
 */
export interface DisponibilidadeDiaDisponibilidade {
  /**
   * Data de término.
   */
  dataFim: Date | null
  /**
   * Data de início.
   */
  dataInicio: Date
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
}

export interface DisponibilidadeDiaListOperation {
  input: DisponibilidadeDiaListOperationInput
  output: DisponibilidadeDiaListOperationOutput
}

export interface DisponibilidadeDiaListOperationInput {
  queries: Queries1
  [property: string]: any
}

export interface Queries1 {
  "filter.disponibilidade.id"?: string[]
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

export interface DisponibilidadeDiaListOperationOutput {
  success: Success2
  [property: string]: any
}

/**
 * Resultados da busca a DisponibilidadeDia.
 */
export interface Success2 {
  /**
   * Resultados da busca atual.
   */
  data: DisponibilidadeDiaListResultViewSuccess[]
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
 * Resultados da busca a DisponibilidadeDia.
 */
export interface DisponibilidadeDiaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DisponibilidadeDiaListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DisponibilidadeDiaUpdateByIdOperation {
  input: DisponibilidadeDiaUpdateByIdOperationInput
  output: DisponibilidadeDiaUpdateByIdOperationOutput
}

export interface DisponibilidadeDiaUpdateByIdOperationInput {
  body: Body15
  params: Params35
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um DisponibilidadeDia.
 */
export interface Body15 {
  disponibilidade?: BodyDisponibilidade
  intervaloDeTempo?: BodyIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule?: string
}

export interface Params35 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisponibilidadeDiaUpdateByIdOperationOutput {
  success: DisponibilidadeDiaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um DisponibilidadeDia.
 */
export interface DisponibilidadeDiaView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

export interface DisponibilidadeFindOneByIdOperation {
  input: DisponibilidadeFindOneByIdOperationInput
  output: DisponibilidadeFindOneByIdOperationOutput
}

export interface DisponibilidadeFindOneByIdOperationInput {
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

export interface DisponibilidadeFindOneByIdOperationOutput {
  success: DisponibilidadeElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Disponibilidade por ID.
 */
export interface DisponibilidadeFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Disponibilidade.
 */
export interface DisponibilidadeFindOneResultView {
  /**
   * Data de término.
   */
  dataFim: Date | null
  /**
   * Data de início.
   */
  dataInicio: Date
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
}

/**
 * Dados de entrada para a criação de uma Disponibilidade.
 */
export interface DisponibilidadeInputCreateView {
  dataFim: Date | null
  dataInicio: Date
}

/**
 * Dados de entrada para a atualização de uma Disponibilidade.
 */
export interface DisponibilidadeInputUpdateView {
  dataFim?: Date | null
  dataInicio?: Date
}

/**
 * Disponibilidade.
 */
export interface Disponibilidade {
  /**
   * Data de término.
   */
  dataFim: Date | null
  /**
   * Data de início.
   */
  dataInicio: Date
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
}

export interface DisponibilidadeListOperation {
  input: DisponibilidadeListOperationInput
  output: DisponibilidadeListOperationOutput
}

export interface DisponibilidadeListOperationInput {
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

export interface DisponibilidadeListOperationOutput {
  success: Success3
  [property: string]: any
}

/**
 * Resultados da busca a Disponibilidades.
 */
export interface Success3 {
  /**
   * Resultados da busca atual.
   */
  data: DisponibilidadeElement[]
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
 * Resultados da busca a Disponibilidades.
 */
export interface DisponibilidadeListResultView {
  /**
   * Resultados da busca atual.
   */
  data: DisponibilidadeElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface DisponibilidadeUpdateByIdOperation {
  input: DisponibilidadeUpdateByIdOperationInput
  output: DisponibilidadeUpdateByIdOperationOutput
}

export interface DisponibilidadeUpdateByIdOperationInput {
  body: Body16
  params: Params37
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Disponibilidade.
 */
export interface Body16 {
  dataFim?: Date | null
  dataInicio?: Date
}

export interface Params37 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface DisponibilidadeUpdateByIdOperationOutput {
  success: DisponibilidadeElement
  [property: string]: any
}

/**
 * Visão completa de uma Disponibilidade.
 */
export interface DisponibilidadeView {
  /**
   * Data de término.
   */
  dataFim: Date | null
  /**
   * Data de início.
   */
  dataInicio: Date
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

export interface EstadoFindOneByIdOperation {
  input: EstadoFindOneByIdOperationInput
  output: EstadoFindOneByIdOperationOutput
}

export interface EstadoFindOneByIdOperationInput {
  params: Params38
  [property: string]: any
}

export interface Params38 {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

export interface EstadoFindOneByIdOperationOutput {
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

export interface EstadoListOperationOutput {
  success: Success4
  [property: string]: any
}

/**
 * Resultados da busca a estados.
 */
export interface Success4 {
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

export interface EtapaCreateOperation {
  input: EtapaCreateOperationInput
  output: EtapaCreateOperationOutput
}

export interface EtapaCreateOperationInput {
  body: Body17
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Etapa.
 */
export interface Body17 {
  calendario: BodyCalendarioLetivo
  cor: null | string
  dataInicio: Date
  dataTermino: Date
  numero: number | null
}

export interface EtapaCreateOperationOutput {
  success: EtapaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma Etapa.
 */
export interface EtapaListResultViewSuccess {
  calendario: CalendarioElement
  /**
   * Cor da etapa.
   */
  cor: null | string
  /**
   * Data de início.
   */
  dataInicio: Date
  /**
   * Data de término.
   */
  dataTermino: Date
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
   * Número da etapa.
   */
  numero: number | null
}

export interface EtapaDeleteByIdOperation {
  input: EtapaDeleteByIdOperationInput
  output: EtapaDeleteByIdOperationOutput
}

export interface EtapaDeleteByIdOperationInput {
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

export interface EtapaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface EtapaFindOneByIdOperation {
  input: EtapaFindOneByIdOperationInput
  output: EtapaFindOneByIdOperationOutput
}

export interface EtapaFindOneByIdOperationInput {
  params: Params40
  [property: string]: any
}

export interface Params40 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface EtapaFindOneByIdOperationOutput {
  success: EtapaListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma Etapa por ID.
 */
export interface EtapaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma Etapa.
 */
export interface EtapaFindOneResultView {
  calendario: CalendarioElement
  /**
   * Cor da etapa.
   */
  cor: null | string
  /**
   * Data de início.
   */
  dataInicio: Date
  /**
   * Data de término.
   */
  dataTermino: Date
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
   * Número da etapa.
   */
  numero: number | null
}

/**
 * Dados de entrada para a criação de uma Etapa.
 */
export interface EtapaInputCreateView {
  calendario: BodyCalendarioLetivo
  cor: null | string
  dataInicio: Date
  dataTermino: Date
  numero: number | null
}

/**
 * Dados de entrada para a atualização de uma Etapa.
 */
export interface EtapaInputUpdateView {
  calendario?: BodyCalendarioLetivo
  cor?: null | string
  dataInicio?: Date
  dataTermino?: Date
  numero?: number | null
}

/**
 * Etapa.
 */
export interface Etapa {
  /**
   * Calendario.
   */
  calendario: DiarioCalendario
  /**
   * Cor da etapa.
   */
  cor: null | string
  /**
   * Data de início.
   */
  dataInicio: Date
  /**
   * Data de término.
   */
  dataTermino: Date
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
   * Número da etapa.
   */
  numero: number | null
}

export interface EtapaListOperation {
  input: EtapaListOperationInput
  output: EtapaListOperationOutput
}

export interface EtapaListOperationInput {
  queries: Queries4
  [property: string]: any
}

export interface Queries4 {
  "filter.calendario.id"?: string[]
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

export interface EtapaListOperationOutput {
  success: Success5
  [property: string]: any
}

/**
 * Resultados da busca a Etapas.
 */
export interface Success5 {
  /**
   * Resultados da busca atual.
   */
  data: EtapaListResultViewSuccess[]
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
 * Resultados da busca a Etapas.
 */
export interface EtapaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: EtapaListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface EtapaUpdateByIdOperation {
  input: EtapaUpdateByIdOperationInput
  output: EtapaUpdateByIdOperationOutput
}

export interface EtapaUpdateByIdOperationInput {
  body: Body18
  params: Params41
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Etapa.
 */
export interface Body18 {
  calendario?: BodyCalendarioLetivo
  cor?: null | string
  dataInicio?: Date
  dataTermino?: Date
  numero?: number | null
}

export interface Params41 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface EtapaUpdateByIdOperationOutput {
  success: EtapaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma Etapa.
 */
export interface EtapaView {
  calendario: CalendarioElement
  /**
   * Cor da etapa.
   */
  cor: null | string
  /**
   * Data de início.
   */
  dataInicio: Date
  /**
   * Data de término.
   */
  dataTermino: Date
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
   * Número da etapa.
   */
  numero: number | null
}

export interface EventoCreateOperation {
  input: EventoCreateOperationInput
  output: EventoCreateOperationOutput
}

export interface EventoCreateOperationInput {
  body: Body19
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um Evento.
 */
export interface Body19 {
  calendario: BodyCalendarioLetivo
  cor: null | string
  nome: null | string
  rrule: string
}

export interface EventoCreateOperationOutput {
  success: EventoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um Evento.
 */
export interface EventoListResultViewSuccess {
  calendario: CalendarioElement
  /**
   * Cor da Evento.
   */
  cor: null | string
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
   * Nome do evento.
   */
  nome: null | string
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

export interface EventoDeleteByIdOperation {
  input: EventoDeleteByIdOperationInput
  output: EventoDeleteByIdOperationOutput
}

export interface EventoDeleteByIdOperationInput {
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

export interface EventoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface EventoFindOneByIdOperation {
  input: EventoFindOneByIdOperationInput
  output: EventoFindOneByIdOperationOutput
}

export interface EventoFindOneByIdOperationInput {
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

export interface EventoFindOneByIdOperationOutput {
  success: EventoListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um Evento por ID.
 */
export interface EventoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um Evento.
 */
export interface EventoFindOneResultView {
  calendario: CalendarioElement
  /**
   * Cor da Evento.
   */
  cor: null | string
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
   * Nome do evento.
   */
  nome: null | string
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

/**
 * Dados de entrada para a criação de um Evento.
 */
export interface EventoInputCreateView {
  calendario: BodyCalendarioLetivo
  cor: null | string
  nome: null | string
  rrule: string
}

/**
 * Dados de entrada para a atualização de um Evento.
 */
export interface EventoInputUpdateView {
  calendario?: BodyCalendarioLetivo
  cor?: null | string
  nome?: null | string
  rrule?: string
}

/**
 * Evento.
 */
export interface Evento {
  /**
   * Calendario.
   */
  calendario: DiarioCalendario
  /**
   * Cor da Evento.
   */
  cor: null | string
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
   * Nome do evento.
   */
  nome: null | string
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
}

export interface EventoListOperation {
  input: EventoListOperationInput
  output: EventoListOperationOutput
}

export interface EventoListOperationInput {
  queries: Queries5
  [property: string]: any
}

export interface Queries5 {
  "filter.calendario.id"?: string[]
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

export interface EventoListOperationOutput {
  success: Success6
  [property: string]: any
}

/**
 * Resultados da busca a Eventos.
 */
export interface Success6 {
  /**
   * Resultados da busca atual.
   */
  data: EventoListResultViewSuccess[]
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
 * Resultados da busca a Eventos.
 */
export interface EventoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: EventoListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface EventoUpdateByIdOperation {
  input: EventoUpdateByIdOperationInput
  output: EventoUpdateByIdOperationOutput
}

export interface EventoUpdateByIdOperationInput {
  body: Body20
  params: Params44
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um Evento.
 */
export interface Body20 {
  calendario?: BodyCalendarioLetivo
  cor?: null | string
  nome?: null | string
  rrule?: string
}

export interface Params44 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface EventoUpdateByIdOperationOutput {
  success: EventoListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um Evento.
 */
export interface EventoView {
  calendario: CalendarioElement
  /**
   * Cor da Evento.
   */
  cor: null | string
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
   * Nome do evento.
   */
  nome: null | string
  /**
   * Regra RRule para a recorrência do evento. Segue a RFC 5545 do iCalendar.
   */
  rrule: string
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
  body: Body21
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body21 {
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

export interface GradeHorarioOfertaFormacaoDeleteByIdOperation {
  input: GradeHorarioOfertaFormacaoDeleteByIdOperationInput
  output: GradeHorarioOfertaFormacaoDeleteByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoDeleteByIdOperationInput {
  params: Params45
  [property: string]: any
}

export interface Params45 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoFindOneByIdOperation {
  input: GradeHorarioOfertaFormacaoFindOneByIdOperationInput
  output: GradeHorarioOfertaFormacaoFindOneByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoFindOneByIdOperationInput {
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

export interface GradeHorarioOfertaFormacaoFindOneByIdOperationOutput {
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
  body: Body22
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body22 {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperationInput {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperationInput {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneByIdOperationOutput {
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
  intervaloDeTempo: AulaIntervaloDeTempo
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoListOperationInput {
  queries: Queries6
  [property: string]: any
}

export interface Queries6 {
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
  success: Success7
  [property: string]: any
}

/**
 * Resultados da busca a GradeHorarioOfertaFormacaoIntervaloDeTempos.
 */
export interface Success7 {
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

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperation {
  input: GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperationInput
  output: GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperationInput {
  body: Body23
  params: Params49
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body23 {
  gradeHorarioOfertaFormacao?: BodyGradeHorarioOfertaFormacao
  intervaloDeTempo?: BodyIntervaloDeTempo
}

export interface Params49 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateByIdOperationOutput {
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
  queries: Queries7
  [property: string]: any
}

export interface Queries7 {
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
  success: Success8
  [property: string]: any
}

/**
 * Resultados da busca a GradeHorarioOfertaFormacaos.
 */
export interface Success8 {
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

export interface GradeHorarioOfertaFormacaoUpdateByIdOperation {
  input: GradeHorarioOfertaFormacaoUpdateByIdOperationInput
  output: GradeHorarioOfertaFormacaoUpdateByIdOperationOutput
}

export interface GradeHorarioOfertaFormacaoUpdateByIdOperationInput {
  body: Body24
  params: Params50
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body24 {
  campus?: BodyCampus
  ofertaFormacao?: BodyOfertaFormacao
}

export interface Params50 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface GradeHorarioOfertaFormacaoUpdateByIdOperationOutput {
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

export interface HorarioGeradoAulaCreateOperation {
  input: HorarioGeradoAulaCreateOperationInput
  output: HorarioGeradoAulaCreateOperationOutput
}

export interface HorarioGeradoAulaCreateOperationInput {
  body: Body25
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um HorarioGeradoAula.
 */
export interface Body25 {
  /**
   * Data da aula gerada.
   */
  data: Date
  diarioProfessor: BodyDiarioProfessor
  horarioGerado: BodyHorarioGerado
  intervaloDeTempo: BodyIntervaloDeTempo
}

/**
 * Dados de entrada para encontrar um DiarioProfessor por ID.
 */
export interface BodyDiarioProfessor {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Dados de entrada para encontrar um HorarioGerado por ID.
 */
export interface BodyHorarioGerado {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

export interface HorarioGeradoAulaCreateOperationOutput {
  success: HorarioGeradoAulaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de um HorarioGeradoAula.
 */
export interface HorarioGeradoAulaListResultViewSuccess {
  /**
   * Data da aula gerada.
   */
  data: Date
  diarioProfessor: DiarioProfessorElement
  horarioGerado: HorarioGeradoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * Visão FindOne de um HorarioGerado.
 */
export interface HorarioGeradoElement {
  calendario: CalendarioElement
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
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
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

export interface HorarioGeradoAulaDeleteByIdOperation {
  input: HorarioGeradoAulaDeleteByIdOperationInput
  output: HorarioGeradoAulaDeleteByIdOperationOutput
}

export interface HorarioGeradoAulaDeleteByIdOperationInput {
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

export interface HorarioGeradoAulaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface HorarioGeradoAulaFindByIdOperation {
  input: HorarioGeradoAulaFindByIdOperationInput
  output: HorarioGeradoAulaFindByIdOperationOutput
}

export interface HorarioGeradoAulaFindByIdOperationInput {
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

export interface HorarioGeradoAulaFindByIdOperationOutput {
  success: HorarioGeradoAulaListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um HorarioGeradoAula por ID.
 */
export interface HorarioGeradoAulaFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um HorarioGeradoAula.
 */
export interface HorarioGeradoAulaFindOneResultView {
  /**
   * Data da aula gerada.
   */
  data: Date
  diarioProfessor: DiarioProfessorElement
  horarioGerado: HorarioGeradoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

/**
 * Dados de entrada para a criação de um HorarioGeradoAula.
 */
export interface HorarioGeradoAulaInputCreateView {
  /**
   * Data da aula gerada.
   */
  data: Date
  diarioProfessor: BodyDiarioProfessor
  horarioGerado: BodyHorarioGerado
  intervaloDeTempo: BodyIntervaloDeTempo
}

/**
 * Dados de entrada para a atualização de um HorarioGeradoAula.
 */
export interface HorarioGeradoAulaInputUpdateView {
  /**
   * Data da aula gerada.
   */
  data?: Date
  diarioProfessor?: BodyDiarioProfessor
  horarioGerado?: BodyHorarioGerado
  intervaloDeTempo?: BodyIntervaloDeTempo
}

/**
 * HorarioGeradoAula.
 */
export interface HorarioGeradoAula {
  /**
   * Data da aula gerada.
   */
  data: Date
  /**
   * Vínculo de diário e professor.
   */
  diarioProfessor: HorarioGeradoAulaDiarioProfessor
  /**
   * Horário ao qual a aula pertence.
   */
  horarioGerado: HorarioGeradoAulaHorarioGerado
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Intervalo de tempo.
   */
  intervaloDeTempo: AulaIntervaloDeTempo
}

/**
 * Vínculo de diário e professor.
 *
 * DiarioProfessor.
 */
export interface HorarioGeradoAulaDiarioProfessor {
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
   * Diário vinculado.
   */
  diario: AulaDiario
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Perfil do usuário ao campus.
   */
  perfil: DiarioProfessorPerfil
  /**
   * Situação do vínculo.
   */
  situacao: boolean
}

/**
 * Horário ao qual a aula pertence.
 *
 * HorarioGerado.
 */
export interface HorarioGeradoAulaHorarioGerado {
  /**
   * calendário.
   */
  calendario: DiarioCalendario
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
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
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

export interface HorarioGeradoAulaListOperation {
  input: HorarioGeradoAulaListOperationInput
  output: HorarioGeradoAulaListOperationOutput
}

export interface HorarioGeradoAulaListOperationInput {
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

export interface HorarioGeradoAulaListOperationOutput {
  success: Success9
  [property: string]: any
}

/**
 * Resultados da busca de HorarioGeradoAulas.
 */
export interface Success9 {
  /**
   * Resultados da busca atual.
   */
  data: HorarioGeradoAulaListResultViewSuccess[]
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
 * Resultados da busca de HorarioGeradoAulas.
 */
export interface HorarioGeradoAulaListResultView {
  /**
   * Resultados da busca atual.
   */
  data: HorarioGeradoAulaListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface HorarioGeradoAulaUpdateByIdOperation {
  input: HorarioGeradoAulaUpdateByIdOperationInput
  output: HorarioGeradoAulaUpdateByIdOperationOutput
}

export interface HorarioGeradoAulaUpdateByIdOperationInput {
  body: Body26
  params: Params53
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um HorarioGeradoAula.
 */
export interface Body26 {
  /**
   * Data da aula gerada.
   */
  data?: Date
  diarioProfessor?: BodyDiarioProfessor
  horarioGerado?: BodyHorarioGerado
  intervaloDeTempo?: BodyIntervaloDeTempo
}

export interface Params53 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface HorarioGeradoAulaUpdateByIdOperationOutput {
  success: HorarioGeradoAulaListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de um HorarioGeradoAula.
 */
export interface HorarioGeradoAulaView {
  /**
   * Data da aula gerada.
   */
  data: Date
  diarioProfessor: DiarioProfessorElement
  horarioGerado: HorarioGeradoElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  intervaloDeTempo: SuccessIntervaloDeTempo
}

export interface HorarioGeradoCreateOperation {
  input: HorarioGeradoCreateOperationInput
  output: HorarioGeradoCreateOperationOutput
}

export interface HorarioGeradoCreateOperationInput {
  body: Body27
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um HorarioGerado.
 */
export interface Body27 {
  calendario: BodyCalendarioLetivo
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
  /**
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

export interface HorarioGeradoCreateOperationOutput {
  success: HorarioGeradoElement
  [property: string]: any
}

export interface HorarioGeradoDeleteByIdOperation {
  input: HorarioGeradoDeleteByIdOperationInput
  output: HorarioGeradoDeleteByIdOperationOutput
}

export interface HorarioGeradoDeleteByIdOperationInput {
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

export interface HorarioGeradoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface HorarioGeradoFindByIdOperation {
  input: HorarioGeradoFindByIdOperationInput
  output: HorarioGeradoFindByIdOperationOutput
}

export interface HorarioGeradoFindByIdOperationInput {
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

export interface HorarioGeradoFindByIdOperationOutput {
  success: HorarioGeradoElement
  [property: string]: any
}

/**
 * Dados de entrada para encontrar um HorarioGerado por ID.
 */
export interface HorarioGeradoFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de um HorarioGerado.
 */
export interface HorarioGeradoFindOneResultView {
  calendario: CalendarioElement
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
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
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

/**
 * Dados de entrada para a criação de um HorarioGerado.
 */
export interface HorarioGeradoInputCreateView {
  calendario: BodyCalendarioLetivo
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
  /**
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

/**
 * Dados de entrada para a atualização de um HorarioGerado.
 */
export interface HorarioGeradoInputUpdateView {
  calendario?: BodyCalendarioLetivo
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao?: Date | null
  /**
   * Status do horário gerado.
   */
  status?: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo?: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim?: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio?: Date | null
}

/**
 * HorarioGerado.
 */
export interface HorarioGerado {
  /**
   * calendário.
   */
  calendario: DiarioCalendario
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
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
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
}

export interface HorarioGeradoListOperation {
  input: HorarioGeradoListOperationInput
  output: HorarioGeradoListOperationOutput
}

export interface HorarioGeradoListOperationInput {
  queries: Queries9
  [property: string]: any
}

export interface Queries9 {
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

export interface HorarioGeradoListOperationOutput {
  success: Success10
  [property: string]: any
}

/**
 * Resultados da busca de HorariosGerados.
 */
export interface Success10 {
  /**
   * Resultados da busca atual.
   */
  data: HorarioGeradoElement[]
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
 * Resultados da busca de HorariosGerados.
 */
export interface HorarioGeradoListResultView {
  /**
   * Resultados da busca atual.
   */
  data: HorarioGeradoElement[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface HorarioGeradoUpdateByIdOperation {
  input: HorarioGeradoUpdateByIdOperationInput
  output: HorarioGeradoUpdateByIdOperationOutput
}

export interface HorarioGeradoUpdateByIdOperationInput {
  body: Body28
  params: Params56
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um HorarioGerado.
 */
export interface Body28 {
  calendario?: BodyCalendarioLetivo
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao?: Date | null
  /**
   * Status do horário gerado.
   */
  status?: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo?: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim?: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio?: Date | null
}

export interface Params56 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface HorarioGeradoUpdateByIdOperationOutput {
  success: HorarioGeradoElement
  [property: string]: any
}

/**
 * Visão completa de um HorarioGerado.
 */
export interface HorarioGeradoView {
  calendario: CalendarioElement
  /**
   * Data em que o horário foi gerado.
   */
  dataGeracao: Date | null
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
   * Status do horário gerado.
   */
  status: null | string
  /**
   * Tipo do horário gerado.
   */
  tipo: null | string
  /**
   * Fim da vigência do horário gerado.
   */
  vigenciaFim: Date | null
  /**
   * Início da vigência do horário gerado.
   */
  vigenciaInicio: Date | null
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
  body: Body29
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma modalidade.
 */
export interface Body29 {
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

export interface ModalidadeDeleteByIdOperation {
  input: ModalidadeDeleteByIdOperationInput
  output: ModalidadeDeleteByIdOperationOutput
}

export interface ModalidadeDeleteByIdOperationInput {
  params: Params57
  [property: string]: any
}

export interface Params57 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface ModalidadeFindOneByIdOperation {
  input: ModalidadeFindOneByIdOperationInput
  output: ModalidadeFindOneByIdOperationOutput
}

export interface ModalidadeFindOneByIdOperationInput {
  params: Params58
  [property: string]: any
}

export interface Params58 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeFindOneByIdOperationOutput {
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
  queries: Queries10
  [property: string]: any
}

export interface Queries10 {
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
  success: Success11
  [property: string]: any
}

/**
 * Resultados da busca a Modalidades.
 */
export interface Success11 {
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

export interface ModalidadeUpdateByIdOperation {
  input: ModalidadeUpdateByIdOperationInput
  output: ModalidadeUpdateByIdOperationOutput
}

export interface ModalidadeUpdateByIdOperationInput {
  body: Body30
  params: Params59
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma modalidade.
 */
export interface Body30 {
  /**
   * Apelido da modalidade.
   */
  slug?: string
}

export interface Params59 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ModalidadeUpdateByIdOperationOutput {
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
  body: Body31
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um nível de formação.
 */
export interface Body31 {
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

export interface NivelDeFormacaoDeleteByIdOperation {
  input: NivelDeFormacaoDeleteByIdOperationInput
  output: NivelDeFormacaoDeleteByIdOperationOutput
}

export interface NivelDeFormacaoDeleteByIdOperationInput {
  params: Params60
  [property: string]: any
}

export interface Params60 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface NivelDeFormacaoFindOneByIdOperation {
  input: NivelDeFormacaoFindOneByIdOperationInput
  output: NivelDeFormacaoFindOneByIdOperationOutput
}

export interface NivelDeFormacaoFindOneByIdOperationInput {
  params: Params61
  [property: string]: any
}

export interface Params61 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoFindOneByIdOperationOutput {
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
  queries: Queries11
  [property: string]: any
}

export interface Queries11 {
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
  success: Success12
  [property: string]: any
}

/**
 * Resultados da busca aos níveis de formações.
 */
export interface Success12 {
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

export interface NivelDeFormacaoUpdateByIdOperation {
  input: NivelDeFormacaoUpdateByIdOperationInput
  output: NivelDeFormacaoUpdateByIdOperationOutput
}

export interface NivelDeFormacaoUpdateByIdOperationInput {
  body: Body32
  params: Params62
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um nível de formação.
 */
export interface Body32 {
  /**
   * Apelido do nível de formação.
   */
  slug?: string
}

export interface Params62 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface NivelDeFormacaoUpdateByIdOperationOutput {
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
export interface ObjectIntegerId {
  /**
   * Identificador do registro (numérico).
   */
  id: number
  [property: string]: any
}

/**
 * Estrutura identificada por id no formato uuid.
 */
export interface ObjectUuid {
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
  body: Body33
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body33 {
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

export interface OfertaFormacaoDeleteByIdOperation {
  input: OfertaFormacaoDeleteByIdOperationInput
  output: OfertaFormacaoDeleteByIdOperationOutput
}

export interface OfertaFormacaoDeleteByIdOperationInput {
  params: Params63
  [property: string]: any
}

export interface Params63 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface OfertaFormacaoFindOneByIdOperation {
  input: OfertaFormacaoFindOneByIdOperationInput
  output: OfertaFormacaoFindOneByIdOperationOutput
}

export interface OfertaFormacaoFindOneByIdOperationInput {
  params: Params64
  [property: string]: any
}

export interface Params64 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoFindOneByIdOperationOutput {
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
  queries: Queries12
  [property: string]: any
}

export interface Queries12 {
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
  success: Success13
  [property: string]: any
}

/**
 * Resultados da busca a OfertaFormacaos.
 */
export interface Success13 {
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
  body: Body34
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma oferta de formação.
 */
export interface Body34 {
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

export interface OfertaFormacaoNivelFormacaoDeleteByIdOperation {
  input: OfertaFormacaoNivelFormacaoDeleteByIdOperationInput
  output: OfertaFormacaoNivelFormacaoDeleteByIdOperationOutput
}

export interface OfertaFormacaoNivelFormacaoDeleteByIdOperationInput {
  params: Params65
  [property: string]: any
}

export interface Params65 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoFindOneByIdOperation {
  input: OfertaFormacaoNivelFormacaoFindOneByIdOperationInput
  output: OfertaFormacaoNivelFormacaoFindOneByIdOperationOutput
}

export interface OfertaFormacaoNivelFormacaoFindOneByIdOperationInput {
  params: Params66
  [property: string]: any
}

export interface Params66 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoFindOneByIdOperationOutput {
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
  queries: Queries13
  [property: string]: any
}

export interface Queries13 {
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
  success: Success14
  [property: string]: any
}

/**
 * Resultados da busca a OfertaFormacaoNivelFormacaos.
 */
export interface Success14 {
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

export interface OfertaFormacaoNivelFormacaoUpdateByIdOperation {
  input: OfertaFormacaoNivelFormacaoUpdateByIdOperationInput
  output: OfertaFormacaoNivelFormacaoUpdateByIdOperationOutput
}

export interface OfertaFormacaoNivelFormacaoUpdateByIdOperationInput {
  body: Body35
  params: Params67
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body35 {
  nivelFormcao?: Nivel
  ofertaFormacao?: BodyOfertaFormacao
}

export interface Params67 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoNivelFormacaoUpdateByIdOperationOutput {
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

export interface OfertaFormacaoUpdateByIdOperation {
  input: OfertaFormacaoUpdateByIdOperationInput
  output: OfertaFormacaoUpdateByIdOperationOutput
}

export interface OfertaFormacaoUpdateByIdOperationInput {
  body: Body36
  params: Params68
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma oferta de formação.
 */
export interface Body36 {
  /**
   * Nome da oferta de formação.
   */
  nome?: string
  /**
   * Apelido da oferta de formação.
   */
  slug?: string
}

export interface Params68 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface OfertaFormacaoUpdateByIdOperationOutput {
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

export interface PerfilFindOneByIdOperation {
  input: PerfilFindOneByIdOperationInput
  output: PerfilFindOneByIdOperationOutput
}

export interface PerfilFindOneByIdOperationInput {
  params: Params69
  [property: string]: any
}

export interface Params69 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface PerfilFindOneByIdOperationOutput {
  success: PerfilElement
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

export interface PerfilListOperation {
  input: PerfilListOperationInput
  output: PerfilListOperationOutput
}

export interface PerfilListOperationInput {
  queries: Queries14
  [property: string]: any
}

export interface Queries14 {
  "filter.campus.id"?: string[]
  "filter.usuario.id"?: string[]
  filterAtivo?: string[]
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
  success: Success15
  [property: string]: any
}

/**
 * Resultados da busca a Vínculos.
 */
export interface Success15 {
  /**
   * Resultados da busca atual.
   */
  data: PerfilElement[]
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
  data: PerfilElement[]
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
  body: Body37
  [property: string]: any
}

/**
 * Dados de entrada para a alteração de vínculo de um Usuário a um Campus.
 */
export interface Body37 {
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
  success: Success15
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

export interface ProfessorDisponibilidadeCreateOperation {
  input: ProfessorDisponibilidadeCreateOperationInput
  output: ProfessorDisponibilidadeCreateOperationOutput
}

export interface ProfessorDisponibilidadeCreateOperationInput {
  body: Body38
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma ProfessorDisponibilidade.
 */
export interface Body38 {
  disponibilidade: BodyDisponibilidade
  perfil: BodyPerfil
}

export interface ProfessorDisponibilidadeCreateOperationOutput {
  success: ProfessorDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidadeListResultViewSuccess {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
}

export interface ProfessorDisponibilidadeDeleteByIdOperation {
  input: ProfessorDisponibilidadeDeleteByIdOperationInput
  output: ProfessorDisponibilidadeDeleteByIdOperationOutput
}

export interface ProfessorDisponibilidadeDeleteByIdOperationInput {
  params: Params70
  [property: string]: any
}

export interface Params70 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ProfessorDisponibilidadeDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface ProfessorDisponibilidadeFindOneByIdOperation {
  input: ProfessorDisponibilidadeFindOneByIdOperationInput
  output: ProfessorDisponibilidadeFindOneByIdOperationOutput
}

export interface ProfessorDisponibilidadeFindOneByIdOperationInput {
  params: Params71
  [property: string]: any
}

export interface Params71 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ProfessorDisponibilidadeFindOneByIdOperationOutput {
  success: ProfessorDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma ProfessorDisponibilidade por ID.
 */
export interface ProfessorDisponibilidadeFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidadeFindOneResultView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
}

/**
 * Dados de entrada para a criação de uma ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidadeInputCreateView {
  disponibilidade: BodyDisponibilidade
  perfil: BodyPerfil
}

/**
 * Dados de entrada para a atualização de uma ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidadeInputUpdateView {
  disponibilidade?: BodyDisponibilidade
  perfil?: BodyPerfil
}

/**
 * ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidade {
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
   * Disponibilidade.
   */
  disponibilidade: DisponibilidadeDiaDisponibilidade
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Professor.
   */
  perfil: DiarioProfessorPerfil
}

export interface ProfessorDisponibilidadeListOperation {
  input: ProfessorDisponibilidadeListOperationInput
  output: ProfessorDisponibilidadeListOperationOutput
}

export interface ProfessorDisponibilidadeListOperationInput {
  queries: Queries15
  [property: string]: any
}

export interface Queries15 {
  filter_professor_id: string[] | null
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

export interface ProfessorDisponibilidadeListOperationOutput {
  success: Success16
  [property: string]: any
}

/**
 * Resultados da busca a ProfessorDisponibilidades.
 */
export interface Success16 {
  /**
   * Resultados da busca atual.
   */
  data: ProfessorDisponibilidadeListResultViewSuccess[]
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
 * Resultados da busca a ProfessorDisponibilidades.
 */
export interface ProfessorDisponibilidadeListResultView {
  /**
   * Resultados da busca atual.
   */
  data: ProfessorDisponibilidadeListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface ProfessorDisponibilidadeUpdateByIdOperation {
  input: ProfessorDisponibilidadeUpdateByIdOperationInput
  output: ProfessorDisponibilidadeUpdateByIdOperationOutput
}

export interface ProfessorDisponibilidadeUpdateByIdOperationInput {
  body: Body39
  params: Params72
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma ProfessorDisponibilidade.
 */
export interface Body39 {
  disponibilidade?: BodyDisponibilidade
  perfil?: BodyPerfil
}

export interface Params72 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ProfessorDisponibilidadeUpdateByIdOperationOutput {
  success: ProfessorDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma ProfessorDisponibilidade.
 */
export interface ProfessorDisponibilidadeView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  perfil: PerfilElement
}

export interface ReservaCreateOperation {
  input: ReservaCreateOperationInput
  output: ReservaCreateOperationOutput
}

export interface ReservaCreateOperationInput {
  body: Body40
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Reserva.
 */
export interface Body40 {
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

export interface ReservaDeleteByIdOperation {
  input: ReservaDeleteByIdOperationInput
  output: ReservaDeleteByIdOperationOutput
}

export interface ReservaDeleteByIdOperationInput {
  params: Params73
  [property: string]: any
}

export interface Params73 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface ReservaFindOneByIdOperation {
  input: ReservaFindOneByIdOperationInput
  output: ReservaFindOneByIdOperationOutput
}

export interface ReservaFindOneByIdOperationInput {
  params: Params74
  [property: string]: any
}

export interface Params74 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaFindOneByIdOperationOutput {
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
  intervaloDeTempo: AulaIntervaloDeTempo
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
  queries: Queries16
  [property: string]: any
}

export interface Queries16 {
  "filter.dataInicio"?: string[]
  "filter.dataTermino"?: string[]
  "intervaloDeTempo.periodoFim"?: string[]
  "intervaloDeTempo.periodoInicio"?: string[]
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
  success: Success17
  [property: string]: any
}

/**
 * Resultados da busca a Reservas.
 */
export interface Success17 {
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

export interface ReservaUpdateByIdOperation {
  input: ReservaUpdateByIdOperationInput
  output: ReservaUpdateByIdOperationOutput
}

export interface ReservaUpdateByIdOperationInput {
  body: Body41
  params: Params75
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Reserva.
 */
export interface Body41 {
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

export interface Params75 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface ReservaUpdateByIdOperationOutput {
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
  AmbienteDeleteOneById = "AmbienteDeleteOneById",
  AmbienteFindOneById = "AmbienteFindOneById",
  AmbienteFindOneInputView = "AmbienteFindOneInputView",
  AmbienteFindOneResultView = "AmbienteFindOneResultView",
  AmbienteGetImagemCapa = "AmbienteGetImagemCapa",
  AmbienteInputCreateView = "AmbienteInputCreateView",
  AmbienteInputUpdateView = "AmbienteInputUpdateView",
  AmbienteList = "AmbienteList",
  AmbienteListResultView = "AmbienteListResultView",
  AmbienteSetImagemCapa = "AmbienteSetImagemCapa",
  AmbienteUpdateOneById = "AmbienteUpdateOneById",
  AmbienteView = "AmbienteView",
  Arquivo = "Arquivo",
  ArquivoFindOneInputView = "ArquivoFindOneInputView",
  ArquivoFindOneResultView = "ArquivoFindOneResultView",
  ArquivoGetFile = "ArquivoGetFile",
  ArquivoView = "ArquivoView",
  Aula = "Aula",
  AulaCreate = "AulaCreate",
  AulaDeleteOneById = "AulaDeleteOneById",
  AulaFindOneById = "AulaFindOneById",
  AulaFindOneInputView = "AulaFindOneInputView",
  AulaFindOneResultView = "AulaFindOneResultView",
  AulaInputCreateView = "AulaInputCreateView",
  AulaInputUpdateView = "AulaInputUpdateView",
  AulaList = "AulaList",
  AulaListResultView = "AulaListResultView",
  AulaUpdateOneById = "AulaUpdateOneById",
  AulaView = "AulaView",
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
  BlocoDeleteOneById = "BlocoDeleteOneById",
  BlocoFindOneById = "BlocoFindOneById",
  BlocoFindOneInputView = "BlocoFindOneInputView",
  BlocoFindOneResultView = "BlocoFindOneResultView",
  BlocoGetImagemCapa = "BlocoGetImagemCapa",
  BlocoInputCreateView = "BlocoInputCreateView",
  BlocoInputUpdateView = "BlocoInputUpdateView",
  BlocoList = "BlocoList",
  BlocoListResultView = "BlocoListResultView",
  BlocoSetImagemCapa = "BlocoSetImagemCapa",
  BlocoUpdateOneById = "BlocoUpdateOneById",
  BlocoView = "BlocoView",
  CalendarioLetivo = "CalendarioLetivo",
  CalendarioLetivoCreate = "CalendarioLetivoCreate",
  CalendarioLetivoDeleteOneById = "CalendarioLetivoDeleteOneById",
  CalendarioLetivoFindOneById = "CalendarioLetivoFindOneById",
  CalendarioLetivoFindOneInputView = "CalendarioLetivoFindOneInputView",
  CalendarioLetivoFindOneResultView = "CalendarioLetivoFindOneResultView",
  CalendarioLetivoInputCreateView = "CalendarioLetivoInputCreateView",
  CalendarioLetivoInputUpdateView = "CalendarioLetivoInputUpdateView",
  CalendarioLetivoList = "CalendarioLetivoList",
  CalendarioLetivoListResultView = "CalendarioLetivoListResultView",
  CalendarioLetivoUpdateOneById = "CalendarioLetivoUpdateOneById",
  CalendarioLetivoView = "CalendarioLetivoView",
  Campus = "Campus",
  CampusCreate = "CampusCreate",
  CampusDeleteOneById = "CampusDeleteOneById",
  CampusFindOneById = "CampusFindOneById",
  CampusFindOneInputView = "CampusFindOneInputView",
  CampusFindOneResultView = "CampusFindOneResultView",
  CampusInputCreateView = "CampusInputCreateView",
  CampusInputUpdateView = "CampusInputUpdateView",
  CampusList = "CampusList",
  CampusListResultView = "CampusListResultView",
  CampusUpdateOneById = "CampusUpdateOneById",
  CampusView = "CampusView",
  Cidade = "Cidade",
  CidadeFindOneById = "CidadeFindOneById",
  CidadeFindOneInputView = "CidadeFindOneInputView",
  CidadeFindOneResultView = "CidadeFindOneResultView",
  CidadeList = "CidadeList",
  CidadeListResultView = "CidadeListResultView",
  CidadeView = "CidadeView",
  Curso = "Curso",
  CursoCreate = "CursoCreate",
  CursoDeleteOneById = "CursoDeleteOneById",
  CursoFindOneById = "CursoFindOneById",
  CursoFindOneInputView = "CursoFindOneInputView",
  CursoFindOneResultView = "CursoFindOneResultView",
  CursoGetImagemCapa = "CursoGetImagemCapa",
  CursoInputCreateView = "CursoInputCreateView",
  CursoInputUpdateView = "CursoInputUpdateView",
  CursoList = "CursoList",
  CursoListResultView = "CursoListResultView",
  CursoSetImagemCapa = "CursoSetImagemCapa",
  CursoUpdateOneById = "CursoUpdateOneById",
  CursoView = "CursoView",
  DiaCalendario = "DiaCalendario",
  DiaCalendarioCreate = "DiaCalendarioCreate",
  DiaCalendarioDeleteOneById = "DiaCalendarioDeleteOneById",
  DiaCalendarioFindOneById = "DiaCalendarioFindOneById",
  DiaCalendarioFindOneInputView = "DiaCalendarioFindOneInputView",
  DiaCalendarioFindOneResultView = "DiaCalendarioFindOneResultView",
  DiaCalendarioInputCreateView = "DiaCalendarioInputCreateView",
  DiaCalendarioInputUpdateView = "DiaCalendarioInputUpdateView",
  DiaCalendarioList = "DiaCalendarioList",
  DiaCalendarioListResultView = "DiaCalendarioListResultView",
  DiaCalendarioUpdateOneById = "DiaCalendarioUpdateOneById",
  DiaCalendarioView = "DiaCalendarioView",
  Diario = "Diario",
  DiarioCreate = "DiarioCreate",
  DiarioDeleteOneById = "DiarioDeleteOneById",
  DiarioFindOneById = "DiarioFindOneById",
  DiarioFindOneInputView = "DiarioFindOneInputView",
  DiarioFindOneResultView = "DiarioFindOneResultView",
  DiarioGetImagemCapa = "DiarioGetImagemCapa",
  DiarioInputCreateView = "DiarioInputCreateView",
  DiarioInputUpdateView = "DiarioInputUpdateView",
  DiarioList = "DiarioList",
  DiarioListResultView = "DiarioListResultView",
  DiarioPreferenciaAgrupamento = "DiarioPreferenciaAgrupamento",
  DiarioPreferenciaAgrupamentoCreate = "DiarioPreferenciaAgrupamentoCreate",
  DiarioPreferenciaAgrupamentoDeleteOneById = "DiarioPreferenciaAgrupamentoDeleteOneById",
  DiarioPreferenciaAgrupamentoFindOneById = "DiarioPreferenciaAgrupamentoFindOneById",
  DiarioPreferenciaAgrupamentoFindOneInputView = "DiarioPreferenciaAgrupamentoFindOneInputView",
  DiarioPreferenciaAgrupamentoFindOneResultView = "DiarioPreferenciaAgrupamentoFindOneResultView",
  DiarioPreferenciaAgrupamentoInputCreateView = "DiarioPreferenciaAgrupamentoInputCreateView",
  DiarioPreferenciaAgrupamentoInputUpdateView = "DiarioPreferenciaAgrupamentoInputUpdateView",
  DiarioPreferenciaAgrupamentoList = "DiarioPreferenciaAgrupamentoList",
  DiarioPreferenciaAgrupamentoListResultView = "DiarioPreferenciaAgrupamentoListResultView",
  DiarioPreferenciaAgrupamentoUpdateOneById = "DiarioPreferenciaAgrupamentoUpdateOneById",
  DiarioPreferenciaAgrupamentoView = "DiarioPreferenciaAgrupamentoView",
  DiarioProfessor = "DiarioProfessor",
  DiarioProfessorCreate = "DiarioProfessorCreate",
  DiarioProfessorDeleteOneById = "DiarioProfessorDeleteOneById",
  DiarioProfessorFindOneById = "DiarioProfessorFindOneById",
  DiarioProfessorFindOneInputView = "DiarioProfessorFindOneInputView",
  DiarioProfessorFindOneResultView = "DiarioProfessorFindOneResultView",
  DiarioProfessorInputCreateView = "DiarioProfessorInputCreateView",
  DiarioProfessorInputUpdateView = "DiarioProfessorInputUpdateView",
  DiarioProfessorList = "DiarioProfessorList",
  DiarioProfessorListResultView = "DiarioProfessorListResultView",
  DiarioProfessorUpdateOneById = "DiarioProfessorUpdateOneById",
  DiarioProfessorView = "DiarioProfessorView",
  DiarioSetImagemCapa = "DiarioSetImagemCapa",
  DiarioUpdateOneById = "DiarioUpdateOneById",
  DiarioView = "DiarioView",
  Disciplina = "Disciplina",
  DisciplinaCreate = "DisciplinaCreate",
  DisciplinaDeleteOneById = "DisciplinaDeleteOneById",
  DisciplinaFindOneById = "DisciplinaFindOneById",
  DisciplinaFindOneInputView = "DisciplinaFindOneInputView",
  DisciplinaFindOneResultView = "DisciplinaFindOneResultView",
  DisciplinaGetImagemCapa = "DisciplinaGetImagemCapa",
  DisciplinaInputCreateView = "DisciplinaInputCreateView",
  DisciplinaInputUpdateView = "DisciplinaInputUpdateView",
  DisciplinaList = "DisciplinaList",
  DisciplinaListResultView = "DisciplinaListResultView",
  DisciplinaSetImagemCapa = "DisciplinaSetImagemCapa",
  DisciplinaUpdateOneById = "DisciplinaUpdateOneById",
  DisciplinaView = "DisciplinaView",
  Disponibilidade = "Disponibilidade",
  DisponibilidadeCreate = "DisponibilidadeCreate",
  DisponibilidadeDeleteOneById = "DisponibilidadeDeleteOneById",
  DisponibilidadeDia = "DisponibilidadeDia",
  DisponibilidadeDiaCreate = "DisponibilidadeDiaCreate",
  DisponibilidadeDiaDeleteOneById = "DisponibilidadeDiaDeleteOneById",
  DisponibilidadeDiaFindOneById = "DisponibilidadeDiaFindOneById",
  DisponibilidadeDiaFindOneInputView = "DisponibilidadeDiaFindOneInputView",
  DisponibilidadeDiaFindOneResultView = "DisponibilidadeDiaFindOneResultView",
  DisponibilidadeDiaInputCreateView = "DisponibilidadeDiaInputCreateView",
  DisponibilidadeDiaInputUpdateView = "DisponibilidadeDiaInputUpdateView",
  DisponibilidadeDiaList = "DisponibilidadeDiaList",
  DisponibilidadeDiaListResultView = "DisponibilidadeDiaListResultView",
  DisponibilidadeDiaUpdateOneById = "DisponibilidadeDiaUpdateOneById",
  DisponibilidadeDiaView = "DisponibilidadeDiaView",
  DisponibilidadeFindOneById = "DisponibilidadeFindOneById",
  DisponibilidadeFindOneInputView = "DisponibilidadeFindOneInputView",
  DisponibilidadeFindOneResultView = "DisponibilidadeFindOneResultView",
  DisponibilidadeInputCreateView = "DisponibilidadeInputCreateView",
  DisponibilidadeInputUpdateView = "DisponibilidadeInputUpdateView",
  DisponibilidadeList = "DisponibilidadeList",
  DisponibilidadeListResultView = "DisponibilidadeListResultView",
  DisponibilidadeUpdateOneById = "DisponibilidadeUpdateOneById",
  DisponibilidadeView = "DisponibilidadeView",
  Endereco = "Endereco",
  EnderecoFindOneById = "EnderecoFindOneById",
  EnderecoFindOneInputView = "EnderecoFindOneInputView",
  EnderecoFindOneResultView = "EnderecoFindOneResultView",
  EnderecoInputView = "EnderecoInputView",
  EnderecoView = "EnderecoView",
  Estado = "Estado",
  EstadoFindOneById = "EstadoFindOneById",
  EstadoFindOneInputView = "EstadoFindOneInputView",
  EstadoFindOneResultView = "EstadoFindOneResultView",
  EstadoList = "EstadoList",
  EstadoListResultView = "EstadoListResultView",
  EstadoView = "EstadoView",
  Etapa = "Etapa",
  EtapaCreate = "EtapaCreate",
  EtapaDeleteOneById = "EtapaDeleteOneById",
  EtapaFindOneById = "EtapaFindOneById",
  EtapaFindOneInputView = "EtapaFindOneInputView",
  EtapaFindOneResultView = "EtapaFindOneResultView",
  EtapaInputCreateView = "EtapaInputCreateView",
  EtapaInputUpdateView = "EtapaInputUpdateView",
  EtapaList = "EtapaList",
  EtapaListResultView = "EtapaListResultView",
  EtapaUpdateOneById = "EtapaUpdateOneById",
  EtapaView = "EtapaView",
  Evento = "Evento",
  EventoCreate = "EventoCreate",
  EventoDeleteOneById = "EventoDeleteOneById",
  EventoFindOneById = "EventoFindOneById",
  EventoFindOneInputView = "EventoFindOneInputView",
  EventoFindOneResultView = "EventoFindOneResultView",
  EventoInputCreateView = "EventoInputCreateView",
  EventoInputUpdateView = "EventoInputUpdateView",
  EventoList = "EventoList",
  EventoListResultView = "EventoListResultView",
  EventoUpdateOneById = "EventoUpdateOneById",
  EventoView = "EventoView",
  GetImagem = "GetImagem",
  GradeHorarioOfertaFormacao = "GradeHorarioOfertaFormacao",
  GradeHorarioOfertaFormacaoCreate = "GradeHorarioOfertaFormacaoCreate",
  GradeHorarioOfertaFormacaoDeleteOneById = "GradeHorarioOfertaFormacaoDeleteOneById",
  GradeHorarioOfertaFormacaoFindOneById = "GradeHorarioOfertaFormacaoFindOneById",
  GradeHorarioOfertaFormacaoFindOneInputView = "GradeHorarioOfertaFormacaoFindOneInputView",
  GradeHorarioOfertaFormacaoFindOneResultView = "GradeHorarioOfertaFormacaoFindOneResultView",
  GradeHorarioOfertaFormacaoInputCreateView = "GradeHorarioOfertaFormacaoInputCreateView",
  GradeHorarioOfertaFormacaoInputUpdateView = "GradeHorarioOfertaFormacaoInputUpdateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo = "GradeHorarioOfertaFormacaoIntervaloDeTempo",
  GradeHorarioOfertaFormacaoIntervaloDeTempoCreate = "GradeHorarioOfertaFormacaoIntervaloDeTempoCreate",
  GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById = "GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView = "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView = "GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView = "GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoList = "GradeHorarioOfertaFormacaoIntervaloDeTempoList",
  GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView = "GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById = "GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempoView = "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
  GradeHorarioOfertaFormacaoList = "GradeHorarioOfertaFormacaoList",
  GradeHorarioOfertaFormacaoListResultView = "GradeHorarioOfertaFormacaoListResultView",
  GradeHorarioOfertaFormacaoUpdateOneById = "GradeHorarioOfertaFormacaoUpdateOneById",
  GradeHorarioOfertaFormacaoView = "GradeHorarioOfertaFormacaoView",
  HorarioGerado = "HorarioGerado",
  HorarioGeradoAula = "HorarioGeradoAula",
  HorarioGeradoAulaCreate = "HorarioGeradoAulaCreate",
  HorarioGeradoAulaDeleteOneById = "HorarioGeradoAulaDeleteOneById",
  HorarioGeradoAulaFindOneById = "HorarioGeradoAulaFindOneById",
  HorarioGeradoAulaFindOneInputView = "HorarioGeradoAulaFindOneInputView",
  HorarioGeradoAulaFindOneResultView = "HorarioGeradoAulaFindOneResultView",
  HorarioGeradoAulaInputCreateView = "HorarioGeradoAulaInputCreateView",
  HorarioGeradoAulaInputUpdateView = "HorarioGeradoAulaInputUpdateView",
  HorarioGeradoAulaList = "HorarioGeradoAulaList",
  HorarioGeradoAulaListResultView = "HorarioGeradoAulaListResultView",
  HorarioGeradoAulaUpdateOneById = "HorarioGeradoAulaUpdateOneById",
  HorarioGeradoAulaView = "HorarioGeradoAulaView",
  HorarioGeradoCreate = "HorarioGeradoCreate",
  HorarioGeradoDeleteOneById = "HorarioGeradoDeleteOneById",
  HorarioGeradoFindOneById = "HorarioGeradoFindOneById",
  HorarioGeradoFindOneInputView = "HorarioGeradoFindOneInputView",
  HorarioGeradoFindOneResultView = "HorarioGeradoFindOneResultView",
  HorarioGeradoInputCreateView = "HorarioGeradoInputCreateView",
  HorarioGeradoInputUpdateView = "HorarioGeradoInputUpdateView",
  HorarioGeradoList = "HorarioGeradoList",
  HorarioGeradoListResultView = "HorarioGeradoListResultView",
  HorarioGeradoUpdateOneById = "HorarioGeradoUpdateOneById",
  HorarioGeradoView = "HorarioGeradoView",
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
  ModalidadeDeleteOneById = "ModalidadeDeleteOneById",
  ModalidadeFindOneById = "ModalidadeFindOneById",
  ModalidadeFindOneInputView = "ModalidadeFindOneInputView",
  ModalidadeFindOneResultView = "ModalidadeFindOneResultView",
  ModalidadeInputCreateView = "ModalidadeInputCreateView",
  ModalidadeInputUpdateView = "ModalidadeInputUpdateView",
  ModalidadeList = "ModalidadeList",
  ModalidadeListResultView = "ModalidadeListResultView",
  ModalidadeUpdateOneById = "ModalidadeUpdateOneById",
  ModalidadeView = "ModalidadeView",
  NivelDeFormacao = "NivelDeFormacao",
  NivelDeFormacaoCreate = "NivelDeFormacaoCreate",
  NivelDeFormacaoDeleteOneById = "NivelDeFormacaoDeleteOneById",
  NivelDeFormacaoFindOneById = "NivelDeFormacaoFindOneById",
  NivelDeFormacaoFindOneInputView = "NivelDeFormacaoFindOneInputView",
  NivelDeFormacaoFindOneResultView = "NivelDeFormacaoFindOneResultView",
  NivelDeFormacaoInputCreateView = "NivelDeFormacaoInputCreateView",
  NivelDeFormacaoInputUpdateView = "NivelDeFormacaoInputUpdateView",
  NivelDeFormacaoList = "NivelDeFormacaoList",
  NivelDeFormacaoListResultView = "NivelDeFormacaoListResultView",
  NivelDeFormacaoUpdateOneById = "NivelDeFormacaoUpdateOneById",
  NivelDeFormacaoView = "NivelDeFormacaoView",
  OfertaFormacao = "OfertaFormacao",
  OfertaFormacaoCreate = "OfertaFormacaoCreate",
  OfertaFormacaoDeleteOneById = "OfertaFormacaoDeleteOneById",
  OfertaFormacaoFindOneById = "OfertaFormacaoFindOneById",
  OfertaFormacaoFindOneInputView = "OfertaFormacaoFindOneInputView",
  OfertaFormacaoFindOneResultView = "OfertaFormacaoFindOneResultView",
  OfertaFormacaoInputCreateView = "OfertaFormacaoInputCreateView",
  OfertaFormacaoInputUpdateView = "OfertaFormacaoInputUpdateView",
  OfertaFormacaoList = "OfertaFormacaoList",
  OfertaFormacaoListResultView = "OfertaFormacaoListResultView",
  OfertaFormacaoNivelFormacao = "OfertaFormacaoNivelFormacao",
  OfertaFormacaoNivelFormacaoCreate = "OfertaFormacaoNivelFormacaoCreate",
  OfertaFormacaoNivelFormacaoDeleteOneById = "OfertaFormacaoNivelFormacaoDeleteOneById",
  OfertaFormacaoNivelFormacaoFindOneById = "OfertaFormacaoNivelFormacaoFindOneById",
  OfertaFormacaoNivelFormacaoFindOneInputView = "OfertaFormacaoNivelFormacaoFindOneInputView",
  OfertaFormacaoNivelFormacaoFindOneResultView = "OfertaFormacaoNivelFormacaoFindOneResultView",
  OfertaFormacaoNivelFormacaoInputCreateView = "OfertaFormacaoNivelFormacaoInputCreateView",
  OfertaFormacaoNivelFormacaoInputUpdateView = "OfertaFormacaoNivelFormacaoInputUpdateView",
  OfertaFormacaoNivelFormacaoList = "OfertaFormacaoNivelFormacaoList",
  OfertaFormacaoNivelFormacaoListResultView = "OfertaFormacaoNivelFormacaoListResultView",
  OfertaFormacaoNivelFormacaoUpdateOneById = "OfertaFormacaoNivelFormacaoUpdateOneById",
  OfertaFormacaoNivelFormacaoView = "OfertaFormacaoNivelFormacaoView",
  OfertaFormacaoUpdateOneById = "OfertaFormacaoUpdateOneById",
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
  PerfilDeleteOneById = "PerfilDeleteOneById",
  PerfilFindOneById = "PerfilFindOneById",
  PerfilFindOneInputView = "PerfilFindOneInputView",
  PerfilFindOneResultView = "PerfilFindOneResultView",
  PerfilInputCreateView = "PerfilInputCreateView",
  PerfilInputUpdateView = "PerfilInputUpdateView",
  PerfilList = "PerfilList",
  PerfilListResultView = "PerfilListResultView",
  PerfilUpdateOneById = "PerfilUpdateOneById",
  PerfilView = "PerfilView",
  ProfessorDisponibilidade = "ProfessorDisponibilidade",
  ProfessorDisponibilidadeCreate = "ProfessorDisponibilidadeCreate",
  ProfessorDisponibilidadeDeleteOneById = "ProfessorDisponibilidadeDeleteOneById",
  ProfessorDisponibilidadeFindOneById = "ProfessorDisponibilidadeFindOneById",
  ProfessorDisponibilidadeFindOneInputView = "ProfessorDisponibilidadeFindOneInputView",
  ProfessorDisponibilidadeFindOneResultView = "ProfessorDisponibilidadeFindOneResultView",
  ProfessorDisponibilidadeInputCreateView = "ProfessorDisponibilidadeInputCreateView",
  ProfessorDisponibilidadeInputUpdateView = "ProfessorDisponibilidadeInputUpdateView",
  ProfessorDisponibilidadeList = "ProfessorDisponibilidadeList",
  ProfessorDisponibilidadeListResultView = "ProfessorDisponibilidadeListResultView",
  ProfessorDisponibilidadeUpdateOneById = "ProfessorDisponibilidadeUpdateOneById",
  ProfessorDisponibilidadeView = "ProfessorDisponibilidadeView",
  Reserva = "Reserva",
  ReservaCreate = "ReservaCreate",
  ReservaDeleteOneById = "ReservaDeleteOneById",
  ReservaFindOneById = "ReservaFindOneById",
  ReservaFindOneInputView = "ReservaFindOneInputView",
  ReservaFindOneResultView = "ReservaFindOneResultView",
  ReservaInputCreateView = "ReservaInputCreateView",
  ReservaInputUpdateView = "ReservaInputUpdateView",
  ReservaList = "ReservaList",
  ReservaListResultView = "ReservaListResultView",
  ReservaUpdateOneById = "ReservaUpdateOneById",
  ReservaView = "ReservaView",
  SearchInputView = "SearchInputView",
  SetImagem = "SetImagem",
  Turma = "Turma",
  TurmaCreate = "TurmaCreate",
  TurmaDeleteOneById = "TurmaDeleteOneById",
  TurmaDisponibilidade = "TurmaDisponibilidade",
  TurmaDisponibilidadeCreate = "TurmaDisponibilidadeCreate",
  TurmaDisponibilidadeDeleteOneById = "TurmaDisponibilidadeDeleteOneById",
  TurmaDisponibilidadeFindOneById = "TurmaDisponibilidadeFindOneById",
  TurmaDisponibilidadeFindOneInputView = "TurmaDisponibilidadeFindOneInputView",
  TurmaDisponibilidadeFindOneResultView = "TurmaDisponibilidadeFindOneResultView",
  TurmaDisponibilidadeInputCreateView = "TurmaDisponibilidadeInputCreateView",
  TurmaDisponibilidadeInputUpdateView = "TurmaDisponibilidadeInputUpdateView",
  TurmaDisponibilidadeList = "TurmaDisponibilidadeList",
  TurmaDisponibilidadeListResultView = "TurmaDisponibilidadeListResultView",
  TurmaDisponibilidadeUpdateOneById = "TurmaDisponibilidadeUpdateOneById",
  TurmaDisponibilidadeView = "TurmaDisponibilidadeView",
  TurmaFindOneById = "TurmaFindOneById",
  TurmaFindOneInputView = "TurmaFindOneInputView",
  TurmaFindOneResultView = "TurmaFindOneResultView",
  TurmaGetImagemCapa = "TurmaGetImagemCapa",
  TurmaInputCreateView = "TurmaInputCreateView",
  TurmaInputUpdateView = "TurmaInputUpdateView",
  TurmaList = "TurmaList",
  TurmaListResultView = "TurmaListResultView",
  TurmaSetImagemCapa = "TurmaSetImagemCapa",
  TurmaUpdateOneById = "TurmaUpdateOneById",
  TurmaView = "TurmaView",
  Usuario = "Usuario",
  UsuarioCreate = "UsuarioCreate",
  UsuarioDeleteOneById = "UsuarioDeleteOneById",
  UsuarioFindOneById = "UsuarioFindOneById",
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
  UsuarioUpdateOneById = "UsuarioUpdateOneById",
  UsuarioView = "UsuarioView",
}

export interface TurmaCreateOperation {
  input: TurmaCreateOperationInput
  output: TurmaCreateOperationOutput
}

export interface TurmaCreateOperationInput {
  body: Body42
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma Turma.
 */
export interface Body42 {
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

export interface TurmaDeleteByIdOperation {
  input: TurmaDeleteByIdOperationInput
  output: TurmaDeleteByIdOperationOutput
}

export interface TurmaDeleteByIdOperationInput {
  params: Params76
  [property: string]: any
}

export interface Params76 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface TurmaDisponibilidadeCreateOperation {
  input: TurmaDisponibilidadeCreateOperationInput
  output: TurmaDisponibilidadeCreateOperationOutput
}

export interface TurmaDisponibilidadeCreateOperationInput {
  body: Body43
  [property: string]: any
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidade.
 */
export interface Body43 {
  disponibilidade: BodyDisponibilidade
  turma: BodyTurma
}

export interface TurmaDisponibilidadeCreateOperationOutput {
  success: TurmaDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão FindOne de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeListResultViewSuccess {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  turma: TurmaElement
}

export interface TurmaDisponibilidadeDeleteByIdOperation {
  input: TurmaDisponibilidadeDeleteByIdOperationInput
  output: TurmaDisponibilidadeDeleteByIdOperationOutput
}

export interface TurmaDisponibilidadeDeleteByIdOperationInput {
  params: Params77
  [property: string]: any
}

export interface Params77 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaDisponibilidadeDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface TurmaDisponibilidadeFindOneByIdOperation {
  input: TurmaDisponibilidadeFindOneByIdOperationInput
  output: TurmaDisponibilidadeFindOneByIdOperationOutput
}

export interface TurmaDisponibilidadeFindOneByIdOperationInput {
  params: Params78
  [property: string]: any
}

export interface Params78 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaDisponibilidadeFindOneByIdOperationOutput {
  success: TurmaDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Dados de entrada para encontrar uma TurmaDisponibilidade por ID.
 */
export interface TurmaDisponibilidadeFindOneInputView {
  /**
   * Identificador do registro (uuid).
   */
  id: string
}

/**
 * Visão FindOne de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeFindOneResultView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  turma: TurmaElement
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeInputCreateView {
  disponibilidade: BodyDisponibilidade
  turma: BodyTurma
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeInputUpdateView {
  disponibilidade?: BodyDisponibilidade
  turma?: BodyTurma
}

/**
 * TurmaDisponibilidade.
 */
export interface TurmaDisponibilidade {
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
   * Disponibilidade.
   */
  disponibilidade: DisponibilidadeDiaDisponibilidade
  /**
   * Identificador do registro (uuid).
   */
  id: string
  /**
   * Turma.
   */
  turma: DiarioTurma
}

export interface TurmaDisponibilidadeListOperation {
  input: TurmaDisponibilidadeListOperationInput
  output: TurmaDisponibilidadeListOperationOutput
}

export interface TurmaDisponibilidadeListOperationInput {
  queries: Queries17
  [property: string]: any
}

export interface Queries17 {
  filter_turma_id: string[] | null
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

export interface TurmaDisponibilidadeListOperationOutput {
  success: Success18
  [property: string]: any
}

/**
 * Resultados da busca a TurmaDisponibilidades.
 */
export interface Success18 {
  /**
   * Resultados da busca atual.
   */
  data: TurmaDisponibilidadeListResultViewSuccess[]
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
 * Resultados da busca a TurmaDisponibilidades.
 */
export interface TurmaDisponibilidadeListResultView {
  /**
   * Resultados da busca atual.
   */
  data: TurmaDisponibilidadeListResultViewSuccess[]
  /**
   * Links da busca.
   */
  links: Links
  /**
   * Metadados da busca.
   */
  meta: Meta
}

export interface TurmaDisponibilidadeUpdateByIdOperation {
  input: TurmaDisponibilidadeUpdateByIdOperationInput
  output: TurmaDisponibilidadeUpdateByIdOperationOutput
}

export interface TurmaDisponibilidadeUpdateByIdOperationInput {
  body: Body44
  params: Params79
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidade.
 */
export interface Body44 {
  disponibilidade?: BodyDisponibilidade
  turma?: BodyTurma
}

export interface Params79 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaDisponibilidadeUpdateByIdOperationOutput {
  success: TurmaDisponibilidadeListResultViewSuccess
  [property: string]: any
}

/**
 * Visão completa de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeView {
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
  disponibilidade: DisponibilidadeElement
  /**
   * Identificador do registro (uuid).
   */
  id: string
  turma: TurmaElement
}

export interface TurmaFindOneByIdOperation {
  input: TurmaFindOneByIdOperationInput
  output: TurmaFindOneByIdOperationOutput
}

export interface TurmaFindOneByIdOperationInput {
  params: Params80
  [property: string]: any
}

export interface Params80 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaFindOneByIdOperationOutput {
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
  params: Params81
  [property: string]: any
}

export interface Params81 {
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
  queries: Queries18
  [property: string]: any
}

export interface Queries18 {
  "filter.ambientePadraoAula.capacidade"?: string[]
  "filter.ambientePadraoAula.codigo"?: string[]
  "filter.ambientePadraoAula.nome"?: string[]
  "filter.ambientePadraoAula.tipo"?: string[]
  "filter.curso.campus.id"?: string[]
  "filter.curso.modalidade.id"?: string[]
  "filter.curso.nome"?: string[]
  "filter.curso.nomeAbreviado"?: string[]
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
  success: Success19
  [property: string]: any
}

/**
 * Resultados da busca a Turmas.
 */
export interface Success19 {
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
  params: Params82
  [property: string]: any
}

export interface Params82 {
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

export interface TurmaUpdateByIdOperation {
  input: TurmaUpdateByIdOperationInput
  output: TurmaUpdateByIdOperationOutput
}

export interface TurmaUpdateByIdOperationInput {
  body: Body45
  params: Params83
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de uma Turma.
 */
export interface Body45 {
  ambientePadraoAula?: BodyAmbiente
  curso?: BodyCurso
  /**
   * Período da Turma.
   */
  periodo?: string
}

export interface Params83 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface TurmaUpdateByIdOperationOutput {
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
  body: Body46
  [property: string]: any
}

/**
 * Dados de entrada para a criação de um usuário.
 */
export interface Body46 {
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

export interface UsuarioDeleteByIdOperation {
  input: UsuarioDeleteByIdOperationInput
  output: UsuarioDeleteByIdOperationOutput
}

export interface UsuarioDeleteByIdOperationInput {
  params: Params84
  [property: string]: any
}

export interface Params84 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioDeleteByIdOperationOutput {
  success: boolean
  [property: string]: any
}

export interface UsuarioFindOneByIdOperation {
  input: UsuarioFindOneByIdOperationInput
  output: UsuarioFindOneByIdOperationOutput
}

export interface UsuarioFindOneByIdOperationInput {
  params: Params85
  [property: string]: any
}

export interface Params85 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioFindOneByIdOperationOutput {
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
  params: Params86
  [property: string]: any
}

export interface Params86 {
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
  params: Params87
  [property: string]: any
}

export interface Params87 {
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
  queries: Queries19
  [property: string]: any
}

export interface Queries19 {
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
  success: Success20
  [property: string]: any
}

/**
 * Resultados da busca a usuários.
 */
export interface Success20 {
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
  params: Params88
  [property: string]: any
}

export interface Params88 {
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
  params: Params89
  [property: string]: any
}

export interface Params89 {
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

export interface UsuarioUpdateByIdOperation {
  input: UsuarioUpdateByIdOperationInput
  output: UsuarioUpdateByIdOperationOutput
}

export interface UsuarioUpdateByIdOperationInput {
  body: Body47
  params: Params90
  [property: string]: any
}

/**
 * Dados de entrada para a atualização de um Usuário.
 */
export interface Body47 {
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

export interface Params90 {
  /**
   * Identificador do registro (uuid).
   */
  id: string
  [property: string]: any
}

export interface UsuarioUpdateByIdOperationOutput {
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
