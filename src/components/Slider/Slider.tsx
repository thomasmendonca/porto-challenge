import { SliderContainer } from "./Slider.style";

interface SliderProps {
    children: React.ReactNode
}
export const Slider = ({children}:SliderProps)=>{
    return(

        <SliderContainer>{children}</SliderContainer>
    )
}