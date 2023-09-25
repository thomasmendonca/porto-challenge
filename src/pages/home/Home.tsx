import {Layout} from "../../components/Layout/Layout"
import { HomeContainer,HomeTitle, HomeText } from "./Home.style"
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";


export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <HomeTitle>Bem vindo, Thomas!</HomeTitle>
        <HomeText>Tudo pronto! Como podemos te ajudar?</HomeText>
        <Button>Cadastrar novo veículo</Button>
        <Button>Editar meu veículo</Button>
        <Button>Editar meu perfil</Button>
      </HomeContainer>
    </Layout>
  );
}
