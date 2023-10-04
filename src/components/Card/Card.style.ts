import styled from "styled-components";
import { sizes } from "../../styles/Sizes";
import { colors } from "../../styles/Colors";

export const CardElement = styled.div`
    display:flex;
    height:200px;
    min-width: 200px;
    max-width:200px;
    border-radius:20px;
    align-items:center;
    justify-content: space-between;
    flex-direction:column;
    margin: ${sizes.xxxsmall} ; 
    background-color:${colors.secondary.lightgray};
    padding-bottom: ${sizes.xxsmall};
`
export const CardImageContainer = styled.img`
    height:auto;
    width: auto;
    border-radius:20px 20px 0 0;
    opacity:0.6;
`