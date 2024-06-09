import { BuildModule, Build as U } from "@unispec/ast-builder";
import { CommonEntity, CompileOperations } from "../../-shared/common";
import { Tokens } from "../../tokens";

const EnderecoEntity = CommonEntity({
  id: "uuid",
  dated: true,

  description: "Endereco",

  properties: {
    cep: U.String({
      escription: "CEP",
      constraints: {
        ["x-cep"]: true,
      } as any,
    }),

    logradouro: U.String({
      description: "Logradouro",
    }),

    numero: U.Integer({
      description: "Número",
      constraints: { min: 0, integer: true, positive: true },
    }),

    bairro: U.String({
      description: "Bairro",
    }),

    complemento: U.String({
      default: null,
      required: true,
      nullable: true,
      description: "Complemento",
    }),

    pontoReferencia: U.String({
      default: null,
      required: true,
      nullable: true,
      description: "Ponto de referência",
    }),

    cidade: U.Reference({
      targetsTo: Tokens.Cidade.Entity,
      description: "Cidade",
    }),
  },
});

export const EnderecoView = U.View({
  name: Tokens.Endereco.Entity,

  description: "Visão completa de um Endereco.",

  type: U.ObjectTransformer.From(EnderecoEntity)
    .Extends({
      properties: {
        cidade: {
          targetsTo: Tokens.Cidade.Views.FindOneResult,
        },
      },
    })
    .Node(),
});

export const EnderecoFindOneInputView = U.View({
  name: Tokens.Endereco.Views.FindOneInput,
  description: "Dados de entrada para encontrar um Endereco por ID.",
  type: U.ObjectTransformer.From(EnderecoView.type).Pick({ id: true }).Node(),
});

export const EnderecoFindOneResultView = U.View({
  name: Tokens.Endereco.Views.FindOneResult,

  description: "Visão FindOne de um Endereco.",

  type: U.ObjectTransformer.From(EnderecoView.type)
    .Extends({
      partialOf: Tokens.Endereco.Entity,
    })
    .Pick({
      id: true,
      //
      cep: true,
      logradouro: true,
      numero: true,
      bairro: true,
      complemento: true,
      pontoReferencia: true,
      //
      cidade: true,
      //
      dateCreated: true,
      dateUpdated: true,
      dateDeleted: true,
    })
    .Node(),
});

export const EnderecoInputView = U.View({
  name: Tokens.Endereco.Views.Input,

  description: "Dados de entrada para um Endereco.",

  type: U.ObjectTransformer.From(EnderecoView.type)
    .Pick({
      cep: true,

      logradouro: true,
      numero: true,
      bairro: true,
      complemento: true,
      pontoReferencia: true,

      cidade: true,
    })
    .Extends({
      properties: {
        cidade: {
          targetsTo: Tokens.Cidade.Views.FindOneInput,
        },
      },
    })
    .Node(),
});

// =======================================

export const EnderecoDeclarator = CompileOperations({
  entity: Tokens.Endereco.Entity,
});

export const EnderecoProvider = BuildModule({
  nodes: [EnderecoEntity, EnderecoView, EnderecoFindOneInputView, EnderecoFindOneResultView, EnderecoInputView, EnderecoDeclarator],
});
