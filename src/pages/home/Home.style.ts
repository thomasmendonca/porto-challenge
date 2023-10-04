import styled from "styled-components"
import { sizes } from "../../styles/Sizes"
import { colors } from "../../styles/Colors"
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items:center;
  gap: ${sizes.large};
  min-height: 80vh;
  margin-top: ${sizes.large}
`
export const HomeTitle = styled.h1`
  color: ${colors.primary.dark};
  text-align:center;
  font-size: ${sizes.large};
`
export const HomeText = styled.p`
  color: ${colors.primary.dark};
  text-align:center;
  font-size: ${sizes.main};
  font-weight: 300;
`