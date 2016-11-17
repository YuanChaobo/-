angular.module('jingdianmenpiao',['me-lazyload'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('jingdianmenpiao',{
		url:'/jingdianmenpiao',
		templateUrl:'./modules/jingdianmenpiao/jingdianmenpiao.html',
		css:'./modules/jingdianmenpiao/jingdianmenpiao.css',
		controller:'jingdianmenpiaoCtrl'
	})
})
.controller('jingdianmenpiaoCtrl',['$scope','$http',function($scope,$http){
	$http.get('./JSON/jingdianmenpiao.json').success(function(data){
		$scope.arr1 = data.datas[0].infos
	}),
	$http.get('./JSON/jingdianmenpiaoul.json').success(function(data){
		$scope.arr3 = data.datas[0].infos
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