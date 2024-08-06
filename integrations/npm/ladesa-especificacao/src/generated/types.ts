// To parse this data:
//
//   import { Convert, PaginatedSortBy, PaginatedResultMetaFilter, PaginatedResultMeta, PaginatedResultLinks, PaginatedBaseInput, PaginatedInput, Search, Arquivo, ArquivoFindOneInput, ArquivoFindOneResult, Imagem, ImagemFindOneInput, ImagemFindOneFromImagemArquivoResult, ImagemFindOneResult, ImagemArquivo, ImagemArquivoFindOneInput, ImagemArquivoFindOneFromImagemResult, ImagemArquivoFindOneResult, AuthLoginInput, AuthLoginCombinedInput, AuthLoginCombinedSuccessOutput, AuthRefreshInput, AuthRefreshCombinedInput, AuthRefreshCombinedSuccessOutput, AuthWhoAmIResult, AuthWhoAmICombinedInput, AuthWhoAmICombinedSuccessOutput, AuthSessionCredentials, AuthSetInitialPasswordInput, AuthSetInitialPasswordCombinedInput, AuthSetInitialPasswordCombinedSuccessOutput, Usuario, UsuarioFindAllResult, UsuarioFindOneInput, UsuarioFindOneResult, UsuarioInputCreate, UsuarioInputUpdate, VinculoFindAllResult, Vinculo, VinculoFindOneInput, VinculoFindOneResult, VinculoUpdateInput, Ambiente, AmbienteFindOneInput, AmbienteFindOneResult, AmbienteInputCreate, AmbienteInputUpdate, AmbienteFindAllResult, Bloco, BlocoFindOneInput, BlocoFindOneResult, BlocoInputCreate, BlocoInputUpdate, BlocoFindAllResult, Campus, CampusFindOneInput, CampusFindOneResult, CampusInputCreate, CampusInputUpdate, CampusFindAllResult, Cidade, CidadeFindOneInput, CidadeFindOneResult, CidadeFindAllResult, Endereco, EnderecoFindOneInput, EnderecoFindOneResult, EnderecoInput, Estado, EstadoFindOneInput, EstadoFindOneResult, EstadoFindAllResult, Reserva, ReservaFindOneInput, ReservaFindOneResult, ReservaInputCreate, ReservaInputUpdate, ReservaFindAllResult, Curso, CursoFindOneInput, CursoFindOneResult, CursoInputCreate, CursoInputUpdate, CursoFindAllResult, Modalidade, ModalidadeFindOneInput, ModalidadeFindOneResult, ModalidadeInputCreate, ModalidadeInputUpdate, ModalidadeFindAllResult, Disciplina, DisciplinaFindOneInput, DisciplinaFindOneResult, DisciplinaInputCreate, DisciplinaInputUpdate, DisciplinaFindAllResult, Turma, TurmaFindOneInput, TurmaFindOneResult, TurmaInputCreate, TurmaInputUpdate, TurmaFindAllResult, IntervaloDeTempo, IntervaloDeTempoFindOneResult, IntervaloDeTempoInput, CalendarioLetivo, CalendarioLetivoFindOneInput, CalendarioLetivoFindOneResult, CalendarioLetivoInputCreate, CalendarioLetivoInputUpdate, CalendarioLetivoFindAllResult, Diario, DiarioFindOneInput, DiarioFindOneResult, DiarioInputCreate, DiarioInputUpdate, DiarioFindAllResult, DiarioProfessor, DiarioProfessorFindOneInput, DiarioProfessorFindOneResult, DiarioProfessorInputCreate, DiarioProfessorInputUpdate, DiarioProfessorFindAllResult, DiaCalendario, DiaCalendarioFindOneInput, DiaCalendarioFindOneResult, DiaCalendarioInputCreate, DiaCalendarioInputUpdate, DiaCalendarioFindAllResult, Etapa, EtapaFindOneInput, EtapaFindOneResult, EtapaInputCreate, EtapaInputUpdate, EtapaFindAllResult, Aula, AulaFindOneInput, AulaFindOneResult, AulaInputCreate, AulaInputUpdate, AulaFindAllResult, Evento, EventoFindOneInput, EventoFindOneResult, EventoInputCreate, EventoInputUpdate, EventoFindAllResult, TurmaDisponibilidade, TurmaDisponibilidadeFindOneInput, TurmaDisponibilidadeFindOneResult, TurmaDisponibilidadeInputCreate, TurmaDisponibilidadeInputUpdate, TurmaDisponibilidadeFindAllResult, TurmaDisponibilidadeDia, TurmaDisponibilidadeDiaFindOneInput, TurmaDisponibilidadeDiaFindOneResult, TurmaDisponibilidadeDiaInputCreate, TurmaDisponibilidadeDiaInputUpdate, TurmaDisponibilidadeDiaFindAllResult, ArquivoGetFileCombinedInput, ArquivoGetFileCombinedSuccessOutput, UsuarioFindByIDCombinedInput, UsuarioFindByIDCombinedSuccessOutput, UsuarioCreateCombinedInput, UsuarioCreateCombinedSuccessOutput, UsuarioUpdateByIDCombinedInput, UsuarioUpdateByIDCombinedSuccessOutput, UsuarioDeleteByIDCombinedInput, UsuarioDeleteByIDCombinedSuccessOutput, UsuarioListCombinedInput, UsuarioListCombinedSuccessOutput, UsuarioGetCoverImageCombinedInput, UsuarioGetCoverImageCombinedSuccessOutput, UsuarioSetCoverImageCombinedInput, UsuarioSetCoverImageCombinedSuccessOutput, UsuarioGetProfileImageCombinedInput, UsuarioGetProfileImageCombinedSuccessOutput, UsuarioSetProfileImageCombinedInput, UsuarioSetProfileImageCombinedSuccessOutput, VinculoFindByIDCombinedInput, VinculoFindByIDCombinedSuccessOutput, VinculoListCombinedInput, VinculoListCombinedSuccessOutput, VinculoUpdateCombinedInput, VinculoUpdateCombinedSuccessOutput, AmbienteFindByIDCombinedInput, AmbienteFindByIDCombinedSuccessOutput, AmbienteCreateCombinedInput, AmbienteCreateCombinedSuccessOutput, AmbienteUpdateByIDCombinedInput, AmbienteUpdateByIDCombinedSuccessOutput, AmbienteDeleteByIDCombinedInput, AmbienteDeleteByIDCombinedSuccessOutput, AmbienteListCombinedInput, AmbienteListCombinedSuccessOutput, AmbienteGetCoverImageCombinedInput, AmbienteGetCoverImageCombinedSuccessOutput, AmbienteSetCoverImageCombinedInput, AmbienteSetCoverImageCombinedSuccessOutput, BlocoFindByIDCombinedInput, BlocoFindByIDCombinedSuccessOutput, BlocoCreateCombinedInput, BlocoCreateCombinedSuccessOutput, BlocoUpdateByIDCombinedInput, BlocoUpdateByIDCombinedSuccessOutput, BlocoDeleteByIDCombinedInput, BlocoDeleteByIDCombinedSuccessOutput, BlocoListCombinedInput, BlocoListCombinedSuccessOutput, BlocoGetCoverImageCombinedInput, BlocoGetCoverImageCombinedSuccessOutput, BlocoSetCoverImageCombinedInput, BlocoSetCoverImageCombinedSuccessOutput, CampusFindByIDCombinedInput, CampusFindByIDCombinedSuccessOutput, CampusCreateCombinedInput, CampusCreateCombinedSuccessOutput, CampusUpdateByIDCombinedInput, CampusUpdateByIDCombinedSuccessOutput, CampusDeleteByIDCombinedInput, CampusDeleteByIDCombinedSuccessOutput, CampusListCombinedInput, CampusListCombinedSuccessOutput, CidadeFindByIDCombinedInput, CidadeFindByIDCombinedSuccessOutput, CidadeListCombinedInput, CidadeListCombinedSuccessOutput, EstadoFindByIDCombinedInput, EstadoFindByIDCombinedSuccessOutput, EstadoListCombinedInput, EstadoListCombinedSuccessOutput, ReservaFindByIDCombinedInput, ReservaFindByIDCombinedSuccessOutput, ReservaCreateCombinedInput, ReservaCreateCombinedSuccessOutput, ReservaUpdateByIDCombinedInput, ReservaUpdateByIDCombinedSuccessOutput, ReservaDeleteByIDCombinedInput, ReservaDeleteByIDCombinedSuccessOutput, ReservaListCombinedInput, ReservaListCombinedSuccessOutput, CursoFindByIDCombinedInput, CursoFindByIDCombinedSuccessOutput, CursoCreateCombinedInput, CursoCreateCombinedSuccessOutput, CursoUpdateByIDCombinedInput, CursoUpdateByIDCombinedSuccessOutput, CursoDeleteByIDCombinedInput, CursoDeleteByIDCombinedSuccessOutput, CursoListCombinedInput, CursoListCombinedSuccessOutput, CursoGetCoverImageCombinedInput, CursoGetCoverImageCombinedSuccessOutput, CursoSetCoverImageCombinedInput, CursoSetCoverImageCombinedSuccessOutput, ModalidadeFindByIDCombinedInput, ModalidadeFindByIDCombinedSuccessOutput, ModalidadeCreateCombinedInput, ModalidadeCreateCombinedSuccessOutput, ModalidadeUpdateByIDCombinedInput, ModalidadeUpdateByIDCombinedSuccessOutput, ModalidadeDeleteByIDCombinedInput, ModalidadeDeleteByIDCombinedSuccessOutput, ModalidadeListCombinedInput, ModalidadeListCombinedSuccessOutput, DisciplinaFindByIDCombinedInput, DisciplinaFindByIDCombinedSuccessOutput, DisciplinaCreateCombinedInput, DisciplinaCreateCombinedSuccessOutput, DisciplinaUpdateByIDCombinedInput, DisciplinaUpdateByIDCombinedSuccessOutput, DisciplinaDeleteByIDCombinedInput, DisciplinaDeleteByIDCombinedSuccessOutput, DisciplinaListCombinedInput, DisciplinaListCombinedSuccessOutput, DisciplinaGetCoverImageCombinedInput, DisciplinaGetCoverImageCombinedSuccessOutput, DisciplinaSetCoverImageCombinedInput, DisciplinaSetCoverImageCombinedSuccessOutput, TurmaFindByIDCombinedInput, TurmaFindByIDCombinedSuccessOutput, TurmaCreateCombinedInput, TurmaCreateCombinedSuccessOutput, TurmaUpdateByIDCombinedInput, TurmaUpdateByIDCombinedSuccessOutput, TurmaDeleteByIDCombinedInput, TurmaDeleteByIDCombinedSuccessOutput, TurmaListCombinedInput, TurmaListCombinedSuccessOutput, TurmaGetCoverImageCombinedInput, TurmaGetCoverImageCombinedSuccessOutput, TurmaSetCoverImageCombinedInput, TurmaSetCoverImageCombinedSuccessOutput, CalendarioLetivoFindByIDCombinedInput, CalendarioLetivoFindByIDCombinedSuccessOutput, CalendarioLetivoCreateCombinedInput, CalendarioLetivoCreateCombinedSuccessOutput, CalendarioLetivoUpdateByIDCombinedInput, CalendarioLetivoUpdateByIDCombinedSuccessOutput, CalendarioLetivoDeleteByIDCombinedInput, CalendarioLetivoDeleteByIDCombinedSuccessOutput, CalendarioLetivoListCombinedInput, CalendarioLetivoListCombinedSuccessOutput, DiarioFindByIDCombinedInput, DiarioFindByIDCombinedSuccessOutput, DiarioCreateCombinedInput, DiarioCreateCombinedSuccessOutput, DiarioUpdateByIDCombinedInput, DiarioUpdateByIDCombinedSuccessOutput, DiarioDeleteByIDCombinedInput, DiarioDeleteByIDCombinedSuccessOutput, DiarioListCombinedInput, DiarioListCombinedSuccessOutput, DiarioGetCoverImageCombinedInput, DiarioGetCoverImageCombinedSuccessOutput, DiarioSetCoverImageCombinedInput, DiarioSetCoverImageCombinedSuccessOutput, DiarioProfessorFindByIDCombinedInput, DiarioProfessorFindByIDCombinedSuccessOutput, DiarioProfessorCreateCombinedInput, DiarioProfessorCreateCombinedSuccessOutput, DiarioProfessorUpdateByIDCombinedInput, DiarioProfessorUpdateByIDCombinedSuccessOutput, DiarioProfessorDeleteByIDCombinedInput, DiarioProfessorDeleteByIDCombinedSuccessOutput, DiarioProfessorListCombinedInput, DiarioProfessorListCombinedSuccessOutput, DiaCalendarioFindByIDCombinedInput, DiaCalendarioFindByIDCombinedSuccessOutput, DiaCalendarioCreateCombinedInput, DiaCalendarioCreateCombinedSuccessOutput, DiaCalendarioUpdateByIDCombinedInput, DiaCalendarioUpdateByIDCombinedSuccessOutput, DiaCalendarioDeleteByIDCombinedInput, DiaCalendarioDeleteByIDCombinedSuccessOutput, DiaCalendarioListCombinedInput, DiaCalendarioListCombinedSuccessOutput, EtapaFindByIDCombinedInput, EtapaFindByIDCombinedSuccessOutput, EtapaCreateCombinedInput, EtapaCreateCombinedSuccessOutput, EtapaUpdateByIDCombinedInput, EtapaUpdateByIDCombinedSuccessOutput, EtapaDeleteByIDCombinedInput, EtapaDeleteByIDCombinedSuccessOutput, EtapaListCombinedInput, EtapaListCombinedSuccessOutput, AulaFindByIDCombinedInput, AulaFindByIDCombinedSuccessOutput, AulaCreateCombinedInput, AulaCreateCombinedSuccessOutput, AulaUpdateByIDCombinedInput, AulaUpdateByIDCombinedSuccessOutput, AulaDeleteByIDCombinedInput, AulaDeleteByIDCombinedSuccessOutput, AulaListCombinedInput, AulaListCombinedSuccessOutput, EventoFindByIDCombinedInput, EventoFindByIDCombinedSuccessOutput, EventoCreateCombinedInput, EventoCreateCombinedSuccessOutput, EventoUpdateByIDCombinedInput, EventoUpdateByIDCombinedSuccessOutput, EventoDeleteByIDCombinedInput, EventoDeleteByIDCombinedSuccessOutput, EventoListCombinedInput, EventoListCombinedSuccessOutput, TurmaDisponibilidadeFindByIDCombinedInput, TurmaDisponibilidadeFindByIDCombinedSuccessOutput, TurmaDisponibilidadeCreateCombinedInput, TurmaDisponibilidadeCreateCombinedSuccessOutput, TurmaDisponibilidadeUpdateByIDCombinedInput, TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput, TurmaDisponibilidadeDeleteByIDCombinedInput, TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput, TurmaDisponibilidadeListCombinedInput, TurmaDisponibilidadeListCombinedSuccessOutput, TurmaDisponibilidadeDiaFindByIDCombinedInput, TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput, TurmaDisponibilidadeDiaCreateCombinedInput, TurmaDisponibilidadeDiaCreateCombinedSuccessOutput, TurmaDisponibilidadeDiaUpdateByIDCombinedInput, TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput, TurmaDisponibilidadeDiaDeleteByIDCombinedInput, TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput, TurmaDisponibilidadeDiaListCombinedInput, TurmaDisponibilidadeDiaListCombinedSuccessOutput } from "./file";
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
//   const authLoginCombinedInput = Convert.toAuthLoginCombinedInput(json);
//   const authLoginCombinedSuccessOutput = Convert.toAuthLoginCombinedSuccessOutput(json);
//   const authRefreshInput = Convert.toAuthRefreshInput(json);
//   const authRefreshCombinedInput = Convert.toAuthRefreshCombinedInput(json);
//   const authRefreshCombinedSuccessOutput = Convert.toAuthRefreshCombinedSuccessOutput(json);
//   const authWhoAmIResult = Convert.toAuthWhoAmIResult(json);
//   const authWhoAmICombinedInput = Convert.toAuthWhoAmICombinedInput(json);
//   const authWhoAmICombinedSuccessOutput = Convert.toAuthWhoAmICombinedSuccessOutput(json);
//   const authSessionCredentials = Convert.toAuthSessionCredentials(json);
//   const authSetInitialPasswordInput = Convert.toAuthSetInitialPasswordInput(json);
//   const authSetInitialPasswordCombinedInput = Convert.toAuthSetInitialPasswordCombinedInput(json);
//   const authSetInitialPasswordCombinedSuccessOutput = Convert.toAuthSetInitialPasswordCombinedSuccessOutput(json);
//   const usuario = Convert.toUsuario(json);
//   const usuarioFindAllResult = Convert.toUsuarioFindAllResult(json);
//   const usuarioFindOneInput = Convert.toUsuarioFindOneInput(json);
//   const usuarioFindOneResult = Convert.toUsuarioFindOneResult(json);
//   const usuarioInputCreate = Convert.toUsuarioInputCreate(json);
//   const usuarioInputUpdate = Convert.toUsuarioInputUpdate(json);
//   const vinculoFindAllResult = Convert.toVinculoFindAllResult(json);
//   const vinculo = Convert.toVinculo(json);
//   const vinculoFindOneInput = Convert.toVinculoFindOneInput(json);
//   const vinculoFindOneResult = Convert.toVinculoFindOneResult(json);
//   const vinculoUpdateInput = Convert.toVinculoUpdateInput(json);
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
//   const arquivoGetFileCombinedInput = Convert.toArquivoGetFileCombinedInput(json);
//   const arquivoGetFileCombinedSuccessOutput = Convert.toArquivoGetFileCombinedSuccessOutput(json);
//   const usuarioFindByIDCombinedInput = Convert.toUsuarioFindByIDCombinedInput(json);
//   const usuarioFindByIDCombinedSuccessOutput = Convert.toUsuarioFindByIDCombinedSuccessOutput(json);
//   const usuarioCreateCombinedInput = Convert.toUsuarioCreateCombinedInput(json);
//   const usuarioCreateCombinedSuccessOutput = Convert.toUsuarioCreateCombinedSuccessOutput(json);
//   const usuarioUpdateByIDCombinedInput = Convert.toUsuarioUpdateByIDCombinedInput(json);
//   const usuarioUpdateByIDCombinedSuccessOutput = Convert.toUsuarioUpdateByIDCombinedSuccessOutput(json);
//   const usuarioDeleteByIDCombinedInput = Convert.toUsuarioDeleteByIDCombinedInput(json);
//   const usuarioDeleteByIDCombinedSuccessOutput = Convert.toUsuarioDeleteByIDCombinedSuccessOutput(json);
//   const usuarioListCombinedInput = Convert.toUsuarioListCombinedInput(json);
//   const usuarioListCombinedSuccessOutput = Convert.toUsuarioListCombinedSuccessOutput(json);
//   const usuarioGetCoverImageCombinedInput = Convert.toUsuarioGetCoverImageCombinedInput(json);
//   const usuarioGetCoverImageCombinedSuccessOutput = Convert.toUsuarioGetCoverImageCombinedSuccessOutput(json);
//   const usuarioSetCoverImageCombinedInput = Convert.toUsuarioSetCoverImageCombinedInput(json);
//   const usuarioSetCoverImageCombinedSuccessOutput = Convert.toUsuarioSetCoverImageCombinedSuccessOutput(json);
//   const usuarioGetProfileImageCombinedInput = Convert.toUsuarioGetProfileImageCombinedInput(json);
//   const usuarioGetProfileImageCombinedSuccessOutput = Convert.toUsuarioGetProfileImageCombinedSuccessOutput(json);
//   const usuarioSetProfileImageCombinedInput = Convert.toUsuarioSetProfileImageCombinedInput(json);
//   const usuarioSetProfileImageCombinedSuccessOutput = Convert.toUsuarioSetProfileImageCombinedSuccessOutput(json);
//   const vinculoFindByIDCombinedInput = Convert.toVinculoFindByIDCombinedInput(json);
//   const vinculoFindByIDCombinedSuccessOutput = Convert.toVinculoFindByIDCombinedSuccessOutput(json);
//   const vinculoListCombinedInput = Convert.toVinculoListCombinedInput(json);
//   const vinculoListCombinedSuccessOutput = Convert.toVinculoListCombinedSuccessOutput(json);
//   const vinculoUpdateCombinedInput = Convert.toVinculoUpdateCombinedInput(json);
//   const vinculoUpdateCombinedSuccessOutput = Convert.toVinculoUpdateCombinedSuccessOutput(json);
//   const ambienteFindByIDCombinedInput = Convert.toAmbienteFindByIDCombinedInput(json);
//   const ambienteFindByIDCombinedSuccessOutput = Convert.toAmbienteFindByIDCombinedSuccessOutput(json);
//   const ambienteCreateCombinedInput = Convert.toAmbienteCreateCombinedInput(json);
//   const ambienteCreateCombinedSuccessOutput = Convert.toAmbienteCreateCombinedSuccessOutput(json);
//   const ambienteUpdateByIDCombinedInput = Convert.toAmbienteUpdateByIDCombinedInput(json);
//   const ambienteUpdateByIDCombinedSuccessOutput = Convert.toAmbienteUpdateByIDCombinedSuccessOutput(json);
//   const ambienteDeleteByIDCombinedInput = Convert.toAmbienteDeleteByIDCombinedInput(json);
//   const ambienteDeleteByIDCombinedSuccessOutput = Convert.toAmbienteDeleteByIDCombinedSuccessOutput(json);
//   const ambienteListCombinedInput = Convert.toAmbienteListCombinedInput(json);
//   const ambienteListCombinedSuccessOutput = Convert.toAmbienteListCombinedSuccessOutput(json);
//   const ambienteGetCoverImageCombinedInput = Convert.toAmbienteGetCoverImageCombinedInput(json);
//   const ambienteGetCoverImageCombinedSuccessOutput = Convert.toAmbienteGetCoverImageCombinedSuccessOutput(json);
//   const ambienteSetCoverImageCombinedInput = Convert.toAmbienteSetCoverImageCombinedInput(json);
//   const ambienteSetCoverImageCombinedSuccessOutput = Convert.toAmbienteSetCoverImageCombinedSuccessOutput(json);
//   const blocoFindByIDCombinedInput = Convert.toBlocoFindByIDCombinedInput(json);
//   const blocoFindByIDCombinedSuccessOutput = Convert.toBlocoFindByIDCombinedSuccessOutput(json);
//   const blocoCreateCombinedInput = Convert.toBlocoCreateCombinedInput(json);
//   const blocoCreateCombinedSuccessOutput = Convert.toBlocoCreateCombinedSuccessOutput(json);
//   const blocoUpdateByIDCombinedInput = Convert.toBlocoUpdateByIDCombinedInput(json);
//   const blocoUpdateByIDCombinedSuccessOutput = Convert.toBlocoUpdateByIDCombinedSuccessOutput(json);
//   const blocoDeleteByIDCombinedInput = Convert.toBlocoDeleteByIDCombinedInput(json);
//   const blocoDeleteByIDCombinedSuccessOutput = Convert.toBlocoDeleteByIDCombinedSuccessOutput(json);
//   const blocoListCombinedInput = Convert.toBlocoListCombinedInput(json);
//   const blocoListCombinedSuccessOutput = Convert.toBlocoListCombinedSuccessOutput(json);
//   const blocoGetCoverImageCombinedInput = Convert.toBlocoGetCoverImageCombinedInput(json);
//   const blocoGetCoverImageCombinedSuccessOutput = Convert.toBlocoGetCoverImageCombinedSuccessOutput(json);
//   const blocoSetCoverImageCombinedInput = Convert.toBlocoSetCoverImageCombinedInput(json);
//   const blocoSetCoverImageCombinedSuccessOutput = Convert.toBlocoSetCoverImageCombinedSuccessOutput(json);
//   const campusFindByIDCombinedInput = Convert.toCampusFindByIDCombinedInput(json);
//   const campusFindByIDCombinedSuccessOutput = Convert.toCampusFindByIDCombinedSuccessOutput(json);
//   const campusCreateCombinedInput = Convert.toCampusCreateCombinedInput(json);
//   const campusCreateCombinedSuccessOutput = Convert.toCampusCreateCombinedSuccessOutput(json);
//   const campusUpdateByIDCombinedInput = Convert.toCampusUpdateByIDCombinedInput(json);
//   const campusUpdateByIDCombinedSuccessOutput = Convert.toCampusUpdateByIDCombinedSuccessOutput(json);
//   const campusDeleteByIDCombinedInput = Convert.toCampusDeleteByIDCombinedInput(json);
//   const campusDeleteByIDCombinedSuccessOutput = Convert.toCampusDeleteByIDCombinedSuccessOutput(json);
//   const campusListCombinedInput = Convert.toCampusListCombinedInput(json);
//   const campusListCombinedSuccessOutput = Convert.toCampusListCombinedSuccessOutput(json);
//   const cidadeFindByIDCombinedInput = Convert.toCidadeFindByIDCombinedInput(json);
//   const cidadeFindByIDCombinedSuccessOutput = Convert.toCidadeFindByIDCombinedSuccessOutput(json);
//   const cidadeListCombinedInput = Convert.toCidadeListCombinedInput(json);
//   const cidadeListCombinedSuccessOutput = Convert.toCidadeListCombinedSuccessOutput(json);
//   const estadoFindByIDCombinedInput = Convert.toEstadoFindByIDCombinedInput(json);
//   const estadoFindByIDCombinedSuccessOutput = Convert.toEstadoFindByIDCombinedSuccessOutput(json);
//   const estadoListCombinedInput = Convert.toEstadoListCombinedInput(json);
//   const estadoListCombinedSuccessOutput = Convert.toEstadoListCombinedSuccessOutput(json);
//   const reservaFindByIDCombinedInput = Convert.toReservaFindByIDCombinedInput(json);
//   const reservaFindByIDCombinedSuccessOutput = Convert.toReservaFindByIDCombinedSuccessOutput(json);
//   const reservaCreateCombinedInput = Convert.toReservaCreateCombinedInput(json);
//   const reservaCreateCombinedSuccessOutput = Convert.toReservaCreateCombinedSuccessOutput(json);
//   const reservaUpdateByIDCombinedInput = Convert.toReservaUpdateByIDCombinedInput(json);
//   const reservaUpdateByIDCombinedSuccessOutput = Convert.toReservaUpdateByIDCombinedSuccessOutput(json);
//   const reservaDeleteByIDCombinedInput = Convert.toReservaDeleteByIDCombinedInput(json);
//   const reservaDeleteByIDCombinedSuccessOutput = Convert.toReservaDeleteByIDCombinedSuccessOutput(json);
//   const reservaListCombinedInput = Convert.toReservaListCombinedInput(json);
//   const reservaListCombinedSuccessOutput = Convert.toReservaListCombinedSuccessOutput(json);
//   const cursoFindByIDCombinedInput = Convert.toCursoFindByIDCombinedInput(json);
//   const cursoFindByIDCombinedSuccessOutput = Convert.toCursoFindByIDCombinedSuccessOutput(json);
//   const cursoCreateCombinedInput = Convert.toCursoCreateCombinedInput(json);
//   const cursoCreateCombinedSuccessOutput = Convert.toCursoCreateCombinedSuccessOutput(json);
//   const cursoUpdateByIDCombinedInput = Convert.toCursoUpdateByIDCombinedInput(json);
//   const cursoUpdateByIDCombinedSuccessOutput = Convert.toCursoUpdateByIDCombinedSuccessOutput(json);
//   const cursoDeleteByIDCombinedInput = Convert.toCursoDeleteByIDCombinedInput(json);
//   const cursoDeleteByIDCombinedSuccessOutput = Convert.toCursoDeleteByIDCombinedSuccessOutput(json);
//   const cursoListCombinedInput = Convert.toCursoListCombinedInput(json);
//   const cursoListCombinedSuccessOutput = Convert.toCursoListCombinedSuccessOutput(json);
//   const cursoGetCoverImageCombinedInput = Convert.toCursoGetCoverImageCombinedInput(json);
//   const cursoGetCoverImageCombinedSuccessOutput = Convert.toCursoGetCoverImageCombinedSuccessOutput(json);
//   const cursoSetCoverImageCombinedInput = Convert.toCursoSetCoverImageCombinedInput(json);
//   const cursoSetCoverImageCombinedSuccessOutput = Convert.toCursoSetCoverImageCombinedSuccessOutput(json);
//   const modalidadeFindByIDCombinedInput = Convert.toModalidadeFindByIDCombinedInput(json);
//   const modalidadeFindByIDCombinedSuccessOutput = Convert.toModalidadeFindByIDCombinedSuccessOutput(json);
//   const modalidadeCreateCombinedInput = Convert.toModalidadeCreateCombinedInput(json);
//   const modalidadeCreateCombinedSuccessOutput = Convert.toModalidadeCreateCombinedSuccessOutput(json);
//   const modalidadeUpdateByIDCombinedInput = Convert.toModalidadeUpdateByIDCombinedInput(json);
//   const modalidadeUpdateByIDCombinedSuccessOutput = Convert.toModalidadeUpdateByIDCombinedSuccessOutput(json);
//   const modalidadeDeleteByIDCombinedInput = Convert.toModalidadeDeleteByIDCombinedInput(json);
//   const modalidadeDeleteByIDCombinedSuccessOutput = Convert.toModalidadeDeleteByIDCombinedSuccessOutput(json);
//   const modalidadeListCombinedInput = Convert.toModalidadeListCombinedInput(json);
//   const modalidadeListCombinedSuccessOutput = Convert.toModalidadeListCombinedSuccessOutput(json);
//   const disciplinaFindByIDCombinedInput = Convert.toDisciplinaFindByIDCombinedInput(json);
//   const disciplinaFindByIDCombinedSuccessOutput = Convert.toDisciplinaFindByIDCombinedSuccessOutput(json);
//   const disciplinaCreateCombinedInput = Convert.toDisciplinaCreateCombinedInput(json);
//   const disciplinaCreateCombinedSuccessOutput = Convert.toDisciplinaCreateCombinedSuccessOutput(json);
//   const disciplinaUpdateByIDCombinedInput = Convert.toDisciplinaUpdateByIDCombinedInput(json);
//   const disciplinaUpdateByIDCombinedSuccessOutput = Convert.toDisciplinaUpdateByIDCombinedSuccessOutput(json);
//   const disciplinaDeleteByIDCombinedInput = Convert.toDisciplinaDeleteByIDCombinedInput(json);
//   const disciplinaDeleteByIDCombinedSuccessOutput = Convert.toDisciplinaDeleteByIDCombinedSuccessOutput(json);
//   const disciplinaListCombinedInput = Convert.toDisciplinaListCombinedInput(json);
//   const disciplinaListCombinedSuccessOutput = Convert.toDisciplinaListCombinedSuccessOutput(json);
//   const disciplinaGetCoverImageCombinedInput = Convert.toDisciplinaGetCoverImageCombinedInput(json);
//   const disciplinaGetCoverImageCombinedSuccessOutput = Convert.toDisciplinaGetCoverImageCombinedSuccessOutput(json);
//   const disciplinaSetCoverImageCombinedInput = Convert.toDisciplinaSetCoverImageCombinedInput(json);
//   const disciplinaSetCoverImageCombinedSuccessOutput = Convert.toDisciplinaSetCoverImageCombinedSuccessOutput(json);
//   const turmaFindByIDCombinedInput = Convert.toTurmaFindByIDCombinedInput(json);
//   const turmaFindByIDCombinedSuccessOutput = Convert.toTurmaFindByIDCombinedSuccessOutput(json);
//   const turmaCreateCombinedInput = Convert.toTurmaCreateCombinedInput(json);
//   const turmaCreateCombinedSuccessOutput = Convert.toTurmaCreateCombinedSuccessOutput(json);
//   const turmaUpdateByIDCombinedInput = Convert.toTurmaUpdateByIDCombinedInput(json);
//   const turmaUpdateByIDCombinedSuccessOutput = Convert.toTurmaUpdateByIDCombinedSuccessOutput(json);
//   const turmaDeleteByIDCombinedInput = Convert.toTurmaDeleteByIDCombinedInput(json);
//   const turmaDeleteByIDCombinedSuccessOutput = Convert.toTurmaDeleteByIDCombinedSuccessOutput(json);
//   const turmaListCombinedInput = Convert.toTurmaListCombinedInput(json);
//   const turmaListCombinedSuccessOutput = Convert.toTurmaListCombinedSuccessOutput(json);
//   const turmaGetCoverImageCombinedInput = Convert.toTurmaGetCoverImageCombinedInput(json);
//   const turmaGetCoverImageCombinedSuccessOutput = Convert.toTurmaGetCoverImageCombinedSuccessOutput(json);
//   const turmaSetCoverImageCombinedInput = Convert.toTurmaSetCoverImageCombinedInput(json);
//   const turmaSetCoverImageCombinedSuccessOutput = Convert.toTurmaSetCoverImageCombinedSuccessOutput(json);
//   const calendarioLetivoFindByIDCombinedInput = Convert.toCalendarioLetivoFindByIDCombinedInput(json);
//   const calendarioLetivoFindByIDCombinedSuccessOutput = Convert.toCalendarioLetivoFindByIDCombinedSuccessOutput(json);
//   const calendarioLetivoCreateCombinedInput = Convert.toCalendarioLetivoCreateCombinedInput(json);
//   const calendarioLetivoCreateCombinedSuccessOutput = Convert.toCalendarioLetivoCreateCombinedSuccessOutput(json);
//   const calendarioLetivoUpdateByIDCombinedInput = Convert.toCalendarioLetivoUpdateByIDCombinedInput(json);
//   const calendarioLetivoUpdateByIDCombinedSuccessOutput = Convert.toCalendarioLetivoUpdateByIDCombinedSuccessOutput(json);
//   const calendarioLetivoDeleteByIDCombinedInput = Convert.toCalendarioLetivoDeleteByIDCombinedInput(json);
//   const calendarioLetivoDeleteByIDCombinedSuccessOutput = Convert.toCalendarioLetivoDeleteByIDCombinedSuccessOutput(json);
//   const calendarioLetivoListCombinedInput = Convert.toCalendarioLetivoListCombinedInput(json);
//   const calendarioLetivoListCombinedSuccessOutput = Convert.toCalendarioLetivoListCombinedSuccessOutput(json);
//   const diarioFindByIDCombinedInput = Convert.toDiarioFindByIDCombinedInput(json);
//   const diarioFindByIDCombinedSuccessOutput = Convert.toDiarioFindByIDCombinedSuccessOutput(json);
//   const diarioCreateCombinedInput = Convert.toDiarioCreateCombinedInput(json);
//   const diarioCreateCombinedSuccessOutput = Convert.toDiarioCreateCombinedSuccessOutput(json);
//   const diarioUpdateByIDCombinedInput = Convert.toDiarioUpdateByIDCombinedInput(json);
//   const diarioUpdateByIDCombinedSuccessOutput = Convert.toDiarioUpdateByIDCombinedSuccessOutput(json);
//   const diarioDeleteByIDCombinedInput = Convert.toDiarioDeleteByIDCombinedInput(json);
//   const diarioDeleteByIDCombinedSuccessOutput = Convert.toDiarioDeleteByIDCombinedSuccessOutput(json);
//   const diarioListCombinedInput = Convert.toDiarioListCombinedInput(json);
//   const diarioListCombinedSuccessOutput = Convert.toDiarioListCombinedSuccessOutput(json);
//   const diarioGetCoverImageCombinedInput = Convert.toDiarioGetCoverImageCombinedInput(json);
//   const diarioGetCoverImageCombinedSuccessOutput = Convert.toDiarioGetCoverImageCombinedSuccessOutput(json);
//   const diarioSetCoverImageCombinedInput = Convert.toDiarioSetCoverImageCombinedInput(json);
//   const diarioSetCoverImageCombinedSuccessOutput = Convert.toDiarioSetCoverImageCombinedSuccessOutput(json);
//   const diarioProfessorFindByIDCombinedInput = Convert.toDiarioProfessorFindByIDCombinedInput(json);
//   const diarioProfessorFindByIDCombinedSuccessOutput = Convert.toDiarioProfessorFindByIDCombinedSuccessOutput(json);
//   const diarioProfessorCreateCombinedInput = Convert.toDiarioProfessorCreateCombinedInput(json);
//   const diarioProfessorCreateCombinedSuccessOutput = Convert.toDiarioProfessorCreateCombinedSuccessOutput(json);
//   const diarioProfessorUpdateByIDCombinedInput = Convert.toDiarioProfessorUpdateByIDCombinedInput(json);
//   const diarioProfessorUpdateByIDCombinedSuccessOutput = Convert.toDiarioProfessorUpdateByIDCombinedSuccessOutput(json);
//   const diarioProfessorDeleteByIDCombinedInput = Convert.toDiarioProfessorDeleteByIDCombinedInput(json);
//   const diarioProfessorDeleteByIDCombinedSuccessOutput = Convert.toDiarioProfessorDeleteByIDCombinedSuccessOutput(json);
//   const diarioProfessorListCombinedInput = Convert.toDiarioProfessorListCombinedInput(json);
//   const diarioProfessorListCombinedSuccessOutput = Convert.toDiarioProfessorListCombinedSuccessOutput(json);
//   const diaCalendarioFindByIDCombinedInput = Convert.toDiaCalendarioFindByIDCombinedInput(json);
//   const diaCalendarioFindByIDCombinedSuccessOutput = Convert.toDiaCalendarioFindByIDCombinedSuccessOutput(json);
//   const diaCalendarioCreateCombinedInput = Convert.toDiaCalendarioCreateCombinedInput(json);
//   const diaCalendarioCreateCombinedSuccessOutput = Convert.toDiaCalendarioCreateCombinedSuccessOutput(json);
//   const diaCalendarioUpdateByIDCombinedInput = Convert.toDiaCalendarioUpdateByIDCombinedInput(json);
//   const diaCalendarioUpdateByIDCombinedSuccessOutput = Convert.toDiaCalendarioUpdateByIDCombinedSuccessOutput(json);
//   const diaCalendarioDeleteByIDCombinedInput = Convert.toDiaCalendarioDeleteByIDCombinedInput(json);
//   const diaCalendarioDeleteByIDCombinedSuccessOutput = Convert.toDiaCalendarioDeleteByIDCombinedSuccessOutput(json);
//   const diaCalendarioListCombinedInput = Convert.toDiaCalendarioListCombinedInput(json);
//   const diaCalendarioListCombinedSuccessOutput = Convert.toDiaCalendarioListCombinedSuccessOutput(json);
//   const etapaFindByIDCombinedInput = Convert.toEtapaFindByIDCombinedInput(json);
//   const etapaFindByIDCombinedSuccessOutput = Convert.toEtapaFindByIDCombinedSuccessOutput(json);
//   const etapaCreateCombinedInput = Convert.toEtapaCreateCombinedInput(json);
//   const etapaCreateCombinedSuccessOutput = Convert.toEtapaCreateCombinedSuccessOutput(json);
//   const etapaUpdateByIDCombinedInput = Convert.toEtapaUpdateByIDCombinedInput(json);
//   const etapaUpdateByIDCombinedSuccessOutput = Convert.toEtapaUpdateByIDCombinedSuccessOutput(json);
//   const etapaDeleteByIDCombinedInput = Convert.toEtapaDeleteByIDCombinedInput(json);
//   const etapaDeleteByIDCombinedSuccessOutput = Convert.toEtapaDeleteByIDCombinedSuccessOutput(json);
//   const etapaListCombinedInput = Convert.toEtapaListCombinedInput(json);
//   const etapaListCombinedSuccessOutput = Convert.toEtapaListCombinedSuccessOutput(json);
//   const aulaFindByIDCombinedInput = Convert.toAulaFindByIDCombinedInput(json);
//   const aulaFindByIDCombinedSuccessOutput = Convert.toAulaFindByIDCombinedSuccessOutput(json);
//   const aulaCreateCombinedInput = Convert.toAulaCreateCombinedInput(json);
//   const aulaCreateCombinedSuccessOutput = Convert.toAulaCreateCombinedSuccessOutput(json);
//   const aulaUpdateByIDCombinedInput = Convert.toAulaUpdateByIDCombinedInput(json);
//   const aulaUpdateByIDCombinedSuccessOutput = Convert.toAulaUpdateByIDCombinedSuccessOutput(json);
//   const aulaDeleteByIDCombinedInput = Convert.toAulaDeleteByIDCombinedInput(json);
//   const aulaDeleteByIDCombinedSuccessOutput = Convert.toAulaDeleteByIDCombinedSuccessOutput(json);
//   const aulaListCombinedInput = Convert.toAulaListCombinedInput(json);
//   const aulaListCombinedSuccessOutput = Convert.toAulaListCombinedSuccessOutput(json);
//   const eventoFindByIDCombinedInput = Convert.toEventoFindByIDCombinedInput(json);
//   const eventoFindByIDCombinedSuccessOutput = Convert.toEventoFindByIDCombinedSuccessOutput(json);
//   const eventoCreateCombinedInput = Convert.toEventoCreateCombinedInput(json);
//   const eventoCreateCombinedSuccessOutput = Convert.toEventoCreateCombinedSuccessOutput(json);
//   const eventoUpdateByIDCombinedInput = Convert.toEventoUpdateByIDCombinedInput(json);
//   const eventoUpdateByIDCombinedSuccessOutput = Convert.toEventoUpdateByIDCombinedSuccessOutput(json);
//   const eventoDeleteByIDCombinedInput = Convert.toEventoDeleteByIDCombinedInput(json);
//   const eventoDeleteByIDCombinedSuccessOutput = Convert.toEventoDeleteByIDCombinedSuccessOutput(json);
//   const eventoListCombinedInput = Convert.toEventoListCombinedInput(json);
//   const eventoListCombinedSuccessOutput = Convert.toEventoListCombinedSuccessOutput(json);
//   const turmaDisponibilidadeFindByIDCombinedInput = Convert.toTurmaDisponibilidadeFindByIDCombinedInput(json);
//   const turmaDisponibilidadeFindByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeFindByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeCreateCombinedInput = Convert.toTurmaDisponibilidadeCreateCombinedInput(json);
//   const turmaDisponibilidadeCreateCombinedSuccessOutput = Convert.toTurmaDisponibilidadeCreateCombinedSuccessOutput(json);
//   const turmaDisponibilidadeUpdateByIDCombinedInput = Convert.toTurmaDisponibilidadeUpdateByIDCombinedInput(json);
//   const turmaDisponibilidadeUpdateByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeUpdateByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDeleteByIDCombinedInput = Convert.toTurmaDisponibilidadeDeleteByIDCombinedInput(json);
//   const turmaDisponibilidadeDeleteByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDeleteByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeListCombinedInput = Convert.toTurmaDisponibilidadeListCombinedInput(json);
//   const turmaDisponibilidadeListCombinedSuccessOutput = Convert.toTurmaDisponibilidadeListCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDiaFindByIDCombinedInput = Convert.toTurmaDisponibilidadeDiaFindByIDCombinedInput(json);
//   const turmaDisponibilidadeDiaFindByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDiaCreateCombinedInput = Convert.toTurmaDisponibilidadeDiaCreateCombinedInput(json);
//   const turmaDisponibilidadeDiaCreateCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDiaCreateCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDiaUpdateByIDCombinedInput = Convert.toTurmaDisponibilidadeDiaUpdateByIDCombinedInput(json);
//   const turmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDiaDeleteByIDCombinedInput = Convert.toTurmaDisponibilidadeDiaDeleteByIDCombinedInput(json);
//   const turmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput(json);
//   const turmaDisponibilidadeDiaListCombinedInput = Convert.toTurmaDisponibilidadeDiaListCombinedInput(json);
//   const turmaDisponibilidadeDiaListCombinedSuccessOutput = Convert.toTurmaDisponibilidadeDiaListCombinedSuccessOutput(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PaginatedBaseInput {
    limit?:  number | null;
    page?:   number | null;
    search?: null | string;
}

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
 * Dados de entrada combinados.
 */
