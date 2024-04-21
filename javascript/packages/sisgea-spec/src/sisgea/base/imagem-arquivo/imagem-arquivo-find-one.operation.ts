import * as Spec from '@/index';

export interface IImagemArquivoFindOneResultDto extends IImagemArquivoFindOneByIdResultDto {
  id: Spec.IImagemArquivoModel['id'];

  largura: Spec.IImagemArquivoModel['largura'];
  altura: Spec.IImagemArquivoModel['altura'];
  formato: Spec.IImagemArquivoModel['formato'];
  mimeType: Spec.IImagemArquivoModel['mimeType'];

  imagem: Spec.IObjectUuid;
  arquivo: Spec.IArquivoFindOneByIdResultDto;
}

// ======================================

export type IImagemArquivoFindOneByIdResultDto = Spec.InferFactoryEntityType<
  typeof ImagemArquivoFindOneByIdResultDeclaration,
  Spec.IOutputDeclarationModes['OUTPUT']
>;

export const ImagemArquivoFindOneByIdResultDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.ImagemArquivoDeclarationFactory);

  return {
    name: 'ImagemArquivoFindOneByIdResult',

    partialOf: Spec.ImagemArquivoDeclarationFactory,

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
        type: Spec.ObjectUuidDeclarationFactory,
      },
      arquivo: {
        ...properties.arquivo,
        type: Spec.ArquivoFindOneByIdResultDeclaration,
      },
    },
  };
});

// ======================================
