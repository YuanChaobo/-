angular.module('gengduo',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('gengduo',{
           url:'/gengduo',
           templateUrl:'./modules/gengduo/gengduo.html',
           controller:'GengduoCtrl',
           css:'./modules/gengduo/gengduo.css'
        })
    })
    .controller('GengduoCtrl',['$scope',function($scope){
          
     }])