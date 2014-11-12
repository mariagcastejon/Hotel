$.getJSON("json.json", function(data){

 $.each(data.valoraciones, function( valoracion ) {
 	var result = "<div class='caja'>";
 	$.each(data.valoraciones[valoracion], function( key, val ) {
 			result +="<p class='" + key + "'>" + val + "</p>";          
  	});
  	result += "</div>";
  	$('.list1').append(result);
 });
});
