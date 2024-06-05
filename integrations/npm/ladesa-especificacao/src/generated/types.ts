// To parse this data:
//
//   import { Convert, PaginatedSortBy, PaginatedResultMetaFilter, PaginatedResultMeta, PaginatedResultLinks, PaginatedBaseInput, PaginatedInput, Search, Arquivo, ArquivoFindOneInput, ArquivoFindOneResult, Imagem, ImagemFindOneInput, ImagemFindOneFromImagemArquivoResult, ImagemFindOneResult, ImagemArquivo, ImagemArquivoFindOneInput, ImagemArquivoFindOneFromImagemResult, ImagemArquivoFindOneResult, AuthLoginInput, AuthRefreshInput, AuthWhoAmIResult, AuthSessionCredentials, AuthSetInitialPasswordInput, Usuario, UsuarioFindOneInput, UsuarioFindOneResult, UsuarioInputCreate, UsuarioInputUpdate, Vinculo, VinculoFindOneInput, VinculoFindOneResult, VinculoUpdate, Ambiente, AmbienteFindOneInput, AmbienteFindOneResult, AmbienteInputCreate, AmbienteInputUpdate, AmbienteFindAllResult, Bloco, BlocoFindOneInput, BlocoFindOneResult, BlocoInputCreate, BlocoInputUpdate, BlocoFindAllResult, Campus, CampusFindOneInput, CampusFindOneResult, CampusInputCreate, CampusInputUpdate, CampusFindAllResult, Cidade, CidadeFindOneInput, CidadeFindOneResult, CidadeFindAllResult, Endereco, EnderecoFindOneInput, EnderecoFindOneResult, EnderecoInput, Estado, EstadoFindOneInput, EstadoFindOneResult, EstadoFindAllResult, Reserva, ReservaFindOneInput, ReservaFindOneResult, ReservaInputCreate, ReservaInputUpdate, ReservaFindAllResult, Curso, CursoFindOneInput, CursoFindOneResult, CursoInputCreate, CursoInputUpdate, CursoFindAllResult, Diario, DiarioFindOneInput, DiarioFindOneResult, DiarioInputCreate, DiarioInputUpdate, DiarioFindAllResult, DiarioProfessor, DiarioProfessorFindOneInput, DiarioProfessorFindOneResult, DiarioProfessorInputCreate, DiarioProfessorInputUpdate, DiarioProfessorFindAllResult, Modalidade, ModalidadeFindOneInput, ModalidadeFindOneResult, ModalidadeInputCreate, ModalidadeInputUpdate, ModalidadeFindAllResult, Disciplina, DisciplinaFindOneInput, DisciplinaFindOneResult, DisciplinaInputCreate, DisciplinaInputUpdate, DisciplinaFindAllResult, Turma, TurmaFindOneInput, TurmaFindOneResult, TurmaInputCreate, TurmaInputUpdate, TurmaFindAllResult, IntervaloDeTempo, IntervaloDeTempoFindOneResult, IntervaloDeTempoInput, CalendarioLetivo, CalendarioLetivoFindOneInput, CalendarioLetivoFindOneResult, CalendarioLetivoInputCreate, CalendarioLetivoInputUpdate, CalendarioLetivoFindAllResult, DiaCalendario, DiaCalendarioFindOneInput, DiaCalendarioFindOneResult, DiaCalendarioInputCreate, DiaCalendarioInputUpdate, DiaCalendarioFindAllResult, Etapa, EtapaFindOneInput, EtapaFindOneResult, EtapaInputCreate, EtapaInputUpdate, EtapaFindAllResult, Aula, AulaFindOneInput, AulaFindOneResult, AulaInputCreate, AulaInputUpdate, AulaFindAllResult, Evento, EventoFindOneInput, EventoFindOneResult, EventoInputCreate, EventoInputUpdate, EventoFindAllResult, TurmaDisponibilidade, TurmaDisponibilidadeFindOneInput, TurmaDisponibilidadeFindOneResult, TurmaDisponibilidadeInputCreate, TurmaDisponibilidadeInputUpdate, TurmaDisponibilidadeFindAllResult, TurmaDisponibilidadeDia, TurmaDisponibilidadeDiaFindOneInput, TurmaDisponibilidadeDiaFindOneResult, TurmaDisponibilidadeDiaInputCreate, TurmaDisponibilidadeDiaInputUpdate, TurmaDisponibilidadeDiaFindAllResult, AuthLoginOperationCombinedInput, AuthLoginOperationSuccessOutput, AuthRefreshOperationCombinedInput, AuthRefreshOperationSuccessOutput, AuthWhoAmIOperationCombinedInput, AuthWhoAmIOperationSuccessOutput, AuthSetInitialPasswordOperationCombinedInput, AuthSetInitialPasswordOperationSuccessOutput, UsuarioFindByIDOperationCombinedInput, UsuarioFindByIDOperationSuccessOutput, UsuarioCreateOperationCombinedInput, UsuarioCreateOperationSuccessOutput, UsuarioUpdateByIDOperationCombinedInput, UsuarioUpdateByIDOperationSuccessOutput, UsuarioDeleteByIDOperationCombinedInput, UsuarioDeleteByIDOperationSuccessOutput, UsuarioListOperationCombinedInput, UsuarioListOperationSuccessOutput, VinculoFindByIDOperationCombinedInput, VinculoFindByIDOperationSuccessOutput, VinculoListOperationCombinedInput, VinculoListOperationSuccessOutput, AmbienteFindByIDOperationCombinedInput, AmbienteFindByIDOperationSuccessOutput, AmbienteCreateOperationCombinedInput, AmbienteCreateOperationSuccessOutput, AmbienteUpdateByIDOperationCombinedInput, AmbienteUpdateByIDOperationSuccessOutput, AmbienteDeleteByIDOperationCombinedInput, AmbienteDeleteByIDOperationSuccessOutput, AmbienteListOperationCombinedInput, AmbienteListOperationSuccessOutput, BlocoFindByIDOperationCombinedInput, BlocoFindByIDOperationSuccessOutput, BlocoCreateOperationCombinedInput, BlocoCreateOperationSuccessOutput, BlocoUpdateByIDOperationCombinedInput, BlocoUpdateByIDOperationSuccessOutput, BlocoDeleteByIDOperationCombinedInput, BlocoDeleteByIDOperationSuccessOutput, BlocoListOperationCombinedInput, BlocoListOperationSuccessOutput, CampusFindByIDOperationCombinedInput, CampusFindByIDOperationSuccessOutput, CampusCreateOperationCombinedInput, CampusCreateOperationSuccessOutput, CampusUpdateByIDOperationCombinedInput, CampusUpdateByIDOperationSuccessOutput, CampusDeleteByIDOperationCombinedInput, CampusDeleteByIDOperationSuccessOutput, CampusListOperationCombinedInput, CampusListOperationSuccessOutput, EstadoFindByIDOperationCombinedInput, EstadoFindByIDOperationSuccessOutput, EstadoListOperationCombinedInput, EstadoListOperationSuccessOutput, ReservaFindByIDOperationCombinedInput, ReservaFindByIDOperationSuccessOutput, ReservaCreateOperationCombinedInput, ReservaCreateOperationSuccessOutput, ReservaUpdateByIDOperationCombinedInput, ReservaUpdateByIDOperationSuccessOutput, ReservaListOperationCombinedInput, ReservaListOperationSuccessOutput, CursoFindByIDOperationCombinedInput, CursoFindByIDOperationSuccessOutput, CursoCreateOperationCombinedInput, CursoCreateOperationSuccessOutput, CursoUpdateByIDOperationCombinedInput, CursoUpdateByIDOperationSuccessOutput, CursoDeleteByIDOperationCombinedInput, CursoDeleteByIDOperationSuccessOutput, CursoListOperationCombinedInput, CursoListOperationSuccessOutput, DiarioFindByIDOperationCombinedInput, DiarioFindByIDOperationSuccessOutput, DiarioCreateOperationCombinedInput, DiarioCreateOperationSuccessOutput, DiarioUpdateByIDOperationCombinedInput, DiarioUpdateByIDOperationSuccessOutput, DiarioDeleteByIDOperationCombinedInput, DiarioDeleteByIDOperationSuccessOutput, DiarioListOperationCombinedInput, DiarioListOperationSuccessOutput, DiarioProfessorFindByIDOperationCombinedInput, DiarioProfessorFindByIDOperationSuccessOutput, DiarioProfessorCreateOperationCombinedInput, DiarioProfessorCreateOperationSuccessOutput, DiarioProfessorUpdateByIDOperationCombinedInput, DiarioProfessorUpdateByIDOperationSuccessOutput, DiarioProfessorDeleteByIDOperationCombinedInput, DiarioProfessorDeleteByIDOperationSuccessOutput, DiarioProfessorListOperationCombinedInput, DiarioProfessorListOperationSuccessOutput, ModalidadeFindByIDOperationCombinedInput, ModalidadeFindByIDOperationSuccessOutput, ModalidadeCreateOperationCombinedInput, ModalidadeCreateOperationSuccessOutput, ModalidadeUpdateByIDOperationCombinedInput, ModalidadeUpdateByIDOperationSuccessOutput, ModalidadeDeleteByIDOperationCombinedInput, ModalidadeDeleteByIDOperationSuccessOutput, ModalidadeListOperationCombinedInput, ModalidadeListOperationSuccessOutput, DisciplinaFindByIDOperationCombinedInput, DisciplinaFindByIDOperationSuccessOutput, DisciplinaCreateOperationCombinedInput, DisciplinaCreateOperationSuccessOutput, DisciplinaUpdateByIDOperationCombinedInput, DisciplinaUpdateByIDOperationSuccessOutput, DisciplinaDeleteByIDOperationCombinedInput, DisciplinaDeleteByIDOperationSuccessOutput, DisciplinaListOperationCombinedInput, DisciplinaListOperationSuccessOutput, TurmaFindByIDOperationCombinedInput, TurmaFindByIDOperationSuccessOutput, TurmaCreateOperationCombinedInput, TurmaCreateOperationSuccessOutput, TurmaUpdateByIDOperationCombinedInput, TurmaUpdateByIDOperationSuccessOutput, TurmaDeleteByIDOperationCombinedInput, TurmaDeleteByIDOperationSuccessOutput, TurmaListOperationCombinedInput, TurmaListOperationSuccessOutput, CalendarioLetivoFindByIDOperationCombinedInput, CalendarioLetivoFindByIDOperationSuccessOutput, CalendarioLetivoCreateOperationCombinedInput, CalendarioLetivoCreateOperationSuccessOutput, CalendarioLetivoUpdateByIDOperationCombinedInput, CalendarioLetivoUpdateByIDOperationSuccessOutput, CalendarioLetivoDeleteByIDOperationCombinedInput, CalendarioLetivoDeleteByIDOperationSuccessOutput, CalendarioLetivoListOperationCombinedInput, CalendarioLetivoListOperationSuccessOutput, DiaCalendarioFindByIDOperationCombinedInput, DiaCalendarioFindByIDOperationSuccessOutput, DiaCalendarioCreateOperationCombinedInput, DiaCalendarioCreateOperationSuccessOutput, DiaCalendarioUpdateByIDOperationCombinedInput, DiaCalendarioUpdateByIDOperationSuccessOutput, DiaCalendarioDeleteByIDOperationCombinedInput, DiaCalendarioDeleteByIDOperationSuccessOutput, DiaCalendarioListOperationCombinedInput, DiaCalendarioListOperationSuccessOutput, EtapaFindByIDOperationCombinedInput, EtapaFindByIDOperationSuccessOutput, EtapaCreateOperationCombinedInput, EtapaCreateOperationSuccessOutput, EtapaUpdateByIDOperationCombinedInput, EtapaUpdateByIDOperationSuccessOutput, EtapaDeleteByIDOperationCombinedInput, EtapaDeleteByIDOperationSuccessOutput, EtapaListOperationCombinedInput, EtapaListOperationSuccessOutput, AulaFindByIDOperationCombinedInput, AulaFindByIDOperationSuccessOutput, AulaCreateOperationCombinedInput, AulaCreateOperationSuccessOutput, AulaUpdateByIDOperationCombinedInput, AulaUpdateByIDOperationSuccessOutput, AulaDeleteByIDOperationCombinedInput, AulaDeleteByIDOperationSuccessOutput, AulaListOperationCombinedInput, AulaListOperationSuccessOutput, EventoFindByIDOperationCombinedInput, EventoFindByIDOperationSuccessOutput, EventoCreateOperationCombinedInput, EventoCreateOperationSuccessOutput, EventoUpdateByIDOperationCombinedInput, EventoUpdateByIDOperationSuccessOutput, EventoDeleteByIDOperationCombinedInput, EventoDeleteByIDOperationSuccessOutput, EventoListOperationCombinedInput, EventoListOperationSuccessOutput, TurmaDisponibilidadeFindByIDOperationCombinedInput, TurmaDisponibilidadeFindByIDOperationSuccessOutput, TurmaDisponibilidadeCreateOperationCombinedInput, TurmaDisponibilidadeCreateOperationSuccessOutput, TurmaDisponibilidadeUpdateByIDOperationCombinedInput, TurmaDisponibilidadeUpdateByIDOperationSuccessOutput, TurmaDisponibilidadeDeleteByIDOperationCombinedInput, TurmaDisponibilidadeDeleteByIDOperationSuccessOutput, TurmaDisponibilidadeListOperationCombinedInput, TurmaDisponibilidadeListOperationSuccessOutput, TurmaDisponibilidadeDiaFindByIDOperationCombinedInput, TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput, TurmaDisponibilidadeDiaCreateOperationCombinedInput, TurmaDisponibilidadeDiaCreateOperationSuccessOutput, TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput, TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput, TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput, TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput, TurmaDisponibilidadeDiaListOperationCombinedInput, TurmaDisponibilidadeDiaListOperationSuccessOutput } from "./file";
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
//   const authLoginOperationCombinedInput = Convert.toAuthLoginOperationCombinedInput(json);
//   const authLoginOperationSuccessOutput = Convert.toAuthLoginOperationSuccessOutput(json);
//   const authRefreshOperationCombinedInput = Convert.toAuthRefreshOperationCombinedInput(json);
//   const authRefreshOperationSuccessOutput = Convert.toAuthRefreshOperationSuccessOutput(json);
//   const authWhoAmIOperationCombinedInput = Convert.toAuthWhoAmIOperationCombinedInput(json);
//   const authWhoAmIOperationSuccessOutput = Convert.toAuthWhoAmIOperationSuccessOutput(json);
//   const authSetInitialPasswordOperationCombinedInput = Convert.toAuthSetInitialPasswordOperationCombinedInput(json);
//   const authSetInitialPasswordOperationSuccessOutput = Convert.toAuthSetInitialPasswordOperationSuccessOutput(json);
//   const usuarioFindByIDOperationCombinedInput = Convert.toUsuarioFindByIDOperationCombinedInput(json);
//   const usuarioFindByIDOperationSuccessOutput = Convert.toUsuarioFindByIDOperationSuccessOutput(json);
//   const usuarioCreateOperationCombinedInput = Convert.toUsuarioCreateOperationCombinedInput(json);
//   const usuarioCreateOperationSuccessOutput = Convert.toUsuarioCreateOperationSuccessOutput(json);
//   const usuarioUpdateByIDOperationCombinedInput = Convert.toUsuarioUpdateByIDOperationCombinedInput(json);
//   const usuarioUpdateByIDOperationSuccessOutput = Convert.toUsuarioUpdateByIDOperationSuccessOutput(json);
//   const usuarioDeleteByIDOperationCombinedInput = Convert.toUsuarioDeleteByIDOperationCombinedInput(json);
//   const usuarioDeleteByIDOperationSuccessOutput = Convert.toUsuarioDeleteByIDOperationSuccessOutput(json);
//   const usuarioListOperationCombinedInput = Convert.toUsuarioListOperationCombinedInput(json);
//   const usuarioListOperationSuccessOutput = Convert.toUsuarioListOperationSuccessOutput(json);
//   const vinculoFindByIDOperationCombinedInput = Convert.toVinculoFindByIDOperationCombinedInput(json);
//   const vinculoFindByIDOperationSuccessOutput = Convert.toVinculoFindByIDOperationSuccessOutput(json);
//   const vinculoListOperationCombinedInput = Convert.toVinculoListOperationCombinedInput(json);
//   const vinculoListOperationSuccessOutput = Convert.toVinculoListOperationSuccessOutput(json);
//   const ambienteFindByIDOperationCombinedInput = Convert.toAmbienteFindByIDOperationCombinedInput(json);
//   const ambienteFindByIDOperationSuccessOutput = Convert.toAmbienteFindByIDOperationSuccessOutput(json);
//   const ambienteCreateOperationCombinedInput = Convert.toAmbienteCreateOperationCombinedInput(json);
//   const ambienteCreateOperationSuccessOutput = Convert.toAmbienteCreateOperationSuccessOutput(json);
//   const ambienteUpdateByIDOperationCombinedInput = Convert.toAmbienteUpdateByIDOperationCombinedInput(json);
//   const ambienteUpdateByIDOperationSuccessOutput = Convert.toAmbienteUpdateByIDOperationSuccessOutput(json);
//   const ambienteDeleteByIDOperationCombinedInput = Convert.toAmbienteDeleteByIDOperationCombinedInput(json);
//   const ambienteDeleteByIDOperationSuccessOutput = Convert.toAmbienteDeleteByIDOperationSuccessOutput(json);
//   const ambienteListOperationCombinedInput = Convert.toAmbienteListOperationCombinedInput(json);
//   const ambienteListOperationSuccessOutput = Convert.toAmbienteListOperationSuccessOutput(json);
//   const blocoFindByIDOperationCombinedInput = Convert.toBlocoFindByIDOperationCombinedInput(json);
//   const blocoFindByIDOperationSuccessOutput = Convert.toBlocoFindByIDOperationSuccessOutput(json);
//   const blocoCreateOperationCombinedInput = Convert.toBlocoCreateOperationCombinedInput(json);
//   const blocoCreateOperationSuccessOutput = Convert.toBlocoCreateOperationSuccessOutput(json);
//   const blocoUpdateByIDOperationCombinedInput = Convert.toBlocoUpdateByIDOperationCombinedInput(json);
//   const blocoUpdateByIDOperationSuccessOutput = Convert.toBlocoUpdateByIDOperationSuccessOutput(json);
//   const blocoDeleteByIDOperationCombinedInput = Convert.toBlocoDeleteByIDOperationCombinedInput(json);
//   const blocoDeleteByIDOperationSuccessOutput = Convert.toBlocoDeleteByIDOperationSuccessOutput(json);
//   const blocoListOperationCombinedInput = Convert.toBlocoListOperationCombinedInput(json);
//   const blocoListOperationSuccessOutput = Convert.toBlocoListOperationSuccessOutput(json);
//   const campusFindByIDOperationCombinedInput = Convert.toCampusFindByIDOperationCombinedInput(json);
//   const campusFindByIDOperationSuccessOutput = Convert.toCampusFindByIDOperationSuccessOutput(json);
//   const campusCreateOperationCombinedInput = Convert.toCampusCreateOperationCombinedInput(json);
//   const campusCreateOperationSuccessOutput = Convert.toCampusCreateOperationSuccessOutput(json);
//   const campusUpdateByIDOperationCombinedInput = Convert.toCampusUpdateByIDOperationCombinedInput(json);
//   const campusUpdateByIDOperationSuccessOutput = Convert.toCampusUpdateByIDOperationSuccessOutput(json);
//   const campusDeleteByIDOperationCombinedInput = Convert.toCampusDeleteByIDOperationCombinedInput(json);
//   const campusDeleteByIDOperationSuccessOutput = Convert.toCampusDeleteByIDOperationSuccessOutput(json);
//   const campusListOperationCombinedInput = Convert.toCampusListOperationCombinedInput(json);
//   const campusListOperationSuccessOutput = Convert.toCampusListOperationSuccessOutput(json);
//   const estadoFindByIDOperationCombinedInput = Convert.toEstadoFindByIDOperationCombinedInput(json);
//   const estadoFindByIDOperationSuccessOutput = Convert.toEstadoFindByIDOperationSuccessOutput(json);
//   const estadoListOperationCombinedInput = Convert.toEstadoListOperationCombinedInput(json);
//   const estadoListOperationSuccessOutput = Convert.toEstadoListOperationSuccessOutput(json);
//   const reservaFindByIDOperationCombinedInput = Convert.toReservaFindByIDOperationCombinedInput(json);
//   const reservaFindByIDOperationSuccessOutput = Convert.toReservaFindByIDOperationSuccessOutput(json);
//   const reservaCreateOperationCombinedInput = Convert.toReservaCreateOperationCombinedInput(json);
//   const reservaCreateOperationSuccessOutput = Convert.toReservaCreateOperationSuccessOutput(json);
//   const reservaUpdateByIDOperationCombinedInput = Convert.toReservaUpdateByIDOperationCombinedInput(json);
//   const reservaUpdateByIDOperationSuccessOutput = Convert.toReservaUpdateByIDOperationSuccessOutput(json);
//   const reservaListOperationCombinedInput = Convert.toReservaListOperationCombinedInput(json);
//   const reservaListOperationSuccessOutput = Convert.toReservaListOperationSuccessOutput(json);
//   const cursoFindByIDOperationCombinedInput = Convert.toCursoFindByIDOperationCombinedInput(json);
//   const cursoFindByIDOperationSuccessOutput = Convert.toCursoFindByIDOperationSuccessOutput(json);
//   const cursoCreateOperationCombinedInput = Convert.toCursoCreateOperationCombinedInput(json);
//   const cursoCreateOperationSuccessOutput = Convert.toCursoCreateOperationSuccessOutput(json);
//   const cursoUpdateByIDOperationCombinedInput = Convert.toCursoUpdateByIDOperationCombinedInput(json);
//   const cursoUpdateByIDOperationSuccessOutput = Convert.toCursoUpdateByIDOperationSuccessOutput(json);
//   const cursoDeleteByIDOperationCombinedInput = Convert.toCursoDeleteByIDOperationCombinedInput(json);
//   const cursoDeleteByIDOperationSuccessOutput = Convert.toCursoDeleteByIDOperationSuccessOutput(json);
//   const cursoListOperationCombinedInput = Convert.toCursoListOperationCombinedInput(json);
//   const cursoListOperationSuccessOutput = Convert.toCursoListOperationSuccessOutput(json);
//   const diarioFindByIDOperationCombinedInput = Convert.toDiarioFindByIDOperationCombinedInput(json);
//   const diarioFindByIDOperationSuccessOutput = Convert.toDiarioFindByIDOperationSuccessOutput(json);
//   const diarioCreateOperationCombinedInput = Convert.toDiarioCreateOperationCombinedInput(json);
//   const diarioCreateOperationSuccessOutput = Convert.toDiarioCreateOperationSuccessOutput(json);
//   const diarioUpdateByIDOperationCombinedInput = Convert.toDiarioUpdateByIDOperationCombinedInput(json);
//   const diarioUpdateByIDOperationSuccessOutput = Convert.toDiarioUpdateByIDOperationSuccessOutput(json);
//   const diarioDeleteByIDOperationCombinedInput = Convert.toDiarioDeleteByIDOperationCombinedInput(json);
//   const diarioDeleteByIDOperationSuccessOutput = Convert.toDiarioDeleteByIDOperationSuccessOutput(json);
//   const diarioListOperationCombinedInput = Convert.toDiarioListOperationCombinedInput(json);
//   const diarioListOperationSuccessOutput = Convert.toDiarioListOperationSuccessOutput(json);
//   const diarioProfessorFindByIDOperationCombinedInput = Convert.toDiarioProfessorFindByIDOperationCombinedInput(json);
//   const diarioProfessorFindByIDOperationSuccessOutput = Convert.toDiarioProfessorFindByIDOperationSuccessOutput(json);
//   const diarioProfessorCreateOperationCombinedInput = Convert.toDiarioProfessorCreateOperationCombinedInput(json);
//   const diarioProfessorCreateOperationSuccessOutput = Convert.toDiarioProfessorCreateOperationSuccessOutput(json);
//   const diarioProfessorUpdateByIDOperationCombinedInput = Convert.toDiarioProfessorUpdateByIDOperationCombinedInput(json);
//   const diarioProfessorUpdateByIDOperationSuccessOutput = Convert.toDiarioProfessorUpdateByIDOperationSuccessOutput(json);
//   const diarioProfessorDeleteByIDOperationCombinedInput = Convert.toDiarioProfessorDeleteByIDOperationCombinedInput(json);
//   const diarioProfessorDeleteByIDOperationSuccessOutput = Convert.toDiarioProfessorDeleteByIDOperationSuccessOutput(json);
//   const diarioProfessorListOperationCombinedInput = Convert.toDiarioProfessorListOperationCombinedInput(json);
//   const diarioProfessorListOperationSuccessOutput = Convert.toDiarioProfessorListOperationSuccessOutput(json);
//   const modalidadeFindByIDOperationCombinedInput = Convert.toModalidadeFindByIDOperationCombinedInput(json);
//   const modalidadeFindByIDOperationSuccessOutput = Convert.toModalidadeFindByIDOperationSuccessOutput(json);
//   const modalidadeCreateOperationCombinedInput = Convert.toModalidadeCreateOperationCombinedInput(json);
//   const modalidadeCreateOperationSuccessOutput = Convert.toModalidadeCreateOperationSuccessOutput(json);
//   const modalidadeUpdateByIDOperationCombinedInput = Convert.toModalidadeUpdateByIDOperationCombinedInput(json);
//   const modalidadeUpdateByIDOperationSuccessOutput = Convert.toModalidadeUpdateByIDOperationSuccessOutput(json);
//   const modalidadeDeleteByIDOperationCombinedInput = Convert.toModalidadeDeleteByIDOperationCombinedInput(json);
//   const modalidadeDeleteByIDOperationSuccessOutput = Convert.toModalidadeDeleteByIDOperationSuccessOutput(json);
//   const modalidadeListOperationCombinedInput = Convert.toModalidadeListOperationCombinedInput(json);
//   const modalidadeListOperationSuccessOutput = Convert.toModalidadeListOperationSuccessOutput(json);
//   const disciplinaFindByIDOperationCombinedInput = Convert.toDisciplinaFindByIDOperationCombinedInput(json);
//   const disciplinaFindByIDOperationSuccessOutput = Convert.toDisciplinaFindByIDOperationSuccessOutput(json);
//   const disciplinaCreateOperationCombinedInput = Convert.toDisciplinaCreateOperationCombinedInput(json);
//   const disciplinaCreateOperationSuccessOutput = Convert.toDisciplinaCreateOperationSuccessOutput(json);
//   const disciplinaUpdateByIDOperationCombinedInput = Convert.toDisciplinaUpdateByIDOperationCombinedInput(json);
//   const disciplinaUpdateByIDOperationSuccessOutput = Convert.toDisciplinaUpdateByIDOperationSuccessOutput(json);
//   const disciplinaDeleteByIDOperationCombinedInput = Convert.toDisciplinaDeleteByIDOperationCombinedInput(json);
//   const disciplinaDeleteByIDOperationSuccessOutput = Convert.toDisciplinaDeleteByIDOperationSuccessOutput(json);
//   const disciplinaListOperationCombinedInput = Convert.toDisciplinaListOperationCombinedInput(json);
//   const disciplinaListOperationSuccessOutput = Convert.toDisciplinaListOperationSuccessOutput(json);
//   const turmaFindByIDOperationCombinedInput = Convert.toTurmaFindByIDOperationCombinedInput(json);
//   const turmaFindByIDOperationSuccessOutput = Convert.toTurmaFindByIDOperationSuccessOutput(json);
//   const turmaCreateOperationCombinedInput = Convert.toTurmaCreateOperationCombinedInput(json);
//   const turmaCreateOperationSuccessOutput = Convert.toTurmaCreateOperationSuccessOutput(json);
//   const turmaUpdateByIDOperationCombinedInput = Convert.toTurmaUpdateByIDOperationCombinedInput(json);
//   const turmaUpdateByIDOperationSuccessOutput = Convert.toTurmaUpdateByIDOperationSuccessOutput(json);
//   const turmaDeleteByIDOperationCombinedInput = Convert.toTurmaDeleteByIDOperationCombinedInput(json);
//   const turmaDeleteByIDOperationSuccessOutput = Convert.toTurmaDeleteByIDOperationSuccessOutput(json);
//   const turmaListOperationCombinedInput = Convert.toTurmaListOperationCombinedInput(json);
//   const turmaListOperationSuccessOutput = Convert.toTurmaListOperationSuccessOutput(json);
//   const calendarioLetivoFindByIDOperationCombinedInput = Convert.toCalendarioLetivoFindByIDOperationCombinedInput(json);
//   const calendarioLetivoFindByIDOperationSuccessOutput = Convert.toCalendarioLetivoFindByIDOperationSuccessOutput(json);
//   const calendarioLetivoCreateOperationCombinedInput = Convert.toCalendarioLetivoCreateOperationCombinedInput(json);
//   const calendarioLetivoCreateOperationSuccessOutput = Convert.toCalendarioLetivoCreateOperationSuccessOutput(json);
//   const calendarioLetivoUpdateByIDOperationCombinedInput = Convert.toCalendarioLetivoUpdateByIDOperationCombinedInput(json);
//   const calendarioLetivoUpdateByIDOperationSuccessOutput = Convert.toCalendarioLetivoUpdateByIDOperationSuccessOutput(json);
//   const calendarioLetivoDeleteByIDOperationCombinedInput = Convert.toCalendarioLetivoDeleteByIDOperationCombinedInput(json);
//   const calendarioLetivoDeleteByIDOperationSuccessOutput = Convert.toCalendarioLetivoDeleteByIDOperationSuccessOutput(json);
//   const calendarioLetivoListOperationCombinedInput = Convert.toCalendarioLetivoListOperationCombinedInput(json);
//   const calendarioLetivoListOperationSuccessOutput = Convert.toCalendarioLetivoListOperationSuccessOutput(json);
//   const diaCalendarioFindByIDOperationCombinedInput = Convert.toDiaCalendarioFindByIDOperationCombinedInput(json);
//   const diaCalendarioFindByIDOperationSuccessOutput = Convert.toDiaCalendarioFindByIDOperationSuccessOutput(json);
//   const diaCalendarioCreateOperationCombinedInput = Convert.toDiaCalendarioCreateOperationCombinedInput(json);
//   const diaCalendarioCreateOperationSuccessOutput = Convert.toDiaCalendarioCreateOperationSuccessOutput(json);
//   const diaCalendarioUpdateByIDOperationCombinedInput = Convert.toDiaCalendarioUpdateByIDOperationCombinedInput(json);
//   const diaCalendarioUpdateByIDOperationSuccessOutput = Convert.toDiaCalendarioUpdateByIDOperationSuccessOutput(json);
//   const diaCalendarioDeleteByIDOperationCombinedInput = Convert.toDiaCalendarioDeleteByIDOperationCombinedInput(json);
//   const diaCalendarioDeleteByIDOperationSuccessOutput = Convert.toDiaCalendarioDeleteByIDOperationSuccessOutput(json);
//   const diaCalendarioListOperationCombinedInput = Convert.toDiaCalendarioListOperationCombinedInput(json);
//   const diaCalendarioListOperationSuccessOutput = Convert.toDiaCalendarioListOperationSuccessOutput(json);
//   const etapaFindByIDOperationCombinedInput = Convert.toEtapaFindByIDOperationCombinedInput(json);
//   const etapaFindByIDOperationSuccessOutput = Convert.toEtapaFindByIDOperationSuccessOutput(json);
//   const etapaCreateOperationCombinedInput = Convert.toEtapaCreateOperationCombinedInput(json);
//   const etapaCreateOperationSuccessOutput = Convert.toEtapaCreateOperationSuccessOutput(json);
//   const etapaUpdateByIDOperationCombinedInput = Convert.toEtapaUpdateByIDOperationCombinedInput(json);
//   const etapaUpdateByIDOperationSuccessOutput = Convert.toEtapaUpdateByIDOperationSuccessOutput(json);
//   const etapaDeleteByIDOperationCombinedInput = Convert.toEtapaDeleteByIDOperationCombinedInput(json);
//   const etapaDeleteByIDOperationSuccessOutput = Convert.toEtapaDeleteByIDOperationSuccessOutput(json);
//   const etapaListOperationCombinedInput = Convert.toEtapaListOperationCombinedInput(json);
//   const etapaListOperationSuccessOutput = Convert.toEtapaListOperationSuccessOutput(json);
//   const aulaFindByIDOperationCombinedInput = Convert.toAulaFindByIDOperationCombinedInput(json);
//   const aulaFindByIDOperationSuccessOutput = Convert.toAulaFindByIDOperationSuccessOutput(json);
//   const aulaCreateOperationCombinedInput = Convert.toAulaCreateOperationCombinedInput(json);
//   const aulaCreateOperationSuccessOutput = Convert.toAulaCreateOperationSuccessOutput(json);
//   const aulaUpdateByIDOperationCombinedInput = Convert.toAulaUpdateByIDOperationCombinedInput(json);
//   const aulaUpdateByIDOperationSuccessOutput = Convert.toAulaUpdateByIDOperationSuccessOutput(json);
//   const aulaDeleteByIDOperationCombinedInput = Convert.toAulaDeleteByIDOperationCombinedInput(json);
//   const aulaDeleteByIDOperationSuccessOutput = Convert.toAulaDeleteByIDOperationSuccessOutput(json);
//   const aulaListOperationCombinedInput = Convert.toAulaListOperationCombinedInput(json);
//   const aulaListOperationSuccessOutput = Convert.toAulaListOperationSuccessOutput(json);
//   const eventoFindByIDOperationCombinedInput = Convert.toEventoFindByIDOperationCombinedInput(json);
//   const eventoFindByIDOperationSuccessOutput = Convert.toEventoFindByIDOperationSuccessOutput(json);
//   const eventoCreateOperationCombinedInput = Convert.toEventoCreateOperationCombinedInput(json);
//   const eventoCreateOperationSuccessOutput = Convert.toEventoCreateOperationSuccessOutput(json);
//   const eventoUpdateByIDOperationCombinedInput = Convert.toEventoUpdateByIDOperationCombinedInput(json);
//   const eventoUpdateByIDOperationSuccessOutput = Convert.toEventoUpdateByIDOperationSuccessOutput(json);
//   const eventoDeleteByIDOperationCombinedInput = Convert.toEventoDeleteByIDOperationCombinedInput(json);
//   const eventoDeleteByIDOperationSuccessOutput = Convert.toEventoDeleteByIDOperationSuccessOutput(json);
//   const eventoListOperationCombinedInput = Convert.toEventoListOperationCombinedInput(json);
//   const eventoListOperationSuccessOutput = Convert.toEventoListOperationSuccessOutput(json);
//   const turmaDisponibilidadeFindByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeFindByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeFindByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeFindByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeCreateOperationCombinedInput = Convert.toTurmaDisponibilidadeCreateOperationCombinedInput(json);
//   const turmaDisponibilidadeCreateOperationSuccessOutput = Convert.toTurmaDisponibilidadeCreateOperationSuccessOutput(json);
//   const turmaDisponibilidadeUpdateByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeUpdateByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeUpdateByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeUpdateByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeDeleteByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeDeleteByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeDeleteByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeDeleteByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeListOperationCombinedInput = Convert.toTurmaDisponibilidadeListOperationCombinedInput(json);
//   const turmaDisponibilidadeListOperationSuccessOutput = Convert.toTurmaDisponibilidadeListOperationSuccessOutput(json);
//   const turmaDisponibilidadeDiaFindByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeDiaFindByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeDiaFindByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeDiaFindByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeDiaCreateOperationCombinedInput = Convert.toTurmaDisponibilidadeDiaCreateOperationCombinedInput(json);
//   const turmaDisponibilidadeDiaCreateOperationSuccessOutput = Convert.toTurmaDisponibilidadeDiaCreateOperationSuccessOutput(json);
//   const turmaDisponibilidadeDiaUpdateByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeDiaDeleteByIDOperationCombinedInput = Convert.toTurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput(json);
//   const turmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput = Convert.toTurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput(json);
//   const turmaDisponibilidadeDiaListOperationCombinedInput = Convert.toTurmaDisponibilidadeDiaListOperationCombinedInput(json);
//   const turmaDisponibilidadeDiaListOperationSuccessOutput = Convert.toTurmaDisponibilidadeDiaListOperationSuccessOutput(json);
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
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de entrada para encontrar um Imagem por ID.
 */
