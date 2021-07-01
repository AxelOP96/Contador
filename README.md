Contador
---------------------------------------------------------------------------------------------------------------------------------------------------------
*Funciones*
//Se crea una constante y se le asigna el valor de la clase count que se encuentra en el documento para linkearlo.
const count = document.querySelector(".count");
//Se crea una constante a la cual se le asigna el valor de la clase buttons de un div para linkearlo.
const buttons = document.querySelector(".buttons");
/*Se crea una funcion que utiliza un addEventListener que al hacer click entra en un if al cual darle clic al boton con la clase add suma uno mas y llama a la funcion setColor(); el segundo if llama a la clase reset y pone el contador en cero y llama a la funcion en cero; el tercer if llama a la clase substract y disminuye en una unidad al darle click y llama a la funcion setColor().*/
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
    if (e.target.classList.contains("substract")) {
        count.innerHTML--;
        setColor();
    }
});
/*La funcion setColor dependiendo de si el numero es positivo cambia el color del estilo a amarillo, si es negativo cambia a rojo y si es 0 lo deja en blanco.*/
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "#fff";
    }
}