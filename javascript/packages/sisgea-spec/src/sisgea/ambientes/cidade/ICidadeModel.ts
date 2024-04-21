import * as Spec from '@/index';

export interface ICidadeModel {
  id: number;

  //
  nome: string;
  //

  estado: Spec.IEstadoModel;
}
