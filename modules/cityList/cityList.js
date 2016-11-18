
var app=angular.module("cityList",[]);
	app.config(function($stateProvider){
		$stateProvider.state('cityList',{
			url:'/cityList',
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
	}])