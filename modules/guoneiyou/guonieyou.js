angular.module('guonieyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('guoneiyou',{
           url:'/guoneiyou',
           templateUrl:'./modules/guoneiyou/guonieyou.html',
           controller:'guoneiyouCtrl',
           css:'./modules/guoneiyou/guonieyou.css'
        })
    })
    .controller('guoneiyouCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/guoneiyou.json.').success(function(data){
            $scope.arr = data.datas
          })
     }])