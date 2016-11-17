angular.module('zhoubianyou',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('zhoubianyou',{
           url:'/zhoubianyou',
           templateUrl:'./modules/zhoubianyou/zhoubianyou.html',
           controller:'zhoubianyouCtrl',
           css:'./modules/zhoubianyou/zhoubianyou.css'
        })
    })
    .controller('zhoubianyouCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/zhoubianyou.json').success(function(data){
            $scope.arr = data.data.routeList
            }),
          $http.get('./JSON/zhoubianyouul.json').success(function(data){
            $scope.arr1 = data.datas[1].infos
            }),
          $http.get('./JSON/zhoubianyouul.json').success(function(data){
            $scope.arr2 = data.datas[2].infos
           }),
          $http.get('./JSON/zhoubianyouul.json').success(function(data){
            $scope.arr3 = data.datas[0].infos
          })
      $(function(){     
        //点击切换div事件
        $("#main .li1 p").on("click",function(){
          $(this).addClass("bian");
          $("#main .li2 p").removeClass("bian");
          $("#main .main_22").hide();
          $("#main .main_2").show();
        })
      })
        $("#main .li2 p").on("click",function(){
          $(this).addClass("bian");
          $("#main .li1 p").removeClass("bian");
          $("#main .main_2").hide();
          $("#main .main_22").show();
        })
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