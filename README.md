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

[Esquemas JSON](./integrations/json-schema/lib/), pacotes para [C# (NuGet)](#pacote-c--dotnet) e [JavaScript/TypeScript (NPM)](#pacote-typescript--javascript), todos [gerados automaticamente][ladesa-especificacao-repo-automation].

## 👽 O quê este projeto não é

Você não encontra neste repositório as informações de como consumir e integrar aos nossos serviços em si. Para isso, indicamos que você consulte a documentação [Conectar — Ladesa Dev Docs](https://docs.ladesa.com.br/developers/connect/).

Dessa forma, A _Especificação do Ladesa_ foca em definir quais são os dados e informações pertinentes aos nossos sistemas de maneira detalhada.

## 🧭 Por onde começar?

Para começar a trabalhar com a Especificação do Ladesa, siga estes passos:

- **Entender os sistemas do Ladesa:** Consulte a [documentação essencial para desenvolvedores][ladesa-docs-dev] para entender os conceitos fundamentais de nossos projetos.

- **Consumir a especificação:** Veja como você pode integrar as modelagens das entidades em seus sistemas, consultando a seção [💖 Utilização](#-utilização).

- **Obter o Código-fonte:** [Clone o repositório](#obter-o-código-fonte) e familiarize-se com a estrutura do projeto.

- **Configurar o Ambiente de Desenvolvimento:** Siga as instruções na seção de [Desenvolvimento Local](#-desenvolvimento-local) para configurar seu ambiente de trabalho.

- **Contribuir:** Veja como você pode ajudar a melhorar a especificação, consultando a seção [Como Contribuir](#-como-contribuir).

## Conteúdo

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [💖 Utilização](#-utilização)
  - [Pacote C# / DotNet](#pacote-c--dotnet)
    - [Instalar o pacote para dotnet](#instalar-o-pacote-para-dotnet)
    - [Utilizar o pacote para dotnet](#utilizar-o-pacote-para-dotnet)
  - [Pacote TypeScript / JavaScript](#pacote-typescript--javascript)
    - [Instalar o pacote para TypeScript / JavaScript](#instalar-o-pacote-para-typescript--javascript)
    - [Utilizar o pacote para TypeScript / JavaScript](#utilizar-o-pacote-para-typescript--javascript)
  - [💡 Por que isso é importante?](#-por-que-isso-é-importante)
- [😊 Como contribuir](#-como-contribuir)
- [🧑‍💻 Desenvolvimento Local](#-desenvolvimento-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Obter o código-fonte](#obter-o-código-fonte)
  - [Instalar as dependências](#instalar-as-dependências)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [Gerar os artefatos da especificação](#gerar-os-artefatos-da-especificação)
  - [Comandos](#comandos)
- [👋 Contato](#-contato)
- [🤝 Licença](#-licença)

<!-- TOC end -->

## 💖 Utilização

A Especificação do Ladesa pode ser utilizada por:

- **Desenvolvedores:** Para criar e manter aplicações que fazem parte do ecossistema Ladesa, garantindo que os aplicativos sigam as mesmas regras de dados e integração.

- **Integradores:** Para desenvolver integrações entre sistemas existentes e o Ladesa, assegurando interoperabilidade e conformidade com padrões estabelecidos.

- **Analistas de Sistemas:** Para entender como os dados são modelados e gerenciados dentro do ecossistema Ladesa.

### Pacote C# / DotNet

[![NuGet Package][nuget-package-src]][nuget-package-href] [![NuGet Stable Version][nuget-package-stable-version-src]][nuget-package-versions-href]

<details open>

<summary>Guia para a utilização do Pacote C# / DotNet</summary>

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

</details>

### Pacote TypeScript / JavaScript

[![NPM Package][npm-package-src]][npm-package-href] [![NPM Stable Version][npm-package-stable-version-src]][npm-package-versions-href]

<details open>

<summary>Guia para a utilização do Pacote TypeScript / JavaScript</summary>

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

</details>

### 💡 Por que isso é importante?

Para garantir que todos os sistemas funcionem perfeitamente, precisamos que eles se comuniquem de forma clara e padronizada.

O Ladesa desenvolve diversas soluções para a comunidade acadêmica, ajudando a gerenciar informações sobre salas, laboratórios e horários de aula.

## 😊 Como contribuir

Se você deseja contribuir para a Especificação do Ladesa, siga os passos abaixo:

1. **Fork do Repositório (`apenas para colaboradores externos`):** faça um fork do repositório para sua conta pessoal do GitHub.
2. **Crie uma Branch:** Crie um branch para sua contribuição, por exemplo, `feat/nova-funcionalidade`.
3. **Faça as Alterações:** Implemente suas mudanças e faça commits explicativos.
4. **Pull Request:** Envie um Pull Request para o branch principal do repositório original com uma descrição detalhada das suas mudanças.

Revisões e sugestões são bem-vindas. O objetivo é manter a especificação clara, útil e atualizada para todos os usuários.

> [!INFO]  
> Este projeto é livre e de código aberto, e todos são bem-vindos para obter o código-fonte, entender, modificar, utilizar para outros fins e compartilhar!

## 🧑‍💻 Desenvolvimento Local

Para você realizar o desenvolvimento local, preparamos o guia a seguir, com os seguintes conteúdos:

- Apresentação dos requisitos necessários;
- Obtenção do código fonte;
- Entendimento da estrutura do projeto;
- Iniciação ao desenvolvimento;
- Realização de alterações;
- Geração dos artefatos da especificação.

<details open>

<summary>Guia para o Desenvolvimento Local</summary>

### Pré-requisitos

Para o desenvolvimento local, é necessário preparar o seu ambiente de trabalho para mexer com este projeto.

A seguir, estão listadas as tecnologias requisitadas para ter no computador a fim de configurar o ambiente de desenvolvimento.

- [Acesso à Linha de Comando](https://docs.ladesa.com.br/developers/tutorials/os/command-line/);
- [Git](https://docs.ladesa.com.br/developers/tutorials/source-code/git/);
- [Node.js](https://docs.ladesa.com.br/developers/tutorials/platforms/node/) + Corepack;
- dotnet.

> [!TIP]
> Preparamos dicas e tutoriais para você acerca de cada pré-requisito,
> **basta clicar nos links** para saber mais.

### Obter o código-fonte

O primeiro passo para trabalhar com a Especificação do Ladesa é obter uma cópia dos arquivos deste repositório.

Por meio dos comandos a seguir, você terá em sua máquina de desenvolvimento o acesso a um clone do repositório deste projeto:

```sh
git clone https://github.com/ladesa-ro/especificacao.git
cd especificacao
```

### Instalar as dependências

```sh
pnpm install
```

### Estrutura do projeto

> [!NOTE]  
> Em progresso.

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

<details open>

<summary>Outros comandos</summary>

| Comando                         | Ação                                                |
| :------------------------------ | :-------------------------------------------------- |
| `pnpm run -w lint:check`        | Checa as regras do lint.                            |
| `pnpm run -w lint:fix`          | Corrige erros resolviveis de lint.                  |
| `pnpm run -w format:check`      | Checa as formatações dos arquivos.                  |
| `pnpm run -w format:fix`        | Corrige as formatações inconsistêntes dos arquivos. |
| `pnpm run -w code-static:check` | Checagem de lint e formatação.                      |

</details>

</details>

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

[ladesa-docs-community]: https://docs.ladesa.com.br/community
[ladesa-docs-dev]: https://docs.ladesa.com.br/developers
[ladesa-especificacao-issues]: https://github.com/ladesa-ro/especificacao/issues
[ladesa-especificacao-repo-automation]: https://github.com/ladesa-ro/especificacao/tree/development/.github/workflows

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
