import {CardElement,CardImageContainer} from './Card.style'

interface CardProps{
    children: React.ReactNode,
    img: string
}

export const Card = ({children,img}:CardProps)=>{
    return(
        <CardElement>
            <CardImageContainer src={img}/>
            {children}
        </CardElement>
    )
}