export type IPaginatedSortByDto = {
  /** Propriedade ordenada. */
  property: string;
  /** Modo de ordenação. */
  mode: string;
};

export type IPaginatedResultMetaFilterDto = {
  /** Propriedade filtrada. */
  property: string;
  /** Restrições de filtragem */
  restrictions: Array<string>;
};

export type IPaginatedResultMetaDto = {
  /** Quantidade de itens por página. */
  itemsPerPage: number;
  /** Total de itens. */
  totalItems: number;
  /** Página atual. */
  currentPage: number;
  /** Quantidade total de páginas. */
  totalPages: number;
  /** Termo textual da busca. */
  search: string;
  /** Ordenação. */
  sortBy: Array<IPaginatedSortByDto>;
  /** Filtros */
  filter: Array<IPaginatedResultMetaFilterDto>;
};

export type IPaginatedResultLinksDto = {
  /** Descrição não fornecida. */
  first: string;
  /** Descrição não fornecida. */
  previous: string;
  /** Descrição não fornecida. */
  current: string;
  /** Descrição não fornecida. */
  next: string;
  /** Descrição não fornecida. */
  last: string;
};

export type IPaginatedBaseInputDto = {
  /** Limitar a quantidade de resultados por página. */
  limit: number | null | undefined;
  /** Definir a página de consulta. */
  page: number | null | undefined;
  /** Busca textual. */
  search: string | null | undefined;
};

export type IPaginatedInputDto = {
  /** Limitar a quantidade de resultados por página. */
  limit: number | null | undefined;
  /** Definir a página de consulta. */
  page: number | null | undefined;
  /** Busca textual. */
  search: string | null | undefined;
  /** Ordenação. */
  sortBy: Array<IPaginatedSortByDto>;
  /** Filtros */
  filter: Array<IPaginatedResultMetaFilterDto>;
};

export type ISearchDto = {
  /** Página. */
  page: number | undefined;
  /** Limite de resultados por página. */
  limit: number | undefined;
  /** Busca textual. */
  search: string | undefined;
  /** Ordenação. */
  sortBy: Array<string> | undefined;
  /** Filtros. */
  filters: Array<Array<string>> | undefined;
};

