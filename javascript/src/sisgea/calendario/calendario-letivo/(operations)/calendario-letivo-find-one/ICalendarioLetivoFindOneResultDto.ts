import { ICampusFindOneResultDto } from '@/sisgea/ambientes';
import { IModalidadeFindOneResultDto } from '@/sisgea/ensino';
import { ICalendarioLetivoModel } from '../../ICalendarioLetivoModel';

export interface ICalendarioLetivoFindOneResultDto extends Pick<ICalendarioLetivoModel, 'id' | 'nome' | 'ano'> {
  campus: ICampusFindOneResultDto;
  modalidade: IModalidadeFindOneResultDto;
}
