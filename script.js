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
    for (let i =0; i < labels.length; i++){
        labels[i].classList.remove("correct", "incorrect");
    }

    //doy el color a la etiqueta seleccionada
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas 
//añadi el cambio de color de la opcion seleccionada a verde si es correcta y a rojo si es incorrecta
function resultados(){
    cantidad_correctas = 0;
    for(let i=0; i < correctas.length;i++){
        let id="p" + i;
        let labels = document.getElementById(id).children;

        for (let j = 0; j <labels.length; j++){
            labels[j].style.backgroundColor="white";
        }
        //obtenemos la respuesta elegida para la pregunta i
        let respuestaElegida = opcion_elegida[i];
        //buscamos en cada etiqueta para encontrar aquellas con la respuesta elegida
        for (let j = 0; j<labels.length; j++){
            let radio = labels[j].querySelector('input[type="radio"]');
            if (radio && radio.value == respuestaElegida){
                //comparamos la respuesta seleccionada
                if (parseInt(radio.value) === correctas[i]) {
                    // si es correcta la marcamos de verde 
                    labels[j].classList.add("correct");
                    cantidad_correctas++;
                } else {
                    //si es incorrecta la marcamos de rojo
                    labels[j].classList.add("incorrect");             
                }
            }
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
            labels[j].classList.remove("correct", "incorrect");
            //desmarcar el boton de radio
           let radio = labels[j].querySelector('input[type="radio"]');
           if (radio) {
            radio.checked = false;
           }
        }
    }
    //limpiar el resultados mostrado
    document.getElementById("resultados").innerHTML="";
}

