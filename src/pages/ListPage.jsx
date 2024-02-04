import React, { useEffect, useState } from "react";
import { apiPokemon } from "../service/api";
import "./list.css";
import SearchBar from "../components/SearchBar";
import NotFoundMessage from "../components/NtFoundMassege";
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";

function ListPage() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [searchStatus, setSearchStatus] = useState("initial");
  const [loading, setLoading] = useState(true);

  const typeColors = {
    Grass: "rgb(132 204 22)",
    Poison: "rgb(124 58 237)",
    Fire: "rgb(245 158 11)",
    Flying: "rgb(199 210 254)",
    Water: "rgb(6 182 212)",
    Normal: "rgb(168 162 158)",
    Electric: "rgb(234 179 8)",
    Ground: "rgb(120 113 108)",
    Bug: "rgb(77 124 15)",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiPokemon();
        setDataPokemon(res);
        setSearchStatus(res.length > 0 ? "" : "Not Found");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const search = async (value) => {
    try {
      setLoading(true);
      const res = await apiPokemon();
      const filterdPokemon = res.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setDataPokemon(filterdPokemon);

      setSearchStatus(filterdPokemon.length > 0 ? "" : "Not Found");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto block bg-slate-800">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-7xl">POKEMON HUNTER</h1>
        <SearchBar onSearch={search} />
      </div>
      {loading ? (
        <Loading />
      ) : searchStatus === "Not Found" ? (
        <NotFoundMessage />
      ) : (
        <PokemonList dataPokemon={dataPokemon} typeColors={typeColors} />
      )}
    </div>
  );
}

export default ListPage;
