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

}
