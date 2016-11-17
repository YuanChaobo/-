angular.module('chujingyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
          .state('chujingyou',{
             url:'/chujingyou',
             templateUrl:'./modules/chujingyou/chujinyou.html',
             controller:'chujingyouCtrl',
             css:'./modules/chujingyou/chujinyou.css'
          })
          .state("chujingyou.mode1",{
            url:'/medo1',
            templateUrl:"./modules/chujingyou/medo1.html",
             css:'./modules/chujingyou/chujinyou.css'
          })
           .state("chujingyou.mode2",{
            url:'/medo2',
            templateUrl:"./modules/chujingyou/medo2.html",
             css:'./modules/chujingyou/chujinyou.css'
          })
    })
    .controller('chujingyouCtrl',['$scope','$http',function($scope,$http){
          $scope.getback=function(){
            history.back();
          }
          $http.get('./JSON/guoneiyou.json').success(function(data){
            $scope.arr = data.datas;
          });
          $(".chujinyou #myTop .right .img2").on("click",function(){
              location.href = "#/home";
          });
     }])