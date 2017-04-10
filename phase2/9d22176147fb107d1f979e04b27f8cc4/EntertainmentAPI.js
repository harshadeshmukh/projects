function Parks(){
  var tableHtml = '<div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>ParkClass</th><th>Football</th><th>Latitude</th><th>Longitude</th></tr></thead><tbody>';
  $.ajax({
      url: "https://data.cityofchicago.org/resource/4xwe-2j3y.json",
      type: "GET",
      data: {
        "$limit" : 10,
        "$$app_token" : "mtXTKE9SDmNytCMv1wvlNoe1k"
      }
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
          var point = data[i];
          if(point.location != null){
            var newRow = '<tr><td>'+ point.park_name + '</td><td>' + point.park_class + '</td><td>' + point.football_soccer_combo+ '</td><td>'+point.location.coordinates[1] + '</td><td>' +point.location.coordinates[0] + '</td></tr>';
            tableHtml = tableHtml + newRow ;
            var location = new google.maps.LatLng(point.location.coordinates[1], point.location.coordinates[0]);
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
          }

        };
        tableHtml += '</tbody></div></div>';
        $("#Parks").html(tableHtml);
    });
}
function Pedestrian(){
  var tableHtml = '<div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>Shape area</th><th>Shape len</th></tr></thead><tbody>';
  $.ajax({
      url: "https://data.cityofchicago.org/resource/v6kn-gc9b.json",
      type: "GET",
      data: {
        "$limit" : 10,
        "$$app_token" : "mtXTKE9SDmNytCMv1wvlNoe1k"
      }
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
          var point = data[i];
          console.log(point);
          

        };
        tableHtml += '</tbody></div></div>';
        $("#Pedestrian").html(tableHtml);
    });
}