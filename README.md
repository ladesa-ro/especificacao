<h1 align="center">Especificação do Ladesa</h1>

<p align="center">Definição de dados e entidades do Ladesa</p>

<div align="center">
  <a href="https://github.com/ladesa-ro/especificacao">
    <img alt="Repositório de Código no GitHub" src="https://img.shields.io/badge/GitHub-Especificação-118d3b?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=18181b&color=118d3b" />
  </a>
  <a href="https://docs.ladesa.com.br/developers/">
    <img alt="Documentação" src="https://img.shields.io/badge/DOCS.LADESA-118d3b?style=for-the-badge&logo=readme&logoColor=white&label=Documenta%C3%A7%C3%A3o&labelColor=18181b" />
  </a>
</div>

## 🚀 O que você encontra aqui

### Definições de Entidades

Tudo sobre as entidades do Ladesa, suas propriedades e como se relacionam.

### Dados de Comunicação

Formatos e estruturas dos dados para comunicação entre sistemas.

### Artefatos de Integração

[Esquemas JSON](./integrations/json-schema/lib/), pacotes para [C# (NuGet)](#integração-c--dotnet) e [JavaScript/TypeScript (NPM)](#integração-typescript--javascript), todos [gerados automaticamente][ladesa-especificacao-repo-automation].

## 👽 O quê este projeto não é

Você não encontra neste repositório as informações de como consumir e integrar aos nossos serviços em si. Para isso, indicamos que você consulte a documentação [Conectar — Ladesa Dev Docs](https://docs.ladesa.com.br/developers/connect/).

Dessa forma, esta especificação foca em definir quais são os dados e informações pertinentes aos nossos sistemas de maneira detalhada.

<!--
### 💡 Por que isso é importante?

Para garantir que todos os sistemas funcionem perfeitamente, precisamos que eles se comuniquem de forma clara e padronizada.

O Ladesa desenvolve diversas soluções para a comunidade acadêmica, ajudando a gerenciar informações sobre salas, laboratórios e horários de aula.
-->

## 🧭 Por onde começar?

Para começar a trabalhar com a Especificação do Ladesa, siga estes passos:

- **Entender os sistemas do Ladesa:** Consulte a [documentação essencial para desenvolvedores][ladesa-docs-dev] para entender os conceitos fundamentais de nossos projetos.

- **Consumir a especificação:** Veja como você pode integrar as modelagens das entidades em seus sistemas, consultando a seção [💖 Utilização](#-utilização).

- **Obter o Código-fonte:** [Clone o repositório](#obter-o-código-fonte) e familiarize-se com a estrutura do projeto.

- **Configurar o Ambiente de Desenvolvimento:** Siga as instruções na seção de [🧑‍💻 Desenvolvimento Local](#-desenvolvimento-local) para configurar seu ambiente de trabalho.

- **Contribuir:** Veja como você pode ajudar a melhorar a especificação, consultando a seção [😊 Como Contribuir](#-como-contribuir).

## Conteúdo

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [💖 Utilização](#-utilização)
  - [Integração C# / DotNet](#integração-c--dotnet)
    - [Instalar o pacote para dotnet](#instalar-o-pacote-para-dotnet)
    - [Utilizar o pacote para dotnet](#utilizar-o-pacote-para-dotnet)
  - [Integração TypeScript / JavaScript](#integração-typescript--javascript)
    - [Instalar o pacote para TypeScript / JavaScript](#instalar-o-pacote-para-typescript--javascript)
    - [Utilizar o pacote para TypeScript / JavaScript](#utilizar-o-pacote-para-typescript--javascript)
- [🧑‍💻 Desenvolvimento Local](#-desenvolvimento-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Obter o código-fonte](#obter-o-código-fonte)
  - [Instalar as dependências](#instalar-as-dependências)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [Gerar os artefatos da especificação](#gerar-os-artefatos-da-especificação)
  - [Comandos](#comandos)
- [😊 Como Contribuir](#-como-contribuir)
  - [1. Reportar Problemas](#1-reportar-problemas)
  - [2. Sugerir Melhorias](#2-sugerir-melhorias)
  - [3. Fazer um Pull Request](#3-fazer-um-pull-request)
  - [4. Revisar Pull Requests](#4-revisar-pull-requests)
- [👋 Contato](#-contato)
- [🤝 Licença](#-licença)

<!-- TOC end -->

## 💖 Utilização

A Especificação do Ladesa pode ser utilizada por:

- **Desenvolvedores:** Para criar e manter aplicações que fazem parte do ecossistema Ladesa, garantindo que os aplicativos sigam as mesmas regras de dados e integração.

- **Integradores:** Para desenvolver integrações entre sistemas existentes e o Ladesa, assegurando interoperabilidade e conformidade com padrões estabelecidos.

- **Analistas de Sistemas:** Para entender como os dados são modelados e gerenciados dentro do ecossistema Ladesa.

### Integração C# / DotNet

[![NuGet Package][nuget-package-src]][nuget-package-href] [![NuGet Stable Version][nuget-package-stable-version-src]][nuget-package-versions-href]

#### Instalar o pacote para dotnet

```sh
dotnet add package Ladesa.Dtos
```

#### Utilizar o pacote para dotnet

- Utilização do namespace `Ladesa.Dtos`

```cs
using Ladesa.Dtos;
```

- Conversão de uma `string` `JSON` para uma instância de alguma das classes

```cs
Arquivo arquivo = Arquivo.FromJson(jsonString);
```

### Integração TypeScript / JavaScript

[![NPM Package][npm-package-src]][npm-package-href] [![NPM Stable Version][npm-package-stable-version-src]][npm-package-versions-href]

#### Instalar o pacote para TypeScript / JavaScript

```sh
# npm
npm install @ladesa-ro/especificacao

# pnpm
pnpm add @ladesa-ro/especificacao

# yarn
yarn add @ladesa-ro/especificacao
```

#### Utilizar o pacote para TypeScript / JavaScript

```ts
import {} from "@ladesa-ro/especificacao";
```

## 🧑‍💻 Desenvolvimento Local

Para você realizar o desenvolvimento local, preparamos o guia a seguir.

### Pré-requisitos

Para o desenvolvimento local, é necessário preparar o seu ambiente de trabalho para mexer com este projeto.

Preparamos dicas e tutoriais para você acerca de cada pré-requisito, basta clicar nos links para saber mais.

- [Acesso à Linha de Comando](https://docs.ladesa.com.br/developers/tutorials/os/command-line/);
- [Git](https://docs.ladesa.com.br/developers/tutorials/source-code/git/);
- [Node.js](https://docs.ladesa.com.br/developers/tutorials/platforms/node/) + Corepack;
- dotnet.

### Obter o código-fonte

O primeiro passo para o desenvolvimento local é de obter uma cópia dos arquivos deste repositório. Para isso, digite:

```sh
git clone https://github.com/ladesa-ro/especificacao.git
cd especificacao
```

### Instalar as dependências

```sh
pnpm install
```

### Estrutura do projeto

<!--

Inside of your Astro + Starlight project, you'll see the following folders and files:

```txt
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

-->

O projeto está organizado da seguinte forma:

```bash
.
├── .changeset/                   # Arquivos de configuração e log de mudanças
│   ├── README.md                 # Instruções sobre changesets
│   ├── *.md                      # Log de mudanças específico
│   └── config.json               # Configuração de changesets
├── .editorconfig                 # Definições de estilo de código
├── .github/                      # Configurações e ações do GitHub
│   ├── actions/                  # Ações personalizadas do GitHub
│   │   ├── prepare-build/        # Preparação para build
│   │   └── prepare-install/      # Preparação para instalação
│   ├── workflows/                # Workflows do GitHub Actions
│   │   ├── continuos-release-publish.yml
│   │   ├── publish-dotnet.yml
│   │   ├── publish-npm.yml
│   │   ├── quality.yml
│   │   └── release.yml
│   └── dependabot.yml            # Configuração do Dependabot para atualizações automáticas
├── .gitignore                    # Arquivos e diretórios ignorados pelo Git
├── .husky/                       # Configuração de hooks do Git (ex: pre-commit)
│   └── pre-commit
├── .vscode/                      # Configurações do Visual Studio Code
│   ├── extensions.json           # Extensões recomendadas
│   └── settings.json             # Configurações de ambiente de desenvolvimento
├── CODEOWNERS                    # Arquivo de proprietários de código
├── LICENSE                       # Arquivo de licença (MIT)
├── README.md                     # Arquivo de documentação principal
├── biome.json                    # Configuração do Biome para o projeto
├── definitions/                  # Diretório principal contendo definições
│   ├── biome.json                # Configuração do Biome para definitions
│   ├── package.json              # Configuração npm do módulo definitions
│   ├── src/                      # Código-fonte das definições
│   │   ├── .utils/               # Utilitários compartilhados
│   │   │   ├── -index.tsp
│   │   │   ├── common.tsp
│   │   │   ├── entity-token.tsp
│   │   │   └── extensions/       # Extensões para decorators
│   │   │       ├── -index.tsp
│   │   │       ├── decorators/
│   │   │       │   ├── -index.tsp
│   │   │       │   ├── entity.js
│   │   │       │   ├── entity.tsp
│   │   │       │   ├── entityPartialOf.js
│   │   │       │   └── entityPartialOf.tsp
│   │   │       └── tokens.js
│   │   ├── autenticacao/          # Definições de autenticação
│   │   │   ├── -index.tsp
│   │   │   └── usuario.tsp
│   │   ├── base/                 # Definições de entidades básicas
│   │   │   ├── -index.tsp
│   │   │   ├── arquivo.tsp
│   │   │   ├── imagem-arquivo.tsp
│   │   │   └── imagem.tsp
│   │   └── main.tsp              # Definições principais do projeto
│   └── tspconfig.json-schema.yaml # Configuração do TypeScript para JSON Schema
├── integrations/                 # Diretório de artefatos de integração
│   ├── dotnet/                   # Definições para integração com .NET (C#)
│   │   ├── Ladesa.Dtos.Test/     # Testes unitários para .NET
│   │   │   ├── GlobalUsings.cs
│   │   │   ├── Ladesa.Dtos.Test.csproj
│   │   │   └── UnitTest1.cs
│   │   ├── Ladesa.Dtos/          # Definições principais para .NET
│   │   │   ├── .gitignore
│   │   │   ├── Ladesa.Dtos.cs
│   │   │   └── Ladesa.Dtos.csproj
│   │   ├── Ladesa.Spec.sln       # Solução do .NET para o projeto
│   │   └── package.json          # Configurações do npm para integração dotnet
│   ├── json-schema/              # Esquemas JSON para integração
│   │   ├── lib/                  # Biblioteca de schemas JSON
│   │   │   ├── Arquivo.json
│   │   │   ├── ArquivoFindOneInputView.json
│   │   │   ├── ArquivoFindOneResultView.json
│   │   │   ├── ArquivoView.json
│   │   │   ├── DatedObject.json
│   │   │   ├── EntityToken.json
│   │   │   ├── Imagem.json
│   │   │   ├── ImagemArquivo.json
│   │   │   ├── ObjectUuid.json
│   │   │   ├── Usuario.json
│   │   │   ├── date_time.json
│   │   │   └── uuid.json
│   │   └── package.json          # Configurações npm para JSON Schema
│   └── npm/                      # Artefatos npm para integração JavaScript/TypeScript
│       ├── especificacao/        # Pacote npm da especificação
│       │   ├── biome.json        # Configuração do Biome para o pacote
│       │   ├── package.json      # Configurações npm para o pacote especificacao
│       │   └── src/              # Código-fonte do pacote especificacao
│       │       └── schemas.ts
├── package.json                  # Configurações gerais do projeto
├── pnpm-lock.yaml                # Lockfile do pnpm
└── pnpm-workspace.yaml           # Configurações do workspace para pnpm
```

### Gerar os artefatos da especificação

```sh
pnpm run build
```

### Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                       | Ação                                |
| :---------------------------- | :---------------------------------- |
| `pnpm install`                | Instala as dependências.            |
| `pnpm run -w build`           | Gera os artefatos da especificação. |
| `pnpm run -w code-static:fix` | Correção de lint e formatação.      |

<details>

<summary>Outros comandos</summary>

| Comando                         | Ação                                                |
| :------------------------------ | :-------------------------------------------------- |
| `pnpm run -w lint:check`        | Checa as regras do lint.                            |
| `pnpm run -w lint:fix`          | Corrige erros resolviveis de lint.                  |
| `pnpm run -w format:check`      | Checa as formatações dos arquivos.                  |
| `pnpm run -w format:fix`        | Corrige as formatações inconsistêntes dos arquivos. |
| `pnpm run -w code-static:check` | Checagem de lint e formatação.                      |

</details>

## 😊 Como Contribuir

Este projeto é open source, e contribuições são sempre bem-vindas! Existem diversas formas de você colaborar com a Especificação do Ladesa:

### 1. Reportar Problemas

Se você encontrou algum problema ou erro na especificação, por favor, abra uma [issue no GitHub][ladesa-especificacao-issues]. Detalhe o máximo possível para que possamos investigar e resolver rapidamente.

### 2. Sugerir Melhorias

Tem uma ideia para melhorar a especificação? Sinta-se à vontade para sugerir novas funcionalidades, ajustes ou correções abrindo uma [issue][ladesa-especificacao-issues] ou discutindo na [Ladesa Community][ladesa-docs-community].

### 3. Fazer um Pull Request

Se você já tem uma solução para um problema ou deseja propor uma melhoria no código, siga os passos abaixo para enviar um **pull request**:

1. **Faça um fork** deste repositório.
2. **Clone o repositório** em sua máquina local.
3. Crie uma **branch** com o nome da sua funcionalidade ou correção.
4. Faça as alterações necessárias.
5. Envie um **pull request** detalhando o que foi alterado e por que.

### 4. Revisar Pull Requests

Se você tiver experiência com o projeto, pode ajudar revisando e sugerindo melhorias nos pull requests abertos por outros colaboradores. A revisão cuidadosa ajuda a garantir que o código mantido esteja sempre em alta qualidade.

> Lembre-se de seguir o [código de conduta][ladesa-especificacao-repo-code-of-conduct] da comunidade em todas as interações.

## 👋 Contato

Se você tiver dúvidas, sugestões ou precisar de ajuda, entre em contato conosco:

- **Email:** `em breve`.
- **Comunidade:** Participe de discussões e interações na comunidade do Ladesa através do [Ladesa Community][ladesa-docs-community].
- **GitHub Issues:** Para relatar bugs ou sugerir melhorias, utilize a seção de [Issues do GitHub][ladesa-especificacao-issues].

## 🤝 Licença

[MIT](./LICENSE) © 2024 – presente, Ladesa.

---

⭐ Marque este repositório com estrela se achar útil!

<!-- Links -->

<!-- Links / Docs -->

[ladesa-docs-community]: https://docs.ladesa.com.br/community
[ladesa-docs-dev]: https://docs.ladesa.com.br/developers

<!-- Links / Especificação -->

[ladesa-especificacao-issues]: https://github.com/ladesa-ro/especificacao/issues
[ladesa-especificacao-repo-automation]: https://github.com/ladesa-ro/especificacao/tree/development/.github/workflows
[ladesa-especificacao-repo-code-of-conduct]: https://github.com/ladesa-ro/especificacao/blob/development/CODE_OF_CONDUCT.md

<!-- Badges -->

<!-- Badges / Integrations / NPM -->

[npm-package-src]: https://img.shields.io/badge/npm-%40ladesa--ro%2Fespecificacao-18181B?style=flat&logo=npm&logoColor=white&labelColor=%23CB3837
[npm-package-href]: https://npmjs.com/package/@ladesa-ro/especificacao

<!-- Badges / Integrations / NPM / Versions -->

[npm-package-versions-href]: https://www.npmjs.com/package/@ladesa-ro/especificacao?activeTab=versions
[npm-package-stable-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fespecificacao&query=%24%5B%22dist-tags%22%5D.latest&prefix=v&style=flat&logo=npm&logoColor=white&label=versão&style=flat&colorA=18181B&colorB=white

<!-- Badges / Integrations / NuGet -->

[nuget-package-src]: https://img.shields.io/badge/nuget-Ladesa.Dtos-18181B?style=flat&logo=nuget&logoColor=white&labelColor=%23004880
[nuget-package-href]: https://www.nuget.org/packages/Ladesa.Dtos/

<!-- Badges / Integrations / NuGet / Versions -->

[nuget-package-versions-href]: https://www.nuget.org/packages/Ladesa.Dtos#versions-body-tab
[nuget-package-stable-version-src]: https://img.shields.io/nuget/v/Ladesa.Dtos?style=flat&style=flat&logo=nuget&logoColor=white&label=versão&style=flat&colorA=18181B&colorB=white
