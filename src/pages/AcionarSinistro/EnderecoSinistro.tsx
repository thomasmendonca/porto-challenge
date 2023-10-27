import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout"
import { routes } from "../../routes";
import { 
    Wrapper,
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
export default function VeiculoSinistro(){

    return(
        <Layout>
            <Wrapper>
                <Title>Endereço</Title>
                <Text>Por favor, escolha sua localização para que possamos encontrá-lo rapidamente.</Text>
            </Wrapper>
        </Layout>
        
    )
    
}