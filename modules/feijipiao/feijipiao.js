angular.module('feijipiao',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('feijipiao',{
		url:'/feijipiao',
		templateUrl:'./modules/feijipiao/feijipiao.html',
		css:'./modules/feijipiao/feijipiao.css',
		controller:'feijipiaoCtrl'
	})
})
.controller('feijipiaoCtrl',['$scope',function(){

}])