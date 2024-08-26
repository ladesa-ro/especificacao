/**
 * Identificador do registro.
 */
type UUID = string;

/**
 * Arquivo.
 */
export interface Arquivo {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Formato do arquivo.
     */
    mimeType?: string;
    /**
     * Nome do arquivo.
     */
    nome?: string;
    /**
     * Tamanho do arquivo (em bytes).
     */
    sizeBytes?: number;
    /**
     * Estratégia de armazenamento do conteúdo.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneInputView {
    /**
     * Identificador do registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Dados de entrada para encontrar um Arquivo por ID.
 */
export interface ArquivoFindOneResultView {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Formato do arquivo.
     */
    mimeType?: string;
    /**
     * Nome do arquivo.
     */
    nome?: string;
    /**
     * Tamanho do arquivo (em bytes).
     */
    sizeBytes?: number;
    /**
     * Estratégia de armazenamento do conteúdo.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Visão completa de um Arquivo.
 */
export interface ArquivoView {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Formato do arquivo.
     */
    mimeType?: string;
    /**
     * Nome do arquivo.
     */
    nome?: string;
    /**
     * Tamanho do arquivo (em bytes).
     */
    sizeBytes?: number;
    /**
     * Estratégia de armazenamento do conteúdo.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Estrutura datada.
 */
export interface DatedObject {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    [property: string]: any;
}

export interface Imagem {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Descrição da imagem.
     */
    descricao?: string;
    /**
     * Identificador do registro.
     */
    id: string;
    [property: string]: any;
}

export interface ImagemArquivo {
    /**
     * Altura da imagem.
     */
    altura: number;
    /**
     * Arquivo.
     */
    arquivo: ArquivoObject;
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Formato da imagem.
     */
    formato: number;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Imagem.
     */
    imagem: ImagemObject;
    /**
     * Largura da imagem.
     */
    largura: number;
    /**
     * Mime-type da imagem.
     */
    mimeType: string;
    [property: string]: any;
}

/**
 * Arquivo.
 */
export interface ArquivoObject {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Formato do arquivo.
     */
    mimeType?: string;
    /**
     * Nome do arquivo.
     */
    nome?: string;
    /**
     * Tamanho do arquivo (em bytes).
     */
    sizeBytes?: number;
    /**
     * Estratégia de armazenamento do conteúdo.
     */
    storageType: string;
    [property: string]: any;
}

/**
 * Imagem.
 *
 * Imagem de capa do usuário.
 *
 * Imagem de perfil do usuário.
 */
export interface ImagemObject {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * Descrição da imagem.
     */
    descricao?: string;
    /**
     * Identificador do registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Estrutura identificada por id no formato uuid.
 */
export interface ObjectUUID {
    /**
     * Identificador do registro.
     */
    id: string;
    [property: string]: any;
}

/**
 * Usuário
 */
export interface Usuario {
    /**
     * Data e hora da criação do registro.
     */
    dateCreated: Date;
    /**
     * Data e hora da exclusão do registro.
     */
    dateDeleted: null | string;
    /**
     * Data e hora da alteração do registro.
     */
    dateUpdated: Date;
    /**
     * E-mail do usuário.
     */
    email?: string;
    /**
     * Identificador do registro.
     */
    id: string;
    /**
     * Imagem de capa do usuário.
     */
    imagemCapa?: ImagemObject;
    /**
     * Imagem de perfil do usuário.
     */
    imagemPerfil?: ImagemObject;
    /**
     * Diz que o usuário tem poderes de administrador.
     */
    isSuperUser: boolean;
    /**
     * Matrícula SIAPE do usuário.
     */
    matriculaSiape?: string;
    /**
     * Nome do usuário.
     */
    nome?: string;
    [property: string]: any;
}
