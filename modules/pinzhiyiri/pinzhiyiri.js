angular.module('pinzhiyiri',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('pinzhiyiri',{
           url:'/pinzhiyiri',
           templateUrl:'./modules/pinzhiyiri/pinzhiyiri.html',
           controller:'PinzhiyiriCtrl',
           css:'./modules/pinzhiyiri/pinzhiyiri.css'
        })
    })
    .controller('PinzhiyiriCtrl',['$scope',function($scope){
          
     }])