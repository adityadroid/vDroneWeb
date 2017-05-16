app.controller('dashboardController', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {

    var vm = this;


    vm.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    vm.menu = [{
            link: '',
            title: 'Scan Details',
            icon: 'dashboard'
        },
        {
            link: '',
            title: 'Pilot Map',
            icon: 'group'
        },
        {
            link: '',
            title: 'Dispatch Scan',
            icon: 'message'
        }
    ];
    // $scope.admin = [
    //   // {
    //   //   link : '',
    //   //   title: 'Trash',
    //   //   icon: 'delete'
    //   // },
    //   // {
    //   //   link : 'showListBottomSheet($event)',
    //   //   title: 'Settings',
    //   //   icon: 'settings'
    //   // }
    // ];
    vm.activity = [{
            what: 'Brunch this weekend?',
            who: 'Ali Conners',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            what: 'Summer BBQ',
            who: 'to Alex, Scott, Jennifer',
            when: '3:08PM',
            notes: "Wish I could come out but I'm out of town this weekend"
        },
        {
            what: 'Oui Oui',
            who: 'Sandra Adams',
            when: '3:08PM',
            notes: "Do you have Paris recommendations? Have you ever been?"
        },
        {
            what: 'Birthday Gift',
            who: 'Trevor Hansen',
            when: '3:08PM',
            notes: "Have any ideas of what we should get Heidi for her birthday?"
        },
        {
            what: 'Recipe to try',
            who: 'Brian Holt',
            when: '3:08PM',
            notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
        },
    ];
    vm.alert = '';
    vm.showListBottomSheet = function($event) {
        vm.alert = '';
        $mdBottomSheet.show({
            template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            vm.alert = clickedItem.name + ' clicked!';
        });
    };

    vm.showAdd = function(ev) {
        $mdDialog.show({
                controller: DialogController,
                template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
                targetEvent: ev,
            })
            .then(function(answer) {
                vm.alert = 'You said the information was "' + answer + '".';
            }, function() {
                vm.alert = 'You cancelled the dialog.';
            });
    };

    vm.controllerObj = {
        scan: true,
        map: false,
        dispatch: false
    };



    vm.controllerID = 0;

    vm.clickMenuItem = function(index) {
        console.log("Clicked", index);


        vm.controllerID = index;
        console.log("controllerObject:", vm.controllerID);
    };




}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    var vm = this;
    $scope.items = [{
            name: 'Share',
            icon: 'share'
        },
        {
            name: 'Upload',
            icon: 'upload'
        },
        {
            name: 'Copy',
            icon: 'copy'
        },
        {
            name: 'Print this page',
            icon: 'print'
        },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
};
