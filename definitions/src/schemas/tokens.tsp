using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

@doc("Define os nomes de indentificação das entidades.")
enum Tokens {
  Shared_SearchInput_View: "SearchInputView",
  Shared_Pagination_SortBy_View: "PaginatedSortByView",
  Shared_Pagination_Filter_View: "PaginatedFilterView",
  Shared_Pagination_Input_View: "PaginatedInputView",
  Shared_Pagination_Input_Base_View: "PaginatedInputBaseView",
  Shared_Pagination_Result_Meta_View: "PaginatedResultMetaView",
  Shared_Pagination_Result_Links_View: "PaginatedResultLinksView",
  Shared_Pagination_Result_View: "PaginatedResultView",

  //

  Arquivo: "Arquivo",

  Arquivo_View: "ArquivoView",
  Arquivo_FindOneInput_View: "ArquivoFindOneInputView",
  Arquivo_FindOneResult_View: "ArquivoFindOneResultView",
  Arquivo_Operations_GetFile: "ArquivoGetFile",

  //

  Usuario: "Usuario",

  Usuario_View: "UsuarioView",
  Usuario_FindOneInput_View: "UsuarioFindOneInputView",
  Usuario_FindOneResult_View: "UsuarioFindOneResultView",
  Usuario_ListResult_View: "UsuarioListResultView",
  Usuario_InputCreate_View: "UsuarioInputCreateView",
  Usuario_InputUpdate_View: "UsuarioInputUpdateView",
  Usuario_Operations_FindOneById: "UsuarioFindOneById",
  Usuario_Operations_DeleteOneById: "UsuarioDeleteOneById",
  Usuario_Operations_List: "UsuarioList",
  Usuario_Operations_Create: "UsuarioCreate",
  Usuario_Operations_UpdateOneById: "UsuarioUpdateOneById",
  Usuario_Operations_GetImagemCapa: "UsuarioGetImagemCapa",
  Usuario_Operations_SetImagemCapa: "UsuarioSetImagemCapa",
  Usuario_Operations_GetImagemPerfil: "UsuarioGetImagemPerfil",
  Usuario_Operations_SetImagemPerfil: "UsuarioSetImagemPerfil",

  //
  Auth_LoginInput_View: "AuthLoginInputView",

  Auth_WhoAmIResult_View: "AuthWhoAmIInputView",
  Auth_RefreshInput_View: "AuthRefreshInputView",
  Auth_SessionCredentials_View: "AuthSessionCredentialsView",
  Auth_SetInitialPasswordInput_View: "AuthSetInitialPasswordInputView",
  Auth_Operations_Login: "AuthLogin",
  Auth_Operations_Refresh: "AuthRefresh",
  Auth_Operations_WhoAmI: "AuthWhoAmI",
  Auth_Operations_SetInitialPassword: "AuthSetInitialPassword",

  //

  Imagem: "Imagem",

  Imagem_View: "ImagemView",
  Imagem_FindOneInput_View: "ImagemFindOneInputView",
  Imagem_FindOneResult_View: "ImagemFindOneResultView",
  Imagem_FindOneFromImagemArquivoResult_View: "ImageFindOneFromImagemArquivoResultView",
  Imagem_Operations_GetImagem: "GetImagem",
  Imagem_Operations_SetImagem: "SetImagem",

  //

  ImagemArquivo: "ImagemArquivo",

  ImagemArquivo_View: "ImagemArquivoView",
  ImagemArquivo_FindOneInput_View: "ImagemArquivoFindOneInputView",
  ImagemArquivo_FindOneResult_View: "ImagemArquivoFindOneResultView",
  ImagemArquivo_FindOneFromImagemResult_View: "ImagemArquivoFindOneFromImagemResultView",

  //

  IntervaloDeTempo: "IntervaloDeTempo",

  IntervaloDeTempo_View: "IntervaloDeTempoView",
  IntervaloDeTempo_FindOneResult_View: "IntervaloDeTempoFindOneResultView",
  IntervaloDeTempo_Input_View: "IntervaloDeTempoInputView",

  //

  Estado: "Estado",

  Estado_View: "EstadoView",
  Estado_FindOneInput_View: "EstadoFindOneInputView",
  Estado_FindOneResult_View: "EstadoFindOneResultView",
  Estado_ListResult_View: "EstadoListResultView",
  Estado_Operations_FindOneById: "EstadoFindOneById",
  Estado_Operations_List: "EstadoList",

