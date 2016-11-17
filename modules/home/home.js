angular.module('home',[])
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
          })
          //实现动态显示
	   $(function(){
	  	$(window).on('scroll',function(){
	  		if($('body').scrollTop() >= 1565){
	  			$('.gdjc .piao').addClass('bian');
	  		}
	  		if($('body').scrollTop() < 1555){
	  			$('.gdjc .piao').removeClass('bian');
	  		}
	  	}) 
	  })
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

 