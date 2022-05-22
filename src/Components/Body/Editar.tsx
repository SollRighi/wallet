import { Button } from "@chakra-ui/react";
import styled from "styled-components"

interface textoBotao {
  editar: String;
  aoClicar: () => void
}

export const Editar = (props: textoBotao) => {
  return (
    <>
      <Button colorScheme='teal' variant='outline' onClick={props.aoClicar}>
        {props.editar}
      </Button>
    </>
    
  )
}