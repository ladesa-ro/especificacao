import {
  DatedObjectDeclarationFactory,
  IDeclaration,
  IEntityDate,
  IImagemFindOneResultDto,
  IImagemModel,
  IPaginatedResultDto,
  ImagemFindOneResult,
  ObjectUuid,
  PaginatedResultDtoDeclarationFactoryBuilder,
  PropertyTypes,
} from '@/index';

export interface IDisciplinaModel {
  //
  id: string;
  //

  // Nome da disciplina.
  nome: string;
  // Carga horária da disciplina.
  cargaHoraria: number;
  // Imagem de capa do diário.
  imagemCapa: IImagemModel | null;

  //
  dateCreated: IEntityDate;
  dateUpdated: IEntityDate;
  dateDeleted: null | IEntityDate;
  //
}

export interface IDisciplinaDeleteOneByIdInputDto {
  id: IDisciplinaModel['id'];
}

export interface IDisciplinaFindAllResultDto extends IPaginatedResultDto<IDisciplinaFindOneResultDto> {}

export interface IDisciplinaFindOneByIdInputDto {
  id: IDisciplinaModel['id'];
}

export interface IDisciplinaFindOneResultDto {
  id: IDisciplinaModel['id'];
  //
  nome: IDisciplinaModel['nome'];
  cargaHoraria: IDisciplinaModel['cargaHoraria'];
  //
  imagemCapa: IImagemFindOneResultDto | null;
}

export interface IDisciplinaInputDto {
  nome: IDisciplinaModel['nome'];
  cargaHoraria: IDisciplinaModel['cargaHoraria'];
}

export interface IDisciplinaCreateDto extends IDisciplinaInputDto {}

export interface IDisciplinaUpdateDto {
  id: IDisciplinaModel['id'];
  nome: IDisciplinaModel['nome'] | undefined;
  cargaHoraria: IDisciplinaModel['cargaHoraria'] | undefined;
}
// =================================================================

export const DisciplinaFindOneByIdInput = ObjectUuid;

export const Disciplina = () => {
  return {
    name: 'Disciplina',

    properties: {
      ...DisciplinaFindOneByIdInput().properties,

      nome: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Nome da disciplina.',
        validator: ({ custom }) => custom.string().required().nonNullable().min(1),
      },

      cargaHoraria: {
        nullable: false,
        type: PropertyTypes.INTEGER,
        description: 'Carga horária da disciplina.',
        validator: ({ custom }) => custom.number().integer().min(0).required().nonNullable(),
      },

      imagemCapa: {
        nullable: true,
        type: ImagemFindOneResult as any,
        description: 'Imagem de capa da disciplina.',
      },

      ...DatedObjectDeclarationFactory().properties,
    },
  } satisfies IDeclaration;
};

export const DisciplinaFindOneResult = () => {
  const { properties } = Disciplina();

  return {
    name: 'DisciplinaFindOneResult',
    partialOf: Disciplina as any,

    properties: {
      id: properties.id,
      //
      nome: properties.nome,
      cargaHoraria: properties.cargaHoraria,
      //
      imagemCapa: properties.imagemCapa,
      //
      dateCreated: properties.dateCreated,
      dateUpdated: properties.dateUpdated,
      dateDeleted: properties.dateDeleted,
    },
  };
};

export const DisciplinaFindAllResult = PaginatedResultDtoDeclarationFactoryBuilder(DisciplinaFindOneResult, 'DisciplinaFindAllResult');

export const DisciplinaInput = (required: boolean) => {
  const { properties } = Disciplina();

  return {
    name: 'DisciplinaInput',
    properties: {
      nome: {
        ...properties.nome,
        required,
      },
      cargaHoraria: {
        ...properties.cargaHoraria,
        required,
      },
    },
  } satisfies IDeclaration;
};

export const DisciplinaUpdate = () => {
  return {
    name: 'DisciplinaUpdate',
    properties: {
      ...DisciplinaFindOneByIdInput().properties,
      ...DisciplinaInput(false).properties,
    },
  } satisfies IDeclaration;
};

export const DisciplinaCreate = () => {
  return {
    name: 'DisciplinaCreate',
    properties: {
      ...DisciplinaInput(true).properties,
    },
  } satisfies IDeclaration;
};

export const DisciplinaDeleteOneByIdInput = DisciplinaFindOneByIdInput;

// =================================================================
