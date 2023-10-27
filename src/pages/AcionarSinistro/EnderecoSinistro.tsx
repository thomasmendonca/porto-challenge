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
    OptionVeiculo

} from "./AcionarSinistro.style";
import { Button } from "../../components/Button/Button";
import React from "react";
import GeocodingComponent from "../../components/GeocodingComponents";


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
                <Text>Por favor, escolha sua localização para que possamos encontrá-lo rapidamente.</Text>
                <ContainerButton>
                    <Button onClick={handleNext} inverse="inverse">Continuar</Button>
                    <Button onClick={handleBack}>Voltar</Button>
                </ContainerButton>

            </WrapperBox>
        </Layout>

    )

}