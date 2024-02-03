import axios from "axios";

const API = import.meta.env.VITE_API;

async function apiPokemon() {
    const res = await axios.get(`${API}?limit=50`);
    console.log({ pokemon: res.data });
    return res.data;
}

async function findPokemon(name) {
  const res = await axios.get(`${API}/${name}`);
  console.log({ foundPokemon: res });
  return res.data;
}

export { apiPokemon, findPokemon };
