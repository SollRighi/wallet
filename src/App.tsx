import React, { useState } from "react";
import styled from "styled-components";
import { Cadastro } from "./Components/Body/Cadastro";
import { Lista } from "./Components/Body/Lista";
import { Header } from "./Components/Header";

const StyleBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 150px;
`;

function App() {
  let descricao = document.getElementById("descricao");
  let valor = document.getElementById("valor");
  let tipo = document.getElementById("tipo");
  let data = document.getElementById("date");

  const dados = {
    descricao: descricao,
    valor: valor,
    tipo: tipo,
    data: data,
  };

  const [dadosSalvos, setDadosSalvos] = useState({});

  function salvarDados() {
    setDadosSalvos(dados);
    console.log(dados);
  }

  return (
    <>
      <Header header="Wallet"></Header>
      <br />
      <br />
      <StyleBody>
        <Cadastro aoClicar={() => salvarDados()} />
        <Lista />
      </StyleBody>
    </>
  );
}

export default App;
