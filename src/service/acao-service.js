async function criaAcao(acao) {
  const url = "  http://localhost:3000/acoes";

  try {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(acao),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    });
  } catch (erro) {
    alert(`Verifique se o servidor está no ar. erro: ${erro.message}`);
  };
};


async function buscaAcao() {
  const url = "  http://localhost:3000/acoes";
  try {
    const acoes = await fetch(url);
    return await acoes.json();
  }
  catch (erro) {
    alert(`Verifique se o servidor está no ar. erro: ${erro.message}`);
  }
}

async function excluiAcao(id) {
  const url = `http://localhost:3000/acoes/${id}`;
  try {
    return await fetch(url, {
      method: "DELETE",
    });
  }
  catch (erro) {
    alert(`Verifique se o servidor está no ar. erro: ${erro.message}`);
  }
}


async function alteraAcao(id, acaoAlterada) {
  const url = `http://localhost:3000/acoes/${id}`;
  try {
    return await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(acaoAlterada)
    });

  } catch (erro) {
    alert(`Verifique se o servidor está no ar. erro: ${erro.message}`);
  }
}

async function buscaumaAcao(id) {
  const url = `http://localhost:3000/acoes/${id}`;

  try {
    const acao = await fetch(url);
    return await acao.json();
  } catch (erro) {
    alert(`Verifique se o servidor está no ar. erro: ${erro.message}`);
  }
}

export const acoesService = {
  criaAcao,
  buscaAcao,
  excluiAcao,
  alteraAcao,
  buscaumaAcao,

}