import * as Spec from '@/index';

export interface ICidadeFindOneResultDto extends Pick<Spec.ICidadeModel, 'id' | 'nome'> {
  id: number;
  //
  nome: string;
  //
  estado: Spec.IEstadoFindOneByIdResultDto;
}
