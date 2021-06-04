var contador = 0;
const num = document.querySelector('#num');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');


sumar.addEventListener("click", () =>{
    contador = contador + 1;
    num.innerText = contador;
})

restar.addEventListener("click", () =>{
    contador = contador - 1;
    num.innerText = contador;
})