import { IObjectUuid } from '@/core';
import { ICursoModel } from './curso.declaration';
import { ICursoFindOneByIdInputDto } from './curso-find-one.operation';

export interface ICursoInputDto extends Pick<ICursoModel, 'nome' | 'nomeAbreviado'> {
  campus: IObjectUuid;
  modalidade: IObjectUuid;
}

export interface ICursoCreateDto extends ICursoInputDto {}

export interface ICursoUpdateDto extends ICursoFindOneByIdInputDto, Partial<Omit<ICursoInputDto, 'id'>> {
  id: string;

  //

  // Nome do curso
  nome?: string;

  // Nome abreviado do curso
  nomeAbreviado?: string;

  // Campus que o curso pertence
  campus?: IObjectUuid;

  // Modalidade a que o curso pertence
  modalidade?: IObjectUuid;

  //
}
