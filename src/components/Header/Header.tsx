import { ElementHeader, HeaderContainer } from "./Header.style"
import { Logo } from "../Logo/Logo"
export const Header = ()=>{
    return(
        <ElementHeader>
            <HeaderContainer>
                <Logo></Logo>
            </HeaderContainer>
        </ElementHeader>
    )
}