  //

  Cidade: "Cidade",

  Cidade_View: "CidadeView",
  Cidade_FindOneInput_View: "CidadeFindOneInputView",
  Cidade_FindOneResult_View: "CidadeFindOneResultView",
  Cidade_ListResult_View: "CidadeListResultView",
  Cidade_Operations_FindOneById: "CidadeFindOneById",
  Cidade_Operations_List: "CidadeList",

  //

  Endereco: "Endereco",

  Endereco_View: "EnderecoView",
  Endereco_FindOneInput_View: "EnderecoFindOneInputView",
  Endereco_FindOneResult_View: "EnderecoFindOneResultView",
  Endereco_Operations_FindOneById: "EnderecoFindOneById",
  Endereco_Input_View: "EnderecoInputView",

  //
  Campus: "Campus",

  Campus_View: "CampusView",
  Campus_FindOneInput_View: "CampusFindOneInputView",
  Campus_FindOneResult_View: "CampusFindOneResultView",
  Campus_ListResult_View: "CampusListResultView",
  Campus_InputUpdate_View: "CampusInputUpdateView",
  Campus_InputCreate_View: "CampusInputCreateView",
  Campus_Operations_FindOneById: "CampusFindOneById",
  Campus_Operations_DeleteOneById: "CampusDeleteOneById",
  Campus_Operations_List: "CampusList",
  Campus_Operations_Create: "CampusCreate",
  Campus_Operations_UpdateOneById: "CampusUpdateOneById",

  //
  Bloco: "Bloco",

  Bloco_View: "BlocoView",
  Bloco_InputUpdate_View: "BlocoInputUpdateView",
  Bloco_InputCreate_View: "BlocoInputCreateView",
  Bloco_FindOneInput_View: "BlocoFindOneInputView",
  Bloco_FindOneResult_View: "BlocoFindOneResultView",
  Bloco_ListResult_View: "BlocoListResultView",
  Bloco_Operations_FindOneById: "BlocoFindOneById",
  Bloco_Operations_DeleteOneById: "BlocoDeleteOneById",
  Bloco_Operations_List: "BlocoList",
  Bloco_Operations_Create: "BlocoCreate",
  Bloco_Operations_UpdateOneById: "BlocoUpdateOneById",
  Bloco_Operations_GetImagemCapa: "BlocoGetImagemCapa",
  Bloco_Operations_SetImagemCapa: "BlocoSetImagemCapa",

  //
  Ambiente: "Ambiente",

  Ambiente_View: "AmbienteView",
  Ambiente_FindOneInput_View: "AmbienteFindOneInputView",
  Ambiente_FindOneResult_View: "AmbienteFindOneResultView",
  Ambiente_ListResult_View: "AmbienteListResultView",
  Ambiente_InputUpdate_View: "AmbienteInputUpdateView",
  Ambiente_InputCreate_View: "AmbienteInputCreateView",
  Ambiente_Operations_FindOneById: "AmbienteFindOneById",
  Ambiente_Operations_DeleteOneById: "AmbienteDeleteOneById",
  Ambiente_Operations_List: "AmbienteList",
  Ambiente_Operations_Create: "AmbienteCreate",
  Ambiente_Operations_UpdateOneById: "AmbienteUpdateOneById",
  Ambiente_Operations_GetImagemCapa: "AmbienteGetImagemCapa",
  Ambiente_Operations_SetImagemCapa: "AmbienteSetImagemCapa",

  //

  Perfil: "Perfil",

  Perfil_View: "PerfilView",
  Perfil_FindOneInput_View: "PerfilFindOneInputView",
  Perfil_FindOneResult_View: "PerfilFindOneResultView",
  Perfil_ListResult_View: "PerfilListResultView",
  Perfil_InputUpdate_View: "PerfilInputUpdateView",
  Perfil_InputCreate_View: "PerfilInputCreateView",
  Perfil_Operations_FindOneById: "PerfilFindOneById",
  Perfil_Operations_DeleteOneById: "PerfilDeleteOneById",
  Perfil_Operations_List: "PerfilList",
  Perfil_Operations_Create: "PerfilCreate",
  Perfil_Operations_UpdateOneById: "PerfilUpdateOneById",

  //
  NivelDeFormacao: "NivelDeFormacao",

