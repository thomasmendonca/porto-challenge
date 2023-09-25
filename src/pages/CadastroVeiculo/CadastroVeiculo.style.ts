import styled from "styled-components";
import { sizes } from "../../styles/Sizes";
import { colors } from "../../styles/Colors";

export const  RegisterVehicleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    outline: 1px solid black;
    margin-top: ${sizes.large};
    margin-bottom: ${sizes.large};
    padding:${sizes.main} 0 ;

`
export const RVTitle = styled.h1`
    color: ${colors.primary.pdark};
    font-size: ${sizes.main};
    text-align:center;

`
export const RVText = styled.p`
    color: ${colors.primary.pdark};
    font-size: ${sizes.small};
    text-align:center;

`