export interface ImagemFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
}

/**
 * Dados de entrada para encontrar uma versão de uma imagem por ID.
 */
export interface ImagemArquivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
}

/**
 * Dados de entrada para obter as credenciais de sessão por meio de login refresh.
 */
export interface AuthRefreshInput {
    /**
     * Token de refresh.
     */
    refreshToken: string;
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
    imagemCapa:   ImagemFindOneResult | null;
    imagemPerfil: ImagemFindOneResult | null;
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
}

/**
 * Vínculos ativos do Usuário.
 *
 * Visão FindOne de um Vínculo.
 *
 * Vínculo do usuário ao campus.
 *
 * Corpo de resposta da operação VinculoFindById.
 *
 * Corpo de resposta da operação VinculoList.
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
 *
 * Corpo de resposta da operação CampusFindById.
 *
 * Corpo de resposta da operação CampusCreate.
 *
 * Updated data
 *
 * Corpo de resposta da operação CampusList.
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
}

/**
 * Cidade
 *
 * Visão FindOne de uma Cidade.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação EstadoFindById.
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
}

/**
 * Usuário autenticado.
 *
 * Visão FindOne de um Usuário.
 *
 * Usuário associado ao vínculo.
 *
 * Usuário que fez a reserva.
 *
 * Corpo de resposta da operação UsuarioFindById.
 *
 * Corpo de resposta da operação UsuarioCreate.
 *
 * Updated data
 *
 * Corpo de resposta da operação UsuarioList.
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
    imagemCapa: Imagem | null;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Nome do ambiente/sala.
     */
    nome: string;
    tipo: null | string;
}

/**
 * Bloco que o ambiente/sala pertence.
 *
 * Visão FindOne de um Bloco.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação BlocoFindById.
 *
 * Corpo de resposta da operação BlocoCreate.
 *
 * Updated data
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Nome do Bloco.
     */
    nome: string;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Nome do Bloco.
     */
    nome: string;
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
 *
 * Corpo de resposta da operação AmbienteFindById.
 *
 * Corpo de resposta da operação AmbienteCreate.
 *
 * Updated data
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Nome do ambiente/sala.
     */
    nome: string;
    tipo: null | string;
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
}

/**
 * Dados de entrada para encontrar um Endereco por ID.
 */
export interface EnderecoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
}

/**
 * Dados de entrada para encontrar um Estado por ID.
 */
export interface EstadoFindOneInput {
    /**
     * ID do Registro.
     */
    id: number;
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
}

/**
 * Dados de entrada para encontrar uma Reserva por ID.
 */
export interface ReservaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
    imagemCapa: ImagemFindOneResult | null;
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
}

/**
 * Modalidade a que o curso pertence.
 *
 * Visão FindOne de uma Modalidade.
 *
 * Item da busca.
 *
 * Modalidade.
 *
 * Corpo de resposta da operação ModalidadeFindById.
 *
 * Corpo de resposta da operação ModalidadeCreate.
 *
 * Updated data
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
}

/**
 * Unnamed View
 */
export interface Diario {
    ambientePadrao: AmbienteFindOneResult | null;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Situação do diário.
     */
    situacao: boolean;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneResult;
}

/**
 * Disciplina vinculada ao diário.
 *
 * Visão FindOne de uma Disciplina.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação DisciplinaFindById.
 *
 * Corpo de resposta da operação DisciplinaCreate.
 *
 * Updated data
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
}

/**
 * Turma vinculada ao diário.
 *
 * Visão FindOne de uma Turma.
 *
 * Item da busca.
 *
 * Turma.
 *
 * Corpo de resposta da operação TurmaFindById.
 *
 * Corpo de resposta da operação TurmaCreate.
 *
 * Updated data
 */
export interface TurmaFindOneResult {
    ambientePadraoAula?: AmbienteFindOneResult | null;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Período do Turma.
     */
    periodo: string;
}

/**
 * Visão FindOne de um Curso.
 *
 * Item da busca.
 *
 * Curso da Turma.
 *
 * Corpo de resposta da operação CursoFindById.
 *
 * Corpo de resposta da operação CursoCreate.
 *
 * Updated data
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
    imagemCapa: ImagemFindOneResult | null;
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
}

/**
 * Visão FindOne de um Diario.
 *
 * Item da busca.
 *
 * Diário vinculado.
 *
 * Diário associado à aula.
 *
 * Corpo de resposta da operação DiarioFindById.
 *
 * Corpo de resposta da operação DiarioCreate.
 *
 * Updated data
 */
export interface DiarioFindOneResult {
    ambientePadrao: AmbienteFindOneResult | null;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Situação do diário.
     */
    situacao: boolean;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneResult;
}

/**
 * Dados de entrada para encontrar um DiarioProfessor por ID.
 */
export interface DiarioProfessorFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Nome da disciplina.
     */
    nome: string;
    /**
     * Nome abreviado da disciplina.
     */
    nomeAbreviado: string;
}

/**
 * Unnamed View
 */
export interface Turma {
    ambientePadraoAula?: AmbienteFindOneResult | null;
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
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Período do Turma.
     */
    periodo: string;
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
    modalidade: ModalidadeFindOneResult | null;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
}

/**
 * Visão completa de um DiaCalendario.
 */
