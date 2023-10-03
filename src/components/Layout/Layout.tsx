import { Header } from "../Header/Header"
import { ElementMain } from "./Layout.style"
import { Footer } from "../Footer/Footer"

interface LayoutProps {
    children: React.ReactNode
  }
  
  export const Layout = ({ children }: LayoutProps) => {
    return (
      <>
        
        <ElementMain>{children}</ElementMain>
        
      </>
    )
  }