import { LogoContainer,LogoImg } from "./Logo.style"
import logoIcon from "../../assets/logo.svg"
export const Logo = () =>{
    return(
        <LogoContainer>
                <LogoImg src={logoIcon}/>
                
        </LogoContainer>
    )
}