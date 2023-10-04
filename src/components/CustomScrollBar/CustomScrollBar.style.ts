import styled from "styled-components";
import { colors } from "../../styles/Colors";
export const ScrollBar = styled.div`
    max-height: 100vh;
    overflow-y: scroll;

  /* Estiliza a barra de rolagem */
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary.blue};
    border-radius: 10px;
    

    &:hover {
        background-color: ${colors.secondary.gray};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.secondary.gray};
  }
`