export type IArquivoDto = {
  /** ID do Registro. */
  id: string;
  /** Nome. */
  name: string;
  /** Mime-type. */
  mimeType: string;
  /** Tamanho (em bytes). */
  sizeBytes: number;
  /** Estratégia de armazenamento. */
  storageType: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IArquivoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IArquivoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome. */
  name: string;
  /** Mime-type. */
  mimeType: string;
  /** Tamanho (em bytes). */
  sizeBytes: number;
  /** Estratégia de armazenamento. */
  storageType: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IImagemDto = {
  /** ID do Registro. */
  id: string;
  /** Descrição. */
  descricao: string;
  /** Versões. */
  versoes: Array<IImagemArquivoFindOneFromImagemResultDto>;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IImagemFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IImagemFindOneFromImagemArquivoResultDto = {
  /** ID do Registro. */
  id: string;
};

export type IImagemFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Descrição. */
  descricao: string;
  /** Versões. */
  versoes: Array<IImagemArquivoFindOneFromImagemResultDto>;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IImagemArquivoDto = {
  /** ID do Registro. */
  id: string;
  /** Largura da imagem. */
  largura: number | null;
  /** Altura da imagem. */
  altura: number | null;
  /** Formato da imagem. */
  formato: string;
  /** Mime Type da imagem. */
  mimeType: string;
  /** Imagem. */
  imagem: IImagemFindOneFromImagemArquivoResultDto;
  /** Arquivo. */
  arquivo: IArquivoFindOneFromImagemArquivoResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IImagemArquivoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IImagemArquivoFindOneFromImagemResultDto = {
  /** ID do Registro. */
  id: string;
  /** Largura da imagem. */
  largura: number | null;
  /** Altura da imagem. */
  altura: number | null;
  /** Formato da imagem. */
  formato: string;
  /** Mime Type da imagem. */
  mimeType: string;
  /** Arquivo. */
  arquivo: IArquivoFindOneFromImagemArquivoResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IImagemArquivoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Largura da imagem. */
  largura: number | null;
  /** Altura da imagem. */
  altura: number | null;
  /** Formato da imagem. */
  formato: string;
  /** Mime Type da imagem. */
  mimeType: string;
  /** Imagem. */
  imagem: IImagemFindOneFromImagemArquivoResultDto;
  /** Arquivo. */
  arquivo: IArquivoFindOneFromImagemArquivoResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IAuthLoginInputDto = {
  /** Matrícula SIAPE. */
  matriculaSiape: string;
  /** Senha do usuário. */
  senha: string;
};

export type IAuthRefreshInputDto = {
  /** Token de refresh. */
  refreshToken: string;
};

export type IAuthWhoAmIResultDto = {
  /** Usuário autenticado. */
  usuario: IUsuarioFindOneResultDto | null;
};

export type IAuthSessionCredentialsDto = {
  /** Token de acesso. */
  access_token: string | null;
  /** Tipo do token. */
  token_type: string | null;
  /** Token de identificação. */
  id_token: string | null;
  /** Token de refresh. */
  refresh_token: string | null;
  /** Tempo de expiração do token. */
  expires_in: number | null;
  /** Tempo de expiração do token. */
  expires_at: number | null;
  /** Estado da sessão. */
  session_state: string | null;
  /** Escopo da autenticação. */
  scope: string | null;
};

export type IAuthSetInitialPasswordInputDto = {
  /** Matrícula SIAPE. */
  matriculaSiape: string;
  /** Nova senha. */
  senha: string;
};

export type IUsuarioDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do usuário. */
  nome: string;
  /** Matrícula Siape do usuário. */
  matriculaSiape: string;
  /** E-mail do usuário. */
  email: string;
  /** Indentifica é um super usuário. */
  isSuperUser: boolean;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Imagem de perfil */
  imagemPerfil: IImagemFindOneResultDto | null;
  /** Vínculos ativos do Usuário. */
  vinculosAtivos: Array<IVinculoFindOneResultDto>;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IUsuarioFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IUsuarioFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do usuário. */
  nome: string;
  /** Matrícula Siape do usuário. */
  matriculaSiape: string;
  /** E-mail do usuário. */
  email: string;
  /** Indentifica é um super usuário. */
  isSuperUser: boolean;
  /** Imagem de capa */
  imagemCapa: IImagemDto | null;
  /** Vínculos ativos do Usuário. */
  vinculosAtivos: Array<IVinculoDto>;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IUsuarioInputCreateDto = {
  /** Nome do usuário. */
  nome: string;
  /** Matrícula Siape do usuário. */
  matriculaSiape: string;
  /** E-mail do usuário. */
  email: string;
};

export type IUsuarioInputUpdateDto = {
  /** Nome do usuário. */
  nome: string | undefined;
  /** Matrícula Siape do usuário. */
  matriculaSiape: string | undefined;
  /** E-mail do usuário. */
  email: string | undefined;
};

export type IVinculoDto = {
  /** ID do Registro. */
  id: string;
  /** Indica se o vínculo está ativo. */
  ativo: boolean;
  /** Cargo do usuário no vínculo. */
  cargo: string;
  /** Campus associado ao vínculo. */
  campus: ICampusFindOneResultDto;
  /** Usuário associado ao vínculo. */
  usuario: IUsuarioFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IVinculoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IVinculoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Indica se o vínculo está ativo. */
  ativo: boolean;
  /** Cargo do usuário no vínculo. */
  cargo: string;
  /** Campus associado ao vínculo. */
  campus: ICampusFindOneResultDto;
  /** Usuário associado ao vínculo. */
  usuario: IUsuarioFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IVinculoUpdateDto = {
  /** Campus associado ao vínculo. */
  campus: ICampusFindOneInputDto;
  /** Usuário associado ao vínculo. */
  usuario: IUsuarioFindOneInputDto;
  /** Cargos do usuário no vínculo. */
  cargos: Array<string>;
};

export type IAmbienteDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do ambiente/sala */
  nome: string;
  /** Descrição do ambiente/sala. */
  descricao: string;
  /** Código do ambiente/sala. */
  codigo: string;
  /** Capacidade do ambiente/sala. */
  capacidade: number | null;
  /** Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química. */
  tipo: string | null;
  /** Bloco que o ambiente/sala pertence. */
  bloco: IBlocoFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IAmbienteFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IAmbienteFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do ambiente/sala */
  nome: string;
  /** Descrição do ambiente/sala. */
  descricao: string;
  /** Código do ambiente/sala. */
  codigo: string;
  /** Capacidade do ambiente/sala. */
  capacidade: number | null;
  /** Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química. */
  tipo: string | null;
  /** Bloco que o ambiente/sala pertence. */
  bloco: IBlocoFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IAmbienteInputCreateDto = {
  /** Nome do ambiente/sala */
  nome: string;
  /** Descrição do ambiente/sala. */
  descricao: string;
  /** Código do ambiente/sala. */
  codigo: string;
  /** Capacidade do ambiente/sala. */
  capacidade: number | null;
  /** Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química. */
  tipo: string | null;
  /** Bloco que o ambiente/sala pertence. */
  bloco: IBlocoFindOneInputDto;
};

export type IAmbienteInputUpdateDto = {
  /** Nome do ambiente/sala */
  nome: string | undefined;
  /** Descrição do ambiente/sala. */
  descricao: string | undefined;
  /** Código do ambiente/sala. */
  codigo: string | undefined;
  /** Capacidade do ambiente/sala. */
  capacidade: number | null | undefined;
  /** Tipo do ambiente/sala. Ex.: sala aula, auditório, laboratório de química. */
  tipo: string | null | undefined;
  /** Bloco que o ambiente/sala pertence. */
  bloco: IBlocoFindOneInputDto | undefined;
};

export type IAmbienteFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IAmbienteFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IBlocoDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do Bloco. */
  nome: string;
  /** Código do Bloco. */
  codigo: string;
  /** Campus. */
  campus: ICampusFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Ambientes. */
  ambientes: Array<IAmbienteFindOneResultDto>;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IBlocoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IBlocoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do Bloco. */
  nome: string;
  /** Código do Bloco. */
  codigo: string;
  /** Campus. */
  campus: ICampusFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IBlocoInputCreateDto = {
  /** Nome do Bloco. */
  nome: string;
  /** Código do Bloco. */
  codigo: string;
  /** Campus. */
  campus: ICampusFindOneResultDto;
};

export type IAmbienteInputUpdateDto = {
  /** Nome do Bloco. */
  nome: string | undefined;
  /** Código do Bloco. */
  codigo: string | undefined;
  /** Campus. */
  campus: ICampusFindOneResultDto | undefined;
};

export type IBlocoFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IBlocoFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ICampusDto = {
  /** ID do Registro. */
  id: string;
  /** Nome fantasia do Campus. */
  nomeFantasia: string;
  /** Razão social do Campus. */
  razaoSocial: string;
  /** Apelido do Campus. */
  apelido: string;
  /** CNPJ do Campus. */
  cnpj: string;
  /** Endereço do Campus */
  endereco: IEnderecoFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICampusFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ICampusFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome fantasia do Campus. */
  nomeFantasia: string;
  /** Razão social do Campus. */
  razaoSocial: string;
  /** Apelido do Campus. */
  apelido: string;
  /** CNPJ do Campus. */
  cnpj: string;
  /** Endereço do Campus */
  endereco: IEnderecoFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICampusInputCreateDto = {
  /** Nome fantasia do Campus. */
  nomeFantasia: string;
  /** Razão social do Campus. */
  razaoSocial: string;
  /** Apelido do Campus. */
  apelido: string;
  /** CNPJ do Campus. */
  cnpj: string;
  /** Endereço do Campus */
  endereco: IEnderecoInputDto;
};

export type IAmbienteInputUpdateDto = {
  /** Nome fantasia do Campus. */
  nomeFantasia: string | undefined;
  /** Razão social do Campus. */
  razaoSocial: string | undefined;
  /** Apelido do Campus. */
  apelido: string | undefined;
  /** CNPJ do Campus. */
  cnpj: string | undefined;
  /** Endereço do Campus */
  endereco: IEnderecoInputDto | undefined;
};

export type ICampusFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ICampusFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ICidadeDto = {
  /** ID do Registro. */
  id: number;
  /** Nome oficial da Cidade. */
  nome: string;
  /** Estado da Cidade. */
  estado: IEstadoFindOneResultDto;
};

export type ICidadeFindOneInputDto = {
  /** ID do Registro. */
  id: number;
};

export type ICidadeFindOneResultDto = {
  /** ID do Registro. */
  id: number;
  /** Nome oficial da Cidade. */
  nome: string;
  /** Estado da Cidade. */
  estado: IEstadoFindOneResultDto;
};

export type ICidadeFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ICidadeFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IEnderecoDto = {
  /** ID do Registro. */
  id: string;
  /** Descrição não fornecida. */
  cep: string;
  /** Logradouro */
  logradouro: string;
  /** Número */
  numero: number;
  /** Bairro */
  bairro: string;
  /** Complemento */
  complemento: string | null;
  /** Ponto de referência */
  pontoReferencia: string | null;
  /** Cidade */
  cidade: ICidadeFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEnderecoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IEnderecoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Descrição não fornecida. */
  cep: string;
  /** Logradouro */
  logradouro: string;
  /** Número */
  numero: number;
  /** Bairro */
  bairro: string;
  /** Complemento */
  complemento: string | null;
  /** Ponto de referência */
  pontoReferencia: string | null;
  /** Cidade */
  cidade: ICidadeFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEnderecoInputDto = {
  /** Descrição não fornecida. */
  cep: string;
  /** Logradouro */
  logradouro: string;
  /** Número */
  numero: number;
  /** Bairro */
  bairro: string;
  /** Complemento */
  complemento: string | null;
  /** Ponto de referência */
  pontoReferencia: string | null;
  /** Cidade */
  cidade: ICidadeFindOneInputDto;
};

export type IEstadoDto = {
  /** ID do Registro. */
  id: number;
  /** Nome oficial do Estado. */
  nome: string;
  /** Sigla do Estado. */
  sigla: string;
};

export type IEstadoFindOneInputDto = {
  /** ID do Registro. */
  id: number;
};

export type IEstadoFindOneResultDto = {
  /** ID do Registro. */
  id: number;
  /** Nome oficial do Estado. */
  nome: string;
  /** Sigla do Estado. */
  sigla: string;
};

export type IEstadoFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IEstadoFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IReservaDto = {
  /** ID do Registro. */
  id: string;
  /** Situação da reserva. */
  situacao: string;
  /** Motivo da reserva. */
  motivo: string | null;
  /** Definir tipo da reserva. */
  tipo: string | null;
  /** Data e hora de início da reserva. */
  dataInicio: string | number | Date;
  /** Data e hora de término da reserva. */
  dataTermino: string | number | Date | null;
  /** Usuário que fez a reserva. */
  usuario: IUsuarioFindOneResultDto;
  /** Ambiente que foi reservado. */
  ambiente: IAmbienteFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IReservaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IReservaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Situação da reserva. */
  situacao: string;
  /** Motivo da reserva. */
  motivo: string | null;
  /** Definir tipo da reserva. */
  tipo: string | null;
  /** Data e hora de início da reserva. */
  dataInicio: string | number | Date;
  /** Data e hora de término da reserva. */
  dataTermino: string | number | Date | null;
  /** Usuário que fez a reserva. */
  usuario: IUsuarioFindOneResultDto;
  /** Ambiente que foi reservado. */
  ambiente: IAmbienteFindOneResultDto;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IReservaInputCreateDto = {
  /** Situação da reserva. */
  situacao: string;
  /** Motivo da reserva. */
  motivo: string | null;
  /** Definir tipo da reserva. */
  tipo: string | null;
  /** Data e hora de início da reserva. */
  dataInicio: string | number | Date;
  /** Data e hora de término da reserva. */
  dataTermino: string | number | Date | null;
  /** Usuário que fez a reserva. */
  usuario: IUsuarioFindOneInputDto;
  /** Ambiente que foi reservado. */
  ambiente: IAmbienteFindOneInputDto;
};

export type IReservaInputUpdateDto = {
  /** Situação da reserva. */
  situacao: string | undefined;
  /** Motivo da reserva. */
  motivo: string | null | undefined;
  /** Definir tipo da reserva. */
  tipo: string | null | undefined;
  /** Data e hora de início da reserva. */
  dataInicio: string | number | Date | undefined;
  /** Data e hora de término da reserva. */
  dataTermino: string | number | Date | null | undefined;
  /** Usuário que fez a reserva. */
  usuario: IUsuarioFindOneInputDto | undefined;
  /** Ambiente que foi reservado. */
  ambiente: IAmbienteFindOneInputDto | undefined;
};

export type IReservaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IReservaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ICursoDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do curso. */
  nome: string;
  /** Nome abreviado do curso. */
  nomeAbreviado: string;
  /** Campus que o curso pertence. */
  campus: ICampusFindOneResultDto;
  /** Modalidade a que o curso pertence. */
  modalidade: IModalidadeFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICursoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ICursoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do curso. */
  nome: string;
  /** Nome abreviado do curso. */
  nomeAbreviado: string;
  /** Campus que o curso pertence. */
  campus: ICampusFindOneResultDto;
  /** Modalidade a que o curso pertence. */
  modalidade: IModalidadeFindOneResultDto;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICursoInputCreateDto = {
  /** Nome do curso. */
  nome: string;
  /** Nome abreviado do curso. */
  nomeAbreviado: string;
  /** Campus que o curso pertence. */
  campus: ICampusFindOneInputDto;
  /** Modalidade a que o curso pertence. */
  modalidade: IModalidadeFindOneInputDto;
};

export type ICursoInputUpdateDto = {
  /** Nome do curso. */
  nome: string | undefined;
  /** Nome abreviado do curso. */
  nomeAbreviado: string | undefined;
  /** Campus que o curso pertence. */
  campus: ICampusFindOneInputDto | undefined;
  /** Modalidade a que o curso pertence. */
  modalidade: IModalidadeFindOneInputDto | undefined;
};

export type ICursoFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ICursoFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IDiarioDto = {
  /** ID do Registro. */
  id: string;
  /** Situação do diário. */
  situacao: boolean;
  /** Ano do diário. */
  ano: number;
  /** Etapa do diário. */
  etapa: string | null;
  /** Turma vinculada ao diário. */
  turma: ITurmaFindOneResultDto;
  /** Disciplina vinculada ao diário. */
  disciplina: IDisciplinaFindOneResultDto;
  /** Ambiente padrão. */
  ambientePadrao: IAmbienteFindOneResultDto | null;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDiarioFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IDiarioFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Situação do diário. */
  situacao: boolean;
  /** Ano do diário. */
  ano: number;
  /** Etapa do diário. */
  etapa: string | null;
  /** Turma vinculada ao diário. */
  turma: ITurmaFindOneResultDto;
  /** Disciplina vinculada ao diário. */
  disciplina: IDisciplinaFindOneResultDto;
  /** Ambiente padrão. */
  ambientePadrao: IAmbienteFindOneResultDto | null;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDiarioInputCreateDto = {
  /** Turma vinculada ao diário. */
  turma: ITurmaFindOneInputDto;
  /** Disciplina vinculada ao diário. */
  disciplina: IDisciplinaFindOneInputDto;
  /** Ambiente padrão. */
  ambientePadrao: IAmbienteFindOneInputDto | null;
};

export type IDiarioInputUpdateDto = {
  /** Turma vinculada ao diário. */
  turma: ITurmaFindOneInputDto | undefined;
  /** Disciplina vinculada ao diário. */
  disciplina: IDisciplinaFindOneInputDto | undefined;
  /** Ambiente padrão. */
  ambientePadrao: IAmbienteFindOneInputDto | null | undefined;
};

export type IDiarioFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IDiarioFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IDiarioProfessorDto = {
  /** ID do Registro. */
  id: string;
  /** Situação do vínculo. */
  situacao: boolean;
  /** Vínculo do usuário ao campus. */
  vinculo: IVinculoFindOneResultDto;
  /** Diário vinculado. */
  diario: IDiarioFindOneResultDto;
};

export type IDiarioProfessorFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IDiarioProfessorFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Situação do vínculo. */
  situacao: boolean;
  /** Vínculo do usuário ao campus. */
  vinculo: IVinculoFindOneResultDto;
  /** Diário vinculado. */
  diario: IDiarioFindOneResultDto;
};

export type IDiarioProfessorInputCreateDto = {
  /** Situação do vínculo. */
  situacao: boolean;
  /** Vínculo do usuário ao campus. */
  vinculo: IVinculoFindOneInputDto;
  /** Diário vinculado. */
  diario: IDiarioFindOneInputDto;
};

export type IDiarioProfessorInputUpdateDto = {
  /** Situação do vínculo. */
  situacao: boolean | undefined;
  /** Vínculo do usuário ao campus. */
  vinculo: IVinculoFindOneInputDto | undefined;
  /** Diário vinculado. */
  diario: IDiarioFindOneInputDto | undefined;
};

export type IDiarioProfessorFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IDiarioProfessorFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IModalidadeDto = {
  /** ID do Registro. */
  id: string;
  /** Nome da modalidade. */
  nome: string;
  /** Slug da modalidade. */
  slug: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IModalidadeFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IModalidadeFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome da modalidade. */
  nome: string;
  /** Slug da modalidade. */
  slug: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IModalidadeInputCreateDto = {
  /** Nome da modalidade. */
  nome: string;
  /** Slug da modalidade. */
  slug: string;
};

export type IModalidadeInputUpdateDto = {
  /** Nome da modalidade. */
  nome: string | undefined;
  /** Slug da modalidade. */
  slug: string | undefined;
};

export type IModalidadeFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IModalidadeFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IDisciplinaDto = {
  /** ID do Registro. */
  id: string;
  /** Nome da disciplina. */
  nome: string;
  /** Nome abreviado da disciplina. */
  nomeAbreviado: string;
  /** Carga horária da disciplina. */
  cargaHoraria: number;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDisciplinaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IDisciplinaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome da disciplina. */
  nome: string;
  /** Nome abreviado da disciplina. */
  nomeAbreviado: string;
  /** Carga horária da disciplina. */
  cargaHoraria: number;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDisciplinaInputCreateDto = {
  /** Nome da disciplina. */
  nome: string;
  /** Nome abreviado da disciplina. */
  nomeAbreviado: string;
  /** Carga horária da disciplina. */
  cargaHoraria: number;
};

export type IDisciplinaInputUpdateDto = {
  /** Nome da disciplina. */
  nome: string | undefined;
  /** Nome abreviado da disciplina. */
  nomeAbreviado: string | undefined;
  /** Carga horária da disciplina. */
  cargaHoraria: number | undefined;
};

export type IDisciplinaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IDisciplinaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ITurmaDto = {
  /** ID do Registro. */
  id: string;
  /** Período do Turma. */
  periodo: string;
  /** Curso da Turma. */
  curso: ICursoFindOneResultDto;
  /** Ambiente padrão da sala de aula. */
  ambientePadraoAula: IAmbienteFindOneResultDto | null | undefined;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ITurmaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ITurmaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Período do Turma. */
  periodo: string;
  /** Curso da Turma. */
  curso: ICursoFindOneResultDto;
  /** Ambiente padrão da sala de aula. */
  ambientePadraoAula: IAmbienteFindOneResultDto | null | undefined;
  /** Imagem de capa */
  imagemCapa: IImagemFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ITurmaInputCreateDto = {
  /** Período do Turma. */
  periodo: string;
  /** Curso da Turma. */
  curso: ICursoFindOneInputDto;
  /** Ambiente padrão da sala de aula. */
  ambientePadraoAula: IAmbienteFindOneInputDto | null | undefined;
};

export type ITurmaInputUpdateDto = {
  /** Período do Turma. */
  periodo: string | undefined;
  /** Curso da Turma. */
  curso: ICursoFindOneInputDto | undefined;
  /** Ambiente padrão da sala de aula. */
  ambientePadraoAula: IAmbienteFindOneInputDto | null | undefined;
};

export type ITurmaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ITurmaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IIntervaloDeTempoDto = {
  /** ID do Registro. */
  id: string;
  /** Horário que o intervalo de tempo inicia. */
  periodoInicio: string;
  /** Horário que o intervalo de tempo termina. */
  periodoFim: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IIntervaloDeTempoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Horário que o intervalo de tempo inicia. */
  periodoInicio: string;
  /** Horário que o intervalo de tempo termina. */
  periodoFim: string;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IIntervaloDeTempoInputDto = {
  /** Horário que o intervalo de tempo inicia. */
  periodoInicio: string;
  /** Horário que o intervalo de tempo termina. */
  periodoFim: string;
};

export type ICalendarioLetivoDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do calendário letivo. */
  nome: string;
  /** Ano do calendário letivo. */
  ano: string;
  /** Campus. */
  campus: ICampusFindOneResultDto;
  /** Modalidade. */
  modalidade: IModalidadeFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICalendarioLetivoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ICalendarioLetivoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do calendário letivo. */
  nome: string;
  /** Ano do calendário letivo. */
  ano: string;
  /** Campus. */
  campus: ICampusFindOneResultDto;
  /** Modalidade. */
  modalidade: IModalidadeFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ICalendarioLetivoInputCreateDto = {
  /** Nome do calendário letivo. */
  nome: string;
  /** Ano do calendário letivo. */
  ano: string;
  /** Campus. */
  campus: ICampusFindOneInputDto;
  /** Modalidade. */
  modalidade: IModalidadeFindOneInputDto | null;
};

export type ICalendarioLetivoInputUpdateDto = {
  /** Nome do calendário letivo. */
  nome: string | undefined;
  /** Ano do calendário letivo. */
  ano: string | undefined;
  /** Campus. */
  campus: ICampusFindOneInputDto | undefined;
  /** Modalidade. */
  modalidade: IModalidadeFindOneInputDto | null | undefined;
};

export type ICalendarioLetivoFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ICalendarioLetivoFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IDiaCalendarioDto = {
  /** ID do Registro. */
  id: string;
  /** Data. */
  data: string | number | Date;
  /** Define que o dia é letivo. */
  diaLetivo: boolean;
  /** Define que o dia é feriado. */
  feriado: boolean;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDiaCalendarioFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IDiaCalendarioFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Data. */
  data: string | number | Date;
  /** Define que o dia é letivo. */
  diaLetivo: boolean;
  /** Define que o dia é feriado. */
  feriado: boolean;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IDiaCalendarioInputCreateDto = {
  /** Data. */
  data: string | number | Date;
  /** Define que o dia é letivo. */
  diaLetivo: boolean;
  /** Define que o dia é feriado. */
  feriado: boolean;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null;
};

export type IDiaCalendarioInputUpdateDto = {
  /** Data. */
  data: string | number | Date | undefined;
  /** Define que o dia é letivo. */
  diaLetivo: boolean | undefined;
  /** Define que o dia é feriado. */
  feriado: boolean | undefined;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null | undefined;
};

export type IDiaCalendarioFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IDiaCalendarioFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IEtapaDto = {
  /** ID do Registro. */
  id: string;
  /** Número da etapa. */
  numero: number | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da etapa. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEtapaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IEtapaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Número da etapa. */
  numero: number | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da etapa. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEtapaInputCreateDto = {
  /** Número da etapa. */
  numero: number | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da etapa. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null;
};

export type IEtapaInputUpdateDto = {
  /** Número da etapa. */
  numero: number | null | undefined;
  /** Data de início. */
  dataInicio: string | number | Date | undefined;
  /** Data de término. */
  dataTermino: string | number | Date | undefined;
  /** Cor da etapa. */
  cor: string | null | undefined;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null | undefined;
};

export type IEtapaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IEtapaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IAulaDto = {
  /** ID do Registro. */
  id: string;
  /** Formato da aula. */
  formato: string | null;
  /** Data da aula. */
  data: string | number | Date;
  /** Intervalo de Tempo associado à aula. */
  intervaloDeTempo: IIntervaloDeTempoFindOneResultDto;
  /** Diário associado à aula. */
  diario: IDiarioFindOneResultDto;
  /** Ambiente associado à aula. */
  ambiente: IAmbienteFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IAulaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IAulaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Formato da aula. */
  formato: string | null;
  /** Data da aula. */
  data: string | number | Date;
  /** Intervalo de Tempo associado à aula. */
  intervaloDeTempo: IIntervaloDeTempoFindOneResultDto;
  /** Diário associado à aula. */
  diario: IDiarioFindOneResultDto;
  /** Ambiente associado à aula. */
  ambiente: IAmbienteFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IAulaInputCreateDto = {
  /** Formato da aula. */
  formato: string | null;
  /** Data da aula. */
  data: string | number | Date;
  /** Intervalo de Tempo associado à aula. */
  intervaloDeTempo: IIntervaloDeTempoInputDto;
  /** Diário associado à aula. */
  diario: IDiarioFindOneInputDto;
  /** Ambiente associado à aula. */
  ambiente: IAmbienteFindOneInputDto | null;
};

export type IAulaInputUpdateDto = {
  /** Formato da aula. */
  formato: string | null | undefined;
  /** Data da aula. */
  data: string | number | Date | undefined;
  /** Intervalo de Tempo associado à aula. */
  intervaloDeTempo: IIntervaloDeTempoInputDto | undefined;
  /** Diário associado à aula. */
  diario: IDiarioFindOneInputDto | undefined;
  /** Ambiente associado à aula. */
  ambiente: IAmbienteFindOneInputDto | null | undefined;
};

export type IAulaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IAulaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type IEventoDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do evento. */
  nome: string | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da Evento. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEventoFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type IEventoFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Nome do evento. */
  nome: string | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da Evento. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type IEventoInputCreateDto = {
  /** Nome do evento. */
  nome: string | null;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataTermino: string | number | Date;
  /** Cor da Evento. */
  cor: string | null;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null;
};

export type IEventoInputUpdateDto = {
  /** Nome do evento. */
  nome: string | null | undefined;
  /** Data de início. */
  dataInicio: string | number | Date | undefined;
  /** Data de término. */
  dataTermino: string | number | Date | undefined;
  /** Cor da Evento. */
  cor: string | null | undefined;
  /** Calendario. */
  calendario: ICalendarioLetivoFindOneInputDto | null | undefined;
};

export type IEventoFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<IEventoFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ITurmaDisponibilidadeDto = {
  /** ID do Registro. */
  id: string;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataFim: string | number | Date | null;
  /** Turma. */
  turma: ITurmaFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ITurmaDisponibilidadeFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ITurmaDisponibilidadeFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataFim: string | number | Date | null;
  /** Turma. */
  turma: ITurmaFindOneResultDto | null;
  /** Data de Criação do Registro. */
  dateCreated: string | number | Date;
  /** Data de Atualização do Registro. */
  dateUpdated: string | number | Date;
  /** Data de Exclusão do Registro. */
  dateDeleted: string | number | Date | null;
};

export type ITurmaDisponibilidadeInputCreateDto = {
  /** Data de início. */
  dataInicio: string | number | Date;
  /** Data de término. */
  dataFim: string | number | Date | null;
  /** Turma. */
  turma: ITurmaFindOneInputDto | null;
};

export type ITurmaDisponibilidadeInputUpdateDto = {
  /** Data de início. */
  dataInicio: string | number | Date | undefined;
  /** Data de término. */
  dataFim: string | number | Date | null | undefined;
  /** Turma. */
  turma: ITurmaFindOneInputDto | null | undefined;
};

export type ITurmaDisponibilidadeFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ITurmaDisponibilidadeFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

export type ITurmaDisponibilidadeDiaDto = {
  /** ID do Registro. */
  id: string;
  /** Dia da semana. */
  diaSemanaIso: number;
  /** Intervalo de tempo. */
  intervaloDeTempo: IIntervaloDeTempoFindOneResultDto | null;
  /** Disponibilidade da turma. */
  turmaDisponibilidade: ITurmaDisponibilidadeFindOneResultDto | null;
};

export type ITurmaDisponibilidadeDiaFindOneInputDto = {
  /** ID do Registro. */
  id: string;
};

export type ITurmaDisponibilidadeDiaFindOneResultDto = {
  /** ID do Registro. */
  id: string;
  /** Dia da semana. */
  diaSemanaIso: number;
  /** Intervalo de tempo. */
  intervaloDeTempo: IIntervaloDeTempoFindOneResultDto | null;
  /** Disponibilidade da turma. */
  turmaDisponibilidade: ITurmaDisponibilidadeFindOneResultDto | null;
};

export type ITurmaDisponibilidadeDiaInputCreateDto = {
  /** Dia da semana. */
  diaSemanaIso: number;
  /** Intervalo de tempo. */
  intervaloDeTempo: IIntervaloDeTempoInputDto | null;
  /** Disponibilidade da turma. */
  turmaDisponibilidade: ITurmaDisponibilidadeFindOneInputDto | null;
};

export type ITurmaDisponibilidadeDiaInputUpdateDto = {
  /** Dia da semana. */
  diaSemanaIso: number | undefined;
  /** Intervalo de tempo. */
  intervaloDeTempo: IIntervaloDeTempoInputDto | null | undefined;
  /** Disponibilidade da turma. */
  turmaDisponibilidade: ITurmaDisponibilidadeFindOneInputDto | null | undefined;
};

export type ITurmaDisponibilidadeDiaFindAllResultDto = {
  /** Metadados da busca. */
  meta: IPaginatedResultMetaDto;
  /** Resultados da busca atual. */
  data: Array<ITurmaDisponibilidadeDiaFindOneResultDto>;
  /** Links da busca. */
  links: IPaginatedResultLinksDto;
};

