export default interface IRepatricaoDTO {
  id: string;
  id_pais_origem: string;
  agente_id: string;
  id_vitima:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;
}
