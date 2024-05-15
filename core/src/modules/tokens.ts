type IGenericTokenModule = {
  Entity: string;
  Views: Record<string, string>;
  Operations?: Record<string, string>;
};

type IGenericGroup = Record<string, IGenericTokenModule>;

type ITokens = IGenericGroup;

export const Tokens = {
  Arquivo: {
    Entity: 'Arquivo',
    Views: {
      FindOneInput: 'ArquivoFindOneInput',
      FindOneResult: 'ArquivoFindOneResult',
      InputCreate: 'ArquivoInputCreate',
      InputUpdate: 'ArquivoInputUpdate',
    },
    Operations: {
      GetFile: 'ArquivoGetFile',
    },
  },

  Imagem: {
    Entity: 'Imagem',
    Views: {
      FindOneInput: 'ImagemFindOneInput',
      FindOneResult: 'ImagemFindOneResult',
    },
    Operations: {
      GetImagem: 'GetImagem',
      SetImagem: 'SetImagem',
    },
  },

  ImagemArquivo: {
    Entity: 'ImagemArquivo',
    Views: {
      FindOneInput: 'ImagemArquivoFindOneInput',
      FindOneResult: 'ImagemArquivoFindOneResult',
    },
  },

  Usuario: {
    Entity: 'Usuario',
    Views: {
      FindOneInput: 'UsuarioFindOneInput',
      FindOneResult: 'UsuarioFindOneResult',
      InputCreate: 'UsuarioInputCreate',
      InputUpdate: 'UsuarioInputUpdate',
    },
  },

  Estado: {
    Entity: 'Estado',
    Views: {
      FindOneInput: 'EstadoFindOneInput',
      FindOneResult: 'EstadoFindOneResult',
    },
  },

  Cidade: {
    Entity: 'Cidade',
    Views: {
      FindOneInput: 'CidadeFindOneInput',
      FindOneResult: 'CidadeFindOneResult',
    },
  },

  Endereco: {
    Entity: 'Endereco',
    Views: {
      FindOneInput: 'EnderecoFindOneInput',
      FindOneResult: 'EnderecoFindOneResult',
      Input: 'EnderecoInput',
    },
  },
  Campus: {
    Entity: 'Campus',
    Views: {
      FindOneInput: 'CampusFindOneInput',
      FindOneResult: 'CampusFindOneResult',
      InputCreate: 'CampusInputCreate',
      InputUpdate: 'CampusInputUpdate',
    },
  },

  Bloco: {
    Entity: 'Bloco',
    Views: {
      FindOneInput: 'BlocoFindOneInput',
      FindOneResult: 'BlocoFindOneResult',
      InputCreate: 'BlocoInputCreate',
      InputUpdate: 'BlocoInputUpdate',
    },
  },

  Ambiente: {
    Entity: 'Ambiente',
    Views: {
      FindOneInput: 'AmbienteFindOneInput',
      FindOneResult: 'AmbienteFindOneResult',
      InputCreate: 'AmbienteInputCreate',
      InputUpdate: 'AmbienteInputUpdate',
    },
  },

  Reserva: {
    Entity: 'Reserva',
    Views: {
      FindOneInput: 'ReservaFindOneInput',
      FindOneResult: 'ReservaFindOneResult',
      InputCreate: 'ReservaInputCreate',
      InputUpdate: 'ReservaInputUpdate',
    },
  },

  Vinculo: {
    Entity: 'Vinculo',
    Views: {
      FindOneInput: 'VinculoFindOneInput',
      FindOneResult: 'VinculoFindOneResult',
      Update: 'VinculoUpdate',
    },
  },
} satisfies ITokens;
