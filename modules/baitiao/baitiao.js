 angular.module('xiaolvbaitiao',[])
 	.config(function($stateProvider){
 		$stateProvider.state('xiaolv',{
 						url:'/xiaolv',
 						templateUrl:'./modules/baitiao/baitiao.html',
 						css:'./modules/baitiao/baitiao.css',
 						controller:'IndexBaitiao'
 					})
 	})
 	.controller('IndexBaitiao',['$scope',function($scope){

 	}])