# especificacao

[![CI][action-ci-src]][action-ci-href] [![stable version][stable-version-src]][stable-version-href]
[![nightly version][nightly-version-src]][nightly-version-href]

## Ecossistema

| Plataforma                                                                        | Pacote                                                    | ◈ Badges ◈                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![C#][badge-platform-csharp] ![.NET][badge-platform-dotnet]                       | [![NuGet Package][nuget-package-src]][nuget-package-href] | « [![NuGet Stable Version][nuget-package-stable-version-src]][nuget-package-versions-href] [![NuGet Nightly Version][nuget-package-nightly-version-src]][nuget-package-versions-href] ⌶ [![NuGet Package Source Code][source-code-small-src]][source-dotnet-href] » |
| ![JavaScript][badge-platform-javascript] ![TypeScript][badge-platform-typescript] | [![NPM Package][npm-package-src]][npm-package-href]       | « [![NPM Stable Version][npm-package-stable-version-src]][npm-package-versions-href] [![NPM Nightly Version][npm-package-nightly-version-src]][npm-package-versions-href] ⌶ [![NPM Package Source Code][source-code-small-src]][source-npm-href] »                  |

[badge-platform-csharp]: https://img.shields.io/badge/C%23-black?style=flat&logo=csharp&logoColor=%23512BD4&labelColor=white&color=%23512BD4
[badge-platform-dotnet]: https://img.shields.io/badge/dotnet-black?style=flat&logo=dotnet&logoColor=%23512BD4&labelColor=white&color=%23512BD4
[badge-platform-javascript]: https://img.shields.io/badge/JavaScript-black?style=flat&logo=javascript&logoColor=black&labelColor=white&color=%23F7DF1E
[badge-platform-typescript]: https://img.shields.io/badge/TypeScript-white?style=flat&logo=typescript&labelColor=white&color=%233178C6

## Instalação

## Configuração Local

### Obter o código-fonte do projeto

```sh
git clone https://github.com/ladesa-ro/especificacao.git;
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

<!-- Badges -->

<!-- Badges / Actions  -->

[action-ci-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/especificacao/ci.yml?style=flat&logo=github&logoColor=white&label=CI&labelColor=18181B
[action-ci-href]: https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml

<!-- Badges / Source Code  -->

[source-code-small-src]: https://img.shields.io/badge/_-GitHub-white?style=flat&logo=git&logoColor=white&labelColor=%2318181B
[source-npm-href]: https://github.com/ladesa-ro/especificacao/tree/next/integrations/npm/ladesa-especificacao
[source-dotnet-href]: https://github.com/ladesa-ro/especificacao/tree/next/integrations/dotnet/Ladesa.Dtos

<!-- Badges / Versions / Stable -->

[stable-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fladesa-ro%2Fespecificacao%2Fraw%2Fmain%2Fintegrations%2Fnpm%2Fladesa-especificacao%2Fpackage.json&query=%24.version&label=stable&prefix=v&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=white
[stable-version-href]: https://github.com/ladesa-ro/especificacao/tree/main

<!-- Badges / Versions / Nightly -->

[nightly-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fladesa-ro%2Fespecificacao%2Fraw%2Fnext%2Fintegrations%2Fnpm%2Fladesa-especificacao%2Fpackage.json&query=%24.version&label=nightly&prefix=v&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=white
[nightly-version-href]: https://github.com/ladesa-ro/especificacao/tree/next

<!-- Badges / Integrations / NPM -->

[npm-package-src]: https://img.shields.io/badge/npm-%40ladesa--ro%2Fespecificacao-18181B?style=flat&logo=npm&logoColor=white&labelColor=%23CB3837
[npm-package-href]: https://npmjs.com/package/@ladesa-ro/especificacao

<!-- Badges / Integrations / NPM / Versions -->

[npm-package-versions-href]: https://www.npmjs.com/package/@ladesa-ro/especificacao?activeTab=versions
[npm-package-stable-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fespecificacao&query=%24%5B%22dist-tags%22%5D.latest&prefix=v&style=flat&logo=npm&logoColor=white&label=stable&style=flat&colorA=18181B&colorB=white
[npm-package-nightly-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fespecificacao&query=%24%5B%22dist-tags%22%5D.next&prefix=v&style=flat&logo=npm&logoColor=white&label=nightly&style=flat&colorA=18181B&colorB=white

<!-- Badges / Integrations / NuGet -->

[nuget-package-src]: https://img.shields.io/badge/nuget-Ladesa.Dtos-18181B?style=flat&logo=nuget&logoColor=white&labelColor=%23004880
[nuget-package-href]: https://www.nuget.org/packages/Ladesa.Dtos/

<!-- Badges / Integrations / NuGet / Versions -->

[nuget-package-versions-href]: https://www.nuget.org/packages/Ladesa.Dtos#versions-body-tab
[nuget-package-stable-version-src]: https://img.shields.io/nuget/v/Ladesa.Dtos?style=flat&style=flat&logo=nuget&logoColor=white&label=stable&style=flat&colorA=18181B&colorB=white
[nuget-package-nightly-version-src]: https://img.shields.io/nuget/vpre/Ladesa.Dtos?style=flat&style=flat&logo=nuget&logoColor=white&label=nightly&style=flat&colorA=18181B&colorB=white
