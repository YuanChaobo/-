angular.module('mudidi',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('mudidi',{
           url:'/mudidi',
           templateUrl:'./modules/mudidi/mudidi.html',
           controller:'MudidiCtrl',
           css:'./modules/mudidi/mudidi.css'
        })
    })
    .controller('MudidiCtrl',['$scope',function($scope){
          
     }])