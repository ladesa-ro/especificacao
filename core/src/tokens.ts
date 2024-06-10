type IGenericTokenModule = {
  Entity?: string;
  Views?: Record<string, string>;
  Operations?: Record<string, string>;
};

const TokensModule = <T extends IGenericTokenModule>(tokensModule: T): T => tokensModule;

export const Tokens = {
  Shared: {
    Search: TokensModule({
      Entity: "Search",
    }),
    Pagination: TokensModule({
      Views: {
        PaginatedSortBy: "PaginatedSortBy",
        //
        PaginatedResultMetaFilter: "PaginatedResultMetaFilter",
        PaginatedResultMeta: "PaginatedResultMeta",
        PaginatedResultLinks: "PaginatedResultLinks",
        //
        PaginatedInput: "PaginatedInput",
        PaginatedBaseInput: "PaginatedBaseInput",
      },
    }),
  },

  Auth: TokensModule({
    Operations: {
      Login: "AuthLogin",
      WhoAmI: "AuthWhoAmI",
      Refresh: "AuthRefresh",
      SetInitialPassword: "AuthSetInitialPassword",
    },
    Views: {
      LoginInput: "AuthLoginInput",
      WhoAmIResult: "AuthWhoAmIResult",
      RefreshInput: "AuthRefreshInput",
      SessionCredentials: "AuthSessionCredentials",
      SetInitialPasswordInput: "AuthSetInitialPasswordInput",
    },
  }),

  Arquivo: TokensModule({
    Entity: "Arquivo",
    Operations: {
      GetFile: "ArquivoGetFile",
    },
    Views: {
      InputUpdate: "ArquivoInputUpdate",
      InputCreate: "ArquivoInputCreate",
      FindOneInput: "ArquivoFindOneInput",
      FindOneResult: "ArquivoFindOneResult",
      FindAllResult: "ArquivoFindAllResult",
      FindOneFromImagemArquivoResult: "ArquivoFindOneFromImagemArquivoResult",
    },
  }),

  Imagem: TokensModule({
    Entity: "Imagem",
    Operations: {
      GetImagem: "GetImagem",
      SetImagem: "SetImagem",
    },
    Views: {
      FindOneInput: "ImagemFindOneInput",
      FindOneResult: "ImagemFindOneResult",
      FindOneFromImagemArquivoResult: "ImagemFindOneFromImagemArquivoResult",
      GetBinaryResult: "ImagemGetBinaryResult",
    },
  }),

  ImagemArquivo: TokensModule({
    Entity: "ImagemArquivo",
    Views: {
      FindOneInput: "ImagemArquivoFindOneInput",
      FindOneResult: "ImagemArquivoFindOneResult",
      FindOneFromImagemResult: "ImagemArquivoFindOneFromImagemResult",
    },
  }),

  Usuario: TokensModule({
    Entity: "Usuario",
    Operations: {
      FindById: "UsuarioFindById",
      DeleteById: "UsuarioDeleteById",
      Create: "UsuarioCreate",
      UpdateById: "UsuarioUpdateById",
      List: "UsuarioList",
      GetCoverImage: "UsuarioGetCoverImage",
      SetCoverImage: "UsuarioSetCoverImage",
      GetProfileImage: "UsuarioGetProfileImage",
      SetProfileImage: "UsuarioSetProfileImage",
    },
    Views: {
      FindOneInput: "UsuarioFindOneInput",
      FindOneResult: "UsuarioFindOneResult",
      FindAllResult: "UsuarioFindAllResult",
      InputCreate: "UsuarioInputCreate",
      InputUpdate: "UsuarioInputUpdate",
    },
  }),

  Estado: TokensModule({
    Entity: "Estado",
    Operations: {
      FindById: "EstadoFindById",
      List: "EstadoList",
    },
    Views: {
      FindOneInput: "EstadoFindOneInput",
      FindOneResult: "EstadoFindOneResult",
      FindAllResult: "EstadoFindAllResult",
    },
  }),

  Cidade: TokensModule({
    Entity: "Cidade",
    Operations: {
      FindById: "EstadoFindById",
      List: "EstadoList",
    },
    Views: {
      FindOneInput: "CidadeFindOneInput",
      FindOneResult: "CidadeFindOneResult",
      FindAllResult: "CidadeFindAllResult",
    },
  }),

  Endereco: TokensModule({
    Entity: "Endereco",
    Views: {
      FindOneInput: "EnderecoFindOneInput",
      FindOneResult: "EnderecoFindOneResult",
      Input: "EnderecoInput",
    },
  }),

  Modalidade: TokensModule({
    Entity: "Modalidade",
    Operations: {
      FindById: "ModalidadeFindById",
      DeleteById: "ModalidadeDeleteById",
      Create: "ModalidadeCreate",
      UpdateById: "ModalidadeUpdateById",
      List: "ModalidadeList",
    },
    Views: {
      FindOneInput: "ModalidadeFindOneInput",
      FindOneResult: "ModalidadeFindOneResult",
      FindAllResult: "ModalidadeFindAllResult",
      InputCreate: "ModalidadeInputCreate",
      InputUpdate: "ModalidadeInputUpdate",
    },
  }),

  Disciplina: TokensModule({
    Entity: "Disciplina",
    Operations: {
      FindById: "DisciplinaFindById",
      DeleteById: "DisciplinaDeleteById",
      Create: "DisciplinaCreate",
      UpdateById: "DisciplinaUpdateById",
      List: "DisciplinaList",
      GetCoverImage: "DisciplinaGetCoverImage",
      SetCoverImage: "DisciplinaSetCoverImage",
    },
    Views: {
      FindOneInput: "DisciplinaFindOneInput",
      FindOneResult: "DisciplinaFindOneResult",
      FindAllResult: "DisciplinaFindAllResult",
      InputCreate: "DisciplinaInputCreate",
      InputUpdate: "DisciplinaInputUpdate",
    },
  }),

  Curso: TokensModule({
    Entity: "Curso",
    Operations: {
      FindById: "CursoFindById",
      DeleteById: "CursoDeleteById",
      Create: "CursoCreate",
      UpdateById: "CursoUpdateById",
      List: "CursoList",
    },
    Views: {
      FindOneInput: "CursoFindOneInput",
      FindOneResult: "CursoFindOneResult",
      FindAllResult: "CursoFindAllResult",
      InputCreate: "CursoInputCreate",
      InputUpdate: "CursoInputUpdate",
    },
  }),

  Campus: TokensModule({
    Entity: "Campus",
    Operations: {
      FindById: "CampusFindById",
      DeleteById: "CampusDeleteById",
      Create: "CampusCreate",
      UpdateById: "CampusUpdateById",
      List: "CampusList",
    },
    Views: {
      FindOneInput: "CampusFindOneInput",
      FindOneResult: "CampusFindOneResult",
      FindAllResult: "CampusFindAllResult",
      InputCreate: "CampusInputCreate",
      InputUpdate: "CampusInputUpdate",
    },
  }),

  Bloco: TokensModule({
    Entity: "Bloco",
    Operations: {
      FindById: "BlocoFindById",
      DeleteById: "BlocoDeleteById",
      Create: "BlocoCreate",
      UpdateById: "BlocoUpdateById",
      List: "BlocoList",
      GetCoverImage: "BlocoGetCoverImage",
      SetCoverImage: "BlocoSetCoverImage",
    },
    Views: {
      FindOneInput: "BlocoFindOneInput",
      FindOneResult: "BlocoFindOneResult",
      FindAllResult: "BlocoFindAllResult",
      InputCreate: "BlocoInputCreate",
      InputUpdate: "BlocoInputUpdate",
    },
  }),

  Ambiente: TokensModule({
    Entity: "Ambiente",
    Operations: {
      FindById: "AmbienteFindById",
      DeleteById: "AmbienteDeleteById",
      Create: "AmbienteCreate",
      UpdateById: "AmbienteUpdateById",
      List: "AmbienteList",
      GetCoverImage: "AmbienteGetCoverImage",
      SetCoverImage: "AmbienteSetCoverImage",
    },
    Views: {
      FindOneInput: "AmbienteFindOneInput",
      FindOneResult: "AmbienteFindOneResult",
      FindAllResult: "AmbienteFindAllResult",
      InputCreate: "AmbienteInputCreate",
      InputUpdate: "AmbienteInputUpdate",
    },
  }),

  Reserva: TokensModule({
    Entity: "Reserva",
    Operations: {
      FindById: "ReservaFindById",
      DeleteById: "ReservaDeleteById",
      Create: "ReservaCreate",
      UpdateById: "ReservaUpdateById",
      List: "ReservaList",
    },
    Views: {
      FindOneInput: "ReservaFindOneInput",
      FindOneResult: "ReservaFindOneResult",
      FindAllResult: "ReservaFindAllResult",
      InputCreate: "ReservaInputCreate",
      InputUpdate: "ReservaInputUpdate",
    },
  }),

  Vinculo: TokensModule({
    Entity: "Vinculo",
    Operations: {
      FindById: "VinculoFindById",
      Update: "VinculoUpdate",
      List: "VinculoList",
    },
    Views: {
      FindOneInput: "VinculoFindOneInput",
      FindOneResult: "VinculoFindOneResult",
      Update: "VinculoUpdate",
    },
  }),

  IntervaloDeTempo: TokensModule({
    Entity: "IntervaloDeTempo",
    Views: {
      Input: "IntervaloDeTempoInput",
      FindOneResult: "IntervaloDeTempoFindOneResult",
    },
  }),

  Diario: TokensModule({
    Entity: "Diario",
    Operations: {
      FindById: "DiarioFindById",
      DeleteById: "DiarioDeleteById",
      Create: "DiarioCreate",
      UpdateById: "DiarioUpdateById",
      List: "DiarioList",
      GetCoverImage: "DiarioGetCoverImage",
      SetCoverImage: "DiarioSetCoverImage",
    },
    Views: {
      FindOneInput: "DiarioFindOneInput",
      FindOneResult: "DiarioFindOneResult",
      FindAllResult: "DiarioFindAllResult",
      InputCreate: "DiarioInputCreate",
      InputUpdate: "DiarioInputUpdate",
    },
  }),

  DiarioProfessor: TokensModule({
    Entity: "DiarioProfessor",
    Operations: {
      FindById: "DiarioProfessorFindById",
      DeleteById: "DiarioProfessorDeleteById",
      Create: "DiarioProfessorCreate",
      UpdateById: "DiarioProfessorUpdateById",
      List: "DiarioProfessorList",
    },
    Views: {
      FindOneInput: "DiarioProfessorFindOneInput",
      FindOneResult: "DiarioProfessorFindOneResult",
      FindAllResult: "DiarioProfessorFindAllResult",
      InputCreate: "DiarioProfessorInputCreate",
      InputUpdate: "DiarioProfessorInputUpdate",
    },
  }),

  Aula: TokensModule({
    Entity: "Aula",
    Operations: {
      FindById: "AulaFindById",
      DeleteById: "AulaDeleteById",
      Create: "AulaCreate",
      UpdateById: "AulaUpdateById",
      List: "AulaList",
    },
    Views: {
      FindOneInput: "AulaFindOneInput",
      FindOneResult: "AulaFindOneResult",
      FindAllResult: "AulaFindAllResult",
      InputCreate: "AulaInputCreate",
      InputUpdate: "AulaInputUpdate",
    },
  }),

  CalendarioLetivo: TokensModule({
    Entity: "CalendarioLetivo",
    Operations: {
      FindById: "CalendarioLetivoFindById",
      DeleteById: "CalendarioLetivoDeleteById",
      Create: "CalendarioLetivoCreate",
      UpdateById: "CalendarioLetivoUpdateById",
      List: "CalendarioLetivoList",
    },
    Views: {
      FindOneInput: "CalendarioLetivoFindOneInput",
      FindOneResult: "CalendarioLetivoFindOneResult",
      FindAllResult: "CalendarioLetivoFindAllResult",
      InputCreate: "CalendarioLetivoInputCreate",
      InputUpdate: "CalendarioLetivoInputUpdate",
    },
  }),

  DiaCalendario: TokensModule({
    Entity: "DiaCalendario",
    Operations: {
      FindById: "DiaCalendarioFindById",
      DeleteById: "DiaCalendarioDeleteById",
      Create: "DiaCalendarioCreate",
      UpdateById: "DiaCalendarioUpdateById",
      List: "DiaCalendarioList",
    },
    Views: {
      FindOneInput: "DiaCalendarioFindOneInput",
      FindOneResult: "DiaCalendarioFindOneResult",
      FindAllResult: "DiaCalendarioFindAllResult",
      InputCreate: "DiaCalendarioInputCreate",
      InputUpdate: "DiaCalendarioInputUpdate",
    },
  }),

  Etapa: TokensModule({
    Entity: "Etapa",
    Operations: {
      FindById: "EtapaFindById",
      DeleteById: "EtapaDeleteById",
      Create: "EtapaCreate",
      UpdateById: "EtapaUpdateById",
      List: "EtapaList",
    },
    Views: {
      FindOneInput: "EtapaFindOneInput",
      FindOneResult: "EtapaFindOneResult",
      FindAllResult: "EtapaFindAllResult",
      InputCreate: "EtapaInputCreate",
      InputUpdate: "EtapaInputUpdate",
    },
  }),

  Evento: TokensModule({
    Entity: "Evento",
    Operations: {
      FindById: "EventoFindById",
      DeleteById: "EventoDeleteById",
      Create: "EventoCreate",
      UpdateById: "EventoUpdateById",
      List: "EventoList",
    },
    Views: {
      FindOneInput: "EventoFindOneInput",
      FindOneResult: "EventoFindOneResult",
      FindAllResult: "EventoFindAllResult",
      InputCreate: "EventoInputCreate",
      InputUpdate: "EventoInputUpdate",
    },
  }),

  Turma: TokensModule({
    Entity: "Turma",
    Operations: {
      FindById: "TurmaFindById",
      DeleteById: "TurmaDeleteById",
      Create: "TurmaCreate",
      UpdateById: "TurmaUpdateById",
      List: "TurmaList",
      GetCoverImage: "TurmaGetCoverImage",
      SetCoverImage: "TurmaSetCoverImage",
    },
    Views: {
      FindOneInput: "TurmaFindOneInput",
      FindOneResult: "TurmaFindOneResult",
      FindAllResult: "TurmaFindAllResult",
      InputCreate: "TurmaInputCreate",
      InputUpdate: "TurmaInputUpdate",
    },
  }),

  TurmaDisponibilidade: TokensModule({
    Entity: "TurmaDisponibilidade",
    Operations: {
      FindById: "TurmaDisponibilidadeFindById",
      DeleteById: "TurmaDisponibilidadeDeleteById",
      Create: "TurmaDisponibilidadeCreate",
      UpdateById: "TurmaDisponibilidadeUpdateById",
      List: "TurmaDisponibilidadeList",
    },
    Views: {
      FindOneInput: "TurmaDisponibilidadeFindOneInput",
      FindOneResult: "TurmaDisponibilidadeFindOneResult",
      FindAllResult: "TurmaDisponibilidadeFindAllResult",
      InputCreate: "TurmaDisponibilidadeInputCreate",
      InputUpdate: "TurmaDisponibilidadeInputUpdate",
    },
  }),

  TurmaDisponibilidadeDia: TokensModule({
    Entity: "TurmaDisponibilidadeDia",
    Operations: {
      FindById: "TurmaDisponibilidadeDiaFindById",
      DeleteById: "TurmaDisponibilidadeDiaDeleteById",
      Create: "TurmaDisponibilidadeDiaCreate",
      UpdateById: "TurmaDisponibilidadeDiaUpdateById",
      List: "TurmaDisponibilidadeDiaList",
    },
    Views: {
      FindOneInput: "TurmaDisponibilidadeDiaFindOneInput",
      FindOneResult: "TurmaDisponibilidadeDiaFindOneResult",
      FindAllResult: "TurmaDisponibilidadeDiaFindAllResult",
      InputCreate: "TurmaDisponibilidadeDiaInputCreate",
      InputUpdate: "TurmaDisponibilidadeDiaInputUpdate",
    },
  }),

  DisponibilidadeProfessor: TokensModule({
    Entity: "DisponibilidadeProfessor",
    Operations: {
      FindById: "DisponibilidadeProfessorFindById",
      DeleteById: "DisponibilidadeProfessorDeleteById",
      Create: "DisponibilidadeProfessorCreate",
      UpdateById: "DisponibilidadeProfessorUpdateById",
      List: "DisponibilidadeProfessorList",
    },
    Views: {
      FindOneInput: "DisponibilidadeProfessorFindOneInput",
      FindOneResult: "DisponibilidadeProfessorFindOneResult",
      FindAllResult: "DisponibilidadeProfessorFindAllResult",
      InputCreate: "DisponibilidadeProfessorInputCreate",
      InputUpdate: "DisponibilidadeProfessorInputUpdate",
    },
  }),

  DisponibilidadeProfessorDia: TokensModule({
    Entity: "DisponibilidadeProfessorDia",
    Operations: {
      FindById: "DisponibilidadeProfessorDiaFindById",
      DeleteById: "DisponibilidadeProfessorDiaDeleteById",
      Create: "DisponibilidadeProfessorDiaCreate",
      UpdateById: "DisponibilidadeProfessorDiaUpdateById",
      List: "DisponibilidadeProfessorDiaList",
    },
    Views: {
      FindOneInput: "DisponibilidadeProfessorDiaFindOneInput",
      FindOneResult: "DisponibilidadeProfessorDiaFindOneResult",
      FindAllResult: "DisponibilidadeProfessorDiaFindAllResult",
      InputCreate: "DisponibilidadeProfessorDiaInputCreate",
      InputUpdate: "DisponibilidadeProfessorDiaInputUpdate",
    },
  }),

  DiarioPreferenciaAgrupamento: TokensModule({
    Entity: "DiarioPreferenciaAgrupamento",
    Operations: {
      FindById: "DiarioPreferenciaAgrupamentoFindById",
      DeleteById: "DiarioPreferenciaAgrupamentoDeleteById",
      Create: "DiarioPreferenciaAgrupamentoCreate",
      UpdateById: "DiarioPreferenciaAgrupamentoUpdateById",
      List: "DiarioPreferenciaAgrupamentoList",
    },
    Views: {
      FindOneInput: "DiarioPreferenciaAgrupamentoFindOneInput",
      FindOneResult: "DiarioPreferenciaAgrupamentoFindOneResult",
      FindAllResult: "DiarioPreferenciaAgrupamentoFindAllResult",
      InputCreate: "DiarioPreferenciaAgrupamentoInputCreate",
      InputUpdate: "DiarioPreferenciaAgrupamentoInputUpdate",
    },
  }),

  HorarioGerado: TokensModule({
    Entity: "HorarioGerado",
    Operations: {
      FindById: "HorarioGeradoFindById",
      DeleteById: "HorarioGeradoDeleteById",
      Create: "HorarioGeradoCreate",
      UpdateById: "HorarioGeradoUpdateById",
      List: "HorarioGeradoList",
    },
    Views: {
      FindOneInput: "HorarioGeradoFindOneInput",
      FindOneResult: "HorarioGeradoFindOneResult",
      FindAllResult: "HorarioGeradoFindAllResult",
      InputCreate: "HorarioGeradoInputCreate",
      InputUpdate: "HorarioGeradoInputUpdate",
    },
  }),

  HorarioGeradoAula: TokensModule({
    Entity: "HorarioGeradoAula",
    Operations: {
      FindById: "HorarioGeradoAulaFindById",
      DeleteById: "HorarioGeradoAulaDeleteById",
      Create: "HorarioGeradoAulaCreate",
      UpdateById: "HorarioGeradoAulaUpdateById",
      List: "HorarioGeradoAulaList",
    },
    Views: {
      FindOneInput: "HorarioGeradoAulaFindOneInput",
      FindOneResult: "HorarioGeradoAulaFindOneResult",
      FindAllResult: "HorarioGeradoAulaFindAllResult",
      InputCreate: "HorarioGeradoAulaInputCreate",
      InputUpdate: "HorarioGeradoAulaInputUpdate",
    },
  }),
};
