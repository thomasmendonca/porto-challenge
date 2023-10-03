import styled from "styled-components";
import { sizes } from "../../styles/Sizes";
import { colors } from "../../styles/Colors";

export const Select = styled.select`
    height: ${sizes.xlarge};
    background-color: ${colors.secondary.slight};
    width: 250px;
    color: ${colors.primary.pdark};
    border:none;

`
export const Option = styled.option`
    height: ${sizes.large};
    background-color: ${colors.secondary.slight};
    color: ${colors.primary.pdark};
    width: 200px;

`