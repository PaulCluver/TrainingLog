(function() {

    'use strict';

    var trainingLogApp = angular.module('trainingLogApp', ['ui.router', 'mm.foundation']);

    trainingLogApp.constant('VERSION', '0.1');

    trainingLogApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/viewLogEntries');
        $stateProvider
            .state('addLogEntry', {
                url: '/addLogEntry',
                templateUrl: 'partials/addLogEntry/addLogEntry.html',
                controller: 'addLogEntryCtrl',
                data: {
                    pageTitle: 'Daily Training Log - Add Log Entry',
                    description: 'Add Log Entry'
                }
            })
            .state('editLogEntry', {
                url: '/editLogEntry',
                templateUrl: 'partials/editLogEntry/editLogEntry.html',
                controller: 'editLogEntryCtrl',
                data: {
                    pageTitle: 'Daily Training Log - Edit Log Entry',
                    description: 'Edit Log Entry'
                }
            })
            .state('viewLogEntries', {
                url: '/viewLogEntries',
                templateUrl: 'partials/viewLogEntries/viewLogEntries.html',
                controller: 'viewLogEntriesCtrl',
                data: {
                    pageTitle: 'Daily Training Log - View Log Entries',
                    description: 'View Log Entries'
                }
            })
    });


    trainingLogApp.service('LogEntriesDataService', function() {

        this.logEntries = [{
            date: new Date("01-Jul-2015"),
            exercises: {
                standing: 0.25,
                striking: 0.75,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, elit ut hendrerit pretium, felis magna auctor lacus, in porta nulla tortor ut sapien.'
        }, {
            date: new Date("02-Jul-2015"),
            exercises: {
                standing: 0.50,
                striking: 1.0,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Quisque aliquet tempus ante ut aliquet. Morbi tempus velit eget ultrices interdum. Proin gravida magna at dolor dictum ullamcorper.'
        }, {
            date: new Date("03-Jul-2015"),
            exercises: {
                standing: 0.50,
                striking: 1.0,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Nunc vel lacus dictum, eleifend sapien lobortis, fringilla orci. Nam vulputate sagittis porttitor.'
        }, {
            date: new Date("04-Jul-2015"),
            exercises: {
                standing: 0.75,
                striking: 1.5,
                turning: 0.50,
                changing: 0.50
            },
            notes: 'Vestibulum porta est vitae porttitor maximus. Quisque aliquet tempus ante ut aliquet. Morbi tempus velit eget ultrices interdum.'
        }];

    });

    trainingLogApp.service('LogEntriesService', function(LogEntriesDataService) {

        this.getAllLogEntries = function() {
            return LogEntriesDataService.logEntries;
        };

    });

    trainingLogApp.controller('appCtrl', ['$scope', function($scope) {
        
    }]);

    trainingLogApp.controller('addLogEntryCtrl', ['$scope', function($scope) {

        $scope.ExerciseTypeItems = [
           {ID: '1', Title: 'Standing'},
           {ID: '2', Title: 'Striking'},
           {ID: '3', Title: 'Turning'},
           {ID: '4', Title: 'Changing'}
        ];

        $scope.ExerciseTimeItems = [
           {ID: '5', Title: '05'},
           {ID: '10', Title: '10'},
           {ID: '15', Title: '15'},
           {ID: '20', Title: '20'},
           {ID: '25', Title: '25'},
           {ID: '30', Title: '30'},
           {ID: '35', Title: '35'},
           {ID: '40', Title: '40'},
           {ID: '45', Title: '45'},
           {ID: '50', Title: '50'},
           {ID: '55', Title: '55'},
           {ID: '60', Title: '60'},
           {ID: '65', Title: '65'},
           {ID: '70', Title: '70'},
           {ID: '75', Title: '75'},
           {ID: '80', Title: '80'},
           {ID: '85', Title: '85'},
           {ID: '90', Title: '90'},
           {ID: '95', Title: '95'},
           {ID: '100', Title: '100'}
        ];

        $scope.newLogEntryDetails = {};

        $scope.add = function(log) {
            $scope.newLogEntryDetails = angular.copy(log);
        };

        $scope.reset = function(form) {

            if (form) {
                console.log(form);
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.newLogEntryDetails);
        };

        $scope.reset();
    }]);

    trainingLogApp.controller('editLogEntryCtrl', ['$scope', function($scope) {

    }]);

    trainingLogApp.controller('viewLogEntriesCtrl', ['$scope', 'LogEntriesService', function($scope, LogEntriesService) {
        $scope.logEntries = LogEntriesService.getAllLogEntries();
    }]);

    trainingLogApp.directive('title', ['$rootScope', '$timeout',

        function($rootScope, $timeout, QuotesService) {
            return {

                link: function() {

                    var listener = function(event, toState) {

                        $timeout(function() {
                            $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Daily Training Log';
                            $rootScope.description = (toState.data && toState.data.description) ? toState.data.description : 'A Daily Training Log';
                        });
                    };

                    $rootScope.$on('$stateChangeSuccess', listener);
                }
            };
        }

    ]);
}());
