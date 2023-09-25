import styled from "styled-components";
import { colors } from "../../styles/Colors"
import { sizes } from "../../styles/Sizes"

export const ElementButton = styled.button `
    border: 0;
    padding: ${sizes.xxsmall};
    width: 250px;
    height: ${sizes.xxxlarge};
    background-color: ${colors.primary.pdark};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${sizes.small};
    font-weight: 400;
    color: ${colors.secondary.slight};
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    border-radius: 5px;

    &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`