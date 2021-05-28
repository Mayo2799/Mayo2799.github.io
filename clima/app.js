let pais = document.querySelector('#pais');
let ciudad = document.querySelector('#ciudad');
let buscar = document.querySelector('#buscar');

let iconoClima = document.querySelector('#iconoClima');
let paisCiudad = document.querySelector('#paisCiudad');
let temperatura = document.querySelector('#temperatura');
let descripcion = document.querySelector('#descripcion');

let sensacionTermica = document.querySelector('#sensacionTermica');
let humedad = document.querySelector('#humedad');
let longitud = document.querySelector('#longitud');
let latitud = document.querySelector('#latitud');

buscar.addEventListener("click", () => {
    // let llavePropia = 'e757c714ad1e01ed3d496d3183b66272';
    let llave = 'bd4ea33ecf905116d12af172e008dbae',
    url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&APPID=${llave}`;

    fetch(url).then(respuesta =>{
        return respuesta.json();
    }).then(datos => {
        console.log(datos);
        let celcius = Math.floor(datos.main.temp - 273.15);
        paisCiudad.innerText = `${datos.name} / ${datos.sys.country}`;
        temperatura.innerHTML = `${celcius}° <b>C</b>`;

        datos.weather.forEach(items => {
            let iconos = `https://openweathermap.org/img/wn/${items.icon}.png`;
            iconoClima.src = iconos;
            descripcion.innerText = items.description;
        })

        let sensacionTermicaValor = Math.floor(datos.main.feels_like - 273.15);
        sensacionTermica.innerText = `Sensación térmica ${sensacionTermicaValor}°C`;
        humedad.innerText = `Humedad ${datos.main.humidity}`;
        latitud.innerText = `Latitud ${datos.coord.lat}`;
        longitud.innerText = `Longitud ${datos.coord.lon}`;
    })
    
    pais.value = '';
    ciudad.value = '';
})