import styled from "styled-components";


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40.75rem;
  margin: 2rem auto 6.5rem auto;
  color: #1D1D1D;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 34.25rem;
  margin-inline: auto;
`;

export const DefaultFieldsContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.125rem;
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

export const OrderFooter = OrderItem;

export const OrderTotal = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1D1D1D;
`