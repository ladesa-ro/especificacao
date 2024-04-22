import { DatedObjectDeclarationFactory, ObjectUuidDeclarationFactory } from '@/core';
import * as SpecHelpers from '@/helpers';
import { CampusDeclarationFactory } from '@/sisgea/ambientes';
import { ImagemDeclarationFactory } from '@/sisgea/base';
import { ModalidadeDeclarationFactory } from '../modalidade';

export type ICursoModel = SpecHelpers.InferFactoryEntityType<typeof CursoDeclarationFactory, 'output'>;

export const CursoDeclarationFactory = SpecHelpers.DeclareEntity(() => {
  return {
    name: 'Curso',

    properties: {
      //

      ...SpecHelpers.GetDeclarationProperties(ObjectUuidDeclarationFactory),

      //

      nome: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome do curso.',
        nullable: false,
      },

      nomeAbreviado: {
        type: SpecHelpers.PropertyTypes.STRING,
        description: 'Nome abreviado do curso.',
        nullable: false,
      },

      campus: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuidDeclarationFactory,
          description: 'Campus que o curso pertence.',
        },
        output: {
          nullable: false,
          type: CampusDeclarationFactory,
          description: 'Campus que o curso pertence.',
        },
      },

      modalidade: {
        type: SpecHelpers.PropertyTypes.MIXED,
        input: {
          nullable: false,
          type: ObjectUuidDeclarationFactory,
          description: 'Modalidade a que o curso pertence.',
        },
        output: {
          nullable: false,
          type: ModalidadeDeclarationFactory,
          description: 'Modalidade a que o curso pertence.',
        },
      },

      imagemCapa: {
        nullable: true,
        type: ImagemDeclarationFactory,
        description: 'Imagem de capa do curso.',
      },

      //

      ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),

      //
    },
  };
});
