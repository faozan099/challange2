import React, { useEffect, useState } from "react";
import { apiPokemon } from "../service/api";
import "./list.css";

function ListPage() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [searchStatus, setSearchStatus] = useState("initial");

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
    apiPokemon().then((res) => {
      setDataPokemon(res);
    });
  }, []);

  const search = async (value) => {
    try {
      const res = await apiPokemon();
      const filterdPokemon = res.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setDataPokemon(filterdPokemon);

      setSearchStatus(filterdPokemon.length > 0 ? "" : "Not Found");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto block bg-slate-800">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-7xl">POKEMON HUNTER</h1>
        <div className="flex mt-3 w-full justify-center items-center">
          <input
            type="text"
            className="w-2/4 h-14 px-2 rounded-lg border-black border-2"
            placeholder="Cari Pokemon..."
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>
      {searchStatus === "Not Found" && (
        <p className="font-semibold text-3xl text-red-600 text-center">
          Pokemon tidak ditemukan.
        </p>
      )}
      <div className="flex flex-wrap w-full gap-8 py-12 justify-center text-center items-center h-auto">
        {dataPokemon.map((item, i) => (
          <div
            key={i}
            className="test relative flex flex-col w-80 overflow-clip card p-6 rounded-lg border-black border-2"
            style={{ backgroundColor: item.color }}
          >
            <img src={item.imageUrl} alt="" />
            <p className="text-4xl my-4">{item.name}</p>
            <div className="flex w-full justify-center items-center gap-8 my-4 text-2xl">
              {item.types.map((role, index) => (
                <p
                  key={index}
                  className="p-2 bg-pink-600 rounded-lg border-2 border-black text-white font-medium"
                  style={{
                    backgroundColor: typeColors[role] || "rgb(245 208 254)",
                  }}
                >
                  {role}
                </p>
              ))}
            </div>
            <div>
              <p className="description">
                {item.description}
                <br />
                <button className="w-full mt-2 h-auto text-white bg-cyan-500 font-bold">
                  Detail
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default ListPage;
