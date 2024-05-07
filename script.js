const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const spriteContainer = document.getElementById('sprite-container');
const typesConteiner = document.getElementById('types');
const searchForm = document.getElementById('search-form');
const hpStats = document.getElementById('hp');
const attackStats = document.getElementById('attack');
const defenseStats = document.getElementById('defense');
const spAttackStats = document.getElementById('special-attack');
const spDefenseStats = document.getElementById('special-defense');
const speedStats = document.getElementById('speed');

const clearContents = ()=>{
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    pokemonWeight.textContent = '';
    pokemonHeight.textContent = '';
    spriteContainer.innerHTML = '';
    typesConteiner.innerHTML = '';
    hpStats.textContent = '';
    attackStats.textContent = '';
    spDefenseStats.textContent = '';
    speedStats.textContent = '';

    pokemonName.classList.add('disable');
    pokemonId.classList.add('disable');
    pokemonWeight.classList.add('disable');
    pokemonHeight.classList.add('disable');
}

const fetchPokemon = async ()=>{
  clearContents();
  const input = document.getElementById('search-input');
  
  try{
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`);
    const data = await response.json(response.body);

    hpStats.textContent = data.stats[0].base_stat;
    attackStats.textContent = data.stats[1].base_stat;
    defenseStats.textContent = data.stats[2].base_stat;
    spAttackStats.textContent = data.stats[3].base_stat;
    spDefenseStats.textContent = data.stats[4].base_stat;
    speedStats.textContent = data.stats[5].base_stat;

    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = `#${data.id}`;
    pokemonWeight.textContent = `Weight: ${data.weight}`;
    pokemonHeight.textContent = `Height: ${data.height}`;

    spriteContainer.innerHTML = `<img class="sprite-img" id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`;

    typesConteiner.innerHTML = data.types.map((type)=>{
      return `<span id="type-element" class="${type.type.name}">${type.type.name}</span>`
    }).join('');

    pokemonName.classList.remove('disable');
    pokemonId.classList.remove('disable');
    pokemonWeight.classList.remove('disable');
    pokemonHeight.classList.remove('disable');

  }catch(err){
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
}

searchForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  fetchPokemon();
});

