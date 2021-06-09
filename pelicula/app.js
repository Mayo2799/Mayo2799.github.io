const inputPelicula = document.querySelector('#pelicula');
const botonBuscar = document.querySelector('#buscar');
const contenedorPeliculas =  document.querySelector('#contenedorPeliculas');

const APIKEY = '4bc7984184ef33c15dc14773a9ef70a1';
/*template Literals*/
botonBuscar.addEventListener('click', function (event) {
    event.preventDefault();
    const pelicula = inputPelicula.value;
    cargarPeliculas(pelicula);

});

const cargarPeliculas = (pelicula) => {
    limpiarPantalla();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${pelicula}`;
    fetch(url).then(res => res.json()).then( datos => {
        // console.log(datos);
        for (let i = 0; i < datos.results.length; i++) {
            let datosPelicula = datos.results[i];
            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('pelicula');
            let portadaPelicula = `http://image.tmdb.org/t/p/original${datosPelicula.poster_path}`;
            const peliculaHTML = `
                <div class="imgContenedor">
                    <img src ="${portadaPelicula}">
                </div>
                <div class="informacion"> <p class="titulo">${datosPelicula.original_title}</p>
                <h3 class="votacion">Puntuación: ${datosPelicula.vote_average}</h3>
                <h4 class="fecha"> Fecha de lanzamiento: ${datosPelicula.release_date}</h4>
                </div>
            `;
            peliculaDiv.innerHTML = peliculaHTML;
            contenedorPeliculas.appendChild(peliculaDiv);
        }
    });
}

const limpiarPantalla = () => {
    contenedorPeliculas.innerHTML = '';
}
