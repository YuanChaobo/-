angular.module('jingwaiWiFi',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('jingwaiWiFi',{
           url:'/jingwaiWiFi',
           templateUrl:'./modules/jingwaiWiFi/jingwaiWiFi.html',
           controller:'jingwaiWiFiCtrl',
           css:'./modules/jingwaiWiFi/jingwaiWiFi.css'
        })
    })
    .controller('jingwaiWiFiCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/jingwaiWiFi1.json').success(function(data){
          		$scope.arr = data.datas[0].infos;
          });
          $(".jwwf_box .info>.top a").on("click",function(){
          	$(this).addClass("demo").siblings("a").removeClass("demo");
          	$http.get('./JSON/jingwaiWiFi'+(parseInt($(this).index())+1)+'.json').success(function(data){
          		$scope.arr = data.datas[0].infos;
          });
          });
          $(".jwwf_box header span").on("click",function(){
          		history.back();
          });
     }])