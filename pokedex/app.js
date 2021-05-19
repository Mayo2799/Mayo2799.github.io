const colores = {
    fire: '#e5383b',
    grass: '#b5e48c',
    electric :'#fcf300',
    water: '#1e96fc',
    ground: '#99582a',
    rock: '#495057',
    fairy: '#f72585',
    poison: '#9d4edd',
    bug: '#226f54',
    dragon: '#3c096c',
    psychic: '#fec5bb',
    flying: '#6c757d',
    fighting: '#a4161a',
    normal: '#ffffff',
    ghost: '#5a189a',
    ice: '#c0fdff',
    steel: '#adb5bd',
    sinister: '#463f3a',
    dark: '#3c6e71'
}

const tipoPrincipal = Object.keys(colores);

const contenedor = document.querySelector('#contenedor');
const numeroDePokemons = 898;

const esperarPokemon = async () => {
    for (let i = 1; i <= numeroDePokemons; i++) {
        await obtenerPokemon (i);
    }
}

const obtenerPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch (url);
    const pokemon = await respuesta.json();
    crearCarta(pokemon);
    // console.log(pokemon);
}

const crearCarta = (pokemon) => {
    const pokemonDiv =  document.createElement('div');
    pokemonDiv.classList.add('pokemon');
    const tipoPokemon = pokemon.types.map(type => type.type.name);
    const tipo = tipoPrincipal.find(type => tipoPokemon.indexOf(type) > -1);
    const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colores[tipo];
    pokemonDiv.style.background = color;
    const pokemonHTML = `
        <div class="imgContenedor">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div class="informacion">
            <span class="numeroPokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class=nombrePokemon">${nombre}</h3>
            <h4 class="tipo">Tipo: ${tipo}</h4>
        </div>
    `;
    pokemonDiv.innerHTML = pokemonHTML;
    contenedor.appendChild(pokemonDiv);
}

esperarPokemon();