
  app.controller('loginController', function($scope) {
      var vm = this;
      $scope.showLogin = false;
      $scope.user = {
          name: "",
          password: ""
      }

      vm.performLogin = function() {

          $http({

                  url: 'login',
                  method: 'POST',
                  data: {
                      "username": "abc123",

                      "password": "xyz789"

                  }
              })
              .then(function(httpResponse) {

                  console.log('response', httpResponse);

              });

      };


  });
