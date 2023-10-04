import styled from "styled-components";
import { sizes } from "../../styles/Sizes";

export const SliderContainer = styled.div`
    width: 100%;
    height:auto;
    display:flex;
    align-items:center;
    gap: ${sizes.large};
    overflow-x:scroll;
    &::-webkit-scrollbar {
    width: 0;
   
    }
`