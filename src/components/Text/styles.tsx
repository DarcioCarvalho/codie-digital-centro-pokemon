import { css, styled } from "styled-components";


export const TextComponent = styled.span<{ $type?: string }>`
  font-size: ${props => props.$type == "error" ? "0.75rem" : "0.875rem"};

  ${props => props.$type == "error" ?
    css`
      color: #E40F0F;
    ` : ""
  }
`;