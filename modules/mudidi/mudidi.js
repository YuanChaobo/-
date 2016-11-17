angular.module('mudidi',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('mudidi',{
           url:'/mudidi',
           templateUrl:'./modules/mudidi/mudidi.html',
           controller:'MudidiCtrl',
           css:'./modules/mudidi/mudidi.css'
        })
    })
    .controller('MudidiCtrl',['$scope',function($scope){
          $(".mudidi #main>.left>ul").on("click","li",function(){
          		$(this).addClass("change_color").find("span").addClass("display").end().siblings("li").removeClass("change_color").find("span").removeClass("display");
          });
          $scope.clickMe = function(){
          	location.href = "#/cityList"
          }
     }])