export interface AuthLoginCombinedInput {
    body: AuthLoginInput;
}

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

/**
 * Dados de saída da operação.
 */
export interface AuthLoginCombinedSuccessOutput {
    body: AuthSessionCredentials;
}

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
 * Dados de entrada combinados.
 */
export interface AuthRefreshCombinedInput {
    body: AuthRefreshInput;
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
 * Dados de saída da operação.
 */
export interface AuthRefreshCombinedSuccessOutput {
    body: AuthSessionCredentials;
}

/**
 * Dados de entrada combinados.
 */
export interface AuthWhoAmICombinedInput {
}

/**
 * Dados de saída da operação.
 */
export interface AuthWhoAmICombinedSuccessOutput {
    body: AuthWhoAmIResult;
}

/**
 * Informações sobre o ator.
 */
export interface AuthWhoAmIResult {
    usuario: UsuarioFindOneResult | null;
    /**
     * Vínculos do usuário logado.
     */
    vinculosAtivos: VinculoFindOneResult[];
}

/**
 * Usuário autenticado.
 *
 * Visão FindOne de um Usuário.
 *
 * Usuário associado ao vínculo.
 *
 * Item da busca.
 *
 * Usuário que fez a reserva.
 *
 * Corpo de resposta da operação UsuarioFindById.
 *
 * Corpo de resposta da operação UsuarioCreate.
 *
 * Updated data
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
    id:           string;
    imagemCapa:   Imagem | null;
    imagemPerfil: Imagem | null;
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
}

/**
 * Visão completa de um Imagem.
 *
 * Imagem de capa
 *
 * Imagem de perfil
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
 * Visão FindOne de um Vínculo.
 *
 * Item da busca.
 *
 * Vínculo do usuário ao campus.
 *
 * Corpo de resposta da operação VinculoFindById.
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
 * Corpo de resposta da operação CidadeFindById.
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
 *
 * Corpo de resposta da operação EstadoFindById.
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
 * Dados de entrada combinados.
 */
export interface AuthSetInitialPasswordCombinedInput {
    body: AuthSetInitialPasswordInput;
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

/**
 * Dados de saída da operação.
 */
export interface AuthSetInitialPasswordCombinedSuccessOutput {
    /**
     * Resultado.
     */
    body: boolean;
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
    descricao:   null | string;
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
 * Ambiente padrão da sala de aula.
 *
 * Ambiente padrão.
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
    descricao:   null | string;
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
 * Visão completa de um Curso
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
 * Visão completa de uma Modalidade
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
 * Visão completa de uma Disciplina
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
 * Visão completa de uma Turma
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
    ano: number;
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
 * Visão completa de um Diario
 */
export interface Diario {
    ambientePadrao: AmbienteFindOneResult | null;
    /**
     * Situação do diário.
     */
    ativo: boolean;
    /**
     * Calendário Letivo vinculado ao diário.
     */
    calendarioLetivo: CalendarioLetivoFindOneResult;
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
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: ImagemFindOneResult | null;
    /**
     * Turma vinculada ao diário.
     */
    turma: TurmaFindOneResult;
}

/**
 * Visão FindOne de um CalendarioLetivo.
 *
 * Item da busca.
 *
 * Calendário Letivo vinculado ao diário.
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
    ano: number;
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
 * Visão FindOne de uma Disciplina.
 *
 * Item da busca.
 *
 * Disciplina vinculada ao diário.
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
 * Visão FindOne de uma Turma.
 *
 * Item da busca.
 *
 * Turma vinculada ao diário.
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
 * Visão completa de um DiarioProfessor
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
     * Calendário Letivo vinculado ao diário.
     */
    calendarioLetivo: CalendarioLetivoFindOneResult;
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
    /**
     * ID do Registro.
     */
    id:         string;
    imagemCapa: ImagemFindOneResult | null;
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
 * Visão completa de uma Aula
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
 * Visão completa de uma TurmaDisponibilidade
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
 * Visão completa de uma TurmaDisponibilidadeDia
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
 * Dados de entrada combinados.
 */
export interface ArquivoGetFileCombinedInput {
    queries: ArquivoGetFileCombinedInputQueries;
}

export interface ArquivoGetFileCombinedInputQueries {
    /**
     * Acesso via recurso: id
     */
    idRecurso: string;
    /**
     * Acesso via recurso: nome
     */
    nomeRecurso: string;
}

/**
 * Dados de saída da operação.
 */
export interface ArquivoGetFileCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioFindByIDCombinedInput {
    params: UsuarioFindByIDCombinedInputParams;
}

export interface UsuarioFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioFindById.
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'UsuarioCreate'.
     */
    body: UsuarioInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface UsuarioCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioCreate.
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   UsuarioInputUpdate;
    params: UsuarioUpdateByIDCombinedInputParams;
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

export interface UsuarioUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: UsuarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioDeleteByIDCombinedInput {
    params: UsuarioDeleteByIDCombinedInputParams;
}

export interface UsuarioDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioListCombinedInput {
    queries: UsuarioListCombinedInputQueries;
}

export interface UsuarioListCombinedInputQueries {
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioListCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação UsuarioList.
     */
    body: UsuarioFindAllResult;
}

/**
 * Resultados da busca a Usuários.
 *
 * Corpo de resposta da operação UsuarioList.
 */
export interface UsuarioFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: UsuarioFindOneResult[];
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
 * Dados de entrada combinados.
 */
export interface UsuarioGetCoverImageCombinedInput {
    params: UsuarioGetCoverImageCombinedInputParams;
}

export interface UsuarioGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: UsuarioSetCoverImageCombinedInputParams;
}

export interface UsuarioSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioGetProfileImageCombinedInput {
    params: UsuarioGetProfileImageCombinedInputParams;
}

export interface UsuarioGetProfileImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioGetProfileImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface UsuarioSetProfileImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: UsuarioSetProfileImageCombinedInputParams;
}

export interface UsuarioSetProfileImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface UsuarioSetProfileImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface VinculoFindByIDCombinedInput {
    params: VinculoFindByIDCombinedInputParams;
}

export interface VinculoFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface VinculoFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação VinculoFindById.
     */
    body: VinculoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface VinculoListCombinedInput {
    queries: VinculoListCombinedInputQueries;
}

export interface VinculoListCombinedInputQueries {
    /**
     * Filtros para 'ativo'.
     */
    "filter.ativo"?: string[];
    /**
     * Filtros para 'campus.id'.
     */
    "filter.campus.id"?: string[];
    /**
     * Filtros para 'usuario.id'.
     */
    "filter.usuario.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface VinculoListCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação VinculoList.
     */
    body: VinculoFindAllResult;
}

/**
 * Resultados da busca a Vínculos.
 *
 * Corpo de resposta da operação VinculoList.
 */
export interface VinculoFindAllResult {
    /**
     * Resultados da busca atual.
     */
    data: VinculoFindOneResult[];
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
 * Dados de entrada combinados.
 */
export interface VinculoUpdateCombinedInput {
    body: VinculoUpdateInput;
}

/**
 * Dados de entrada para a alteração de vínculo de um Usuário a um Campus.
 */
export interface VinculoUpdateInput {
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
 * Dados de saída da operação.
 */
export interface VinculoUpdateCombinedSuccessOutput {
    body: VinculoFindAllResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteFindByIDCombinedInput {
    params: AmbienteFindByIDCombinedInputParams;
}

export interface AmbienteFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação AmbienteFindById.
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'AmbienteCreate'.
     */
    body: AmbienteInputCreate;
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
    codigo:     string;
    descricao?: null | string;
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

/**
 * Dados de saída da operação.
 */
export interface AmbienteCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação AmbienteCreate.
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   AmbienteInputUpdate;
    params: AmbienteUpdateByIDCombinedInputParams;
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
    codigo?:    string;
    descricao?: null | string;
    /**
     * Nome do ambiente/sala.
     */
    nome?: string;
    tipo?: null | string;
}

export interface AmbienteUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: AmbienteFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteDeleteByIDCombinedInput {
    params: AmbienteDeleteByIDCombinedInputParams;
}

export interface AmbienteDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteListCombinedInput {
    queries: AmbienteListCombinedInputQueries;
}

export interface AmbienteListCombinedInputQueries {
    /**
     * Filtros para 'bloco.campus.id'.
     */
    "filter.bloco.campus.id"?: string[];
    /**
     * Filtros para 'bloco.id'.
     */
    "filter.bloco.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface AmbienteGetCoverImageCombinedInput {
    params: AmbienteGetCoverImageCombinedInputParams;
}

export interface AmbienteGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface AmbienteSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: AmbienteSetCoverImageCombinedInputParams;
}

export interface AmbienteSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AmbienteSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoFindByIDCombinedInput {
    params: BlocoFindByIDCombinedInputParams;
}

export interface BlocoFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface BlocoFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação BlocoFindById.
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'BlocoCreate'.
     */
    body: BlocoInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface BlocoCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação BlocoCreate.
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   BlocoInputUpdate;
    params: BlocoUpdateByIDCombinedInputParams;
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

export interface BlocoUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface BlocoUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: BlocoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoDeleteByIDCombinedInput {
    params: BlocoDeleteByIDCombinedInputParams;
}

export interface BlocoDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface BlocoDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoListCombinedInput {
    queries: BlocoListCombinedInputQueries;
}

export interface BlocoListCombinedInputQueries {
    /**
     * Filtros para 'campus.id'.
     */
    "filter.campus.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface BlocoListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface BlocoGetCoverImageCombinedInput {
    params: BlocoGetCoverImageCombinedInputParams;
}

export interface BlocoGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface BlocoGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface BlocoSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: BlocoSetCoverImageCombinedInputParams;
}

export interface BlocoSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface BlocoSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface CampusFindByIDCombinedInput {
    params: CampusFindByIDCombinedInputParams;
}

export interface CampusFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CampusFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CampusFindById.
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CampusCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'CampusCreate'.
     */
    body: CampusInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface CampusCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CampusCreate.
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CampusUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   CampusInputUpdate;
    params: CampusUpdateByIDCombinedInputParams;
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

export interface CampusUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CampusUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: CampusFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CampusDeleteByIDCombinedInput {
    params: CampusDeleteByIDCombinedInputParams;
}

export interface CampusDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CampusDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface CampusListCombinedInput {
    queries: CampusListCombinedInputQueries;
}

export interface CampusListCombinedInputQueries {
    /**
     * Filtros para 'endereco.cidade.estado.id'.
     */
    "filter.endereco.cidade.estado.id"?: string[];
    /**
     * Filtros para 'endereco.cidade.id'.
     */
    "filter.endereco.cidade.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface CampusListCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CampusList.
     */
    body: CampusFindAllResult;
}

/**
 * Resultados da busca a Campi.
 *
 * Corpo de resposta da operação CampusList.
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
 * Dados de entrada combinados.
 */
export interface CidadeFindByIDCombinedInput {
    params: CidadeFindByIDCombinedInputParams;
}

export interface CidadeFindByIDCombinedInputParams {
    id: number;
}

/**
 * Dados de saída da operação.
 */
export interface CidadeFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CidadeFindById.
     */
    body: CidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CidadeListCombinedInput {
    queries: CidadeListCombinedInputQueries;
}

export interface CidadeListCombinedInputQueries {
    /**
     * Filtros para 'estado.id'.
     */
    "filter.estado.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface CidadeListCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CidadeList.
     */
    body: CidadeFindAllResult;
}

/**
 * Resultados da busca a Cidades.
 *
 * Corpo de resposta da operação CidadeList.
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
 * Dados de entrada combinados.
 */
export interface EstadoFindByIDCombinedInput {
    params: EstadoFindByIDCombinedInputParams;
}

export interface EstadoFindByIDCombinedInputParams {
    id: number;
}

/**
 * Dados de saída da operação.
 */
export interface EstadoFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação EstadoFindById.
     */
    body: EstadoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface EstadoListCombinedInput {
    queries: EstadoListCombinedInputQueries;
}

export interface EstadoListCombinedInputQueries {
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface EstadoListCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação EstadoList.
     */
    body: EstadoFindAllResult;
}

/**
 * Resultados da busca a Estados.
 *
 * Corpo de resposta da operação EstadoList.
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
 * Dados de entrada combinados.
 */
export interface ReservaFindByIDCombinedInput {
    params: ReservaFindByIDCombinedInputParams;
}

export interface ReservaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ReservaFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface ReservaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'ReservaCreate'.
     */
    body: ReservaInputCreate;
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
 * Ambiente padrão da sala de aula.
 *
 * Ambiente padrão.
 *
 * Ambiente associado à aula.
 */
export interface AmbienteFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ReservaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação ReservaCreate.
     */
    body: ReservaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface ReservaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   ReservaInputUpdate;
    params: ReservaUpdateByIDCombinedInputParams;
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

export interface ReservaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ReservaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: ReservaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface ReservaDeleteByIDCombinedInput {
    params: ReservaDeleteByIDCombinedInputParams;
}

export interface ReservaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ReservaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface ReservaListCombinedInput {
    queries: ReservaListCombinedInputQueries;
}

export interface ReservaListCombinedInputQueries {
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface ReservaListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface CursoFindByIDCombinedInput {
    params: CursoFindByIDCombinedInputParams;
}

export interface CursoFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CursoFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CursoFindById.
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CursoCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'CursoCreate'.
     */
    body: CursoInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface CursoCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CursoCreate.
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CursoUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   CursoInputUpdate;
    params: CursoUpdateByIDCombinedInputParams;
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

export interface CursoUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CursoUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: CursoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CursoDeleteByIDCombinedInput {
    params: CursoDeleteByIDCombinedInputParams;
}

export interface CursoDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CursoDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface CursoListCombinedInput {
    queries: CursoListCombinedInputQueries;
}

export interface CursoListCombinedInputQueries {
    /**
     * Filtros para 'campus.id'.
     */
    "filter.campus.id"?: string[];
    /**
     * Filtros para 'modalidade.id'.
     */
    "filter.modalidade.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface CursoListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface CursoGetCoverImageCombinedInput {
    params: CursoGetCoverImageCombinedInputParams;
}

export interface CursoGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CursoGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface CursoSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: CursoSetCoverImageCombinedInputParams;
}

export interface CursoSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CursoSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface ModalidadeFindByIDCombinedInput {
    params: ModalidadeFindByIDCombinedInputParams;
}

export interface ModalidadeFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação ModalidadeFindById.
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface ModalidadeCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'ModalidadeCreate'.
     */
    body: ModalidadeInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface ModalidadeCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação ModalidadeCreate.
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface ModalidadeUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   ModalidadeInputUpdate;
    params: ModalidadeUpdateByIDCombinedInputParams;
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

export interface ModalidadeUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: ModalidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface ModalidadeDeleteByIDCombinedInput {
    params: ModalidadeDeleteByIDCombinedInputParams;
}

export interface ModalidadeDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface ModalidadeListCombinedInput {
    queries: ModalidadeListCombinedInputQueries;
}

export interface ModalidadeListCombinedInputQueries {
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface ModalidadeListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DisciplinaFindByIDCombinedInput {
    params: DisciplinaFindByIDCombinedInputParams;
}

export interface DisciplinaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DisciplinaFindById.
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DisciplinaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'DisciplinaCreate'.
     */
    body: DisciplinaInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface DisciplinaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DisciplinaCreate.
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DisciplinaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   DisciplinaInputUpdate;
    params: DisciplinaUpdateByIDCombinedInputParams;
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

export interface DisciplinaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: DisciplinaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DisciplinaDeleteByIDCombinedInput {
    params: DisciplinaDeleteByIDCombinedInputParams;
}

export interface DisciplinaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface DisciplinaListCombinedInput {
    queries: DisciplinaListCombinedInputQueries;
}

export interface DisciplinaListCombinedInputQueries {
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DisciplinaGetCoverImageCombinedInput {
    params: DisciplinaGetCoverImageCombinedInputParams;
}

export interface DisciplinaGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface DisciplinaSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: DisciplinaSetCoverImageCombinedInputParams;
}

export interface DisciplinaSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DisciplinaSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaFindByIDCombinedInput {
    params: TurmaFindByIDCombinedInputParams;
}

export interface TurmaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaFindById.
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaCreate'.
     */
    body: TurmaInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface TurmaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaCreate.
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   TurmaInputUpdate;
    params: TurmaUpdateByIDCombinedInputParams;
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

export interface TurmaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDeleteByIDCombinedInput {
    params: TurmaDeleteByIDCombinedInputParams;
}

export interface TurmaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaListCombinedInput {
    queries: TurmaListCombinedInputQueries;
}

export interface TurmaListCombinedInputQueries {
    /**
     * Filtros para 'ambientePadraoAula.capacidade'.
     */
    "filter.ambientePadraoAula.capacidade"?: string[];
    /**
     * Filtros para 'ambientePadraoAula.codigo'.
     */
    "filter.ambientePadraoAula.codigo"?: string[];
    /**
     * Filtros para 'ambientePadraoAula.nome'.
     */
    "filter.ambientePadraoAula.nome"?: string[];
    /**
     * Filtros para 'ambientePadraoAula.tipo'.
     */
    "filter.ambientePadraoAula.tipo"?: string[];
    /**
     * Filtros para 'curso.campus.id'.
     */
    "filter.curso.campus.id"?: string[];
    /**
     * Filtros para 'curso.modalidade.id'.
     */
    "filter.curso.modalidade.id"?: string[];
    /**
     * Filtros para 'curso.nome'.
     */
    "filter.curso.nome"?: string[];
    /**
     * Filtros para 'curso.nomeAbreviado'.
     */
    "filter.curso.nomeAbreviado"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface TurmaListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface TurmaGetCoverImageCombinedInput {
    params: TurmaGetCoverImageCombinedInputParams;
}

export interface TurmaGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: TurmaSetCoverImageCombinedInputParams;
}

export interface TurmaSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface CalendarioLetivoFindByIDCombinedInput {
    params: CalendarioLetivoFindByIDCombinedInputParams;
}

export interface CalendarioLetivoFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CalendarioLetivoFindById.
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CalendarioLetivoCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'CalendarioLetivoCreate'.
     */
    body: CalendarioLetivoInputCreate;
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
    ano: number;
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

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação CalendarioLetivoCreate.
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CalendarioLetivoUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   CalendarioLetivoInputUpdate;
    params: CalendarioLetivoUpdateByIDCombinedInputParams;
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
    ano?: number;
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

export interface CalendarioLetivoUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: CalendarioLetivoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface CalendarioLetivoDeleteByIDCombinedInput {
    params: CalendarioLetivoDeleteByIDCombinedInputParams;
}

export interface CalendarioLetivoDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface CalendarioLetivoListCombinedInput {
    queries: CalendarioLetivoListCombinedInputQueries;
}

export interface CalendarioLetivoListCombinedInputQueries {
    /**
     * Filtros para 'campus.id'.
     */
    "filter.campus.id"?: string[];
    /**
     * Filtros para 'modalidade.id'.
     */
    "filter.modalidade.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface CalendarioLetivoListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DiarioFindByIDCombinedInput {
    params: DiarioFindByIDCombinedInputParams;
}

export interface DiarioFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioFindById.
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'DiarioCreate'.
     */
    body: DiarioInputCreate;
}

/**
 * Dados de entrada para a criação de um Diario.
 *
 * Corpo de entrada da operação 'DiarioCreate'.
 */
export interface DiarioInputCreate {
    ambientePadrao: AmbienteFindOneInput | null;
    /**
     * Situação do diário.
     */
    ativo?: boolean;
    /**
     * Calendário Letivo vinculado ao diário.
     */
    calendarioLetivo: CalendarioLetivoFindOneInput;
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
 * Dados de entrada para encontrar um CalendarioLetivo por ID.
 *
 * Calendário Letivo vinculado ao diário.
 *
 * Calendario.
 */
export interface CalendarioLetivoFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de entrada para encontrar uma Disciplina por ID.
 *
 * Disciplina vinculada ao diário.
 */
export interface DisciplinaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de entrada para encontrar uma Turma por ID.
 *
 * Turma vinculada ao diário.
 *
 * Turma.
 */
export interface TurmaFindOneInput {
    /**
     * ID do Registro.
     */
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioCreate.
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   DiarioInputUpdate;
    params: DiarioUpdateByIDCombinedInputParams;
}

/**
 * Dados de entrada para a atualização de um Diario.
 *
 * Data to update
 */
export interface DiarioInputUpdate {
    ambientePadrao?: AmbienteFindOneInput | null;
    /**
     * Situação do diário.
     */
    ativo?: boolean;
    /**
     * Calendário Letivo vinculado ao diário.
     */
    calendarioLetivo?: CalendarioLetivoFindOneInput;
    /**
     * Disciplina vinculada ao diário.
     */
    disciplina?: DisciplinaFindOneInput;
    /**
     * Turma vinculada ao diário.
     */
    turma?: TurmaFindOneInput;
}

export interface DiarioUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: DiarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioDeleteByIDCombinedInput {
    params: DiarioDeleteByIDCombinedInputParams;
}

export interface DiarioDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioListCombinedInput {
    queries: DiarioListCombinedInputQueries;
}

export interface DiarioListCombinedInputQueries {
    /**
     * Filtros para 'ambientePadrao.id'.
     */
    "filter.ambientePadrao.id"?: string[];
    /**
     * Filtros para 'calendarioLetivo.id'.
     */
    "filter.calendarioLetivo.id"?: string[];
    /**
     * Filtros para 'disciplina.id'.
     */
    "filter.disciplina.id"?: string[];
    /**
     * Filtros para 'turma.id'.
     */
    "filter.turma.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface DiarioListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DiarioGetCoverImageCombinedInput {
    params: DiarioGetCoverImageCombinedInputParams;
}

export interface DiarioGetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioGetCoverImageCombinedSuccessOutput {
    /**
     * Binário.
     */
    body: string;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioSetCoverImageCombinedInput {
    /**
     * Binário da imagem.
     */
    body:   string;
    params: DiarioSetCoverImageCombinedInputParams;
}

export interface DiarioSetCoverImageCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioSetCoverImageCombinedSuccessOutput {
    /**
     * Resultado da operação.
     */
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioProfessorFindByIDCombinedInput {
    params: DiarioProfessorFindByIDCombinedInputParams;
}

export interface DiarioProfessorFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DiarioProfessorCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'DiarioProfessorCreate'.
     */
    body: DiarioProfessorInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DiarioProfessorCreate.
     */
    body: DiarioProfessorFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioProfessorUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   DiarioProfessorInputUpdate;
    params: DiarioProfessorUpdateByIDCombinedInputParams;
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

export interface DiarioProfessorUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: DiarioProfessorFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioProfessorDeleteByIDCombinedInput {
    params: DiarioProfessorDeleteByIDCombinedInputParams;
}

export interface DiarioProfessorDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface DiarioProfessorListCombinedInput {
    queries: DiarioProfessorListCombinedInputQueries;
}

export interface DiarioProfessorListCombinedInputQueries {
    /**
     * Filtros para 'diario.id'.
     */
    "filter.diario.id"?: string[];
    /**
     * Filtros para 'vinculo.id'.
     */
    "filter.vinculo.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface DiarioProfessorListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DiaCalendarioFindByIDCombinedInput {
    params: DiaCalendarioFindByIDCombinedInputParams;
}

export interface DiaCalendarioFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface DiaCalendarioCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'DiaCalendarioCreate'.
     */
    body: DiaCalendarioInputCreate;
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
 * Dados de saída da operação.
 */
export interface DiaCalendarioCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação DiaCalendarioCreate.
     */
    body: DiaCalendarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiaCalendarioUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   DiaCalendarioInputUpdate;
    params: DiaCalendarioUpdateByIDCombinedInputParams;
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

export interface DiaCalendarioUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: DiaCalendarioFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface DiaCalendarioDeleteByIDCombinedInput {
    params: DiaCalendarioDeleteByIDCombinedInputParams;
}

export interface DiaCalendarioDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface DiaCalendarioListCombinedInput {
    queries: DiaCalendarioListCombinedInputQueries;
}

export interface DiaCalendarioListCombinedInputQueries {
    /**
     * Filtros para 'calendario.id'.
     */
    "filter.calendario.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface DiaCalendarioListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface EtapaFindByIDCombinedInput {
    params: EtapaFindByIDCombinedInputParams;
}

export interface EtapaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EtapaFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface EtapaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'EtapaCreate'.
     */
    body: EtapaInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface EtapaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação EtapaCreate.
     */
    body: EtapaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface EtapaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   EtapaInputUpdate;
    params: EtapaUpdateByIDCombinedInputParams;
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

export interface EtapaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EtapaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: EtapaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface EtapaDeleteByIDCombinedInput {
    params: EtapaDeleteByIDCombinedInputParams;
}

export interface EtapaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EtapaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface EtapaListCombinedInput {
    queries: EtapaListCombinedInputQueries;
}

export interface EtapaListCombinedInputQueries {
    /**
     * Filtros para 'calendario.id'.
     */
    "filter.calendario.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface EtapaListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface AulaFindByIDCombinedInput {
    params: AulaFindByIDCombinedInputParams;
}

export interface AulaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AulaFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface AulaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'AulaCreate'.
     */
    body: AulaInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface AulaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação AulaCreate.
     */
    body: AulaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AulaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   AulaInputUpdate;
    params: AulaUpdateByIDCombinedInputParams;
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

export interface AulaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AulaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: AulaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface AulaDeleteByIDCombinedInput {
    params: AulaDeleteByIDCombinedInputParams;
}

export interface AulaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface AulaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface AulaListCombinedInput {
    queries: AulaListCombinedInputQueries;
}

export interface AulaListCombinedInputQueries {
    /**
     * Filtros para 'ambiente.id'.
     */
    "filter.ambiente.id"?: string[];
    /**
     * Filtros para 'diario.id'.
     */
    "filter.diario.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface AulaListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface EventoFindByIDCombinedInput {
    params: EventoFindByIDCombinedInputParams;
}

export interface EventoFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EventoFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface EventoCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'EventoCreate'.
     */
    body: EventoInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface EventoCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação EventoCreate.
     */
    body: EventoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface EventoUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   EventoInputUpdate;
    params: EventoUpdateByIDCombinedInputParams;
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

export interface EventoUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EventoUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: EventoFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface EventoDeleteByIDCombinedInput {
    params: EventoDeleteByIDCombinedInputParams;
}

export interface EventoDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface EventoDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface EventoListCombinedInput {
    queries: EventoListCombinedInputQueries;
}

export interface EventoListCombinedInputQueries {
    /**
     * Filtros para 'calendario.id'.
     */
    "filter.calendario.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface EventoListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeFindByIDCombinedInput {
    params: TurmaDisponibilidadeFindByIDCombinedInputParams;
}

export interface TurmaDisponibilidadeFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeFindByIDCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeFindById.
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaDisponibilidadeCreate'.
     */
    body: TurmaDisponibilidadeInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeCreate.
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   TurmaDisponibilidadeInputUpdate;
    params: TurmaDisponibilidadeUpdateByIDCombinedInputParams;
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

export interface TurmaDisponibilidadeUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaDisponibilidadeFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDeleteByIDCombinedInput {
    params: TurmaDisponibilidadeDeleteByIDCombinedInputParams;
}

export interface TurmaDisponibilidadeDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeListCombinedInput {
    queries: TurmaDisponibilidadeListCombinedInputQueries;
}

export interface TurmaDisponibilidadeListCombinedInputQueries {
    /**
     * Filtros para 'turma.id'.
     */
    "filter.turma.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeListCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDiaFindByIDCombinedInput {
    params: TurmaDisponibilidadeDiaFindByIDCombinedInputParams;
}

export interface TurmaDisponibilidadeDiaFindByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput {
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
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDiaCreateCombinedInput {
    /**
     * Corpo de entrada da operação 'TurmaDisponibilidadeDiaCreate'.
     */
    body: TurmaDisponibilidadeDiaInputCreate;
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

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaCreateCombinedSuccessOutput {
    /**
     * Corpo de resposta da operação TurmaDisponibilidadeDiaCreate.
     */
    body: TurmaDisponibilidadeDiaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDiaUpdateByIDCombinedInput {
    /**
     * Data to update
     */
    body:   TurmaDisponibilidadeDiaInputUpdate;
    params: TurmaDisponibilidadeDiaUpdateByIDCombinedInputParams;
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

export interface TurmaDisponibilidadeDiaUpdateByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput {
    /**
     * Updated data
     */
    body: TurmaDisponibilidadeDiaFindOneResult;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDiaDeleteByIDCombinedInput {
    params: TurmaDisponibilidadeDiaDeleteByIDCombinedInputParams;
}

export interface TurmaDisponibilidadeDiaDeleteByIDCombinedInputParams {
    id: string;
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput {
    body: boolean;
}

/**
 * Dados de entrada combinados.
 */
export interface TurmaDisponibilidadeDiaListCombinedInput {
    queries: TurmaDisponibilidadeDiaListCombinedInputQueries;
}

export interface TurmaDisponibilidadeDiaListCombinedInputQueries {
    /**
     * Filtros para 'intervaloDeTempo.id'.
     */
    "filter.intervaloDeTempo.id"?: string[];
    /**
     * Filtros para 'turmaDisponibilidade.id'.
     */
    "filter.turmaDisponibilidade.id"?: string[];
    /**
     * Limite de resultados por página.
     */
    limit?: number;
    /**
     * Página da listagem.
     */
    page?: number;
    /**
     * Busca textual.
     */
    search?: string;
    /**
     * Configurações de ordenamento.
     */
    sortBy?: string[];
}

/**
 * Dados de saída da operação.
 */
export interface TurmaDisponibilidadeDiaListCombinedSuccessOutput {
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

    public static toAuthLoginCombinedInput(json: string): AuthLoginCombinedInput {
        return cast(JSON.parse(json), r("AuthLoginCombinedInput"));
    }

    public static authLoginCombinedInputToJson(value: AuthLoginCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthLoginCombinedInput")), null, 2);
    }

    public static toAuthLoginCombinedSuccessOutput(json: string): AuthLoginCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AuthLoginCombinedSuccessOutput"));
    }

    public static authLoginCombinedSuccessOutputToJson(value: AuthLoginCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthLoginCombinedSuccessOutput")), null, 2);
    }

    public static toAuthRefreshInput(json: string): AuthRefreshInput {
        return cast(JSON.parse(json), r("AuthRefreshInput"));
    }

    public static authRefreshInputToJson(value: AuthRefreshInput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshInput")), null, 2);
    }

    public static toAuthRefreshCombinedInput(json: string): AuthRefreshCombinedInput {
        return cast(JSON.parse(json), r("AuthRefreshCombinedInput"));
    }

    public static authRefreshCombinedInputToJson(value: AuthRefreshCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshCombinedInput")), null, 2);
    }

    public static toAuthRefreshCombinedSuccessOutput(json: string): AuthRefreshCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AuthRefreshCombinedSuccessOutput"));
    }

    public static authRefreshCombinedSuccessOutputToJson(value: AuthRefreshCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthRefreshCombinedSuccessOutput")), null, 2);
    }

    public static toAuthWhoAmIResult(json: string): AuthWhoAmIResult {
        return cast(JSON.parse(json), r("AuthWhoAmIResult"));
    }

    public static authWhoAmIResultToJson(value: AuthWhoAmIResult): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmIResult")), null, 2);
    }

    public static toAuthWhoAmICombinedInput(json: string): AuthWhoAmICombinedInput {
        return cast(JSON.parse(json), r("AuthWhoAmICombinedInput"));
    }

    public static authWhoAmICombinedInputToJson(value: AuthWhoAmICombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmICombinedInput")), null, 2);
    }

    public static toAuthWhoAmICombinedSuccessOutput(json: string): AuthWhoAmICombinedSuccessOutput {
        return cast(JSON.parse(json), r("AuthWhoAmICombinedSuccessOutput"));
    }

    public static authWhoAmICombinedSuccessOutputToJson(value: AuthWhoAmICombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthWhoAmICombinedSuccessOutput")), null, 2);
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

    public static toAuthSetInitialPasswordCombinedInput(json: string): AuthSetInitialPasswordCombinedInput {
        return cast(JSON.parse(json), r("AuthSetInitialPasswordCombinedInput"));
    }

    public static authSetInitialPasswordCombinedInputToJson(value: AuthSetInitialPasswordCombinedInput): string {
        return JSON.stringify(uncast(value, r("AuthSetInitialPasswordCombinedInput")), null, 2);
    }

    public static toAuthSetInitialPasswordCombinedSuccessOutput(json: string): AuthSetInitialPasswordCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AuthSetInitialPasswordCombinedSuccessOutput"));
    }

    public static authSetInitialPasswordCombinedSuccessOutputToJson(value: AuthSetInitialPasswordCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AuthSetInitialPasswordCombinedSuccessOutput")), null, 2);
    }

    public static toUsuario(json: string): Usuario {
        return cast(JSON.parse(json), r("Usuario"));
    }

    public static usuarioToJson(value: Usuario): string {
        return JSON.stringify(uncast(value, r("Usuario")), null, 2);
    }

    public static toUsuarioFindAllResult(json: string): UsuarioFindAllResult {
        return cast(JSON.parse(json), r("UsuarioFindAllResult"));
    }

    public static usuarioFindAllResultToJson(value: UsuarioFindAllResult): string {
        return JSON.stringify(uncast(value, r("UsuarioFindAllResult")), null, 2);
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

    public static toVinculoFindAllResult(json: string): VinculoFindAllResult {
        return cast(JSON.parse(json), r("VinculoFindAllResult"));
    }

    public static vinculoFindAllResultToJson(value: VinculoFindAllResult): string {
        return JSON.stringify(uncast(value, r("VinculoFindAllResult")), null, 2);
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

    public static toVinculoUpdateInput(json: string): VinculoUpdateInput {
        return cast(JSON.parse(json), r("VinculoUpdateInput"));
    }

    public static vinculoUpdateInputToJson(value: VinculoUpdateInput): string {
        return JSON.stringify(uncast(value, r("VinculoUpdateInput")), null, 2);
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

    public static toArquivoGetFileCombinedInput(json: string): ArquivoGetFileCombinedInput {
        return cast(JSON.parse(json), r("ArquivoGetFileCombinedInput"));
    }

    public static arquivoGetFileCombinedInputToJson(value: ArquivoGetFileCombinedInput): string {
        return JSON.stringify(uncast(value, r("ArquivoGetFileCombinedInput")), null, 2);
    }

    public static toArquivoGetFileCombinedSuccessOutput(json: string): ArquivoGetFileCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ArquivoGetFileCombinedSuccessOutput"));
    }

    public static arquivoGetFileCombinedSuccessOutputToJson(value: ArquivoGetFileCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ArquivoGetFileCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioFindByIDCombinedInput(json: string): UsuarioFindByIDCombinedInput {
        return cast(JSON.parse(json), r("UsuarioFindByIDCombinedInput"));
    }

    public static usuarioFindByIDCombinedInputToJson(value: UsuarioFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioFindByIDCombinedInput")), null, 2);
    }

    public static toUsuarioFindByIDCombinedSuccessOutput(json: string): UsuarioFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioFindByIDCombinedSuccessOutput"));
    }

    public static usuarioFindByIDCombinedSuccessOutputToJson(value: UsuarioFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioCreateCombinedInput(json: string): UsuarioCreateCombinedInput {
        return cast(JSON.parse(json), r("UsuarioCreateCombinedInput"));
    }

    public static usuarioCreateCombinedInputToJson(value: UsuarioCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioCreateCombinedInput")), null, 2);
    }

    public static toUsuarioCreateCombinedSuccessOutput(json: string): UsuarioCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioCreateCombinedSuccessOutput"));
    }

    public static usuarioCreateCombinedSuccessOutputToJson(value: UsuarioCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioCreateCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioUpdateByIDCombinedInput(json: string): UsuarioUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("UsuarioUpdateByIDCombinedInput"));
    }

    public static usuarioUpdateByIDCombinedInputToJson(value: UsuarioUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioUpdateByIDCombinedInput")), null, 2);
    }

    public static toUsuarioUpdateByIDCombinedSuccessOutput(json: string): UsuarioUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioUpdateByIDCombinedSuccessOutput"));
    }

    public static usuarioUpdateByIDCombinedSuccessOutputToJson(value: UsuarioUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioDeleteByIDCombinedInput(json: string): UsuarioDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("UsuarioDeleteByIDCombinedInput"));
    }

    public static usuarioDeleteByIDCombinedInputToJson(value: UsuarioDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioDeleteByIDCombinedInput")), null, 2);
    }

    public static toUsuarioDeleteByIDCombinedSuccessOutput(json: string): UsuarioDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioDeleteByIDCombinedSuccessOutput"));
    }

    public static usuarioDeleteByIDCombinedSuccessOutputToJson(value: UsuarioDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioListCombinedInput(json: string): UsuarioListCombinedInput {
        return cast(JSON.parse(json), r("UsuarioListCombinedInput"));
    }

    public static usuarioListCombinedInputToJson(value: UsuarioListCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioListCombinedInput")), null, 2);
    }

    public static toUsuarioListCombinedSuccessOutput(json: string): UsuarioListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioListCombinedSuccessOutput"));
    }

    public static usuarioListCombinedSuccessOutputToJson(value: UsuarioListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioListCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioGetCoverImageCombinedInput(json: string): UsuarioGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("UsuarioGetCoverImageCombinedInput"));
    }

