import { IPaginatedResultDto } from '@/core';
import { IReservaFindOneResultDto } from '../reserva-find-one';

export interface IReservaFindAllResultDto extends IPaginatedResultDto<IReservaFindOneResultDto> {}
