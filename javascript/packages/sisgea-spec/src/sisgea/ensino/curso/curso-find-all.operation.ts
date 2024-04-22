import { IPaginatedResultDto } from '@/core';
import { ICursoFindOneResultDto } from './curso-find-one.operation';

export interface ICursoFindAllResultDto extends IPaginatedResultDto<ICursoFindOneResultDto> {}
