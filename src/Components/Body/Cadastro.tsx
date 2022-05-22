import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RegistroCarteira } from "../../App";

interface ICadastro {
  aoClicar: (descricao: string, valor:string, tipo: string, data: string) => void;
  registroSelecionado: RegistroCarteira | undefined
  estaEditando: boolean
}

const StyleCadastro = styled.div`
  color: white;
`;

const StyleOption = styled.option`
  color: black;
`;

export const Cadastro = (props: ICadastro) => {
  
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [data, setData] = useState<string>("");

  useEffect(() => {
    if (props.estaEditando && props.registroSelecionado) {
      setDescricao(props.registroSelecionado.descricao)
      setValor(props.registroSelecionado.valor)
      setTipo(props.registroSelecionado.tipo)
      setData(props.registroSelecionado.data)
    }
  }, [props.estaEditando, props.registroSelecionado])

  return (
    <StyleCadastro>
      <FormControl>
        <FormLabel htmlFor="descricao">Descrição</FormLabel>
        <Input
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}

        />
      </FormControl>
      <br />
      <Flex gap="10px">
        <FormControl>
          <FormLabel htmlFor="valor">Valor</FormLabel>
          <Input
            id="valor"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}

          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel htmlFor="tipo">Tipo</FormLabel>
          <Select
            placeholder="Selecione.."
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <StyleOption value="E">Entrada</StyleOption>
            <StyleOption value="S">Saída</StyleOption>
          </Select>
        </FormControl>
      </Flex>
      <br />
      <FormControl color="white">
        <FormLabel htmlFor="date">DATA</FormLabel>  
        <Input
          id="date"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </FormControl>
      <br />
      <Button
        width="100%"
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          props.aoClicar(descricao, valor, tipo, data)
          setDescricao("")
          setValor("")
          setTipo("")
          setData("")
        }}
      >
        Salvar
      </Button>
    </StyleCadastro>
  );
};

