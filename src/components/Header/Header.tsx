import
 { ElementHeader,
    HeaderContainer,
    HeaderText,HeaderAvatar,
    HeaderIcon,
    HeaderAvatarImg } 
 from "./Header.style"
import IconHi from '../../assets/iconHi.png'
import ProfilePic from '../../assets/joana.jpeg'
import { InputSearch } from "../Input/InputSearch/InputSearch"
export const Header = ()=>{
    return(
        <ElementHeader>
            <HeaderContainer>
                <HeaderText>Olá, Fernanda
                    <HeaderIcon>
                        <img src={IconHi} alt="Hello" />
                    </HeaderIcon>
                </HeaderText>
                <HeaderAvatar>
                    <HeaderAvatarImg src={ProfilePic}/>
                </HeaderAvatar>  
            </HeaderContainer>
            <InputSearch/>
            
            
        </ElementHeader>
    )
}