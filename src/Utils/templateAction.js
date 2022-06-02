import { acoesService } from "../service/acao-service.js";

export function templateAction(acao) {
  return `
<div class = "acoes">
  <h3>
  Papel: ${acao.papel}
  <br>
  Dia: ${acao.data} 
  <br>
  Cotação: ${acao.valor}    
  </h3>
  <div>
  <button onclick ="editarAcao(${acao.id})">Editar</button>
  <button onclick ="excluirAcao(${acao.id})">Excluir</button>
  </div>
</div>
  `
    ;
}

window.editarAcao = (id) => {
  window.location.href = `editaracoes.html?id=${id}`;
}

window.excluirAcao = (id) => {
  if (window.confirm("Deseja excluir a cotação?")) {
    acoesService.excluiAcao(id);
  };
};

