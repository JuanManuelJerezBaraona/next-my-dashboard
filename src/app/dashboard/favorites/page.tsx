import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const mtadata = {
    title: 'Favoritos',
    description: 'jejeje jajaja jijiji',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global State</small></span>

            <PokemonGrid pokemons={ [] }/>
        </div>
    );
}