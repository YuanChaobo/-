angular.module('zijiayou',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('zijiayou',{
           url:'/zijiayou',
           templateUrl:'./modules/zijiayou/zijiayou.html',
           controller:'ZijiaCtrl',
           css:'./modules/zijiayou/zijiayou.css'
        })
    })
    .controller('ZijiaCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/zijiayouinfo1.json').success(function(data){
               $scope.arr = data.datas[0].infos;
          });
          $http.get('./JSON/zijiayoubanner.json').success(function(data){
              $scope.arr2 = data.datas[0].infos;
          });

          // 点击返回上一页事件
          $(".zjy_box header").on("click","span",function(){
              history.back();
          });

          // tab事件
          $("#zjy_info .top").on("click","a",function(){
              $(this).addClass("color").closest("li").siblings("li").children("a").removeClass("color");
              $http.get('./JSON/zijiayouinfo'+($(this).closest("li").index()+1)+'.json').success(function(data){
               $scope.arr = data.datas[0].infos;
          });
          })

     }])
// 图片轮播
.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
              //初始化swiper
              var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay:2000,
            
                // 如果需要分页器
                pagination: '.swiper-pagination'
            })
        }
    }
  }
})