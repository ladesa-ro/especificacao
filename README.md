# especificacao

[![CI](https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml/badge.svg)](https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml)

## Ecossistema

| Plataforma            | Projeto                    | Badges                                                                                                                                                                                                                                                                                                                |
| --------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C#/DotNet             | `Ladesa.Dtos`              | [![Static Badge](https://img.shields.io/badge/Source_Code-GitHub-blue?style=flat&logo=git)](https://github.com/ladesa-ro/especificacao/tree/next/integrations/npm/ladesa-especificacao) [![NuGet Version](https://img.shields.io/nuget/v/Ladesa.Dtos)](https://www.nuget.org/packages/Ladesa.Dtos/)       |
| TypeScript/JavaScript | `@ladesa-ro/especificacao` | [![Static Badge](https://img.shields.io/badge/Source_Code-GitHub-blue?style=flat&logo=git)](https://github.com/ladesa-ro/especificacao/tree/next/integrations/dotnet/Ladesa.Dtos) [![NPM Version](https://img.shields.io/npm/v/%40ladesa-ro%2Fespecificacao)](https://www.npmjs.com/package/@ladesa-ro/especificacao) |

## Hackeando

```sh
git clone https://github.com/ladesa-ro/especificacao.git
cd especificacao;
```

```sh
pnpm install;
```

```sh
pnpm run -w spec:compile;
pnpm run -w spec:codegen;
pnpm run -w build;
```
