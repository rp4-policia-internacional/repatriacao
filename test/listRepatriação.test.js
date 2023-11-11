import ListExtradicaoService from '../src/modules/repatriacao/services/ListRepatriacaoService'

describe('Testando a listagem de repatriações', () =>{
  it('Testando a listagem de repatriações', () => {
    var id
    var id_pais_origem
    var agente_id
    var id_criminoso
    var transporte 
    var data_inicio
    var data_fim 
    const esperado = new ListExtradicaoService(id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim)
    const retorno = new ListExtradicaoService(id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim)
    expect(retorno).toEqual(esperado)
    })
})