import styled from "styled-components";
import { Text } from "../../../../components/Text";

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 32.25rem;
    width: 100%;
    margin-inline: auto;
    margin-top: 8rem;
    margin-bottom: 12rem;
    padding-block: 1.25rem 2.125rem;
    border: 1px solid #DF8686;
    border-radius: 0.5rem;
    background-color: #DF868610;
    color: #747474;

    @media screen and (max-width: 426px) {
      max-width: 24rem;
    }

    @media screen and (max-width: 376px) {
      max-width: 18rem;
    }
`;

export const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1D1D1D;

  @media screen and (max-width: 376px) {
      text-align: center;
  }
`;

export const MessageText = styled(Text)`
  @media screen and (max-width: 376px) {
      text-align: center;
  }
`
