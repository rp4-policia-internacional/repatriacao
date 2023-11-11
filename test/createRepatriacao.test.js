import CreateRepatriacaoService from '../src/modules/repatriacao/services/CreateRepatriacaoService'

describe('Testando a craição da extradição', () =>{
    it('Testando a criação da extradição', () => {
      var id = "1"
      var id_pais_origem = "Brasil"
      var agente_id ="João"
      var id_vitima = "Fulano"
      var transporte = "Terrestre"
      var data_inicio ="2023-09-05"
      var data_fim = "2023-09-06"
      const esperado = new CreateRepatriacaoService(id,id_pais_origem,agente_id,id_vitima,transporte,data_inicio,data_fim)
      const retorno = new CreateRepatriacaoService("1","Brasil","João","Fulano","Terrestre","2023-09-05","2023-09-06")
      expect(retorno).toEqual(esperado)
    })
})