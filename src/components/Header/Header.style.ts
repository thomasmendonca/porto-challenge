import styled from "styled-components"
import {colors} from "../../styles/Colors"
import { sizes } from "../../styles/Sizes"

export const ElementHeader = styled.header`
    height: 200px;
    width: 100%;
    background-color: ${colors.commonlight.clight};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    
    padding: ${sizes.xxsmall} 0;
    
`
export const HeaderContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 90%;
    align-items: center;
    justify-content: center;
    
`
export const HeaderText = styled.span`
    font-size: ${sizes.main};
    font-weight: 600;
    color: ${colors.primary.blue};
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    white-space:nowrap;
`
export const HeaderAvatar = styled.div`
    height: 70px;
    width: 70px;
    margin-left:15%;
`
export const HeaderAvatarImg = styled.img`
    width:100%;
    border-radius: 50%;
`
export const HeaderIcon = styled.span`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
`
