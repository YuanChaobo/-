angular.module("authstr",[])
	.config(function($stateProvider){
		$stateProvider.state("daishenhe",{
			url:'/daishenhe',
			templateUrl:'modules/daishenhe/daishenhe.html',
			css:'modules/daishenhe/daishenhe.css',
			controller:'IndexDaishenhe'
		})
	})
	.controller("IndexDaishenhe",function($scope){

	})