import styled from "styled-components";

const Barra = styled.div`
  border: 1px solid #000;
  background-color: rgb(
    ${(props) => props.r},
    ${(props) => props.g},
    ${(props) => props.b}
  );
  width: 600px;
  height: 100px;
`;

export default Barra;
