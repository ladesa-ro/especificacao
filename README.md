<h1 align="center">Especificação do Ladesa</h1>

<p align="center">📜 Fonte da verdade que define a estrutura de informações, entidades e dados de transferência 📜</p>

<div align="center">
  <a href="https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml?query=branch%3Adevelopment">
    <img alt="CI development" src="https://img.shields.io/github/actions/workflow/status/ladesa-ro/especificacao/ci.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=development&branch=development&labelColor=18181B" />
  </a>
  <a href="https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml?query=branch%3Aproduction">
    <img alt="CI production" src="https://img.shields.io/github/actions/workflow/status/ladesa-ro/especificacao/ci.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=production&branch=production&labelColor=18181B" />
  </a>
  <a href="#">
    <img alt="Documentação" src="https://img.shields.io/badge/DOCS.LADESA-118d3b?style=for-the-badge&logo=readme&logoColor=white&label=Documenta%C3%A7%C3%A3o&labelColor=18181b" />
  </a>
</div>

## Conteúdo

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Conteúdo](#conteúdo)
- [Motivação](#motivação)
- [Propósito](#propósito)
  - [Objetivo Geral](#objetivo-geral)
  - [Objetivos Específicos](#objetivos-específicos)
- [Desenvolvimento Local](#desenvolvimento-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Obter o código-fonte do projeto](#obter-o-código-fonte-do-projeto)
- [Licença](#licença)

<!-- TOC end -->

## Motivação

Os sistemas tecnológicos do Ladesa atuam para resolver problemas reais da comunidade acadêmica.

Dessa forma, o uso da tecnologia é moldado para armazenar, gerenciar, processar e produzir informações pertinentes aos seus propósitos, como registros sobre salas de aula, laboratórios, usuários do sistema, professores, horários de aula e cursos.

Neste contexto, torna-se necessário que essas soluções informáticas lidem com representações de entidades físicas e abstratas de interesse aos seus funcionamentos.

## Propósito

Dada a demanda de que os aplicativos do Ladesa têm de lidar com as informações relativas às suas próprias finalidades, a _Especificação do Ladesa_ surge para padronizar e definir uma Linguagem Ubíqua a esse ecossistema.

### Objetivo Geral

Atuar como fonte da verdade que define a estrutura de informações, entidades e dados de transferência no contexto do ecossistema Ladesa.

### Objetivos Específicos

- Definir explicitamente quais são as entidades, atributos e ações que são pertinentes ao propósito e ao correto funcionamento dos sistemas do Ladesa;

- Gerar e publicar especificações que sigam padrões modernos e populares, para que seja possível a portabilidade e a integração na maioria das plataformas e linguagens de programação;

- Fornecer pacotes e guias atualizados de integração para as linguagens de programação populares que queiram integrar ao Ecossistema do Ladesa.

## Desenvolvimento Local

O _Especificação do Ladesa_ é um projeto livre e de código aberto, e todos são bem-vindos para obter o código-fonte, entender, modificar, utilizar para outros fins e compartilhar! Após checar os requisitos necessários, você será guiado para obter o código-fonte deste sistema e saber, dentre outras coisas, como iniciar o desenvolvimento, fazer alterações e gerar os artefatos da especificação.

### Pré-requisitos

Para o desenvolvimento local, é necessário preparar o seu ambiente de trabalho para mexer com este projeto.

A seguir, estão listadas as tecnologias requisitadas para ter no computador a fim de configurar o ambiente de desenvolvimento.

- [Acesso à Linha de Comando](https://docs.ladesa.com.br/developers/tutorials/os/command-line/);
- [Git](https://docs.ladesa.com.br/developers/tutorials/source-code/git/);
- [Node.js](https://docs.ladesa.com.br/developers/tutorials/platforms/node/) + Corepack.

> [!TIP]
> Preparamos dicas e tutoriais para você acerca de cada pré-requisito,
> **basta clicar nos links** para saber mais.

### Obter o código-fonte do projeto

O primeiro passo para trabalhar com a Especificação do Ladesa é obter uma cópia dos arquivos deste repositório.

Por meio dos comandos a seguir, você terá em sua máquina de desenvolvimento o acesso a um clone do repositório deste projeto:

```sh
git clone https://github.com/ladesa-ro/especificacao.git
cd especificacao
```

### Instalar as dependências do projeto

```sh
pnpm install
```

### Gerar os artefatos da especificação

```sh
pnpm run build
```

## Licença

[MIT](./LICENSE) © 2024 – presente, Ladesa.