  NivelDeFormacao_View: "NivelDeFormacaoView",
  NivelDeFormacao_FindOneInput_View: "NivelDeFormacaoFindOneInputView",
  NivelDeFormacao_FindOneResult_View: "NivelDeFormacaoFindOneResultView",
  NivelDeFormacao_ListResult_View: "NivelDeFormacaoListResultView",
  NivelDeFormacao_InputCreate_View: "NivelDeFormacaoInputCreateView",
  NivelDeFormacao_InputUpdate_View: "NivelDeFormacaoInputUpdateView",
  NivelDeFormacao_Operations_FindOneById: "NivelDeFormacaoFindOneById",
  NivelDeFormacao_Operations_DeleteOneById: "NivelDeFormacaoDeleteOneById",
  NivelDeFormacao_Operations_UpdateOneById: "NivelDeFormacaoUpdateOneById",
  NivelDeFormacao_Operations_List: "NivelDeFormacaoList",
  NivelDeFormacao_Operations_Create: "NivelDeFormacaoCreate",

  //
  Modalidade: "Modalidade",

  Modalidade_View: "ModalidadeView",
  Modalidade_FindOneInput_View: "ModalidadeFindOneInputView",
  Modalidade_FindOneResult_View: "ModalidadeFindOneResultView",
  Modalidade_ListResult_View: "ModalidadeListResultView",
  Modalidade_InputCreate_View: "ModalidadeInputCreateView",
  Modalidade_InputUpdate_View: "ModalidadeInputUpdateView",
  Modalidade_Operations_FindOneById: "ModalidadeFindOneById",
  Modalidade_Operations_DeleteOneById: "ModalidadeDeleteOneById",
  Modalidade_Operations_UpdateOneById: "ModalidadeUpdateOneById",
  Modalidade_Operations_List: "ModalidadeList",
  Modalidade_Operations_Create: "ModalidadeCreate",

  //
  OfertaFormacao: "OfertaFormacao",

  OfertaFormacao_View: "OfertaFormacaoView",
  OfertaFormacao_FindOneInput_View: "OfertaFormacaoFindOneInputView",
  OfertaFormacao_FindOneResult_View: "OfertaFormacaoFindOneResultView",
  OfertaFormacao_ListResult_View: "OfertaFormacaoListResultView",
  OfertaFormacao_InputCreate_View: "OfertaFormacaoInputCreateView",
  OfertaFormacao_InputUpdate_View: "OfertaFormacaoInputUpdateView",
  OfertaFormacao_Operations_FindOneById: "OfertaFormacaoFindOneById",
  OfertaFormacao_Operations_DeleteOneById: "OfertaFormacaoDeleteOneById",
  OfertaFormacao_Operations_UpdateOneById: "OfertaFormacaoUpdateOneById",
  OfertaFormacao_Operations_List: "OfertaFormacaoList",
  OfertaFormacao_Operations_Create: "OfertaFormacaoCreate",

  //
  OfertaFormacaoNivelFormacao: "OfertaFormacaoNivelFormacao",

  OfertaFormacaoNivelFormacao_View: "OfertaFormacaoNivelFormacaoView",
  OfertaFormacaoNivelFormacao_FindOneInput_View: "OfertaFormacaoNivelFormacaoFindOneInputView",
  OfertaFormacaoNivelFormacao_FindOneResult_View: "OfertaFormacaoNivelFormacaoFindOneResultView",
  OfertaFormacaoNivelFormacao_ListResult_View: "OfertaFormacaoNivelFormacaoListResultView",
  OfertaFormacaoNivelFormacao_InputCreate_View: "OfertaFormacaoNivelFormacaoInputCreateView",
  OfertaFormacaoNivelFormacao_InputUpdate_View: "OfertaFormacaoNivelFormacaoInputUpdateView",
  OfertaFormacaoNivelFormacao_Operations_FindOneById: "OfertaFormacaoNivelFormacaoFindOneById",
  OfertaFormacaoNivelFormacao_Operations_DeleteOneById: "OfertaFormacaoNivelFormacaoDeleteOneById",
  OfertaFormacaoNivelFormacao_Operations_UpdateOneById: "OfertaFormacaoNivelFormacaoUpdateOneById",
  OfertaFormacaoNivelFormacao_Operations_List: "OfertaFormacaoNivelFormacaoList",
  OfertaFormacaoNivelFormacao_Operations_Create: "OfertaFormacaoNivelFormacaoCreate",

  //
  Curso: "Curso",

