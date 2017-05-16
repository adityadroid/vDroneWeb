app.controller('scanController', function($scope, $http, $mdToast) {
    var vm = this;


    vm.user = {
        firstname: "",
        lastname: "",
        village: "",
        address: "",
        contact_no: "",
        taluka: "",
        farm_size: "",
        season: ""

    };


    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    $scope.toastPosition = angular.extend({}, last);

    $scope.getToastPosition = function() {
        sanitizePosition();

        return Object.keys($scope.toastPosition)
            .filter(function(pos) {
                return $scope.toastPosition[pos];
            })
            .join(' ');
    };

    function sanitizePosition() {
        var current = $scope.toastPosition;

        if (current.bottom && last.top) current.top = false;
        if (current.top && last.bottom) current.bottom = false;
        if (current.right && last.left) current.left = false;
        if (current.left && last.right) current.right = false;

        last = angular.extend({}, current);
    }

    vm.addScanDetails = function() {

        $http({

            url: '/api/scans',

            method: 'POST',

            data:

            {

                "name": vm.user.firstname + " " + vm.user.lastname,

                "address": vm.user.address,

                "village": vm.user.village,
                "taluka": vm.user.taluka,
                "farm_size": vm.user.farm_size,

                "contact_no": vm.user.contact_no

            }

        }).then(function successCallback(httpResponse) {


                var pinTo = $scope.getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Added!')
                    .position(pinTo)
                    .hideDelay(3000)
                );


                console.log('response:', httpResponse);


            },
            function errorCallback(httpResponse) {

                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Error!')
                    .position(pinTo)
                    .hideDelay(3000)
                );
                console.log('error', httpResponse);
            }
        );





    };

});
