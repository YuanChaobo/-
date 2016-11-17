var app=angular.module("mine",[]);
	app.config(function($stateProvider){
		$stateProvider.state("mine",{
						url:"/mine",
						templateUrl:"modules/mine/mine.html",
						controller:"IndexMine",
						css:"modules/mine/mine.css"
					})
	})
	app.controller("IndexMine",function($scope){

	})