    public static usuarioGetCoverImageCombinedInputToJson(value: UsuarioGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioGetCoverImageCombinedInput")), null, 2);
    }

    public static toUsuarioGetCoverImageCombinedSuccessOutput(json: string): UsuarioGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioGetCoverImageCombinedSuccessOutput"));
    }

    public static usuarioGetCoverImageCombinedSuccessOutputToJson(value: UsuarioGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioSetCoverImageCombinedInput(json: string): UsuarioSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("UsuarioSetCoverImageCombinedInput"));
    }

    public static usuarioSetCoverImageCombinedInputToJson(value: UsuarioSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioSetCoverImageCombinedInput")), null, 2);
    }

    public static toUsuarioSetCoverImageCombinedSuccessOutput(json: string): UsuarioSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioSetCoverImageCombinedSuccessOutput"));
    }

    public static usuarioSetCoverImageCombinedSuccessOutputToJson(value: UsuarioSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioGetProfileImageCombinedInput(json: string): UsuarioGetProfileImageCombinedInput {
        return cast(JSON.parse(json), r("UsuarioGetProfileImageCombinedInput"));
    }

    public static usuarioGetProfileImageCombinedInputToJson(value: UsuarioGetProfileImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioGetProfileImageCombinedInput")), null, 2);
    }

    public static toUsuarioGetProfileImageCombinedSuccessOutput(json: string): UsuarioGetProfileImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioGetProfileImageCombinedSuccessOutput"));
    }

