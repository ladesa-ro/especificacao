import {
    DatedObjectDeclarationFactory,
    IEntityDate,
    IObjectUuid,
    IPaginatedResultDto,
    ObjectUuidDeclarationFactory,
    PaginatedResultDtoDeclarationFactoryBuilder,
} from '@/core';
import * as SpecHelpers from '@/helpers';
import { BlocoDeclarationFactory, IBlocoFindOneResultDto, IBlocoModel } from '@/sisgea/ambientes/bloco';
import { IImagemFindOneResultDto, IImagemModel, ImagemDeclarationFactory } from '@/sisgea/base/imagem';
import { IModalidadeFindOneResultDto, IModalidadeModel, ModalidadeDeclarationFactory } from '@/sisgea/ensino/modalidade';

// =================================================================

export type IAmbienteModel = {
    id: string;
    //
    nome: string;
    descricao: string;
    codigo: string;
    capacidade: string | null;
    tipo: string | null;
    bloco: IBlocoModel;
    imagemCapa: IImagemModel | null;
    //
    dateCreated: IEntityDate;
    dateUpdated: IEntityDate;
    dateDeleted: IEntityDate | null;
};

export type IAmbienteInputDto = {
    nome: IAmbienteModel['nome'];
    descricao: IAmbienteModel['descricao'];
    codigo: IAmbienteModel['codigo'];
    capacidade: IAmbienteModel['capacidade'];
    tipo: IAmbienteModel['tipo'];
    //
    bloco: IObjectUuid;
    modalidade: IObjectUuid;
};

export type IAmbienteFindOneResultDto = {
    id: IAmbienteModel['id'];
    //
    nome: IAmbienteModel['nome'];
    descricao: IAmbienteModel['descricao'];
    codigo: IAmbienteModel['codigo'];
    capacidade: IAmbienteModel['capacidade'] | null;
    tipo: IAmbienteModel['tipo'] | null;
    //
    bloco: IBlocoFindOneResultDto;
    imagemCapa: IImagemFindOneResultDto | null;
};

// =================================================================
export type IAmbienteFindOneByIdInputDto = { id: IAmbienteModel['id'] };
export type IAmbienteFindAllResultDto = IPaginatedResultDto<IAmbienteFindOneResultDto>;
// =================================================================
export type IAmbienteCreateDto = IAmbienteInputDto;
export type IAmbienteUpdateDto = IAmbienteFindOneByIdInputDto & Partial<Omit<IAmbienteInputDto, 'id'>>;
// =================================================================
export type IAmbienteDeleteOneByIdInputDto = IAmbienteFindOneByIdInputDto;
// =================================================================

export const AmbienteFindOneByIdInputDeclarationFactory = ObjectUuidDeclarationFactory;

export const AmbienteDeclarationFactory = SpecHelpers.DeclareEntity(() => {
    return {
        name: 'Ambiente',

        properties: {
            //

            ...SpecHelpers.GetDeclarationProperties(AmbienteFindOneByIdInputDeclarationFactory),

            //

            nome: {
                type: SpecHelpers.PropertyTypes.STRING,
                description: 'Nome do ambiente.',
                nullable: false,
            },

            descricao: {
                type: SpecHelpers.PropertyTypes.STRING,
                description: 'Descrição do ambiente.',
                nullable: false,
            },

            codigo: {
                type: SpecHelpers.PropertyTypes.STRING,
                description: 'Codigo do ambiente.',
                nullable: false,
            },

            capacidade: {
                type: SpecHelpers.PropertyTypes.STRING,
                description: 'Capacidade do ambiente.',
                nullable: true,
            },

            tipo: {
                type: SpecHelpers.PropertyTypes.STRING,
                description: 'Tipo do ambiente.',
                nullable: true,
            },

            bloco: {
                type: SpecHelpers.PropertyTypes.MIXED,
                input: {
                    nullable: false,
                    type: ObjectUuidDeclarationFactory,
                    description: 'Bloco que o ambiente pertence.',
                },
                output: {
                    nullable: false,
                    type: BlocoDeclarationFactory,
                    description: 'Bloco que o ambiente pertence.',
                },
            },

            imagemCapa: {
                nullable: true,
                type: ImagemDeclarationFactory,
                description: 'Imagem de capa do Ambiente.',
            },

            //

            ...SpecHelpers.GetDeclarationProperties(DatedObjectDeclarationFactory),

            //
        },
    };
});

export const AmbienteFindOneResultDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(AmbienteDeclarationFactory);

    return {
        name: 'AmbienteFindOneResult',
        partialOf: AmbienteDeclarationFactory,

        properties: {
            id: properties.id,
            //
            nome: properties.nome,
            descricao: properties.descricao,
            codigo: properties.codigo,
            capacidade: properties.capacidade,
            tipo: properties.tipo,
            bloco: properties.bloco,
            imagemCapa: properties.imagemCapa,
            //
            dateCreated: properties.dateCreated,
            dateUpdated: properties.dateUpdated,
            dateDeleted: properties.dateDeleted,
        },
    };
});

export const AmbienteFindAllResultDeclaration = PaginatedResultDtoDeclarationFactoryBuilder(
    AmbienteFindOneResultDeclaration,
    'AmbienteFindAllResult',
);

export const AmbienteInputDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(AmbienteDeclarationFactory);

    return {
        name: 'AmbienteInput',

        properties: {
            nome: properties.nome,
            descricao: properties.descricao,
            codigo: properties.codigo,
            capacidade: properties.capacidade,
            tipo: properties.tipo,
            bloco: properties.bloco,
        },
    };
});

export const AmbienteUpdateDeclaration = SpecHelpers.DeclareEntity(() => {
    const { properties } = SpecHelpers.GetDeclaration(AmbienteDeclarationFactory);

    return {
        name: 'AmbienteUpdate',

        properties: {
            id: properties.id,
            //
            nome: {
                ...properties.nome,
                required: false,
            },
            descricao: {
                ...properties.descricao,
                required: false,
            },
            codigo: {
                ...properties.codigo,
                required: false,
            },
            capacidade: {
                ...properties.capacidade,
                required: false,
            },
            tipo: {
                ...properties.tipo,
                required: false,
            },
            bloco: {
                ...properties.bloco.input,
                required: false,
            },
        },
    };
});

export const AmbienteDeleteOneByIdInputDeclarationFactory = ObjectUuidDeclarationFactory;

// =================================================================
