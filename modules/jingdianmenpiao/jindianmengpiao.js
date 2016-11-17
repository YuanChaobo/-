angular.module('jingdianmenpiao',[])
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
	})
}])