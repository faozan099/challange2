import React from "react";
import "./list.css";

function List({ listPokemon }) {
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
  return (
    <>
      <div className="flex flex-wrap w-full gap-8 py-12 justify-center text-center items-center h-auto">
        {listPokemon.map((item) => (
          <div
            key={item.id}
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
                <button className="w-full mt-2 h-auto text-white bg-cyan-500 fonst-bold">
                  Detail
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

List.defaultProps = {
  listPokemon: [
    {
      id: 1,
      imageUrl: "#",
      name: "default name",
      types: ["hallo", "haii"],
      description: "default",
      color: "#ffff",
    },
  ],
};

export default List;
