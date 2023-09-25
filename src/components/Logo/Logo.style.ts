import styled from "styled-components";
import {sizes} from "../../styles/Sizes"
import { colors } from "../../styles/Colors";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;
export const LogoImg = styled.img`
    width:100%;
    width: 60px; 
    height: 60px;
`
export const LogoText = styled.span`
  font-weight: 100;
  font-size: ${sizes.main};
  color: ${colors.commonlight.clight};
  width:100%;
`

