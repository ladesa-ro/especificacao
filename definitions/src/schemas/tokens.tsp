using TypeSpec.JsonSchema;

namespace Ladesa.Schemas;

@doc("Define os nomes de indentificação das entidades.")
enum Tokens {
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

  //

  Usuario: "Usuario",

  //

  Imagem: "Imagem",

  //

  ImagemArquivo: "ImagemArquivo",

  //
}
