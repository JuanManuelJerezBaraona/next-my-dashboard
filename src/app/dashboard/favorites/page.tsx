import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const mtadata = {
    title: 'Favoritos',
    description: 'jejeje jajaja jijiji',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global State</small></span>

            {/* <PokemonGrid pokemons={ [] }/> */}
            <FavoritePokemons />
        </div>
    );
}
