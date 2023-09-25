import { ElementButton } from "./Button.style"

interface ButtonProps {
  children: React.ReactNode
  onClick?: React.ReactEventHandler
}

export const Button = ({
  children,
  onClick

}: ButtonProps) => {
  return (
    <ElementButton onClick={onClick}>
      {children}
    </ElementButton>
  )
}