type IGenericTokenModule = {
  Entity?: string;
  Views?: Record<string, string>;
  Operations?: Record<string, string>;
};

const TokensModule = <T extends IGenericTokenModule>(tokensModule: T): T => tokensModule;

export const Tokens = {
  Shared: {
    Search: TokensModule({
      Entity: 'Search',
    }),
    Pagination: TokensModule({
      Views: {
        PaginatedSortBy: 'PaginatedSortBy',
        //
        PaginatedResultMetaFilter: 'PaginatedResultMetaFilter',
        PaginatedResultMeta: 'PaginatedResultMeta',
        PaginatedResultLinks: 'PaginatedResultLinks',
        //
        PaginatedInput: 'PaginatedInput',
        PaginatedBaseInput: 'PaginatedBaseInput',
      },
    }),
  },

  Auth: TokensModule({
    Operations: {
      Login: 'AuthLogin',
      Refresh: 'AuthRefresh',
      WhoAmI: 'AuthWhoAmI',
      SetInitialPassword: 'AuthSetInitialPassword',
    },
    Views: {
      LoginInput: 'AuthLoginInput',
      RefreshInput: 'AuthRefreshInput',
      SetInitialPasswordInput: 'AuthSetInitialPasswordInput',
      WhoAmIResult: 'AuthWhoAmIResult',
      SessionCredentials: 'AuthSessionCredentials',
    },
  }),

  Arquivo: TokensModule({
    Entity: 'Arquivo',
    Views: {
      FindOneInput: 'ArquivoFindOneInput',
      FindOneResult: 'ArquivoFindOneResult',
      FindOneFromImagemArquivoResult: 'ArquivoFindOneFromImagemArquivoResult',
      FindAllResult: 'ArquivoFindAllResult',
      InputCreate: 'ArquivoInputCreate',
      InputUpdate: 'ArquivoInputUpdate',
    },
    Operations: {
      GetFile: 'ArquivoGetFile',
    },
  }),

  Imagem: TokensModule({
    Entity: 'Imagem',
    Views: {
      FindOneInput: 'ImagemFindOneInput',
      FindOneResult: 'ImagemFindOneResult',
      FindOneFromImagemArquivoResult: 'ImagemFindOneFromImagemArquivoResult',
    },
    Operations: {
      GetImagem: 'GetImagem',
      SetImagem: 'SetImagem',
    },
  }),

  ImagemArquivo: TokensModule({
    Entity: 'ImagemArquivo',
    Views: {
      FindOneInput: 'ImagemArquivoFindOneInput',
      FindOneResult: 'ImagemArquivoFindOneResult',
      FindOneFromImagemResult: 'ImagemArquivoFindOneFromImagemResult',
    },
  }),

  Usuario: TokensModule({
    Entity: 'Usuario',
    Views: {
      FindOneInput: 'UsuarioFindOneInput',
      FindOneResult: 'UsuarioFindOneResult',
      FindAllResult: 'UsuariFindAllResult',
      InputCreate: 'UsuarioInputCreate',
      InputUpdate: 'UsuarioInputUpdate',
    },
  }),

  Estado: TokensModule({
    Entity: 'Estado',
    Views: {
      FindOneInput: 'EstadoFindOneInput',
      FindOneResult: 'EstadoFindOneResult',
      FindAllResult: 'EstadoFindAllResult',
    },
  }),

  Cidade: TokensModule({
    Entity: 'Cidade',
    Views: {
      FindOneInput: 'CidadeFindOneInput',
      FindOneResult: 'CidadeFindOneResult',
      FindAllResult: 'CidadeFindAllResult',
    },
  }),

  Endereco: TokensModule({
    Entity: 'Endereco',
    Views: {
      FindOneInput: 'EnderecoFindOneInput',
      FindOneResult: 'EnderecoFindOneResult',
      Input: 'EnderecoInput',
    },
  }),

  Modalidade: TokensModule({
    Entity: 'Modalidade',
    Views: {
      FindOneInput: 'ModalidadeFindOneInput',
      FindOneResult: 'ModalidadeFindOneResult',
      FindAllResult: 'ModalidadeFindAllResult',
      InputCreate: 'ModalidadeInputCreate',
      InputUpdate: 'ModalidadeInputUpdate',
    },
  }),

  Curso: TokensModule({
    Entity: 'Curso',
    Views: {
      FindOneInput: 'CursoFindOneInput',
      FindOneResult: 'CursoFindOneResult',
      FindAllResult: 'CursoFindAllResult',
      InputCreate: 'CursoInputCreate',
      InputUpdate: 'CursoInputUpdate',
    },
  }),

  Campus: TokensModule({
    Entity: 'Campus',
    Views: {
      FindOneInput: 'CampusFindOneInput',
      FindOneResult: 'CampusFindOneResult',
      FindAllResult: 'CampusFindAllResult',
      InputCreate: 'CampusInputCreate',
      InputUpdate: 'CampusInputUpdate',
    },
  }),

  Bloco: TokensModule({
    Entity: 'Bloco',
    Views: {
      FindOneInput: 'BlocoFindOneInput',
      FindOneResult: 'BlocoFindOneResult',
      FindAllResult: 'BlocoFindAllResult',
      InputCreate: 'BlocoInputCreate',
      InputUpdate: 'BlocoInputUpdate',
    },
  }),

  Ambiente: TokensModule({
    Entity: 'Ambiente',
    Views: {
      FindOneInput: 'AmbienteFindOneInput',
      FindOneResult: 'AmbienteFindOneResult',
      FindAllResult: 'AmbienteFindAllResult',
      InputCreate: 'AmbienteInputCreate',
      InputUpdate: 'AmbienteInputUpdate',
    },
  }),

  Reserva: TokensModule({
    Entity: 'Reserva',
    Views: {
      FindOneInput: 'ReservaFindOneInput',
      FindOneResult: 'ReservaFindOneResult',
      FindAllResult: 'ReservaFindAllResult',
      InputCreate: 'ReservaInputCreate',
      InputUpdate: 'ReservaInputUpdate',
    },
  }),

  Vinculo: TokensModule({
    Entity: 'Vinculo',
    Views: {
      FindOneInput: 'VinculoFindOneInput',
      FindOneResult: 'VinculoFindOneResult',
      Update: 'VinculoUpdate',
    },
  }),

  IntervaloDeTempo: TokensModule({
    Entity: 'IntervaloDeTempo',
    Views: {
      Input: 'IntervaloDeTempoInput',
      FindOneResult: 'IntervaloDeTempoFindOneResult',
    },
  }),

  Diario: TokensModule({
    Entity: 'Diario',
    Views: {
      FindOneInput: 'DiarioFindOneInput',
      FindOneResult: 'DiarioFindOneResult',
      FindAllResult: 'DiarioFindAllResult',
      InputCreate: 'DiarioInputCreate',
      InputUpdate: 'DiarioInputUpdate',
    },
  }),

  Aula: TokensModule({
    Entity: 'Aula',
    Views: {
      FindOneInput: 'AulaFindOneInput',
      FindOneResult: 'AulaFindOneResult',
      FindAllResult: 'AulaFindAllResult',
      InputCreate: 'AulaInputCreate',
      InputUpdate: 'AulaInputUpdate',
    },
  }),

  CalendarioLetivo: TokensModule({
    Entity: 'CalendarioLetivo',
    Views: {
      FindOneInput: 'CalendarioLetivoFindOneInput',
      FindOneResult: 'CalendarioLetivoFindOneResult',
      FindAllResult: 'CalendarioLetivoFindAllResult',
      InputCreate: 'CalendarioLetivoInputCreate',
      InputUpdate: 'CalendarioLetivoInputUpdate',
    },
  }),

  DiaCalendario: TokensModule({
    Entity: 'DiaCalendario',
    Views: {
      FindOneInput: 'DiaCalendarioFindOneInput',
      FindOneResult: 'DiaCalendarioFindOneResult',
      FindAllResult: 'DiaCalendarioFindAllResult',
      InputCreate: 'DiaCalendarioInputCreate',
      InputUpdate: 'DiaCalendarioInputUpdate',
    },
  }),

  Etapa: TokensModule({
    Entity: 'Etapa',
    Views: {
      FindOneInput: 'EtapaFindOneInput',
      FindOneResult: 'EtapaFindOneResult',
      FindAllResult: 'EtapaFindAllResult',
      InputCreate: 'EtapaInputCreate',
      InputUpdate: 'EtapaInputUpdate',
    },
  }),

  Evento: TokensModule({
    Entity: 'Evento',
    Views: {
      FindOneInput: 'EventoFindOneInput',
      FindOneResult: 'EventoFindOneResult',
      FindAllResult: 'EventoFindAllResult',
      InputCreate: 'EventoInputCreate',
      InputUpdate: 'EventoInputUpdate',
    },
  }),
};
