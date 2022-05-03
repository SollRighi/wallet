import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";

interface Salvar {
  aoClicar?: () => void;
}

const StyleCadastro = styled.div`
  color: white;
`;

const StyleOption = styled.option`
  color: black;
`;

export const Cadastro = (props: Salvar) => {
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [data, setData] = useState<string>("");

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
            <StyleOption value="option1">Entrada</StyleOption>
            <StyleOption value="option2">Saída</StyleOption>
          </Select>
        </FormControl>
      </Flex>
      <br />
      <FormControl color="white">
        <FormLabel htmlFor="date">Data</FormLabel>
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
        onClick={props.aoClicar}
      >
        Salvar
      </Button>
    </StyleCadastro>
  );
};
