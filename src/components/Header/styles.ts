import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  padding-inline: 5.19rem;
  background-color: white;

  @media screen and (max-width: 768px) {
    padding-inline: 3.40rem;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-block: 1rem;
    height: 8rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.88rem;

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    width: 100%;
  }
`;