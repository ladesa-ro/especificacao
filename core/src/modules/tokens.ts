type IGenericTokenModule = {
  Entity: string;
  Views: Record<string, string>;
};

type IGenericGroup = Record<string, IGenericTokenModule>;

type ITokens = IGenericGroup;

export const Tokens = {
  Ambiente: {
    Entity: 'Ambiente',
    Views: {
      FindOneInput: 'AmbienteFindOneInput',
      FindOneResult: 'AmbienteFindOneResult',
      InputCreate: 'AmbienteInputCreate',
      InputUpdate: 'AmbienteInputUpdate',
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
} satisfies ITokens;
