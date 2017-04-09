var app = angular.module('vDrone',['ngMaterial','ngAnimate','ngAria']);
app.controller('loginController',function( $scope ) {
    $scope.user = {
      name : "Naomi Black",
      password: ""
    }
  });
