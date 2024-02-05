import styled from "styled-components";

export const ButtonComponent = styled.button`
  min-width: 10.75rem;
  width: fit-content;
  height: 2.625rem;
  padding-inline: 0.75rem;
  border-radius: 1.875rem;
  background-color: #E40F0F;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #a60e0e;
  }

  &:active {
    transform: scale(0.97);
  }
`;