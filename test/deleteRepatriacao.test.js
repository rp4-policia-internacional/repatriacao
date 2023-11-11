import DeleteRepatriacaoService from '../src/modules/repatriacao/services/DeleteRepatriacaoService'

describe('Testando a craição da extradição', () =>{
  it('Testando a atualização da extradição', () => {
    var id = "1"
    var id_pais_origem = "Brasil"
    var agente_id ="A"
    var id_vitima = "B"
    var transporte = "Terrestre"
    var data_inicio ="2023-09-5"
    var data_fim = "2023-09-05"
    const esperado = new DeleteRepatriacaoService(id,id_pais_origem,agente_id,id_vitima,transporte,data_inicio,data_fim)
    const retorno = new DeleteRepatriacaoService(" "," "," "," "," "," "," ")
    expect(retorno).not.toBe(esperado)
  })
})