const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const spriteContainer = document.getElementById('sprite-container');
const typesConteiner = document.getElementById('types-output');
const searchForm = document.getElementById('search-form');
const hpStats = document.getElementById('hp');
const attackStats = document.getElementById('attack');
const defenseStats = document.getElementById('defense');
const spAttackStats = document.getElementById('special-attack');
const spDefenseStats = document.getElementById('special-defense');
const speedStats = document.getElementById('speed');

const clearContents = ()=>{
    pokemonName.classList.add('disable');
    pokemonId.classList.add('disable');
    pokemonWeight.classList.add('disable');
    pokemonHeight.classList.add('disable');
    spriteContainer.innerHTML = '';
    typesConteiner.innerHTML = '';
    hpStats.textContent = '';
    attackStats.textContent = '';
    defenseStats.textContent = '';
    spAttackStats.textContent = '';
    spDefenseStats.textContent = '';
    speedStats.textContent = '';
}

const fetchPokemon = async ()=>{
  clearContents();
  const input = document.getElementById('search-input');
  
  try{
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value}`);
    input.value = '';
    const data = await response.json(response.body);
    console.log(data);

    hpStats.textContent = data.stats[0].base_stat;
    attackStats.textContent = data.stats[1].base_stat;
    defenseStats.textContent = data.stats[2].base_stat;
    spAttackStats.textContent = data.stats[3].base_stat;
    spDefenseStats.textContent = data.stats[4].base_stat;
    speedStats.textContent = data.stats[5].base_stat;

    pokemonName.innerHTML = data.name.toUpperCase();
    pokemonId.innerHTML = `Nº ${data.id.toString().padStart(4, "0")}`;
    pokemonWeight.innerHTML = `Height: ${data.height}`;
    pokemonHeight.innerHTML = `Weight: ${data.weight}`;
    spriteContainer.innerHTML = `<img class="sprite-img" src="${data.sprites.front_default}" alt="${data.name}">`;
    typesConteiner.innerHTML = data.types.map((type)=>{
      return `<span id="type" class="${type.type.name}">${type.type.name}</span>`
    }).join('');

    pokemonName.classList.remove('disable');
    pokemonId.classList.remove('disable');
    pokemonWeight.classList.remove('disable');
    pokemonHeight.classList.remove('disable');

  }catch(err){
    alert("Pokémon not found");
    console.log(err.ht);
  }
}

searchForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  fetchPokemon();
});