  Curso_View: "CursoView",
  Curso_FindOneInput_View: "CursoFindOneInputView",
  Curso_FindOneResult_View: "CursoFindOneResultView",
  Curso_ListResult_View: "CursoListResultView",
  Curso_InputCreate_View: "CursoInputCreateView",
  Curso_InputUpdate_View: "CursoInputUpdateView",
  Curso_Operations_FindOneById: "CursoFindOneById",
  Curso_Operations_DeleteOneById: "CursoDeleteOneById",
  Curso_Operations_UpdateOneById: "CursoUpdateOneById",
  Curso_Operations_List: "CursoList",
  Curso_Operations_Create: "CursoCreate",
  Curso_Operations_GetImagemCapa: "CursoGetImagemCapa",
  Curso_Operations_SetImagemCapa: "CursoSetImagemCapa",

  //
  Disciplina: "Disciplina",

  Disciplina_View: "DisciplinaView",
  Disciplina_FindOneInput_View: "DisciplinaFindOneInputView",
  Disciplina_FindOneResult_View: "DisciplinaFindOneResultView",
  Disciplina_ListResult_View: "DisciplinaListResultView",
  Disciplina_InputCreate_View: "DisciplinaInputCreateView",
  Disciplina_InputUpdate_View: "DisciplinaInputUpdateView",
  Disciplina_Operations_FindOneById: "DisciplinaFindOneById",
  Disciplina_Operations_DeleteOneById: "DisciplinaDeleteOneById",
  Disciplina_Operations_UpdateOneById: "DisciplinaUpdateOneById",
  Disciplina_Operations_List: "DisciplinaList",
  Disciplina_Operations_Create: "DisciplinaCreate",
  Disciplina_Operations_GetImagemCapa: "DisciplinaGetImagemCapa",
  Disciplina_Operations_SetImagemCapa: "DisciplinaSetImagemCapa",

  //
  Turma: "Turma",

  Turma_View: "TurmaView",
  Turma_FindOneInput_View: "TurmaFindOneInputView",
  Turma_FindOneResult_View: "TurmaFindOneResultView",
  Turma_ListResult_View: "TurmaListResultView",
  Turma_InputCreate_View: "TurmaInputCreateView",
  Turma_InputUpdate_View: "TurmaInputUpdateView",
  Turma_Operations_FindOneById: "TurmaFindOneById",
  Turma_Operations_DeleteOneById: "TurmaDeleteOneById",
  Turma_Operations_UpdateOneById: "TurmaUpdateOneById",
  Turma_Operations_List: "TurmaList",
  Turma_Operations_Create: "TurmaCreate",
  Turma_Operations_GetImagemCapa: "TurmaGetImagemCapa",
  Turma_Operations_SetImagemCapa: "TurmaSetImagemCapa",

  //
  CalendarioLetivo: "CalendarioLetivo",

  CalendarioLetivo_View: "CalendarioLetivoView",
  CalendarioLetivo_FindOneInput_View: "CalendarioLetivoFindOneInputView",
  CalendarioLetivo_FindOneResult_View: "CalendarioLetivoFindOneResultView",
  CalendarioLetivo_ListResult_View: "CalendarioLetivoListResultView",
  CalendarioLetivo_InputCreate_View: "CalendarioLetivoInputCreateView",
  CalendarioLetivo_InputUpdate_View: "CalendarioLetivoInputUpdateView",
  CalendarioLetivo_Operations_FindOneById: "CalendarioLetivoFindOneById",
  CalendarioLetivo_Operations_DeleteOneById: "CalendarioLetivoDeleteOneById",
  CalendarioLetivo_Operations_UpdateOneById: "CalendarioLetivoUpdateOneById",
  CalendarioLetivo_Operations_List: "CalendarioLetivoList",
  CalendarioLetivo_Operations_Create: "CalendarioLetivoCreate",

  //
  Reserva: "Reserva",

  Reserva_View: "ReservaView",
  Reserva_FindOneInput_View: "ReservaFindOneInputView",
  Reserva_FindOneResult_View: "ReservaFindOneResultView",
  Reserva_ListResult_View: "ReservaListResultView",
  Reserva_InputUpdate_View: "ReservaInputUpdateView",
  Reserva_InputCreate_View: "ReservaInputCreateView",
  Reserva_Operations_FindOneById: "ReservaFindOneById",
  Reserva_Operations_DeleteOneById: "ReservaDeleteOneById",
  Reserva_Operations_List: "ReservaList",
  Reserva_Operations_Create: "ReservaCreate",
  Reserva_Operations_UpdateOneById: "ReservaUpdateOneById",

