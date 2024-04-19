import { ICalendarioLetivoFindOneByIdInputDto } from '../calendario-letivo-find-one';
import { ICalendarioLetivoInputDto } from './ICalendarioLetivoInputDto';

export interface ICalendarioLetivoUpdateDto
  extends ICalendarioLetivoFindOneByIdInputDto,
    Partial<Pick<ICalendarioLetivoInputDto, 'nome' | 'ano' | 'campus' | 'modalidade'>> {}
