const pokemonName = document.querySelector('.pokemon__name');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
     const data = await APIResponse.json();
    return data;


} 
//função q vai renderizar esses dados na tela 

const rederPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

}
