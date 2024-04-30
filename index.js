const getTypeColor = (type)=>{
 const types =  [
    {
      "name": "normal",
      "cor": "#A8A878"
    },
    {
      "name": "fighting",
      "cor": "#C03028"
    },
    {
      "name": "flying",
      "cor": "#A890F0"
    },
    {
      "name": "poison",
      "cor": "#A040A0"
    },
    {
      "name": "ground",
      "cor": "#E0C068"
    },
    {
      "name": "rock",
      "cor": "#B8A038"
    },
    {
      "name": "bug",
      "cor": "#A8B820"
    },
    {
      "name": "ghost",
      "cor": "#705898"
    },
    {
      "name": "steel",
      "cor": "#B8B8D0"
    },
    {
      "name": "fire",
      "cor": "#F08030"
    },
    {
      "name": "water",
      "cor": "#6890F0"
    },
    {
      "name": "grass",
      "cor": "#78C850"
    },
    {
      "name": "electric",
      "cor": "#F8D030"
    },
    {
      "name": "psychic",
      "cor": "#F85888"
    },
    {
      "name": "ice",
      "cor": "#98D8D8"
    },
    {
      "name": "dragon",
      "cor": "#7038F8"
    },
    {
      "name": "dark",
      "cor": "#705848"
    },
    {
      "name": "fairy",
      "cor": "#EE99AC"
    },
    {
      "name": "unknown",
      "cor": "#68A090"
    },
    {
      "name": "shadow",
      "cor": "#000000"
    }
  ]
  
}


const fetchPokemon = async (nameOrId)=>{
  try{
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
    const data = await response.json(response.body);
    console.log(data.types)
 
  }catch(err){
    console.log(err);
  }
}

fetchPokemon('pikachu')