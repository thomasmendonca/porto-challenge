import { colors } from './../../styles/Colors';
import { sizes } from './../../styles/Sizes';
import styled from "styled-components";
import { colors } from "../../styles/Colors";



export const  InputFile = styled.input.attrs({ type: "file" })`
    display:none;

`
export const Label = styled.label`
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    font-weight: 100;
    color: ${colors.primary.dark};
    background-color: ${colors.secondary.lightgray};
    border-radius: 8px;
    margin: 1rem 0;
    border: 2px solid ${colors.commonlight};
    outline: 2px solid ${colors.primary.dark};
    width: 90%;
    margin-left: 5%;
    padding: 0.5rem;
    text-align: center;

`

export const  Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   padding: 0.5rem
    
`
export const Title = styled.h1`
    font-size: ${sizes.main};
    text-align: center;
    color: ${colors.primary.blue};
`
export const Text = styled.p`
    font-size: ${sizes.small};
    text-align: justify;
    color: ${colors.primary.dark};


`
export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`