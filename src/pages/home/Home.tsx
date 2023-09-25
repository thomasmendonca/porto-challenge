import {Layout} from "../../components/Layout/Layout"
import { HomeContainer,HomeTitle, HomeText } from "./Home.style"
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

export default function Home() {
  const navegate = useNavigate ()

  const handleClickRegisterV = () =>{
    navegate(routes.cadastroVeiculos)
  }

  return (
    <Layout>
      <HomeContainer>
        <Logo></Logo>
        <HomeTitle>Bem vindo, Thomas!</HomeTitle>
        <HomeText>Tudo pronto! Como podemos te ajudar?</HomeText>
        <Button onClick={handleClickRegisterV}>Cadastrar novo veículo</Button>
        <Button>Editar meu veículo</Button>
        <Button>Editar meu perfil</Button>
      </HomeContainer>
    </Layout>
  )
}