export interface DiaCalendario {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Visão FindOne de um CalendarioLetivo.
 *
 * Item da busca.
 *
 * Calendario.
 *
 * Corpo de resposta da operação CalendarioLetivoFindById.
 *
 * Corpo de resposta da operação CalendarioLetivoCreate.
 *
 * Updated data
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
    modalidade: ModalidadeFindOneResult | null;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
}

/**
 * Dados de entrada para encontrar um DiaCalendario por ID.
 */
export interface DiaCalendarioFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Visão completa de um Etapa.
 */
export interface Etapa {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Dados de entrada para encontrar um Etapa por ID.
 */
export interface EtapaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Unnamed View
 */
export interface Aula {
    ambiente: AmbienteFindOneResult | null;
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
}

/**
 * Dados de entrada para encontrar uma Aula por ID.
 */
export interface AulaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Visão completa de um Evento.
 */
export interface Evento {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Dados de entrada para encontrar um Evento por ID.
 */
export interface EventoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
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
    turma: TurmaFindOneResult | null;
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
    intervaloDeTempo:     IntervaloDeTempoFindOneResult | null;
    turmaDisponibilidade: TurmaDisponibilidadeFindOneResult | null;
}

/**
 * Visão FindOne de uma TurmaDisponibilidade.
 *
 * Item da busca.
 *
 * Disponibilidade da turma.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeFindById.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeCreate.
 *
 * Updated data
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
    turma: TurmaFindOneResult | null;
}

/**
 * Dados de entrada para encontrar uma TurmaDisponibilidadeDia por ID.
 */
export interface TurmaDisponibilidadeDiaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de entrada combinados
 */
export interface AuthLoginOperationCombinedInput {
    body:    AuthLoginInput;
    params:  AuthLoginOperationCombinedInputParams;
    queries: AuthLoginOperationCombinedInputQueries;
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
}

export interface AuthLoginOperationCombinedInputParams {
}

export interface AuthLoginOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AuthLoginOperationSuccessOutput {
    body: AuthSessionCredentials;
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
}

/**
 * Dados de entrada combinados
 */
export interface AuthRefreshOperationCombinedInput {
    params:  AuthRefreshOperationCombinedInputParams;
    queries: AuthRefreshOperationCombinedInputQueries;
}

export interface AuthRefreshOperationCombinedInputParams {
}

export interface AuthRefreshOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AuthRefreshOperationSuccessOutput {
    body: AuthSessionCredentials;
}

/**
 * Dados de entrada combinados
 */
export interface AuthWhoAmIOperationCombinedInput {
    params:  AuthWhoAmIOperationCombinedInputParams;
    queries: AuthWhoAmIOperationCombinedInputQueries;
}

export interface AuthWhoAmIOperationCombinedInputParams {
}

export interface AuthWhoAmIOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AuthWhoAmIOperationSuccessOutput {
    body: AuthWhoAmIResult;
}

/**
 * Informações sobre o ator.
 */
export interface AuthWhoAmIResult {
    usuario: UsuarioFindOneResult | null;
}

/**
 * Dados de entrada combinados
 */
export interface AuthSetInitialPasswordOperationCombinedInput {
    body:    AuthSetInitialPasswordInput;
    params:  AuthSetInitialPasswordOperationCombinedInputParams;
    queries: AuthSetInitialPasswordOperationCombinedInputQueries;
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
}

export interface AuthSetInitialPasswordOperationCombinedInputParams {
}

export interface AuthSetInitialPasswordOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AuthSetInitialPasswordOperationSuccessOutput {
    /**
     * Resultado.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface UsuarioFindByIDOperationCombinedInput {
    params:  UsuarioFindByIDOperationCombinedInputParams;
    queries: UsuarioFindByIDOperationCombinedInputQueries;
}

export interface UsuarioFindByIDOperationCombinedInputParams {
    id: string;
}

export interface UsuarioFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioFindById.
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface UsuarioCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'UsuarioCreate'.
     */
    body:    UsuarioInputCreate;
    params:  UsuarioCreateOperationCombinedInputParams;
    queries: UsuarioCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Usuario.
 *
 * Corpo de entrada da operação 'UsuarioCreate'.
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
}

export interface UsuarioCreateOperationCombinedInputParams {
}

export interface UsuarioCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioCreate.
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface UsuarioUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    UsuarioInputUpdate;
    params:  UsuarioUpdateByIDOperationCombinedInputParams;
    queries: UsuarioUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Usuario.
 *
 * Data to update
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
}

export interface UsuarioUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface UsuarioUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface UsuarioDeleteByIDOperationCombinedInput {
    params:  UsuarioDeleteByIDOperationCombinedInputParams;
    queries: UsuarioDeleteByIDOperationCombinedInputQueries;
}

export interface UsuarioDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface UsuarioDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface UsuarioListOperationCombinedInput {
    params:  UsuarioListOperationCombinedInputParams;
    queries: UsuarioListOperationCombinedInputQueries;
}

export interface UsuarioListOperationCombinedInputParams {
}

export interface UsuarioListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioList.
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface VinculoFindByIDOperationCombinedInput {
    params:  VinculoFindByIDOperationCombinedInputParams;
    queries: VinculoFindByIDOperationCombinedInputQueries;
}

export interface VinculoFindByIDOperationCombinedInputParams {
    id: string;
}

export interface VinculoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface VinculoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação VinculoFindById.
     */
    body: VinculoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface VinculoListOperationCombinedInput {
    params:  VinculoListOperationCombinedInputParams;
    queries: VinculoListOperationCombinedInputQueries;
}

export interface VinculoListOperationCombinedInputParams {
}

export interface VinculoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface VinculoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação VinculoList.
     */
    body: VinculoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AmbienteFindByIDOperationCombinedInput {
    params:  AmbienteFindByIDOperationCombinedInputParams;
    queries: AmbienteFindByIDOperationCombinedInputQueries;
}

export interface AmbienteFindByIDOperationCombinedInputParams {
    id: string;
}

export interface AmbienteFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AmbienteFindById.
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AmbienteCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'AmbienteCreate'.
     */
    body:    AmbienteInputCreate;
    params:  AmbienteCreateOperationCombinedInputParams;
    queries: AmbienteCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um ambiente.
 *
 * Corpo de entrada da operação 'AmbienteCreate'.
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
}

export interface AmbienteCreateOperationCombinedInputParams {
}

export interface AmbienteCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AmbienteCreate.
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AmbienteUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    AmbienteInputUpdate;
    params:  AmbienteUpdateByIDOperationCombinedInputParams;
    queries: AmbienteUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um ambiente.
 *
 * Data to update
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
}

export interface AmbienteUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface AmbienteUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AmbienteDeleteByIDOperationCombinedInput {
    params:  AmbienteDeleteByIDOperationCombinedInputParams;
    queries: AmbienteDeleteByIDOperationCombinedInputQueries;
}

export interface AmbienteDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface AmbienteDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface AmbienteListOperationCombinedInput {
    params:  AmbienteListOperationCombinedInputParams;
    queries: AmbienteListOperationCombinedInputQueries;
}

export interface AmbienteListOperationCombinedInputParams {
    /**
     * Filtro 'bloco.campus.id'
     */
    "bloco.campus.id"?: string;
    /**
     * Filtro 'bloco.id'
     */
    "bloco.id"?: string;
}

export interface AmbienteListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AmbienteList.
     */
    body: AmbienteFindAllResult;
}

/**
 * Resultados da busca a Ambientes.
 *
 * Corpo de resposta da operação AmbienteList.
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
}

/**
 * Dados de entrada combinados
 */
export interface BlocoFindByIDOperationCombinedInput {
    params:  BlocoFindByIDOperationCombinedInputParams;
    queries: BlocoFindByIDOperationCombinedInputQueries;
}

export interface BlocoFindByIDOperationCombinedInputParams {
    id: string;
}

export interface BlocoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface BlocoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação BlocoFindById.
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface BlocoCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'BlocoCreate'.
     */
    body:    BlocoInputCreate;
    params:  BlocoCreateOperationCombinedInputParams;
    queries: BlocoCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Bloco.
 *
 * Corpo de entrada da operação 'BlocoCreate'.
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
}

export interface BlocoCreateOperationCombinedInputParams {
}

export interface BlocoCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface BlocoCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação BlocoCreate.
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface BlocoUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    BlocoInputUpdate;
    params:  BlocoUpdateByIDOperationCombinedInputParams;
    queries: BlocoUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Bloco.
 *
 * Data to update
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
}

export interface BlocoUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface BlocoUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface BlocoUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface BlocoDeleteByIDOperationCombinedInput {
    params:  BlocoDeleteByIDOperationCombinedInputParams;
    queries: BlocoDeleteByIDOperationCombinedInputQueries;
}

export interface BlocoDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface BlocoDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface BlocoDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface BlocoListOperationCombinedInput {
    params:  BlocoListOperationCombinedInputParams;
    queries: BlocoListOperationCombinedInputQueries;
}

export interface BlocoListOperationCombinedInputParams {
    /**
     * Filtro 'campus.id'
     */
    "campus.id"?: string;
}

export interface BlocoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface BlocoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação BlocoList.
     */
    body: BlocoFindAllResult;
}

/**
 * Resultados da busca a Blocos.
 *
 * Corpo de resposta da operação BlocoList.
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
}

/**
 * Dados de entrada combinados
 */
export interface CampusFindByIDOperationCombinedInput {
    params:  CampusFindByIDOperationCombinedInputParams;
    queries: CampusFindByIDOperationCombinedInputQueries;
}

export interface CampusFindByIDOperationCombinedInputParams {
    id: string;
}

export interface CampusFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CampusFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CampusFindById.
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CampusCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'CampusCreate'.
     */
    body:    CampusInputCreate;
    params:  CampusCreateOperationCombinedInputParams;
    queries: CampusCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Campus.
 *
 * Corpo de entrada da operação 'CampusCreate'.
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
}

export interface CampusCreateOperationCombinedInputParams {
}

export interface CampusCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CampusCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CampusCreate.
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CampusUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    CampusInputUpdate;
    params:  CampusUpdateByIDOperationCombinedInputParams;
    queries: CampusUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Campus.
 *
 * Data to update
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
}

export interface CampusUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface CampusUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CampusUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CampusDeleteByIDOperationCombinedInput {
    params:  CampusDeleteByIDOperationCombinedInputParams;
    queries: CampusDeleteByIDOperationCombinedInputQueries;
}

export interface CampusDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface CampusDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CampusDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface CampusListOperationCombinedInput {
    params:  CampusListOperationCombinedInputParams;
    queries: CampusListOperationCombinedInputQueries;
}

export interface CampusListOperationCombinedInputParams {
    /**
     * Filtro 'endereco.cidade.estado.id'
     */
    "endereco.cidade.estado.id"?: string;
    /**
     * Filtro 'endereco.cidade.id'
     */
    "endereco.cidade.id"?: string;
}

export interface CampusListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CampusListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CampusList.
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EstadoFindByIDOperationCombinedInput {
    params:  EstadoFindByIDOperationCombinedInputParams;
    queries: EstadoFindByIDOperationCombinedInputQueries;
}

export interface EstadoFindByIDOperationCombinedInputParams {
    id: number;
}

export interface EstadoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EstadoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EstadoFindById.
     */
    body: CidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EstadoListOperationCombinedInput {
    params:  EstadoListOperationCombinedInputParams;
    queries: EstadoListOperationCombinedInputQueries;
}

export interface EstadoListOperationCombinedInputParams {
    /**
     * Filtro 'estado.id'
     */
    "estado.id"?: string;
}

export interface EstadoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EstadoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EstadoList.
     */
    body: CidadeFindAllResult;
}

/**
 * Resultados da busca a Cidades.
 *
 * Corpo de resposta da operação EstadoList.
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
}

/**
 * Dados de entrada combinados
 */
export interface ReservaFindByIDOperationCombinedInput {
    params:  ReservaFindByIDOperationCombinedInputParams;
    queries: ReservaFindByIDOperationCombinedInputQueries;
}

export interface ReservaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface ReservaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ReservaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ReservaFindById.
     */
    body: ReservaFindOneResult;
}

/**
 * Visão FindOne de um Reserva.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação ReservaFindById.
 *
 * Corpo de resposta da operação ReservaCreate.
 *
 * Updated data
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
}

/**
 * Dados de entrada combinados
 */
export interface ReservaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'ReservaCreate'.
     */
    body:    ReservaInputCreate;
    params:  ReservaCreateOperationCombinedInputParams;
    queries: ReservaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma Reserva.
 *
 * Corpo de entrada da operação 'ReservaCreate'.
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
}

export interface ReservaCreateOperationCombinedInputParams {
}

export interface ReservaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ReservaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ReservaCreate.
     */
    body: ReservaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface ReservaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    ReservaInputUpdate;
    params:  ReservaUpdateByIDOperationCombinedInputParams;
    queries: ReservaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma Reserva.
 *
 * Data to update
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
}

export interface ReservaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface ReservaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ReservaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: ReservaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface ReservaListOperationCombinedInput {
    params:  ReservaListOperationCombinedInputParams;
    queries: ReservaListOperationCombinedInputQueries;
}

export interface ReservaListOperationCombinedInputParams {
}

export interface ReservaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ReservaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ReservaList.
     */
    body: ReservaFindAllResult;
}

/**
 * Resultados da busca a Reservas.
 *
 * Corpo de resposta da operação ReservaList.
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
}

/**
 * Dados de entrada combinados
 */
export interface CursoFindByIDOperationCombinedInput {
    params:  CursoFindByIDOperationCombinedInputParams;
    queries: CursoFindByIDOperationCombinedInputQueries;
}

export interface CursoFindByIDOperationCombinedInputParams {
    id: string;
}

export interface CursoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CursoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CursoFindById.
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CursoCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'CursoCreate'.
     */
    body:    CursoInputCreate;
    params:  CursoCreateOperationCombinedInputParams;
    queries: CursoCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Curso.
 *
 * Corpo de entrada da operação 'CursoCreate'.
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
}

export interface CursoCreateOperationCombinedInputParams {
}

export interface CursoCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CursoCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CursoCreate.
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CursoUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    CursoInputUpdate;
    params:  CursoUpdateByIDOperationCombinedInputParams;
    queries: CursoUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Curso.
 *
 * Data to update
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
}

export interface CursoUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface CursoUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CursoUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CursoDeleteByIDOperationCombinedInput {
    params:  CursoDeleteByIDOperationCombinedInputParams;
    queries: CursoDeleteByIDOperationCombinedInputQueries;
}

export interface CursoDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface CursoDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CursoDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface CursoListOperationCombinedInput {
    params:  CursoListOperationCombinedInputParams;
    queries: CursoListOperationCombinedInputQueries;
}

export interface CursoListOperationCombinedInputParams {
    /**
     * Filtro 'campus.id'
     */
    "campus.id"?: string;
    /**
     * Filtro 'modalidade.id'
     */
    "modalidade.id"?: string;
}

export interface CursoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CursoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CursoList.
     */
    body: CursoFindAllResult;
}

/**
 * Resultados da busca a Cursos.
 *
 * Corpo de resposta da operação CursoList.
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
}

/**
 * Dados de entrada combinados
 */
export interface DiarioFindByIDOperationCombinedInput {
    params:  DiarioFindByIDOperationCombinedInputParams;
    queries: DiarioFindByIDOperationCombinedInputQueries;
}

export interface DiarioFindByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioFindById.
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'DiarioCreate'.
     */
    body:    DiarioInputCreate;
    params:  DiarioCreateOperationCombinedInputParams;
    queries: DiarioCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Diario.
 *
 * Corpo de entrada da operação 'DiarioCreate'.
 */
export interface DiarioInputCreate {
    ambientePadrao: AmbienteFindOneInput | null;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina: DisciplinaFindOneInput;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneInput;
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
}

export interface DiarioCreateOperationCombinedInputParams {
}

export interface DiarioCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioCreate.
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    DiarioInputUpdate;
    params:  DiarioUpdateByIDOperationCombinedInputParams;
    queries: DiarioUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Diario.
 *
 * Data to update
 */
export interface DiarioInputUpdate {
    ambientePadrao?: AmbienteFindOneInput | null;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina?: DisciplinaFindOneInput;
    /**
     * Turma vinculada ao diário.
     */
    turma?: TurmaFindOneInput;
}

export interface DiarioUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioDeleteByIDOperationCombinedInput {
    params:  DiarioDeleteByIDOperationCombinedInputParams;
    queries: DiarioDeleteByIDOperationCombinedInputQueries;
}

export interface DiarioDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioListOperationCombinedInput {
    params:  DiarioListOperationCombinedInputParams;
    queries: DiarioListOperationCombinedInputQueries;
}

export interface DiarioListOperationCombinedInputParams {
    /**
     * Filtro 'ambientePadrao.id'
     */
    "ambientePadrao.id"?: string;
    /**
     * Filtro 'disciplina.id'
     */
    "disciplina.id"?: string;
    /**
     * Filtro 'turma.id'
     */
    "turma.id"?: string;
}

export interface DiarioListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioList.
     */
    body: DiarioFindAllResult;
}

/**
 * Resultados da busca a Diários.
 *
 * Corpo de resposta da operação DiarioList.
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
}

/**
 * Dados de entrada combinados
 */
export interface DiarioProfessorFindByIDOperationCombinedInput {
    params:  DiarioProfessorFindByIDOperationCombinedInputParams;
    queries: DiarioProfessorFindByIDOperationCombinedInputQueries;
}

export interface DiarioProfessorFindByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioProfessorFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioProfessorFindById.
     */
    body: DiarioProfessorFindOneResult;
}

/**
 * Visão FindOne de um DiarioProfessor.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação DiarioProfessorFindById.
 *
 * Corpo de resposta da operação DiarioProfessorCreate.
 *
 * Updated data
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
}

/**
 * Dados de entrada combinados
 */
export interface DiarioProfessorCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'DiarioProfessorCreate'.
     */
    body:    DiarioProfessorInputCreate;
    params:  DiarioProfessorCreateOperationCombinedInputParams;
    queries: DiarioProfessorCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um DiarioProfessor.
 *
 * Corpo de entrada da operação 'DiarioProfessorCreate'.
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
}

export interface DiarioProfessorCreateOperationCombinedInputParams {
}

export interface DiarioProfessorCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioProfessorCreate.
     */
    body: DiarioProfessorFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioProfessorUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    DiarioProfessorInputUpdate;
    params:  DiarioProfessorUpdateByIDOperationCombinedInputParams;
    queries: DiarioProfessorUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um DiarioProfessor.
 *
 * Data to update
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
}

export interface DiarioProfessorUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioProfessorUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: DiarioProfessorFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioProfessorDeleteByIDOperationCombinedInput {
    params:  DiarioProfessorDeleteByIDOperationCombinedInputParams;
    queries: DiarioProfessorDeleteByIDOperationCombinedInputQueries;
}

export interface DiarioProfessorDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface DiarioProfessorDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface DiarioProfessorListOperationCombinedInput {
    params:  DiarioProfessorListOperationCombinedInputParams;
    queries: DiarioProfessorListOperationCombinedInputQueries;
}

export interface DiarioProfessorListOperationCombinedInputParams {
    /**
     * Filtro 'diario.id'
     */
    "diario.id"?: string;
    /**
     * Filtro 'vinculo.id'
     */
    "vinculo.id"?: string;
}

export interface DiarioProfessorListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioProfessorList.
     */
    body: DiarioProfessorFindAllResult;
}

/**
 * Resultados da busca a Diários.
 *
 * Corpo de resposta da operação DiarioProfessorList.
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
}

/**
 * Dados de entrada combinados
 */
export interface ModalidadeFindByIDOperationCombinedInput {
    params:  ModalidadeFindByIDOperationCombinedInputParams;
    queries: ModalidadeFindByIDOperationCombinedInputQueries;
}

export interface ModalidadeFindByIDOperationCombinedInputParams {
    id: string;
}

export interface ModalidadeFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ModalidadeFindById.
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface ModalidadeCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'ModalidadeCreate'.
     */
    body:    ModalidadeInputCreate;
    params:  ModalidadeCreateOperationCombinedInputParams;
    queries: ModalidadeCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma Modalidade.
 *
 * Corpo de entrada da operação 'ModalidadeCreate'.
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
}

export interface ModalidadeCreateOperationCombinedInputParams {
}

export interface ModalidadeCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ModalidadeCreate.
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface ModalidadeUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    ModalidadeInputUpdate;
    params:  ModalidadeUpdateByIDOperationCombinedInputParams;
    queries: ModalidadeUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma Modalidade.
 *
 * Data to update
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
}

export interface ModalidadeUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface ModalidadeUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface ModalidadeDeleteByIDOperationCombinedInput {
    params:  ModalidadeDeleteByIDOperationCombinedInputParams;
    queries: ModalidadeDeleteByIDOperationCombinedInputQueries;
}

export interface ModalidadeDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface ModalidadeDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface ModalidadeListOperationCombinedInput {
    params:  ModalidadeListOperationCombinedInputParams;
    queries: ModalidadeListOperationCombinedInputQueries;
}

