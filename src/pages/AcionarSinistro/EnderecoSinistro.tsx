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
import { Input } from "../../components/Input/InputText/InputText.style";


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
                    <Input placeholder="Digite o nome do logradouro (rua, av, etc)"/>
                    <Input placeholder="Digite o número"/>
                    <Input placeholder="Digite o bairro"/>
                    <Input placeholder="Digite a cidade"/>
                    <Input placeholder="Digite o estado"/>
                    <Input placeholder="Digite o CEP"/>
                </ContainerInput>
                
                <ContainerButton>
                    <Button onClick={handleNext} inverse="inverse">Continuar</Button>
                    <Button onClick={handleBack}>Voltar</Button>
                </ContainerButton>
            </WrapperBox>
        </Layout>

    )

}