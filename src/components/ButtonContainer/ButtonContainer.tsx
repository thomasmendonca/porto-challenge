import {ButtonContainerElement} from './ButtonContainer.style'

interface ButtonContainerProps {
    children: React.ReactNode
    
    
  }

export const ButtonContainer = ({children}:ButtonContainerProps)=>{
    return (
        <ButtonContainerElement>
            {children}
        </ButtonContainerElement>
    )
}