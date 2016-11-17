
angular.module('home',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('home',{
           url:'/home',
           templateUrl:'./modules/home/home.html',
           controller:'HomeCtrl',
           css:'./modules/home/home.css'
        })
    })
    .controller('HomeCtrl',['$scope','$http',function($scope,$http){
          $http.get("./JSON/home.json").success(function(data){
          	$scope.arr1 = data.datas[0].infos;
          })
          $http.get("./JSON/banner.json").success(function(data){
          	$scope.arr2 = data.datas[0].infos;
          });
          //回到顶部效果
          $('.mod_home .topc').click(function(){
            $("body").animate({scrollTop:0},200);
           		 return false;
          });
          $(window).scroll(function(){
            var obj=$('.mod_home .topc');
            if(obj.offset().top>600){
                obj.show();
            }else{
                obj.hide();
            }
          });
   
      // 小轮播
        var y = 0,
      time = setInterval(autoPlay,3000);
        
          function autoPlay(){
              if(y>=100){
                  y=0;
              }else{
                  y+=50;
              }
              $(".mod_home .bo").scrollTop(y);
          }
     }])
      
     

    //自定义指令
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