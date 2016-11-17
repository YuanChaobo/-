angular.module('pinzhiyiri',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('pinzhiyiri',{
           url:'/pinzhiyiri',
           templateUrl:'./modules/pinzhiyiri/pinzhiyiri.html',
           controller:'PinzhiyiriCtrl',
           css:'./modules/pinzhiyiri/pinzhiyiri.css'
        })
    })
    .controller('PinzhiyiriCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/remai2.json').success(function(data){
              $scope.arr = data.datas;
          });

         // 点击返回上一页事件
          $(".pzyr_box header").on("click","span",function(){
              history.back();
          });
     }])