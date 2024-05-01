const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');

const searchForm = document.getElementById('search-form');
const input = document.getElementById('search-input');

const fetchPokemon = async ()=>{
  try{
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`);
    const data = await response.json(response.body);
    pokemonName.innerHTML = data.name.toUpperCase();
    pokemonId.innerHTML = `Nº ${data.id.toString().padStart(4, "0")}`;
    pokemonWeight.innerHTML += data.height;
    pokemonHeight.innerHTML += data.weight;

  }catch(err){
    console.log(err);
  }
}

searchForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  fetchPokemon();
});

