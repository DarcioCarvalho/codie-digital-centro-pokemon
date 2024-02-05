import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 11.6875rem;
  padding: 2rem 0 0 6.62rem;
  background-color: #E40F0F;
  color: white;

  @media screen and (max-width: 768px) {
    height: 10rem;
    padding: 1.5rem 0 0 3.62rem;
  }

  @media screen and (max-width: 426px) {
    height: 8rem;
    padding: 1rem 0 0 3rem;
    gap: 0.4rem;
  }
`;

export const AddressBar = styled.div`
  display: flex;
  gap: 0.31rem;
  font-size: 0.75rem;
  color: #EEEEEE;
`;

export const AddressBarSeparator = styled.span`
  font-weight: 300;

  &::after {
    content: '>';
  }
`;

export const CurrentPage = styled.span`
  font-weight: 700;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;

    @media screen and (max-width: 425px) {
      font-size: 1.75rem;
  }
`;

export const Description = styled.span`
    font-size: 0.875rem;
    font-weight: 400;
`;
