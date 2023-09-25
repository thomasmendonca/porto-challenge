import { ElementButton } from "./Button.style"

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({
  children,

}: ButtonProps) => {
  return (
    <ElementButton>
      {children}
    </ElementButton>
  )
}