import { ICursoFindOneByIdInputDto } from './curso-find-one.operation';

export interface ICursoDeleteOneByIdInputDto extends ICursoFindOneByIdInputDto {
  id: string;
}
