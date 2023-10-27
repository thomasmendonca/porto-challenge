import {CardElement,CardImageContainer} from './Card.style'

interface CardProps{
    children?: React.ReactNode,
    img?: string
    id?: string
   
}

export const Card = ({children,img,id}:CardProps)=>{
    return(
        <CardElement id={id}>
            <CardImageContainer src={img} />
            {children}
        </CardElement>
    )
}