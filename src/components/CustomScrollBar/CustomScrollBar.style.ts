import styled from "styled-components";
import { colors } from "../../styles/Colors";
export const ScrollBar = styled.div`
    max-height: 100vh;
    overflow-y: auto;

  /* Estiliza a barra de rolagem */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondary.slight};
    border-radius: 10px;

    &:hover {
        background-color: ${colors.secondary.slight};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.primary.pdark};
  }
`
