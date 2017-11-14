(function() {
    function HomeCtrl($scope) {
        $scope.Room = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);

})();
