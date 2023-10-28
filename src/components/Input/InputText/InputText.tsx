import { Input } from "./InputText.style"
interface InputTextProps{
    placeholder?: string,
}
export const InputText= ({placeholder}:InputTextProps) =>{
    return(
        <Input placeholder={placeholder}/>
    )
}


