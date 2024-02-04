import { IObjectUuid, IObjectWithDateEvents } from '../../../../(generic)';
import { ISisgeaSisghaCursoModel } from '../../curso';

export interface ISisgeaSisghaModalidadeModel extends IObjectUuid, IObjectWithDateEvents {
  // ...

  slug: string;
  nome: string;

  // ...

  cursos: ISisgeaSisghaCursoModel[];
}
