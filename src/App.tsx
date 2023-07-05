import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-yellow-300 via-cyan-500 to-violet-900 flex flex-col">
      <h3 className="w-screen flex justify-center p-5 font-pokemon-type font-bold text-white text-2xl bg-black/10">
        WELCOME TO
      </h3>
      <header className="w-screen flex justify-center p-5">
        <img
          className="bg-white/10 p-10 rounded-lg  hover:bg-white/50"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="pokeapi"
        />
      </header>
      <section className="grid grid-cols-6 gap-5 p-10">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
