import { acoesService } from "./service/acao-service.js";
import { Action } from "./Utils/action.js";

const formulario_cadastro = document.forms.namedItem("acoes");

formulario_cadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  const acao = new Action(formulario_cadastro);

  acoesService.criaAcao(acao);

}
);
