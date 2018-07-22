function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(42.8650389,74.615090);
  var myCenter1 = new google.maps.LatLng(42.8751528, 74.5951253);
  var myCenter2 = new google.maps.LatLng(42.857631354789124, 74.609687); 
  var mapOptions = {center: myCenter, zoom: 13};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter1,
    /*icon: "pinkball.png"*/
  });
  var marker2 = new google.maps.Marker({
    position: myCenter2,
    /*icon: "pinkball.png"*/
  });
  marker.setMap(map);
  marker2.setMap(map);
}