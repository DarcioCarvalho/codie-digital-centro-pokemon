import styled from "styled-components";
import Link from "next/link";

export const LinkComponent = styled(Link) <{ $size?: string; $textColor?: string }>`
  font-size: ${props => props.$size === "md" ? "0.875rem" : "0.75rem"};
  font-weight: ${props => props.$size === "md" ? "400" : "700"};
  text-decoration: none;
  color: ${props => props.$textColor === "black" ? "black" : "white"};
  cursor: pointer;
  transition: 0.4s;

  &:hover{
    color: ${props => props.$textColor === "black" ? "#E40F0F" : "#fde047"};
  }

`;