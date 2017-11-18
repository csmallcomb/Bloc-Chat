(function() {
    function HomeCtrl($scope) {
        $scope.Room = $firebaseArray(ref);
    }

    angular
        .module('blocChat', [])
        .controller('HomeCtrl', ['HomeCtrl', 'Room']);

})();
