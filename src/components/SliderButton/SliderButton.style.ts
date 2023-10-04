import styled from "styled-components";
import { sizes } from "../../styles/Sizes";

export const SliderButtonContainer = styled.div`
    width: 100%;
    height:auto;  
    display:flex;
    align-items: center;
    gap: ${sizes.xxlarge};
    overflow-x:scroll;
    &::-webkit-scrollbar {
    width: 0;
  }
`