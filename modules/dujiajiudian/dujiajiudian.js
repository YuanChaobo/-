
angular.module('dujiajiudian',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('dujiajiudian',{
           url:'/dujiajiudian',
           templateUrl:'./modules/dujiajiudian/dujiajiudian.html',
           controller:'dujiajiudianCtrl',
           css:'./modules/dujiajiudian/dujiajiudian.css'
        })
    })

    .controller('dujiajiudianCtrl',['$scope','$http',function($scope,$http){
         $scope.getback=function(){
            history.back();
          }
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr = data.datas[5].infos
          }),
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr1 = data.datas[4].infos
          }),
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr3 = data.datas[3].infos
          }),
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr2 = data.datas[2].infos
          }),
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr4 = data.datas[1].infos
          }),
          $http.get('./JSON/dujiajiudian.json').success(function(data){
            $scope.arr5 = data.datas[0].infos
          })
    //实现回到顶部的功能
     $('.dujiajiudian #topc').on('click',function(){
      $('body').animate({scrollTop:0},200);
       return false
     });
    //实现影藏显示的功能
    $(window).scroll(function(){
    var obj = $('.dujiajiudian #topc');
      if(obj.offset().top>600){
        obj.show();
      }else{
        obj.hide();
      }
    })
}])
