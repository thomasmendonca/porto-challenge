import styled from "styled-components";
import { sizes } from "../../styles/Sizes";
import { colors } from "../../styles/Colors";

export const  RegisterVehicleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 50vh;
    margin-top: ${sizes.large};
    margin-bottom: ${sizes.large};
    padding:${sizes.main} 0 ;

`
export const RVTitle = styled.h1`
    color: ${colors.primary.dark};
    font-size: ${sizes.main};
    text-align:center;

`
export const RVText = styled.p`
    color: ${colors.primary.dark};
    font-size: ${sizes.small};
    text-align:center;

`