export interface ModalidadeListOperationCombinedInputParams {
}

export interface ModalidadeListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação ModalidadeList.
     */
    body: ModalidadeFindAllResult;
}

/**
 * Resultados da busca a Modalidades.
 *
 * Corpo de resposta da operação ModalidadeList.
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
}

/**
 * Dados de entrada combinados
 */
export interface DisciplinaFindByIDOperationCombinedInput {
    params:  DisciplinaFindByIDOperationCombinedInputParams;
    queries: DisciplinaFindByIDOperationCombinedInputQueries;
}

export interface DisciplinaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface DisciplinaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DisciplinaFindById.
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DisciplinaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'DisciplinaCreate'.
     */
    body:    DisciplinaInputCreate;
    params:  DisciplinaCreateOperationCombinedInputParams;
    queries: DisciplinaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma Disciplina.
 *
 * Corpo de entrada da operação 'DisciplinaCreate'.
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
}

export interface DisciplinaCreateOperationCombinedInputParams {
}

export interface DisciplinaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DisciplinaCreate.
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DisciplinaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    DisciplinaInputUpdate;
    params:  DisciplinaUpdateByIDOperationCombinedInputParams;
    queries: DisciplinaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma Disciplina.
 *
 * Data to update
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
}

export interface DisciplinaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface DisciplinaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DisciplinaDeleteByIDOperationCombinedInput {
    params:  DisciplinaDeleteByIDOperationCombinedInputParams;
    queries: DisciplinaDeleteByIDOperationCombinedInputQueries;
}

export interface DisciplinaDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface DisciplinaDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface DisciplinaListOperationCombinedInput {
    params:  DisciplinaListOperationCombinedInputParams;
    queries: DisciplinaListOperationCombinedInputQueries;
}

export interface DisciplinaListOperationCombinedInputParams {
}

export interface DisciplinaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DisciplinaList.
     */
    body: DisciplinaFindAllResult;
}

/**
 * Resultados da busca a Disciplinas.
 *
 * Corpo de resposta da operação DisciplinaList.
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
}

/**
 * Dados de entrada combinados
 */
export interface TurmaFindByIDOperationCombinedInput {
    params:  TurmaFindByIDOperationCombinedInputParams;
    queries: TurmaFindByIDOperationCombinedInputQueries;
}

export interface TurmaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaFindById.
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaCreate'.
     */
    body:    TurmaInputCreate;
    params:  TurmaCreateOperationCombinedInputParams;
    queries: TurmaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma Turma.
 *
 * Corpo de entrada da operação 'TurmaCreate'.
 */
export interface TurmaInputCreate {
    ambientePadraoAula?: AmbienteFindOneInput | null;
    /**
     * Curso da Turma.
     */
    curso: CursoFindOneInput;
    /**
     * Período do Turma.
     */
    periodo: string;
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
}

export interface TurmaCreateOperationCombinedInputParams {
}

export interface TurmaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaCreate.
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    TurmaInputUpdate;
    params:  TurmaUpdateByIDOperationCombinedInputParams;
    queries: TurmaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma Turma.
 *
 * Data to update
 */
export interface TurmaInputUpdate {
    ambientePadraoAula?: AmbienteFindOneInput | null;
    /**
     * Curso da Turma.
     */
    curso?: CursoFindOneInput;
    /**
     * Período do Turma.
     */
    periodo?: string;
}

export interface TurmaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDeleteByIDOperationCombinedInput {
    params:  TurmaDeleteByIDOperationCombinedInputParams;
    queries: TurmaDeleteByIDOperationCombinedInputQueries;
}

export interface TurmaDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaListOperationCombinedInput {
    params:  TurmaListOperationCombinedInputParams;
    queries: TurmaListOperationCombinedInputQueries;
}

export interface TurmaListOperationCombinedInputParams {
    /**
     * Filtro 'ambientePadraoAula.capacidade'
     */
    "ambientePadraoAula.capacidade"?: string;
    /**
     * Filtro 'ambientePadraoAula.codigo'
     */
    "ambientePadraoAula.codigo"?: string;
    /**
     * Filtro 'ambientePadraoAula.nome'
     */
    "ambientePadraoAula.nome"?: string;
    /**
     * Filtro 'ambientePadraoAula.tipo'
     */
    "ambientePadraoAula.tipo"?: string;
    /**
     * Filtro 'curso.campus.id'
     */
    "curso.campus.id"?: string;
    /**
     * Filtro 'curso.modalidade.id'
     */
    "curso.modalidade.id"?: string;
    /**
     * Filtro 'curso.nome'
     */
    "curso.nome"?: string;
    /**
     * Filtro 'curso.nomeAbreviado'
     */
    "curso.nomeAbreviado"?: string;
}

export interface TurmaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaList.
     */
    body: TurmaFindAllResult;
}

/**
 * Resultados da busca a Turmas.
 *
 * Corpo de resposta da operação TurmaList.
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
}

/**
 * Dados de entrada combinados
 */
export interface CalendarioLetivoFindByIDOperationCombinedInput {
    params:  CalendarioLetivoFindByIDOperationCombinedInputParams;
    queries: CalendarioLetivoFindByIDOperationCombinedInputQueries;
}

export interface CalendarioLetivoFindByIDOperationCombinedInputParams {
    id: string;
}

export interface CalendarioLetivoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CalendarioLetivoFindById.
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CalendarioLetivoCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'CalendarioLetivoCreate'.
     */
    body:    CalendarioLetivoInputCreate;
    params:  CalendarioLetivoCreateOperationCombinedInputParams;
    queries: CalendarioLetivoCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um CalendarioLetivo.
 *
 * Corpo de entrada da operação 'CalendarioLetivoCreate'.
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
    modalidade: ModalidadeFindOneInput | null;
    /**
     * Nome do calendário letivo.
     */
    nome: string;
}

export interface CalendarioLetivoCreateOperationCombinedInputParams {
}

export interface CalendarioLetivoCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CalendarioLetivoCreate.
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CalendarioLetivoUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    CalendarioLetivoInputUpdate;
    params:  CalendarioLetivoUpdateByIDOperationCombinedInputParams;
    queries: CalendarioLetivoUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um CalendarioLetivo.
 *
 * Data to update
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
    modalidade?: ModalidadeFindOneInput | null;
    /**
     * Nome do calendário letivo.
     */
    nome?: string;
}

export interface CalendarioLetivoUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface CalendarioLetivoUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface CalendarioLetivoDeleteByIDOperationCombinedInput {
    params:  CalendarioLetivoDeleteByIDOperationCombinedInputParams;
    queries: CalendarioLetivoDeleteByIDOperationCombinedInputQueries;
}

export interface CalendarioLetivoDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface CalendarioLetivoDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface CalendarioLetivoListOperationCombinedInput {
    params:  CalendarioLetivoListOperationCombinedInputParams;
    queries: CalendarioLetivoListOperationCombinedInputQueries;
}

export interface CalendarioLetivoListOperationCombinedInputParams {
    /**
     * Filtro 'campus.id'
     */
    "campus.id"?: string;
    /**
     * Filtro 'modalidade.id'
     */
    "modalidade.id"?: string;
}

export interface CalendarioLetivoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação CalendarioLetivoList.
     */
    body: CalendarioLetivoFindAllResult;
}

/**
 * Resultados da busca a CalendarioLetivos.
 *
 * Corpo de resposta da operação CalendarioLetivoList.
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
}

/**
 * Dados de entrada combinados
 */
export interface DiaCalendarioFindByIDOperationCombinedInput {
    params:  DiaCalendarioFindByIDOperationCombinedInputParams;
    queries: DiaCalendarioFindByIDOperationCombinedInputQueries;
}

export interface DiaCalendarioFindByIDOperationCombinedInputParams {
    id: string;
}

export interface DiaCalendarioFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiaCalendarioFindById.
     */
    body: DiaCalendarioFindOneResult;
}

/**
 * Visão FindOne de um DiaCalendario.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação DiaCalendarioFindById.
 *
 * Corpo de resposta da operação DiaCalendarioCreate.
 *
 * Updated data
 */
export interface DiaCalendarioFindOneResult {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Dados de entrada combinados
 */
export interface DiaCalendarioCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'DiaCalendarioCreate'.
     */
    body:    DiaCalendarioInputCreate;
    params:  DiaCalendarioCreateOperationCombinedInputParams;
    queries: DiaCalendarioCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um DiaCalendario.
 *
 * Corpo de entrada da operação 'DiaCalendarioCreate'.
 */
export interface DiaCalendarioInputCreate {
    calendario: CalendarioLetivoFindOneInput | null;
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
}

export interface DiaCalendarioCreateOperationCombinedInputParams {
}

export interface DiaCalendarioCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiaCalendarioCreate.
     */
    body: DiaCalendarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiaCalendarioUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    DiaCalendarioInputUpdate;
    params:  DiaCalendarioUpdateByIDOperationCombinedInputParams;
    queries: DiaCalendarioUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um DiaCalendario.
 *
 * Data to update
 */
export interface DiaCalendarioInputUpdate {
    calendario?: CalendarioLetivoFindOneInput | null;
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
}

export interface DiaCalendarioUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface DiaCalendarioUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: DiaCalendarioFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface DiaCalendarioDeleteByIDOperationCombinedInput {
    params:  DiaCalendarioDeleteByIDOperationCombinedInputParams;
    queries: DiaCalendarioDeleteByIDOperationCombinedInputQueries;
}

export interface DiaCalendarioDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface DiaCalendarioDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface DiaCalendarioListOperationCombinedInput {
    params:  DiaCalendarioListOperationCombinedInputParams;
    queries: DiaCalendarioListOperationCombinedInputQueries;
}

export interface DiaCalendarioListOperationCombinedInputParams {
    /**
     * Filtro 'calendario.id'
     */
    "calendario.id"?: string;
}

export interface DiaCalendarioListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação DiaCalendarioList.
     */
    body: DiaCalendarioFindAllResult;
}

/**
 * Resultados da busca a DiaCalendarios.
 *
 * Corpo de resposta da operação DiaCalendarioList.
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
}

/**
 * Dados de entrada combinados
 */
export interface EtapaFindByIDOperationCombinedInput {
    params:  EtapaFindByIDOperationCombinedInputParams;
    queries: EtapaFindByIDOperationCombinedInputQueries;
}

export interface EtapaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface EtapaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EtapaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EtapaFindById.
     */
    body: EtapaFindOneResult;
}

/**
 * Visão FindOne de um Etapa.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação EtapaFindById.
 *
 * Corpo de resposta da operação EtapaCreate.
 *
 * Updated data
 */
export interface EtapaFindOneResult {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Dados de entrada combinados
 */
export interface EtapaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'EtapaCreate'.
     */
    body:    EtapaInputCreate;
    params:  EtapaCreateOperationCombinedInputParams;
    queries: EtapaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Etapa.
 *
 * Corpo de entrada da operação 'EtapaCreate'.
 */
export interface EtapaInputCreate {
    calendario: CalendarioLetivoFindOneInput | null;
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
}

export interface EtapaCreateOperationCombinedInputParams {
}

export interface EtapaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EtapaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EtapaCreate.
     */
    body: EtapaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EtapaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    EtapaInputUpdate;
    params:  EtapaUpdateByIDOperationCombinedInputParams;
    queries: EtapaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Etapa.
 *
 * Data to update
 */
export interface EtapaInputUpdate {
    calendario?: CalendarioLetivoFindOneInput | null;
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
}

export interface EtapaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface EtapaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EtapaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: EtapaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EtapaDeleteByIDOperationCombinedInput {
    params:  EtapaDeleteByIDOperationCombinedInputParams;
    queries: EtapaDeleteByIDOperationCombinedInputQueries;
}

export interface EtapaDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface EtapaDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EtapaDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface EtapaListOperationCombinedInput {
    params:  EtapaListOperationCombinedInputParams;
    queries: EtapaListOperationCombinedInputQueries;
}

export interface EtapaListOperationCombinedInputParams {
    /**
     * Filtro 'calendario.id'
     */
    "calendario.id"?: string;
}

export interface EtapaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EtapaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EtapaList.
     */
    body: EtapaFindAllResult;
}

/**
 * Resultados da busca a Etapas.
 *
 * Corpo de resposta da operação EtapaList.
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
}

/**
 * Dados de entrada combinados
 */
export interface AulaFindByIDOperationCombinedInput {
    params:  AulaFindByIDOperationCombinedInputParams;
    queries: AulaFindByIDOperationCombinedInputQueries;
}

export interface AulaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface AulaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AulaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AulaFindById.
     */
    body: AulaFindOneResult;
}

/**
 * Visão FindOne de uma Aula.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação AulaFindById.
 *
 * Corpo de resposta da operação AulaCreate.
 *
 * Updated data
 */
export interface AulaFindOneResult {
    ambiente: AmbienteFindOneResult | null;
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
}

/**
 * Dados de entrada combinados
 */
export interface AulaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'AulaCreate'.
     */
    body:    AulaInputCreate;
    params:  AulaCreateOperationCombinedInputParams;
    queries: AulaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma Aula.
 *
 * Corpo de entrada da operação 'AulaCreate'.
 */
export interface AulaInputCreate {
    ambiente: AmbienteFindOneInput | null;
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
}

export interface AulaCreateOperationCombinedInputParams {
}

export interface AulaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AulaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AulaCreate.
     */
    body: AulaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AulaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    AulaInputUpdate;
    params:  AulaUpdateByIDOperationCombinedInputParams;
    queries: AulaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma Aula.
 *
 * Data to update
 */
export interface AulaInputUpdate {
    ambiente?: AmbienteFindOneInput | null;
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
}

export interface AulaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface AulaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AulaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: AulaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface AulaDeleteByIDOperationCombinedInput {
    params:  AulaDeleteByIDOperationCombinedInputParams;
    queries: AulaDeleteByIDOperationCombinedInputQueries;
}

export interface AulaDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface AulaDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AulaDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface AulaListOperationCombinedInput {
    params:  AulaListOperationCombinedInputParams;
    queries: AulaListOperationCombinedInputQueries;
}

export interface AulaListOperationCombinedInputParams {
    /**
     * Filtro 'ambiente.id'
     */
    "ambiente.id"?: string;
    /**
     * Filtro 'diario.id'
     */
    "diario.id"?: string;
}

export interface AulaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface AulaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação AulaList.
     */
    body: AulaFindAllResult;
}

/**
 * Resultados da busca a Aulas.
 *
 * Corpo de resposta da operação AulaList.
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
}

/**
 * Dados de entrada combinados
 */
export interface EventoFindByIDOperationCombinedInput {
    params:  EventoFindByIDOperationCombinedInputParams;
    queries: EventoFindByIDOperationCombinedInputQueries;
}

export interface EventoFindByIDOperationCombinedInputParams {
    id: string;
}

export interface EventoFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EventoFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EventoFindById.
     */
    body: EventoFindOneResult;
}

/**
 * Visão FindOne de um Evento.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação EventoFindById.
 *
 * Corpo de resposta da operação EventoCreate.
 *
 * Updated data
 */
export interface EventoFindOneResult {
    calendario: CalendarioLetivoFindOneResult | null;
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
}

/**
 * Dados de entrada combinados
 */
export interface EventoCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'EventoCreate'.
     */
    body:    EventoInputCreate;
    params:  EventoCreateOperationCombinedInputParams;
    queries: EventoCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de um Evento.
 *
 * Corpo de entrada da operação 'EventoCreate'.
 */
export interface EventoInputCreate {
    calendario: CalendarioLetivoFindOneInput | null;
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
}

export interface EventoCreateOperationCombinedInputParams {
}

export interface EventoCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EventoCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EventoCreate.
     */
    body: EventoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EventoUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    EventoInputUpdate;
    params:  EventoUpdateByIDOperationCombinedInputParams;
    queries: EventoUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de um Evento.
 *
 * Data to update
 */
export interface EventoInputUpdate {
    calendario?: CalendarioLetivoFindOneInput | null;
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
}

export interface EventoUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface EventoUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EventoUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: EventoFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface EventoDeleteByIDOperationCombinedInput {
    params:  EventoDeleteByIDOperationCombinedInputParams;
    queries: EventoDeleteByIDOperationCombinedInputQueries;
}

export interface EventoDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface EventoDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EventoDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface EventoListOperationCombinedInput {
    params:  EventoListOperationCombinedInputParams;
    queries: EventoListOperationCombinedInputQueries;
}

export interface EventoListOperationCombinedInputParams {
    /**
     * Filtro 'calendario.id'
     */
    "calendario.id"?: string;
}

export interface EventoListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface EventoListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação EventoList.
     */
    body: EventoFindAllResult;
}

/**
 * Resultados da busca a Eventos.
 *
 * Corpo de resposta da operação EventoList.
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
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeFindByIDOperationCombinedInput {
    params:  TurmaDisponibilidadeFindByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeFindByIDOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeFindByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeFindById.
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaDisponibilidadeCreate'.
     */
    body:    TurmaDisponibilidadeInputCreate;
    params:  TurmaDisponibilidadeCreateOperationCombinedInputParams;
    queries: TurmaDisponibilidadeCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidade.
 *
 * Corpo de entrada da operação 'TurmaDisponibilidadeCreate'.
 */
export interface TurmaDisponibilidadeInputCreate {
    dataFim: Date | null;
    /**
     * Data de início.
     */
    dataInicio: Date;
    turma:      TurmaFindOneInput | null;
}

export interface TurmaDisponibilidadeCreateOperationCombinedInputParams {
}

export interface TurmaDisponibilidadeCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeCreate.
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    TurmaDisponibilidadeInputUpdate;
    params:  TurmaDisponibilidadeUpdateByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidade.
 *
 * Data to update
 */
export interface TurmaDisponibilidadeInputUpdate {
    dataFim?: Date | null;
    /**
     * Data de início.
     */
    dataInicio?: Date;
    turma?:      TurmaFindOneInput | null;
}

export interface TurmaDisponibilidadeUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDeleteByIDOperationCombinedInput {
    params:  TurmaDisponibilidadeDeleteByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDeleteByIDOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeListOperationCombinedInput {
    params:  TurmaDisponibilidadeListOperationCombinedInputParams;
    queries: TurmaDisponibilidadeListOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeListOperationCombinedInputParams {
    /**
     * Filtro 'turma.id'
     */
    "turma.id"?: string;
}

export interface TurmaDisponibilidadeListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeList.
     */
    body: TurmaDisponibilidadeFindAllResult;
}

/**
 * Resultados da busca a TurmaDisponibilidades.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeList.
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
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDiaFindByIDOperationCombinedInput {
    params:  TurmaDisponibilidadeDiaFindByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDiaFindByIDOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeDiaFindByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeDiaFindByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeDiaFindById.
     */
    body: TurmaDisponibilidadeDiaFindOneResult;
}

/**
 * Visão FindOne de uma TurmaDisponibilidadeDia.
 *
 * Item da busca.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeDiaFindById.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeDiaCreate.
 *
 * Updated data
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
    intervaloDeTempo:     IntervaloDeTempoFindOneResult | null;
    turmaDisponibilidade: TurmaDisponibilidadeFindOneResult | null;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDiaCreateOperationCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaDisponibilidadeDiaCreate'.
     */
    body:    TurmaDisponibilidadeDiaInputCreate;
    params:  TurmaDisponibilidadeDiaCreateOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDiaCreateOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a criação de uma TurmaDisponibilidadeDia.
 *
 * Corpo de entrada da operação 'TurmaDisponibilidadeDiaCreate'.
 */
export interface TurmaDisponibilidadeDiaInputCreate {
    /**
     * Dia da semana.
     */
    diaSemanaIso:         number;
    intervaloDeTempo:     IntervaloDeTempoInput | null;
    turmaDisponibilidade: TurmaDisponibilidadeFindOneInput | null;
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
}

export interface TurmaDisponibilidadeDiaCreateOperationCombinedInputParams {
}

export interface TurmaDisponibilidadeDiaCreateOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaCreateOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeDiaCreate.
     */
    body: TurmaDisponibilidadeDiaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput {
    /**
     * Data to update
     */
    body:    TurmaDisponibilidadeDiaInputUpdate;
    params:  TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputQueries;
}

/**
 * Dados de entrada para a atualização de uma TurmaDisponibilidadeDia.
 *
 * Data to update
 */
export interface TurmaDisponibilidadeDiaInputUpdate {
    /**
     * Dia da semana.
     */
    diaSemanaIso?:         number;
    intervaloDeTempo?:     IntervaloDeTempoInput | null;
    turmaDisponibilidade?: TurmaDisponibilidadeFindOneInput | null;
}

