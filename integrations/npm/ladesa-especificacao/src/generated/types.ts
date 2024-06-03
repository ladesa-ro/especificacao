// To parse this data:
//
//   import { Convert, PaginatedSortBy, PaginatedResultMetaFilter, PaginatedResultMeta, PaginatedResultLinks, PaginatedBaseInput, PaginatedInput, Search, Arquivo, ArquivoFindOneInput, ArquivoFindOneResult, Imagem, ImagemFindOneInput, ImagemFindOneFromImagemArquivoResult, ImagemFindOneResult, ImagemArquivo, ImagemArquivoFindOneInput, ImagemArquivoFindOneFromImagemResult, ImagemArquivoFindOneResult, AuthLoginInput, AuthRefreshInput, AuthWhoAmIResult, AuthSessionCredentials, AuthSetInitialPasswordInput, Usuario, UsuarioFindOneInput, UsuarioFindOneResult, UsuarioInputCreate, UsuarioInputUpdate, Vinculo, VinculoFindOneInput, VinculoFindOneResult, VinculoUpdate, Ambiente, AmbienteFindOneInput, AmbienteFindOneResult, AmbienteInputCreate, AmbienteInputUpdate, AmbienteFindAllResult, Bloco, BlocoFindOneInput, BlocoFindOneResult, BlocoInputCreate, BlocoInputUpdate, BlocoFindAllResult, Campus, CampusFindOneInput, CampusFindOneResult, CampusInputCreate, CampusInputUpdate, CampusFindAllResult, Cidade, CidadeFindOneInput, CidadeFindOneResult, CidadeFindAllResult, Endereco, EnderecoFindOneInput, EnderecoFindOneResult, EnderecoInput, Estado, EstadoFindOneInput, EstadoFindOneResult, EstadoFindAllResult, Reserva, ReservaFindOneInput, ReservaFindOneResult, ReservaInputCreate, ReservaInputUpdate, ReservaFindAllResult, Curso, CursoFindOneInput, CursoFindOneResult, CursoInputCreate, CursoInputUpdate, CursoFindAllResult, Diario, DiarioFindOneInput, DiarioFindOneResult, DiarioInputCreate, DiarioInputUpdate, DiarioFindAllResult, DiarioProfessor, DiarioProfessorFindOneInput, DiarioProfessorFindOneResult, DiarioProfessorInputCreate, DiarioProfessorInputUpdate, DiarioProfessorFindAllResult, Modalidade, ModalidadeFindOneInput, ModalidadeFindOneResult, ModalidadeInputCreate, ModalidadeInputUpdate, ModalidadeFindAllResult, Disciplina, DisciplinaFindOneInput, DisciplinaFindOneResult, DisciplinaInputCreate, DisciplinaInputUpdate, DisciplinaFindAllResult, Turma, TurmaFindOneInput, TurmaFindOneResult, TurmaInputCreate, TurmaInputUpdate, TurmaFindAllResult, IntervaloDeTempo, IntervaloDeTempoFindOneResult, IntervaloDeTempoInput, CalendarioLetivo, CalendarioLetivoFindOneInput, CalendarioLetivoFindOneResult, CalendarioLetivoInputCreate, CalendarioLetivoInputUpdate, CalendarioLetivoFindAllResult, DiaCalendario, DiaCalendarioFindOneInput, DiaCalendarioFindOneResult, DiaCalendarioInputCreate, DiaCalendarioInputUpdate, DiaCalendarioFindAllResult, Etapa, EtapaFindOneInput, EtapaFindOneResult, EtapaInputCreate, EtapaInputUpdate, EtapaFindAllResult, Aula, AulaFindOneInput, AulaFindOneResult, AulaInputCreate, AulaInputUpdate, AulaFindAllResult, Evento, EventoFindOneInput, EventoFindOneResult, EventoInputCreate, EventoInputUpdate, EventoFindAllResult, TurmaDisponibilidade, TurmaDisponibilidadeFindOneInput, TurmaDisponibilidadeFindOneResult, TurmaDisponibilidadeInputCreate, TurmaDisponibilidadeInputUpdate, TurmaDisponibilidadeFindAllResult, TurmaDisponibilidadeDia, TurmaDisponibilidadeDiaFindOneInput, TurmaDisponibilidadeDiaFindOneResult, TurmaDisponibilidadeDiaInputCreate, TurmaDisponibilidadeDiaInputUpdate, TurmaDisponibilidadeDiaFindAllResult } from "./file";
//
//   const paginatedSortBy = Convert.toPaginatedSortBy(json);
//   const paginatedResultMetaFilter = Convert.toPaginatedResultMetaFilter(json);
//   const paginatedResultMeta = Convert.toPaginatedResultMeta(json);
//   const paginatedResultLinks = Convert.toPaginatedResultLinks(json);
//   const paginatedBaseInput = Convert.toPaginatedBaseInput(json);
//   const paginatedInput = Convert.toPaginatedInput(json);
//   const search = Convert.toSearch(json);
//   const arquivo = Convert.toArquivo(json);
//   const arquivoFindOneInput = Convert.toArquivoFindOneInput(json);
//   const arquivoFindOneResult = Convert.toArquivoFindOneResult(json);
//   const imagem = Convert.toImagem(json);
//   const imagemFindOneInput = Convert.toImagemFindOneInput(json);
//   const imagemFindOneFromImagemArquivoResult = Convert.toImagemFindOneFromImagemArquivoResult(json);
//   const imagemFindOneResult = Convert.toImagemFindOneResult(json);
//   const imagemArquivo = Convert.toImagemArquivo(json);
//   const imagemArquivoFindOneInput = Convert.toImagemArquivoFindOneInput(json);
//   const imagemArquivoFindOneFromImagemResult = Convert.toImagemArquivoFindOneFromImagemResult(json);
//   const imagemArquivoFindOneResult = Convert.toImagemArquivoFindOneResult(json);
//   const authLoginInput = Convert.toAuthLoginInput(json);
//   const authRefreshInput = Convert.toAuthRefreshInput(json);
//   const authWhoAmIResult = Convert.toAuthWhoAmIResult(json);
//   const authSessionCredentials = Convert.toAuthSessionCredentials(json);
//   const authSetInitialPasswordInput = Convert.toAuthSetInitialPasswordInput(json);
//   const usuario = Convert.toUsuario(json);
//   const usuarioFindOneInput = Convert.toUsuarioFindOneInput(json);
//   const usuarioFindOneResult = Convert.toUsuarioFindOneResult(json);
//   const usuarioInputCreate = Convert.toUsuarioInputCreate(json);
//   const usuarioInputUpdate = Convert.toUsuarioInputUpdate(json);
//   const vinculo = Convert.toVinculo(json);
//   const vinculoFindOneInput = Convert.toVinculoFindOneInput(json);
//   const vinculoFindOneResult = Convert.toVinculoFindOneResult(json);
//   const vinculoUpdate = Convert.toVinculoUpdate(json);
//   const ambiente = Convert.toAmbiente(json);
//   const ambienteFindOneInput = Convert.toAmbienteFindOneInput(json);
//   const ambienteFindOneResult = Convert.toAmbienteFindOneResult(json);
//   const ambienteInputCreate = Convert.toAmbienteInputCreate(json);
//   const ambienteInputUpdate = Convert.toAmbienteInputUpdate(json);
//   const ambienteFindAllResult = Convert.toAmbienteFindAllResult(json);
//   const bloco = Convert.toBloco(json);
//   const blocoFindOneInput = Convert.toBlocoFindOneInput(json);
//   const blocoFindOneResult = Convert.toBlocoFindOneResult(json);
//   const blocoInputCreate = Convert.toBlocoInputCreate(json);
//   const blocoInputUpdate = Convert.toBlocoInputUpdate(json);
//   const blocoFindAllResult = Convert.toBlocoFindAllResult(json);
//   const campus = Convert.toCampus(json);
//   const campusFindOneInput = Convert.toCampusFindOneInput(json);
//   const campusFindOneResult = Convert.toCampusFindOneResult(json);
//   const campusInputCreate = Convert.toCampusInputCreate(json);
//   const campusInputUpdate = Convert.toCampusInputUpdate(json);
//   const campusFindAllResult = Convert.toCampusFindAllResult(json);
//   const cidade = Convert.toCidade(json);
//   const cidadeFindOneInput = Convert.toCidadeFindOneInput(json);
//   const cidadeFindOneResult = Convert.toCidadeFindOneResult(json);
//   const cidadeFindAllResult = Convert.toCidadeFindAllResult(json);
//   const endereco = Convert.toEndereco(json);
//   const enderecoFindOneInput = Convert.toEnderecoFindOneInput(json);
//   const enderecoFindOneResult = Convert.toEnderecoFindOneResult(json);
//   const enderecoInput = Convert.toEnderecoInput(json);
//   const estado = Convert.toEstado(json);
//   const estadoFindOneInput = Convert.toEstadoFindOneInput(json);
//   const estadoFindOneResult = Convert.toEstadoFindOneResult(json);
//   const estadoFindAllResult = Convert.toEstadoFindAllResult(json);
//   const reserva = Convert.toReserva(json);
//   const reservaFindOneInput = Convert.toReservaFindOneInput(json);
//   const reservaFindOneResult = Convert.toReservaFindOneResult(json);
//   const reservaInputCreate = Convert.toReservaInputCreate(json);
//   const reservaInputUpdate = Convert.toReservaInputUpdate(json);
//   const reservaFindAllResult = Convert.toReservaFindAllResult(json);
//   const curso = Convert.toCurso(json);
//   const cursoFindOneInput = Convert.toCursoFindOneInput(json);
//   const cursoFindOneResult = Convert.toCursoFindOneResult(json);
//   const cursoInputCreate = Convert.toCursoInputCreate(json);
//   const cursoInputUpdate = Convert.toCursoInputUpdate(json);
//   const cursoFindAllResult = Convert.toCursoFindAllResult(json);
//   const diario = Convert.toDiario(json);
//   const diarioFindOneInput = Convert.toDiarioFindOneInput(json);
//   const diarioFindOneResult = Convert.toDiarioFindOneResult(json);
//   const diarioInputCreate = Convert.toDiarioInputCreate(json);
//   const diarioInputUpdate = Convert.toDiarioInputUpdate(json);
//   const diarioFindAllResult = Convert.toDiarioFindAllResult(json);
//   const diarioProfessor = Convert.toDiarioProfessor(json);
//   const diarioProfessorFindOneInput = Convert.toDiarioProfessorFindOneInput(json);
//   const diarioProfessorFindOneResult = Convert.toDiarioProfessorFindOneResult(json);
//   const diarioProfessorInputCreate = Convert.toDiarioProfessorInputCreate(json);
//   const diarioProfessorInputUpdate = Convert.toDiarioProfessorInputUpdate(json);
//   const diarioProfessorFindAllResult = Convert.toDiarioProfessorFindAllResult(json);
//   const modalidade = Convert.toModalidade(json);
//   const modalidadeFindOneInput = Convert.toModalidadeFindOneInput(json);
//   const modalidadeFindOneResult = Convert.toModalidadeFindOneResult(json);
//   const modalidadeInputCreate = Convert.toModalidadeInputCreate(json);
//   const modalidadeInputUpdate = Convert.toModalidadeInputUpdate(json);
//   const modalidadeFindAllResult = Convert.toModalidadeFindAllResult(json);
//   const disciplina = Convert.toDisciplina(json);
//   const disciplinaFindOneInput = Convert.toDisciplinaFindOneInput(json);
//   const disciplinaFindOneResult = Convert.toDisciplinaFindOneResult(json);
//   const disciplinaInputCreate = Convert.toDisciplinaInputCreate(json);
//   const disciplinaInputUpdate = Convert.toDisciplinaInputUpdate(json);
//   const disciplinaFindAllResult = Convert.toDisciplinaFindAllResult(json);
//   const turma = Convert.toTurma(json);
//   const turmaFindOneInput = Convert.toTurmaFindOneInput(json);
//   const turmaFindOneResult = Convert.toTurmaFindOneResult(json);
//   const turmaInputCreate = Convert.toTurmaInputCreate(json);
//   const turmaInputUpdate = Convert.toTurmaInputUpdate(json);
//   const turmaFindAllResult = Convert.toTurmaFindAllResult(json);
//   const intervaloDeTempo = Convert.toIntervaloDeTempo(json);
//   const intervaloDeTempoFindOneResult = Convert.toIntervaloDeTempoFindOneResult(json);
//   const intervaloDeTempoInput = Convert.toIntervaloDeTempoInput(json);
//   const calendarioLetivo = Convert.toCalendarioLetivo(json);
//   const calendarioLetivoFindOneInput = Convert.toCalendarioLetivoFindOneInput(json);
//   const calendarioLetivoFindOneResult = Convert.toCalendarioLetivoFindOneResult(json);
//   const calendarioLetivoInputCreate = Convert.toCalendarioLetivoInputCreate(json);
//   const calendarioLetivoInputUpdate = Convert.toCalendarioLetivoInputUpdate(json);
//   const calendarioLetivoFindAllResult = Convert.toCalendarioLetivoFindAllResult(json);
//   const diaCalendario = Convert.toDiaCalendario(json);
//   const diaCalendarioFindOneInput = Convert.toDiaCalendarioFindOneInput(json);
//   const diaCalendarioFindOneResult = Convert.toDiaCalendarioFindOneResult(json);
//   const diaCalendarioInputCreate = Convert.toDiaCalendarioInputCreate(json);
//   const diaCalendarioInputUpdate = Convert.toDiaCalendarioInputUpdate(json);
//   const diaCalendarioFindAllResult = Convert.toDiaCalendarioFindAllResult(json);
//   const etapa = Convert.toEtapa(json);
//   const etapaFindOneInput = Convert.toEtapaFindOneInput(json);
//   const etapaFindOneResult = Convert.toEtapaFindOneResult(json);
//   const etapaInputCreate = Convert.toEtapaInputCreate(json);
//   const etapaInputUpdate = Convert.toEtapaInputUpdate(json);
//   const etapaFindAllResult = Convert.toEtapaFindAllResult(json);
//   const aula = Convert.toAula(json);
//   const aulaFindOneInput = Convert.toAulaFindOneInput(json);
//   const aulaFindOneResult = Convert.toAulaFindOneResult(json);
//   const aulaInputCreate = Convert.toAulaInputCreate(json);
//   const aulaInputUpdate = Convert.toAulaInputUpdate(json);
//   const aulaFindAllResult = Convert.toAulaFindAllResult(json);
//   const evento = Convert.toEvento(json);
//   const eventoFindOneInput = Convert.toEventoFindOneInput(json);
//   const eventoFindOneResult = Convert.toEventoFindOneResult(json);
//   const eventoInputCreate = Convert.toEventoInputCreate(json);
//   const eventoInputUpdate = Convert.toEventoInputUpdate(json);
//   const eventoFindAllResult = Convert.toEventoFindAllResult(json);
//   const turmaDisponibilidade = Convert.toTurmaDisponibilidade(json);
//   const turmaDisponibilidadeFindOneInput = Convert.toTurmaDisponibilidadeFindOneInput(json);
//   const turmaDisponibilidadeFindOneResult = Convert.toTurmaDisponibilidadeFindOneResult(json);
//   const turmaDisponibilidadeInputCreate = Convert.toTurmaDisponibilidadeInputCreate(json);
//   const turmaDisponibilidadeInputUpdate = Convert.toTurmaDisponibilidadeInputUpdate(json);
//   const turmaDisponibilidadeFindAllResult = Convert.toTurmaDisponibilidadeFindAllResult(json);
//   const turmaDisponibilidadeDia = Convert.toTurmaDisponibilidadeDia(json);
//   const turmaDisponibilidadeDiaFindOneInput = Convert.toTurmaDisponibilidadeDiaFindOneInput(json);
//   const turmaDisponibilidadeDiaFindOneResult = Convert.toTurmaDisponibilidadeDiaFindOneResult(json);
//   const turmaDisponibilidadeDiaInputCreate = Convert.toTurmaDisponibilidadeDiaInputCreate(json);
//   const turmaDisponibilidadeDiaInputUpdate = Convert.toTurmaDisponibilidadeDiaInputUpdate(json);
//   const turmaDisponibilidadeDiaFindAllResult = Convert.toTurmaDisponibilidadeDiaFindAllResult(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Unnamed View
 */
