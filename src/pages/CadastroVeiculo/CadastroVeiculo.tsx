import { Button } from "../../components/Button/Button";
import { ContainerButton, ContainerInput } from "../AcionarSinistro/AcionarSinistro.style";
import { Layout } from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { RegisterVehicleContainer, RVTitle, RVText } from "./CadastroVeiculo.style";
import { InputText } from "../../components/Input/InputText/InputText";
export default function CadastroVeiculos() {

    const navegate = useNavigate()
    const handleClickBack = () => {
        navegate(routes.home)
    }
    return (

        <Layout>
            <RegisterVehicleContainer>
                <RVTitle>Cadastre um novo veículo</RVTitle>
                <RVText>Preencha os dados do seu veículo:</RVText>
                <ContainerInput>
                    <InputText placeholder="Digite a marca do veículo" />
                    <InputText placeholder="Digite o modelo do veículo" />
                    <InputText placeholder="Digite a data de fabricação" />
                    <InputText placeholder="Digite o valor da carga" />
                    <InputText placeholder="Digite o número de placa" />
                    <InputText placeholder="Digite o peso do veículo"/>
                    <InputText placeholder="Digite comprimento do veículo" />
                    <InputText placeholder="Digite altura do veículo" />
                    <InputText placeholder="Digite a quantidade de eixos" />
                </ContainerInput>
                <ContainerButton>
                <Button inverse="inverse" onClick={handleClickBack}>Cadastrar Veículo</Button>
                <Button onClick={handleClickBack}>Voltar</Button>
            </ContainerButton>
            </RegisterVehicleContainer>
            

        </Layout>
    )

}