angular.module('zhutiyou',[])
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('zhutiyou',{
			url: '/zhutiyou',
			templateUrl: './modules/zhutiyou/zhutiyou.html',
			controller: 'ZhutiCtrl',
			css: './modules/zhutiyou/zhutiyou.css'
		})
	})
	.controller('ZhutiCtrl',['$scope',function($scope){

	}])