import { IPaginatedResultDto } from '@/core';
import { ITurmaFindOneResultDto } from '../turma-find-one';

export interface ITurmaFindAllResultDto extends IPaginatedResultDto<ITurmaFindOneResultDto> {}
