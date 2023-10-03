import styled from "styled-components";
import { sizes } from "../../styles/Sizes";

export const SliderContainer = styled.div`
    width: 100%;
    height:100px;
    display:flex;
    gap: ${sizes.xxlarge};
    flex-grow: 0.5;
    overflow-x:scroll;
    outline: 1px solid;
`