  //
  GradeHorarioOfertaFormacao: "GradeHorarioOfertaFormacao",

  GradeHorarioOfertaFormacao_View: "GradeHorarioOfertaFormacaoView",
  GradeHorarioOfertaFormacao_FindOneInput_View: "GradeHorarioOfertaFormacaoFindOneInputView",
  GradeHorarioOfertaFormacao_FindOneResult_View: "GradeHorarioOfertaFormacaoFindOneResultView",
  GradeHorarioOfertaFormacao_ListResult_View: "GradeHorarioOfertaFormacaoListResultView",
  GradeHorarioOfertaFormacao_InputUpdate_View: "GradeHorarioOfertaFormacaoInputUpdateView",
  GradeHorarioOfertaFormacao_InputCreate_View: "GradeHorarioOfertaFormacaoInputCreateView",
  GradeHorarioOfertaFormacao_Operations_FindOneById: "GradeHorarioOfertaFormacaoFindOneById",
  GradeHorarioOfertaFormacao_Operations_DeleteOneById: "GradeHorarioOfertaFormacaoDeleteOneById",
  GradeHorarioOfertaFormacao_Operations_List: "GradeHorarioOfertaFormacaoList",
  GradeHorarioOfertaFormacao_Operations_Create: "GradeHorarioOfertaFormacaoCreate",
  GradeHorarioOfertaFormacao_Operations_UpdateOneById: "GradeHorarioOfertaFormacaoUpdateOneById",

  //
  GradeHorarioOfertaFormacaoIntervaloDeTempo: "GradeHorarioOfertaFormacaoIntervaloDeTempo",

  GradeHorarioOfertaFormacaoIntervaloDeTempo_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_FindOneInput_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneInputView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_FindOneResult_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_ListResult_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoListResultView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_InputUpdate_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoInputUpdateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_InputCreate_View: "GradeHorarioOfertaFormacaoIntervaloDeTempoInputCreateView",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_FindOneById: "GradeHorarioOfertaFormacaoIntervaloDeTempoFindOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_DeleteOneById: "GradeHorarioOfertaFormacaoIntervaloDeTempoDeleteOneById",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_List: "GradeHorarioOfertaFormacaoIntervaloDeTempoList",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_Create: "GradeHorarioOfertaFormacaoIntervaloDeTempoCreate",
  GradeHorarioOfertaFormacaoIntervaloDeTempo_Operations_UpdateOneById: "GradeHorarioOfertaFormacaoIntervaloDeTempoUpdateOneById",

  //
  DiaCalendario: "DiaCalendario",

  DiaCalendario_View: "DiaCalendarioView",
  DiaCalendario_InputUpdate_View: "DiaCalendarioInputUpdateView",
  DiaCalendario_InputCreate_View: "DiaCalendarioInputCreateView",
  DiaCalendario_FindOneInput_View: "DiaCalendarioFindOneInputView",
  DiaCalendario_FindOneResult_View: "DiaCalendarioFindOneResultView",
  DiaCalendario_ListResult_View: "DiaCalendarioListResultView",
  DiaCalendario_Operations_FindOneById: "DiaCalendarioFindOneById",
  DiaCalendario_Operations_DeleteOneById: "DiaCalendarioDeleteOneById",
  DiaCalendario_Operations_List: "DiaCalendarioList",
  DiaCalendario_Operations_Create: "DiaCalendarioCreate",
  DiaCalendario_Operations_UpdateOneById: "DiaCalendarioUpdateOneById",

  //
  Diario: "Diario",

  Diario_View: "DiarioView",
  Diario_FindOneInput_View: "DiarioFindOneInputView",
  Diario_FindOneResult_View: "DiarioFindOneResultView",
  Diario_ListResult_View: "DiarioListResultView",
  Diario_InputCreate_View: "DiarioInputCreateView",
  Diario_InputUpdate_View: "DiarioInputUpdateView",
  Diario_Operations_FindOneById: "DiarioFindOneById",
  Diario_Operations_DeleteOneById: "DiarioDeleteOneById",
  Diario_Operations_UpdateOneById: "DiarioUpdateOneById",
  Diario_Operations_List: "DiarioList",
  Diario_Operations_Create: "DiarioCreate",
  Diario_Operations_GetImagemCapa: "DiarioGetImagemCapa",
  Diario_Operations_SetImagemCapa: "DiarioSetImagemCapa",
}
