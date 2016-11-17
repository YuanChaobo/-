angular.module('qianzheng',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('qianzheng',{
           url:'/qianzheng',
           templateUrl:'./modules/qianzheng/qianzheng.html',
           controller:'QianzhengCtrl',
           css:'./modules/qianzheng/qianzheng.css'
        })
    })
    .controller('QianzhengCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/qianzhenginfo.json').success(function(data){
              $scope.arr = data.datas[3].infos;
              $scope.arr2 = data.datas[5].infos;
          })
     }])