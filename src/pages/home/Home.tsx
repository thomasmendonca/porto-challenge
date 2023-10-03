import {Layout} from "../../components/Layout/Layout"
import { HomeContainer,HomeTitle, HomeText } from "./Home.style"
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { SyntheticEvent } from "react";
import { Header } from "../../components/Header/Header";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";
import { Slider } from "../../components/Slider/Slider";

export default function Home() {
  const navegate = useNavigate ()

  const handleClickRegisterV = () =>{
    navegate(routes.cadastroVeiculos)
  }

  return (
    <Layout>
      <Header/>
      <HomeContainer>
        <ButtonContainer>
          <Button inverse="inverse"> Primeiros Passos</Button>
          <Button>Meu perfil</Button>
          <Button>Meus veículos</Button>
          <Button>Ajuda</Button>
          <Button>Configurações</Button>
          <Button>Criadores</Button>
        </ButtonContainer>
        <Slider>
        <Button>Criadores</Button>
        <Button>Criadores</Button>
        <Button>Criadores</Button>
        </Slider>
      </HomeContainer>
    </Layout>
  )
}
