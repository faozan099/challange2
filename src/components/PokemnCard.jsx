import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon, typeColors }) {
  const navigate = useNavigate();

  return (
    <div
      className="test relative flex flex-col w-80 overflow-clip card p-6 rounded-lg border-black border-2"
      style={{ backgroundColor: pokemon.color }}
    >
      <img src={pokemon.imageUrl} alt="" />

      <p className="text-4xl my-4">{pokemon.name}</p>

      <div className="flex w-full justify-center items-center gap-8 my-4 text-2xl">
        {pokemon.types.map((type, index) => (
          <p
            key={index}
            className="p-2 bg-pink-600 rounded-lg border-2 border-black text-white font-medium"
            style={{
              backgroundColor: typeColors[type] || "rgb(245 208 254)",
            }}
          >
            {type}
          </p>
        ))}
      </div>

      <div>
        <p className="description">
          {pokemon.description}
          <br />
          <button
            onClick={() => navigate(`/detail/${pokemon.id}`)} // Ganti dengan pokemon.id atau pokemon.name
            className="w-full mt-2 h-auto text-white bg-cyan-500 font-bold"
          >
            Detail
          </button>
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
