import styled from "styled-components";
import { colors } from "../../styles/Colors"
import { sizes } from "../../styles/Sizes"


export const ElementButton = styled.button `
    border: 0;
    padding: 0 ${sizes.xxsmall};
    white-space: nowrap;
    width: auto;
    height: ${sizes.xlarge};
    background-color: ${colors.secondary.lightgray};
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    font-size: ${sizes.xsmall};
    font-weight: 500;
    color: ${colors.primary.dark};
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    border-radius: 8px;
    margin: ${sizes.xxxsmall} 0;
    &:hover{
      color:${colors.commonlight.clight};
      background-color: ${colors.primary.ligthblue};
    }
    &:focus{
      outline: none;
    }

    ${(props) =>
    props.inverse&&
    `
    color:${colors.commonlight.clight};
    background-color: ${colors.primary.ligthblue};

    &:hover {
      color: ${colors.primary.dark};
      background-color: ${colors.secondary.lightgray};
    }
    &:focus{
      color: ${colors.primary.dark};
      background-color: ${colors.secondary.lightgray};  
      outline: none;
    }
    `}


    
`