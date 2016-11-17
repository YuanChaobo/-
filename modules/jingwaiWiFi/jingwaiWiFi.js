angular.module('jingwaiWiFi',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('jingwaiWiFi',{
           url:'/jingwaiWiFi',
           templateUrl:'./modules/jingwaiWiFi/jingwaiWiFi.html',
           controller:'jingwaiWiFiCtrl',
           css:'./modules/jingwaiWiFi/jingwaiWiFi.css'
        })
    })
    .controller('jingwaiWiFiCtrl',['$scope',function($scope){
          
     }])