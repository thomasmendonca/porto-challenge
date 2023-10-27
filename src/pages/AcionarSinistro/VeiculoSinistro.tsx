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

export default function EnderecoSinistro() {
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(routes.home)
    }
    const handleNext = ()=>{
        navigate(routes.enderecoSinistro)
    }
    return (
        <Layout>
            <WrapperBox>
                <Title>Vamos Começar!</Title>
                <Text>Selecione abaixo o seu veículo danificado para que possamos te ajudar:</Text>
                <CardContainer>
                    <OptionVeiculo>
                        <input type="radio" id="radio1" name="radio"/>
                        <LabelVeiculo htmlFor="radio1">Volvo FH16 750 - Preto - AWE9023</LabelVeiculo>
                    </OptionVeiculo> 
                    <OptionVeiculo>   
                        <input type="radio" id="radio2" name="radio"/>
                        <LabelVeiculo htmlFor="radio2">Mercedes-Benz Actros 2645 - Prata - JDK7543</LabelVeiculo>
                    </OptionVeiculo> 
                </CardContainer>
                <ContainerButton>
                    <Button inverse="inverse" onClick={handleNext}>Continuar</Button>
                    <Button onClick={handleBack}>Voltar</Button>
                </ContainerButton>
                
            </WrapperBox>
        </Layout>


    )

}