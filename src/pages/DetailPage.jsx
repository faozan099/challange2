import React, { useEffect, useState } from "react";
import { apiGetPokemonById } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
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
        const res = await apiGetPokemonById(id);
        setPokemon(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-auto bg-slate-800 px-60 pt-8 text-white">
      <div className="flex items-center text-white gap-8">
        <img src={pokemon.imageUrl} alt="alt" className="w-52" />
        <div className="flex flex-col">
          <p className="font-extrabold text-4xl">{pokemon.name}</p>
          <div className="flex gap-4 text-xl mt-3">
            {pokemon.types.map((item, i) => (
              <p
                key={i}
                className="py-2 font-semibold px-4 rounded border-2 border-gray-500"
                style={{
                  backgroundColor: typeColors[item] || "rgb(245 208 254)",
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 my-2">
            locations:
            {pokemon.locations &&
            Array.isArray(pokemon.locations) &&
            pokemon.locations.length > 0 ? (
              pokemon.locations.map((item, i) => (
                <p key={i} className="underline">
                  {item}
                </p>
              ))
            ) : (
              <p>Unknown</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-16 mb-4">
        <p className="text-3xl font-bold">Profile</p>
        <p className="w-5/6 text-gray-300">{pokemon.description}</p>
        <hr />
        <p className="text-2xl font-semibold mt-4">Stats</p>
        <div className="flex justify-between w-80 py-2 px-3 text-slate-300">
          <div>
            <p>Hp: {pokemon.stats.HP}</p>
            <p>Attack: {pokemon.stats.Attack}</p>
            <p>Defense: {pokemon.stats.Defense}</p>
          </div>
          <div>
            <p>Special Attack: {pokemon.stats["Special Attack"]}</p>
            <p>Special Defense: {pokemon.stats["Special Defense"]}</p>
            <p>Speed: {pokemon.stats.Speed}</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-2xl font-semibold">Abilities</p>
        <div className="flex flex-col p-4 bg-slate-700 rounded-lg mt-4 gap-6 ">
          {pokemon.abilities.map((item, i) => (
            <div className="flex gap-2">
              <div className="" key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 p-4 bg-slate-500 text-slate-300 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <div className="pt-6 font-semibold flex flex-col">
                <div className="px-8">
                  <p className="text-2xl font-bold">{item.name}</p>
                  <p className="text-gray-300">
                    <span className="text-white font-bold">Effect:</span>{" "}
                    {item.effect}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-bold">Description:</span>{" "}
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8 pb-20">
        <button
          onClick={handleClick}
          className="text-center mx-auto bg-sky-600 w-full h-12 font-semibold text-xl"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
