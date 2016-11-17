angular.module('zhoubian',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('zhoubian',{
           url:'/zhoubian',
           templateUrl:'./modules/zhoubian/zhoubian.html',
           controller:'ZhoubianCtrl',
           css:'./modules/zhoubian/zhoubian.css'
        })
    })
    .controller('ZhoubianCtrl',['$scope',function($scope){
          
     }])