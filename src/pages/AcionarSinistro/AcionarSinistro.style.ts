import { colors } from '../../styles/Colors';
import { sizes } from '../../styles/Sizes';
import styled from "styled-components";



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

export const  WrapperBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   padding: 0.5rem;
  
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
    align-items: center;
    flex-direction: column;

`
export const ImgWrapper = styled.div`
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
    overflow:hidden;


`
export const CardContainer = styled.form`
    width: 100%;
    min-height: 20rem;
    display: flex;
    flex-direction: column;

`
export const OptionVeiculo = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
    background-color: ${colors.secondary.lightgray};
    border-radius:8px;
    border: 1px solid ${colors.secondary.gray};
    padding: 0 1rem;
`

export const LabelVeiculo = styled.label`
    display: flex;
    justify-content: center;
    text-align:center;
    white-space: wrap;
    height: 4rem;
    width: 90%;
    align-items: center;
    font-weight: 600;
    color: ${colors.primary.dark};
    
    
`
