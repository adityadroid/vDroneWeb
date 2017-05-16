


  app.controller('mapController',  function($scope,$http) {
    var vm = this;
    var pilots = [
                  {
                      _id : 'Name',
                      lattitude : 23.200000,
                      longitude : 81.225487
                  },
                  {
                      _id : 'Name',
                      lattitude : 25.200000,
                      longitude : 56.225487
                  },
                  {
                      _id : 'Name',
                      lattitude : 28.200000,
                      longitude : 23.225487
                  },
                  {
                      _id : 'Name',
                      lattitude : 20.200000,
                      longitude : 75.225487
                  },
                  {
                      _id : 'Name',
                      lattitude : 23.200000,
                      longitude : 79.225487
                  }
                  ];

/*
                  $http({

          method: 'GET';,

          url: '/location';

      }).then(function successCallback(response) {

          pilots = response.data;

      }, function errorCallback(response) {

          $scope.location = response.statusText;

      });


*/
              var mapOptions = {
                             zoom: 4,
                             center: new google.maps.LatLng(25,80),
                             mapTypeId: google.maps.MapTypeId.ROADMAP
                         }

                         vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                         vm.markers = [];

                         var infoWindow = new google.maps.InfoWindow();

                         var createMarker = function (info){

                             var marker = new google.maps.Marker({
                                 map: vm.map,
                                 position: new google.maps.LatLng(info.lattitude, info.longitude),
                                 title: info._id
                             });
                             marker.content = '<div class="infoWindowContent"><br />' + info.lattitude + ' E,' + info.longitude +  ' N, </div>';

                             google.maps.event.addListener(marker, 'click', function(){
                                 infoWindow.setContent('<h2>' + marker.title + '</h2>' +
                                   marker.content);
                                 infoWindow.open(vm.map, marker);
                             });

                             vm.markers.push(marker);

                         }

                         for (i = 0; i < pilots.length; i++){
                             createMarker(pilots[i]);
                         }

                         vm.openInfoWindow = function(e, selectedMarker){
                             e.preventDefault();
                             google.maps.event.trigger(selectedMarker, 'click');
                         }

                     });
