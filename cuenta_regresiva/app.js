const contador = () => {
    const fechaDeseada = new Date('February 27, 2022 06:00:00').getTime();
    const fechaHoy = new Date().getTime();
    const diferenciaFechas = fechaDeseada - fechaHoy;

    //Cálculos
    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    document.querySelector('#dias').innerText = Math.floor((diferenciaFechas / dia) + 1);
    document.querySelector('#horas').innerText = Math.floor((diferenciaFechas % dia) / hora);
    document.querySelector('#minutos').innerText = Math.floor((diferenciaFechas % hora) / minuto);
    document.querySelector('#segundos').innerText = Math.floor((diferenciaFechas % minuto) / segundo);
}

setInterval(contador, 1000);
