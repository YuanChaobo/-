angular.module('remai',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('remai',{
           url:'/remai',
           templateUrl:'./modules/remai/remai.html',
           controller:'RemaiCtrl',
           css:'./modules/remai/remai.css'
        })
    })
    .controller('RemaiCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/remai0.json').success(function(data){
          	$scope.arr = data.datas;
          });
          $(".temai #nav a").on("click",function(){
          	$(this).addClass("change_color").siblings("a").removeClass("change_color");
          	 $http.get('./JSON/remai'+$(this).index()+'.json').success(function(data){
          	$scope.arr = data.datas;
          });
          });
     }])
