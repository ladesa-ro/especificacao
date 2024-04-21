import * as Spec from '@/index';

// ======================================

export type IArquivoFindOneByIdInputDto = Spec.InferFactoryEntityType<typeof ArquivoFindOneByIdInputDeclaration>;

export const ArquivoFindOneByIdInputDeclaration = Spec.DeclareEntity(() => Spec.ObjectUuidDeclarationFactory('ArquivoFindOneByIdInput'));

// ======================================

export type IArquivoFindOneByIdResultDto = Spec.InferFactoryEntityType<
  typeof ArquivoFindOneByIdResultDeclaration,
  Spec.IOutputDeclarationModes['OUTPUT']
>;

export const ArquivoFindOneByIdResultDeclaration = Spec.DeclareEntity(() => {
  const { properties } = Spec.GetDeclaration(Spec.ArquivoDeclarationFactory);

  return {
    name: 'ArquivoFindOneByIdResult',
    partialOf: Spec.ArquivoDeclarationFactory,

    properties: {
      //
      id: properties.id,
      //
      nome: properties.nome,
      mimeType: properties.mimeType,
      sizeBytes: properties.sizeBytes,
      storageType: properties.storageType,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
      //
    },
  };
});

// ======================================
