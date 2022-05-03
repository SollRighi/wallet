import styled from "styled-components";

interface propsHeader {
  header: string;
}

const StyleHeader = styled.h1`
  display: flex;
  text-align: right;
  font-size: 40px;
  font-family: "Libre Bodoni", serif;
  color: white;
  padding: 30px;
`;

export const Header = (props: propsHeader) => {
  return <StyleHeader> {props.header} </StyleHeader>;
};
