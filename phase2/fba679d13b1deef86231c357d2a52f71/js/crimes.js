

function crimenes(map){

		$.ajax({
	    url: "https://data.cityofchicago.org/resource/6zsd-86xi.json",
	    type: "GET",
	    data: {
	      "$limit" : 5000,
	      "$$app_token" : "1jumf4djvTZZqT8lU1oqHesP1"
	    }
	}).done(function(data) {
	  var map_mark = new Array();
	  var mark;
	  var id_act;
	  console.log("Retrieved " + data.length + " records from the dataset!");
	  //console.log(data);

	  for(var i=0;i<data.length;i++){

	  	if(data[i].latitude!=undefined && data[i].longitude!=undefined && data[i].year > 2010){		//console.log("latitude ="+data[i].latitude+" longitude ="+data[i].longitude);
		
			marker = new google.maps.Marker({
				                position: new google.maps.LatLng(data[i].latitude,data[i].longitude),
				                map: map,
				                id:data[i].id,
				                //se copia el url de la imagen que se desea utilizar                           
				                icon: 'imagenes/icon4.png',
				                optimized:false,
				                customInfo: data[i].description
				             });
			
			marker.setMap(map);
			}
		}
	})


}	