export interface TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaDisponibilidadeDiaFindOneResult;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput {
    params:  TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputParams {
    id: string;
}

export interface TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados
 */
export interface TurmaDisponibilidadeDiaListOperationCombinedInput {
    params:  TurmaDisponibilidadeDiaListOperationCombinedInputParams;
    queries: TurmaDisponibilidadeDiaListOperationCombinedInputQueries;
}

export interface TurmaDisponibilidadeDiaListOperationCombinedInputParams {
    /**
     * Filtro 'intervaloDeTempo.id'
     */
    "intervaloDeTempo.id"?: string;
    /**
     * Filtro 'turmaDisponibilidade.id'
     */
    "turmaDisponibilidade.id"?: string;
}

export interface TurmaDisponibilidadeDiaListOperationCombinedInputQueries {
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaListOperationSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeDiaList.
     */
    body: TurmaDisponibilidadeDiaFindAllResult;
}

/**
 * Resultados da busca a TurmaDisponibilidadeDias.
 *
 * Corpo de resposta da operação TurmaDisponibilidadeDiaList.
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

    public static toAuthLoginOperationCombinedInput(json: string): AuthLoginOperationCombinedInput {
        return cast(JSON.parse(json), r("AuthLoginOperationCombinedInput"));
    }

    public static authLoginOperationCombinedInputToJson(value: AuthLoginOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthLoginOperationCombinedInput")), null, 2);
    }

    public static toAuthLoginOperationSuccessOutput(json: string): AuthLoginOperationSuccessOutput {
        return cast(JSON.parse(json), r("AuthLoginOperationSuccessOutput"));
    }

    public static authLoginOperationSuccessOutputToJson(value: AuthLoginOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthLoginOperationSuccessOutput")), null, 2);
    }

    public static toAuthRefreshOperationCombinedInput(json: string): AuthRefreshOperationCombinedInput {
        return cast(JSON.parse(json), r("AuthRefreshOperationCombinedInput"));
    }

    public static authRefreshOperationCombinedInputToJson(value: AuthRefreshOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshOperationCombinedInput")), null, 2);
    }

    public static toAuthRefreshOperationSuccessOutput(json: string): AuthRefreshOperationSuccessOutput {
        return cast(JSON.parse(json), r("AuthRefreshOperationSuccessOutput"));
    }

    public static authRefreshOperationSuccessOutputToJson(value: AuthRefreshOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshOperationSuccessOutput")), null, 2);
    }

    public static toAuthWhoAmIOperationCombinedInput(json: string): AuthWhoAmIOperationCombinedInput {
        return cast(JSON.parse(json), r("AuthWhoAmIOperationCombinedInput"));
    }

    public static authWhoAmIOperationCombinedInputToJson(value: AuthWhoAmIOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmIOperationCombinedInput")), null, 2);
    }

    public static toAuthWhoAmIOperationSuccessOutput(json: string): AuthWhoAmIOperationSuccessOutput {
        return cast(JSON.parse(json), r("AuthWhoAmIOperationSuccessOutput"));
    }

    public static authWhoAmIOperationSuccessOutputToJson(value: AuthWhoAmIOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmIOperationSuccessOutput")), null, 2);
    }

    public static toAuthSetInitialPasswordOperationCombinedInput(json: string): AuthSetInitialPasswordOperationCombinedInput {
        return cast(JSON.parse(json), r("AuthSetInitialPasswordOperationCombinedInput"));
    }

    public static authSetInitialPasswordOperationCombinedInputToJson(value: AuthSetInitialPasswordOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthSetInitialPasswordOperationCombinedInput")), null, 2);
    }

    public static toAuthSetInitialPasswordOperationSuccessOutput(json: string): AuthSetInitialPasswordOperationSuccessOutput {
        return cast(JSON.parse(json), r("AuthSetInitialPasswordOperationSuccessOutput"));
    }

    public static authSetInitialPasswordOperationSuccessOutputToJson(value: AuthSetInitialPasswordOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthSetInitialPasswordOperationSuccessOutput")), null, 2);
    }

    public static toUsuarioFindByIDOperationCombinedInput(json: string): UsuarioFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("UsuarioFindByIDOperationCombinedInput"));
    }

    public static usuarioFindByIDOperationCombinedInputToJson(value: UsuarioFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioFindByIDOperationCombinedInput")), null, 2);
    }

    public static toUsuarioFindByIDOperationSuccessOutput(json: string): UsuarioFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioFindByIDOperationSuccessOutput"));
    }

    public static usuarioFindByIDOperationSuccessOutputToJson(value: UsuarioFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toUsuarioCreateOperationCombinedInput(json: string): UsuarioCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("UsuarioCreateOperationCombinedInput"));
    }

    public static usuarioCreateOperationCombinedInputToJson(value: UsuarioCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioCreateOperationCombinedInput")), null, 2);
    }

    public static toUsuarioCreateOperationSuccessOutput(json: string): UsuarioCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioCreateOperationSuccessOutput"));
    }

    public static usuarioCreateOperationSuccessOutputToJson(value: UsuarioCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioCreateOperationSuccessOutput")), null, 2);
    }

    public static toUsuarioUpdateByIDOperationCombinedInput(json: string): UsuarioUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("UsuarioUpdateByIDOperationCombinedInput"));
    }

    public static usuarioUpdateByIDOperationCombinedInputToJson(value: UsuarioUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toUsuarioUpdateByIDOperationSuccessOutput(json: string): UsuarioUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioUpdateByIDOperationSuccessOutput"));
    }

    public static usuarioUpdateByIDOperationSuccessOutputToJson(value: UsuarioUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toUsuarioDeleteByIDOperationCombinedInput(json: string): UsuarioDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("UsuarioDeleteByIDOperationCombinedInput"));
    }

    public static usuarioDeleteByIDOperationCombinedInputToJson(value: UsuarioDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toUsuarioDeleteByIDOperationSuccessOutput(json: string): UsuarioDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioDeleteByIDOperationSuccessOutput"));
    }

    public static usuarioDeleteByIDOperationSuccessOutputToJson(value: UsuarioDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toUsuarioListOperationCombinedInput(json: string): UsuarioListOperationCombinedInput {
        return cast(JSON.parse(json), r("UsuarioListOperationCombinedInput"));
    }

    public static usuarioListOperationCombinedInputToJson(value: UsuarioListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioListOperationCombinedInput")), null, 2);
    }

    public static toUsuarioListOperationSuccessOutput(json: string): UsuarioListOperationSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioListOperationSuccessOutput"));
    }

    public static usuarioListOperationSuccessOutputToJson(value: UsuarioListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioListOperationSuccessOutput")), null, 2);
    }

    public static toVinculoFindByIDOperationCombinedInput(json: string): VinculoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("VinculoFindByIDOperationCombinedInput"));
    }

    public static vinculoFindByIDOperationCombinedInputToJson(value: VinculoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("VinculoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toVinculoFindByIDOperationSuccessOutput(json: string): VinculoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("VinculoFindByIDOperationSuccessOutput"));
    }

    public static vinculoFindByIDOperationSuccessOutputToJson(value: VinculoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("VinculoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toVinculoListOperationCombinedInput(json: string): VinculoListOperationCombinedInput {
        return cast(JSON.parse(json), r("VinculoListOperationCombinedInput"));
    }

    public static vinculoListOperationCombinedInputToJson(value: VinculoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("VinculoListOperationCombinedInput")), null, 2);
    }

    public static toVinculoListOperationSuccessOutput(json: string): VinculoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("VinculoListOperationSuccessOutput"));
    }

    public static vinculoListOperationSuccessOutputToJson(value: VinculoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("VinculoListOperationSuccessOutput")), null, 2);
    }

    public static toAmbienteFindByIDOperationCombinedInput(json: string): AmbienteFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AmbienteFindByIDOperationCombinedInput"));
    }

    public static ambienteFindByIDOperationCombinedInputToJson(value: AmbienteFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteFindByIDOperationCombinedInput")), null, 2);
    }

    public static toAmbienteFindByIDOperationSuccessOutput(json: string): AmbienteFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteFindByIDOperationSuccessOutput"));
    }

    public static ambienteFindByIDOperationSuccessOutputToJson(value: AmbienteFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toAmbienteCreateOperationCombinedInput(json: string): AmbienteCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("AmbienteCreateOperationCombinedInput"));
    }

    public static ambienteCreateOperationCombinedInputToJson(value: AmbienteCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteCreateOperationCombinedInput")), null, 2);
    }

    public static toAmbienteCreateOperationSuccessOutput(json: string): AmbienteCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteCreateOperationSuccessOutput"));
    }

    public static ambienteCreateOperationSuccessOutputToJson(value: AmbienteCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteCreateOperationSuccessOutput")), null, 2);
    }

    public static toAmbienteUpdateByIDOperationCombinedInput(json: string): AmbienteUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AmbienteUpdateByIDOperationCombinedInput"));
    }

    public static ambienteUpdateByIDOperationCombinedInputToJson(value: AmbienteUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toAmbienteUpdateByIDOperationSuccessOutput(json: string): AmbienteUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteUpdateByIDOperationSuccessOutput"));
    }

    public static ambienteUpdateByIDOperationSuccessOutputToJson(value: AmbienteUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toAmbienteDeleteByIDOperationCombinedInput(json: string): AmbienteDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AmbienteDeleteByIDOperationCombinedInput"));
    }

    public static ambienteDeleteByIDOperationCombinedInputToJson(value: AmbienteDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toAmbienteDeleteByIDOperationSuccessOutput(json: string): AmbienteDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteDeleteByIDOperationSuccessOutput"));
    }

    public static ambienteDeleteByIDOperationSuccessOutputToJson(value: AmbienteDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toAmbienteListOperationCombinedInput(json: string): AmbienteListOperationCombinedInput {
        return cast(JSON.parse(json), r("AmbienteListOperationCombinedInput"));
    }

    public static ambienteListOperationCombinedInputToJson(value: AmbienteListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteListOperationCombinedInput")), null, 2);
    }

    public static toAmbienteListOperationSuccessOutput(json: string): AmbienteListOperationSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteListOperationSuccessOutput"));
    }

    public static ambienteListOperationSuccessOutputToJson(value: AmbienteListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteListOperationSuccessOutput")), null, 2);
    }

    public static toBlocoFindByIDOperationCombinedInput(json: string): BlocoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("BlocoFindByIDOperationCombinedInput"));
    }

    public static blocoFindByIDOperationCombinedInputToJson(value: BlocoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toBlocoFindByIDOperationSuccessOutput(json: string): BlocoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("BlocoFindByIDOperationSuccessOutput"));
    }

    public static blocoFindByIDOperationSuccessOutputToJson(value: BlocoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toBlocoCreateOperationCombinedInput(json: string): BlocoCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("BlocoCreateOperationCombinedInput"));
    }

    public static blocoCreateOperationCombinedInputToJson(value: BlocoCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoCreateOperationCombinedInput")), null, 2);
    }

    public static toBlocoCreateOperationSuccessOutput(json: string): BlocoCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("BlocoCreateOperationSuccessOutput"));
    }

    public static blocoCreateOperationSuccessOutputToJson(value: BlocoCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoCreateOperationSuccessOutput")), null, 2);
    }

    public static toBlocoUpdateByIDOperationCombinedInput(json: string): BlocoUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("BlocoUpdateByIDOperationCombinedInput"));
    }

    public static blocoUpdateByIDOperationCombinedInputToJson(value: BlocoUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toBlocoUpdateByIDOperationSuccessOutput(json: string): BlocoUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("BlocoUpdateByIDOperationSuccessOutput"));
    }

    public static blocoUpdateByIDOperationSuccessOutputToJson(value: BlocoUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toBlocoDeleteByIDOperationCombinedInput(json: string): BlocoDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("BlocoDeleteByIDOperationCombinedInput"));
    }

    public static blocoDeleteByIDOperationCombinedInputToJson(value: BlocoDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toBlocoDeleteByIDOperationSuccessOutput(json: string): BlocoDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("BlocoDeleteByIDOperationSuccessOutput"));
    }

    public static blocoDeleteByIDOperationSuccessOutputToJson(value: BlocoDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toBlocoListOperationCombinedInput(json: string): BlocoListOperationCombinedInput {
        return cast(JSON.parse(json), r("BlocoListOperationCombinedInput"));
    }

    public static blocoListOperationCombinedInputToJson(value: BlocoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoListOperationCombinedInput")), null, 2);
    }

    public static toBlocoListOperationSuccessOutput(json: string): BlocoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("BlocoListOperationSuccessOutput"));
    }

    public static blocoListOperationSuccessOutputToJson(value: BlocoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoListOperationSuccessOutput")), null, 2);
    }

    public static toCampusFindByIDOperationCombinedInput(json: string): CampusFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CampusFindByIDOperationCombinedInput"));
    }

    public static campusFindByIDOperationCombinedInputToJson(value: CampusFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusFindByIDOperationCombinedInput")), null, 2);
    }

    public static toCampusFindByIDOperationSuccessOutput(json: string): CampusFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CampusFindByIDOperationSuccessOutput"));
    }

    public static campusFindByIDOperationSuccessOutputToJson(value: CampusFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toCampusCreateOperationCombinedInput(json: string): CampusCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("CampusCreateOperationCombinedInput"));
    }

    public static campusCreateOperationCombinedInputToJson(value: CampusCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusCreateOperationCombinedInput")), null, 2);
    }

    public static toCampusCreateOperationSuccessOutput(json: string): CampusCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("CampusCreateOperationSuccessOutput"));
    }

    public static campusCreateOperationSuccessOutputToJson(value: CampusCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusCreateOperationSuccessOutput")), null, 2);
    }

    public static toCampusUpdateByIDOperationCombinedInput(json: string): CampusUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CampusUpdateByIDOperationCombinedInput"));
    }

    public static campusUpdateByIDOperationCombinedInputToJson(value: CampusUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toCampusUpdateByIDOperationSuccessOutput(json: string): CampusUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CampusUpdateByIDOperationSuccessOutput"));
    }

    public static campusUpdateByIDOperationSuccessOutputToJson(value: CampusUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toCampusDeleteByIDOperationCombinedInput(json: string): CampusDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CampusDeleteByIDOperationCombinedInput"));
    }

    public static campusDeleteByIDOperationCombinedInputToJson(value: CampusDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toCampusDeleteByIDOperationSuccessOutput(json: string): CampusDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CampusDeleteByIDOperationSuccessOutput"));
    }

    public static campusDeleteByIDOperationSuccessOutputToJson(value: CampusDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toCampusListOperationCombinedInput(json: string): CampusListOperationCombinedInput {
        return cast(JSON.parse(json), r("CampusListOperationCombinedInput"));
    }

    public static campusListOperationCombinedInputToJson(value: CampusListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusListOperationCombinedInput")), null, 2);
    }

    public static toCampusListOperationSuccessOutput(json: string): CampusListOperationSuccessOutput {
        return cast(JSON.parse(json), r("CampusListOperationSuccessOutput"));
    }

    public static campusListOperationSuccessOutputToJson(value: CampusListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusListOperationSuccessOutput")), null, 2);
    }

    public static toEstadoFindByIDOperationCombinedInput(json: string): EstadoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EstadoFindByIDOperationCombinedInput"));
    }

    public static estadoFindByIDOperationCombinedInputToJson(value: EstadoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EstadoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toEstadoFindByIDOperationSuccessOutput(json: string): EstadoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EstadoFindByIDOperationSuccessOutput"));
    }

    public static estadoFindByIDOperationSuccessOutputToJson(value: EstadoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EstadoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toEstadoListOperationCombinedInput(json: string): EstadoListOperationCombinedInput {
        return cast(JSON.parse(json), r("EstadoListOperationCombinedInput"));
    }

    public static estadoListOperationCombinedInputToJson(value: EstadoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EstadoListOperationCombinedInput")), null, 2);
    }

    public static toEstadoListOperationSuccessOutput(json: string): EstadoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("EstadoListOperationSuccessOutput"));
    }

    public static estadoListOperationSuccessOutputToJson(value: EstadoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EstadoListOperationSuccessOutput")), null, 2);
    }

    public static toReservaFindByIDOperationCombinedInput(json: string): ReservaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("ReservaFindByIDOperationCombinedInput"));
    }

    public static reservaFindByIDOperationCombinedInputToJson(value: ReservaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toReservaFindByIDOperationSuccessOutput(json: string): ReservaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("ReservaFindByIDOperationSuccessOutput"));
    }

    public static reservaFindByIDOperationSuccessOutputToJson(value: ReservaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toReservaCreateOperationCombinedInput(json: string): ReservaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("ReservaCreateOperationCombinedInput"));
    }

    public static reservaCreateOperationCombinedInputToJson(value: ReservaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaCreateOperationCombinedInput")), null, 2);
    }

    public static toReservaCreateOperationSuccessOutput(json: string): ReservaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("ReservaCreateOperationSuccessOutput"));
    }

    public static reservaCreateOperationSuccessOutputToJson(value: ReservaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaCreateOperationSuccessOutput")), null, 2);
    }

    public static toReservaUpdateByIDOperationCombinedInput(json: string): ReservaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("ReservaUpdateByIDOperationCombinedInput"));
    }

    public static reservaUpdateByIDOperationCombinedInputToJson(value: ReservaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toReservaUpdateByIDOperationSuccessOutput(json: string): ReservaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("ReservaUpdateByIDOperationSuccessOutput"));
    }

    public static reservaUpdateByIDOperationSuccessOutputToJson(value: ReservaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toReservaListOperationCombinedInput(json: string): ReservaListOperationCombinedInput {
        return cast(JSON.parse(json), r("ReservaListOperationCombinedInput"));
    }

    public static reservaListOperationCombinedInputToJson(value: ReservaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaListOperationCombinedInput")), null, 2);
    }

    public static toReservaListOperationSuccessOutput(json: string): ReservaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("ReservaListOperationSuccessOutput"));
    }

    public static reservaListOperationSuccessOutputToJson(value: ReservaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaListOperationSuccessOutput")), null, 2);
    }

    public static toCursoFindByIDOperationCombinedInput(json: string): CursoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CursoFindByIDOperationCombinedInput"));
    }

    public static cursoFindByIDOperationCombinedInputToJson(value: CursoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toCursoFindByIDOperationSuccessOutput(json: string): CursoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CursoFindByIDOperationSuccessOutput"));
    }

    public static cursoFindByIDOperationSuccessOutputToJson(value: CursoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toCursoCreateOperationCombinedInput(json: string): CursoCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("CursoCreateOperationCombinedInput"));
    }

    public static cursoCreateOperationCombinedInputToJson(value: CursoCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoCreateOperationCombinedInput")), null, 2);
    }

    public static toCursoCreateOperationSuccessOutput(json: string): CursoCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("CursoCreateOperationSuccessOutput"));
    }

    public static cursoCreateOperationSuccessOutputToJson(value: CursoCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoCreateOperationSuccessOutput")), null, 2);
    }

    public static toCursoUpdateByIDOperationCombinedInput(json: string): CursoUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CursoUpdateByIDOperationCombinedInput"));
    }

    public static cursoUpdateByIDOperationCombinedInputToJson(value: CursoUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toCursoUpdateByIDOperationSuccessOutput(json: string): CursoUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CursoUpdateByIDOperationSuccessOutput"));
    }

    public static cursoUpdateByIDOperationSuccessOutputToJson(value: CursoUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toCursoDeleteByIDOperationCombinedInput(json: string): CursoDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CursoDeleteByIDOperationCombinedInput"));
    }

    public static cursoDeleteByIDOperationCombinedInputToJson(value: CursoDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toCursoDeleteByIDOperationSuccessOutput(json: string): CursoDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CursoDeleteByIDOperationSuccessOutput"));
    }

    public static cursoDeleteByIDOperationSuccessOutputToJson(value: CursoDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toCursoListOperationCombinedInput(json: string): CursoListOperationCombinedInput {
        return cast(JSON.parse(json), r("CursoListOperationCombinedInput"));
    }

    public static cursoListOperationCombinedInputToJson(value: CursoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoListOperationCombinedInput")), null, 2);
    }

    public static toCursoListOperationSuccessOutput(json: string): CursoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("CursoListOperationSuccessOutput"));
    }

    public static cursoListOperationSuccessOutputToJson(value: CursoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoListOperationSuccessOutput")), null, 2);
    }

    public static toDiarioFindByIDOperationCombinedInput(json: string): DiarioFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioFindByIDOperationCombinedInput"));
    }

    public static diarioFindByIDOperationCombinedInputToJson(value: DiarioFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioFindByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioFindByIDOperationSuccessOutput(json: string): DiarioFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioFindByIDOperationSuccessOutput"));
    }

    public static diarioFindByIDOperationSuccessOutputToJson(value: DiarioFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioCreateOperationCombinedInput(json: string): DiarioCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioCreateOperationCombinedInput"));
    }

    public static diarioCreateOperationCombinedInputToJson(value: DiarioCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioCreateOperationCombinedInput")), null, 2);
    }

    public static toDiarioCreateOperationSuccessOutput(json: string): DiarioCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioCreateOperationSuccessOutput"));
    }

    public static diarioCreateOperationSuccessOutputToJson(value: DiarioCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioCreateOperationSuccessOutput")), null, 2);
    }

    public static toDiarioUpdateByIDOperationCombinedInput(json: string): DiarioUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioUpdateByIDOperationCombinedInput"));
    }

    public static diarioUpdateByIDOperationCombinedInputToJson(value: DiarioUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioUpdateByIDOperationSuccessOutput(json: string): DiarioUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioUpdateByIDOperationSuccessOutput"));
    }

    public static diarioUpdateByIDOperationSuccessOutputToJson(value: DiarioUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioDeleteByIDOperationCombinedInput(json: string): DiarioDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioDeleteByIDOperationCombinedInput"));
    }

    public static diarioDeleteByIDOperationCombinedInputToJson(value: DiarioDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioDeleteByIDOperationSuccessOutput(json: string): DiarioDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioDeleteByIDOperationSuccessOutput"));
    }

    public static diarioDeleteByIDOperationSuccessOutputToJson(value: DiarioDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioListOperationCombinedInput(json: string): DiarioListOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioListOperationCombinedInput"));
    }

    public static diarioListOperationCombinedInputToJson(value: DiarioListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioListOperationCombinedInput")), null, 2);
    }

    public static toDiarioListOperationSuccessOutput(json: string): DiarioListOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioListOperationSuccessOutput"));
    }

    public static diarioListOperationSuccessOutputToJson(value: DiarioListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioListOperationSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorFindByIDOperationCombinedInput(json: string): DiarioProfessorFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorFindByIDOperationCombinedInput"));
    }

    public static diarioProfessorFindByIDOperationCombinedInputToJson(value: DiarioProfessorFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioProfessorFindByIDOperationSuccessOutput(json: string): DiarioProfessorFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorFindByIDOperationSuccessOutput"));
    }

    public static diarioProfessorFindByIDOperationSuccessOutputToJson(value: DiarioProfessorFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorCreateOperationCombinedInput(json: string): DiarioProfessorCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorCreateOperationCombinedInput"));
    }

    public static diarioProfessorCreateOperationCombinedInputToJson(value: DiarioProfessorCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorCreateOperationCombinedInput")), null, 2);
    }

    public static toDiarioProfessorCreateOperationSuccessOutput(json: string): DiarioProfessorCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorCreateOperationSuccessOutput"));
    }

    public static diarioProfessorCreateOperationSuccessOutputToJson(value: DiarioProfessorCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorCreateOperationSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorUpdateByIDOperationCombinedInput(json: string): DiarioProfessorUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorUpdateByIDOperationCombinedInput"));
    }

    public static diarioProfessorUpdateByIDOperationCombinedInputToJson(value: DiarioProfessorUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioProfessorUpdateByIDOperationSuccessOutput(json: string): DiarioProfessorUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorUpdateByIDOperationSuccessOutput"));
    }

    public static diarioProfessorUpdateByIDOperationSuccessOutputToJson(value: DiarioProfessorUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorDeleteByIDOperationCombinedInput(json: string): DiarioProfessorDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorDeleteByIDOperationCombinedInput"));
    }

    public static diarioProfessorDeleteByIDOperationCombinedInputToJson(value: DiarioProfessorDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toDiarioProfessorDeleteByIDOperationSuccessOutput(json: string): DiarioProfessorDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorDeleteByIDOperationSuccessOutput"));
    }

    public static diarioProfessorDeleteByIDOperationSuccessOutputToJson(value: DiarioProfessorDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorListOperationCombinedInput(json: string): DiarioProfessorListOperationCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorListOperationCombinedInput"));
    }

    public static diarioProfessorListOperationCombinedInputToJson(value: DiarioProfessorListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorListOperationCombinedInput")), null, 2);
    }

    public static toDiarioProfessorListOperationSuccessOutput(json: string): DiarioProfessorListOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorListOperationSuccessOutput"));
    }

    public static diarioProfessorListOperationSuccessOutputToJson(value: DiarioProfessorListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorListOperationSuccessOutput")), null, 2);
    }

    public static toModalidadeFindByIDOperationCombinedInput(json: string): ModalidadeFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeFindByIDOperationCombinedInput"));
    }

    public static modalidadeFindByIDOperationCombinedInputToJson(value: ModalidadeFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindByIDOperationCombinedInput")), null, 2);
    }

    public static toModalidadeFindByIDOperationSuccessOutput(json: string): ModalidadeFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeFindByIDOperationSuccessOutput"));
    }

    public static modalidadeFindByIDOperationSuccessOutputToJson(value: ModalidadeFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toModalidadeCreateOperationCombinedInput(json: string): ModalidadeCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeCreateOperationCombinedInput"));
    }

    public static modalidadeCreateOperationCombinedInputToJson(value: ModalidadeCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeCreateOperationCombinedInput")), null, 2);
    }

    public static toModalidadeCreateOperationSuccessOutput(json: string): ModalidadeCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeCreateOperationSuccessOutput"));
    }

    public static modalidadeCreateOperationSuccessOutputToJson(value: ModalidadeCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeCreateOperationSuccessOutput")), null, 2);
    }

    public static toModalidadeUpdateByIDOperationCombinedInput(json: string): ModalidadeUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeUpdateByIDOperationCombinedInput"));
    }

    public static modalidadeUpdateByIDOperationCombinedInputToJson(value: ModalidadeUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toModalidadeUpdateByIDOperationSuccessOutput(json: string): ModalidadeUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeUpdateByIDOperationSuccessOutput"));
    }

    public static modalidadeUpdateByIDOperationSuccessOutputToJson(value: ModalidadeUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toModalidadeDeleteByIDOperationCombinedInput(json: string): ModalidadeDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeDeleteByIDOperationCombinedInput"));
    }

    public static modalidadeDeleteByIDOperationCombinedInputToJson(value: ModalidadeDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toModalidadeDeleteByIDOperationSuccessOutput(json: string): ModalidadeDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeDeleteByIDOperationSuccessOutput"));
    }

    public static modalidadeDeleteByIDOperationSuccessOutputToJson(value: ModalidadeDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toModalidadeListOperationCombinedInput(json: string): ModalidadeListOperationCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeListOperationCombinedInput"));
    }

    public static modalidadeListOperationCombinedInputToJson(value: ModalidadeListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeListOperationCombinedInput")), null, 2);
    }

    public static toModalidadeListOperationSuccessOutput(json: string): ModalidadeListOperationSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeListOperationSuccessOutput"));
    }

    public static modalidadeListOperationSuccessOutputToJson(value: ModalidadeListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeListOperationSuccessOutput")), null, 2);
    }

    public static toDisciplinaFindByIDOperationCombinedInput(json: string): DisciplinaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaFindByIDOperationCombinedInput"));
    }

    public static disciplinaFindByIDOperationCombinedInputToJson(value: DisciplinaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toDisciplinaFindByIDOperationSuccessOutput(json: string): DisciplinaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaFindByIDOperationSuccessOutput"));
    }

    public static disciplinaFindByIDOperationSuccessOutputToJson(value: DisciplinaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toDisciplinaCreateOperationCombinedInput(json: string): DisciplinaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaCreateOperationCombinedInput"));
    }

    public static disciplinaCreateOperationCombinedInputToJson(value: DisciplinaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaCreateOperationCombinedInput")), null, 2);
    }

    public static toDisciplinaCreateOperationSuccessOutput(json: string): DisciplinaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaCreateOperationSuccessOutput"));
    }

    public static disciplinaCreateOperationSuccessOutputToJson(value: DisciplinaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaCreateOperationSuccessOutput")), null, 2);
    }

    public static toDisciplinaUpdateByIDOperationCombinedInput(json: string): DisciplinaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaUpdateByIDOperationCombinedInput"));
    }

    public static disciplinaUpdateByIDOperationCombinedInputToJson(value: DisciplinaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toDisciplinaUpdateByIDOperationSuccessOutput(json: string): DisciplinaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaUpdateByIDOperationSuccessOutput"));
    }

    public static disciplinaUpdateByIDOperationSuccessOutputToJson(value: DisciplinaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toDisciplinaDeleteByIDOperationCombinedInput(json: string): DisciplinaDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaDeleteByIDOperationCombinedInput"));
    }

    public static disciplinaDeleteByIDOperationCombinedInputToJson(value: DisciplinaDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toDisciplinaDeleteByIDOperationSuccessOutput(json: string): DisciplinaDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaDeleteByIDOperationSuccessOutput"));
    }

    public static disciplinaDeleteByIDOperationSuccessOutputToJson(value: DisciplinaDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toDisciplinaListOperationCombinedInput(json: string): DisciplinaListOperationCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaListOperationCombinedInput"));
    }

    public static disciplinaListOperationCombinedInputToJson(value: DisciplinaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaListOperationCombinedInput")), null, 2);
    }

    public static toDisciplinaListOperationSuccessOutput(json: string): DisciplinaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaListOperationSuccessOutput"));
    }

    public static disciplinaListOperationSuccessOutputToJson(value: DisciplinaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaListOperationSuccessOutput")), null, 2);
    }

    public static toTurmaFindByIDOperationCombinedInput(json: string): TurmaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaFindByIDOperationCombinedInput"));
    }

    public static turmaFindByIDOperationCombinedInputToJson(value: TurmaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaFindByIDOperationSuccessOutput(json: string): TurmaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaFindByIDOperationSuccessOutput"));
    }

    public static turmaFindByIDOperationSuccessOutputToJson(value: TurmaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaCreateOperationCombinedInput(json: string): TurmaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaCreateOperationCombinedInput"));
    }

    public static turmaCreateOperationCombinedInputToJson(value: TurmaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaCreateOperationCombinedInput")), null, 2);
    }

    public static toTurmaCreateOperationSuccessOutput(json: string): TurmaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaCreateOperationSuccessOutput"));
    }

    public static turmaCreateOperationSuccessOutputToJson(value: TurmaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaCreateOperationSuccessOutput")), null, 2);
    }

    public static toTurmaUpdateByIDOperationCombinedInput(json: string): TurmaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaUpdateByIDOperationCombinedInput"));
    }

    public static turmaUpdateByIDOperationCombinedInputToJson(value: TurmaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaUpdateByIDOperationSuccessOutput(json: string): TurmaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaUpdateByIDOperationSuccessOutput"));
    }

    public static turmaUpdateByIDOperationSuccessOutputToJson(value: TurmaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDeleteByIDOperationCombinedInput(json: string): TurmaDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDeleteByIDOperationCombinedInput"));
    }

    public static turmaDeleteByIDOperationCombinedInputToJson(value: TurmaDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDeleteByIDOperationSuccessOutput(json: string): TurmaDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDeleteByIDOperationSuccessOutput"));
    }

    public static turmaDeleteByIDOperationSuccessOutputToJson(value: TurmaDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaListOperationCombinedInput(json: string): TurmaListOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaListOperationCombinedInput"));
    }

    public static turmaListOperationCombinedInputToJson(value: TurmaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaListOperationCombinedInput")), null, 2);
    }

    public static toTurmaListOperationSuccessOutput(json: string): TurmaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaListOperationSuccessOutput"));
    }

    public static turmaListOperationSuccessOutputToJson(value: TurmaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaListOperationSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoFindByIDOperationCombinedInput(json: string): CalendarioLetivoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoFindByIDOperationCombinedInput"));
    }

    public static calendarioLetivoFindByIDOperationCombinedInputToJson(value: CalendarioLetivoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoFindByIDOperationSuccessOutput(json: string): CalendarioLetivoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoFindByIDOperationSuccessOutput"));
    }

    public static calendarioLetivoFindByIDOperationSuccessOutputToJson(value: CalendarioLetivoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoCreateOperationCombinedInput(json: string): CalendarioLetivoCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoCreateOperationCombinedInput"));
    }

    public static calendarioLetivoCreateOperationCombinedInputToJson(value: CalendarioLetivoCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoCreateOperationCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoCreateOperationSuccessOutput(json: string): CalendarioLetivoCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoCreateOperationSuccessOutput"));
    }

    public static calendarioLetivoCreateOperationSuccessOutputToJson(value: CalendarioLetivoCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoCreateOperationSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoUpdateByIDOperationCombinedInput(json: string): CalendarioLetivoUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoUpdateByIDOperationCombinedInput"));
    }

    public static calendarioLetivoUpdateByIDOperationCombinedInputToJson(value: CalendarioLetivoUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoUpdateByIDOperationSuccessOutput(json: string): CalendarioLetivoUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoUpdateByIDOperationSuccessOutput"));
    }

    public static calendarioLetivoUpdateByIDOperationSuccessOutputToJson(value: CalendarioLetivoUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoDeleteByIDOperationCombinedInput(json: string): CalendarioLetivoDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoDeleteByIDOperationCombinedInput"));
    }

    public static calendarioLetivoDeleteByIDOperationCombinedInputToJson(value: CalendarioLetivoDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoDeleteByIDOperationSuccessOutput(json: string): CalendarioLetivoDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoDeleteByIDOperationSuccessOutput"));
    }

    public static calendarioLetivoDeleteByIDOperationSuccessOutputToJson(value: CalendarioLetivoDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoListOperationCombinedInput(json: string): CalendarioLetivoListOperationCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoListOperationCombinedInput"));
    }

    public static calendarioLetivoListOperationCombinedInputToJson(value: CalendarioLetivoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoListOperationCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoListOperationSuccessOutput(json: string): CalendarioLetivoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoListOperationSuccessOutput"));
    }

    public static calendarioLetivoListOperationSuccessOutputToJson(value: CalendarioLetivoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoListOperationSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioFindByIDOperationCombinedInput(json: string): DiaCalendarioFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioFindByIDOperationCombinedInput"));
    }

    public static diaCalendarioFindByIDOperationCombinedInputToJson(value: DiaCalendarioFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindByIDOperationCombinedInput")), null, 2);
    }

    public static toDiaCalendarioFindByIDOperationSuccessOutput(json: string): DiaCalendarioFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioFindByIDOperationSuccessOutput"));
    }

    public static diaCalendarioFindByIDOperationSuccessOutputToJson(value: DiaCalendarioFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioCreateOperationCombinedInput(json: string): DiaCalendarioCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioCreateOperationCombinedInput"));
    }

    public static diaCalendarioCreateOperationCombinedInputToJson(value: DiaCalendarioCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioCreateOperationCombinedInput")), null, 2);
    }

    public static toDiaCalendarioCreateOperationSuccessOutput(json: string): DiaCalendarioCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioCreateOperationSuccessOutput"));
    }

    public static diaCalendarioCreateOperationSuccessOutputToJson(value: DiaCalendarioCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioCreateOperationSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioUpdateByIDOperationCombinedInput(json: string): DiaCalendarioUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioUpdateByIDOperationCombinedInput"));
    }

    public static diaCalendarioUpdateByIDOperationCombinedInputToJson(value: DiaCalendarioUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toDiaCalendarioUpdateByIDOperationSuccessOutput(json: string): DiaCalendarioUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioUpdateByIDOperationSuccessOutput"));
    }

    public static diaCalendarioUpdateByIDOperationSuccessOutputToJson(value: DiaCalendarioUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioDeleteByIDOperationCombinedInput(json: string): DiaCalendarioDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioDeleteByIDOperationCombinedInput"));
    }

    public static diaCalendarioDeleteByIDOperationCombinedInputToJson(value: DiaCalendarioDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toDiaCalendarioDeleteByIDOperationSuccessOutput(json: string): DiaCalendarioDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioDeleteByIDOperationSuccessOutput"));
    }

    public static diaCalendarioDeleteByIDOperationSuccessOutputToJson(value: DiaCalendarioDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioListOperationCombinedInput(json: string): DiaCalendarioListOperationCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioListOperationCombinedInput"));
    }

    public static diaCalendarioListOperationCombinedInputToJson(value: DiaCalendarioListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioListOperationCombinedInput")), null, 2);
    }

    public static toDiaCalendarioListOperationSuccessOutput(json: string): DiaCalendarioListOperationSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioListOperationSuccessOutput"));
    }

    public static diaCalendarioListOperationSuccessOutputToJson(value: DiaCalendarioListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioListOperationSuccessOutput")), null, 2);
    }

    public static toEtapaFindByIDOperationCombinedInput(json: string): EtapaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EtapaFindByIDOperationCombinedInput"));
    }

    public static etapaFindByIDOperationCombinedInputToJson(value: EtapaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toEtapaFindByIDOperationSuccessOutput(json: string): EtapaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EtapaFindByIDOperationSuccessOutput"));
    }

    public static etapaFindByIDOperationSuccessOutputToJson(value: EtapaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toEtapaCreateOperationCombinedInput(json: string): EtapaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("EtapaCreateOperationCombinedInput"));
    }

    public static etapaCreateOperationCombinedInputToJson(value: EtapaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaCreateOperationCombinedInput")), null, 2);
    }

    public static toEtapaCreateOperationSuccessOutput(json: string): EtapaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("EtapaCreateOperationSuccessOutput"));
    }

    public static etapaCreateOperationSuccessOutputToJson(value: EtapaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaCreateOperationSuccessOutput")), null, 2);
    }

    public static toEtapaUpdateByIDOperationCombinedInput(json: string): EtapaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EtapaUpdateByIDOperationCombinedInput"));
    }

    public static etapaUpdateByIDOperationCombinedInputToJson(value: EtapaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toEtapaUpdateByIDOperationSuccessOutput(json: string): EtapaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EtapaUpdateByIDOperationSuccessOutput"));
    }

    public static etapaUpdateByIDOperationSuccessOutputToJson(value: EtapaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toEtapaDeleteByIDOperationCombinedInput(json: string): EtapaDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EtapaDeleteByIDOperationCombinedInput"));
    }

    public static etapaDeleteByIDOperationCombinedInputToJson(value: EtapaDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toEtapaDeleteByIDOperationSuccessOutput(json: string): EtapaDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EtapaDeleteByIDOperationSuccessOutput"));
    }

    public static etapaDeleteByIDOperationSuccessOutputToJson(value: EtapaDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toEtapaListOperationCombinedInput(json: string): EtapaListOperationCombinedInput {
        return cast(JSON.parse(json), r("EtapaListOperationCombinedInput"));
    }

    public static etapaListOperationCombinedInputToJson(value: EtapaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaListOperationCombinedInput")), null, 2);
    }

    public static toEtapaListOperationSuccessOutput(json: string): EtapaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("EtapaListOperationSuccessOutput"));
    }

    public static etapaListOperationSuccessOutputToJson(value: EtapaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaListOperationSuccessOutput")), null, 2);
    }

    public static toAulaFindByIDOperationCombinedInput(json: string): AulaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AulaFindByIDOperationCombinedInput"));
    }

    public static aulaFindByIDOperationCombinedInputToJson(value: AulaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toAulaFindByIDOperationSuccessOutput(json: string): AulaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AulaFindByIDOperationSuccessOutput"));
    }

    public static aulaFindByIDOperationSuccessOutputToJson(value: AulaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toAulaCreateOperationCombinedInput(json: string): AulaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("AulaCreateOperationCombinedInput"));
    }

    public static aulaCreateOperationCombinedInputToJson(value: AulaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaCreateOperationCombinedInput")), null, 2);
    }

    public static toAulaCreateOperationSuccessOutput(json: string): AulaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("AulaCreateOperationSuccessOutput"));
    }

    public static aulaCreateOperationSuccessOutputToJson(value: AulaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaCreateOperationSuccessOutput")), null, 2);
    }

    public static toAulaUpdateByIDOperationCombinedInput(json: string): AulaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AulaUpdateByIDOperationCombinedInput"));
    }

    public static aulaUpdateByIDOperationCombinedInputToJson(value: AulaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toAulaUpdateByIDOperationSuccessOutput(json: string): AulaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AulaUpdateByIDOperationSuccessOutput"));
    }

    public static aulaUpdateByIDOperationSuccessOutputToJson(value: AulaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toAulaDeleteByIDOperationCombinedInput(json: string): AulaDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("AulaDeleteByIDOperationCombinedInput"));
    }

    public static aulaDeleteByIDOperationCombinedInputToJson(value: AulaDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toAulaDeleteByIDOperationSuccessOutput(json: string): AulaDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("AulaDeleteByIDOperationSuccessOutput"));
    }

    public static aulaDeleteByIDOperationSuccessOutputToJson(value: AulaDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toAulaListOperationCombinedInput(json: string): AulaListOperationCombinedInput {
        return cast(JSON.parse(json), r("AulaListOperationCombinedInput"));
    }

    public static aulaListOperationCombinedInputToJson(value: AulaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaListOperationCombinedInput")), null, 2);
    }

    public static toAulaListOperationSuccessOutput(json: string): AulaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("AulaListOperationSuccessOutput"));
    }

    public static aulaListOperationSuccessOutputToJson(value: AulaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaListOperationSuccessOutput")), null, 2);
    }

    public static toEventoFindByIDOperationCombinedInput(json: string): EventoFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EventoFindByIDOperationCombinedInput"));
    }

    public static eventoFindByIDOperationCombinedInputToJson(value: EventoFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoFindByIDOperationCombinedInput")), null, 2);
    }

    public static toEventoFindByIDOperationSuccessOutput(json: string): EventoFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EventoFindByIDOperationSuccessOutput"));
    }

    public static eventoFindByIDOperationSuccessOutputToJson(value: EventoFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toEventoCreateOperationCombinedInput(json: string): EventoCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("EventoCreateOperationCombinedInput"));
    }

    public static eventoCreateOperationCombinedInputToJson(value: EventoCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoCreateOperationCombinedInput")), null, 2);
    }

    public static toEventoCreateOperationSuccessOutput(json: string): EventoCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("EventoCreateOperationSuccessOutput"));
    }

    public static eventoCreateOperationSuccessOutputToJson(value: EventoCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoCreateOperationSuccessOutput")), null, 2);
    }

    public static toEventoUpdateByIDOperationCombinedInput(json: string): EventoUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EventoUpdateByIDOperationCombinedInput"));
    }

    public static eventoUpdateByIDOperationCombinedInputToJson(value: EventoUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toEventoUpdateByIDOperationSuccessOutput(json: string): EventoUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EventoUpdateByIDOperationSuccessOutput"));
    }

    public static eventoUpdateByIDOperationSuccessOutputToJson(value: EventoUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toEventoDeleteByIDOperationCombinedInput(json: string): EventoDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("EventoDeleteByIDOperationCombinedInput"));
    }

    public static eventoDeleteByIDOperationCombinedInputToJson(value: EventoDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toEventoDeleteByIDOperationSuccessOutput(json: string): EventoDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("EventoDeleteByIDOperationSuccessOutput"));
    }

    public static eventoDeleteByIDOperationSuccessOutputToJson(value: EventoDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toEventoListOperationCombinedInput(json: string): EventoListOperationCombinedInput {
        return cast(JSON.parse(json), r("EventoListOperationCombinedInput"));
    }

    public static eventoListOperationCombinedInputToJson(value: EventoListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoListOperationCombinedInput")), null, 2);
    }

    public static toEventoListOperationSuccessOutput(json: string): EventoListOperationSuccessOutput {
        return cast(JSON.parse(json), r("EventoListOperationSuccessOutput"));
    }

    public static eventoListOperationSuccessOutputToJson(value: EventoListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoListOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeFindByIDOperationCombinedInput(json: string): TurmaDisponibilidadeFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeFindByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeFindByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeFindByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeCreateOperationCombinedInput(json: string): TurmaDisponibilidadeCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeCreateOperationCombinedInput"));
    }

    public static turmaDisponibilidadeCreateOperationCombinedInputToJson(value: TurmaDisponibilidadeCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeCreateOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeCreateOperationSuccessOutput(json: string): TurmaDisponibilidadeCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeCreateOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeCreateOperationSuccessOutputToJson(value: TurmaDisponibilidadeCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeCreateOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeUpdateByIDOperationCombinedInput(json: string): TurmaDisponibilidadeUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeUpdateByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeUpdateByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeUpdateByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeUpdateByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeUpdateByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDeleteByIDOperationCombinedInput(json: string): TurmaDisponibilidadeDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDeleteByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDeleteByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDeleteByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDeleteByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDeleteByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeListOperationCombinedInput(json: string): TurmaDisponibilidadeListOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeListOperationCombinedInput"));
    }

    public static turmaDisponibilidadeListOperationCombinedInputToJson(value: TurmaDisponibilidadeListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeListOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeListOperationSuccessOutput(json: string): TurmaDisponibilidadeListOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeListOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeListOperationSuccessOutputToJson(value: TurmaDisponibilidadeListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeListOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindByIDOperationCombinedInput(json: string): TurmaDisponibilidadeDiaFindByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDiaFindByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeDiaFindByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaFindByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaCreateOperationCombinedInput(json: string): TurmaDisponibilidadeDiaCreateOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaCreateOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDiaCreateOperationCombinedInputToJson(value: TurmaDisponibilidadeDiaCreateOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaCreateOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaCreateOperationSuccessOutput(json: string): TurmaDisponibilidadeDiaCreateOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaCreateOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaCreateOperationSuccessOutputToJson(value: TurmaDisponibilidadeDiaCreateOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaCreateOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput(json: string): TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDiaUpdateByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaUpdateByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput(json: string): TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDiaDeleteByIDOperationCombinedInputToJson(value: TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput(json: string): TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaDeleteByIDOperationSuccessOutputToJson(value: TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaListOperationCombinedInput(json: string): TurmaDisponibilidadeDiaListOperationCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaListOperationCombinedInput"));
    }

    public static turmaDisponibilidadeDiaListOperationCombinedInputToJson(value: TurmaDisponibilidadeDiaListOperationCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaListOperationCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaListOperationSuccessOutput(json: string): TurmaDisponibilidadeDiaListOperationSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaListOperationSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaListOperationSuccessOutputToJson(value: TurmaDisponibilidadeDiaListOperationSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaListOperationSuccessOutput")), null, 2);
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
    ], false),
    "PaginatedInput": o([
        { json: "filter", js: "filter", typ: a(r("PaginatedResultMetaFilter")) },
        { json: "limit", js: "limit", typ: u(undefined, u(0, null)) },
        { json: "page", js: "page", typ: u(undefined, u(0, null)) },
        { json: "search", js: "search", typ: u(undefined, u(null, "")) },
        { json: "sortBy", js: "sortBy", typ: a(r("PaginatedSortBy")) },
    ], false),
    "PaginatedResultMetaFilter": o([
        { json: "property", js: "property", typ: "" },
        { json: "restrictions", js: "restrictions", typ: a("") },
    ], false),
    "PaginatedSortBy": o([
        { json: "mode", js: "mode", typ: "" },
        { json: "property", js: "property", typ: "" },
    ], false),
    "Search": o([
        { json: "filters", js: "filters", typ: u(undefined, a(a(""))) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "Arquivo": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "mimeType", js: "mimeType", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "sizeBytes", js: "sizeBytes", typ: 0 },
        { json: "storageType", js: "storageType", typ: "" },
    ], false),
    "ArquivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ImagemFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
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
    ], false),
    "ArquivoFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "mimeType", js: "mimeType", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "sizeBytes", js: "sizeBytes", typ: 0 },
        { json: "storageType", js: "storageType", typ: "" },
    ], false),
    "ImagemFindOneFromImagemArquivoResult": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ImagemArquivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
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
    ], false),
    "AuthRefreshInput": o([
        { json: "refreshToken", js: "refreshToken", typ: "" },
    ], false),
    "Usuario": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "email", js: "email", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "imagemPerfil", js: "imagemPerfil", typ: u(r("ImagemFindOneResult"), null) },
        { json: "isSuperUser", js: "isSuperUser", typ: true },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "vinculosAtivos", js: "vinculosAtivos", typ: a(r("VinculoFindOneResult")) },
    ], false),
    "ImagemFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "versoes", js: "versoes", typ: a(r("ImagemArquivoFindOneFromImagemResult")) },
    ], false),
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
    ], false),
    "VinculoFindOneResult": o([
        { json: "ativo", js: "ativo", typ: true },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "cargo", js: "cargo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], false),
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
    ], false),
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
    ], false),
    "CidadeFindOneResult": o([
        { json: "estado", js: "estado", typ: r("EstadoFindOneResult") },
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "EstadoFindOneResult": o([
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "sigla", js: "sigla", typ: "" },
    ], false),
    "Vinculo": o([
        { json: "ativo", js: "ativo", typ: true },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "cargo", js: "cargo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "email", js: "email", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("Imagem"), null) },
        { json: "isSuperUser", js: "isSuperUser", typ: true },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "vinculosAtivos", js: "vinculosAtivos", typ: a(r("Vinculo")) },
    ], false),
    "Imagem": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "versoes", js: "versoes", typ: a(r("ImagemArquivoFindOneFromImagemResult")) },
    ], false),
    "VinculoUpdate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "cargos", js: "cargos", typ: a("") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneInput") },
    ], false),
    "CampusFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Ambiente": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneResult") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], false),
    "BlocoFindOneResult": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "Bloco": o([
        { json: "ambientes", js: "ambientes", typ: a(r("AmbienteFindOneResult")) },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "AmbienteFindOneResult": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneResult") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], false),
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
    ], false),
    "CampusFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CampusFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "PaginatedResultLinks": o([
        { json: "current", js: "current", typ: "" },
        { json: "first", js: "first", typ: u(null, "") },
        { json: "last", js: "last", typ: u(null, "") },
        { json: "next", js: "next", typ: u(null, "") },
        { json: "previous", js: "previous", typ: u(null, "") },
    ], false),
    "PaginatedResultMeta": o([
        { json: "currentPage", js: "currentPage", typ: 0 },
        { json: "filter", js: "filter", typ: a(r("PaginatedResultMetaFilter")) },
        { json: "itemsPerPage", js: "itemsPerPage", typ: 0 },
        { json: "search", js: "search", typ: "" },
        { json: "sortBy", js: "sortBy", typ: a(r("PaginatedSortBy")) },
        { json: "totalItems", js: "totalItems", typ: 0 },
        { json: "totalPages", js: "totalPages", typ: 0 },
    ], false),
    "Cidade": o([
        { json: "estado", js: "estado", typ: r("EstadoFindOneResult") },
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
    ], false),
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
    ], false),
    "EnderecoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Estado": o([
        { json: "id", js: "id", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "sigla", js: "sigla", typ: "" },
    ], false),
    "EstadoFindOneInput": o([
        { json: "id", js: "id", typ: 0 },
    ], false),
    "EstadoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EstadoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
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
    ], false),
    "ReservaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Curso": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneResult") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "ModalidadeFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "Diario": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "ano", js: "ano", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "etapa", js: "etapa", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "situacao", js: "situacao", typ: true },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], false),
    "DisciplinaFindOneResult": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "TurmaFindOneResult": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneResult"), null)) },
        { json: "curso", js: "curso", typ: r("CursoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "periodo", js: "periodo", typ: "" },
    ], false),
    "CursoFindOneResult": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneResult") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "DiarioProfessor": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], false),
    "DiarioFindOneResult": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "ano", js: "ano", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "etapa", js: "etapa", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "situacao", js: "situacao", typ: true },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], false),
    "DiarioProfessorFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Modalidade": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "Disciplina": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "Turma": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneResult"), null)) },
        { json: "curso", js: "curso", typ: r("CursoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "periodo", js: "periodo", typ: "" },
    ], false),
    "IntervaloDeTempo": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], false),
    "CalendarioLetivo": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "DiaCalendario": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoFindOneResult": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "DiaCalendarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Etapa": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], false),
    "EtapaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Aula": o([
        { json: "ambiente", js: "ambiente", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoFindOneResult") },
    ], false),
    "IntervaloDeTempoFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], false),
    "AulaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Evento": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], false),
    "EventoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidade": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "turma", js: "turma", typ: u(r("TurmaFindOneResult"), null) },
    ], false),
    "TurmaDisponibilidadeDia": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(r("IntervaloDeTempoFindOneResult"), null) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(r("TurmaDisponibilidadeFindOneResult"), null) },
    ], false),
    "TurmaDisponibilidadeFindOneResult": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "turma", js: "turma", typ: u(r("TurmaFindOneResult"), null) },
    ], false),
    "TurmaDisponibilidadeDiaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AuthLoginOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AuthLoginInput") },
        { json: "params", js: "params", typ: r("AuthLoginOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AuthLoginOperationCombinedInputQueries") },
    ], false),
    "AuthLoginInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], false),
    "AuthLoginOperationCombinedInputParams": o([
    ], false),
    "AuthLoginOperationCombinedInputQueries": o([
    ], false),
    "AuthLoginOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AuthSessionCredentials") },
    ], false),
    "AuthSessionCredentials": o([
        { json: "access_token", js: "access_token", typ: u(null, "") },
        { json: "expires_at", js: "expires_at", typ: u(0, null) },
        { json: "expires_in", js: "expires_in", typ: u(0, null) },
        { json: "id_token", js: "id_token", typ: u(null, "") },
        { json: "refresh_token", js: "refresh_token", typ: u(null, "") },
        { json: "scope", js: "scope", typ: u(null, "") },
        { json: "session_state", js: "session_state", typ: u(null, "") },
        { json: "token_type", js: "token_type", typ: u(null, "") },
    ], false),
    "AuthRefreshOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AuthRefreshOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AuthRefreshOperationCombinedInputQueries") },
    ], false),
    "AuthRefreshOperationCombinedInputParams": o([
    ], false),
    "AuthRefreshOperationCombinedInputQueries": o([
    ], false),
    "AuthRefreshOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AuthSessionCredentials") },
    ], false),
    "AuthWhoAmIOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AuthWhoAmIOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AuthWhoAmIOperationCombinedInputQueries") },
    ], false),
    "AuthWhoAmIOperationCombinedInputParams": o([
    ], false),
    "AuthWhoAmIOperationCombinedInputQueries": o([
    ], false),
    "AuthWhoAmIOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AuthWhoAmIResult") },
    ], false),
    "AuthWhoAmIResult": o([
        { json: "usuario", js: "usuario", typ: u(r("UsuarioFindOneResult"), null) },
    ], false),
    "AuthSetInitialPasswordOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AuthSetInitialPasswordInput") },
        { json: "params", js: "params", typ: r("AuthSetInitialPasswordOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AuthSetInitialPasswordOperationCombinedInputQueries") },
    ], false),
    "AuthSetInitialPasswordInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], false),
    "AuthSetInitialPasswordOperationCombinedInputParams": o([
    ], false),
    "AuthSetInitialPasswordOperationCombinedInputQueries": o([
    ], false),
    "AuthSetInitialPasswordOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "UsuarioFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("UsuarioFindByIDOperationCombinedInputQueries") },
    ], false),
    "UsuarioFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioFindByIDOperationCombinedInputQueries": o([
    ], false),
    "UsuarioFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("UsuarioInputCreate") },
        { json: "params", js: "params", typ: r("UsuarioCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("UsuarioCreateOperationCombinedInputQueries") },
    ], false),
    "UsuarioInputCreate": o([
        { json: "email", js: "email", typ: "" },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "UsuarioCreateOperationCombinedInputParams": o([
    ], false),
    "UsuarioCreateOperationCombinedInputQueries": o([
    ], false),
    "UsuarioCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("UsuarioInputUpdate") },
        { json: "params", js: "params", typ: r("UsuarioUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("UsuarioUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "UsuarioInputUpdate": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "matriculaSiape", js: "matriculaSiape", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "UsuarioUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "UsuarioUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("UsuarioDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "UsuarioDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "UsuarioDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "UsuarioListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("UsuarioListOperationCombinedInputQueries") },
    ], false),
    "UsuarioListOperationCombinedInputParams": o([
    ], false),
    "UsuarioListOperationCombinedInputQueries": o([
    ], false),
    "UsuarioListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "VinculoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("VinculoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("VinculoFindByIDOperationCombinedInputQueries") },
    ], false),
    "VinculoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "VinculoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "VinculoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("VinculoFindOneResult") },
    ], false),
    "VinculoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("VinculoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("VinculoListOperationCombinedInputQueries") },
    ], false),
    "VinculoListOperationCombinedInputParams": o([
    ], false),
    "VinculoListOperationCombinedInputQueries": o([
    ], false),
    "VinculoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("VinculoFindOneResult") },
    ], false),
    "AmbienteFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AmbienteFindByIDOperationCombinedInputQueries") },
    ], false),
    "AmbienteFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteFindByIDOperationCombinedInputQueries": o([
    ], false),
    "AmbienteFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AmbienteInputCreate") },
        { json: "params", js: "params", typ: r("AmbienteCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AmbienteCreateOperationCombinedInputQueries") },
    ], false),
    "AmbienteInputCreate": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneInput") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], false),
    "BlocoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteCreateOperationCombinedInputParams": o([
    ], false),
    "AmbienteCreateOperationCombinedInputQueries": o([
    ], false),
    "AmbienteCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AmbienteInputUpdate") },
        { json: "params", js: "params", typ: r("AmbienteUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AmbienteUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "AmbienteInputUpdate": o([
        { json: "bloco", js: "bloco", typ: u(undefined, r("BlocoFindOneInput")) },
        { json: "capacidade", js: "capacidade", typ: u(undefined, u(0, null)) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "descricao", js: "descricao", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "tipo", js: "tipo", typ: u(undefined, u(null, "")) },
    ], false),
    "AmbienteUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "AmbienteUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AmbienteDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "AmbienteDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "AmbienteDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "AmbienteListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AmbienteListOperationCombinedInputQueries") },
    ], false),
    "AmbienteListOperationCombinedInputParams": o([
        { json: "bloco.campus.id", js: "bloco.campus.id", typ: u(undefined, "") },
        { json: "bloco.id", js: "bloco.id", typ: u(undefined, "") },
    ], false),
    "AmbienteListOperationCombinedInputQueries": o([
    ], false),
    "AmbienteListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindAllResult") },
    ], false),
    "AmbienteFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AmbienteFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "BlocoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("BlocoFindByIDOperationCombinedInputQueries") },
    ], false),
    "BlocoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "BlocoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("BlocoInputCreate") },
        { json: "params", js: "params", typ: r("BlocoCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("BlocoCreateOperationCombinedInputQueries") },
    ], false),
    "BlocoInputCreate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "BlocoCreateOperationCombinedInputParams": o([
    ], false),
    "BlocoCreateOperationCombinedInputQueries": o([
    ], false),
    "BlocoCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("BlocoInputUpdate") },
        { json: "params", js: "params", typ: r("BlocoUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("BlocoUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "BlocoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "BlocoUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "BlocoUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("BlocoDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "BlocoDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "BlocoDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "BlocoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("BlocoListOperationCombinedInputQueries") },
    ], false),
    "BlocoListOperationCombinedInputParams": o([
        { json: "campus.id", js: "campus.id", typ: u(undefined, "") },
    ], false),
    "BlocoListOperationCombinedInputQueries": o([
    ], false),
    "BlocoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindAllResult") },
    ], false),
    "BlocoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("BlocoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CampusFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CampusFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CampusFindByIDOperationCombinedInputQueries") },
    ], false),
    "CampusFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusFindByIDOperationCombinedInputQueries": o([
    ], false),
    "CampusFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CampusInputCreate") },
        { json: "params", js: "params", typ: r("CampusCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CampusCreateOperationCombinedInputQueries") },
    ], false),
    "CampusInputCreate": o([
        { json: "apelido", js: "apelido", typ: "" },
        { json: "cnpj", js: "cnpj", typ: "" },
        { json: "endereco", js: "endereco", typ: r("EnderecoInput") },
        { json: "nomeFantasia", js: "nomeFantasia", typ: "" },
        { json: "razaoSocial", js: "razaoSocial", typ: "" },
    ], false),
    "EnderecoInput": o([
        { json: "bairro", js: "bairro", typ: "" },
        { json: "cep", js: "cep", typ: "" },
        { json: "cidade", js: "cidade", typ: r("CidadeFindOneInput") },
        { json: "complemento", js: "complemento", typ: u(null, "") },
        { json: "logradouro", js: "logradouro", typ: "" },
        { json: "numero", js: "numero", typ: 0 },
        { json: "pontoReferencia", js: "pontoReferencia", typ: u(null, "") },
    ], false),
    "CidadeFindOneInput": o([
        { json: "id", js: "id", typ: 0 },
    ], false),
    "CampusCreateOperationCombinedInputParams": o([
    ], false),
    "CampusCreateOperationCombinedInputQueries": o([
    ], false),
    "CampusCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CampusInputUpdate") },
        { json: "params", js: "params", typ: r("CampusUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CampusUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "CampusInputUpdate": o([
        { json: "apelido", js: "apelido", typ: u(undefined, "") },
        { json: "cnpj", js: "cnpj", typ: u(undefined, "") },
        { json: "endereco", js: "endereco", typ: u(undefined, r("EnderecoInput")) },
        { json: "nomeFantasia", js: "nomeFantasia", typ: u(undefined, "") },
        { json: "razaoSocial", js: "razaoSocial", typ: u(undefined, "") },
    ], false),
    "CampusUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "CampusUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CampusDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CampusDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "CampusDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "CampusDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CampusListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CampusListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CampusListOperationCombinedInputQueries") },
    ], false),
    "CampusListOperationCombinedInputParams": o([
        { json: "endereco.cidade.estado.id", js: "endereco.cidade.estado.id", typ: u(undefined, "") },
        { json: "endereco.cidade.id", js: "endereco.cidade.id", typ: u(undefined, "") },
    ], false),
    "CampusListOperationCombinedInputQueries": o([
    ], false),
    "CampusListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "EstadoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EstadoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EstadoFindByIDOperationCombinedInputQueries") },
    ], false),
    "EstadoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: 0 },
    ], false),
    "EstadoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "EstadoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CidadeFindOneResult") },
    ], false),
    "EstadoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EstadoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EstadoListOperationCombinedInputQueries") },
    ], false),
    "EstadoListOperationCombinedInputParams": o([
        { json: "estado.id", js: "estado.id", typ: u(undefined, "") },
    ], false),
    "EstadoListOperationCombinedInputQueries": o([
    ], false),
    "EstadoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CidadeFindAllResult") },
    ], false),
    "CidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "ReservaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("ReservaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ReservaFindByIDOperationCombinedInputQueries") },
    ], false),
    "ReservaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "ReservaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindOneResult") },
    ], false),
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
    ], false),
    "ReservaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("ReservaInputCreate") },
        { json: "params", js: "params", typ: r("ReservaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ReservaCreateOperationCombinedInputQueries") },
    ], false),
    "ReservaInputCreate": o([
        { json: "ambiente", js: "ambiente", typ: r("AmbienteFindOneInput") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: u(Date, null) },
        { json: "motivo", js: "motivo", typ: u(null, "") },
        { json: "situacao", js: "situacao", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
        { json: "usuario", js: "usuario", typ: r("UsuarioFindOneInput") },
    ], false),
    "AmbienteFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaCreateOperationCombinedInputParams": o([
    ], false),
    "ReservaCreateOperationCombinedInputQueries": o([
    ], false),
    "ReservaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindOneResult") },
    ], false),
    "ReservaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("ReservaInputUpdate") },
        { json: "params", js: "params", typ: r("ReservaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ReservaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "ReservaInputUpdate": o([
        { json: "ambiente", js: "ambiente", typ: u(undefined, r("AmbienteFindOneInput")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, u(Date, null)) },
        { json: "motivo", js: "motivo", typ: u(undefined, u(null, "")) },
        { json: "situacao", js: "situacao", typ: u(undefined, "") },
        { json: "tipo", js: "tipo", typ: u(undefined, u(null, "")) },
        { json: "usuario", js: "usuario", typ: u(undefined, r("UsuarioFindOneInput")) },
    ], false),
    "ReservaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "ReservaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindOneResult") },
    ], false),
    "ReservaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("ReservaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ReservaListOperationCombinedInputQueries") },
    ], false),
    "ReservaListOperationCombinedInputParams": o([
    ], false),
    "ReservaListOperationCombinedInputQueries": o([
    ], false),
    "ReservaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindAllResult") },
    ], false),
    "ReservaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ReservaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CursoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CursoFindByIDOperationCombinedInputQueries") },
    ], false),
    "CursoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "CursoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CursoInputCreate") },
        { json: "params", js: "params", typ: r("CursoCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CursoCreateOperationCombinedInputQueries") },
    ], false),
    "CursoInputCreate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "modalidade", js: "modalidade", typ: r("ModalidadeFindOneInput") },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "ModalidadeFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoCreateOperationCombinedInputParams": o([
    ], false),
    "CursoCreateOperationCombinedInputQueries": o([
    ], false),
    "CursoCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CursoInputUpdate") },
        { json: "params", js: "params", typ: r("CursoUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CursoUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "CursoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, r("ModalidadeFindOneInput")) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], false),
    "CursoUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "CursoUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CursoDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "CursoDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "CursoDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CursoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CursoListOperationCombinedInputQueries") },
    ], false),
    "CursoListOperationCombinedInputParams": o([
        { json: "campus.id", js: "campus.id", typ: u(undefined, "") },
        { json: "modalidade.id", js: "modalidade.id", typ: u(undefined, "") },
    ], false),
    "CursoListOperationCombinedInputQueries": o([
    ], false),
    "CursoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindAllResult") },
    ], false),
    "CursoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CursoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiarioFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioFindByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioFindByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioInputCreate") },
        { json: "params", js: "params", typ: r("DiarioCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioCreateOperationCombinedInputQueries") },
    ], false),
    "DiarioInputCreate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneInput"), null) },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneInput") },
        { json: "turma", js: "turma", typ: r("TurmaFindOneInput") },
    ], false),
    "DisciplinaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioCreateOperationCombinedInputParams": o([
    ], false),
    "DiarioCreateOperationCombinedInputQueries": o([
    ], false),
    "DiarioCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioInputUpdate") },
        { json: "params", js: "params", typ: r("DiarioUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioInputUpdate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "disciplina", js: "disciplina", typ: u(undefined, r("DisciplinaFindOneInput")) },
        { json: "turma", js: "turma", typ: u(undefined, r("TurmaFindOneInput")) },
    ], false),
    "DiarioUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiarioListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioListOperationCombinedInputQueries") },
    ], false),
    "DiarioListOperationCombinedInputParams": o([
        { json: "ambientePadrao.id", js: "ambientePadrao.id", typ: u(undefined, "") },
        { json: "disciplina.id", js: "disciplina.id", typ: u(undefined, "") },
        { json: "turma.id", js: "turma.id", typ: u(undefined, "") },
    ], false),
    "DiarioListOperationCombinedInputQueries": o([
    ], false),
    "DiarioListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindAllResult") },
    ], false),
    "DiarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiarioProfessorFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioProfessorFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioProfessorFindByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioProfessorFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorFindByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioProfessorFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorFindOneResult": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], false),
    "DiarioProfessorCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorInputCreate") },
        { json: "params", js: "params", typ: r("DiarioProfessorCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioProfessorCreateOperationCombinedInputQueries") },
    ], false),
    "DiarioProfessorInputCreate": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneInput") },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneInput") },
    ], false),
    "DiarioFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "VinculoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorCreateOperationCombinedInputParams": o([
    ], false),
    "DiarioProfessorCreateOperationCombinedInputQueries": o([
    ], false),
    "DiarioProfessorCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorInputUpdate") },
        { json: "params", js: "params", typ: r("DiarioProfessorUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioProfessorUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioProfessorInputUpdate": o([
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "situacao", js: "situacao", typ: u(undefined, true) },
        { json: "vinculo", js: "vinculo", typ: u(undefined, r("VinculoFindOneInput")) },
    ], false),
    "DiarioProfessorUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioProfessorUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioProfessorDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioProfessorDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "DiarioProfessorDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "DiarioProfessorDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiarioProfessorListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioProfessorListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiarioProfessorListOperationCombinedInputQueries") },
    ], false),
    "DiarioProfessorListOperationCombinedInputParams": o([
        { json: "diario.id", js: "diario.id", typ: u(undefined, "") },
        { json: "vinculo.id", js: "vinculo.id", typ: u(undefined, "") },
    ], false),
    "DiarioProfessorListOperationCombinedInputQueries": o([
    ], false),
    "DiarioProfessorListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindAllResult") },
    ], false),
    "DiarioProfessorFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioProfessorFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "ModalidadeFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("ModalidadeFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ModalidadeFindByIDOperationCombinedInputQueries") },
    ], false),
    "ModalidadeFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeFindByIDOperationCombinedInputQueries": o([
    ], false),
    "ModalidadeFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("ModalidadeInputCreate") },
        { json: "params", js: "params", typ: r("ModalidadeCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ModalidadeCreateOperationCombinedInputQueries") },
    ], false),
    "ModalidadeInputCreate": o([
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "ModalidadeCreateOperationCombinedInputParams": o([
    ], false),
    "ModalidadeCreateOperationCombinedInputQueries": o([
    ], false),
    "ModalidadeCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("ModalidadeInputUpdate") },
        { json: "params", js: "params", typ: r("ModalidadeUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ModalidadeUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "ModalidadeInputUpdate": o([
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "slug", js: "slug", typ: u(undefined, "") },
    ], false),
    "ModalidadeUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "ModalidadeUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("ModalidadeDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ModalidadeDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "ModalidadeDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "ModalidadeDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "ModalidadeListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("ModalidadeListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("ModalidadeListOperationCombinedInputQueries") },
    ], false),
    "ModalidadeListOperationCombinedInputParams": o([
    ], false),
    "ModalidadeListOperationCombinedInputQueries": o([
    ], false),
    "ModalidadeListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindAllResult") },
    ], false),
    "ModalidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ModalidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DisciplinaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DisciplinaFindByIDOperationCombinedInputQueries") },
    ], false),
    "DisciplinaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "DisciplinaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DisciplinaInputCreate") },
        { json: "params", js: "params", typ: r("DisciplinaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DisciplinaCreateOperationCombinedInputQueries") },
    ], false),
    "DisciplinaInputCreate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "DisciplinaCreateOperationCombinedInputParams": o([
    ], false),
    "DisciplinaCreateOperationCombinedInputQueries": o([
    ], false),
    "DisciplinaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DisciplinaInputUpdate") },
        { json: "params", js: "params", typ: r("DisciplinaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DisciplinaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "DisciplinaInputUpdate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: u(undefined, 0) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], false),
    "DisciplinaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "DisciplinaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DisciplinaDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "DisciplinaDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "DisciplinaDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DisciplinaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DisciplinaListOperationCombinedInputQueries") },
    ], false),
    "DisciplinaListOperationCombinedInputParams": o([
    ], false),
    "DisciplinaListOperationCombinedInputQueries": o([
    ], false),
    "DisciplinaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindAllResult") },
    ], false),
    "DisciplinaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DisciplinaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaFindByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaInputCreate") },
        { json: "params", js: "params", typ: r("TurmaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaCreateOperationCombinedInputQueries") },
    ], false),
    "TurmaInputCreate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "curso", js: "curso", typ: r("CursoFindOneInput") },
        { json: "periodo", js: "periodo", typ: "" },
    ], false),
    "CursoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaCreateOperationCombinedInputParams": o([
    ], false),
    "TurmaCreateOperationCombinedInputQueries": o([
    ], false),
    "TurmaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaInputUpdate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "curso", js: "curso", typ: u(undefined, r("CursoFindOneInput")) },
        { json: "periodo", js: "periodo", typ: u(undefined, "") },
    ], false),
    "TurmaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaListOperationCombinedInputQueries") },
    ], false),
    "TurmaListOperationCombinedInputParams": o([
        { json: "ambientePadraoAula.capacidade", js: "ambientePadraoAula.capacidade", typ: u(undefined, "") },
        { json: "ambientePadraoAula.codigo", js: "ambientePadraoAula.codigo", typ: u(undefined, "") },
        { json: "ambientePadraoAula.nome", js: "ambientePadraoAula.nome", typ: u(undefined, "") },
        { json: "ambientePadraoAula.tipo", js: "ambientePadraoAula.tipo", typ: u(undefined, "") },
        { json: "curso.campus.id", js: "curso.campus.id", typ: u(undefined, "") },
        { json: "curso.modalidade.id", js: "curso.modalidade.id", typ: u(undefined, "") },
        { json: "curso.nome", js: "curso.nome", typ: u(undefined, "") },
        { json: "curso.nomeAbreviado", js: "curso.nomeAbreviado", typ: u(undefined, "") },
    ], false),
    "TurmaListOperationCombinedInputQueries": o([
    ], false),
    "TurmaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindAllResult") },
    ], false),
    "TurmaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CalendarioLetivoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CalendarioLetivoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CalendarioLetivoFindByIDOperationCombinedInputQueries") },
    ], false),
    "CalendarioLetivoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "CalendarioLetivoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoInputCreate") },
        { json: "params", js: "params", typ: r("CalendarioLetivoCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CalendarioLetivoCreateOperationCombinedInputQueries") },
    ], false),
    "CalendarioLetivoInputCreate": o([
        { json: "ano", js: "ano", typ: "" },
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneInput"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "CalendarioLetivoCreateOperationCombinedInputParams": o([
    ], false),
    "CalendarioLetivoCreateOperationCombinedInputQueries": o([
    ], false),
    "CalendarioLetivoCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoInputUpdate") },
        { json: "params", js: "params", typ: r("CalendarioLetivoUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CalendarioLetivoUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "CalendarioLetivoInputUpdate": o([
        { json: "ano", js: "ano", typ: u(undefined, "") },
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, u(r("ModalidadeFindOneInput"), null)) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "CalendarioLetivoUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "CalendarioLetivoUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CalendarioLetivoDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CalendarioLetivoDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "CalendarioLetivoDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "CalendarioLetivoDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CalendarioLetivoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("CalendarioLetivoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("CalendarioLetivoListOperationCombinedInputQueries") },
    ], false),
    "CalendarioLetivoListOperationCombinedInputParams": o([
        { json: "campus.id", js: "campus.id", typ: u(undefined, "") },
        { json: "modalidade.id", js: "modalidade.id", typ: u(undefined, "") },
    ], false),
    "CalendarioLetivoListOperationCombinedInputQueries": o([
    ], false),
    "CalendarioLetivoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindAllResult") },
    ], false),
    "CalendarioLetivoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CalendarioLetivoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiaCalendarioFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiaCalendarioFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiaCalendarioFindByIDOperationCombinedInputQueries") },
    ], false),
    "DiaCalendarioFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioFindByIDOperationCombinedInputQueries": o([
    ], false),
    "DiaCalendarioFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindOneResult") },
    ], false),
    "DiaCalendarioFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioInputCreate") },
        { json: "params", js: "params", typ: r("DiaCalendarioCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiaCalendarioCreateOperationCombinedInputQueries") },
    ], false),
    "DiaCalendarioInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
    ], false),
    "CalendarioLetivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioCreateOperationCombinedInputParams": o([
    ], false),
    "DiaCalendarioCreateOperationCombinedInputQueries": o([
    ], false),
    "DiaCalendarioCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindOneResult") },
    ], false),
    "DiaCalendarioUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioInputUpdate") },
        { json: "params", js: "params", typ: r("DiaCalendarioUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiaCalendarioUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "DiaCalendarioInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diaLetivo", js: "diaLetivo", typ: u(undefined, true) },
        { json: "feriado", js: "feriado", typ: u(undefined, true) },
    ], false),
    "DiaCalendarioUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "DiaCalendarioUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindOneResult") },
    ], false),
    "DiaCalendarioDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiaCalendarioDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiaCalendarioDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "DiaCalendarioDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "DiaCalendarioDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiaCalendarioListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("DiaCalendarioListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("DiaCalendarioListOperationCombinedInputQueries") },
    ], false),
    "DiaCalendarioListOperationCombinedInputParams": o([
        { json: "calendario.id", js: "calendario.id", typ: u(undefined, "") },
    ], false),
    "DiaCalendarioListOperationCombinedInputQueries": o([
    ], false),
    "DiaCalendarioListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindAllResult") },
    ], false),
    "DiaCalendarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiaCalendarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "EtapaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EtapaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EtapaFindByIDOperationCombinedInputQueries") },
    ], false),
    "EtapaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "EtapaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindOneResult") },
    ], false),
    "EtapaFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], false),
    "EtapaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("EtapaInputCreate") },
        { json: "params", js: "params", typ: r("EtapaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EtapaCreateOperationCombinedInputQueries") },
    ], false),
    "EtapaInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], false),
    "EtapaCreateOperationCombinedInputParams": o([
    ], false),
    "EtapaCreateOperationCombinedInputQueries": o([
    ], false),
    "EtapaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindOneResult") },
    ], false),
    "EtapaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("EtapaInputUpdate") },
        { json: "params", js: "params", typ: r("EtapaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EtapaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "EtapaInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "numero", js: "numero", typ: u(undefined, u(0, null)) },
    ], false),
    "EtapaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "EtapaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindOneResult") },
    ], false),
    "EtapaDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EtapaDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EtapaDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "EtapaDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "EtapaDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "EtapaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EtapaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EtapaListOperationCombinedInputQueries") },
    ], false),
    "EtapaListOperationCombinedInputParams": o([
        { json: "calendario.id", js: "calendario.id", typ: u(undefined, "") },
    ], false),
    "EtapaListOperationCombinedInputQueries": o([
    ], false),
    "EtapaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindAllResult") },
    ], false),
    "EtapaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EtapaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "AulaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AulaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AulaFindByIDOperationCombinedInputQueries") },
    ], false),
    "AulaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "AulaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindOneResult") },
    ], false),
    "AulaFindOneResult": o([
        { json: "ambiente", js: "ambiente", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoFindOneResult") },
    ], false),
    "AulaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AulaInputCreate") },
        { json: "params", js: "params", typ: r("AulaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AulaCreateOperationCombinedInputQueries") },
    ], false),
    "AulaInputCreate": o([
        { json: "ambiente", js: "ambiente", typ: u(r("AmbienteFindOneInput"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "diario", js: "diario", typ: r("DiarioFindOneInput") },
        { json: "formato", js: "formato", typ: u(null, "") },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: r("IntervaloDeTempoInput") },
    ], false),
    "IntervaloDeTempoInput": o([
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], false),
    "AulaCreateOperationCombinedInputParams": o([
    ], false),
    "AulaCreateOperationCombinedInputQueries": o([
    ], false),
    "AulaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindOneResult") },
    ], false),
    "AulaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("AulaInputUpdate") },
        { json: "params", js: "params", typ: r("AulaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AulaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "AulaInputUpdate": o([
        { json: "ambiente", js: "ambiente", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "formato", js: "formato", typ: u(undefined, u(null, "")) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, r("IntervaloDeTempoInput")) },
    ], false),
    "AulaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "AulaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindOneResult") },
    ], false),
    "AulaDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AulaDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AulaDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "AulaDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "AulaDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "AulaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("AulaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("AulaListOperationCombinedInputQueries") },
    ], false),
    "AulaListOperationCombinedInputParams": o([
        { json: "ambiente.id", js: "ambiente.id", typ: u(undefined, "") },
        { json: "diario.id", js: "diario.id", typ: u(undefined, "") },
    ], false),
    "AulaListOperationCombinedInputQueries": o([
    ], false),
    "AulaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindAllResult") },
    ], false),
    "AulaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AulaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "EventoFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EventoFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EventoFindByIDOperationCombinedInputQueries") },
    ], false),
    "EventoFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoFindByIDOperationCombinedInputQueries": o([
    ], false),
    "EventoFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindOneResult") },
    ], false),
    "EventoFindOneResult": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneResult"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], false),
    "EventoCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("EventoInputCreate") },
        { json: "params", js: "params", typ: r("EventoCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EventoCreateOperationCombinedInputQueries") },
    ], false),
    "EventoInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], false),
    "EventoCreateOperationCombinedInputParams": o([
    ], false),
    "EventoCreateOperationCombinedInputQueries": o([
    ], false),
    "EventoCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindOneResult") },
    ], false),
    "EventoUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("EventoInputUpdate") },
        { json: "params", js: "params", typ: r("EventoUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EventoUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "EventoInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "nome", js: "nome", typ: u(undefined, u(null, "")) },
    ], false),
    "EventoUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "EventoUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindOneResult") },
    ], false),
    "EventoDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EventoDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EventoDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "EventoDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "EventoDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "EventoListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("EventoListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("EventoListOperationCombinedInputQueries") },
    ], false),
    "EventoListOperationCombinedInputParams": o([
        { json: "calendario.id", js: "calendario.id", typ: u(undefined, "") },
    ], false),
    "EventoListOperationCombinedInputQueries": o([
    ], false),
    "EventoListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindAllResult") },
    ], false),
    "EventoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EventoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaDisponibilidadeFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeFindByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeFindByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeInputCreate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeCreateOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeInputCreate": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "turma", js: "turma", typ: u(r("TurmaFindOneInput"), null) },
    ], false),
    "TurmaDisponibilidadeCreateOperationCombinedInputParams": o([
    ], false),
    "TurmaDisponibilidadeCreateOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeInputUpdate": o([
        { json: "dataFim", js: "dataFim", typ: u(undefined, u(Date, null)) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "turma", js: "turma", typ: u(undefined, u(r("TurmaFindOneInput"), null)) },
    ], false),
    "TurmaDisponibilidadeUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaDisponibilidadeListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeListOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeListOperationCombinedInputParams": o([
        { json: "turma.id", js: "turma.id", typ: u(undefined, "") },
    ], false),
    "TurmaDisponibilidadeListOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindAllResult") },
    ], false),
    "TurmaDisponibilidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaFindByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaFindByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDiaFindByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaFindOneResult": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(r("IntervaloDeTempoFindOneResult"), null) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(r("TurmaDisponibilidadeFindOneResult"), null) },
    ], false),
    "TurmaDisponibilidadeDiaCreateOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaInputCreate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaCreateOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaCreateOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaInputCreate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(r("IntervaloDeTempoInput"), null) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(r("TurmaDisponibilidadeFindOneInput"), null) },
    ], false),
    "TurmaDisponibilidadeFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaCreateOperationCombinedInputParams": o([
    ], false),
    "TurmaDisponibilidadeDiaCreateOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDiaCreateOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaInputUpdate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: u(undefined, 0) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, u(r("IntervaloDeTempoInput"), null)) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(undefined, u(r("TurmaDisponibilidadeFindOneInput"), null)) },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDOperationSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaDisponibilidadeDiaListOperationCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaListOperationCombinedInputParams") },
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaListOperationCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaListOperationCombinedInputParams": o([
        { json: "intervaloDeTempo.id", js: "intervaloDeTempo.id", typ: u(undefined, "") },
        { json: "turmaDisponibilidade.id", js: "turmaDisponibilidade.id", typ: u(undefined, "") },
    ], false),
    "TurmaDisponibilidadeDiaListOperationCombinedInputQueries": o([
    ], false),
    "TurmaDisponibilidadeDiaListOperationSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindAllResult") },
    ], false),
    "TurmaDisponibilidadeDiaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeDiaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
};
