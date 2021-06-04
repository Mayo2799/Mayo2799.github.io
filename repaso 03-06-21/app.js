var contador = 0;
const num = document.querySelector('#num');

const sumar = () => {
    contador = contador + 1;
    num.innerText = contador;
}

const restar = () => {
    contador = contador - 1;
    num.innerText = contador;
}

document.addEventListener('keypress', function(event) {
    realizarOperacion(event.key);
})

const realizarOperacion=(tecla)=>{
    switch (tecla) {
        case '+':
            sumar();
            break;
        case '-':;
            restar();
            break;
        default:
            break;
    }
}