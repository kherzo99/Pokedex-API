import { useEffect, useState } from "react";

interface Props {
  name: string;
  url: string;
}

export default function PokemonCard(props: Props) {
  const [pokemon, setPokemon] = useState<any>({});
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response);
      });
  }, [props.url]);
  return (
    <article className="bg-white/10 p-4 flex flex-col justify-center justify-items-center hover:bg-white/50 rounded-lg font-pokemon-type hover:animate-bounce">
      <img
        className="bg-indigo-950 rounded-lg"
        src={pokemon?.sprites?.front_default}
        alt="pokemon"
      />
      <h2 className="text-white font-semibold text-lg text-center capitalize p-1">
        {props.name}
      </h2>
    </article>
  );
}
