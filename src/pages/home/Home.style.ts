import styled from "styled-components"
import { sizes } from "../../styles/Sizes"
import { colors } from "../../styles/Colors"
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding: ${sizes.small};
  border:1px solid ${colors.secondary.slight};
  margin-top: ${sizes.large}
`
export const HomeTitle = styled.h1`
  color: ${colors.primary.pdark};
  text-align:center;
  font-size: ${sizes.main};
`
export const HomeText = styled.p`
  color: ${colors.primary.pdark};
  text-align:center;
  font-size: ${sizes.small};
  font-weight: 300;
`