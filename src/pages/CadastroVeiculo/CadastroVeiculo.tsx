import { Button } from "../../components/Button/Button";

import { Layout } from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

import { RegisterVehicleContainer,RVTitle,RVText } from "./CadastroVeiculo.style";
export default function CadastroVeiculos (){
    
    const navegate = useNavigate ()
    const handleClickBack = () =>{
        navegate(routes.home)
      }
    return(

        <Layout>
            <RegisterVehicleContainer>
                <RVTitle>Cadastre um novo veículo</RVTitle>
                <RVText>Preencha os dados do seu veículo:</RVText>
                
                <Button>Cadastrar Veículo</Button>
                <Button onClick={handleClickBack}>Voltar</Button>
            </RegisterVehicleContainer>
            
        </Layout>
    )

}