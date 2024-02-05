import { css, styled } from "styled-components";

function selectArrow(fill: string, rotate = 0): string {
  fill = fill.replaceAll("#", "%23");
  const rotateStyle = rotate ? `style="transform: rotate(${rotate}deg)"` : "";
  return `'data:image/svg+xml,<svg width="18" height="15" viewBox="0 0 18 15" fill="none" ${rotateStyle} xmlns="http://www.w3.org/2000/svg"><path d="M8.36364 14.375L0.693182 0.465908L2.92045 0.465908L9.07955 11.875L8.875 11.7727L9.30682 11.7727L9.10227 11.875L15.2614 0.465909L17.4886 0.465909L9.81818 14.375L8.36364 14.375Z" fill="${fill}"/></svg>'`;
}

export const LabelSelectContainer = styled.div<{ $direction: string }>`
  display: flex;
  flex-direction: ${props => props.$direction};

  ${props => props.$direction == "column" ?
    css`
      gap: 0.5rem;
    ` : ""
  }

  ${props => props.$direction == "row" ?
    css`
      align-items: center;
      justify-content: space-between;
    ` : ""
  }
`;

export const SelectComponent = styled.select<{ $isPlaceholder?: boolean; $direction?: string }>`
  border-radius: 0.5rem;
  border: 1px solid #D5D5D5;
  padding: 0.8125rem 0 0.9375rem 0.875rem;
  color: ${props => props.$isPlaceholder ? "#747474" : "currentColor"};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-position: center right 0.875rem;

  ${props => props.$direction == "row" ?
    css`
      max-width: 27.375rem;
      width: 100%;

      @media screen and (max-width: 680px) {
        max-width: 25rem;
        width: 100%;
      }

      @media screen and (max-width: 540px) {
        max-width: 22rem;
        width: 100%;
      }

      @media screen and (max-width: 470px) {
        max-width: 19rem;
        width: 100%;
      }

      @media screen and (max-width: 410px) {
        max-width: 15rem;
        width: 100%;
      }
    ` : ""
  }
  
  &:focus {
    outline: 1.5px solid #891313;
    font-weight: 600;
    color: #891313;
    background: url(${selectArrow("#891313")}) no-repeat;
    background-position: center right 0.875rem;
  }

  &[aria-expanded = "false"] {
   background: url(${props => props.$isPlaceholder ? selectArrow("#747474") : selectArrow("currentColor")}) no-repeat;
   background-position: center right 0.875rem;
  }

  &[aria-expanded = "false"]:focus {
   background: url(${selectArrow("#891313")}) no-repeat;
   background-position: center right 0.875rem;
  }

  &[aria-expanded = "true"] {
   background: url(${selectArrow("#891313", 180)}) no-repeat;
   background-position: center right 0.875rem;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
