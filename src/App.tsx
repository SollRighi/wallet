import { filter, propNames, Td, Tr, useToast } from "@chakra-ui/react";
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
  display: flex;
  justify-content: space-around;
  margin: 50px;

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
  const [editando, setEditando] = useState<boolean>(false) 

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

      if (editando) {
        
        const novoArray = [...arrayDados] 
        
        const registroEditando = novoArray.find(registro => {
          if (registro.id == registroSelecionado?.id) {
            return registro
          } 
        })

        if(!registroEditando) {
          return
        }
        registroEditando.descricao = descricao
        registroEditando.valor = valor
        registroEditando.tipo = tipo
        registroEditando.data = data

        setArrayDados(novoArray)

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

      setEditando(false)

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

  function editaLinha () {

    // const registroSelecionado = arrayDados.find(registro => {
    //   if (registro.id == registroSelecionado?.id) {
    //     return registro
    //   } 
    // })

    console.log(registroSelecionado)
    setEditando(true)
        
  }

 
  return (
    <>
      <Header header="Wallet"></Header>
      <br />
      <br />
      <StyleBody>
        <Cadastro
          aoClicar={(descricao:string, valor:string, tipo: string, data: string, remove?: any) => salvarDados(descricao, valor, tipo, data, remove)}
          registroSelecionado={registroSelecionado}
          estaEditando={editando}
        />
        <div>
          <Lista 
            arrayDados={arrayDados}
            setRegistroSelecionado={setRegistroSelecionado}
            registroSelecionado={registroSelecionado}
          />
          <StyleDeletarEditar>
            <Deletar deletar="Excluir" aoClicar={() => deleteLinha ()}/>
            <Editar editar="Editar" aoClicar={() => editaLinha()}/>
          </StyleDeletarEditar>
        </div>
      </StyleBody> 
    </>
  );
}

export default App;
