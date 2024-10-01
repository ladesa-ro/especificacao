using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

@doc("Define os nomes de indentificação das entidades.")
enum Tokens {
  Shared_SearchInput_View: "SearchInputView",
  Shared_Pagination_SortBy_View: "PaginatedSortByView",
  Shared_Pagination_Filter_View: "PaginatedFilterView",
  Shared_Pagination_Input_View: "PaginatedInputView",
  Shared_Pagination_Input_Base_View: "PaginatedInputBaseView",
  Shared_Pagination_Result_Meta_View: "PaginatedResultMetaView",
  Shared_Pagination_Result_Links_View: "PaginatedResultLinksView",
  Shared_Pagination_Result_View: "PaginatedResultView",

  //

  Arquivo: "Arquivo",

  Arquivo_View: "ArquivoView",
  Arquivo_FindOneInput_View: "ArquivoFindOneInputView",
  Arquivo_FindOneResult_View: "ArquivoFindOneResultView",
  Arquivo_Operations_GetFile: "ArquivoGetFile",

  //

  Usuario: "Usuario",

  //

  Imagem: "Imagem",

  Imagem_View: "ImagemView",
  Imagem_FindOneInput_View: "ImagemFindOneInputView",
  Imagem_FindOneResult_View: "ImagemFindOneResultView",
  Imagem_FindOneFromImagemArquivoResult_View: "ImageFindOneFromImagemArquivoResultView",
  Imagem_Operations_GetImagem: "GetImagem",
  Imagem_Operations_SetImagem: "SetImagem",

  //

  ImagemArquivo: "ImagemArquivo",

  ImagemArquivo_View: "ImagemArquivoView",
  ImagemArquivo_FindOneInput_View: "ImagemArquivoFindOneInputView",
  ImagemArquivo_FindOneResult_View: "ImagemArquivoFindOneResultView",
  ImagemArquivo_FindOneFromImagemResult_View: "ImagemArquivoFindOneFromImagemResultView",

  //

  Estado: "Estado",

  Estado_View: "EstadoView",
  Estado_FindOneInput_View: "EstadoFindOneInputView",
  Estado_FindOneResult_View: "EstadoFindOneResultView",
  Estado_FindAllResult_View: "EstadoFindAllResultView",
  Estado_Operations_FindOneById: "EstadoFindOneById",
  Estado_Operations_FindAll: "EstadoFindAll",

  //

  Cidade: "Cidade",

  Cidade_View: "CidadeView",
  Cidade_FindOneInput_View: "CidadeFindOneInputView",
  Cidade_FindOneResult_View: "CidadeFindOneResultView",
  Cidade_FindAllResult_View: "CidadeFindAllResultView",
  Cidade_Operations_FindOneById: "CidadeFindOneById",
  Cidade_Operations_FindAll: "CidadeFindAll",

  //

  Endereco: "Endereco",

  Endereco_View: "EnderecoView",
  Endereco_FindOneInput_View: "EnderecoFindOneInputView",
  Endereco_FindOneResult_View: "EnderecoFindOneResultView",
  Endereco_Operations_FindOneById: "EnderecoFindOneById",
  Endereco_Input_View: "EnderecoInputView",

  //
  Campus: "Campus",

  Campus_View: "CampusView",
  Campus_InputUpdate_View: "CampusInputUpdateView",
  Campus_InputCreate_View: "CampusInputCreateView",
  Campus_FindOneInput_View: "CampusFindOneInputView",
  Campus_FindOneResult_View: "CampusFindOneResultView",
  Campus_FindAllResult_View: "CampusFindAllResultView",
  Campus_Operations_FindOneById: "CampusFindOneById",
  Campus_Operations_DeleteOneById: "CampusDeleteOneById",
  Campus_Operations_FindAll: "CampusFindAll",
  Campus_Operations_Create: "CampusCreate",
  Campus_Operations_Update: "CampusUpdate",

  //
  Bloco: "Bloco",

  Bloco_View: "BlocoView",
  Bloco_InputUpdate_View: "BlocoInputUpdateView",
  Bloco_InputCreate_View: "BlocoInputCreateView",
  Bloco_FindOneInput_View: "BlocoFindOneInputView",
  Bloco_FindOneResult_View: "BlocoFindOneResultView",
  Bloco_FindAllResult_View: "BlocoFindAllResultView",
  Bloco_Operations_FindOneById: "BlocoFindOneById",
  Bloco_Operations_DeleteOneById: "BlocoDeleteOneById",
  Bloco_Operations_FindAll: "BlocoFindAll",
  Bloco_Operations_Create: "BlocoCreate",
  Bloco_Operations_Update: "BlocoUpdate",
  Bloco_Operations_GetImagemCapa: "BlocoGetImagemCapa",
  Bloco_Operations_SetImagemCapa: "BlocoSetImagemCapa",

  //
  Ambiente: "Ambiente",

  Ambiente_View: "AmbienteView",
  Ambiente_InputUpdate_View: "AmbienteInputUpdateView",
  Ambiente_InputCreate_View: "AmbienteInputCreateView",
  Ambiente_FindOneInput_View: "AmbienteFindOneInputView",
  Ambiente_FindOneResult_View: "AmbienteFindOneResultView",
  Ambiente_FindAllResult_View: "AmbienteFindAllResultView",
  Ambiente_Operations_FindOneById: "AmbienteFindOneById",
  Ambiente_Operations_DeleteOneById: "AmbienteDeleteOneById",
  Ambiente_Operations_FindAll: "AmbienteFindAll",
  Ambiente_Operations_Create: "AmbienteCreate",
  Ambiente_Operations_Update: "AmbienteUpdate",
  Ambiente_Operations_GetImagemCapa: "AmbienteGetImagemCapa",
  Ambiente_Operations_SetImagemCapa: "AmbienteSetImagemCapa",
}
