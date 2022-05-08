import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { useState } from "react";
import styled from "styled-components";
import { RegistroCarteira } from "../../App";

interface TextoTabela {
  arrayDados: RegistroCarteira[];
  setRegistroSelecionado: (registro: RegistroCarteira) => void
  registroSelecionado: RegistroCarteira | undefined
}
; 
export const Lista = (props: TextoTabela) => {
  console.log('render lista')
  
  const total = props.arrayDados.reduce((valorAnterior, registro) => {

    if (registro.tipo == "E") {
      return valorAnterior + Number(registro.valor);

    } else {
      return valorAnterior - Number(registro.valor);
    }

  }, 0)
  

  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th color="#78e69b">DATA</Th>
            <Th color="#78e69b">DESCRIÇÃO</Th>
            <Th color="#78e69b" isNumeric>VALOR</Th>
            <Th color="#78e69b">TIPO</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            props.arrayDados.map((registro) => (
              <Tr
                key = {registro.id}
                onClick={() => props.setRegistroSelecionado(registro)}
                background={registro.id == props.registroSelecionado?.id ? "#7ccc97" : "unset"}
              >
                  <Td>{registro.data}</Td>
                  <Td>{registro.descricao}</Td>
                  <Td isNumeric>{registro.valor}</Td>
                  <Td>{registro.tipo}</Td>
              </Tr> 
            ))
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>TOTAL</Th>
            <Th> </Th>
            <Th> {total} </Th>
            <Th> </Th>
          </Tr>
        </Tfoot>
      </Table>
      
    </TableContainer>
  );
};
