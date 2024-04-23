import { IPaginatedResultDto } from '@/core';
import { IDiarioProfessorFindOneResultDto } from '../diario-professor-find-one';

export interface IDiarioProfessorFindAllResultDto extends IPaginatedResultDto<IDiarioProfessorFindOneResultDto> {}
