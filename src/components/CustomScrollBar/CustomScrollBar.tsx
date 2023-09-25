import { ScrollBar } from "./CustomScrollBar.style";


interface ScrollBarProps{
    children: React.ReactNode
}

export const CustomScrollBar = ({ children }:ScrollBarProps) => {
    return <ScrollBar>{children}</ScrollBar>;
  }