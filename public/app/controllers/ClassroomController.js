(function () {

    angular.module('app')
        .controller('ClassroomController', ['dataService', 'notifier' , '$stateParams', /*'$routeParams',*/ 'classroom', ClassroomController]);

    function ClassroomController(dataService, notifier, $stateParams, classroom /*, $routeParams*/) {

        var vm = this;

        vm.message = $stateParams.classroomMessage;
        vm.month = $stateParams.month;

        vm.currentClassroom = classroom;

        // dataService.getClassroom($stateParams.id)
        //     .then(function (classroom) {
        //         vm.currentClassroom = classroom;

                if ($stateParams.month) {
                    if (classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($stateParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }

            // })
            // .catch(showError);

        // dataService.getClassroom($stateParams.id)
        //     .then(function(classroom){
        //         vm.currentClassroom = classroom;
        //     })
        //     .catch(showError);
        // function showError(message) {
        //     notifier.error(message);
        // }


        // vm.month = $routeParams.month;

        // dataService.getClassroom($routeParams.id)
        //     .then(function (classroom) {
        //         vm.currentClassroom = classroom;
        //
        //         if ($routeParams.month) {
        //             if (classroom.activities.length > 0) {
        //                 vm.timePeriod = dataService.getMonthName($routeParams.month);
        //             }
        //             else {
        //                 vm.timePeriod = 'No activities this month';
        //             }
        //         }
        //         else {
        //             vm.timePeriod = 'All activities';
        //         }
        //
        //     })
        //     .catch(showError);
        //
        // dataService.getClassroom($routeParams.id)
        //     .then(function(classroom){
        //         vm.currentClassroom = classroom;
        //     })
        //     .catch(showError);
        // function showError(message) {
        //     notifier.error(message);
        // }

    }

}());