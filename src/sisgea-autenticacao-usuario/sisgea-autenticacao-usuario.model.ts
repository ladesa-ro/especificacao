export interface SisgeaAutenticacaoUsuarioModel {
  id: string;

  // ...

  nome: string | null;
  email: string | null;

  matriculaSiape: string | null;

  // ...

  dateCreated: Date;
  dateUpdated: Date;
  dateDeleted: Date | null;
}
