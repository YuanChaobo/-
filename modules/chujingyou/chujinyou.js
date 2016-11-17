angular.module('chujingyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('chujingyou',{
           url:'/chujingyou',
           templateUrl:'./modules/chujingyou/chujinyou.html',
           controller:'chujingyouCtrl',
           css:'./modules/chujingyou/chujinyou.css'
        })
    })
    .controller('chujingyouCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/guoneiyou.json').success(function(data){
          	$scope.arr = data.datas;
          });
          $(".chujinyou #myTop .left img").on("click",function(){
          		history.back();
          });
          $(".chujinyou #myTop .right .img2").on("click",function(){
          		location.href = "#/home";
          });
     }])