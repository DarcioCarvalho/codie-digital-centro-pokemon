import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  background-color: #1D1D1D;
  font-size: 0.875rem;
  color: white;

  @media screen and (max-width: 426px) {
    font-size: 0.625rem;
    height: 3.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.5rem;
  }
`