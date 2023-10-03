import styled from "styled-components";
import { colors } from "../../styles/Colors";
import { sizes } from "../../styles/Sizes";

export const ElementFooter = styled.footer`
    background-color: ${colors.primary.dark};
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
`
export const FooterContent = styled.div`
    width: 90%;
    height: 75%;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`
export const FooterText = styled.span`
    color: ${colors.commonlight.clight};
    font-weight: 100;
    
`