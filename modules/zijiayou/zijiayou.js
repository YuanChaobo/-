angular.module('zijiayou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('zijiayou',{
           url:'/zijiayou',
           templateUrl:'./modules/zijiayou/zijiayou.html',
           controller:'ZijiaCtrl',
           css:'./modules/zijiayou/zijiayou.css'
        })
    })
    .controller('ZijiaCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/zijiayouinfo.json').success(function(data){
               $scope.arr = data.datas[0].infos;
          });
          $http.get('./JSON/zijiayoubanner.json').success(function(data){
              $scope.arr2 = data.datas[0].infos;
          })
     }])