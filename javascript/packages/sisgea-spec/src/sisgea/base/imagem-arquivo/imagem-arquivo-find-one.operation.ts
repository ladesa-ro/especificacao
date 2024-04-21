import * as Dto from '@/index';

export interface IImagemArquivoFindOneResultDto extends IImagemArquivoFindOneByIdResultDto {
  id: Dto.IImagemArquivoModel['id'];

  largura: Dto.IImagemArquivoModel['largura'];
  altura: Dto.IImagemArquivoModel['altura'];
  formato: Dto.IImagemArquivoModel['formato'];
  mimeType: Dto.IImagemArquivoModel['mimeType'];

  imagem: Dto.IObjectUuid;
  arquivo: Dto.IArquivoFindOneByIdResultDto;
}

// ======================================

export type IImagemArquivoFindOneByIdResultDto = Dto.InferFactoryEntityType<
  typeof ImagemArquivoFindOneByIdResultDeclaration,
  Dto.IOutputDeclarationModes['OUTPUT']
>;

export const ImagemArquivoFindOneByIdResultDeclaration = Dto.DeclareEntity(() => {
  const { properties } = Dto.GetDeclaration(Dto.ImagemArquivoDeclarationFactory);

  return {
    name: 'ImagemArquivoFindOneByIdResult',

    properties: {
      //
      id: properties.id,
      //
      largura: properties.largura,
      altura: properties.altura,
      formato: properties.formato,
      mimeType: properties.mimeType,
      //
      imagem: {
        ...properties.imagem,
        type: Dto.ObjectUuidDeclarationFactory,
      },
      arquivo: {
        ...properties.arquivo,
        type: Dto.ArquivoFindOneByIdResultDeclaration,
      },
    },
  };
});

// ======================================
