import { SliderButtonContainer } from "./SliderButton.style"



interface SliderButtonProps {
    children: React.ReactNode
}

export const SliderButton = ({children}:SliderButtonProps)=>{
    return(

        <SliderButtonContainer>{children}</SliderButtonContainer>

    )
}