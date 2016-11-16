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
        
     }])
    // zidingti
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
 //   .directive('repeatFinish',function(){
	//     return {
	//         link: function(scope,element,attr){
	//             console.log(scope.$index)
	//             if(scope.$last == true){
	//                 console.log('ng-repeat执行完毕')
	//                 scope.$eval( attr.repeatFinish )
	//             }
	//         }
	//     }
	// })
	// controller对应的函数处理函数
	// $scrope.repeatFinish=function(){

	// }