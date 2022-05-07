import { useState } from "react";
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

interface TypeObjeto {
  descricao: string;
  valor: string;
  tipo: string;
  data: string;
}

function App() {

  const [arrayDados, setArrayDados] = useState<TypeObjeto[]>([])

  function salvarDados (descricao: string, valor: string, tipo: string, data: string) {
    const objetoDados = {
      descricao,
      valor,
      tipo,
      data
    }

    const novoArray = [...arrayDados, objetoDados]

    setArrayDados(novoArray)
    
  }


  return (
    <>
      <Header header="Wallet"></Header>
      <br />
      <br />
      <StyleBody>
        <Cadastro aoClicar={(descricao:string, valor:string, tipo: string, data: string) => salvarDados(descricao, valor, tipo, data)}/>
        <Lista />
      </StyleBody>
    </>
  );
}

export default App;
