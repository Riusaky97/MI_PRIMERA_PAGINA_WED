//arreglo que contiene las respuestas correctas
let correctas = [1,2,1,2,1];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas = 0;

//funcion que toma el num y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardar la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
    
    //armo el id para seleccionar la seccion correspondiente
    let id="p" + num_pregunta;
    let labels = document.getElementById(id).children;
    
    // restablecer color de fondo
    for (let i =0; i < labels.length; i++){labels[i].style.backgroundColor = "white";
    }

    //doy el color a la etiqueta seleccionada
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas 
function resultados(){
    cantidad_correctas = 0;
    for(let i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultados").innerHTML=cantidad_correctas
}

// funcion para reiniciar el juego 
function reiniciar() {
    //limpiar las respuestas elegidas 
    opcion_elegida = []
    cantidad_correctas = 0;

    //restablecer los colores de los labers
    for (let i = 0; i <correctas.length; i++){
        let id ="p" + i;
        let labels = document.getElementById(id).children;
        for(let j= 0; j< labels.length; j++){
            labels[j].style.backgroundColor="white";
            //desmarcar el boton de radio
            if(labels[j].querySelector('input[type="radio"]')){
                labels[j].querySelector('input[type="radio"]').checked= false;
                }
        }
    }
    //limpiar el resultados mostrado
    document.getElementById("resultados").innerHTML="";
}

