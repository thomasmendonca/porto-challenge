import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout"
import { routes } from "../../routes";
import {
    WrapperBox,
    Title,
    Text,
    InputFile,
    Label,
    ContainerButton,
    ImgWrapper,
    CardContainer,
    LabelVeiculo,
    OptionVeiculo,
    ContainerInput

} from "./AcionarSinistro.style";
import { Button } from "../../components/Button/Button";
import React from "react";
import GeocodingComponent from "../../components/GeocodingComponents";
import { InputText } from "../../components/Input/InputText/InputText";


export default function VeiculoSinistro() {

    const navigate = useNavigate()
    const handleNext = ()=>{
        navigate(routes.acionarSinistro)
    }
    const handleBack = ()=>{
        navigate(routes.veiculoSinistro)
    }
    return (
        <Layout>
            <WrapperBox>
                <Title>Endereço</Title>
                <Text>Preencha as informações do local do acidente.</Text>
                <ContainerInput>
                    <InputText placeholder="Digite o nome do logradouro (rua, av, etc)"/>
                    <InputText placeholder="Digite o número"/>
                    <InputText placeholder="Digite o bairro"/>
                    <InputText placeholder="Digite a cidade"/>
                    <InputText placeholder="Digite o estado"/>
                    <InputText placeholder="Digite o CEP"/>
                </ContainerInput>
                
                <ContainerButton>
                    <Button onClick={handleNext} inverse="inverse">Continuar</Button>
                    <Button onClick={handleBack}>Voltar</Button>
                </ContainerButton>
            </WrapperBox>
        </Layout>

    )

}