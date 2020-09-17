

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.295091, lng: 174.788372},
          zoom: 14,
          styles: [
{
  "featureType": "all",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "saturation": 36
      },
      {
          "color": "#000000"
      },
      {
          "lightness": 40
      }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "color": "#000000"
      },
      {
          "lightness": 16
      }
  ]
},
{
  "featureType": "all",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 20
      }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 17
      },
      {
          "weight": 1.2
      }
  ]
},
{
  "featureType": "administrative.country",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#e5c163"
      }
  ]
},
{
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#70d9f8"
      }
  ]
},
{
  "featureType": "administrative.neighborhood",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#72e4fa"
      }
  ]
},
{
  "featureType": "landscape",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 20
      }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 21
      },
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "poi.business",
  "elementType": "geometry",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#e563e4"
      },
      {
          "lightness": "0"
      }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#ffffff"
      }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "color": "#ff87ec"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 18
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#52344b"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#ffffff"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.stroke",
  "stylers": [
      {
          "color": "#2c2c2c"
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 16
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#344a4c"
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
      {
          "color": "#999999"
      }
  ]
},
{
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 19
      }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#000000"
      },
      {
          "lightness": 17
      }
  ]
}
]
  });



  var icons = {
          qrcode: {
            icon: 'img/QRICON.png'
          },

        };

    var features = [
             {
               placeName: "90AbleSmithst1",
               position: new google.maps.LatLng(-41.29573, 174.77268),
               type: "qrcode",
               contentString: '<div id="content">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<h1 id="firstHeading" class="firstHeading"> <a href="https://www.thoughtsandfears.com/" target="blank">https://www.thoughtsandfears.com/</a></h1>'+
                   '<div id="bodyContent">'+
                   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                   'sandstone rock formation in the southern part of the '+
                   'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                   'south west of the nearest large town, Alice Springs; 450&#160;km '+
                   '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                   'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                   'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                   'Aboriginal people of the area. It has many springs, waterholes, '+
                   'rock caves and ancient paintings. Uluru is listed as a World '+
                   'Heritage Site.</p>'+
                   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                   'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                   '(last visited June 22, 2009).</p>'+
                   '</div>'+
                   '</div>'
             },
             {
              placeName: "225Victoriast1",
               position: new google.maps.LatLng(-41.29501, 174.77247),
               type: "qrcode",
               contentString: 'fdg'
             },
             {
              placeName: "67Clevelandst1",
               position: new google.maps.LatLng(-41.30538, 174.76342),
               type: "qrcode",
               contentString: 'fgarfjshdklderadg'
             },
             ];

             var infowindow = new google.maps.InfoWindow();
             var marker, i;
             // Create markers.
   for (i = 0; i < features.length; i++) {
     marker = new google.maps.Marker({
       position: features[i].position,
       map: map,
       icon: icons[features[i].type].icon
     });

     google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
         infowindow.setContent(features[i].contentString);
         infowindow.open(map, marker);
       }
     })(marker, i));
   };

}
