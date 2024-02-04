import axios from "axios";

const API = import.meta.env.VITE_API;

async function apiPokemon() {
  const res = await axios.get(`${API}?limit=50`);
  console.log({ pokemon: res.data });
  return res.data;
}

async function apiGetPokemonById(id) {
  try {
    const response = await axios.get(`${API}/${id}`);
    const pokemonData = response.data;

    // Pastikan struktur data sesuai dengan yang diharapkan
    if (pokemonData) {
      return pokemonData;
    } else {
      throw new Error("Pokemon not found");
    }
  } catch (error) {
    throw error;
  }
}
export { apiPokemon, apiGetPokemonById };
