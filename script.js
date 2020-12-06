function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(42.316119, 69.588642),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
     var image = {
      url: "logo1.png",
    scaledSize: new google.maps.Size(70,70),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
    };
    var marker = new google.maps.Marker({position: { lat: 42.324927, lng: 69.594754 }, 
    animation:google.maps.Animation.BOUNCE, icon: image});
    marker.setMap(map);

     var image1 = {
      url: "https://www.pinclipart.com/picdir/big/119-1199914_open-university-hat-icon-png-clipart.png",
    scaledSize: new google.maps.Size(30,30),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
    };
    var marker1 = new google.maps.Marker({position: { lat: 42.31611638337114, lng: 69.58904115952525 },
    icon: image1});
    marker1.setMap(map);


    var image2 = {
      url: "https://www.freeiconspng.com/uploads/tree-icon-conservation-icon-6.png",
    scaledSize: new google.maps.Size(30,30),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
    };
    var marker2 = new google.maps.Marker({position: { lat: 42.325274795235586, lng: 69.58640856869069 },
    icon: image2});
    marker2.setMap(map);
}