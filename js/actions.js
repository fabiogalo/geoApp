// actions.js
function dibujarMapa(lat, lon) {
	//Posición del mapa
	var latlng = new google.maps.LatLng(lat, lon);
	var myOptions = {
		zoom: 12,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	//Marcador
	var marker = new google.maps.Marker({
		position: latlng, 
		map: map, 
		title:"Mi posición"
	});
}

$(function(){
	document.addEventListener("deviceready", function(){
		navigator.geolocation.getCurrentPosition(function(position){
			dibujarMapa(position.coords.latitude, position.coords.longitude);
		}, function(error) {
		alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
		});
	},false);
});