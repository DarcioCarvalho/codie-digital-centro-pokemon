import styled, { css } from "styled-components";


export const LogoButton = styled.div<{ $expandedSize?: boolean; $isHome?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.19rem;
  width: auto;
  max-width: ${props => props.$expandedSize ? "16.1875rem" : "3.8125rem"};
  height: 3.8125rem;
  border-radius: 3.125rem;
  background-color: #E40F0F;
  overflow: hidden;
  transition: 0.4s;
  cursor: ${props => props.$isHome ? "default" : "pointer"};

  &:hover{
    max-width: 16.1875rem;
  }

  ${props => !props.$isHome ?
    css`
    &:hover span:nth-child(2) {
      color: #fde047;
    }

    &:hover div svg circle:nth-child(1) {
      fill: #ffdfdf;
    }


    &:hover div svg circle:nth-child(4) {
       fill: #fde047; 
      }

    ` :
    ''
  }

  @media screen and (max-width: 768px) {
    width: auto;
    max-width: ${props => props.$expandedSize ? "14.759rem" : "3.24rem"};
    height: 3.24rem;
    gap: 0.5rem;

    &:hover{
      max-width: 14.759rem;
    }
  }

  

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.6875rem;

  @media screen and (max-width: 768px) {
    margin-left: 0.46rem;
  }
`;

export const LogoLabel = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  padding-right: 1.75rem;

  &::after {
    content: 'Centro Pokémon';
  }
`;

