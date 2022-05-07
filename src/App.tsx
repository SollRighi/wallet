import { Td, Tr } from "@chakra-ui/react";
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

export interface RegistroCarteira {
  id: number;
  descricao: string;
  valor: string;
  tipo: string;
  data: string;
}

function App() {

  console.log('render app')

  const [arrayDados, setArrayDados] = useState<RegistroCarteira[]>([])

  function salvarDados (descricao: string, valor: string, tipo: string, data: string) {
    const objetoDados = {
      id: Date.now(),
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
        <Lista 
          arrayDados={arrayDados}
        />
      </StyleBody> 
    </>
  );
}

export default App;