export interface PaginatedBaseInput {
    limit?:  number | null;
    page?:   number | null;
    search?: null | string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface PaginatedInput {
    /**
     * Filtros
     */
    filter:  PaginatedResultMetaFilter[];
    limit?:  number | null;
    page?:   number | null;
    search?: null | string;
    /**
     * Ordenação.
     */
    sortBy: PaginatedSortBy[];
    [property: string]: any;
}

/**
 * Configuração de filtro por restrições de uma propriedade.
 *
 * Ordenamento de uma propriedade.
 */
export interface PaginatedResultMetaFilter {
    /**
     * Propriedade filtrada.
     */
    property: string;
    /**
     * Restrições de filtragem
     */
    restrictions: string[];
    [property: string]: any;
}

/**
 * Configuração de ordenamento por uma propriedade.
 *
 * Ordenamento de uma propriedade.
 */
export interface PaginatedSortBy {
    /**
     * Modo de ordenação.
     */
    mode: string;
    /**
     * Propriedade ordenada.
     */
    property: string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Search {
    /**
     * Filtros.
     */
    filters?: Array<string[]>;
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Ordenação.
     */
    sortBy?: string[];
    [property: string]: any;
}

/**
 * Visão completa de um Arquivo.
 */
export interface Arquivo {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Mime-type.
     */
    mimeType: string;
    /**
     * Nome.
     */
    name: string;
    /**
     * Tamanho (em bytes).
     */
    sizeBytes: number;
    /**
     * Estratégia de armazenamento.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Imagem por ID.
 */
export interface ImagemFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Visão completa de uma versão de uma imagem.
 */
export interface ImagemArquivo {
    altura: number | null;
    /**
     * Arquivo.
     */
    arquivo: ArquivoFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Formato da imagem.
     */
    formato: string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Imagem.
     */
    imagem:  ImagemFindOneFromImagemArquivoResult;
    largura: number | null;
    /**
     * Mime Type da imagem.
     */
    mimeType: string;
    [property: string]: any;
}

/**
 * Visão FindOne de um Arquivo.
 *
 * Arquivo.
 */
export interface ArquivoFindOneResult {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Mime-type.
     */
    mimeType: string;
    /**
     * Nome.
     */
    name: string;
    /**
     * Tamanho (em bytes).
     */
    sizeBytes: number;
    /**
     * Estratégia de armazenamento.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Visão FindOneFromImagemArquivo de um Imagem.
 *
 * Imagem.
 */
export interface ImagemFindOneFromImagemArquivoResult {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar uma versão de uma imagem por ID.
 */
export interface ImagemArquivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Visão FindOne de um ImagemArquivo.
 */
export interface ImagemArquivoFindOneResult {
    altura: number | null;
    /**
     * Arquivo.
     */
    arquivo: ArquivoFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Formato da imagem.
     */
    formato: string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Imagem.
     */
    imagem:  ImagemFindOneFromImagemArquivoResult;
    largura: number | null;
    /**
     * Mime Type da imagem.
     */
    mimeType: string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface AuthLoginInput {
    /**
     * Matrícula SIAPE.
     */
    matriculaSiape: string;
    /**
     * Senha do usuário.
     */
    senha: string;
    [property: string]: any;
}

/**
 * Dados de entrada para obter as credenciais de sessão por meio de login refresh.
 */
export interface AuthRefreshInput {
    /**
     * Token de refresh.
     */
    refreshToken: string;
    [property: string]: any;
}

/**
 * Informações sobre o ator.
 */
export interface AuthWhoAmIResult {
    usuario: null | UsuarioFindOneResult;
    [property: string]: any;
}

/**
 * Vínculos ativos do Usuário.
 *
 * Visão completa de um Vínculo.
 */
export interface Vinculo {
    /**
     * Indica se o vínculo está ativo.
     */
    ativo: boolean;
    /**
     * Campus associado ao vínculo.
     */
    campus: CampusFindOneResult;
    /**
     * Cargo do usuário no vínculo.
     */
    cargo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Usuário associado ao vínculo.
     */
    usuario: UsuarioFindOneResult;
    [property: string]: any;
}

/**
 * Usuário autenticado.
 *
 * Visão FindOne de um Usuário.
 *
 * Usuário associado ao vínculo.
 *
 * Usuário que fez a reserva.
 */
export interface UsuarioFindOneResult {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * E-mail do usuário.
     */
    email: string;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | Imagem;
    /**
     * Indentifica é um super usuário.
     */
    isSuperUser: boolean;
    /**
     * Matrícula Siape do usuário.
     */
    matriculaSiape: string;
    /**
     * Nome do usuário.
     */
    nome: string;
    /**
     * Vínculos ativos do Usuário.
     */
    vinculosAtivos: Vinculo[];
    [property: string]: any;
}

/**
 * Campus associado ao vínculo.
 *
 * Visão FindOne de um Campus.
 *
 * Campus.
 *
 * Item da busca.
 *
 * Campus que o curso pertence.
 */
export interface CampusFindOneResult {
    /**
     * Apelido do Campus.
     */
    apelido: string;
    /**
     * CNPJ do Campus.
     */
    cnpj: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Endereço do Campus
     */
    endereco: EnderecoFindOneResult;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Nome fantasia do Campus.
     */
    nomeFantasia: string;
    /**
     * Razão social do Campus.
     */
    razaoSocial: string;
    [property: string]: any;
}

/**
 * Endereço do Campus
 *
 * Visão FindOne de um Endereco.
 */
export interface EnderecoFindOneResult {
    /**
     * Bairro
     */
    bairro: string;
    cep:    string;
    /**
     * Cidade
     */
    cidade:      CidadeFindOneResult;
    complemento: null | string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Logradouro
     */
    logradouro: string;
    /**
     * Número
     */
    numero:          number;
    pontoReferencia: null | string;
    [property: string]: any;
}

/**
 * Cidade
 *
 * Visão FindOne de uma Cidade.
 *
 * Item da busca.
 */
export interface CidadeFindOneResult {
    /**
     * Estado da Cidade.
     */
    estado: EstadoFindOneResult;
    /**
     * ID do Registro.
     */
    id: number;
    /**
     * Nome oficial da Cidade.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Estado da Cidade.
 *
 * Visão FindOne de um Estado.
 *
 * Item da busca.
 */
export interface EstadoFindOneResult {
    /**
     * ID do Registro.
     */
    id: number;
    /**
     * Nome oficial do Estado.
     */
    nome: string;
    /**
     * Sigla do Estado.
     */
    sigla: string;
    [property: string]: any;
}

/**
 * Visão completa de um Imagem.
 *
 * Imagem de capa
 */
export interface Imagem {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Descrição.
     */
    descricao: string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Versões.
     */
    versoes: ImagemArquivoFindOneFromImagemResult[];
    [property: string]: any;
}

/**
 * Versão da imagem.
 *
 * Visão FindOneFromImagem de um ImagemArquivo.
 */
export interface ImagemArquivoFindOneFromImagemResult {
    altura: number | null;
    /**
     * Arquivo.
     */
    arquivo: ArquivoFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Formato da imagem.
     */
    formato: string;
    /**
     * ID do Registro.
     */
    id:      string;
    largura: number | null;
    /**
     * Mime Type da imagem.
     */
    mimeType: string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface AuthSessionCredentials {
    access_token:  null | string;
    expires_at:    number | null;
    expires_in:    number | null;
    id_token:      null | string;
    refresh_token: null | string;
    scope:         null | string;
    session_state: null | string;
    token_type:    null | string;
    [property: string]: any;
}

/**
 * Define a senha inicial do usuário.
 */
export interface AuthSetInitialPasswordInput {
    /**
     * Matrícula SIAPE.
     */
    matriculaSiape: string;
    /**
     * Nova senha.
     */
    senha: string;
    [property: string]: any;
}

/**
 * Visão completa de um Usuário.
 */
export interface Usuario {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * E-mail do usuário.
     */
    email: string;
    /**
     * ID do Registro.
     */
    id:           string;
    imagemCapa:   null | ImagemFindOneResult;
    imagemPerfil: null | ImagemFindOneResult;
    /**
     * Indentifica é um super usuário.
     */
    isSuperUser: boolean;
    /**
     * Matrícula Siape do usuário.
     */
    matriculaSiape: string;
    /**
     * Nome do usuário.
     */
    nome: string;
    /**
     * Vínculos ativos do Usuário.
     */
    vinculosAtivos: VinculoFindOneResult[];
    [property: string]: any;
}

/**
 * Visão FindOne de um Imagem.
 *
 * Imagem de capa
 *
 * Imagem de perfil
 */
export interface ImagemFindOneResult {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Descrição.
     */
    descricao: string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Versões.
     */
    versoes: ImagemArquivoFindOneFromImagemResult[];
    [property: string]: any;
}

/**
 * Vínculos ativos do Usuário.
 *
 * Visão FindOne de um Vínculo.
 *
 * Vínculo do usuário ao campus.
 */
export interface VinculoFindOneResult {
    /**
     * Indica se o vínculo está ativo.
     */
    ativo: boolean;
    /**
     * Campus associado ao vínculo.
     */
    campus: CampusFindOneResult;
    /**
     * Cargo do usuário no vínculo.
     */
    cargo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Usuário associado ao vínculo.
     */
    usuario: UsuarioFindOneResult;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Usuario.
 */
export interface UsuarioInputCreate {
    /**
     * E-mail do usuário.
     */
    email: string;
    /**
     * Matrícula Siape do usuário.
     */
    matriculaSiape: string;
    /**
     * Nome do usuário.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Usuario.
 */
export interface UsuarioInputUpdate {
    /**
     * E-mail do usuário.
     */
    email?: string;
    /**
     * Matrícula Siape do usuário.
     */
    matriculaSiape?: string;
    /**
     * Nome do usuário.
     */
    nome?: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a alteração de vínculo de um Usuário a um Campus.
 */
export interface VinculoUpdate {
    /**
     * Campus associado ao vínculo.
     */
    campus: CampusFindOneInput;
    /**
     * Cargos do usuário no vínculo.
     */
    cargos: string[];
    /**
     * Usuário associado ao vínculo.
     */
    usuario: UsuarioFindOneInput;
    [property: string]: any;
}

/**
 * Campus associado ao vínculo.
 *
 * Dados de entrada para encontrar um Campus por ID.
 *
 * Campus.
 *
 * Campus que o curso pertence.
 */
export interface CampusFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Usuario por ID.
 *
 * Usuário associado ao vínculo.
 *
 * Usuário que fez a reserva.
 */
export interface UsuarioFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Visão completa de um Ambiente.
 */
export interface Ambiente {
    /**
     * Bloco que o ambiente/sala pertence.
     */
    bloco:      BlocoFindOneResult;
    capacidade: number | null;
    /**
     * Código do ambiente/sala.
     */
    codigo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Descrição do ambiente/sala.
     */
    descricao: string;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Nome do ambiente/sala.
     */
    nome: string;
    tipo: null | string;
    [property: string]: any;
}

/**
 * Bloco que o ambiente/sala pertence.
 *
 * Visão FindOne de um Bloco.
 *
 * Item da busca.
 */
export interface BlocoFindOneResult {
    /**
     * Campus.
     */
    campus: CampusFindOneResult;
    /**
     * Código do Bloco.
     */
    codigo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Nome do Bloco.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um ambiente.
 */
export interface AmbienteInputCreate {
    /**
     * Bloco que o ambiente/sala pertence.
     */
    bloco:      BlocoFindOneInput;
    capacidade: number | null;
    /**
     * Código do ambiente/sala.
     */
    codigo: string;
    /**
     * Descrição do ambiente/sala.
     */
    descricao: string;
    /**
     * Nome do ambiente/sala.
     */
    nome: string;
    tipo: null | string;
    [property: string]: any;
}

/**
 * Bloco que o ambiente/sala pertence.
 *
 * Dados de entrada para encontrar um Bloco por ID.
 */
export interface BlocoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um ambiente.
 */
export interface AmbienteInputUpdate {
    /**
     * Bloco que o ambiente/sala pertence.
     */
    bloco?:      BlocoFindOneInput;
    capacidade?: number | null;
    /**
     * Código do ambiente/sala.
     */
    codigo?: string;
    /**
     * Descrição do ambiente/sala.
     */
    descricao?: string;
    /**
     * Nome do ambiente/sala.
     */
    nome?: string;
    tipo?: null | string;
    [property: string]: any;
}

/**
 * Resultados da busca a Ambientes.
 */
export interface AmbienteFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: AmbienteFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Ambiente.
 *
 * Item da busca.
 *
 * Ambiente.
 *
 * Ambiente que foi reservado.
 *
 * Ambiente padrão.
 *
 * Ambiente padrão da sala de aula.
 *
 * Ambiente associado à aula.
 */
export interface AmbienteFindOneResult {
    /**
     * Bloco que o ambiente/sala pertence.
     */
    bloco:      BlocoFindOneResult;
    capacidade: number | null;
    /**
     * Código do ambiente/sala.
     */
    codigo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Descrição do ambiente/sala.
     */
    descricao: string;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Nome do ambiente/sala.
     */
    nome: string;
    tipo: null | string;
    [property: string]: any;
}

/**
 * Unnamed View
 *
 * Links da busca.
 */
export interface PaginatedResultLinks {
    current:  string;
    first:    null | string;
    last:     null | string;
    next:     null | string;
    previous: null | string;
    [property: string]: any;
}

/**
 * Metadados dos resultados de busca.
 *
 * Metadados da busca.
 */
export interface PaginatedResultMeta {
    /**
     * Página atual.
     */
    currentPage: number;
    /**
     * Filtros
     */
    filter: PaginatedResultMetaFilter[];
    /**
     * Quantidade de itens por página.
     */
    itemsPerPage: number;
    /**
     * Termo textual da busca.
     */
    search: string;
    /**
     * Ordenação.
     */
    sortBy: PaginatedSortBy[];
    /**
     * Total de itens.
     */
    totalItems: number;
    /**
     * Quantidade total de páginas.
     */
    totalPages: number;
    [property: string]: any;
}

/**
 * Visão completa de um Bloco.
 */
export interface Bloco {
    /**
     * Ambientes.
     */
    ambientes: AmbienteFindOneResult[];
    /**
     * Campus.
     */
    campus: CampusFindOneResult;
    /**
     * Código do Bloco.
     */
    codigo: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Nome do Bloco.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Bloco.
 */
export interface BlocoInputCreate {
    /**
     * Campus.
     */
    campus: CampusFindOneInput;
    /**
     * Código do Bloco.
     */
    codigo: string;
    /**
     * Nome do Bloco.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Bloco.
 */
export interface BlocoInputUpdate {
    /**
     * Campus.
     */
    campus?: CampusFindOneInput;
    /**
     * Código do Bloco.
     */
    codigo?: string;
    /**
     * Nome do Bloco.
     */
    nome?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Blocos.
 */
export interface BlocoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: BlocoFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão completa de um Campus.
 */
export interface Campus {
    /**
     * Apelido do Campus.
     */
    apelido: string;
    /**
     * CNPJ do Campus.
     */
    cnpj: string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Endereço do Campus
     */
    endereco: EnderecoFindOneResult;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Nome fantasia do Campus.
     */
    nomeFantasia: string;
    /**
     * Razão social do Campus.
     */
    razaoSocial: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Campus.
 */
export interface CampusInputCreate {
    /**
     * Apelido do Campus.
     */
    apelido: string;
    /**
     * CNPJ do Campus.
     */
    cnpj: string;
    /**
     * Endereço do Campus
     */
    endereco: EnderecoInput;
    /**
     * Nome fantasia do Campus.
     */
    nomeFantasia: string;
    /**
     * Razão social do Campus.
     */
    razaoSocial: string;
    [property: string]: any;
}

/**
 * Endereço do Campus
 *
 * Dados de entrada para um Endereco.
 */
export interface EnderecoInput {
    /**
     * Bairro
     */
    bairro: string;
    cep:    string;
    /**
     * Cidade
     */
    cidade:      CidadeFindOneInput;
    complemento: null | string;
    /**
     * Logradouro
     */
    logradouro: string;
    /**
     * Número
     */
    numero:          number;
    pontoReferencia: null | string;
    [property: string]: any;
}

/**
 * Cidade
 *
 * Dados de entrada para encontrar uma Cidade por ID.
 */
export interface CidadeFindOneInput {
    /**
     * ID do Registro.
     */
    id: number;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Campus.
 */
export interface CampusInputUpdate {
    /**
     * Apelido do Campus.
     */
    apelido?: string;
    /**
     * CNPJ do Campus.
     */
    cnpj?: string;
    /**
     * Endereço do Campus
     */
    endereco?: EnderecoInput;
    /**
     * Nome fantasia do Campus.
     */
    nomeFantasia?: string;
    /**
     * Razão social do Campus.
     */
    razaoSocial?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Campi.
 */
export interface CampusFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: CampusFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão completa de uma Cidade.
 */
export interface Cidade {
    /**
     * Estado da Cidade.
     */
    estado: EstadoFindOneResult;
    /**
     * ID do Registro.
     */
    id: number;
    /**
     * Nome oficial da Cidade.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Cidades.
 */
export interface CidadeFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: CidadeFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão completa de um Endereco.
 */
export interface Endereco {
    /**
     * Bairro
     */
    bairro: string;
    cep:    string;
    /**
     * Cidade
     */
    cidade:      CidadeFindOneResult;
    complemento: null | string;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Logradouro
     */
    logradouro: string;
    /**
     * Número
     */
    numero:          number;
    pontoReferencia: null | string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Endereco por ID.
 */
export interface EnderecoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Visão completa de um Estado.
 */
export interface Estado {
    /**
     * ID do Registro.
     */
    id: number;
    /**
     * Nome oficial do Estado.
     */
    nome: string;
    /**
     * Sigla do Estado.
     */
    sigla: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Estado por ID.
 */
export interface EstadoFindOneInput {
    /**
     * ID do Registro.
     */
    id: number;
    [property: string]: any;
}

/**
 * Resultados da busca a Estados.
 */
export interface EstadoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: EstadoFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão completa de uma Reserva.
 */
export interface Reserva {
    /**
     * Ambiente que foi reservado.
     */
    ambiente: AmbienteFindOneResult;
    /**
     * Data e hora de início da reserva.
     */
    dataInicio:  Date;
    dataTermino: Date | null;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:     string;
    motivo: null | string;
    /**
     * Situação da reserva.
     */
    situacao: string;
    tipo:     null | string;
    /**
     * Usuário que fez a reserva.
     */
    usuario: UsuarioFindOneResult;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar uma Reserva por ID.
 */
export interface ReservaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma Reserva.
 */
export interface ReservaInputCreate {
    /**
     * Ambiente que foi reservado.
     */
    ambiente: AmbienteFindOneInput;
    /**
     * Data e hora de início da reserva.
     */
    dataInicio:  Date;
    dataTermino: Date | null;
    motivo:      null | string;
    /**
     * Situação da reserva.
     */
    situacao: string;
    tipo:     null | string;
    /**
     * Usuário que fez a reserva.
     */
    usuario: UsuarioFindOneInput;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Ambiente por ID.
 *
 * Ambiente que foi reservado.
 *
 * Ambiente padrão.
 *
 * Ambiente padrão da sala de aula.
 *
 * Ambiente associado à aula.
 */
export interface AmbienteFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma Reserva.
 */
export interface ReservaInputUpdate {
    /**
     * Ambiente que foi reservado.
     */
    ambiente?: AmbienteFindOneInput;
    /**
     * Data e hora de início da reserva.
     */
    dataInicio?:  Date;
    dataTermino?: Date | null;
    motivo?:      null | string;
    /**
     * Situação da reserva.
     */
    situacao?: string;
    tipo?:     null | string;
    /**
     * Usuário que fez a reserva.
     */
    usuario?: UsuarioFindOneInput;
    [property: string]: any;
}

/**
 * Resultados da busca a Reservas.
 */
export interface ReservaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: ReservaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Reserva.
 *
 * Item da busca.
 */
export interface ReservaFindOneResult {
    /**
     * Ambiente que foi reservado.
     */
    ambiente: AmbienteFindOneResult;
    /**
     * Data e hora de início da reserva.
     */
    dataInicio:  Date;
    dataTermino: Date | null;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:     string;
    motivo: null | string;
    /**
     * Situação da reserva.
     */
    situacao: string;
    tipo:     null | string;
    /**
     * Usuário que fez a reserva.
     */
    usuario: UsuarioFindOneResult;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Curso {
    /**
     * Campus que o curso pertence.
     */
    campus: CampusFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Modalidade a que o curso pertence.
     */
    modalidade: ModalidadeFindOneResult;
    /**
     * Nome do curso.
     */
    nome: string;
    /**
     * Nome abreviado do curso.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Modalidade a que o curso pertence.
 *
 * Visão FindOne de uma Modalidade.
 *
 * Item da busca.
 *
 * Modalidade.
 */
export interface ModalidadeFindOneResult {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Nome da modalidade.
     */
    nome: string;
    /**
     * Slug da modalidade.
     */
    slug: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Curso.
 */
export interface CursoInputCreate {
    /**
     * Campus que o curso pertence.
     */
    campus: CampusFindOneInput;
    /**
     * Modalidade a que o curso pertence.
     */
    modalidade: ModalidadeFindOneInput;
    /**
     * Nome do curso.
     */
    nome: string;
    /**
     * Nome abreviado do curso.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Modalidade a que o curso pertence.
 *
 * Dados de entrada para encontrar uma Modalidade por ID.
 *
 * Modalidade.
 */
export interface ModalidadeFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Curso.
 */
export interface CursoInputUpdate {
    /**
     * Campus que o curso pertence.
     */
    campus?: CampusFindOneInput;
    /**
     * Modalidade a que o curso pertence.
     */
    modalidade?: ModalidadeFindOneInput;
    /**
     * Nome do curso.
     */
    nome?: string;
    /**
     * Nome abreviado do curso.
     */
    nomeAbreviado?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Cursos.
 */
export interface CursoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: CursoFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Curso.
 *
 * Item da busca.
 *
 * Curso da Turma.
 */
export interface CursoFindOneResult {
    /**
     * Campus que o curso pertence.
     */
    campus: CampusFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Modalidade a que o curso pertence.
     */
    modalidade: ModalidadeFindOneResult;
    /**
     * Nome do curso.
     */
    nome: string;
    /**
     * Nome abreviado do curso.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Diario {
    ambientePadrao: null | AmbienteFindOneResult;
    /**
     * Ano do diário.
     */
    ano: number;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina: DisciplinaFindOneResult;
    etapa:      null | string;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Situação do diário.
     */
    situacao: boolean;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneResult;
    [property: string]: any;
}

/**
 * Disciplina vinculada ao diário.
 *
 * Visão FindOne de uma Disciplina.
 *
 * Item da busca.
 */
export interface DisciplinaFindOneResult {
    /**
     * Carga horária da disciplina.
     */
    cargaHoraria: number;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Nome da disciplina.
     */
    nome: string;
    /**
     * Nome abreviado da disciplina.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Turma vinculada ao diário.
 *
 * Visão FindOne de uma Turma.
 *
 * Item da busca.
 *
 * Turma.
 */
export interface TurmaFindOneResult {
    ambientePadraoAula?: null | AmbienteFindOneResult;
    /**
     * Curso da Turma.
     */
    curso: CursoFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Período do Turma.
     */
    periodo: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Diario.
 */
export interface DiarioInputCreate {
    ambientePadrao: null | AmbienteFindOneInput;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina: DisciplinaFindOneInput;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneInput;
    [property: string]: any;
}

/**
 * Disciplina vinculada ao diário.
 *
 * Dados de entrada para encontrar uma Disciplina por ID.
 */
export interface DisciplinaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Turma vinculada ao diário.
 *
 * Dados de entrada para encontrar uma Turma por ID.
 *
 * Turma.
 */
export interface TurmaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Diario.
 */
export interface DiarioInputUpdate {
    ambientePadrao?: null | AmbienteFindOneInput;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina?: DisciplinaFindOneInput;
    /**
     * Turma vinculada ao diário.
     */
    turma?: TurmaFindOneInput;
    [property: string]: any;
}

/**
 * Resultados da busca a Diários.
 */
export interface DiarioFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: DiarioFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Diario.
 *
 * Item da busca.
 *
 * Diário vinculado.
 *
 * Diário associado à aula.
 */
export interface DiarioFindOneResult {
    ambientePadrao: null | AmbienteFindOneResult;
    /**
     * Ano do diário.
     */
    ano: number;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina: DisciplinaFindOneResult;
    etapa:      null | string;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Situação do diário.
     */
    situacao: boolean;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneResult;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface DiarioProfessor {
    /**
     * Diário vinculado.
     */
    diario: DiarioFindOneResult;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Situação do vínculo.
     */
    situacao: boolean;
    /**
     * Vínculo do usuário ao campus.
     */
    vinculo: VinculoFindOneResult;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um DiarioProfessor por ID.
 */
export interface DiarioProfessorFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um DiarioProfessor.
 */
export interface DiarioProfessorInputCreate {
    /**
     * Diário vinculado.
     */
    diario: DiarioFindOneInput;
    /**
     * Situação do vínculo.
     */
    situacao: boolean;
    /**
     * Vínculo do usuário ao campus.
     */
    vinculo: VinculoFindOneInput;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Diario por ID.
 *
 * Diário vinculado.
 *
 * Diário associado à aula.
 */
export interface DiarioFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Vínculo por ID.
 *
 * Vínculo do usuário ao campus.
 */
export interface VinculoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um DiarioProfessor.
 */
export interface DiarioProfessorInputUpdate {
    /**
     * Diário vinculado.
     */
    diario?: DiarioFindOneInput;
    /**
     * Situação do vínculo.
     */
    situacao?: boolean;
    /**
     * Vínculo do usuário ao campus.
     */
    vinculo?: VinculoFindOneInput;
    [property: string]: any;
}

/**
 * Resultados da busca a Diários.
 */
export interface DiarioProfessorFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: DiarioProfessorFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um DiarioProfessor.
 *
 * Item da busca.
 */
export interface DiarioProfessorFindOneResult {
    /**
     * Diário vinculado.
     */
    diario: DiarioFindOneResult;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Situação do vínculo.
     */
    situacao: boolean;
    /**
     * Vínculo do usuário ao campus.
     */
    vinculo: VinculoFindOneResult;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Modalidade {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Nome da modalidade.
     */
    nome: string;
    /**
     * Slug da modalidade.
     */
    slug: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma Modalidade.
 */
export interface ModalidadeInputCreate {
    /**
     * Nome da modalidade.
     */
    nome: string;
    /**
     * Slug da modalidade.
     */
    slug: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma Modalidade.
 */
export interface ModalidadeInputUpdate {
    /**
     * Nome da modalidade.
     */
    nome?: string;
    /**
     * Slug da modalidade.
     */
    slug?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Modalidades.
 */
export interface ModalidadeFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: ModalidadeFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Disciplina {
    /**
     * Carga horária da disciplina.
     */
    cargaHoraria: number;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Nome da disciplina.
     */
    nome: string;
    /**
     * Nome abreviado da disciplina.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma Disciplina.
 */
export interface DisciplinaInputCreate {
    /**
     * Carga horária da disciplina.
     */
    cargaHoraria: number;
    /**
     * Nome da disciplina.
     */
    nome: string;
    /**
     * Nome abreviado da disciplina.
     */
    nomeAbreviado: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma Disciplina.
 */
export interface DisciplinaInputUpdate {
    /**
     * Carga horária da disciplina.
     */
    cargaHoraria?: number;
    /**
     * Nome da disciplina.
     */
    nome?: string;
    /**
     * Nome abreviado da disciplina.
     */
    nomeAbreviado?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Disciplinas.
 */
export interface DisciplinaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: DisciplinaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Turma {
    ambientePadraoAula?: null | AmbienteFindOneResult;
    /**
     * Curso da Turma.
     */
    curso: CursoFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: null | ImagemFindOneResult;
    /**
     * Período do Turma.
     */
    periodo: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma Turma.
 */
export interface TurmaInputCreate {
    ambientePadraoAula?: null | AmbienteFindOneInput;
    /**
     * Curso da Turma.
     */
    curso: CursoFindOneInput;
    /**
     * Período do Turma.
     */
    periodo: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Curso por ID.
 *
 * Curso da Turma.
 */
export interface CursoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma Turma.
 */
export interface TurmaInputUpdate {
    ambientePadraoAula?: null | AmbienteFindOneInput;
    /**
     * Curso da Turma.
     */
    curso?: CursoFindOneInput;
    /**
     * Período do Turma.
     */
    periodo?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a Turmas.
 */
export interface TurmaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: TurmaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão completa de um IntervaloDeTempo.
 */
export interface IntervaloDeTempo {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Horário que o intervalo de tempo termina.
     */
    periodoFim: string;
    /**
     * Horário que o intervalo de tempo inicia.
     */
    periodoInicio: string;
    [property: string]: any;
}

/**
 * Visão completa de um CalendarioLetivo.
 */
export interface CalendarioLetivo {
    /**
     * Ano do calendário letivo.
     */
    ano: string;
    /**
     * Campus.
     */
    campus: CampusFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    modalidade: null | ModalidadeFindOneResult;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um CalendarioLetivo.
 */
export interface CalendarioLetivoInputCreate {
    /**
     * Ano do calendário letivo.
     */
    ano: string;
    /**
     * Campus.
     */
    campus:     CampusFindOneInput;
    modalidade: null | ModalidadeFindOneInput;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um CalendarioLetivo.
 */
export interface CalendarioLetivoInputUpdate {
    /**
     * Ano do calendário letivo.
     */
    ano?: string;
    /**
     * Campus.
     */
    campus?:     CampusFindOneInput;
    modalidade?: null | ModalidadeFindOneInput;
    /**
     * Nome do calendário letivo.
     */
    nome?: string;
    [property: string]: any;
}

/**
 * Resultados da busca a CalendarioLetivos.
 */
export interface CalendarioLetivoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: CalendarioLetivoFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um CalendarioLetivo.
 *
 * Item da busca.
 *
 * Calendario.
 */
export interface CalendarioLetivoFindOneResult {
    /**
     * Ano do calendário letivo.
     */
    ano: string;
    /**
     * Campus.
     */
    campus: CampusFindOneResult;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:         string;
    modalidade: null | ModalidadeFindOneResult;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
    [property: string]: any;
}

/**
 * Visão completa de um DiaCalendario.
 */
export interface DiaCalendario {
    calendario: null | CalendarioLetivoFindOneResult;
    /**
     * Data.
     */
    data: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Define que o dia é letivo.
     */
    diaLetivo: boolean;
    /**
     * Define que o dia é feriado.
     */
    feriado: boolean;
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um DiaCalendario por ID.
 */
export interface DiaCalendarioFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um DiaCalendario.
 */
export interface DiaCalendarioInputCreate {
    calendario: null | CalendarioLetivoFindOneInput;
    /**
     * Data.
     */
    data: Date;
    /**
     * Define que o dia é letivo.
     */
    diaLetivo: boolean;
    /**
     * Define que o dia é feriado.
     */
    feriado: boolean;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um CalendarioLetivo por ID.
 *
 * Calendario.
 */
export interface CalendarioLetivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 */
export interface DiaCalendarioInputUpdate {
    calendario?: null | CalendarioLetivoFindOneInput;
    /**
     * Data.
     */
    data?: Date;
    /**
     * Define que o dia é letivo.
     */
    diaLetivo?: boolean;
    /**
     * Define que o dia é feriado.
     */
    feriado?: boolean;
    [property: string]: any;
}

/**
 * Resultados da busca a DiaCalendarios.
 */
export interface DiaCalendarioFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: DiaCalendarioFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um DiaCalendario.
 *
 * Item da busca.
 */
export interface DiaCalendarioFindOneResult {
    calendario: null | CalendarioLetivoFindOneResult;
    /**
     * Data.
     */
    data: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Define que o dia é letivo.
     */
    diaLetivo: boolean;
    /**
     * Define que o dia é feriado.
     */
    feriado: boolean;
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Visão completa de um Etapa.
 */
export interface Etapa {
    calendario: null | CalendarioLetivoFindOneResult;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:     string;
    numero: number | null;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Etapa por ID.
 */
export interface EtapaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Etapa.
 */
export interface EtapaInputCreate {
    calendario: null | CalendarioLetivoFindOneInput;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    numero:      number | null;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Etapa.
 */
export interface EtapaInputUpdate {
    calendario?: null | CalendarioLetivoFindOneInput;
    cor?:        null | string;
    /**
     * Data de início.
     */
    dataInicio?: Date;
    /**
     * Data de término.
     */
    dataTermino?: Date;
    numero?:      number | null;
    [property: string]: any;
}

/**
 * Resultados da busca a Etapas.
 */
export interface EtapaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: EtapaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Etapa.
 *
 * Item da busca.
 */
export interface EtapaFindOneResult {
    calendario: null | CalendarioLetivoFindOneResult;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:     string;
    numero: number | null;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface Aula {
    ambiente: null | AmbienteFindOneResult;
    /**
     * Data da aula.
     */
    data: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Diário associado à aula.
     */
    diario:  DiarioFindOneResult;
    formato: null | string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Intervalo de Tempo associado à aula.
     */
    intervaloDeTempo: IntervaloDeTempoFindOneResult;
    [property: string]: any;
}

/**
 * Visão FindOne de um IntervaloDeTempo.
 *
 * Intervalo de Tempo associado à aula.
 *
 * Intervalo de tempo.
 */
export interface IntervaloDeTempoFindOneResult {
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Horário que o intervalo de tempo termina.
     */
    periodoFim: string;
    /**
     * Horário que o intervalo de tempo inicia.
     */
    periodoInicio: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar uma Aula por ID.
 */
export interface AulaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma Aula.
 */
export interface AulaInputCreate {
    ambiente: null | AmbienteFindOneInput;
    /**
     * Data da aula.
     */
    data: Date;
    /**
     * Diário associado à aula.
     */
    diario:  DiarioFindOneInput;
    formato: null | string;
    /**
     * Intervalo de Tempo associado à aula.
     */
    intervaloDeTempo: IntervaloDeTempoInput;
    [property: string]: any;
}

/**
 * Dados de entrada para um IntervaloDeTempo.
 *
 * Intervalo de Tempo associado à aula.
 *
 * Intervalo de tempo.
 */
export interface IntervaloDeTempoInput {
    /**
     * Horário que o intervalo de tempo termina.
     */
    periodoFim: string;
    /**
     * Horário que o intervalo de tempo inicia.
     */
    periodoInicio: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma Aula.
 */
export interface AulaInputUpdate {
    ambiente?: null | AmbienteFindOneInput;
    /**
     * Data da aula.
     */
    data?: Date;
    /**
     * Diário associado à aula.
     */
    diario?:  DiarioFindOneInput;
    formato?: null | string;
    /**
     * Intervalo de Tempo associado à aula.
     */
    intervaloDeTempo?: IntervaloDeTempoInput;
    [property: string]: any;
}

/**
 * Resultados da busca a Aulas.
 */
export interface AulaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: AulaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de uma Aula.
 *
 * Item da busca.
 */
export interface AulaFindOneResult {
    ambiente: null | AmbienteFindOneResult;
    /**
     * Data da aula.
     */
    data: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * Diário associado à aula.
     */
    diario:  DiarioFindOneResult;
    formato: null | string;
    /**
     * ID do Registro.
     */
    id: string;
    /**
     * Intervalo de Tempo associado à aula.
     */
    intervaloDeTempo: IntervaloDeTempoFindOneResult;
    [property: string]: any;
}

/**
 * Visão completa de um Evento.
 */
export interface Evento {
    calendario: null | CalendarioLetivoFindOneResult;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:   string;
    nome: null | string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Evento por ID.
 */
export interface EventoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de um Evento.
 */
export interface EventoInputCreate {
    calendario: null | CalendarioLetivoFindOneInput;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    nome:        null | string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de um Evento.
 */
export interface EventoInputUpdate {
    calendario?: null | CalendarioLetivoFindOneInput;
    cor?:        null | string;
    /**
     * Data de início.
     */
    dataInicio?: Date;
    /**
     * Data de término.
     */
    dataTermino?: Date;
    nome?:        null | string;
    [property: string]: any;
}

/**
 * Resultados da busca a Eventos.
 */
export interface EventoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: EventoFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de um Evento.
 *
 * Item da busca.
 */
export interface EventoFindOneResult {
    calendario: null | CalendarioLetivoFindOneResult;
    cor:        null | string;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de término.
     */
    dataTermino: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:   string;
    nome: null | string;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface TurmaDisponibilidade {
    dataFim: Date | null;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:    string;
    turma: null | TurmaFindOneResult;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeInputCreate {
    dataFim: Date | null;
    /**
     * Data de início.
     */
    dataInicio: Date;
    turma:      null | TurmaFindOneInput;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidade.
 */
export interface TurmaDisponibilidadeInputUpdate {
    dataFim?: Date | null;
    /**
     * Data de início.
     */
    dataInicio?: Date;
    turma?:      null | TurmaFindOneInput;
    [property: string]: any;
}

/**
 * Resultados da busca a TurmaDisponibilidades.
 */
export interface TurmaDisponibilidadeFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: TurmaDisponibilidadeFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de uma TurmaDisponibilidade.
 *
 * Item da busca.
 *
 * Disponibilidade da turma.
 */
export interface TurmaDisponibilidadeFindOneResult {
    dataFim: Date | null;
    /**
     * Data de início.
     */
    dataInicio: Date;
    /**
     * Data de Criação do Registro.
     */
    dateCreated: Date;
    dateDeleted: Date | null;
    /**
     * Data de Atualização do Registro.
     */
    dateUpdated: Date;
    /**
     * ID do Registro.
     */
    id:    string;
    turma: null | TurmaFindOneResult;
    [property: string]: any;
}

/**
 * Unnamed View
 */
export interface TurmaDisponibilidadeDia {
    /**
     * Dia da semana.
     */
    diaSemanaIso: number;
    /**
     * ID do Registro.
     */
    id:                   string;
    intervaloDeTempo:     null | IntervaloDeTempoFindOneResult;
    turmaDisponibilidade: null | TurmaDisponibilidadeFindOneResult;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar uma TurmaDisponibilidadeDia por ID.
 */
export interface TurmaDisponibilidadeDiaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidadeDia.
 */
export interface TurmaDisponibilidadeDiaInputCreate {
    /**
     * Dia da semana.
     */
    diaSemanaIso:         number;
    intervaloDeTempo:     null | IntervaloDeTempoInput;
    turmaDisponibilidade: null | TurmaDisponibilidadeFindOneInput;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar uma TurmaDisponibilidade por ID.
 *
 * Disponibilidade da turma.
 */
export interface TurmaDisponibilidadeFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidadeDia.
 */
export interface TurmaDisponibilidadeDiaInputUpdate {
    /**
     * Dia da semana.
     */
    diaSemanaIso?:         number;
    intervaloDeTempo?:     null | IntervaloDeTempoInput;
    turmaDisponibilidade?: null | TurmaDisponibilidadeFindOneInput;
    [property: string]: any;
}

/**
 * Resultados da busca a TurmaDisponibilidadeDias.
 */
export interface TurmaDisponibilidadeDiaFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: TurmaDisponibilidadeDiaFindOneResult[];
    /**
     * Links da busca.
     */
    links: PaginatedResultLinks;
    /**
     * Metadados da busca.
     */
    meta: PaginatedResultMeta;
    [property: string]: any;
}

/**
 * Visão FindOne de uma TurmaDisponibilidadeDia.
 *
 * Item da busca.
 */
export interface TurmaDisponibilidadeDiaFindOneResult {
    /**
     * Dia da semana.
     */
    diaSemanaIso: number;
    /**
     * ID do Registro.
     */
    id:                   string;
    intervaloDeTempo:     null | IntervaloDeTempoFindOneResult;
    turmaDisponibilidade: null | TurmaDisponibilidadeFindOneResult;
    [property: string]: any;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPaginatedSortBy(json: string): PaginatedSortBy {
        return cast(JSON.parse(json), r("PaginatedSortBy"));
    }

    public static paginatedSortByToJson(value: PaginatedSortBy): string {
        return JSON.stringify(uncast(value, r("PaginatedSortBy")), null, 2);
    }

    public static toPaginatedResultMetaFilter(json: string): PaginatedResultMetaFilter {
        return cast(JSON.parse(json), r("PaginatedResultMetaFilter"));
    }

    public static paginatedResultMetaFilterToJson(value: PaginatedResultMetaFilter): string {
        return JSON.stringify(uncast(value, r("PaginatedResultMetaFilter")), null, 2);
    }

    public static toPaginatedResultMeta(json: string): PaginatedResultMeta {
        return cast(JSON.parse(json), r("PaginatedResultMeta"));
    }

    public static paginatedResultMetaToJson(value: PaginatedResultMeta): string {
        return JSON.stringify(uncast(value, r("PaginatedResultMeta")), null, 2);
    }

    public static toPaginatedResultLinks(json: string): PaginatedResultLinks {
        return cast(JSON.parse(json), r("PaginatedResultLinks"));
    }

    public static paginatedResultLinksToJson(value: PaginatedResultLinks): string {
        return JSON.stringify(uncast(value, r("PaginatedResultLinks")), null, 2);
    }

    public static toPaginatedBaseInput(json: string): PaginatedBaseInput {
        return cast(JSON.parse(json), r("PaginatedBaseInput"));
    }

    public static paginatedBaseInputToJson(value: PaginatedBaseInput): string {
        return JSON.stringify(uncast(value, r("PaginatedBaseInput")), null, 2);
    }

    public static toPaginatedInput(json: string): PaginatedInput {
        return cast(JSON.parse(json), r("PaginatedInput"));
    }

    public static paginatedInputToJson(value: PaginatedInput): string {
        return JSON.stringify(uncast(value, r("PaginatedInput")), null, 2);
    }

    public static toSearch(json: string): Search {
        return cast(JSON.parse(json), r("Search"));
    }

    public static searchToJson(value: Search): string {
        return JSON.stringify(uncast(value, r("Search")), null, 2);
    }

    public static toArquivo(json: string): Arquivo {
        return cast(JSON.parse(json), r("Arquivo"));
    }

    public static arquivoToJson(value: Arquivo): string {
        return JSON.stringify(uncast(value, r("Arquivo")), null, 2);
    }

    public static toArquivoFindOneInput(json: string): ArquivoFindOneInput {
        return cast(JSON.parse(json), r("ArquivoFindOneInput"));
    }

    public static arquivoFindOneInputToJson(value: ArquivoFindOneInput): string {
        return JSON.stringify(uncast(value, r("ArquivoFindOneInput")), null, 2);
    }

    public static toArquivoFindOneResult(json: string): ArquivoFindOneResult {
        return cast(JSON.parse(json), r("ArquivoFindOneResult"));
    }

    public static arquivoFindOneResultToJson(value: ArquivoFindOneResult): string {
        return JSON.stringify(uncast(value, r("ArquivoFindOneResult")), null, 2);
    }

    public static toImagem(json: string): Imagem {
        return cast(JSON.parse(json), r("Imagem"));
    }

    public static imagemToJson(value: Imagem): string {
        return JSON.stringify(uncast(value, r("Imagem")), null, 2);
    }

    public static toImagemFindOneInput(json: string): ImagemFindOneInput {
        return cast(JSON.parse(json), r("ImagemFindOneInput"));
    }

    public static imagemFindOneInputToJson(value: ImagemFindOneInput): string {
        return JSON.stringify(uncast(value, r("ImagemFindOneInput")), null, 2);
    }

    public static toImagemFindOneFromImagemArquivoResult(json: string): ImagemFindOneFromImagemArquivoResult {
        return cast(JSON.parse(json), r("ImagemFindOneFromImagemArquivoResult"));
    }

    public static imagemFindOneFromImagemArquivoResultToJson(value: ImagemFindOneFromImagemArquivoResult): string {
        return JSON.stringify(uncast(value, r("ImagemFindOneFromImagemArquivoResult")), null, 2);
    }

    public static toImagemFindOneResult(json: string): ImagemFindOneResult {
        return cast(JSON.parse(json), r("ImagemFindOneResult"));
    }

    public static imagemFindOneResultToJson(value: ImagemFindOneResult): string {
        return JSON.stringify(uncast(value, r("ImagemFindOneResult")), null, 2);
    }

    public static toImagemArquivo(json: string): ImagemArquivo {
        return cast(JSON.parse(json), r("ImagemArquivo"));
    }

    public static imagemArquivoToJson(value: ImagemArquivo): string {
        return JSON.stringify(uncast(value, r("ImagemArquivo")), null, 2);
    }

    public static toImagemArquivoFindOneInput(json: string): ImagemArquivoFindOneInput {
        return cast(JSON.parse(json), r("ImagemArquivoFindOneInput"));
    }

    public static imagemArquivoFindOneInputToJson(value: ImagemArquivoFindOneInput): string {
        return JSON.stringify(uncast(value, r("ImagemArquivoFindOneInput")), null, 2);
    }

    public static toImagemArquivoFindOneFromImagemResult(json: string): ImagemArquivoFindOneFromImagemResult {
        return cast(JSON.parse(json), r("ImagemArquivoFindOneFromImagemResult"));
    }

    public static imagemArquivoFindOneFromImagemResultToJson(value: ImagemArquivoFindOneFromImagemResult): string {
        return JSON.stringify(uncast(value, r("ImagemArquivoFindOneFromImagemResult")), null, 2);
    }

    public static toImagemArquivoFindOneResult(json: string): ImagemArquivoFindOneResult {
        return cast(JSON.parse(json), r("ImagemArquivoFindOneResult"));
    }

    public static imagemArquivoFindOneResultToJson(value: ImagemArquivoFindOneResult): string {
        return JSON.stringify(uncast(value, r("ImagemArquivoFindOneResult")), null, 2);
    }

    public static toAuthLoginInput(json: string): AuthLoginInput {
        return cast(JSON.parse(json), r("AuthLoginInput"));
    }

    public static authLoginInputToJson(value: AuthLoginInput): string {
        return JSON.stringify(uncast(value, r("AuthLoginInput")), null, 2);
    }

    public static toAuthRefreshInput(json: string): AuthRefreshInput {
        return cast(JSON.parse(json), r("AuthRefreshInput"));
    }

    public static authRefreshInputToJson(value: AuthRefreshInput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshInput")), null, 2);
    }

    public static toAuthWhoAmIResult(json: string): AuthWhoAmIResult {
        return cast(JSON.parse(json), r("AuthWhoAmIResult"));
    }

    public static authWhoAmIResultToJson(value: AuthWhoAmIResult): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmIResult")), null, 2);
    }

    public static toAuthSessionCredentials(json: string): AuthSessionCredentials {
        return cast(JSON.parse(json), r("AuthSessionCredentials"));
    }

    public static authSessionCredentialsToJson(value: AuthSessionCredentials): string {
        return JSON.stringify(uncast(value, r("AuthSessionCredentials")), null, 2);
    }

    public static toAuthSetInitialPasswordInput(json: string): AuthSetInitialPasswordInput {
        return cast(JSON.parse(json), r("AuthSetInitialPasswordInput"));
    }

    public static authSetInitialPasswordInputToJson(value: AuthSetInitialPasswordInput): string {
        return JSON.stringify(uncast(value, r("AuthSetInitialPasswordInput")), null, 2);
    }

    public static toUsuario(json: string): Usuario {
        return cast(JSON.parse(json), r("Usuario"));
    }

    public static usuarioToJson(value: Usuario): string {
        return JSON.stringify(uncast(value, r("Usuario")), null, 2);
    }

    public static toUsuarioFindOneInput(json: string): UsuarioFindOneInput {
        return cast(JSON.parse(json), r("UsuarioFindOneInput"));
    }

    public static usuarioFindOneInputToJson(value: UsuarioFindOneInput): string {
        return JSON.stringify(uncast(value, r("UsuarioFindOneInput")), null, 2);
    }

    public static toUsuarioFindOneResult(json: string): UsuarioFindOneResult {
        return cast(JSON.parse(json), r("UsuarioFindOneResult"));
    }

    public static usuarioFindOneResultToJson(value: UsuarioFindOneResult): string {
        return JSON.stringify(uncast(value, r("UsuarioFindOneResult")), null, 2);
    }

    public static toUsuarioInputCreate(json: string): UsuarioInputCreate {
        return cast(JSON.parse(json), r("UsuarioInputCreate"));
    }

    public static usuarioInputCreateToJson(value: UsuarioInputCreate): string {
        return JSON.stringify(uncast(value, r("UsuarioInputCreate")), null, 2);
    }

    public static toUsuarioInputUpdate(json: string): UsuarioInputUpdate {
        return cast(JSON.parse(json), r("UsuarioInputUpdate"));
    }

    public static usuarioInputUpdateToJson(value: UsuarioInputUpdate): string {
        return JSON.stringify(uncast(value, r("UsuarioInputUpdate")), null, 2);
    }

    public static toVinculo(json: string): Vinculo {
        return cast(JSON.parse(json), r("Vinculo"));
    }

    public static vinculoToJson(value: Vinculo): string {
        return JSON.stringify(uncast(value, r("Vinculo")), null, 2);
    }

    public static toVinculoFindOneInput(json: string): VinculoFindOneInput {
        return cast(JSON.parse(json), r("VinculoFindOneInput"));
    }

    public static vinculoFindOneInputToJson(value: VinculoFindOneInput): string {
        return JSON.stringify(uncast(value, r("VinculoFindOneInput")), null, 2);
    }

    public static toVinculoFindOneResult(json: string): VinculoFindOneResult {
        return cast(JSON.parse(json), r("VinculoFindOneResult"));
    }

    public static vinculoFindOneResultToJson(value: VinculoFindOneResult): string {
        return JSON.stringify(uncast(value, r("VinculoFindOneResult")), null, 2);
    }

    public static toVinculoUpdate(json: string): VinculoUpdate {
        return cast(JSON.parse(json), r("VinculoUpdate"));
    }

    public static vinculoUpdateToJson(value: VinculoUpdate): string {
        return JSON.stringify(uncast(value, r("VinculoUpdate")), null, 2);
    }

    public static toAmbiente(json: string): Ambiente {
        return cast(JSON.parse(json), r("Ambiente"));
    }

    public static ambienteToJson(value: Ambiente): string {
        return JSON.stringify(uncast(value, r("Ambiente")), null, 2);
    }

    public static toAmbienteFindOneInput(json: string): AmbienteFindOneInput {
        return cast(JSON.parse(json), r("AmbienteFindOneInput"));
    }

    public static ambienteFindOneInputToJson(value: AmbienteFindOneInput): string {
        return JSON.stringify(uncast(value, r("AmbienteFindOneInput")), null, 2);
    }

    public static toAmbienteFindOneResult(json: string): AmbienteFindOneResult {
        return cast(JSON.parse(json), r("AmbienteFindOneResult"));
    }

    public static ambienteFindOneResultToJson(value: AmbienteFindOneResult): string {
        return JSON.stringify(uncast(value, r("AmbienteFindOneResult")), null, 2);
    }

    public static toAmbienteInputCreate(json: string): AmbienteInputCreate {
        return cast(JSON.parse(json), r("AmbienteInputCreate"));
    }

    public static ambienteInputCreateToJson(value: AmbienteInputCreate): string {
        return JSON.stringify(uncast(value, r("AmbienteInputCreate")), null, 2);
    }

    public static toAmbienteInputUpdate(json: string): AmbienteInputUpdate {
        return cast(JSON.parse(json), r("AmbienteInputUpdate"));
    }

    public static ambienteInputUpdateToJson(value: AmbienteInputUpdate): string {
        return JSON.stringify(uncast(value, r("AmbienteInputUpdate")), null, 2);
    }

    public static toAmbienteFindAllResult(json: string): AmbienteFindAllResult {
        return cast(JSON.parse(json), r("AmbienteFindAllResult"));
    }

    public static ambienteFindAllResultToJson(value: AmbienteFindAllResult): string {
        return JSON.stringify(uncast(value, r("AmbienteFindAllResult")), null, 2);
    }

    public static toBloco(json: string): Bloco {
        return cast(JSON.parse(json), r("Bloco"));
    }

    public static blocoToJson(value: Bloco): string {
        return JSON.stringify(uncast(value, r("Bloco")), null, 2);
    }

    public static toBlocoFindOneInput(json: string): BlocoFindOneInput {
        return cast(JSON.parse(json), r("BlocoFindOneInput"));
    }

    public static blocoFindOneInputToJson(value: BlocoFindOneInput): string {
        return JSON.stringify(uncast(value, r("BlocoFindOneInput")), null, 2);
    }

    public static toBlocoFindOneResult(json: string): BlocoFindOneResult {
        return cast(JSON.parse(json), r("BlocoFindOneResult"));
    }

    public static blocoFindOneResultToJson(value: BlocoFindOneResult): string {
        return JSON.stringify(uncast(value, r("BlocoFindOneResult")), null, 2);
    }

    public static toBlocoInputCreate(json: string): BlocoInputCreate {
        return cast(JSON.parse(json), r("BlocoInputCreate"));
    }

    public static blocoInputCreateToJson(value: BlocoInputCreate): string {
        return JSON.stringify(uncast(value, r("BlocoInputCreate")), null, 2);
    }

    public static toBlocoInputUpdate(json: string): BlocoInputUpdate {
        return cast(JSON.parse(json), r("BlocoInputUpdate"));
    }

    public static blocoInputUpdateToJson(value: BlocoInputUpdate): string {
        return JSON.stringify(uncast(value, r("BlocoInputUpdate")), null, 2);
    }

    public static toBlocoFindAllResult(json: string): BlocoFindAllResult {
        return cast(JSON.parse(json), r("BlocoFindAllResult"));
    }

    public static blocoFindAllResultToJson(value: BlocoFindAllResult): string {
        return JSON.stringify(uncast(value, r("BlocoFindAllResult")), null, 2);
    }

    public static toCampus(json: string): Campus {
        return cast(JSON.parse(json), r("Campus"));
    }

    public static campusToJson(value: Campus): string {
        return JSON.stringify(uncast(value, r("Campus")), null, 2);
    }

    public static toCampusFindOneInput(json: string): CampusFindOneInput {
        return cast(JSON.parse(json), r("CampusFindOneInput"));
    }

    public static campusFindOneInputToJson(value: CampusFindOneInput): string {
        return JSON.stringify(uncast(value, r("CampusFindOneInput")), null, 2);
    }

    public static toCampusFindOneResult(json: string): CampusFindOneResult {
        return cast(JSON.parse(json), r("CampusFindOneResult"));
    }

    public static campusFindOneResultToJson(value: CampusFindOneResult): string {
        return JSON.stringify(uncast(value, r("CampusFindOneResult")), null, 2);
    }

    public static toCampusInputCreate(json: string): CampusInputCreate {
        return cast(JSON.parse(json), r("CampusInputCreate"));
    }

    public static campusInputCreateToJson(value: CampusInputCreate): string {
        return JSON.stringify(uncast(value, r("CampusInputCreate")), null, 2);
    }

    public static toCampusInputUpdate(json: string): CampusInputUpdate {
        return cast(JSON.parse(json), r("CampusInputUpdate"));
    }

    public static campusInputUpdateToJson(value: CampusInputUpdate): string {
        return JSON.stringify(uncast(value, r("CampusInputUpdate")), null, 2);
    }

    public static toCampusFindAllResult(json: string): CampusFindAllResult {
        return cast(JSON.parse(json), r("CampusFindAllResult"));
    }

    public static campusFindAllResultToJson(value: CampusFindAllResult): string {
        return JSON.stringify(uncast(value, r("CampusFindAllResult")), null, 2);
    }

    public static toCidade(json: string): Cidade {
        return cast(JSON.parse(json), r("Cidade"));
    }

    public static cidadeToJson(value: Cidade): string {
        return JSON.stringify(uncast(value, r("Cidade")), null, 2);
    }

    public static toCidadeFindOneInput(json: string): CidadeFindOneInput {
        return cast(JSON.parse(json), r("CidadeFindOneInput"));
    }

    public static cidadeFindOneInputToJson(value: CidadeFindOneInput): string {
        return JSON.stringify(uncast(value, r("CidadeFindOneInput")), null, 2);
    }

    public static toCidadeFindOneResult(json: string): CidadeFindOneResult {
        return cast(JSON.parse(json), r("CidadeFindOneResult"));
    }

    public static cidadeFindOneResultToJson(value: CidadeFindOneResult): string {
        return JSON.stringify(uncast(value, r("CidadeFindOneResult")), null, 2);
    }

    public static toCidadeFindAllResult(json: string): CidadeFindAllResult {
        return cast(JSON.parse(json), r("CidadeFindAllResult"));
    }

    public static cidadeFindAllResultToJson(value: CidadeFindAllResult): string {
        return JSON.stringify(uncast(value, r("CidadeFindAllResult")), null, 2);
    }

    public static toEndereco(json: string): Endereco {
        return cast(JSON.parse(json), r("Endereco"));
    }

    public static enderecoToJson(value: Endereco): string {
        return JSON.stringify(uncast(value, r("Endereco")), null, 2);
    }

    public static toEnderecoFindOneInput(json: string): EnderecoFindOneInput {
        return cast(JSON.parse(json), r("EnderecoFindOneInput"));
    }

    public static enderecoFindOneInputToJson(value: EnderecoFindOneInput): string {
        return JSON.stringify(uncast(value, r("EnderecoFindOneInput")), null, 2);
    }

    public static toEnderecoFindOneResult(json: string): EnderecoFindOneResult {
        return cast(JSON.parse(json), r("EnderecoFindOneResult"));
    }

    public static enderecoFindOneResultToJson(value: EnderecoFindOneResult): string {
        return JSON.stringify(uncast(value, r("EnderecoFindOneResult")), null, 2);
    }

    public static toEnderecoInput(json: string): EnderecoInput {
        return cast(JSON.parse(json), r("EnderecoInput"));
    }

    public static enderecoInputToJson(value: EnderecoInput): string {
        return JSON.stringify(uncast(value, r("EnderecoInput")), null, 2);
    }

    public static toEstado(json: string): Estado {
        return cast(JSON.parse(json), r("Estado"));
    }

    public static estadoToJson(value: Estado): string {
        return JSON.stringify(uncast(value, r("Estado")), null, 2);
    }

    public static toEstadoFindOneInput(json: string): EstadoFindOneInput {
        return cast(JSON.parse(json), r("EstadoFindOneInput"));
    }

    public static estadoFindOneInputToJson(value: EstadoFindOneInput): string {
        return JSON.stringify(uncast(value, r("EstadoFindOneInput")), null, 2);
    }

    public static toEstadoFindOneResult(json: string): EstadoFindOneResult {
        return cast(JSON.parse(json), r("EstadoFindOneResult"));
    }

    public static estadoFindOneResultToJson(value: EstadoFindOneResult): string {
        return JSON.stringify(uncast(value, r("EstadoFindOneResult")), null, 2);
    }

    public static toEstadoFindAllResult(json: string): EstadoFindAllResult {
        return cast(JSON.parse(json), r("EstadoFindAllResult"));
    }

    public static estadoFindAllResultToJson(value: EstadoFindAllResult): string {
        return JSON.stringify(uncast(value, r("EstadoFindAllResult")), null, 2);
    }

    public static toReserva(json: string): Reserva {
        return cast(JSON.parse(json), r("Reserva"));
    }

    public static reservaToJson(value: Reserva): string {
        return JSON.stringify(uncast(value, r("Reserva")), null, 2);
    }

    public static toReservaFindOneInput(json: string): ReservaFindOneInput {
        return cast(JSON.parse(json), r("ReservaFindOneInput"));
    }

    public static reservaFindOneInputToJson(value: ReservaFindOneInput): string {
        return JSON.stringify(uncast(value, r("ReservaFindOneInput")), null, 2);
    }

    public static toReservaFindOneResult(json: string): ReservaFindOneResult {
        return cast(JSON.parse(json), r("ReservaFindOneResult"));
    }

    public static reservaFindOneResultToJson(value: ReservaFindOneResult): string {
        return JSON.stringify(uncast(value, r("ReservaFindOneResult")), null, 2);
    }

    public static toReservaInputCreate(json: string): ReservaInputCreate {
        return cast(JSON.parse(json), r("ReservaInputCreate"));
    }

    public static reservaInputCreateToJson(value: ReservaInputCreate): string {
        return JSON.stringify(uncast(value, r("ReservaInputCreate")), null, 2);
    }

    public static toReservaInputUpdate(json: string): ReservaInputUpdate {
        return cast(JSON.parse(json), r("ReservaInputUpdate"));
    }

    public static reservaInputUpdateToJson(value: ReservaInputUpdate): string {
        return JSON.stringify(uncast(value, r("ReservaInputUpdate")), null, 2);
    }

    public static toReservaFindAllResult(json: string): ReservaFindAllResult {
        return cast(JSON.parse(json), r("ReservaFindAllResult"));
    }

    public static reservaFindAllResultToJson(value: ReservaFindAllResult): string {
        return JSON.stringify(uncast(value, r("ReservaFindAllResult")), null, 2);
    }

    public static toCurso(json: string): Curso {
        return cast(JSON.parse(json), r("Curso"));
    }

    public static cursoToJson(value: Curso): string {
        return JSON.stringify(uncast(value, r("Curso")), null, 2);
    }

    public static toCursoFindOneInput(json: string): CursoFindOneInput {
        return cast(JSON.parse(json), r("CursoFindOneInput"));
    }

    public static cursoFindOneInputToJson(value: CursoFindOneInput): string {
        return JSON.stringify(uncast(value, r("CursoFindOneInput")), null, 2);
    }

    public static toCursoFindOneResult(json: string): CursoFindOneResult {
        return cast(JSON.parse(json), r("CursoFindOneResult"));
    }

    public static cursoFindOneResultToJson(value: CursoFindOneResult): string {
        return JSON.stringify(uncast(value, r("CursoFindOneResult")), null, 2);
    }

    public static toCursoInputCreate(json: string): CursoInputCreate {
        return cast(JSON.parse(json), r("CursoInputCreate"));
    }

    public static cursoInputCreateToJson(value: CursoInputCreate): string {
        return JSON.stringify(uncast(value, r("CursoInputCreate")), null, 2);
    }

    public static toCursoInputUpdate(json: string): CursoInputUpdate {
        return cast(JSON.parse(json), r("CursoInputUpdate"));
    }

    public static cursoInputUpdateToJson(value: CursoInputUpdate): string {
        return JSON.stringify(uncast(value, r("CursoInputUpdate")), null, 2);
    }

    public static toCursoFindAllResult(json: string): CursoFindAllResult {
        return cast(JSON.parse(json), r("CursoFindAllResult"));
    }

    public static cursoFindAllResultToJson(value: CursoFindAllResult): string {
        return JSON.stringify(uncast(value, r("CursoFindAllResult")), null, 2);
    }

    public static toDiario(json: string): Diario {
        return cast(JSON.parse(json), r("Diario"));
    }

    public static diarioToJson(value: Diario): string {
        return JSON.stringify(uncast(value, r("Diario")), null, 2);
    }

    public static toDiarioFindOneInput(json: string): DiarioFindOneInput {
        return cast(JSON.parse(json), r("DiarioFindOneInput"));
    }

    public static diarioFindOneInputToJson(value: DiarioFindOneInput): string {
        return JSON.stringify(uncast(value, r("DiarioFindOneInput")), null, 2);
    }

    public static toDiarioFindOneResult(json: string): DiarioFindOneResult {
        return cast(JSON.parse(json), r("DiarioFindOneResult"));
    }

    public static diarioFindOneResultToJson(value: DiarioFindOneResult): string {
        return JSON.stringify(uncast(value, r("DiarioFindOneResult")), null, 2);
    }

    public static toDiarioInputCreate(json: string): DiarioInputCreate {
        return cast(JSON.parse(json), r("DiarioInputCreate"));
    }

    public static diarioInputCreateToJson(value: DiarioInputCreate): string {
        return JSON.stringify(uncast(value, r("DiarioInputCreate")), null, 2);
    }

    public static toDiarioInputUpdate(json: string): DiarioInputUpdate {
        return cast(JSON.parse(json), r("DiarioInputUpdate"));
    }

    public static diarioInputUpdateToJson(value: DiarioInputUpdate): string {
        return JSON.stringify(uncast(value, r("DiarioInputUpdate")), null, 2);
    }

    public static toDiarioFindAllResult(json: string): DiarioFindAllResult {
        return cast(JSON.parse(json), r("DiarioFindAllResult"));
    }

    public static diarioFindAllResultToJson(value: DiarioFindAllResult): string {
        return JSON.stringify(uncast(value, r("DiarioFindAllResult")), null, 2);
    }

    public static toDiarioProfessor(json: string): DiarioProfessor {
        return cast(JSON.parse(json), r("DiarioProfessor"));
    }

    public static diarioProfessorToJson(value: DiarioProfessor): string {
        return JSON.stringify(uncast(value, r("DiarioProfessor")), null, 2);
    }

    public static toDiarioProfessorFindOneInput(json: string): DiarioProfessorFindOneInput {
        return cast(JSON.parse(json), r("DiarioProfessorFindOneInput"));
    }

    public static diarioProfessorFindOneInputToJson(value: DiarioProfessorFindOneInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindOneInput")), null, 2);
    }

    public static toDiarioProfessorFindOneResult(json: string): DiarioProfessorFindOneResult {
        return cast(JSON.parse(json), r("DiarioProfessorFindOneResult"));
    }

    public static diarioProfessorFindOneResultToJson(value: DiarioProfessorFindOneResult): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindOneResult")), null, 2);
    }

    public static toDiarioProfessorInputCreate(json: string): DiarioProfessorInputCreate {
        return cast(JSON.parse(json), r("DiarioProfessorInputCreate"));
    }

    public static diarioProfessorInputCreateToJson(value: DiarioProfessorInputCreate): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorInputCreate")), null, 2);
    }

    public static toDiarioProfessorInputUpdate(json: string): DiarioProfessorInputUpdate {
        return cast(JSON.parse(json), r("DiarioProfessorInputUpdate"));
    }

    public static diarioProfessorInputUpdateToJson(value: DiarioProfessorInputUpdate): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorInputUpdate")), null, 2);
    }

    public static toDiarioProfessorFindAllResult(json: string): DiarioProfessorFindAllResult {
        return cast(JSON.parse(json), r("DiarioProfessorFindAllResult"));
    }

    public static diarioProfessorFindAllResultToJson(value: DiarioProfessorFindAllResult): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindAllResult")), null, 2);
    }

    public static toModalidade(json: string): Modalidade {
        return cast(JSON.parse(json), r("Modalidade"));
    }

    public static modalidadeToJson(value: Modalidade): string {
        return JSON.stringify(uncast(value, r("Modalidade")), null, 2);
    }

    public static toModalidadeFindOneInput(json: string): ModalidadeFindOneInput {
        return cast(JSON.parse(json), r("ModalidadeFindOneInput"));
    }

    public static modalidadeFindOneInputToJson(value: ModalidadeFindOneInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindOneInput")), null, 2);
    }

    public static toModalidadeFindOneResult(json: string): ModalidadeFindOneResult {
        return cast(JSON.parse(json), r("ModalidadeFindOneResult"));
    }

    public static modalidadeFindOneResultToJson(value: ModalidadeFindOneResult): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindOneResult")), null, 2);
    }

    public static toModalidadeInputCreate(json: string): ModalidadeInputCreate {
        return cast(JSON.parse(json), r("ModalidadeInputCreate"));
    }

    public static modalidadeInputCreateToJson(value: ModalidadeInputCreate): string {
        return JSON.stringify(uncast(value, r("ModalidadeInputCreate")), null, 2);
    }

    public static toModalidadeInputUpdate(json: string): ModalidadeInputUpdate {
        return cast(JSON.parse(json), r("ModalidadeInputUpdate"));
    }

    public static modalidadeInputUpdateToJson(value: ModalidadeInputUpdate): string {
        return JSON.stringify(uncast(value, r("ModalidadeInputUpdate")), null, 2);
    }

    public static toModalidadeFindAllResult(json: string): ModalidadeFindAllResult {
        return cast(JSON.parse(json), r("ModalidadeFindAllResult"));
    }

    public static modalidadeFindAllResultToJson(value: ModalidadeFindAllResult): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindAllResult")), null, 2);
    }

    public static toDisciplina(json: string): Disciplina {
        return cast(JSON.parse(json), r("Disciplina"));
    }

    public static disciplinaToJson(value: Disciplina): string {
        return JSON.stringify(uncast(value, r("Disciplina")), null, 2);
    }

    public static toDisciplinaFindOneInput(json: string): DisciplinaFindOneInput {
        return cast(JSON.parse(json), r("DisciplinaFindOneInput"));
    }

    public static disciplinaFindOneInputToJson(value: DisciplinaFindOneInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindOneInput")), null, 2);
    }

    public static toDisciplinaFindOneResult(json: string): DisciplinaFindOneResult {
        return cast(JSON.parse(json), r("DisciplinaFindOneResult"));
    }

    public static disciplinaFindOneResultToJson(value: DisciplinaFindOneResult): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindOneResult")), null, 2);
    }

    public static toDisciplinaInputCreate(json: string): DisciplinaInputCreate {
        return cast(JSON.parse(json), r("DisciplinaInputCreate"));
    }

    public static disciplinaInputCreateToJson(value: DisciplinaInputCreate): string {
        return JSON.stringify(uncast(value, r("DisciplinaInputCreate")), null, 2);
    }

    public static toDisciplinaInputUpdate(json: string): DisciplinaInputUpdate {
        return cast(JSON.parse(json), r("DisciplinaInputUpdate"));
    }

    public static disciplinaInputUpdateToJson(value: DisciplinaInputUpdate): string {
        return JSON.stringify(uncast(value, r("DisciplinaInputUpdate")), null, 2);
    }

    public static toDisciplinaFindAllResult(json: string): DisciplinaFindAllResult {
        return cast(JSON.parse(json), r("DisciplinaFindAllResult"));
    }

    public static disciplinaFindAllResultToJson(value: DisciplinaFindAllResult): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindAllResult")), null, 2);
    }

    public static toTurma(json: string): Turma {
        return cast(JSON.parse(json), r("Turma"));
    }

    public static turmaToJson(value: Turma): string {
        return JSON.stringify(uncast(value, r("Turma")), null, 2);
    }

    public static toTurmaFindOneInput(json: string): TurmaFindOneInput {
        return cast(JSON.parse(json), r("TurmaFindOneInput"));
    }

    public static turmaFindOneInputToJson(value: TurmaFindOneInput): string {
        return JSON.stringify(uncast(value, r("TurmaFindOneInput")), null, 2);
    }

    public static toTurmaFindOneResult(json: string): TurmaFindOneResult {
        return cast(JSON.parse(json), r("TurmaFindOneResult"));
    }

    public static turmaFindOneResultToJson(value: TurmaFindOneResult): string {
        return JSON.stringify(uncast(value, r("TurmaFindOneResult")), null, 2);
    }

    public static toTurmaInputCreate(json: string): TurmaInputCreate {
        return cast(JSON.parse(json), r("TurmaInputCreate"));
    }

    public static turmaInputCreateToJson(value: TurmaInputCreate): string {
        return JSON.stringify(uncast(value, r("TurmaInputCreate")), null, 2);
    }

    public static toTurmaInputUpdate(json: string): TurmaInputUpdate {
        return cast(JSON.parse(json), r("TurmaInputUpdate"));
    }

    public static turmaInputUpdateToJson(value: TurmaInputUpdate): string {
        return JSON.stringify(uncast(value, r("TurmaInputUpdate")), null, 2);
    }

    public static toTurmaFindAllResult(json: string): TurmaFindAllResult {
        return cast(JSON.parse(json), r("TurmaFindAllResult"));
    }

    public static turmaFindAllResultToJson(value: TurmaFindAllResult): string {
        return JSON.stringify(uncast(value, r("TurmaFindAllResult")), null, 2);
    }

    public static toIntervaloDeTempo(json: string): IntervaloDeTempo {
        return cast(JSON.parse(json), r("IntervaloDeTempo"));
    }

    public static intervaloDeTempoToJson(value: IntervaloDeTempo): string {
        return JSON.stringify(uncast(value, r("IntervaloDeTempo")), null, 2);
    }

    public static toIntervaloDeTempoFindOneResult(json: string): IntervaloDeTempoFindOneResult {
        return cast(JSON.parse(json), r("IntervaloDeTempoFindOneResult"));
    }

    public static intervaloDeTempoFindOneResultToJson(value: IntervaloDeTempoFindOneResult): string {
        return JSON.stringify(uncast(value, r("IntervaloDeTempoFindOneResult")), null, 2);
    }

    public static toIntervaloDeTempoInput(json: string): IntervaloDeTempoInput {
        return cast(JSON.parse(json), r("IntervaloDeTempoInput"));
    }

    public static intervaloDeTempoInputToJson(value: IntervaloDeTempoInput): string {
        return JSON.stringify(uncast(value, r("IntervaloDeTempoInput")), null, 2);
    }

    public static toCalendarioLetivo(json: string): CalendarioLetivo {
        return cast(JSON.parse(json), r("CalendarioLetivo"));
    }

    public static calendarioLetivoToJson(value: CalendarioLetivo): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivo")), null, 2);
    }

    public static toCalendarioLetivoFindOneInput(json: string): CalendarioLetivoFindOneInput {
        return cast(JSON.parse(json), r("CalendarioLetivoFindOneInput"));
    }

    public static calendarioLetivoFindOneInputToJson(value: CalendarioLetivoFindOneInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindOneInput")), null, 2);
    }

    public static toCalendarioLetivoFindOneResult(json: string): CalendarioLetivoFindOneResult {
        return cast(JSON.parse(json), r("CalendarioLetivoFindOneResult"));
    }

    public static calendarioLetivoFindOneResultToJson(value: CalendarioLetivoFindOneResult): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindOneResult")), null, 2);
    }

    public static toCalendarioLetivoInputCreate(json: string): CalendarioLetivoInputCreate {
        return cast(JSON.parse(json), r("CalendarioLetivoInputCreate"));
    }

    public static calendarioLetivoInputCreateToJson(value: CalendarioLetivoInputCreate): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoInputCreate")), null, 2);
    }

    public static toCalendarioLetivoInputUpdate(json: string): CalendarioLetivoInputUpdate {
        return cast(JSON.parse(json), r("CalendarioLetivoInputUpdate"));
    }

    public static calendarioLetivoInputUpdateToJson(value: CalendarioLetivoInputUpdate): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoInputUpdate")), null, 2);
    }

    public static toCalendarioLetivoFindAllResult(json: string): CalendarioLetivoFindAllResult {
        return cast(JSON.parse(json), r("CalendarioLetivoFindAllResult"));
    }

    public static calendarioLetivoFindAllResultToJson(value: CalendarioLetivoFindAllResult): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindAllResult")), null, 2);
    }

    public static toDiaCalendario(json: string): DiaCalendario {
        return cast(JSON.parse(json), r("DiaCalendario"));
    }

    public static diaCalendarioToJson(value: DiaCalendario): string {
        return JSON.stringify(uncast(value, r("DiaCalendario")), null, 2);
    }

    public static toDiaCalendarioFindOneInput(json: string): DiaCalendarioFindOneInput {
        return cast(JSON.parse(json), r("DiaCalendarioFindOneInput"));
    }

    public static diaCalendarioFindOneInputToJson(value: DiaCalendarioFindOneInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindOneInput")), null, 2);
    }

    public static toDiaCalendarioFindOneResult(json: string): DiaCalendarioFindOneResult {
        return cast(JSON.parse(json), r("DiaCalendarioFindOneResult"));
    }

    public static diaCalendarioFindOneResultToJson(value: DiaCalendarioFindOneResult): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindOneResult")), null, 2);
    }

    public static toDiaCalendarioInputCreate(json: string): DiaCalendarioInputCreate {
        return cast(JSON.parse(json), r("DiaCalendarioInputCreate"));
    }

    public static diaCalendarioInputCreateToJson(value: DiaCalendarioInputCreate): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioInputCreate")), null, 2);
    }

    public static toDiaCalendarioInputUpdate(json: string): DiaCalendarioInputUpdate {
        return cast(JSON.parse(json), r("DiaCalendarioInputUpdate"));
    }

    public static diaCalendarioInputUpdateToJson(value: DiaCalendarioInputUpdate): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioInputUpdate")), null, 2);
    }

    public static toDiaCalendarioFindAllResult(json: string): DiaCalendarioFindAllResult {
        return cast(JSON.parse(json), r("DiaCalendarioFindAllResult"));
    }

    public static diaCalendarioFindAllResultToJson(value: DiaCalendarioFindAllResult): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindAllResult")), null, 2);
    }

    public static toEtapa(json: string): Etapa {
        return cast(JSON.parse(json), r("Etapa"));
    }

    public static etapaToJson(value: Etapa): string {
        return JSON.stringify(uncast(value, r("Etapa")), null, 2);
    }

    public static toEtapaFindOneInput(json: string): EtapaFindOneInput {
        return cast(JSON.parse(json), r("EtapaFindOneInput"));
    }

    public static etapaFindOneInputToJson(value: EtapaFindOneInput): string {
        return JSON.stringify(uncast(value, r("EtapaFindOneInput")), null, 2);
    }

    public static toEtapaFindOneResult(json: string): EtapaFindOneResult {
        return cast(JSON.parse(json), r("EtapaFindOneResult"));
    }

    public static etapaFindOneResultToJson(value: EtapaFindOneResult): string {
        return JSON.stringify(uncast(value, r("EtapaFindOneResult")), null, 2);
    }

    public static toEtapaInputCreate(json: string): EtapaInputCreate {
        return cast(JSON.parse(json), r("EtapaInputCreate"));
    }

    public static etapaInputCreateToJson(value: EtapaInputCreate): string {
        return JSON.stringify(uncast(value, r("EtapaInputCreate")), null, 2);
    }

    public static toEtapaInputUpdate(json: string): EtapaInputUpdate {
        return cast(JSON.parse(json), r("EtapaInputUpdate"));
    }

    public static etapaInputUpdateToJson(value: EtapaInputUpdate): string {
        return JSON.stringify(uncast(value, r("EtapaInputUpdate")), null, 2);
    }

    public static toEtapaFindAllResult(json: string): EtapaFindAllResult {
        return cast(JSON.parse(json), r("EtapaFindAllResult"));
    }

    public static etapaFindAllResultToJson(value: EtapaFindAllResult): string {
        return JSON.stringify(uncast(value, r("EtapaFindAllResult")), null, 2);
    }

    public static toAula(json: string): Aula {
        return cast(JSON.parse(json), r("Aula"));
    }

    public static aulaToJson(value: Aula): string {
        return JSON.stringify(uncast(value, r("Aula")), null, 2);
    }

    public static toAulaFindOneInput(json: string): AulaFindOneInput {
        return cast(JSON.parse(json), r("AulaFindOneInput"));
    }

    public static aulaFindOneInputToJson(value: AulaFindOneInput): string {
        return JSON.stringify(uncast(value, r("AulaFindOneInput")), null, 2);
    }

    public static toAulaFindOneResult(json: string): AulaFindOneResult {
        return cast(JSON.parse(json), r("AulaFindOneResult"));
    }

    public static aulaFindOneResultToJson(value: AulaFindOneResult): string {
        return JSON.stringify(uncast(value, r("AulaFindOneResult")), null, 2);
    }

    public static toAulaInputCreate(json: string): AulaInputCreate {
        return cast(JSON.parse(json), r("AulaInputCreate"));
    }

    public static aulaInputCreateToJson(value: AulaInputCreate): string {
        return JSON.stringify(uncast(value, r("AulaInputCreate")), null, 2);
    }

    public static toAulaInputUpdate(json: string): AulaInputUpdate {
        return cast(JSON.parse(json), r("AulaInputUpdate"));
    }

    public static aulaInputUpdateToJson(value: AulaInputUpdate): string {
        return JSON.stringify(uncast(value, r("AulaInputUpdate")), null, 2);
    }

    public static toAulaFindAllResult(json: string): AulaFindAllResult {
        return cast(JSON.parse(json), r("AulaFindAllResult"));
    }

    public static aulaFindAllResultToJson(value: AulaFindAllResult): string {
        return JSON.stringify(uncast(value, r("AulaFindAllResult")), null, 2);
    }

    public static toEvento(json: string): Evento {
        return cast(JSON.parse(json), r("Evento"));
    }

    public static eventoToJson(value: Evento): string {
        return JSON.stringify(uncast(value, r("Evento")), null, 2);
    }

    public static toEventoFindOneInput(json: string): EventoFindOneInput {
        return cast(JSON.parse(json), r("EventoFindOneInput"));
    }

    public static eventoFindOneInputToJson(value: EventoFindOneInput): string {
        return JSON.stringify(uncast(value, r("EventoFindOneInput")), null, 2);
    }

    public static toEventoFindOneResult(json: string): EventoFindOneResult {
        return cast(JSON.parse(json), r("EventoFindOneResult"));
    }

    public static eventoFindOneResultToJson(value: EventoFindOneResult): string {
        return JSON.stringify(uncast(value, r("EventoFindOneResult")), null, 2);
    }

    public static toEventoInputCreate(json: string): EventoInputCreate {
        return cast(JSON.parse(json), r("EventoInputCreate"));
    }

    public static eventoInputCreateToJson(value: EventoInputCreate): string {
        return JSON.stringify(uncast(value, r("EventoInputCreate")), null, 2);
    }

    public static toEventoInputUpdate(json: string): EventoInputUpdate {
        return cast(JSON.parse(json), r("EventoInputUpdate"));
    }

    public static eventoInputUpdateToJson(value: EventoInputUpdate): string {
        return JSON.stringify(uncast(value, r("EventoInputUpdate")), null, 2);
    }

    public static toEventoFindAllResult(json: string): EventoFindAllResult {
        return cast(JSON.parse(json), r("EventoFindAllResult"));
    }

    public static eventoFindAllResultToJson(value: EventoFindAllResult): string {
        return JSON.stringify(uncast(value, r("EventoFindAllResult")), null, 2);
    }

    public static toTurmaDisponibilidade(json: string): TurmaDisponibilidade {
        return cast(JSON.parse(json), r("TurmaDisponibilidade"));
    }

    public static turmaDisponibilidadeToJson(value: TurmaDisponibilidade): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidade")), null, 2);
    }

    public static toTurmaDisponibilidadeFindOneInput(json: string): TurmaDisponibilidadeFindOneInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindOneInput"));
    }

    public static turmaDisponibilidadeFindOneInputToJson(value: TurmaDisponibilidadeFindOneInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindOneInput")), null, 2);
    }

    public static toTurmaDisponibilidadeFindOneResult(json: string): TurmaDisponibilidadeFindOneResult {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindOneResult"));
    }

    public static turmaDisponibilidadeFindOneResultToJson(value: TurmaDisponibilidadeFindOneResult): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindOneResult")), null, 2);
    }

    public static toTurmaDisponibilidadeInputCreate(json: string): TurmaDisponibilidadeInputCreate {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeInputCreate"));
    }

    public static turmaDisponibilidadeInputCreateToJson(value: TurmaDisponibilidadeInputCreate): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeInputCreate")), null, 2);
    }

    public static toTurmaDisponibilidadeInputUpdate(json: string): TurmaDisponibilidadeInputUpdate {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeInputUpdate"));
    }

    public static turmaDisponibilidadeInputUpdateToJson(value: TurmaDisponibilidadeInputUpdate): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeInputUpdate")), null, 2);
    }

    public static toTurmaDisponibilidadeFindAllResult(json: string): TurmaDisponibilidadeFindAllResult {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindAllResult"));
    }

    public static turmaDisponibilidadeFindAllResultToJson(value: TurmaDisponibilidadeFindAllResult): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindAllResult")), null, 2);
    }

    public static toTurmaDisponibilidadeDia(json: string): TurmaDisponibilidadeDia {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDia"));
    }

    public static turmaDisponibilidadeDiaToJson(value: TurmaDisponibilidadeDia): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDia")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindOneInput(json: string): TurmaDisponibilidadeDiaFindOneInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindOneInput"));
    }

    public static turmaDisponibilidadeDiaFindOneInputToJson(value: TurmaDisponibilidadeDiaFindOneInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindOneInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindOneResult(json: string): TurmaDisponibilidadeDiaFindOneResult {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindOneResult"));
    }

    public static turmaDisponibilidadeDiaFindOneResultToJson(value: TurmaDisponibilidadeDiaFindOneResult): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindOneResult")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaInputCreate(json: string): TurmaDisponibilidadeDiaInputCreate {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaInputCreate"));
    }

    public static turmaDisponibilidadeDiaInputCreateToJson(value: TurmaDisponibilidadeDiaInputCreate): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaInputCreate")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaInputUpdate(json: string): TurmaDisponibilidadeDiaInputUpdate {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaInputUpdate"));
    }

    public static turmaDisponibilidadeDiaInputUpdateToJson(value: TurmaDisponibilidadeDiaInputUpdate): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaInputUpdate")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindAllResult(json: string): TurmaDisponibilidadeDiaFindAllResult {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindAllResult"));
    }

    public static turmaDisponibilidadeDiaFindAllResultToJson(value: TurmaDisponibilidadeDiaFindAllResult): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindAllResult")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "PaginatedBaseInput": o([
        { json: "limit", js: "limit", typ: u(undefined, u(0, null)) },
        { json: "page", js: "page", typ: u(undefined, u(0, null)) },
        { json: "search", js: "search", typ: u(undefined, u(null, "")) },
    ], "any"),
    "PaginatedInput": o([
        { json: "filter", js: "filter", typ: a(r("PaginatedResultMetaFilter")) },
        { json: "limit", js: "limit", typ: u(undefined, u(0, null)) },
        { json: "page", js: "page", typ: u(undefined, u(0, null)) },
        { json: "search", js: "search", typ: u(undefined, u(null, "")) },
        { json: "sortBy", js: "sortBy", typ: a(r("PaginatedSortBy")) },
    ], "any"),
    "PaginatedResultMetaFilter": o([
        { json: "property", js: "property", typ: "" },
        { json: "restrictions", js: "restrictions", typ: a("") },
    ], "any"),
    "PaginatedSortBy": o([
        { json: "mode", js: "mode", typ: "" },
        { json: "property", js: "property", typ: "" },
    ], "any"),
    "Search": o([
        { json: "filters", js: "filters", typ: u(undefined, a(a(""))) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], "any"),
    "Arquivo": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "mimeType", js: "mimeType", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "sizeBytes", js: "sizeBytes", typ: 0 },
        { json: "storageType", js: "storageType", typ: "" },
    ], "any"),
    "ArquivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ImagemFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ImagemArquivo": o([
        { json: "altura", js: "altura", typ: u(0, null) },
        { json: "arquivo", js: "arquivo", typ: r("ArquivoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "formato", js: "formato", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagem", js: "imagem", typ: r("ImagemFindOneFromImagemArquivoResult") },
        { json: "largura", js: "largura", typ: u(0, null) },
        { json: "mimeType", js: "mimeType", typ: "" },
    ], "any"),
    "ArquivoFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "mimeType", js: "mimeType", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "sizeBytes", js: "sizeBytes", typ: 0 },
        { json: "storageType", js: "storageType", typ: "" },
    ], "any"),
    "ImagemFindOneFromImagemArquivoResult": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ImagemArquivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ImagemArquivoFindOneResult": o([
        { json: "altura", js: "altura", typ: u(0, null) },
        { json: "arquivo", js: "arquivo", typ: r("ArquivoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "formato", js: "formato", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagem", js: "imagem", typ: r("ImagemFindOneFromImagemArquivoResult") },
        { json: "largura", js: "largura", typ: u(0, null) },
        { json: "mimeType", js: "mimeType", typ: "" },
    ], "any"),
    "AuthLoginInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], "any"),
    "AuthRefreshInput": o([
        { json: "refreshToken", js: "refreshToken", typ: "" },
    ], "any"),
    "AuthWhoAmIResult": o([
        { json: "usuario", js: "usuario", typ: u(null, r("UsuarioFindOneResult")) },
    ], "any"),
    "Vinculo": o([
        { json: "ativo", js: "ativo", typ: true },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "cargo", js: "cargo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], "any"),
    "UsuarioFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "email", js: "email", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("Imagem")) },
        { json: "isSuperUser", js: "isSuperUser", typ: true },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "vinculosAtivos", js: "vinculosAtivos", typ: a(r("Vinculo")) },
    ], "any"),
    "CampusFindOneResult": o([
        { json: "apelido", js: "apelido", typ: "" },
        { json: "cnpj", js: "cnpj", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "endereco", js: "endereco", typ: r("EnderecoFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "nomeFantasia", js: "nomeFantasia", typ: "" },
        { json: "razaoSocial", js: "razaoSocial", typ: "" },
    ], "any"),
    "EnderecoFindOneResult": o([
        { json: "bairro", js: "bairro", typ: "" },
        { json: "cep", js: "cep", typ: "" },
        { json: "cidade", js: "cidade", typ: r("CidadeFindOneResult") },
        { json: "complemento", js: "complemento", typ: u(null, "") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "logradouro", js: "logradouro", typ: "" },
        { json: "numero", js: "numero", typ: 0 },
        { json: "pontoReferencia", js: "pontoReferencia", typ: u(null, "") },
    ], "any"),
    "CidadeFindOneResult": o([
        { json: "estado", js: "estado", typ: r("EstadoFindOneResult") },
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "EstadoFindOneResult": o([
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "sigla", js: "sigla", typ: "" },
    ], "any"),
    "Imagem": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "versoes", js: "versoes", typ: a(r("ImagemArquivoFindOneFromImagemResult")) },
    ], "any"),
    "ImagemArquivoFindOneFromImagemResult": o([
        { json: "altura", js: "altura", typ: u(0, null) },
        { json: "arquivo", js: "arquivo", typ: r("ArquivoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "formato", js: "formato", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "largura", js: "largura", typ: u(0, null) },
        { json: "mimeType", js: "mimeType", typ: "" },
    ], "any"),
    "AuthSessionCredentials": o([
        { json: "access_token", js: "access_token", typ: u(null, "") },
        { json: "expires_at", js: "expires_at", typ: u(0, null) },
        { json: "expires_in", js: "expires_in", typ: u(0, null) },
        { json: "id_token", js: "id_token", typ: u(null, "") },
        { json: "refresh_token", js: "refresh_token", typ: u(null, "") },
        { json: "scope", js: "scope", typ: u(null, "") },
        { json: "session_state", js: "session_state", typ: u(null, "") },
        { json: "token_type", js: "token_type", typ: u(null, "") },
    ], "any"),
    "AuthSetInitialPasswordInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], "any"),
    "Usuario": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "email", js: "email", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "imagemPerfil", js: "imagemPerfil", typ: u(null, r("ImagemFindOneResult")) },
        { json: "isSuperUser", js: "isSuperUser", typ: true },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "vinculosAtivos", js: "vinculosAtivos", typ: a(r("VinculoFindOneResult")) },
    ], "any"),
    "ImagemFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "versoes", js: "versoes", typ: a(r("ImagemArquivoFindOneFromImagemResult")) },
    ], "any"),
    "VinculoFindOneResult": o([
        { json: "ativo", js: "ativo", typ: true },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "cargo", js: "cargo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], "any"),
    "UsuarioInputCreate": o([
        { json: "email", js: "email", typ: "" },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "UsuarioInputUpdate": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "matriculaSiape", js: "matriculaSiape", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], "any"),
    "VinculoUpdate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "cargos", js: "cargos", typ: a("") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneInput") },
    ], "any"),
    "CampusFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "UsuarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "Ambiente": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneResult") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], "any"),
    "BlocoFindOneResult": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "AmbienteInputCreate": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneInput") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], "any"),
    "BlocoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "AmbienteInputUpdate": o([
        { json: "bloco", js: "bloco", typ: u(undefined, r("BlocoFindOneInput")) },
        { json: "capacidade", js: "capacidade", typ: u(undefined, u(0, null)) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "descricao", js: "descricao", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "tipo", js: "tipo", typ: u(undefined, u(null, "")) },
    ], "any"),
    "AmbienteFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AmbienteFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "AmbienteFindOneResult": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneResult") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], "any"),
    "PaginatedResultLinks": o([
        { json: "current", js: "current", typ: "" },
        { json: "first", js: "first", typ: u(null, "") },
        { json: "last", js: "last", typ: u(null, "") },
        { json: "next", js: "next", typ: u(null, "") },
        { json: "previous", js: "previous", typ: u(null, "") },
    ], "any"),
    "PaginatedResultMeta": o([
        { json: "currentPage", js: "currentPage", typ: 0 },
        { json: "filter", js: "filter", typ: a(r("PaginatedResultMetaFilter")) },
        { json: "itemsPerPage", js: "itemsPerPage", typ: 0 },
        { json: "search", js: "search", typ: "" },
        { json: "sortBy", js: "sortBy", typ: a(r("PaginatedSortBy")) },
        { json: "totalItems", js: "totalItems", typ: 0 },
        { json: "totalPages", js: "totalPages", typ: 0 },
    ], "any"),
    "Bloco": o([
        { json: "ambientes", js: "ambientes", typ: a(r("AmbienteFindOneResult")) },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "BlocoInputCreate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "BlocoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], "any"),
    "BlocoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("BlocoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Campus": o([
        { json: "apelido", js: "apelido", typ: "" },
        { json: "cnpj", js: "cnpj", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "endereco", js: "endereco", typ: r("EnderecoFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "nomeFantasia", js: "nomeFantasia", typ: "" },
        { json: "razaoSocial", js: "razaoSocial", typ: "" },
    ], "any"),
    "CampusInputCreate": o([
        { json: "apelido", js: "apelido", typ: "" },
        { json: "cnpj", js: "cnpj", typ: "" },
        { json: "endereco", js: "endereco", typ: r("EnderecoInput") },
        { json: "nomeFantasia", js: "nomeFantasia", typ: "" },
        { json: "razaoSocial", js: "razaoSocial", typ: "" },
    ], "any"),
    "EnderecoInput": o([
        { json: "bairro", js: "bairro", typ: "" },
        { json: "cep", js: "cep", typ: "" },
        { json: "cidade", js: "cidade", typ: r("CidadeFindOneInput") },
        { json: "complemento", js: "complemento", typ: u(null, "") },
        { json: "logradouro", js: "logradouro", typ: "" },
        { json: "numero", js: "numero", typ: 0 },
        { json: "pontoReferencia", js: "pontoReferencia", typ: u(null, "") },
    ], "any"),
    "CidadeFindOneInput": o([
        { json: "id", js: "id", typ: 0 },
    ], "any"),
    "CampusInputUpdate": o([
        { json: "apelido", js: "apelido", typ: u(undefined, "") },
        { json: "cnpj", js: "cnpj", typ: u(undefined, "") },
        { json: "endereco", js: "endereco", typ: u(undefined, r("EnderecoInput")) },
        { json: "nomeFantasia", js: "nomeFantasia", typ: u(undefined, "") },
        { json: "razaoSocial", js: "razaoSocial", typ: u(undefined, "") },
    ], "any"),
    "CampusFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CampusFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Cidade": o([
        { json: "estado", js: "estado", typ: r("EstadoFindOneResult") },
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "CidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Endereco": o([
        { json: "bairro", js: "bairro", typ: "" },
        { json: "cep", js: "cep", typ: "" },
        { json: "cidade", js: "cidade", typ: r("CidadeFindOneResult") },
        { json: "complemento", js: "complemento", typ: u(null, "") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "logradouro", js: "logradouro", typ: "" },
        { json: "numero", js: "numero", typ: 0 },
        { json: "pontoReferencia", js: "pontoReferencia", typ: u(null, "") },
    ], "any"),
    "EnderecoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "Estado": o([
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "sigla", js: "sigla", typ: "" },
    ], "any"),
    "EstadoFindOneInput": o([
        { json: "id", js: "id", typ: 0 },
    ], "any"),
    "EstadoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EstadoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Reserva": o([
        { json: "ambiente", js: "ambiente", typ: r("AmbienteFindOneResult") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: u(Date, null) },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "motivo", js: "motivo", typ: u(null, "") },
        { json: "situacao", js: "situacao", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], "any"),
    "ReservaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ReservaInputCreate": o([
        { json: "ambiente", js: "ambiente", typ: r("AmbienteFindOneInput") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: u(Date, null) },
        { json: "motivo", js: "motivo", typ: u(null, "") },
        { json: "situacao", js: "situacao", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneInput") },
    ], "any"),
    "AmbienteFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ReservaInputUpdate": o([
        { json: "ambiente", js: "ambiente", typ: u(undefined, r("AmbienteFindOneInput")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, u(Date, null)) },
        { json: "motivo", js: "motivo", typ: u(undefined, u(null, "")) },
        { json: "situacao", js: "situacao", typ: u(undefined, "") },
        { json: "tipo", js: "tipo", typ: u(undefined, u(null, "")) },
        { json: "usuario", js: "usuario", typ: u(undefined, r("UsuarioFindOneInput")) },
    ], "any"),
    "ReservaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ReservaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "ReservaFindOneResult": o([
        { json: "ambiente", js: "ambiente", typ: r("AmbienteFindOneResult") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: u(Date, null) },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "motivo", js: "motivo", typ: u(null, "") },
        { json: "situacao", js: "situacao", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], "any"),
    "Curso": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneResult") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "ModalidadeFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], "any"),
    "CursoInputCreate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneInput") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "ModalidadeFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "CursoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, r("ModalidadeFindOneInput")) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], "any"),
    "CursoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CursoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "CursoFindOneResult": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneResult") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "Diario": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(null, r("AmbienteFindOneResult")) },
        { json: "ano", js: "ano", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "etapa", js: "etapa", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "situacao", js: "situacao", typ: true },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], "any"),
    "DisciplinaFindOneResult": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "TurmaFindOneResult": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(null, r("AmbienteFindOneResult"))) },
        { json: "curso", js: "curso", typ: r("CursoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "periodo", js: "periodo", typ: "" },
    ], "any"),
    "DiarioInputCreate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(null, r("AmbienteFindOneInput")) },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneInput") },
        { json: "turma", js: "turma", typ: r("TurmaFindOneInput") },
    ], "any"),
    "DisciplinaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "TurmaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiarioInputUpdate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(undefined, u(null, r("AmbienteFindOneInput"))) },
        { json: "disciplina", js: "disciplina", typ: u(undefined, r("DisciplinaFindOneInput")) },
        { json: "turma", js: "turma", typ: u(undefined, r("TurmaFindOneInput")) },
    ], "any"),
    "DiarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "DiarioFindOneResult": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(null, r("AmbienteFindOneResult")) },
        { json: "ano", js: "ano", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "etapa", js: "etapa", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "situacao", js: "situacao", typ: true },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], "any"),
    "DiarioProfessor": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], "any"),
    "DiarioProfessorFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiarioProfessorInputCreate": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneInput") },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneInput") },
    ], "any"),
    "DiarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "VinculoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiarioProfessorInputUpdate": o([
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "situacao", js: "situacao", typ: u(undefined, true) },
        { json: "vinculo", js: "vinculo", typ: u(undefined, r("VinculoFindOneInput")) },
    ], "any"),
    "DiarioProfessorFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioProfessorFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "DiarioProfessorFindOneResult": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], "any"),
    "Modalidade": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], "any"),
    "ModalidadeInputCreate": o([
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], "any"),
    "ModalidadeInputUpdate": o([
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "slug", js: "slug", typ: u(undefined, "") },
    ], "any"),
    "ModalidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ModalidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Disciplina": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "DisciplinaInputCreate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], "any"),
    "DisciplinaInputUpdate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: u(undefined, 0) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], "any"),
    "DisciplinaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DisciplinaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "Turma": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(null, r("AmbienteFindOneResult"))) },
        { json: "curso", js: "curso", typ: r("CursoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(null, r("ImagemFindOneResult")) },
        { json: "periodo", js: "periodo", typ: "" },
    ], "any"),
    "TurmaInputCreate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(null, r("AmbienteFindOneInput"))) },
        { json: "curso", js: "curso", typ: r("CursoFindOneInput") },
        { json: "periodo", js: "periodo", typ: "" },
    ], "any"),
    "CursoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "TurmaInputUpdate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(null, r("AmbienteFindOneInput"))) },
        { json: "curso", js: "curso", typ: u(undefined, r("CursoFindOneInput")) },
        { json: "periodo", js: "periodo", typ: u(undefined, "") },
    ], "any"),
    "TurmaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "IntervaloDeTempo": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], "any"),
    "CalendarioLetivo": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(null, r("ModalidadeFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "CalendarioLetivoInputCreate": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "modalidade", js: "modalidade", typ: u(null, r("ModalidadeFindOneInput")) },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "CalendarioLetivoInputUpdate": o([
        { json: "ano", js: "ano", typ: u(undefined, "") },
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, u(null, r("ModalidadeFindOneInput"))) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], "any"),
    "CalendarioLetivoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CalendarioLetivoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "CalendarioLetivoFindOneResult": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(null, r("ModalidadeFindOneResult")) },
        { json: "nome", js: "nome", typ: "" },
    ], "any"),
    "DiaCalendario": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiaCalendarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiaCalendarioInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneInput")) },
        { json: "data", js: "data", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
    ], "any"),
    "CalendarioLetivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DiaCalendarioInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(null, r("CalendarioLetivoFindOneInput"))) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diaLetivo", js: "diaLetivo", typ: u(undefined, true) },
        { json: "feriado", js: "feriado", typ: u(undefined, true) },
    ], "any"),
    "DiaCalendarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiaCalendarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "DiaCalendarioFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "Etapa": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], "any"),
    "EtapaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "EtapaInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneInput")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], "any"),
    "EtapaInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(null, r("CalendarioLetivoFindOneInput"))) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "numero", js: "numero", typ: u(undefined, u(0, null)) },
    ], "any"),
    "EtapaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EtapaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "EtapaFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], "any"),
    "Aula": o([
        { json: "ambiente", js: "ambiente", typ: u(null, r("AmbienteFindOneResult")) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoFindOneResult") },
    ], "any"),
    "IntervaloDeTempoFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], "any"),
    "AulaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "AulaInputCreate": o([
        { json: "ambiente", js: "ambiente", typ: u(null, r("AmbienteFindOneInput")) },
        { json: "data", js: "data", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneInput") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoInput") },
    ], "any"),
    "IntervaloDeTempoInput": o([
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], "any"),
    "AulaInputUpdate": o([
        { json: "ambiente", js: "ambiente", typ: u(undefined, u(null, r("AmbienteFindOneInput"))) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "formato", js: "formato", typ: u(undefined, u(null, "")) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, r("IntervaloDeTempoInput")) },
    ], "any"),
    "AulaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AulaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "AulaFindOneResult": o([
        { json: "ambiente", js: "ambiente", typ: u(null, r("AmbienteFindOneResult")) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoFindOneResult") },
    ], "any"),
    "Evento": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], "any"),
    "EventoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "EventoInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneInput")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], "any"),
    "EventoInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(null, r("CalendarioLetivoFindOneInput"))) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "nome", js: "nome", typ: u(undefined, u(null, "")) },
    ], "any"),
    "EventoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EventoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "EventoFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(null, r("CalendarioLetivoFindOneResult")) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], "any"),
    "TurmaDisponibilidade": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "turma", js: "turma", typ: u(null, r("TurmaFindOneResult")) },
    ], "any"),
    "TurmaDisponibilidadeInputCreate": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "turma", js: "turma", typ: u(null, r("TurmaFindOneInput")) },
    ], "any"),
    "TurmaDisponibilidadeInputUpdate": o([
        { json: "dataFim", js: "dataFim", typ: u(undefined, u(Date, null)) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "turma", js: "turma", typ: u(undefined, u(null, r("TurmaFindOneInput"))) },
    ], "any"),
    "TurmaDisponibilidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "TurmaDisponibilidadeFindOneResult": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "turma", js: "turma", typ: u(null, r("TurmaFindOneResult")) },
    ], "any"),
    "TurmaDisponibilidadeDia": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(null, r("IntervaloDeTempoFindOneResult")) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(null, r("TurmaDisponibilidadeFindOneResult")) },
    ], "any"),
    "TurmaDisponibilidadeDiaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "TurmaDisponibilidadeDiaInputCreate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(null, r("IntervaloDeTempoInput")) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(null, r("TurmaDisponibilidadeFindOneInput")) },
    ], "any"),
    "TurmaDisponibilidadeFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "TurmaDisponibilidadeDiaInputUpdate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: u(undefined, 0) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, u(null, r("IntervaloDeTempoInput"))) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(undefined, u(null, r("TurmaDisponibilidadeFindOneInput"))) },
    ], "any"),
    "TurmaDisponibilidadeDiaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeDiaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], "any"),
    "TurmaDisponibilidadeDiaFindOneResult": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(null, r("IntervaloDeTempoFindOneResult")) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(null, r("TurmaDisponibilidadeFindOneResult")) },
    ], "any"),
};
