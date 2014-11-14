
//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
setInterval('avanzaSlide1()',5000);

//array con las clases para las diferentes imagenes
var arrayImagenes1 = new Array(".imge1",".imge2",".imge3",".imge4",".imge5");

//variable que nos permitirá saber qué imagen se está mostrando
var contador1 = 0;

//hace un efecto fadeIn para mostrar una imagen
function mostrar1(imge){
    $(imge).ready(function(){
         $(arrayImagenes1[contador1]).fadeIn(1500);
    });
}

//hace un efecto fadeOut para ocultar una imagen
function ocultar1(imge){
    $(imge).ready(function(){
         $(arrayImagenes1[contador1]).fadeOut(1500);
    });
}

//función principal
function avanzaSlide1(){
       //se oculta la imagen actual
    ocultar1(arrayImagenes1[contador1]);
       //aumentamos el contador en una unidad
    contador1 = (contador1 + 1) % 5;
       //mostramos la nueva imagen
    mostrar1(arrayImagenes1[contador1]);
}



/*------------------aqui empieza checkin-------------*/
var saveCheckIn=document.getElementById("saveCheckin")

    saveCheckIn.value = window.localStorage.getItem("checkin");

var saveCheckOut=document.getElementById("saveCheckOut")

    saveCheckOut.value = window.localStorage.getItem("checkout");


/*------------------aqui acaba checkin-------------*/