function showBig(element){
	window.open(element.src, '_blank', 'width=890,height=600,top=50px,left=200px');
}	
function showBig1(element){
	window.open(element.src, '_blank', 'width=700,height=600,top=50px,left=320px');
}	
function showBig2(element){
	window.open(element.src, '_blank', 'width=700,height=600,top=50px,left=320px');
}	

function showlocation(){


var madrid = new google.maps.LatLng(40.4430018,-3.5847271);
var opciones = {
    zoom : 5,
    center: madrid,
 
};
var div = document.getElementById('mapa');
var map = new google.maps.Map(div, opciones);


putMarker(41.3956445,2.2064281);
putMarker(38.925229,1.4831543);
putMarker(40.4430018,-3.5847271);

function putMarker(lat, lon){
	return new google.maps.Marker({
  position: new google.maps.LatLng(lat,lon),
  map: map
});
}
};	

//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
setInterval('avanzaSlide()',5000);

//array con las clases para las diferentes imagenes
var arrayImagenes = new Array(".img1",".img2",".img3");

//variable que nos permitirá saber qué imagen se está mostrando
var contador = 0;

//hace un efecto fadeIn para mostrar una imagen
function mostrar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeIn(1500);        
    });
}

//hace un efecto fadeOut para ocultar una imagen
function ocultar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeOut(1500);        
    });
}

//función principal
function avanzaSlide(){
       //se oculta la imagen actual
    ocultar(arrayImagenes[contador]);
       //aumentamos el contador en una unidad
    contador = (contador + 1) % 3;
       //mostramos la nueva imagen
    mostrar(arrayImagenes[contador]);
}