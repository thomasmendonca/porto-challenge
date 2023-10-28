import styled from "styled-components";
import { colors } from "../../../styles/Colors";

export const Input = styled.input.attrs({ type: "text" })`
    height: 2.8rem;
    border: 1px solid ${colors.secondary.gray};
    border-radius: 8px;
    padding: 0 1rem;
    font-size: 1rem;
    width: 20rem;
    color: ${colors.primary.dark};
    margin: 0.5rem;
    &::placeholder{
        color: ${colors.secondary.gray};
        font-weight: 200;
    }

    &:focus{
        outline: 1px solid ${colors.primary.blue};
        border: 1px solid ${colors.primary.blue};
    }
`