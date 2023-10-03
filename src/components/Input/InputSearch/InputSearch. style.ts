import styled from "styled-components";
import { colors } from "../../../styles/Colors";
import { sizes } from "../../../styles/Sizes";

export const SearchElement = styled.div `
    height: 60px;
    width: 90%;
    border: 1px solid${colors.secondary.gray};
    border-radius: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:  0 ${sizes.small} ;

`
export const SearchInput = styled.input.attrs({ type: "text" })`
    height: ${sizes.main};
    outline:none;
    border: none;
    border-right: 1px solid ${colors.secondary.gray};
    width:88%;
    &::placeholder {
    color: ${colors.secondary.gray};
  }
`
export const SearchIcon = styled.button`
    cursor: pointer;
    outline:none;
    border:none;
    height: ${sizes.main};
    width: ${sizes.main};
`