    public static usuarioGetProfileImageCombinedSuccessOutputToJson(value: UsuarioGetProfileImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioGetProfileImageCombinedSuccessOutput")), null, 2);
    }

    public static toUsuarioSetProfileImageCombinedInput(json: string): UsuarioSetProfileImageCombinedInput {
        return cast(JSON.parse(json), r("UsuarioSetProfileImageCombinedInput"));
    }

    public static usuarioSetProfileImageCombinedInputToJson(value: UsuarioSetProfileImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("UsuarioSetProfileImageCombinedInput")), null, 2);
    }

    public static toUsuarioSetProfileImageCombinedSuccessOutput(json: string): UsuarioSetProfileImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("UsuarioSetProfileImageCombinedSuccessOutput"));
    }

    public static usuarioSetProfileImageCombinedSuccessOutputToJson(value: UsuarioSetProfileImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("UsuarioSetProfileImageCombinedSuccessOutput")), null, 2);
    }

    public static toVinculoFindByIDCombinedInput(json: string): VinculoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("VinculoFindByIDCombinedInput"));
    }

    public static vinculoFindByIDCombinedInputToJson(value: VinculoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("VinculoFindByIDCombinedInput")), null, 2);
    }

    public static toVinculoFindByIDCombinedSuccessOutput(json: string): VinculoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("VinculoFindByIDCombinedSuccessOutput"));
    }

    public static vinculoFindByIDCombinedSuccessOutputToJson(value: VinculoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("VinculoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toVinculoListCombinedInput(json: string): VinculoListCombinedInput {
        return cast(JSON.parse(json), r("VinculoListCombinedInput"));
    }

    public static vinculoListCombinedInputToJson(value: VinculoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("VinculoListCombinedInput")), null, 2);
    }

    public static toVinculoListCombinedSuccessOutput(json: string): VinculoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("VinculoListCombinedSuccessOutput"));
    }

    public static vinculoListCombinedSuccessOutputToJson(value: VinculoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("VinculoListCombinedSuccessOutput")), null, 2);
    }

    public static toVinculoUpdateCombinedInput(json: string): VinculoUpdateCombinedInput {
        return cast(JSON.parse(json), r("VinculoUpdateCombinedInput"));
    }

    public static vinculoUpdateCombinedInputToJson(value: VinculoUpdateCombinedInput): string {
        return JSON.stringify(uncast(value, r("VinculoUpdateCombinedInput")), null, 2);
    }

    public static toVinculoUpdateCombinedSuccessOutput(json: string): VinculoUpdateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("VinculoUpdateCombinedSuccessOutput"));
    }

    public static vinculoUpdateCombinedSuccessOutputToJson(value: VinculoUpdateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("VinculoUpdateCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteFindByIDCombinedInput(json: string): AmbienteFindByIDCombinedInput {
        return cast(JSON.parse(json), r("AmbienteFindByIDCombinedInput"));
    }

    public static ambienteFindByIDCombinedInputToJson(value: AmbienteFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteFindByIDCombinedInput")), null, 2);
    }

    public static toAmbienteFindByIDCombinedSuccessOutput(json: string): AmbienteFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteFindByIDCombinedSuccessOutput"));
    }

    public static ambienteFindByIDCombinedSuccessOutputToJson(value: AmbienteFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteCreateCombinedInput(json: string): AmbienteCreateCombinedInput {
        return cast(JSON.parse(json), r("AmbienteCreateCombinedInput"));
    }

    public static ambienteCreateCombinedInputToJson(value: AmbienteCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteCreateCombinedInput")), null, 2);
    }

    public static toAmbienteCreateCombinedSuccessOutput(json: string): AmbienteCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteCreateCombinedSuccessOutput"));
    }

    public static ambienteCreateCombinedSuccessOutputToJson(value: AmbienteCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteCreateCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteUpdateByIDCombinedInput(json: string): AmbienteUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("AmbienteUpdateByIDCombinedInput"));
    }

    public static ambienteUpdateByIDCombinedInputToJson(value: AmbienteUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteUpdateByIDCombinedInput")), null, 2);
    }

    public static toAmbienteUpdateByIDCombinedSuccessOutput(json: string): AmbienteUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteUpdateByIDCombinedSuccessOutput"));
    }

    public static ambienteUpdateByIDCombinedSuccessOutputToJson(value: AmbienteUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteDeleteByIDCombinedInput(json: string): AmbienteDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("AmbienteDeleteByIDCombinedInput"));
    }

    public static ambienteDeleteByIDCombinedInputToJson(value: AmbienteDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteDeleteByIDCombinedInput")), null, 2);
    }

    public static toAmbienteDeleteByIDCombinedSuccessOutput(json: string): AmbienteDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteDeleteByIDCombinedSuccessOutput"));
    }

    public static ambienteDeleteByIDCombinedSuccessOutputToJson(value: AmbienteDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteListCombinedInput(json: string): AmbienteListCombinedInput {
        return cast(JSON.parse(json), r("AmbienteListCombinedInput"));
    }

    public static ambienteListCombinedInputToJson(value: AmbienteListCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteListCombinedInput")), null, 2);
    }

    public static toAmbienteListCombinedSuccessOutput(json: string): AmbienteListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteListCombinedSuccessOutput"));
    }

    public static ambienteListCombinedSuccessOutputToJson(value: AmbienteListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteListCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteGetCoverImageCombinedInput(json: string): AmbienteGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("AmbienteGetCoverImageCombinedInput"));
    }

    public static ambienteGetCoverImageCombinedInputToJson(value: AmbienteGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteGetCoverImageCombinedInput")), null, 2);
    }

    public static toAmbienteGetCoverImageCombinedSuccessOutput(json: string): AmbienteGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteGetCoverImageCombinedSuccessOutput"));
    }

    public static ambienteGetCoverImageCombinedSuccessOutputToJson(value: AmbienteGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toAmbienteSetCoverImageCombinedInput(json: string): AmbienteSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("AmbienteSetCoverImageCombinedInput"));
    }

    public static ambienteSetCoverImageCombinedInputToJson(value: AmbienteSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("AmbienteSetCoverImageCombinedInput")), null, 2);
    }

    public static toAmbienteSetCoverImageCombinedSuccessOutput(json: string): AmbienteSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AmbienteSetCoverImageCombinedSuccessOutput"));
    }

    public static ambienteSetCoverImageCombinedSuccessOutputToJson(value: AmbienteSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AmbienteSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoFindByIDCombinedInput(json: string): BlocoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("BlocoFindByIDCombinedInput"));
    }

    public static blocoFindByIDCombinedInputToJson(value: BlocoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoFindByIDCombinedInput")), null, 2);
    }

    public static toBlocoFindByIDCombinedSuccessOutput(json: string): BlocoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoFindByIDCombinedSuccessOutput"));
    }

    public static blocoFindByIDCombinedSuccessOutputToJson(value: BlocoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoCreateCombinedInput(json: string): BlocoCreateCombinedInput {
        return cast(JSON.parse(json), r("BlocoCreateCombinedInput"));
    }

    public static blocoCreateCombinedInputToJson(value: BlocoCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoCreateCombinedInput")), null, 2);
    }

    public static toBlocoCreateCombinedSuccessOutput(json: string): BlocoCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoCreateCombinedSuccessOutput"));
    }

    public static blocoCreateCombinedSuccessOutputToJson(value: BlocoCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoCreateCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoUpdateByIDCombinedInput(json: string): BlocoUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("BlocoUpdateByIDCombinedInput"));
    }

    public static blocoUpdateByIDCombinedInputToJson(value: BlocoUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoUpdateByIDCombinedInput")), null, 2);
    }

    public static toBlocoUpdateByIDCombinedSuccessOutput(json: string): BlocoUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoUpdateByIDCombinedSuccessOutput"));
    }

    public static blocoUpdateByIDCombinedSuccessOutputToJson(value: BlocoUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoDeleteByIDCombinedInput(json: string): BlocoDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("BlocoDeleteByIDCombinedInput"));
    }

    public static blocoDeleteByIDCombinedInputToJson(value: BlocoDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoDeleteByIDCombinedInput")), null, 2);
    }

    public static toBlocoDeleteByIDCombinedSuccessOutput(json: string): BlocoDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoDeleteByIDCombinedSuccessOutput"));
    }

    public static blocoDeleteByIDCombinedSuccessOutputToJson(value: BlocoDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoListCombinedInput(json: string): BlocoListCombinedInput {
        return cast(JSON.parse(json), r("BlocoListCombinedInput"));
    }

    public static blocoListCombinedInputToJson(value: BlocoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoListCombinedInput")), null, 2);
    }

    public static toBlocoListCombinedSuccessOutput(json: string): BlocoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoListCombinedSuccessOutput"));
    }

    public static blocoListCombinedSuccessOutputToJson(value: BlocoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoListCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoGetCoverImageCombinedInput(json: string): BlocoGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("BlocoGetCoverImageCombinedInput"));
    }

    public static blocoGetCoverImageCombinedInputToJson(value: BlocoGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoGetCoverImageCombinedInput")), null, 2);
    }

    public static toBlocoGetCoverImageCombinedSuccessOutput(json: string): BlocoGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoGetCoverImageCombinedSuccessOutput"));
    }

    public static blocoGetCoverImageCombinedSuccessOutputToJson(value: BlocoGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toBlocoSetCoverImageCombinedInput(json: string): BlocoSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("BlocoSetCoverImageCombinedInput"));
    }

    public static blocoSetCoverImageCombinedInputToJson(value: BlocoSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("BlocoSetCoverImageCombinedInput")), null, 2);
    }

    public static toBlocoSetCoverImageCombinedSuccessOutput(json: string): BlocoSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("BlocoSetCoverImageCombinedSuccessOutput"));
    }

    public static blocoSetCoverImageCombinedSuccessOutputToJson(value: BlocoSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("BlocoSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toCampusFindByIDCombinedInput(json: string): CampusFindByIDCombinedInput {
        return cast(JSON.parse(json), r("CampusFindByIDCombinedInput"));
    }

    public static campusFindByIDCombinedInputToJson(value: CampusFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusFindByIDCombinedInput")), null, 2);
    }

    public static toCampusFindByIDCombinedSuccessOutput(json: string): CampusFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CampusFindByIDCombinedSuccessOutput"));
    }

    public static campusFindByIDCombinedSuccessOutputToJson(value: CampusFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCampusCreateCombinedInput(json: string): CampusCreateCombinedInput {
        return cast(JSON.parse(json), r("CampusCreateCombinedInput"));
    }

    public static campusCreateCombinedInputToJson(value: CampusCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusCreateCombinedInput")), null, 2);
    }

    public static toCampusCreateCombinedSuccessOutput(json: string): CampusCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CampusCreateCombinedSuccessOutput"));
    }

    public static campusCreateCombinedSuccessOutputToJson(value: CampusCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusCreateCombinedSuccessOutput")), null, 2);
    }

    public static toCampusUpdateByIDCombinedInput(json: string): CampusUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("CampusUpdateByIDCombinedInput"));
    }

    public static campusUpdateByIDCombinedInputToJson(value: CampusUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusUpdateByIDCombinedInput")), null, 2);
    }

    public static toCampusUpdateByIDCombinedSuccessOutput(json: string): CampusUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CampusUpdateByIDCombinedSuccessOutput"));
    }

    public static campusUpdateByIDCombinedSuccessOutputToJson(value: CampusUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCampusDeleteByIDCombinedInput(json: string): CampusDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("CampusDeleteByIDCombinedInput"));
    }

    public static campusDeleteByIDCombinedInputToJson(value: CampusDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusDeleteByIDCombinedInput")), null, 2);
    }

    public static toCampusDeleteByIDCombinedSuccessOutput(json: string): CampusDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CampusDeleteByIDCombinedSuccessOutput"));
    }

    public static campusDeleteByIDCombinedSuccessOutputToJson(value: CampusDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCampusListCombinedInput(json: string): CampusListCombinedInput {
        return cast(JSON.parse(json), r("CampusListCombinedInput"));
    }

    public static campusListCombinedInputToJson(value: CampusListCombinedInput): string {
        return JSON.stringify(uncast(value, r("CampusListCombinedInput")), null, 2);
    }

    public static toCampusListCombinedSuccessOutput(json: string): CampusListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CampusListCombinedSuccessOutput"));
    }

    public static campusListCombinedSuccessOutputToJson(value: CampusListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CampusListCombinedSuccessOutput")), null, 2);
    }

    public static toCidadeFindByIDCombinedInput(json: string): CidadeFindByIDCombinedInput {
        return cast(JSON.parse(json), r("CidadeFindByIDCombinedInput"));
    }

    public static cidadeFindByIDCombinedInputToJson(value: CidadeFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CidadeFindByIDCombinedInput")), null, 2);
    }

    public static toCidadeFindByIDCombinedSuccessOutput(json: string): CidadeFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CidadeFindByIDCombinedSuccessOutput"));
    }

    public static cidadeFindByIDCombinedSuccessOutputToJson(value: CidadeFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CidadeFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCidadeListCombinedInput(json: string): CidadeListCombinedInput {
        return cast(JSON.parse(json), r("CidadeListCombinedInput"));
    }

    public static cidadeListCombinedInputToJson(value: CidadeListCombinedInput): string {
        return JSON.stringify(uncast(value, r("CidadeListCombinedInput")), null, 2);
    }

    public static toCidadeListCombinedSuccessOutput(json: string): CidadeListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CidadeListCombinedSuccessOutput"));
    }

    public static cidadeListCombinedSuccessOutputToJson(value: CidadeListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CidadeListCombinedSuccessOutput")), null, 2);
    }

    public static toEstadoFindByIDCombinedInput(json: string): EstadoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("EstadoFindByIDCombinedInput"));
    }

    public static estadoFindByIDCombinedInputToJson(value: EstadoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EstadoFindByIDCombinedInput")), null, 2);
    }

    public static toEstadoFindByIDCombinedSuccessOutput(json: string): EstadoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EstadoFindByIDCombinedSuccessOutput"));
    }

    public static estadoFindByIDCombinedSuccessOutputToJson(value: EstadoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EstadoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEstadoListCombinedInput(json: string): EstadoListCombinedInput {
        return cast(JSON.parse(json), r("EstadoListCombinedInput"));
    }

    public static estadoListCombinedInputToJson(value: EstadoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("EstadoListCombinedInput")), null, 2);
    }

    public static toEstadoListCombinedSuccessOutput(json: string): EstadoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EstadoListCombinedSuccessOutput"));
    }

    public static estadoListCombinedSuccessOutputToJson(value: EstadoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EstadoListCombinedSuccessOutput")), null, 2);
    }

    public static toReservaFindByIDCombinedInput(json: string): ReservaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("ReservaFindByIDCombinedInput"));
    }

    public static reservaFindByIDCombinedInputToJson(value: ReservaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaFindByIDCombinedInput")), null, 2);
    }

    public static toReservaFindByIDCombinedSuccessOutput(json: string): ReservaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ReservaFindByIDCombinedSuccessOutput"));
    }

    public static reservaFindByIDCombinedSuccessOutputToJson(value: ReservaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toReservaCreateCombinedInput(json: string): ReservaCreateCombinedInput {
        return cast(JSON.parse(json), r("ReservaCreateCombinedInput"));
    }

    public static reservaCreateCombinedInputToJson(value: ReservaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaCreateCombinedInput")), null, 2);
    }

    public static toReservaCreateCombinedSuccessOutput(json: string): ReservaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ReservaCreateCombinedSuccessOutput"));
    }

    public static reservaCreateCombinedSuccessOutputToJson(value: ReservaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toReservaUpdateByIDCombinedInput(json: string): ReservaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("ReservaUpdateByIDCombinedInput"));
    }

    public static reservaUpdateByIDCombinedInputToJson(value: ReservaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaUpdateByIDCombinedInput")), null, 2);
    }

    public static toReservaUpdateByIDCombinedSuccessOutput(json: string): ReservaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ReservaUpdateByIDCombinedSuccessOutput"));
    }

    public static reservaUpdateByIDCombinedSuccessOutputToJson(value: ReservaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toReservaDeleteByIDCombinedInput(json: string): ReservaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("ReservaDeleteByIDCombinedInput"));
    }

    public static reservaDeleteByIDCombinedInputToJson(value: ReservaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaDeleteByIDCombinedInput")), null, 2);
    }

    public static toReservaDeleteByIDCombinedSuccessOutput(json: string): ReservaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ReservaDeleteByIDCombinedSuccessOutput"));
    }

    public static reservaDeleteByIDCombinedSuccessOutputToJson(value: ReservaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toReservaListCombinedInput(json: string): ReservaListCombinedInput {
        return cast(JSON.parse(json), r("ReservaListCombinedInput"));
    }

    public static reservaListCombinedInputToJson(value: ReservaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("ReservaListCombinedInput")), null, 2);
    }

    public static toReservaListCombinedSuccessOutput(json: string): ReservaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ReservaListCombinedSuccessOutput"));
    }

    public static reservaListCombinedSuccessOutputToJson(value: ReservaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ReservaListCombinedSuccessOutput")), null, 2);
    }

    public static toCursoFindByIDCombinedInput(json: string): CursoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("CursoFindByIDCombinedInput"));
    }

    public static cursoFindByIDCombinedInputToJson(value: CursoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoFindByIDCombinedInput")), null, 2);
    }

    public static toCursoFindByIDCombinedSuccessOutput(json: string): CursoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoFindByIDCombinedSuccessOutput"));
    }

    public static cursoFindByIDCombinedSuccessOutputToJson(value: CursoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCursoCreateCombinedInput(json: string): CursoCreateCombinedInput {
        return cast(JSON.parse(json), r("CursoCreateCombinedInput"));
    }

    public static cursoCreateCombinedInputToJson(value: CursoCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoCreateCombinedInput")), null, 2);
    }

    public static toCursoCreateCombinedSuccessOutput(json: string): CursoCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoCreateCombinedSuccessOutput"));
    }

    public static cursoCreateCombinedSuccessOutputToJson(value: CursoCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoCreateCombinedSuccessOutput")), null, 2);
    }

    public static toCursoUpdateByIDCombinedInput(json: string): CursoUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("CursoUpdateByIDCombinedInput"));
    }

    public static cursoUpdateByIDCombinedInputToJson(value: CursoUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoUpdateByIDCombinedInput")), null, 2);
    }

    public static toCursoUpdateByIDCombinedSuccessOutput(json: string): CursoUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoUpdateByIDCombinedSuccessOutput"));
    }

    public static cursoUpdateByIDCombinedSuccessOutputToJson(value: CursoUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCursoDeleteByIDCombinedInput(json: string): CursoDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("CursoDeleteByIDCombinedInput"));
    }

    public static cursoDeleteByIDCombinedInputToJson(value: CursoDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoDeleteByIDCombinedInput")), null, 2);
    }

    public static toCursoDeleteByIDCombinedSuccessOutput(json: string): CursoDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoDeleteByIDCombinedSuccessOutput"));
    }

    public static cursoDeleteByIDCombinedSuccessOutputToJson(value: CursoDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCursoListCombinedInput(json: string): CursoListCombinedInput {
        return cast(JSON.parse(json), r("CursoListCombinedInput"));
    }

    public static cursoListCombinedInputToJson(value: CursoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoListCombinedInput")), null, 2);
    }

    public static toCursoListCombinedSuccessOutput(json: string): CursoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoListCombinedSuccessOutput"));
    }

    public static cursoListCombinedSuccessOutputToJson(value: CursoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoListCombinedSuccessOutput")), null, 2);
    }

    public static toCursoGetCoverImageCombinedInput(json: string): CursoGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("CursoGetCoverImageCombinedInput"));
    }

    public static cursoGetCoverImageCombinedInputToJson(value: CursoGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoGetCoverImageCombinedInput")), null, 2);
    }

    public static toCursoGetCoverImageCombinedSuccessOutput(json: string): CursoGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoGetCoverImageCombinedSuccessOutput"));
    }

    public static cursoGetCoverImageCombinedSuccessOutputToJson(value: CursoGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toCursoSetCoverImageCombinedInput(json: string): CursoSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("CursoSetCoverImageCombinedInput"));
    }

    public static cursoSetCoverImageCombinedInputToJson(value: CursoSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("CursoSetCoverImageCombinedInput")), null, 2);
    }

    public static toCursoSetCoverImageCombinedSuccessOutput(json: string): CursoSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CursoSetCoverImageCombinedSuccessOutput"));
    }

    public static cursoSetCoverImageCombinedSuccessOutputToJson(value: CursoSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CursoSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toModalidadeFindByIDCombinedInput(json: string): ModalidadeFindByIDCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeFindByIDCombinedInput"));
    }

    public static modalidadeFindByIDCombinedInputToJson(value: ModalidadeFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindByIDCombinedInput")), null, 2);
    }

    public static toModalidadeFindByIDCombinedSuccessOutput(json: string): ModalidadeFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeFindByIDCombinedSuccessOutput"));
    }

    public static modalidadeFindByIDCombinedSuccessOutputToJson(value: ModalidadeFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toModalidadeCreateCombinedInput(json: string): ModalidadeCreateCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeCreateCombinedInput"));
    }

    public static modalidadeCreateCombinedInputToJson(value: ModalidadeCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeCreateCombinedInput")), null, 2);
    }

    public static toModalidadeCreateCombinedSuccessOutput(json: string): ModalidadeCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeCreateCombinedSuccessOutput"));
    }

    public static modalidadeCreateCombinedSuccessOutputToJson(value: ModalidadeCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeCreateCombinedSuccessOutput")), null, 2);
    }

    public static toModalidadeUpdateByIDCombinedInput(json: string): ModalidadeUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeUpdateByIDCombinedInput"));
    }

    public static modalidadeUpdateByIDCombinedInputToJson(value: ModalidadeUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeUpdateByIDCombinedInput")), null, 2);
    }

    public static toModalidadeUpdateByIDCombinedSuccessOutput(json: string): ModalidadeUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeUpdateByIDCombinedSuccessOutput"));
    }

    public static modalidadeUpdateByIDCombinedSuccessOutputToJson(value: ModalidadeUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toModalidadeDeleteByIDCombinedInput(json: string): ModalidadeDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeDeleteByIDCombinedInput"));
    }

    public static modalidadeDeleteByIDCombinedInputToJson(value: ModalidadeDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeDeleteByIDCombinedInput")), null, 2);
    }

    public static toModalidadeDeleteByIDCombinedSuccessOutput(json: string): ModalidadeDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeDeleteByIDCombinedSuccessOutput"));
    }

    public static modalidadeDeleteByIDCombinedSuccessOutputToJson(value: ModalidadeDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toModalidadeListCombinedInput(json: string): ModalidadeListCombinedInput {
        return cast(JSON.parse(json), r("ModalidadeListCombinedInput"));
    }

    public static modalidadeListCombinedInputToJson(value: ModalidadeListCombinedInput): string {
        return JSON.stringify(uncast(value, r("ModalidadeListCombinedInput")), null, 2);
    }

    public static toModalidadeListCombinedSuccessOutput(json: string): ModalidadeListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("ModalidadeListCombinedSuccessOutput"));
    }

    public static modalidadeListCombinedSuccessOutputToJson(value: ModalidadeListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("ModalidadeListCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaFindByIDCombinedInput(json: string): DisciplinaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaFindByIDCombinedInput"));
    }

    public static disciplinaFindByIDCombinedInputToJson(value: DisciplinaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindByIDCombinedInput")), null, 2);
    }

    public static toDisciplinaFindByIDCombinedSuccessOutput(json: string): DisciplinaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaFindByIDCombinedSuccessOutput"));
    }

    public static disciplinaFindByIDCombinedSuccessOutputToJson(value: DisciplinaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaCreateCombinedInput(json: string): DisciplinaCreateCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaCreateCombinedInput"));
    }

    public static disciplinaCreateCombinedInputToJson(value: DisciplinaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaCreateCombinedInput")), null, 2);
    }

    public static toDisciplinaCreateCombinedSuccessOutput(json: string): DisciplinaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaCreateCombinedSuccessOutput"));
    }

    public static disciplinaCreateCombinedSuccessOutputToJson(value: DisciplinaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaUpdateByIDCombinedInput(json: string): DisciplinaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaUpdateByIDCombinedInput"));
    }

    public static disciplinaUpdateByIDCombinedInputToJson(value: DisciplinaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaUpdateByIDCombinedInput")), null, 2);
    }

    public static toDisciplinaUpdateByIDCombinedSuccessOutput(json: string): DisciplinaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaUpdateByIDCombinedSuccessOutput"));
    }

    public static disciplinaUpdateByIDCombinedSuccessOutputToJson(value: DisciplinaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaDeleteByIDCombinedInput(json: string): DisciplinaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaDeleteByIDCombinedInput"));
    }

    public static disciplinaDeleteByIDCombinedInputToJson(value: DisciplinaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaDeleteByIDCombinedInput")), null, 2);
    }

    public static toDisciplinaDeleteByIDCombinedSuccessOutput(json: string): DisciplinaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaDeleteByIDCombinedSuccessOutput"));
    }

    public static disciplinaDeleteByIDCombinedSuccessOutputToJson(value: DisciplinaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaListCombinedInput(json: string): DisciplinaListCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaListCombinedInput"));
    }

    public static disciplinaListCombinedInputToJson(value: DisciplinaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaListCombinedInput")), null, 2);
    }

    public static toDisciplinaListCombinedSuccessOutput(json: string): DisciplinaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaListCombinedSuccessOutput"));
    }

    public static disciplinaListCombinedSuccessOutputToJson(value: DisciplinaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaListCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaGetCoverImageCombinedInput(json: string): DisciplinaGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaGetCoverImageCombinedInput"));
    }

    public static disciplinaGetCoverImageCombinedInputToJson(value: DisciplinaGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaGetCoverImageCombinedInput")), null, 2);
    }

    public static toDisciplinaGetCoverImageCombinedSuccessOutput(json: string): DisciplinaGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaGetCoverImageCombinedSuccessOutput"));
    }

    public static disciplinaGetCoverImageCombinedSuccessOutputToJson(value: DisciplinaGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toDisciplinaSetCoverImageCombinedInput(json: string): DisciplinaSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("DisciplinaSetCoverImageCombinedInput"));
    }

    public static disciplinaSetCoverImageCombinedInputToJson(value: DisciplinaSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("DisciplinaSetCoverImageCombinedInput")), null, 2);
    }

    public static toDisciplinaSetCoverImageCombinedSuccessOutput(json: string): DisciplinaSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DisciplinaSetCoverImageCombinedSuccessOutput"));
    }

    public static disciplinaSetCoverImageCombinedSuccessOutputToJson(value: DisciplinaSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DisciplinaSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaFindByIDCombinedInput(json: string): TurmaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaFindByIDCombinedInput"));
    }

    public static turmaFindByIDCombinedInputToJson(value: TurmaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaFindByIDCombinedInput")), null, 2);
    }

    public static toTurmaFindByIDCombinedSuccessOutput(json: string): TurmaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaFindByIDCombinedSuccessOutput"));
    }

    public static turmaFindByIDCombinedSuccessOutputToJson(value: TurmaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaCreateCombinedInput(json: string): TurmaCreateCombinedInput {
        return cast(JSON.parse(json), r("TurmaCreateCombinedInput"));
    }

    public static turmaCreateCombinedInputToJson(value: TurmaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaCreateCombinedInput")), null, 2);
    }

    public static toTurmaCreateCombinedSuccessOutput(json: string): TurmaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaCreateCombinedSuccessOutput"));
    }

    public static turmaCreateCombinedSuccessOutputToJson(value: TurmaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaUpdateByIDCombinedInput(json: string): TurmaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaUpdateByIDCombinedInput"));
    }

    public static turmaUpdateByIDCombinedInputToJson(value: TurmaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaUpdateByIDCombinedInput")), null, 2);
    }

    public static toTurmaUpdateByIDCombinedSuccessOutput(json: string): TurmaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaUpdateByIDCombinedSuccessOutput"));
    }

    public static turmaUpdateByIDCombinedSuccessOutputToJson(value: TurmaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDeleteByIDCombinedInput(json: string): TurmaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDeleteByIDCombinedInput"));
    }

    public static turmaDeleteByIDCombinedInputToJson(value: TurmaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDeleteByIDCombinedInput")), null, 2);
    }

    public static toTurmaDeleteByIDCombinedSuccessOutput(json: string): TurmaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDeleteByIDCombinedSuccessOutput"));
    }

    public static turmaDeleteByIDCombinedSuccessOutputToJson(value: TurmaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaListCombinedInput(json: string): TurmaListCombinedInput {
        return cast(JSON.parse(json), r("TurmaListCombinedInput"));
    }

    public static turmaListCombinedInputToJson(value: TurmaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaListCombinedInput")), null, 2);
    }

    public static toTurmaListCombinedSuccessOutput(json: string): TurmaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaListCombinedSuccessOutput"));
    }

    public static turmaListCombinedSuccessOutputToJson(value: TurmaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaListCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaGetCoverImageCombinedInput(json: string): TurmaGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("TurmaGetCoverImageCombinedInput"));
    }

    public static turmaGetCoverImageCombinedInputToJson(value: TurmaGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaGetCoverImageCombinedInput")), null, 2);
    }

    public static toTurmaGetCoverImageCombinedSuccessOutput(json: string): TurmaGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaGetCoverImageCombinedSuccessOutput"));
    }

    public static turmaGetCoverImageCombinedSuccessOutputToJson(value: TurmaGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaSetCoverImageCombinedInput(json: string): TurmaSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("TurmaSetCoverImageCombinedInput"));
    }

    public static turmaSetCoverImageCombinedInputToJson(value: TurmaSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaSetCoverImageCombinedInput")), null, 2);
    }

    public static toTurmaSetCoverImageCombinedSuccessOutput(json: string): TurmaSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaSetCoverImageCombinedSuccessOutput"));
    }

    public static turmaSetCoverImageCombinedSuccessOutputToJson(value: TurmaSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoFindByIDCombinedInput(json: string): CalendarioLetivoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoFindByIDCombinedInput"));
    }

    public static calendarioLetivoFindByIDCombinedInputToJson(value: CalendarioLetivoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindByIDCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoFindByIDCombinedSuccessOutput(json: string): CalendarioLetivoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoFindByIDCombinedSuccessOutput"));
    }

    public static calendarioLetivoFindByIDCombinedSuccessOutputToJson(value: CalendarioLetivoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoCreateCombinedInput(json: string): CalendarioLetivoCreateCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoCreateCombinedInput"));
    }

    public static calendarioLetivoCreateCombinedInputToJson(value: CalendarioLetivoCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoCreateCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoCreateCombinedSuccessOutput(json: string): CalendarioLetivoCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoCreateCombinedSuccessOutput"));
    }

    public static calendarioLetivoCreateCombinedSuccessOutputToJson(value: CalendarioLetivoCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoCreateCombinedSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoUpdateByIDCombinedInput(json: string): CalendarioLetivoUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoUpdateByIDCombinedInput"));
    }

    public static calendarioLetivoUpdateByIDCombinedInputToJson(value: CalendarioLetivoUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoUpdateByIDCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoUpdateByIDCombinedSuccessOutput(json: string): CalendarioLetivoUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoUpdateByIDCombinedSuccessOutput"));
    }

    public static calendarioLetivoUpdateByIDCombinedSuccessOutputToJson(value: CalendarioLetivoUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoDeleteByIDCombinedInput(json: string): CalendarioLetivoDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoDeleteByIDCombinedInput"));
    }

    public static calendarioLetivoDeleteByIDCombinedInputToJson(value: CalendarioLetivoDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoDeleteByIDCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoDeleteByIDCombinedSuccessOutput(json: string): CalendarioLetivoDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoDeleteByIDCombinedSuccessOutput"));
    }

    public static calendarioLetivoDeleteByIDCombinedSuccessOutputToJson(value: CalendarioLetivoDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toCalendarioLetivoListCombinedInput(json: string): CalendarioLetivoListCombinedInput {
        return cast(JSON.parse(json), r("CalendarioLetivoListCombinedInput"));
    }

    public static calendarioLetivoListCombinedInputToJson(value: CalendarioLetivoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoListCombinedInput")), null, 2);
    }

    public static toCalendarioLetivoListCombinedSuccessOutput(json: string): CalendarioLetivoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("CalendarioLetivoListCombinedSuccessOutput"));
    }

    public static calendarioLetivoListCombinedSuccessOutputToJson(value: CalendarioLetivoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("CalendarioLetivoListCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioFindByIDCombinedInput(json: string): DiarioFindByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioFindByIDCombinedInput"));
    }

    public static diarioFindByIDCombinedInputToJson(value: DiarioFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioFindByIDCombinedInput")), null, 2);
    }

    public static toDiarioFindByIDCombinedSuccessOutput(json: string): DiarioFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioFindByIDCombinedSuccessOutput"));
    }

    public static diarioFindByIDCombinedSuccessOutputToJson(value: DiarioFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioCreateCombinedInput(json: string): DiarioCreateCombinedInput {
        return cast(JSON.parse(json), r("DiarioCreateCombinedInput"));
    }

    public static diarioCreateCombinedInputToJson(value: DiarioCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioCreateCombinedInput")), null, 2);
    }

    public static toDiarioCreateCombinedSuccessOutput(json: string): DiarioCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioCreateCombinedSuccessOutput"));
    }

    public static diarioCreateCombinedSuccessOutputToJson(value: DiarioCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioCreateCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioUpdateByIDCombinedInput(json: string): DiarioUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioUpdateByIDCombinedInput"));
    }

    public static diarioUpdateByIDCombinedInputToJson(value: DiarioUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioUpdateByIDCombinedInput")), null, 2);
    }

    public static toDiarioUpdateByIDCombinedSuccessOutput(json: string): DiarioUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioUpdateByIDCombinedSuccessOutput"));
    }

    public static diarioUpdateByIDCombinedSuccessOutputToJson(value: DiarioUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioDeleteByIDCombinedInput(json: string): DiarioDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioDeleteByIDCombinedInput"));
    }

    public static diarioDeleteByIDCombinedInputToJson(value: DiarioDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioDeleteByIDCombinedInput")), null, 2);
    }

    public static toDiarioDeleteByIDCombinedSuccessOutput(json: string): DiarioDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioDeleteByIDCombinedSuccessOutput"));
    }

    public static diarioDeleteByIDCombinedSuccessOutputToJson(value: DiarioDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioListCombinedInput(json: string): DiarioListCombinedInput {
        return cast(JSON.parse(json), r("DiarioListCombinedInput"));
    }

    public static diarioListCombinedInputToJson(value: DiarioListCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioListCombinedInput")), null, 2);
    }

    public static toDiarioListCombinedSuccessOutput(json: string): DiarioListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioListCombinedSuccessOutput"));
    }

    public static diarioListCombinedSuccessOutputToJson(value: DiarioListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioListCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioGetCoverImageCombinedInput(json: string): DiarioGetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("DiarioGetCoverImageCombinedInput"));
    }

    public static diarioGetCoverImageCombinedInputToJson(value: DiarioGetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioGetCoverImageCombinedInput")), null, 2);
    }

    public static toDiarioGetCoverImageCombinedSuccessOutput(json: string): DiarioGetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioGetCoverImageCombinedSuccessOutput"));
    }

    public static diarioGetCoverImageCombinedSuccessOutputToJson(value: DiarioGetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioGetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioSetCoverImageCombinedInput(json: string): DiarioSetCoverImageCombinedInput {
        return cast(JSON.parse(json), r("DiarioSetCoverImageCombinedInput"));
    }

    public static diarioSetCoverImageCombinedInputToJson(value: DiarioSetCoverImageCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioSetCoverImageCombinedInput")), null, 2);
    }

    public static toDiarioSetCoverImageCombinedSuccessOutput(json: string): DiarioSetCoverImageCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioSetCoverImageCombinedSuccessOutput"));
    }

    public static diarioSetCoverImageCombinedSuccessOutputToJson(value: DiarioSetCoverImageCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioSetCoverImageCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorFindByIDCombinedInput(json: string): DiarioProfessorFindByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorFindByIDCombinedInput"));
    }

    public static diarioProfessorFindByIDCombinedInputToJson(value: DiarioProfessorFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindByIDCombinedInput")), null, 2);
    }

    public static toDiarioProfessorFindByIDCombinedSuccessOutput(json: string): DiarioProfessorFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorFindByIDCombinedSuccessOutput"));
    }

    public static diarioProfessorFindByIDCombinedSuccessOutputToJson(value: DiarioProfessorFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorCreateCombinedInput(json: string): DiarioProfessorCreateCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorCreateCombinedInput"));
    }

    public static diarioProfessorCreateCombinedInputToJson(value: DiarioProfessorCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorCreateCombinedInput")), null, 2);
    }

    public static toDiarioProfessorCreateCombinedSuccessOutput(json: string): DiarioProfessorCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorCreateCombinedSuccessOutput"));
    }

    public static diarioProfessorCreateCombinedSuccessOutputToJson(value: DiarioProfessorCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorCreateCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorUpdateByIDCombinedInput(json: string): DiarioProfessorUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorUpdateByIDCombinedInput"));
    }

    public static diarioProfessorUpdateByIDCombinedInputToJson(value: DiarioProfessorUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorUpdateByIDCombinedInput")), null, 2);
    }

    public static toDiarioProfessorUpdateByIDCombinedSuccessOutput(json: string): DiarioProfessorUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorUpdateByIDCombinedSuccessOutput"));
    }

    public static diarioProfessorUpdateByIDCombinedSuccessOutputToJson(value: DiarioProfessorUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorDeleteByIDCombinedInput(json: string): DiarioProfessorDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorDeleteByIDCombinedInput"));
    }

    public static diarioProfessorDeleteByIDCombinedInputToJson(value: DiarioProfessorDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorDeleteByIDCombinedInput")), null, 2);
    }

    public static toDiarioProfessorDeleteByIDCombinedSuccessOutput(json: string): DiarioProfessorDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorDeleteByIDCombinedSuccessOutput"));
    }

    public static diarioProfessorDeleteByIDCombinedSuccessOutputToJson(value: DiarioProfessorDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiarioProfessorListCombinedInput(json: string): DiarioProfessorListCombinedInput {
        return cast(JSON.parse(json), r("DiarioProfessorListCombinedInput"));
    }

    public static diarioProfessorListCombinedInputToJson(value: DiarioProfessorListCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorListCombinedInput")), null, 2);
    }

    public static toDiarioProfessorListCombinedSuccessOutput(json: string): DiarioProfessorListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiarioProfessorListCombinedSuccessOutput"));
    }

    public static diarioProfessorListCombinedSuccessOutputToJson(value: DiarioProfessorListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiarioProfessorListCombinedSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioFindByIDCombinedInput(json: string): DiaCalendarioFindByIDCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioFindByIDCombinedInput"));
    }

    public static diaCalendarioFindByIDCombinedInputToJson(value: DiaCalendarioFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindByIDCombinedInput")), null, 2);
    }

    public static toDiaCalendarioFindByIDCombinedSuccessOutput(json: string): DiaCalendarioFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioFindByIDCombinedSuccessOutput"));
    }

    public static diaCalendarioFindByIDCombinedSuccessOutputToJson(value: DiaCalendarioFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioCreateCombinedInput(json: string): DiaCalendarioCreateCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioCreateCombinedInput"));
    }

    public static diaCalendarioCreateCombinedInputToJson(value: DiaCalendarioCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioCreateCombinedInput")), null, 2);
    }

    public static toDiaCalendarioCreateCombinedSuccessOutput(json: string): DiaCalendarioCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioCreateCombinedSuccessOutput"));
    }

    public static diaCalendarioCreateCombinedSuccessOutputToJson(value: DiaCalendarioCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioCreateCombinedSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioUpdateByIDCombinedInput(json: string): DiaCalendarioUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioUpdateByIDCombinedInput"));
    }

    public static diaCalendarioUpdateByIDCombinedInputToJson(value: DiaCalendarioUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioUpdateByIDCombinedInput")), null, 2);
    }

    public static toDiaCalendarioUpdateByIDCombinedSuccessOutput(json: string): DiaCalendarioUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioUpdateByIDCombinedSuccessOutput"));
    }

    public static diaCalendarioUpdateByIDCombinedSuccessOutputToJson(value: DiaCalendarioUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioDeleteByIDCombinedInput(json: string): DiaCalendarioDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioDeleteByIDCombinedInput"));
    }

    public static diaCalendarioDeleteByIDCombinedInputToJson(value: DiaCalendarioDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioDeleteByIDCombinedInput")), null, 2);
    }

    public static toDiaCalendarioDeleteByIDCombinedSuccessOutput(json: string): DiaCalendarioDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioDeleteByIDCombinedSuccessOutput"));
    }

    public static diaCalendarioDeleteByIDCombinedSuccessOutputToJson(value: DiaCalendarioDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toDiaCalendarioListCombinedInput(json: string): DiaCalendarioListCombinedInput {
        return cast(JSON.parse(json), r("DiaCalendarioListCombinedInput"));
    }

    public static diaCalendarioListCombinedInputToJson(value: DiaCalendarioListCombinedInput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioListCombinedInput")), null, 2);
    }

    public static toDiaCalendarioListCombinedSuccessOutput(json: string): DiaCalendarioListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("DiaCalendarioListCombinedSuccessOutput"));
    }

    public static diaCalendarioListCombinedSuccessOutputToJson(value: DiaCalendarioListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("DiaCalendarioListCombinedSuccessOutput")), null, 2);
    }

    public static toEtapaFindByIDCombinedInput(json: string): EtapaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("EtapaFindByIDCombinedInput"));
    }

    public static etapaFindByIDCombinedInputToJson(value: EtapaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaFindByIDCombinedInput")), null, 2);
    }

    public static toEtapaFindByIDCombinedSuccessOutput(json: string): EtapaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EtapaFindByIDCombinedSuccessOutput"));
    }

    public static etapaFindByIDCombinedSuccessOutputToJson(value: EtapaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEtapaCreateCombinedInput(json: string): EtapaCreateCombinedInput {
        return cast(JSON.parse(json), r("EtapaCreateCombinedInput"));
    }

    public static etapaCreateCombinedInputToJson(value: EtapaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaCreateCombinedInput")), null, 2);
    }

    public static toEtapaCreateCombinedSuccessOutput(json: string): EtapaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EtapaCreateCombinedSuccessOutput"));
    }

    public static etapaCreateCombinedSuccessOutputToJson(value: EtapaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toEtapaUpdateByIDCombinedInput(json: string): EtapaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("EtapaUpdateByIDCombinedInput"));
    }

    public static etapaUpdateByIDCombinedInputToJson(value: EtapaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaUpdateByIDCombinedInput")), null, 2);
    }

    public static toEtapaUpdateByIDCombinedSuccessOutput(json: string): EtapaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EtapaUpdateByIDCombinedSuccessOutput"));
    }

    public static etapaUpdateByIDCombinedSuccessOutputToJson(value: EtapaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEtapaDeleteByIDCombinedInput(json: string): EtapaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("EtapaDeleteByIDCombinedInput"));
    }

    public static etapaDeleteByIDCombinedInputToJson(value: EtapaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaDeleteByIDCombinedInput")), null, 2);
    }

    public static toEtapaDeleteByIDCombinedSuccessOutput(json: string): EtapaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EtapaDeleteByIDCombinedSuccessOutput"));
    }

    public static etapaDeleteByIDCombinedSuccessOutputToJson(value: EtapaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEtapaListCombinedInput(json: string): EtapaListCombinedInput {
        return cast(JSON.parse(json), r("EtapaListCombinedInput"));
    }

    public static etapaListCombinedInputToJson(value: EtapaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("EtapaListCombinedInput")), null, 2);
    }

    public static toEtapaListCombinedSuccessOutput(json: string): EtapaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EtapaListCombinedSuccessOutput"));
    }

    public static etapaListCombinedSuccessOutputToJson(value: EtapaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EtapaListCombinedSuccessOutput")), null, 2);
    }

    public static toAulaFindByIDCombinedInput(json: string): AulaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("AulaFindByIDCombinedInput"));
    }

    public static aulaFindByIDCombinedInputToJson(value: AulaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaFindByIDCombinedInput")), null, 2);
    }

    public static toAulaFindByIDCombinedSuccessOutput(json: string): AulaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AulaFindByIDCombinedSuccessOutput"));
    }

    public static aulaFindByIDCombinedSuccessOutputToJson(value: AulaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAulaCreateCombinedInput(json: string): AulaCreateCombinedInput {
        return cast(JSON.parse(json), r("AulaCreateCombinedInput"));
    }

    public static aulaCreateCombinedInputToJson(value: AulaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaCreateCombinedInput")), null, 2);
    }

    public static toAulaCreateCombinedSuccessOutput(json: string): AulaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AulaCreateCombinedSuccessOutput"));
    }

    public static aulaCreateCombinedSuccessOutputToJson(value: AulaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toAulaUpdateByIDCombinedInput(json: string): AulaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("AulaUpdateByIDCombinedInput"));
    }

    public static aulaUpdateByIDCombinedInputToJson(value: AulaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaUpdateByIDCombinedInput")), null, 2);
    }

    public static toAulaUpdateByIDCombinedSuccessOutput(json: string): AulaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AulaUpdateByIDCombinedSuccessOutput"));
    }

    public static aulaUpdateByIDCombinedSuccessOutputToJson(value: AulaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAulaDeleteByIDCombinedInput(json: string): AulaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("AulaDeleteByIDCombinedInput"));
    }

    public static aulaDeleteByIDCombinedInputToJson(value: AulaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaDeleteByIDCombinedInput")), null, 2);
    }

    public static toAulaDeleteByIDCombinedSuccessOutput(json: string): AulaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AulaDeleteByIDCombinedSuccessOutput"));
    }

    public static aulaDeleteByIDCombinedSuccessOutputToJson(value: AulaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toAulaListCombinedInput(json: string): AulaListCombinedInput {
        return cast(JSON.parse(json), r("AulaListCombinedInput"));
    }

    public static aulaListCombinedInputToJson(value: AulaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("AulaListCombinedInput")), null, 2);
    }

    public static toAulaListCombinedSuccessOutput(json: string): AulaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("AulaListCombinedSuccessOutput"));
    }

    public static aulaListCombinedSuccessOutputToJson(value: AulaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("AulaListCombinedSuccessOutput")), null, 2);
    }

    public static toEventoFindByIDCombinedInput(json: string): EventoFindByIDCombinedInput {
        return cast(JSON.parse(json), r("EventoFindByIDCombinedInput"));
    }

    public static eventoFindByIDCombinedInputToJson(value: EventoFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoFindByIDCombinedInput")), null, 2);
    }

    public static toEventoFindByIDCombinedSuccessOutput(json: string): EventoFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EventoFindByIDCombinedSuccessOutput"));
    }

    public static eventoFindByIDCombinedSuccessOutputToJson(value: EventoFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEventoCreateCombinedInput(json: string): EventoCreateCombinedInput {
        return cast(JSON.parse(json), r("EventoCreateCombinedInput"));
    }

    public static eventoCreateCombinedInputToJson(value: EventoCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoCreateCombinedInput")), null, 2);
    }

    public static toEventoCreateCombinedSuccessOutput(json: string): EventoCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EventoCreateCombinedSuccessOutput"));
    }

    public static eventoCreateCombinedSuccessOutputToJson(value: EventoCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoCreateCombinedSuccessOutput")), null, 2);
    }

    public static toEventoUpdateByIDCombinedInput(json: string): EventoUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("EventoUpdateByIDCombinedInput"));
    }

    public static eventoUpdateByIDCombinedInputToJson(value: EventoUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoUpdateByIDCombinedInput")), null, 2);
    }

    public static toEventoUpdateByIDCombinedSuccessOutput(json: string): EventoUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EventoUpdateByIDCombinedSuccessOutput"));
    }

    public static eventoUpdateByIDCombinedSuccessOutputToJson(value: EventoUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEventoDeleteByIDCombinedInput(json: string): EventoDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("EventoDeleteByIDCombinedInput"));
    }

    public static eventoDeleteByIDCombinedInputToJson(value: EventoDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoDeleteByIDCombinedInput")), null, 2);
    }

    public static toEventoDeleteByIDCombinedSuccessOutput(json: string): EventoDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EventoDeleteByIDCombinedSuccessOutput"));
    }

    public static eventoDeleteByIDCombinedSuccessOutputToJson(value: EventoDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toEventoListCombinedInput(json: string): EventoListCombinedInput {
        return cast(JSON.parse(json), r("EventoListCombinedInput"));
    }

    public static eventoListCombinedInputToJson(value: EventoListCombinedInput): string {
        return JSON.stringify(uncast(value, r("EventoListCombinedInput")), null, 2);
    }

    public static toEventoListCombinedSuccessOutput(json: string): EventoListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("EventoListCombinedSuccessOutput"));
    }

    public static eventoListCombinedSuccessOutputToJson(value: EventoListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("EventoListCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeFindByIDCombinedInput(json: string): TurmaDisponibilidadeFindByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindByIDCombinedInput"));
    }

    public static turmaDisponibilidadeFindByIDCombinedInputToJson(value: TurmaDisponibilidadeFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeFindByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeFindByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeFindByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeCreateCombinedInput(json: string): TurmaDisponibilidadeCreateCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeCreateCombinedInput"));
    }

    public static turmaDisponibilidadeCreateCombinedInputToJson(value: TurmaDisponibilidadeCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeCreateCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeCreateCombinedSuccessOutput(json: string): TurmaDisponibilidadeCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeCreateCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeCreateCombinedSuccessOutputToJson(value: TurmaDisponibilidadeCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeCreateCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeUpdateByIDCombinedInput(json: string): TurmaDisponibilidadeUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeUpdateByIDCombinedInput"));
    }

    public static turmaDisponibilidadeUpdateByIDCombinedInputToJson(value: TurmaDisponibilidadeUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeUpdateByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeUpdateByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeUpdateByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDeleteByIDCombinedInput(json: string): TurmaDisponibilidadeDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDeleteByIDCombinedInput"));
    }

    public static turmaDisponibilidadeDeleteByIDCombinedInputToJson(value: TurmaDisponibilidadeDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDeleteByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDeleteByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDeleteByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeListCombinedInput(json: string): TurmaDisponibilidadeListCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeListCombinedInput"));
    }

    public static turmaDisponibilidadeListCombinedInputToJson(value: TurmaDisponibilidadeListCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeListCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeListCombinedSuccessOutput(json: string): TurmaDisponibilidadeListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeListCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeListCombinedSuccessOutputToJson(value: TurmaDisponibilidadeListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeListCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindByIDCombinedInput(json: string): TurmaDisponibilidadeDiaFindByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindByIDCombinedInput"));
    }

    public static turmaDisponibilidadeDiaFindByIDCombinedInputToJson(value: TurmaDisponibilidadeDiaFindByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaFindByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaCreateCombinedInput(json: string): TurmaDisponibilidadeDiaCreateCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaCreateCombinedInput"));
    }

    public static turmaDisponibilidadeDiaCreateCombinedInputToJson(value: TurmaDisponibilidadeDiaCreateCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaCreateCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaCreateCombinedSuccessOutput(json: string): TurmaDisponibilidadeDiaCreateCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaCreateCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaCreateCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDiaCreateCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaCreateCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaUpdateByIDCombinedInput(json: string): TurmaDisponibilidadeDiaUpdateByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaUpdateByIDCombinedInput"));
    }

    public static turmaDisponibilidadeDiaUpdateByIDCombinedInputToJson(value: TurmaDisponibilidadeDiaUpdateByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaUpdateByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaDeleteByIDCombinedInput(json: string): TurmaDisponibilidadeDiaDeleteByIDCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaDeleteByIDCombinedInput"));
    }

    public static turmaDisponibilidadeDiaDeleteByIDCombinedInputToJson(value: TurmaDisponibilidadeDiaDeleteByIDCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaDeleteByIDCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput(json: string): TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaListCombinedInput(json: string): TurmaDisponibilidadeDiaListCombinedInput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaListCombinedInput"));
    }

    public static turmaDisponibilidadeDiaListCombinedInputToJson(value: TurmaDisponibilidadeDiaListCombinedInput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaListCombinedInput")), null, 2);
    }

    public static toTurmaDisponibilidadeDiaListCombinedSuccessOutput(json: string): TurmaDisponibilidadeDiaListCombinedSuccessOutput {
        return cast(JSON.parse(json), r("TurmaDisponibilidadeDiaListCombinedSuccessOutput"));
    }

    public static turmaDisponibilidadeDiaListCombinedSuccessOutputToJson(value: TurmaDisponibilidadeDiaListCombinedSuccessOutput): string {
        return JSON.stringify(uncast(value, r("TurmaDisponibilidadeDiaListCombinedSuccessOutput")), null, 2);
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
    "AuthLoginCombinedInput": o([
        { json: "body", js: "body", typ: r("AuthLoginInput") },
    ], false),
    "AuthLoginInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], false),
    "AuthLoginCombinedSuccessOutput": o([
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
    "AuthRefreshCombinedInput": o([
        { json: "body", js: "body", typ: r("AuthRefreshInput") },
    ], false),
    "AuthRefreshInput": o([
        { json: "refreshToken", js: "refreshToken", typ: "" },
    ], false),
    "AuthRefreshCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AuthSessionCredentials") },
    ], false),
    "AuthWhoAmICombinedInput": o([
    ], false),
    "AuthWhoAmICombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AuthWhoAmIResult") },
    ], false),
    "AuthWhoAmIResult": o([
        { json: "usuario", js: "usuario", typ: u(r("UsuarioFindOneResult"), null) },
        { json: "vinculosAtivos", js: "vinculosAtivos", typ: a(r("VinculoFindOneResult")) },
    ], false),
    "UsuarioFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "email", js: "email", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("Imagem"), null) },
        { json: "imagemPerfil", js: "imagemPerfil", typ: u(r("Imagem"), null) },
        { json: "isSuperUser", js: "isSuperUser", typ: true },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "Imagem": o([
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
    "AuthSetInitialPasswordCombinedInput": o([
        { json: "body", js: "body", typ: r("AuthSetInitialPasswordInput") },
    ], false),
    "AuthSetInitialPasswordInput": o([
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "senha", js: "senha", typ: "" },
    ], false),
    "AuthSetInitialPasswordCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
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
    ], false),
    "ImagemFindOneResult": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "versoes", js: "versoes", typ: a(r("ImagemArquivoFindOneFromImagemResult")) },
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
    "Ambiente": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneResult") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "descricao", js: "descricao", typ: u(null, "") },
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
        { json: "descricao", js: "descricao", typ: u(null, "") },
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
    "IntervaloDeTempo": o([
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "periodoFim", js: "periodoFim", typ: "" },
        { json: "periodoInicio", js: "periodoInicio", typ: "" },
    ], false),
    "CalendarioLetivo": o([
        { json: "ano", js: "ano", typ: 0 },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "Diario": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "ativo", js: "ativo", typ: true },
        { json: "calendarioLetivo", js: "calendarioLetivo", typ: r("CalendarioLetivoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], false),
    "CalendarioLetivoFindOneResult": o([
        { json: "ano", js: "ano", typ: 0 },
        { json: "campus", js: "campus", typ: r("CampusFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneResult"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "DisciplinaFindOneResult": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
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
    "DiarioProfessor": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], false),
    "DiarioFindOneResult": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneResult"), null) },
        { json: "calendarioLetivo", js: "calendarioLetivo", typ: r("CalendarioLetivoFindOneResult") },
        { json: "dateCreated", js: "dateCreated", typ: Date },
        { json: "dateDeleted", js: "dateDeleted", typ: u(Date, null) },
        { json: "dateUpdated", js: "dateUpdated", typ: Date },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "imagemCapa", js: "imagemCapa", typ: u(r("ImagemFindOneResult"), null) },
        { json: "turma", js: "turma", typ: r("TurmaFindOneResult") },
    ], false),
    "DiarioProfessorFindOneInput": o([
        { json: "id", js: "id", typ: "" },
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
    "ArquivoGetFileCombinedInput": o([
        { json: "queries", js: "queries", typ: r("ArquivoGetFileCombinedInputQueries") },
    ], false),
    "ArquivoGetFileCombinedInputQueries": o([
        { json: "idRecurso", js: "idRecurso", typ: "" },
        { json: "nomeRecurso", js: "nomeRecurso", typ: "" },
    ], false),
    "ArquivoGetFileCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "UsuarioFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioFindByIDCombinedInputParams") },
    ], false),
    "UsuarioFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("UsuarioInputCreate") },
    ], false),
    "UsuarioInputCreate": o([
        { json: "email", js: "email", typ: "" },
        { json: "matriculaSiape", js: "matriculaSiape", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "UsuarioCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("UsuarioInputUpdate") },
        { json: "params", js: "params", typ: r("UsuarioUpdateByIDCombinedInputParams") },
    ], false),
    "UsuarioInputUpdate": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "matriculaSiape", js: "matriculaSiape", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "UsuarioUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindOneResult") },
    ], false),
    "UsuarioDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioDeleteByIDCombinedInputParams") },
    ], false),
    "UsuarioDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "UsuarioListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("UsuarioListCombinedInputQueries") },
    ], false),
    "UsuarioListCombinedInputQueries": o([
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "UsuarioListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("UsuarioFindAllResult") },
    ], false),
    "UsuarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("UsuarioFindOneResult")) },
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
    "UsuarioGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioGetCoverImageCombinedInputParams") },
    ], false),
    "UsuarioGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "UsuarioSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("UsuarioSetCoverImageCombinedInputParams") },
    ], false),
    "UsuarioSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "UsuarioGetProfileImageCombinedInput": o([
        { json: "params", js: "params", typ: r("UsuarioGetProfileImageCombinedInputParams") },
    ], false),
    "UsuarioGetProfileImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioGetProfileImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "UsuarioSetProfileImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("UsuarioSetProfileImageCombinedInputParams") },
    ], false),
    "UsuarioSetProfileImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "UsuarioSetProfileImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "VinculoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("VinculoFindByIDCombinedInputParams") },
    ], false),
    "VinculoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "VinculoFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("VinculoFindOneResult") },
    ], false),
    "VinculoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("VinculoListCombinedInputQueries") },
    ], false),
    "VinculoListCombinedInputQueries": o([
        { json: "filter.ativo", js: "filter.ativo", typ: u(undefined, a("")) },
        { json: "filter.campus.id", js: "filter.campus.id", typ: u(undefined, a("")) },
        { json: "filter.usuario.id", js: "filter.usuario.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "VinculoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("VinculoFindAllResult") },
    ], false),
    "VinculoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("VinculoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "VinculoUpdateCombinedInput": o([
        { json: "body", js: "body", typ: r("VinculoUpdateInput") },
    ], false),
    "VinculoUpdateInput": o([
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
    "VinculoUpdateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("VinculoFindAllResult") },
    ], false),
    "AmbienteFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteFindByIDCombinedInputParams") },
    ], false),
    "AmbienteFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("AmbienteInputCreate") },
    ], false),
    "AmbienteInputCreate": o([
        { json: "bloco", js: "bloco", typ: r("BlocoFindOneInput") },
        { json: "capacidade", js: "capacidade", typ: u(0, null) },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "descricao", js: "descricao", typ: u(undefined, u(null, "")) },
        { json: "nome", js: "nome", typ: "" },
        { json: "tipo", js: "tipo", typ: u(null, "") },
    ], false),
    "BlocoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("AmbienteInputUpdate") },
        { json: "params", js: "params", typ: r("AmbienteUpdateByIDCombinedInputParams") },
    ], false),
    "AmbienteInputUpdate": o([
        { json: "bloco", js: "bloco", typ: u(undefined, r("BlocoFindOneInput")) },
        { json: "capacidade", js: "capacidade", typ: u(undefined, u(0, null)) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "descricao", js: "descricao", typ: u(undefined, u(null, "")) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "tipo", js: "tipo", typ: u(undefined, u(null, "")) },
    ], false),
    "AmbienteUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindOneResult") },
    ], false),
    "AmbienteDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteDeleteByIDCombinedInputParams") },
    ], false),
    "AmbienteDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "AmbienteListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("AmbienteListCombinedInputQueries") },
    ], false),
    "AmbienteListCombinedInputQueries": o([
        { json: "filter.bloco.campus.id", js: "filter.bloco.campus.id", typ: u(undefined, a("")) },
        { json: "filter.bloco.id", js: "filter.bloco.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "AmbienteListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AmbienteFindAllResult") },
    ], false),
    "AmbienteFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AmbienteFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "AmbienteGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("AmbienteGetCoverImageCombinedInputParams") },
    ], false),
    "AmbienteGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "AmbienteSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("AmbienteSetCoverImageCombinedInputParams") },
    ], false),
    "AmbienteSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AmbienteSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "BlocoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoFindByIDCombinedInputParams") },
    ], false),
    "BlocoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("BlocoInputCreate") },
    ], false),
    "BlocoInputCreate": o([
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "codigo", js: "codigo", typ: "" },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "BlocoCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("BlocoInputUpdate") },
        { json: "params", js: "params", typ: r("BlocoUpdateByIDCombinedInputParams") },
    ], false),
    "BlocoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "codigo", js: "codigo", typ: u(undefined, "") },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "BlocoUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindOneResult") },
    ], false),
    "BlocoDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoDeleteByIDCombinedInputParams") },
    ], false),
    "BlocoDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "BlocoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("BlocoListCombinedInputQueries") },
    ], false),
    "BlocoListCombinedInputQueries": o([
        { json: "filter.campus.id", js: "filter.campus.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "BlocoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("BlocoFindAllResult") },
    ], false),
    "BlocoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("BlocoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "BlocoGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("BlocoGetCoverImageCombinedInputParams") },
    ], false),
    "BlocoGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "BlocoSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("BlocoSetCoverImageCombinedInputParams") },
    ], false),
    "BlocoSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "BlocoSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CampusFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CampusFindByIDCombinedInputParams") },
    ], false),
    "CampusFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("CampusInputCreate") },
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
    "CampusCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("CampusInputUpdate") },
        { json: "params", js: "params", typ: r("CampusUpdateByIDCombinedInputParams") },
    ], false),
    "CampusInputUpdate": o([
        { json: "apelido", js: "apelido", typ: u(undefined, "") },
        { json: "cnpj", js: "cnpj", typ: u(undefined, "") },
        { json: "endereco", js: "endereco", typ: u(undefined, r("EnderecoInput")) },
        { json: "nomeFantasia", js: "nomeFantasia", typ: u(undefined, "") },
        { json: "razaoSocial", js: "razaoSocial", typ: u(undefined, "") },
    ], false),
    "CampusUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindOneResult") },
    ], false),
    "CampusDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CampusDeleteByIDCombinedInputParams") },
    ], false),
    "CampusDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CampusDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CampusListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("CampusListCombinedInputQueries") },
    ], false),
    "CampusListCombinedInputQueries": o([
        { json: "filter.endereco.cidade.estado.id", js: "filter.endereco.cidade.estado.id", typ: u(undefined, a("")) },
        { json: "filter.endereco.cidade.id", js: "filter.endereco.cidade.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "CampusListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CampusFindAllResult") },
    ], false),
    "CampusFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CampusFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CidadeFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CidadeFindByIDCombinedInputParams") },
    ], false),
    "CidadeFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: 0 },
    ], false),
    "CidadeFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CidadeFindOneResult") },
    ], false),
    "CidadeListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("CidadeListCombinedInputQueries") },
    ], false),
    "CidadeListCombinedInputQueries": o([
        { json: "filter.estado.id", js: "filter.estado.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "CidadeListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CidadeFindAllResult") },
    ], false),
    "CidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "EstadoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("EstadoFindByIDCombinedInputParams") },
    ], false),
    "EstadoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: 0 },
    ], false),
    "EstadoFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EstadoFindOneResult") },
    ], false),
    "EstadoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("EstadoListCombinedInputQueries") },
    ], false),
    "EstadoListCombinedInputQueries": o([
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "EstadoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EstadoFindAllResult") },
    ], false),
    "EstadoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EstadoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "ReservaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("ReservaFindByIDCombinedInputParams") },
    ], false),
    "ReservaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaFindByIDCombinedSuccessOutput": o([
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
    "ReservaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("ReservaInputCreate") },
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
    "ReservaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindOneResult") },
    ], false),
    "ReservaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("ReservaInputUpdate") },
        { json: "params", js: "params", typ: r("ReservaUpdateByIDCombinedInputParams") },
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
    "ReservaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindOneResult") },
    ], false),
    "ReservaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("ReservaDeleteByIDCombinedInputParams") },
    ], false),
    "ReservaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ReservaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "ReservaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("ReservaListCombinedInputQueries") },
    ], false),
    "ReservaListCombinedInputQueries": o([
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "ReservaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ReservaFindAllResult") },
    ], false),
    "ReservaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ReservaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CursoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoFindByIDCombinedInputParams") },
    ], false),
    "CursoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("CursoInputCreate") },
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
    "CursoCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("CursoInputUpdate") },
        { json: "params", js: "params", typ: r("CursoUpdateByIDCombinedInputParams") },
    ], false),
    "CursoInputUpdate": o([
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, r("ModalidadeFindOneInput")) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], false),
    "CursoUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindOneResult") },
    ], false),
    "CursoDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoDeleteByIDCombinedInputParams") },
    ], false),
    "CursoDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CursoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("CursoListCombinedInputQueries") },
    ], false),
    "CursoListCombinedInputQueries": o([
        { json: "filter.campus.id", js: "filter.campus.id", typ: u(undefined, a("")) },
        { json: "filter.modalidade.id", js: "filter.modalidade.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "CursoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CursoFindAllResult") },
    ], false),
    "CursoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CursoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "CursoGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("CursoGetCoverImageCombinedInputParams") },
    ], false),
    "CursoGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "CursoSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("CursoSetCoverImageCombinedInputParams") },
    ], false),
    "CursoSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CursoSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "ModalidadeFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("ModalidadeFindByIDCombinedInputParams") },
    ], false),
    "ModalidadeFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("ModalidadeInputCreate") },
    ], false),
    "ModalidadeInputCreate": o([
        { json: "nome", js: "nome", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "ModalidadeCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("ModalidadeInputUpdate") },
        { json: "params", js: "params", typ: r("ModalidadeUpdateByIDCombinedInputParams") },
    ], false),
    "ModalidadeInputUpdate": o([
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "slug", js: "slug", typ: u(undefined, "") },
    ], false),
    "ModalidadeUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindOneResult") },
    ], false),
    "ModalidadeDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("ModalidadeDeleteByIDCombinedInputParams") },
    ], false),
    "ModalidadeDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "ModalidadeDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "ModalidadeListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("ModalidadeListCombinedInputQueries") },
    ], false),
    "ModalidadeListCombinedInputQueries": o([
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "ModalidadeListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("ModalidadeFindAllResult") },
    ], false),
    "ModalidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("ModalidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DisciplinaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaFindByIDCombinedInputParams") },
    ], false),
    "DisciplinaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("DisciplinaInputCreate") },
    ], false),
    "DisciplinaInputCreate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: 0 },
        { json: "nome", js: "nome", typ: "" },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: "" },
    ], false),
    "DisciplinaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("DisciplinaInputUpdate") },
        { json: "params", js: "params", typ: r("DisciplinaUpdateByIDCombinedInputParams") },
    ], false),
    "DisciplinaInputUpdate": o([
        { json: "cargaHoraria", js: "cargaHoraria", typ: u(undefined, 0) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
        { json: "nomeAbreviado", js: "nomeAbreviado", typ: u(undefined, "") },
    ], false),
    "DisciplinaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindOneResult") },
    ], false),
    "DisciplinaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaDeleteByIDCombinedInputParams") },
    ], false),
    "DisciplinaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DisciplinaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("DisciplinaListCombinedInputQueries") },
    ], false),
    "DisciplinaListCombinedInputQueries": o([
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "DisciplinaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DisciplinaFindAllResult") },
    ], false),
    "DisciplinaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DisciplinaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DisciplinaGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("DisciplinaGetCoverImageCombinedInputParams") },
    ], false),
    "DisciplinaGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "DisciplinaSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("DisciplinaSetCoverImageCombinedInputParams") },
    ], false),
    "DisciplinaSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaFindByIDCombinedInputParams") },
    ], false),
    "TurmaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaInputCreate") },
    ], false),
    "TurmaInputCreate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "curso", js: "curso", typ: r("CursoFindOneInput") },
        { json: "periodo", js: "periodo", typ: "" },
    ], false),
    "CursoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaUpdateByIDCombinedInputParams") },
    ], false),
    "TurmaInputUpdate": o([
        { json: "ambientePadraoAula", js: "ambientePadraoAula", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "curso", js: "curso", typ: u(undefined, r("CursoFindOneInput")) },
        { json: "periodo", js: "periodo", typ: u(undefined, "") },
    ], false),
    "TurmaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindOneResult") },
    ], false),
    "TurmaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDeleteByIDCombinedInputParams") },
    ], false),
    "TurmaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("TurmaListCombinedInputQueries") },
    ], false),
    "TurmaListCombinedInputQueries": o([
        { json: "filter.ambientePadraoAula.capacidade", js: "filter.ambientePadraoAula.capacidade", typ: u(undefined, a("")) },
        { json: "filter.ambientePadraoAula.codigo", js: "filter.ambientePadraoAula.codigo", typ: u(undefined, a("")) },
        { json: "filter.ambientePadraoAula.nome", js: "filter.ambientePadraoAula.nome", typ: u(undefined, a("")) },
        { json: "filter.ambientePadraoAula.tipo", js: "filter.ambientePadraoAula.tipo", typ: u(undefined, a("")) },
        { json: "filter.curso.campus.id", js: "filter.curso.campus.id", typ: u(undefined, a("")) },
        { json: "filter.curso.modalidade.id", js: "filter.curso.modalidade.id", typ: u(undefined, a("")) },
        { json: "filter.curso.nome", js: "filter.curso.nome", typ: u(undefined, a("")) },
        { json: "filter.curso.nomeAbreviado", js: "filter.curso.nomeAbreviado", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "TurmaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaFindAllResult") },
    ], false),
    "TurmaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaGetCoverImageCombinedInputParams") },
    ], false),
    "TurmaGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "TurmaSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("TurmaSetCoverImageCombinedInputParams") },
    ], false),
    "TurmaSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CalendarioLetivoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CalendarioLetivoFindByIDCombinedInputParams") },
    ], false),
    "CalendarioLetivoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoInputCreate") },
    ], false),
    "CalendarioLetivoInputCreate": o([
        { json: "ano", js: "ano", typ: 0 },
        { json: "campus", js: "campus", typ: r("CampusFindOneInput") },
        { json: "modalidade", js: "modalidade", typ: u(r("ModalidadeFindOneInput"), null) },
        { json: "nome", js: "nome", typ: "" },
    ], false),
    "CalendarioLetivoCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoInputUpdate") },
        { json: "params", js: "params", typ: r("CalendarioLetivoUpdateByIDCombinedInputParams") },
    ], false),
    "CalendarioLetivoInputUpdate": o([
        { json: "ano", js: "ano", typ: u(undefined, 0) },
        { json: "campus", js: "campus", typ: u(undefined, r("CampusFindOneInput")) },
        { json: "modalidade", js: "modalidade", typ: u(undefined, u(r("ModalidadeFindOneInput"), null)) },
        { json: "nome", js: "nome", typ: u(undefined, "") },
    ], false),
    "CalendarioLetivoUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindOneResult") },
    ], false),
    "CalendarioLetivoDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("CalendarioLetivoDeleteByIDCombinedInputParams") },
    ], false),
    "CalendarioLetivoDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "CalendarioLetivoDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "CalendarioLetivoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("CalendarioLetivoListCombinedInputQueries") },
    ], false),
    "CalendarioLetivoListCombinedInputQueries": o([
        { json: "filter.campus.id", js: "filter.campus.id", typ: u(undefined, a("")) },
        { json: "filter.modalidade.id", js: "filter.modalidade.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "CalendarioLetivoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("CalendarioLetivoFindAllResult") },
    ], false),
    "CalendarioLetivoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("CalendarioLetivoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiarioFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioFindByIDCombinedInputParams") },
    ], false),
    "DiarioFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioInputCreate") },
    ], false),
    "DiarioInputCreate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(r("AmbienteFindOneInput"), null) },
        { json: "ativo", js: "ativo", typ: u(undefined, true) },
        { json: "calendarioLetivo", js: "calendarioLetivo", typ: r("CalendarioLetivoFindOneInput") },
        { json: "disciplina", js: "disciplina", typ: r("DisciplinaFindOneInput") },
        { json: "turma", js: "turma", typ: r("TurmaFindOneInput") },
    ], false),
    "CalendarioLetivoFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DisciplinaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioInputUpdate") },
        { json: "params", js: "params", typ: r("DiarioUpdateByIDCombinedInputParams") },
    ], false),
    "DiarioInputUpdate": o([
        { json: "ambientePadrao", js: "ambientePadrao", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "ativo", js: "ativo", typ: u(undefined, true) },
        { json: "calendarioLetivo", js: "calendarioLetivo", typ: u(undefined, r("CalendarioLetivoFindOneInput")) },
        { json: "disciplina", js: "disciplina", typ: u(undefined, r("DisciplinaFindOneInput")) },
        { json: "turma", js: "turma", typ: u(undefined, r("TurmaFindOneInput")) },
    ], false),
    "DiarioUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindOneResult") },
    ], false),
    "DiarioDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioDeleteByIDCombinedInputParams") },
    ], false),
    "DiarioDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiarioListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("DiarioListCombinedInputQueries") },
    ], false),
    "DiarioListCombinedInputQueries": o([
        { json: "filter.ambientePadrao.id", js: "filter.ambientePadrao.id", typ: u(undefined, a("")) },
        { json: "filter.calendarioLetivo.id", js: "filter.calendarioLetivo.id", typ: u(undefined, a("")) },
        { json: "filter.disciplina.id", js: "filter.disciplina.id", typ: u(undefined, a("")) },
        { json: "filter.turma.id", js: "filter.turma.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "DiarioListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioFindAllResult") },
    ], false),
    "DiarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiarioGetCoverImageCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioGetCoverImageCombinedInputParams") },
    ], false),
    "DiarioGetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioGetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: "" },
    ], false),
    "DiarioSetCoverImageCombinedInput": o([
        { json: "body", js: "body", typ: "" },
        { json: "params", js: "params", typ: r("DiarioSetCoverImageCombinedInputParams") },
    ], false),
    "DiarioSetCoverImageCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioSetCoverImageCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiarioProfessorFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioProfessorFindByIDCombinedInputParams") },
    ], false),
    "DiarioProfessorFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorFindOneResult": o([
        { json: "diario", js: "diario", typ: r("DiarioFindOneResult") },
        { json: "id", js: "id", typ: "" },
        { json: "situacao", js: "situacao", typ: true },
        { json: "vinculo", js: "vinculo", typ: r("VinculoFindOneResult") },
    ], false),
    "DiarioProfessorCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorInputCreate") },
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
    "DiarioProfessorCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorInputUpdate") },
        { json: "params", js: "params", typ: r("DiarioProfessorUpdateByIDCombinedInputParams") },
    ], false),
    "DiarioProfessorInputUpdate": o([
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "situacao", js: "situacao", typ: u(undefined, true) },
        { json: "vinculo", js: "vinculo", typ: u(undefined, r("VinculoFindOneInput")) },
    ], false),
    "DiarioProfessorUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindOneResult") },
    ], false),
    "DiarioProfessorDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiarioProfessorDeleteByIDCombinedInputParams") },
    ], false),
    "DiarioProfessorDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiarioProfessorDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiarioProfessorListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("DiarioProfessorListCombinedInputQueries") },
    ], false),
    "DiarioProfessorListCombinedInputQueries": o([
        { json: "filter.diario.id", js: "filter.diario.id", typ: u(undefined, a("")) },
        { json: "filter.vinculo.id", js: "filter.vinculo.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "DiarioProfessorListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiarioProfessorFindAllResult") },
    ], false),
    "DiarioProfessorFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiarioProfessorFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "DiaCalendarioFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiaCalendarioFindByIDCombinedInputParams") },
    ], false),
    "DiaCalendarioFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioFindByIDCombinedSuccessOutput": o([
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
    "DiaCalendarioCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioInputCreate") },
    ], false),
    "DiaCalendarioInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "data", js: "data", typ: Date },
        { json: "diaLetivo", js: "diaLetivo", typ: true },
        { json: "feriado", js: "feriado", typ: true },
    ], false),
    "DiaCalendarioCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindOneResult") },
    ], false),
    "DiaCalendarioUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioInputUpdate") },
        { json: "params", js: "params", typ: r("DiaCalendarioUpdateByIDCombinedInputParams") },
    ], false),
    "DiaCalendarioInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diaLetivo", js: "diaLetivo", typ: u(undefined, true) },
        { json: "feriado", js: "feriado", typ: u(undefined, true) },
    ], false),
    "DiaCalendarioUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindOneResult") },
    ], false),
    "DiaCalendarioDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("DiaCalendarioDeleteByIDCombinedInputParams") },
    ], false),
    "DiaCalendarioDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "DiaCalendarioDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "DiaCalendarioListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("DiaCalendarioListCombinedInputQueries") },
    ], false),
    "DiaCalendarioListCombinedInputQueries": o([
        { json: "filter.calendario.id", js: "filter.calendario.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "DiaCalendarioListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("DiaCalendarioFindAllResult") },
    ], false),
    "DiaCalendarioFindAllResult": o([
        { json: "data", js: "data", typ: a(r("DiaCalendarioFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "EtapaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("EtapaFindByIDCombinedInputParams") },
    ], false),
    "EtapaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaFindByIDCombinedSuccessOutput": o([
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
    "EtapaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("EtapaInputCreate") },
    ], false),
    "EtapaInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "numero", js: "numero", typ: u(0, null) },
    ], false),
    "EtapaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindOneResult") },
    ], false),
    "EtapaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("EtapaInputUpdate") },
        { json: "params", js: "params", typ: r("EtapaUpdateByIDCombinedInputParams") },
    ], false),
    "EtapaInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "numero", js: "numero", typ: u(undefined, u(0, null)) },
    ], false),
    "EtapaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindOneResult") },
    ], false),
    "EtapaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("EtapaDeleteByIDCombinedInputParams") },
    ], false),
    "EtapaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EtapaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "EtapaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("EtapaListCombinedInputQueries") },
    ], false),
    "EtapaListCombinedInputQueries": o([
        { json: "filter.calendario.id", js: "filter.calendario.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "EtapaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EtapaFindAllResult") },
    ], false),
    "EtapaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EtapaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "AulaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("AulaFindByIDCombinedInputParams") },
    ], false),
    "AulaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaFindByIDCombinedSuccessOutput": o([
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
    "AulaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("AulaInputCreate") },
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
    "AulaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindOneResult") },
    ], false),
    "AulaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("AulaInputUpdate") },
        { json: "params", js: "params", typ: r("AulaUpdateByIDCombinedInputParams") },
    ], false),
    "AulaInputUpdate": o([
        { json: "ambiente", js: "ambiente", typ: u(undefined, u(r("AmbienteFindOneInput"), null)) },
        { json: "data", js: "data", typ: u(undefined, Date) },
        { json: "diario", js: "diario", typ: u(undefined, r("DiarioFindOneInput")) },
        { json: "formato", js: "formato", typ: u(undefined, u(null, "")) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, r("IntervaloDeTempoInput")) },
    ], false),
    "AulaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindOneResult") },
    ], false),
    "AulaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("AulaDeleteByIDCombinedInputParams") },
    ], false),
    "AulaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "AulaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "AulaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("AulaListCombinedInputQueries") },
    ], false),
    "AulaListCombinedInputQueries": o([
        { json: "filter.ambiente.id", js: "filter.ambiente.id", typ: u(undefined, a("")) },
        { json: "filter.diario.id", js: "filter.diario.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "AulaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("AulaFindAllResult") },
    ], false),
    "AulaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("AulaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "EventoFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("EventoFindByIDCombinedInputParams") },
    ], false),
    "EventoFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoFindByIDCombinedSuccessOutput": o([
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
    "EventoCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("EventoInputCreate") },
    ], false),
    "EventoInputCreate": o([
        { json: "calendario", js: "calendario", typ: u(r("CalendarioLetivoFindOneInput"), null) },
        { json: "cor", js: "cor", typ: u(null, "") },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "dataTermino", js: "dataTermino", typ: Date },
        { json: "nome", js: "nome", typ: u(null, "") },
    ], false),
    "EventoCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindOneResult") },
    ], false),
    "EventoUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("EventoInputUpdate") },
        { json: "params", js: "params", typ: r("EventoUpdateByIDCombinedInputParams") },
    ], false),
    "EventoInputUpdate": o([
        { json: "calendario", js: "calendario", typ: u(undefined, u(r("CalendarioLetivoFindOneInput"), null)) },
        { json: "cor", js: "cor", typ: u(undefined, u(null, "")) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "dataTermino", js: "dataTermino", typ: u(undefined, Date) },
        { json: "nome", js: "nome", typ: u(undefined, u(null, "")) },
    ], false),
    "EventoUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindOneResult") },
    ], false),
    "EventoDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("EventoDeleteByIDCombinedInputParams") },
    ], false),
    "EventoDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "EventoDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "EventoListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("EventoListCombinedInputQueries") },
    ], false),
    "EventoListCombinedInputQueries": o([
        { json: "filter.calendario.id", js: "filter.calendario.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "EventoListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("EventoFindAllResult") },
    ], false),
    "EventoFindAllResult": o([
        { json: "data", js: "data", typ: a(r("EventoFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaDisponibilidadeFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeFindByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeInputCreate") },
    ], false),
    "TurmaDisponibilidadeInputCreate": o([
        { json: "dataFim", js: "dataFim", typ: u(Date, null) },
        { json: "dataInicio", js: "dataInicio", typ: Date },
        { json: "turma", js: "turma", typ: u(r("TurmaFindOneInput"), null) },
    ], false),
    "TurmaDisponibilidadeCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeUpdateByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeInputUpdate": o([
        { json: "dataFim", js: "dataFim", typ: u(undefined, u(Date, null)) },
        { json: "dataInicio", js: "dataInicio", typ: u(undefined, Date) },
        { json: "turma", js: "turma", typ: u(undefined, u(r("TurmaFindOneInput"), null)) },
    ], false),
    "TurmaDisponibilidadeUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDeleteByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaDisponibilidadeListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeListCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeListCombinedInputQueries": o([
        { json: "filter.turma.id", js: "filter.turma.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "TurmaDisponibilidadeListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeFindAllResult") },
    ], false),
    "TurmaDisponibilidadeFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaFindByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaFindByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaFindOneResult": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(r("IntervaloDeTempoFindOneResult"), null) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(r("TurmaDisponibilidadeFindOneResult"), null) },
    ], false),
    "TurmaDisponibilidadeDiaCreateCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaInputCreate") },
    ], false),
    "TurmaDisponibilidadeDiaInputCreate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: 0 },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(r("IntervaloDeTempoInput"), null) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(r("TurmaDisponibilidadeFindOneInput"), null) },
    ], false),
    "TurmaDisponibilidadeFindOneInput": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaCreateCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDCombinedInput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaInputUpdate") },
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaUpdateByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeDiaInputUpdate": o([
        { json: "diaSemanaIso", js: "diaSemanaIso", typ: u(undefined, 0) },
        { json: "intervaloDeTempo", js: "intervaloDeTempo", typ: u(undefined, u(r("IntervaloDeTempoInput"), null)) },
        { json: "turmaDisponibilidade", js: "turmaDisponibilidade", typ: u(undefined, u(r("TurmaDisponibilidadeFindOneInput"), null)) },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaUpdateByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindOneResult") },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDCombinedInput": o([
        { json: "params", js: "params", typ: r("TurmaDisponibilidadeDiaDeleteByIDCombinedInputParams") },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDCombinedInputParams": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "TurmaDisponibilidadeDiaDeleteByIDCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: true },
    ], false),
    "TurmaDisponibilidadeDiaListCombinedInput": o([
        { json: "queries", js: "queries", typ: r("TurmaDisponibilidadeDiaListCombinedInputQueries") },
    ], false),
    "TurmaDisponibilidadeDiaListCombinedInputQueries": o([
        { json: "filter.intervaloDeTempo.id", js: "filter.intervaloDeTempo.id", typ: u(undefined, a("")) },
        { json: "filter.turmaDisponibilidade.id", js: "filter.turmaDisponibilidade.id", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, 0) },
        { json: "page", js: "page", typ: u(undefined, 0) },
        { json: "search", js: "search", typ: u(undefined, "") },
        { json: "sortBy", js: "sortBy", typ: u(undefined, a("")) },
    ], false),
    "TurmaDisponibilidadeDiaListCombinedSuccessOutput": o([
        { json: "body", js: "body", typ: r("TurmaDisponibilidadeDiaFindAllResult") },
    ], false),
    "TurmaDisponibilidadeDiaFindAllResult": o([
        { json: "data", js: "data", typ: a(r("TurmaDisponibilidadeDiaFindOneResult")) },
        { json: "links", js: "links", typ: r("PaginatedResultLinks") },
        { json: "meta", js: "meta", typ: r("PaginatedResultMeta") },
    ], false),
};
