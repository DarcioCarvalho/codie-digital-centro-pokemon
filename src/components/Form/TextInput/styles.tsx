import { styled } from "styled-components";

export const TextInputComponent = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #D5D5D5;
  padding: 0.8125rem 0 0.9375rem 0.875rem;

  &::placeholder {
    color: #747474;
  }

  &:focus {
    outline: 1.5px solid #891313;
    font-weight: 600;
    color: #891313;
  }
`;
