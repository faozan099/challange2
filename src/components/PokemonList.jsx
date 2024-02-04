import React from "react";
import PokemnCard from "./PokemnCard";

function PokemonList({ dataPokemon, typeColors }) {
  return (
    <div className="flex flex-wrap w-full gap-8 py-12 justify-center text-center items-center h-auto">
      {dataPokemon.map((item, i) => (
        <PokemnCard key={i} pokemon={item} typeColors={typeColors} />
      ))}
    </div>
  );
}

export default PokemonList;
