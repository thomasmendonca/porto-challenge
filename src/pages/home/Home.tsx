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
import {SliderButton}from '../../components/SliderButton/SliderButton'
import { Card} from "../../components/Card/Card";
import ImgGuincho from"../../assets/guinchoporto.jpeg"
import ImgCaminhao from"../../assets/caminhaoporto.jpeg"



export default function Home() {
  const navegate = useNavigate ()

  const handleClickRegisterV = () =>{
    navegate(routes.cadastroVeiculos)
  }
  const handleClickAcionarSinistro = ()=>{
    navegate(routes.veiculoSinistro)
  }
  return (
    <Layout>
      <Header/>
      <HomeContainer>
      <SliderButton>
        <ButtonContainer>
          <Button inverse="inverse"> Primeiros Passos</Button>
          <Button>Meu perfil</Button>
          <Button>Ajuda</Button>
          <Button>Meus veículos</Button>
          <Button>Configurações</Button>
          <Button>Criadores</Button>
        </ButtonContainer>
      </SliderButton>
        <Slider>
        <Card img={ImgCaminhao}>
            <Button inverse="inverse" onClick={handleClickRegisterV}>Cadastrar Veículo</Button>
          </Card>
          <Card img={ImgGuincho}>
            <Button inverse="inverse" onClick={handleClickAcionarSinistro}>Acionar Sinistro</Button>
          </Card>
        </Slider>
      </HomeContainer>
    </Layout>
    
  )
}
