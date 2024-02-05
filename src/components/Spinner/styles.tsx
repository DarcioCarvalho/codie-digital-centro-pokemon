import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SVG = styled.svg`
  margin-right: 0.75rem;
  margin-bottom: -0.1875rem;
  color: #252C43;
  animation: ${spin} 1s linear infinite; 
`;

export const Circle = styled.circle`
  opacity: 45%;
`;

export const Path = styled.path`
  opacity: 75%;
`;