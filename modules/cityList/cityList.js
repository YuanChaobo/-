var app=angular.module("cityList",[]);
	app.config(function($stateProvider){
		$stateProvider.state('CityList',{
			url:'/CityList',
			templateUrl:'./modules/cityList/cityList.html',
			controller:'IndexCity',
			css:"./modules/cityList/cityList.css"
		})
	})
	app.controller("IndexCity",['$scope','$http',function($scope,$http){
		$http.get('./JSON/getcitycody.json').success(function(mod){
			$scope.arr=mod.result.citylist;
		})
		$scope.getBack=function(){
			history.back();
		}
		// $scope.openClose=function(){
		// 	// console.log(angular.element(".ctlink"))
		// 	console.log($(this).find("ul").show())
		// 	$(this).find("ul").show()
		// }
	}])
	$(".ctlink").on("click",function(){
		$(this).find("ul").show();
		console.log("a");
	})