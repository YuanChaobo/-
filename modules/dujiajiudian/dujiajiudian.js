angular.module('dujiajiudian',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('dujiajiudian',{
           url:'/dujiajiudian',
           templateUrl:'./modules/dujiajiudian/dujiajiudian.html',
           controller:'dujiajiudianCtrl',
           css:'./modules/dujiajiudian/dujiajiudian.css'
        })
    })
    .controller('dujiajiudianCtrl',['$scope',function($scope){
          
     }])