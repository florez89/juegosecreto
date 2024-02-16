//Esto va ligado a la fórmula de generar número secreto
//let numeroSecreto = generarNumeroSecreto(); la bloqueo para dejarlo de la siguiente manera, ya que la formula condiciones iniciales
// le va dar el valor correcto
let numeroSecreto = 0;
//Es la cajita donde va iniciar el nro de intentos para acertar
let intentos = 0;
// Array que me genera el nro sorteado, declarar la lista ¿Que es?
let listaNumerosSorteados = []
//Número máximo del juego
let numeroMaximo = 10
//Almacena los dato del nro secreto en la consola
console.log(typeof(numeroGenerado));
console.log(listaNumerosSorteados);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Math.floor es para que redonde; Math random toma un número del 0 al 1 aleatorio, por eso se multiplica por 10 +1
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //Si ya sorteamos todos lo números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {

        // verifica Si el número generado está incluido en la lista para que no se repita en el juego
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
 }

//Verica el valor ingresado por el usuario con el número aleatorio generado por el sistema
//el document.getelementbyid me toma el valor ingresado en el input del html (cajita donde se coloca el valor numérico) 
//que en html el imput se coloco el id Valor de usurio
//finaliza en .value, porque hay varios elementos que puede tomar de ese atributo, nosotros lo que necesitamos es el valor
//el input (que es donde colocamos el valor en la caja html) es del tipo string y lo estamos comparando con un tipo numero que es el
//nro aleatorio, para forzar que el 'valorDeUsuario' sea tbn tipo nro, le colocamos parseInt antes de document.getElmentById y
//comparamos si es cierto con consoles.log, los console.log, se usan para almacenar los valores en la consola del navegador
function verificarIntentoDeUsuario () {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);

//Aqui creo la fórmula para indicar si el mensaje cuando acierta o no el usuario
    if (numeroDeUsuario === numeroSecreto) {
        //Usamos el operador Ternario ` para colocarle variables al comentario se usa $ para ingresar esa variable  ? es if y : else
        asignarTextoElemento('p',`Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //habilita el botón nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        // el intentos ++ suma la cantidad de veces que colocamos el úmero para acertar
        intentos++;
        //Aqui estoy llamando la función limpiar caja
        limpiarCaja();
    }
    return;
}

//Esta función me limpia la caja, luego de darle al boton intentar
function limpiarCaja () {
    document.querySelector('#valorDeUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego el número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);      
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

