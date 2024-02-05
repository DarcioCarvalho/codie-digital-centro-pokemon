import { api } from "../service/api";


export function usePokemonAPI() {

  const getCities = async (regionURL: string) =>
    await api.get(regionURL);

  const getPokemons = async (pokedexesURL: string) =>
    await api.get(pokedexesURL);

  return {
    getCities,
    getPokemons
  }


}

