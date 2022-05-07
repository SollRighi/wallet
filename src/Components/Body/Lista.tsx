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
import { useState } from "react";
import { RegistroCarteira } from "../../App";

interface TextoTabela {
  arrayDados: RegistroCarteira[];
}
; 
export const Lista = (props: TextoTabela) => {
  console.log('render lista')

  const [registroSelecionado, setRegistroSelecionado] = useState<RegistroCarteira>() 

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
              <Tr key = {registro.id} onClick={() => setRegistroSelecionado(registro)}>
                <Td>{registro.descricao}</Td>
                <Td>{registro.valor}</Td>
                <Td isNumeric>{registro.tipo}</Td>
                <Td>{registro.data}</Td>
              </Tr>
            ))
          }
          {/* <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
            <Td>0.91444</Td>
          </Tr> */}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>TOTAL</Th>
            <Th> </Th>
            <Th isNumeric> </Th>
            <Th> </Th>
          </Tr>
        </Tfoot>
      </Table>

      {
        registroSelecionado && 

        <h1> 
          id selecionado: {registroSelecionado.descricao}
        </h1>
      }
    </TableContainer>
  );
};
