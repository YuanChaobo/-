angular.module('chujingyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('chujingyou',{
           url:'/chujingyou',
           templateUrl:'./modules/chujingyou/chujinyou.html',
           controller:'chujingyouCtrl',
           css:'./modules/chujingyou/chujinyou.css'
        })
    })
    .controller('chujingyouCtrl',['$scope',function($scope){
          
     }])