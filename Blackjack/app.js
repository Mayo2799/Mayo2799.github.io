(() => {
    let baraja = [];
    let palos = ['S', 'C', 'D', 'H'];
    let figuras = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0, puntosPC = 0;
    
    const btnIniciar = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetenerse = document.querySelector('#btnDetenerse'),
    btnSalir = document.querySelector('#btnSalir'),
    btnNombre = document.querySelector('#btnNombre');
    
    const nombreJugador  = document.getElementById('nomJugador');
    const resultados = document.querySelectorAll('span');
    const cartas_Jugador = document.querySelector('#cartasJugador');
    const cartas_PC = document.querySelector('#cartasPC');
    
    const crearBaraja = () => {
        baraja = [];
    
        for(let i = 2; i <= 10; i++){
            for(let palosDeCartas of palos){
                baraja.push(i+palosDeCartas);
            }
        }
        
        for(let figurasDeCartas of figuras){
            for(let palosDeCartas of palos){
                baraja.push(figurasDeCartas+palosDeCartas);
            }
        }
        baraja =_.shuffle(baraja);
    }
    
    const pedirCarta = () => {
    //Condicional ternario
        //condicion/pregunta ? si pasa entonces va a hacer esto : sino esto
        return (baraja.length == 0) ? alert('No hay más cartas') : baraja.pop();
    }
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
    }
    
    btnIniciar.addEventListener('click', () =>{
    
    if(baraja.length === 0){
        crearBaraja();
        alert('Se ha creado una baraja');
    }
    
        
        btnPedir.disabled = false;
        btnDetenerse.disabled = false;
    
        puntosJugador = 0;
        puntosPC = 0;
        resultados[0].innerText = 0;
        resultados[1].innerText = 0;
    
    
        cartas_Jugador.innerHTML = '';
        cartas_PC.innerHTML = '';
    })
    
    const turnoPC = (puntosJugador) => {
    
        do{
            const carta = pedirCarta();
            puntosPC = puntosPC + valorCarta(carta);
            resultados[1].innerText = puntosPC;
            const imgCarta = document.createElement('img');
            imgCarta.src = 'cartas/'+carta+'.png';
            imgCarta.classList.add('carta');
            cartas_PC.append(imgCarta);
    
            
        if(puntosJugador > 21){
            break;
        }
    
        }while( puntosPC < puntosJugador && puntosJugador <= 21);
    
        setTimeout( () => {
            if(puntosJugador === puntosPC){
                alert('Empate');
            }else if(puntosJugador > 21){
                alert('La Máquina gana');
            }else if(puntosPC > 21){
                alert('Ganaste');
            }else{
                alert('La Máquina gana');
            }
        }, 1000);
    
        btnIniciar.disabled = false;
    
    }
    
    btnPedir.addEventListener('click', () =>{
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        resultados[0].innerText = puntosJugador;
        const imgCarta = document.createElement('img');
        imgCarta.src = 'cartas/'+carta+'.png';
        imgCarta.classList.add('carta');
        cartas_Jugador.append(imgCarta);
    
        if(puntosJugador > 21){
            alert('Perdiste');
            turnoPC(puntosJugador);
            btnPedir.disabled = true;
            btnDetenerse.disable = true;
        }else if(puntosJugador ===21){
            btnPedir.disabled = true;
            btnDetenerse.disable = true;
            alert('Sacaste 21!');
            turnoPC(puntosJugador);
        }
    
    
    })
    
    btnDetenerse.addEventListener('click', () =>{
        btnPedir.disabled = true;
        btnDetenerse.disabled = true;
        turnoPC(puntosJugador);
    })
}) ();