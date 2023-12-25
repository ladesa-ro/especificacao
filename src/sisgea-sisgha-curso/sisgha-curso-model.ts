import { SisghaModalidadeModel } from "../sisgea-sisgha-modalidade/sisgha-modalidade-model";

export interface SisghaCursoModel {
  id: string;

  // ...

  nome: string | null;
  nomeAbreviado: string | null;

  //

  dateCreated: Date;
  dateUpdated: Date;
  dateDeleted: Date | null;

  //

  modalidade: SisghaModalidadeModel;
}
