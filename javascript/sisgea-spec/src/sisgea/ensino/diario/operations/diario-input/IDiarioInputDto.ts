import * as Dto from '@/core';
import { IDiarioModel } from '../../IDiarioModel';

export interface IDiarioInputDto extends Pick<IDiarioModel, 'situacao' | 'ano' | 'etapa'> {
  turma: Dto.IObjectUuid;
  disciplina: Dto.IObjectUuid;
  ambientePadrao: Dto.IObjectUuid | null;
}
