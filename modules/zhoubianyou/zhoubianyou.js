angular.module('zhoubianyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('zhoubianyou',{
           url:'/zhoubianyou',
           templateUrl:'./modules/zhoubianyou/zhoubianyou.html',
           controller:'zhoubianyouCtrl',
           css:'./modules/zhoubianyou/zhoubianyou.css'
        })
    })
    .controller('zhoubianyouCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/zhoubianyou.json').success(function(data){
            $scope.arr = data.data.routeList
          })
          $scope.getback=function(){
            history.back();
          }
     }])