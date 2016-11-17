angular.module('remai',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('remai',{
           url:'/remai',
           templateUrl:'./modules/remai/remai.html',
           controller:'RemaiCtrl',
           css:'./modules/remai/remai.css'
        })
    })
    .controller('RemaiCtrl',['$scope',function($scope){
          
     }])
