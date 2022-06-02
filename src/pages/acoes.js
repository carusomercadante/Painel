import { acoesService } from "../service/acao-service.js";
import { templateAction } from "../Utils/templateAction.js";

const acoes_container = document.getElementById("acoes");


acoesService.buscaAcao().then(acoes => {
  acoes.forEach(acao => acoes_container.innerHTML += templateAction(acao));
});
