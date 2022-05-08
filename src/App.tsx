import { filter, Td, Tr, useToast } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { Cadastro } from "./Components/Body/Cadastro";
import { Deletar } from "./Components/Body/Deletar";
import { Editar } from "./Components/Body/Editar";
import { Lista } from "./Components/Body/Lista";
import { Header } from "./Components/Header";

const StyleBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  gap: 150px;
`;

const StyleDeletarEditar = styled.div`
  position: absolute;
  right: 400px;
`

export interface RegistroCarteira {
  remove: any;
  id: number;
  descricao: string;
  valor: string;
  tipo: string;
  data: string;
}

function App() {

  const toast = useToast()

  const [arrayDados, setArrayDados] = useState<RegistroCarteira[]>([])

  const [registroSelecionado, setRegistroSelecionado] = useState<RegistroCarteira>() 

  function salvarDados (descricao: string, valor: string, tipo: string, data: string, remove: any) {

    if ( descricao === "" || valor === "" || tipo === "" || data === "") {
      toast({
        title: 'Ops.. você esqueceu de algo.',
        description: "Preencha todos os dados para prosseguir.",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    } else {

      const objetoDados = {
        id: Date.now(),
        descricao,
        valor,
        tipo,
        data,
        remove
      }
  
      const novoArray = [...arrayDados, objetoDados]
  
      setArrayDados(novoArray)

    }
  }

  function deleteLinha () {

    const novoArray = arrayDados.filter(registro => {
      if (registro.id != registroSelecionado?.id) {
        return registro
      } 
    })

    setArrayDados(novoArray);
        
  }

 
  return (
    <>
      <Header header="Wallet"></Header>
      <br />
      <br />
      <StyleBody>
        <Cadastro aoClicar={(descricao:string, valor:string, tipo: string, data: string, remove?: any) => salvarDados(descricao, valor, tipo, data, remove)}/>
        <Lista 
          arrayDados={arrayDados}
          setRegistroSelecionado={setRegistroSelecionado}
          registroSelecionado={registroSelecionado}
        />
      </StyleBody> 
      <StyleDeletarEditar>
      <Deletar deletar="Excluir" aoClicar={() => deleteLinha ()}/>
      {/* <Editar editar="Editar" aoClicar={() => editaLinha()}/> */}
      </StyleDeletarEditar>
    </>
  );
}

export default App;
