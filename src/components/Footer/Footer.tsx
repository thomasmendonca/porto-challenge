import {ElementFooter, FooterContent, FooterText} from "./Footer.style"
export const Footer = ()=>{
    return(
        <ElementFooter>
            <FooterContent>
                <FooterText>   
                    Developers Solutions Industries. &copy;
                </FooterText>
                <FooterText>
                 {new Date().getFullYear()}
                </FooterText>
            </FooterContent>
        </ElementFooter>
    )
}