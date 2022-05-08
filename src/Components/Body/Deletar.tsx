import { Button } from "@chakra-ui/react";
import styled from "styled-components"

interface textoBotao {
  deletar: String;  
  aoClicar: () => void
}

export const Deletar = (props: textoBotao) => {
  return (
    <>
      <Button colorScheme='teal' variant='outline' onClick={props.aoClicar}>
        {props.deletar}
      </Button>
    </>
    
  )
}