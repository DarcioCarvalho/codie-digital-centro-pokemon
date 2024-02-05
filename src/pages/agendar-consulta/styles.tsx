import styled from "styled-components";


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40.75rem;
  margin: 2rem auto 6.5rem auto;
  color: #1D1D1D;

  @media screen and (max-width: 680px) {
    width: 30rem;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
    margin: 2rem auto 4.5rem auto;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (max-width: 680px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 34.25rem;
  margin-inline: auto;

  @media screen and (max-width: 540px) {
    padding-inline: 1rem;
  }
`;

export const DefaultFieldsContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.125rem;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #D5D5D5;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #747474;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeeInformationText = styled.span`
  font-size: 0.5rem;
`;

export const OrderFooter = styled(OrderItem)`
  @media screen and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const OrderTotal = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1D1D1D;
`