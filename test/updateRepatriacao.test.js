import UpdateRepatriacaoService from '../src/modules/repatriacao/services/UpdateRepatriacaoService'

describe('Testando a craição da extradição', () =>{
  it('Testando a atualização da extradição', () => {
    var id = "1"
      var id_pais_origem = "Brasil"
      var agente_id ="João"
      var id_vitima = "Fulano"
      var transporte = "Terrestre"
      var data_inicio ="2023-09-05"
      var data_fim = "2023-09-06"
    const esperado = new UpdateRepatriacaoService(id,id_pais_origem,agente_id,id_vitima,transporte,data_inicio,data_fim)
    const retorno = new UpdateRepatriacaoService("1","2","3","4","Aéreo","2023-09-5","2023-09-15")
    expect(retorno).not.toBe(esperado)
  })
})