import React from "react";
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
  return (
    <>
      <Header header="Wallet"></Header>
      <br />
      <br />
      <StyleBody>
        <Cadastro />
        <Lista />
      </StyleBody>
    </>
  );
}

export default App;
