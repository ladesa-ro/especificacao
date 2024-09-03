<h1 align="center">Especificação do Ladesa</h1>

<p align="center">📜 Definição de dados e entidades do Ladesa 📜</p>

<div align="center">
  <a href="https://github.com/ladesa-ro/especificacao">
    <img alt="Repositório de Código no GitHub" src="https://img.shields.io/badge/GitHub-Especificação-118d3b?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=18181b&color=118d3b" />
  </a>
  <a href="https://docs.ladesa.com.br/developers/">
    <img alt="Documentação" src="https://img.shields.io/badge/DOCS.LADESA-118d3b?style=for-the-badge&logo=readme&logoColor=white&label=Documenta%C3%A7%C3%A3o&labelColor=18181b" />
  </a>
</div>

## 🚀 O que você encontra aqui

- **Definição de Entidades:** Tudo sobre as entidades do Ladesa, suas propriedades e como se relacionam;
- **Modelos de Dados:** Formatos e estruturas dos dados para comunicação entre sistemas;
- **Artefatos de Integração:** Esquemas JSON, pacotes NuGet para C#, e pacotes NPM para JavaScript/TypeScript, todos gerados automaticamente;
- **Documentação e Guias de Integração:** Passo a passo para integrar seus sistemas com o Ladesa sem complicações.

## 🧭 Por onde começar?

> [!NOTE]  
> Em progresso.

## 💡 Por que isso é importante?

O Ladesa desenvolve soluções para a comunidade acadêmica, ajudando a gerenciar informações sobre salas, laboratórios, professores e cursos. Para garantir que todos os sistemas funcionem perfeitamente, precisamos de uma documentação clara e padronizada.

## Conteúdo

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [📓 Utilização](#-utilização)
- [😊 Como contribuir](#-como-contribuir)
- [🧑‍💻 Desenvolvimento Local](#-desenvolvimento-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Obter o código-fonte](#obter-o-código-fonte)
  - [Instalar as dependências](#instalar-as-dependências)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [Gerar os artefatos da especificação](#gerar-os-artefatos-da-especificação)
  - [Comandos](#comandos)
- [⚖️ Licença](#%EF%B8%8F-licença)
- [👋 Contato](#-contato)

<!-- TOC end -->

## 📓 Utilização

> [!NOTE]  
> Em progresso.

## 😊 Como contribuir

Se você deseja contribuir para a Especificação do Ladesa, siga os passos abaixo:

1. **Fork do Repositório (`apenas para colaboradores externos`):** faça um fork do repositório para sua conta pessoal do GitHub.
2. **Crie uma Branch:** Crie um branch para sua contribuição, por exemplo, `feat/nova-funcionalidade`.
3. **Faça as Alterações:** Implemente suas mudanças e faça commits explicativos.
4. **Pull Request:** Envie um Pull Request para o branch principal do repositório original com uma descrição detalhada das suas mudanças.

Revisões e sugestões são bem-vindas. O objetivo é manter a especificação clara, útil e atualizada para todos os usuários.

## 🧑‍💻 Desenvolvimento Local

Após checar os requisitos necessários, você será guiado para obter o código-fonte deste sistema e saber, dentre outras coisas, como iniciar o desenvolvimento, fazer alterações e gerar os artefatos da especificação.

Este projeto é livre e de código aberto, e todos são bem-vindos para obter o código-fonte, entender, modificar, utilizar para outros fins e compartilhar!

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

| Comando                         | Ação                                                |
| :------------------------------ | :-------------------------------------------------- |
| `pnpm install`                  | Instala as dependências.                            |
| `pnpm run -w build`             | Gera os artefatos da especificação.                 |
| `pnpm run -w lint:check`        | Checa as regras do lint.                            |
| `pnpm run -w lint:fix`          | Corrige erros resolviveis de lint.                  |
| `pnpm run -w format:check`      | Checa as formatações dos arquivos.                  |
| `pnpm run -w format:fix`        | Corrige as formatações inconsistêntes dos arquivos. |
| `pnpm run -w code-static:check` | Checagem de lint e formatação.                      |
| `pnpm run -w code-static:fix`   | Correção de lint e formatação.                      |

## 👋 Contato

Se você tiver dúvidas, sugestões ou precisar de ajuda, entre em contato conosco:

- **Email:** `em breve`.
- **Comunidade:** Participe de discussões e interações na comunidade do Ladesa através do [Ladesa Community][ladesa-community].
- **GitHub Issues:** Para relatar bugs ou sugerir melhorias, utilize a seção de [Issues do GitHub][ladesa-especificacao-issues].

## ⚖️ Licença

[MIT](./LICENSE) © 2024 – presente, Ladesa.

---

⭐ Marque este repositório com estrela se achar útil!

<!-- Links -->

[ladesa-community]: https://docs.ladesa.com.br/community
[ladesa-especificacao-issues]: https://github.com/ladesa-ro/especificacao/issues
