import { SisghaCursoModel } from '../sisgea-sisgha-curso/sisgha-curso-model';

export interface SisghaModalidadeModel {
  id: string;

  // ...

  slug: string;
  nome: string;

  // ...

  dateCreated: Date;
  dateUpdated: Date;
  dateDeleted: Date | null;

  // ...

  cursos: SisghaCursoModel[];
}
