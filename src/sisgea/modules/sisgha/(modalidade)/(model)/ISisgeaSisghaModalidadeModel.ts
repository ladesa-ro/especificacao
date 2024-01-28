import { ISisgeaSisghaCursoModel } from '../../(curso)/(model)/ISisgeaSisghaCursoModel';
import { IObjectUuid, IObjectWithDateEvents } from '../../../../../core/(generics)';

export interface ISisgeaSisghaModalidadeModel extends IObjectUuid, IObjectWithDateEvents {
  // ...

  slug: string;
  nome: string;

  // ...

  cursos: ISisgeaSisghaCursoModel[];
}
