import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("images/pokemon-hero.jpg");
  /* background-size: auto; */
  background-size: cover;
  height: 100vh;
`;

export const MainText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: white;
  max-width: 31.8125rem;

  @media screen and (max-width: 426px) {
    font-size: 1.35rem;
  }
`;