angular.module('guonieyou',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('guoneiyou',{
           url:'/guoneiyou',
           templateUrl:'./modules/guoneiyou/guonieyou.html',
           controller:'guoneiyouCtrl',
           css:'./modules/guoneiyou/guonieyou.css'
        })
        .state('guoneiyou.li1_1',{
          url:'/li1_1',
          templateUrl:'./modules/guoneiyou/guonieyou1.html',
          css:'./modules/guoneiyou/guonieyou.css'
        })
        .state('guoneiyou.li1_2',{
          url:'/li1_2',
          templateUrl:'./modules/guoneiyou/guonieyou2.html',
          css:'./modules/guoneiyou/guonieyou.css'
        })
        .state('guoneiyou.li1_3',{
          url:'/li1_3',
          templateUrl:'./modules/guoneiyou/guoneiyou3.html',
          css:'./modules/guoneiyou/guonieyou.css'
        })
         $urlRouterProvider.otherwise('/modules/guoneiyou/guoneiyou1.html');
    })
    .controller('guoneiyouCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/guoneiyou.json.').success(function(data){
            $scope.arr = data.datas
          }),
          $http.get('./JSON/guoneiyou_ziyouxing.json').success(function(data){
            $scope.arr1 = data.datas
          }),
          $http.get('./JSON/guoneiyou_dangdiyou.json').success(function(data){
            $scope.arr2 = data.datas
          }),
          $http.get('./JSON/guoneiyou_banner.json').success(function(data){
            $scope.arr3 = data.datas[0].infos
          })
$(function(){
  //点击切换效果
  $('.main4 .ul1 li').on('click',function(){
        $(this).addClass("cilck_style").siblings("li").removeClass("cilck_style");
        $('.main4 .ul2').hide();
  });
})
          //回到顶部效果
          $('.guonieyou #topc').click(function(){
            $("body").animate({scrollTop:0},200);
               return false;
          });
          $(window).scroll(function(){
            var obj=$('.guonieyou #topc');
            if(obj.offset().top>600){
                obj.show();
            }else{
                obj.hide();
            }
          });
     }])
     //图片轮播
    .directive('repeatFinisf',function(){
      return{
        link:function(scope,element,attr){
          if(scope.$last == true){
            //初始化swiper
            var mySwiper = new Swiper ('.swiper-container',{
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
