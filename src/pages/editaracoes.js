import { acoesService } from "../service/acao-service.js";
import { Action } from "../Utils/action.js";

const formulario = document.forms.namedItem("editar");
const url = new URL(window.location);
const id = url.searchParams.get("id");

function preenchecamposFormulario(acao) {
  formulario.papel.value = acao.papel;
  formulario.data.value = acao.data;
  formulario.valor.value = acao.valor;
}

window.onload = () => {
  acoesService.buscaumaAcao(id)
    .then(acao => preenchecamposFormulario(acao));
}

window.cancelarEdicao = () => {
  window.location.href = "acoes.html";

};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const acaoAlterada = new Action(formulario);
  acoesService.alteraAcao(id, acaoAlterada)
    .finally(() => cancelarEdicao());

});

