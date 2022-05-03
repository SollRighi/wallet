import { Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import styled from "styled-components";

const StyleCadastro = styled.div`
  color: white;
`;

const StyleOption = styled.option`
  color: black;
`;

export const Cadastro = () => {
  return (
    <StyleCadastro>
      <FormControl>
        <FormLabel htmlFor="descricao">Descrição</FormLabel>
        <Input id="descricao" />
      </FormControl>
      <br />
      <Flex gap="10px">
        <FormControl>
          <FormLabel htmlFor="valor">Valor</FormLabel>
          <Input id="valor" type="email" />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel htmlFor="tipo">Tipo</FormLabel>
          <Select placeholder="Selecione..">
            <StyleOption value="option1">Entrada</StyleOption>
            <StyleOption value="option2">Saída</StyleOption>
          </Select>
        </FormControl>
      </Flex>
      <br />
      <FormControl color="white">
        <FormLabel htmlFor="date">Data</FormLabel>
        <Input id="date" type="date" />
      </FormControl>
    </StyleCadastro>
  );
};
