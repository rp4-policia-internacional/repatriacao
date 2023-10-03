class RepatriacaoEntity {
  id: string;
  id_pais_origem: string;
  agente_id: string;
  id_vitima:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;

  constructor(
    id: string,
    id_pais_origem: string,
    agente_id: string,
    id_vitima:string,
    transporte:string,
    data_inicio: Date,
    data_fim: Date
  ) {
    this.id= id;
    this.id_vitima = id_vitima;
    this.id_pais_origem = id_pais_origem;
    this.agente_id = agente_id;
    this.transporte = transporte;
    this.data_fim = data_fim;
    this.data_inicio = data_inicio;

  }
}

export default RepatriacaoEntity;
