angular.module('youlun',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('youlun',{
		url:'/youlun',
		templateUrl:'modules/youlun/youlun.html',
		css:'modules/youlun/youlun.css',
		controller:'youlunCtrl'
	})
})
.controller('youlunCtrl',['$scope',function(){
	
}])