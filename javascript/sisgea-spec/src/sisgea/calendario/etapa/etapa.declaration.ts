
export interface IEtapaModel {
    //
    id: string;
    //
    nome: string;
    dataInicio: IEntityDate;
    dataTermino: IEntityDate;
    cor: string;
    //
    calendario: ICalendarioLetivoModel;
    //
    dateCreated: IEntityDate;
    dateUpdated: IEntityDate;
    dateDeleted: null | IEntityDate;
    //
  }