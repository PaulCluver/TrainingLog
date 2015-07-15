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
                    pageTitle : 'Daily Training Log - Add Log Entry',
                    description: 'Add Log Entry'
                }
            })  
            .state('editLogEntry', {
                url: '/editLogEntry',
                templateUrl: 'partials/editLogEntry/editLogEntry.html',   
                controller: 'editLogEntryCtrl',            
                data: {
                    pageTitle : 'Daily Training Log - Edit Log Entry',
                    description: 'Edit Log Entry'
                }
            })  
            .state('viewLogEntries', {
                url: '/viewLogEntries',
                templateUrl: 'partials/viewLogEntries/viewLogEntries.html',   
                controller: 'viewLogEntriesCtrl',            
                data: {
                    pageTitle : 'Daily Training Log - View Log Entries',
                    description: 'View Log Entries'
                }
            })   
    });


    trainingLogApp.service('LogEntriesDataService', function() {
        
        this.logEntries = [{
            date: new Date("01-Jul-2015"),
            exercises: 
            {
                standing: 0.25,
                striking: 0.75,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, elit ut hendrerit pretium, felis magna auctor lacus, in porta nulla tortor ut sapien.'
        },
        {
            date: new Date("02-Jul-2015"),
            exercises: 
            {
                standing: 0.50,
                striking: 1.0,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Quisque aliquet tempus ante ut aliquet. Morbi tempus velit eget ultrices interdum. Proin gravida magna at dolor dictum ullamcorper.'
        },
        {
            date: new Date("03-Jul-2015"),
            exercises: 
            {
                standing: 0.50,
                striking: 1.0,
                turning: 0.50,
                changing: 0.25
            },
            notes: 'Nunc vel lacus dictum, eleifend sapien lobortis, fringilla orci. Nam vulputate sagittis porttitor.'
        },
        {
            date: new Date("04-Jul-2015"),
            exercises: 
            {
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

    trainingLogApp.filter('getTotal', function() {
        return function(standing, striking, turning, changing) {
            //return standing + striking + turning + changing;
            console.log(striking);
            return 'hello world';
        }
    })

}());
