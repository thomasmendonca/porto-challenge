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
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);
    return (
        <Layout>
            <WrapperBox>
                <Title>Endereço</Title>
                <Text>Por favor, escolha sua localização para que possamos encontrá-lo rapidamente.</Text>
               <GeocodingComponent apiKey="apiKey"></GeocodingComponent>

            </WrapperBox>
        </Layout>

    )

}