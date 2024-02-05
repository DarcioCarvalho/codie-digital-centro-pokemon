import { styled } from "styled-components";

export const PokemonTeamContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PokemonTeamHeading = styled.h3`
  font-size: 0.75rem;
  font-weight: bold;
`;

export const PokemonTeamInfo = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #747474;
  margin-top: 0.5rem;
`;

export const PokemonTeamItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

export const NavBarPokemonTeam = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const ButtonAddPokemon = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  width: fit-content;
  height: 2.625rem;
  background-color: white;
  border: 1px solid #1D1D1D;
  border-radius: 1.875rem;
  padding-inline: 0.875rem;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s;

  &:not(:disabled):hover {
    background-color: #e7e7e7;
    border: 1.5px solid #1D1D1D;
  }

  &:not(:disabled):active {
    transform: scale(0.97);
  }

  &:disabled {
    border-color: #1010104D;
    cursor: not-allowed;
  }
`;

export const PlusIconButton = styled.span`
  font-size: 1rem;
  font-weight: bold;

  &::after {
    content: "+";
  } 
`;

export const ButtonDeletePokemon = styled.span`
  height: fit-content;
  margin-top: -1.75rem;
  margin-right: 0.75rem;
  font-size: 0.75rem;
  color: #a60e0e;
  font-style: italic;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #ff3232;
    font-weight: 500;
  }

  &[aria-disabled = "true" ] {
    opacity: 50%;
    cursor: not-allowed;
  }

  &[aria-disabled = "true" ]:hover {
    opacity: 50%;
    font-weight: 400;
  }

`