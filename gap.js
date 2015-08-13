 L.mapbox.accessToken = 'pk.eyJ1IjoidXJiYW5pbnN0aXR1dGUiLCJhIjoiTEJUbmNDcyJ9.mbuZTy4hI_PWXw3C3UFbDQ';
 var map = L.mapbox.map("map", 'urbaninstitute.iji12b2j', {
         zoomControl: true,
         fadeAnimation: false,
         maxZoom: 10,
         minZoom: 4
     })
     .setView([39.623, -93.120], 5);
 map.attributionControl
     .addAttribution('<a href="http://www.urban.org/">&copy; Urban Institute</a>');

 L.mapbox.tileLayer('urbaninstitute.6v96sml4').addTo(map);
 var gridLayer = L.mapbox.gridLayer('urbaninstitute.6v96sml4').addTo(map);
 var gridControl = L.mapbox.gridControl(gridLayer, {
         follow: true
     })
     .addTo(map);
 //L.mapbox.tileLayer('urbaninstitute.h5b1kc2b').addTo(map);
 map.gridControl.options.follow = true;