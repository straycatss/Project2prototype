

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.295091, lng: 174.788372},
          zoom: 14,
          mapTypeControl: false,
          streetViewControl: false,
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
                   '<div id="imgLeft">'+
                   '<img src="img/qr1.JPG"></img>'+
                   '</div> <table>' +
                   '<tr> <td valign="top"> <h1 id="firstHeading" class="firstHeading"> <a href="https://www.thoughtsandfears.com/" target="blank">https://www.thoughtsandfears.com/</a></h1></td> </tr>'+
                   '<tr id="bodyInfo"> <td><div id="bodyContent">'+
                   '<b>Address:</b> 90 Able Smith st<br>' +
                   '<b>Location:</b> Power meter cover on side of the road<br>' +
                   '<b>Type:</b> Sticker<br>' +
                   '<b>NSFW?:</b> No<br>' +
                   '</td> </tr>'+
                   '<tr id="attrib"> <td valign="bottom">This QR code was archived on 19/09/2020 </td> </tr> </table>'+
                   '</div>'+
                   '</div>'
             },
             {
              placeName: "225Victoriast1",
               position: new google.maps.LatLng(-41.29501, 174.77247),
               type: "qrcode",
               contentString: '<div id="content">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<div id="imgLeft">'+
                   '<img src="img/qr7.JPG"></img>'+
                   '</div> <table>' +
                   '<tr> <td valign="top"> <h1 id="firstHeading" class="firstHeading"> <a href="https://www.defencecareers.mil.nz/defence-careers/how-do-i-join/scholarships/army-scholarships?utm_source=Street%20Furniture&utm_medium=QR%20Code&utm_campaign=Army%20Scholarships" target="blank">https://www.defencecareers.mil.nz/defence-careers/</a></h1></td> </tr>'+
                   '<tr id="bodyInfo"> <td><div id="bodyContent">'+
                   '<b>Address:</b> 225 Victoria st<br>' +
                   '<b>Location:</b> Advertising display at bus stop<br>' +
                   '<b>Type:</b> Poster<br>' +
                   '<b>NSFW?:</b> No<br>' +
                   '</td> </tr>'+
                   '<tr id="attrib"> <td valign="bottom">This QR code was archived on 19/09/2020 </td> </tr> </table>'+
                   '</div>'+
                   '</div>'
             },
             {
              placeName: "67Clevelandst1",
               position: new google.maps.LatLng(-41.30538, 174.76342),
               type: "qrcode",
               contentString: '<div id="content">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<div id="imgLeft">'+
                   '<img src="img/QRbrooklyn.jpg"></img>'+
                   '</div> <table>' +
                   '<tr> <td valign="top"> <h1 id="firstHeading" class="firstHeading"> <a href="www.yabba.co.nz/qr/?i=payphones" target="blank">www.yabba.co.nz/qr/?i=payphones</a></h1></td> </tr>'+
                   '<tr id="bodyInfo"> <td><div id="bodyContent">'+
                   '<b>Address:</b> 67 Cleveland st<br>' +
                   '<b>Location:</b> Inside phone box<br>' +
                   '<b>Type:</b> Poster<br>' +
                   '<b>NSFW?:</b> No<br>' +
                   '</td> </tr>'+
                   '<tr id="attrib"> <td valign="bottom">This QR code was archived on 19/09/2020 </td> </tr> </table>'+
                   '</div>'+
                   '</div>'
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
