import { Pokemon } from "./Pokemon";

export type AppointmentSchedulingData = {
  name: string;
  lastName: string;
  region: string;
  city: string;
  pokemonTeam: Pokemon[];
  date: string;
  time: string;
  serviceValueByPokemon?: number;
  subtotalValue?: number;
  generationalFee?: number;
  totalValue?: number;
}