# especificacao

[![CI][action-ci-src]][action-ci-href] [![stable version][stable-version-src]][stable-version-href]
[![nightly version][nightly-version-src]][nightly-version-href]

## Ecossistema

| Plataforma            | Pacote                                                    | Badges                                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C#/DotNet             | [![NuGet Package][nuget-package-src]][nuget-package-href] | [![NuGet Package Source Code][source-code-src]][source-dotnet-href] [![NuGet Stable Version][nuget-package-stable-version-src]][nuget-package-versions-href] [![NuGet Nightly Version][nuget-package-nightly-version-src]][nuget-package-versions-href] |
| TypeScript/JavaScript | [![NPM Package][npm-package-src]][npm-package-href]       | [![NPM Package Source Code][source-code-src]][source-npm-href] [![NPM Stable Version][npm-package-stable-version-src]][npm-package-versions-href] [![NPM Nightly Version][npm-package-nightly-version-src]][npm-package-versions-href]                  |

## Instalação

### C# / DotNet

[![NuGet Package][nuget-package-src]][nuget-package-href] [![NuGet Package Source Code][source-code-src]][source-dotnet-href]

#### Versão estável do pacote NuGet

[![NuGet Stable Version][nuget-package-stable-version-src]][nuget-package-versions-href]

```sh
dotnet add package Ladesa.Dtos
```

#### Versão nightly do pacote NuGet

[![NuGet Nightly Version][nuget-package-nightly-version-src]][nuget-package-versions-href]

```sh
dotnet add package Ladesa.Dtos --prerelease
```

### TypeScript / JavaScript

[![NPM Package][npm-package-src]][npm-package-href] [![NPM Package Source Code][source-code-src]][source-npm-href]

#### Versão estável do pacote NPM

[![NPM Stable Version][npm-package-stable-version-src]][npm-package-versions-href]

```sh
# com npm
npm install @ladesa-ro/especificacao@latest

# com yarn
yarn add @ladesa-ro/especificacao@latest

# com pnpm
pnpm add @ladesa-ro/especificacao@latest
```

#### Versão nightly do pacote NPM

[![NPM Nightly Version][npm-package-nightly-version-src]][npm-package-versions-href]

```sh
# com npm
npm install @ladesa-ro/especificacao@next

# com yarn
yarn add @ladesa-ro/especificacao@next

# com pnpm
pnpm add @ladesa-ro/especificacao@next
```

## Hackeando

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

[action-ci-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/especificacao/ci.yml?style=flat&logo=github&logoColor=white&label=CI&labelColor=18181B&color=F0DB4F
[action-ci-href]: https://github.com/ladesa-ro/especificacao/actions/workflows/ci.yml

<!-- Badges / Source Code  -->

[source-code-src]: https://img.shields.io/badge/repo-GitHub-white?style=flat&logo=git&logoColor=white&labelColor=%2318181B
[source-npm-href]: https://github.com/ladesa-ro/especificacao/tree/next/integrations/npm/ladesa-especificacao
[source-dotnet-href]: https://github.com/ladesa-ro/especificacao/tree/next/integrations/dotnet/Ladesa.Dtos

<!-- Badges / Versions / Stable -->

[stable-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fladesa-ro%2Fespecificacao%2Fraw%2Fmain%2Fintegrations%2Fnpm%2Fladesa-especificacao%2Fpackage.json&query=%24.version&label=stable&prefix=v&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F
[stable-version-href]: https://github.com/ladesa-ro/especificacao/tree/main

<!-- Badges / Versions / Nightly -->

[nightly-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fladesa-ro%2Fespecificacao%2Fraw%2Fnext%2Fintegrations%2Fnpm%2Fladesa-especificacao%2Fpackage.json&query=%24.version&label=nightly&prefix=v&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F
[nightly-version-href]: https://github.com/ladesa-ro/especificacao/tree/next

<!-- Badges / Integrations / NPM -->

[npm-package-src]: https://img.shields.io/badge/npm-%40ladesa--ro%2Fespecificacao-18181B?style=flat&logo=npm&logoColor=white&labelColor=%23CB3837
[npm-package-href]: https://npmjs.com/package/@ladesa-ro/especificacao

<!-- Badges / Integrations / NPM / Versions -->

[npm-package-versions-href]: https://www.npmjs.com/package/@ladesa-ro/especificacao?activeTab=versions
[npm-package-stable-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fespecificacao&query=%24%5B%22dist-tags%22%5D.latest&prefix=v&style=flat&logo=npm&logoColor=white&label=stable&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F
[npm-package-nightly-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fespecificacao&query=%24%5B%22dist-tags%22%5D.next&prefix=v&style=flat&logo=npm&logoColor=white&label=nightly&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F

<!-- Badges / Integrations / NuGet -->

[nuget-package-src]: https://img.shields.io/badge/nuget-Ladesa.Dtos-18181B?style=flat&logo=nuget&logoColor=white&labelColor=%23004880
[nuget-package-href]: https://www.nuget.org/packages/Ladesa.Dtos/

<!-- Badges / Integrations / NuGet / Versions -->

[nuget-package-versions-href]: https://www.nuget.org/packages/Ladesa.Dtos#versions-body-tab
[nuget-package-stable-version-src]: https://img.shields.io/nuget/v/Ladesa.Dtos?style=flat&style=flat&logo=npm&logoColor=white&label=stable&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F
[nuget-package-nightly-version-src]: https://img.shields.io/nuget/vpre/Ladesa.Dtos?style=flat&style=flat&logo=npm&logoColor=white&label=nightly&logo=git&logoColor=white&style=flat&colorA=18181B&colorB=F0DB4F
