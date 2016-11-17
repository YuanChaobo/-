var app = angular.module('myApp',['ui.router','angularCSS',
'remai',
'home',
'mudidi',
'zhoubian',
'jingwaiWiFi',
'pinzhiyiri',
'gengduo',
'jingdianmenpiao',
'zhoubianyou',
'guonieyou',
'chujingyou',
'dujiajiudian',
'feijipiao',
'youlun',
'huochepiao',
'xiaolvbaitiao',//白条
'authstr', //待审核
'cityList',//城市列表
'mine',
'dingzhiyou',
'qianzheng',
'zijiayou',
'zhutiyou'
])

	.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

	})
	.controller("myCtrl",['$scope',function($scope){
		$(".index footer a").on("click",function(){
			$(".index footer a img").each(function(index){
				this.src = "./images/gray"+index+".png";
			});
			$(this).children("p").addClass("font_color").end().siblings("a").children("p").removeClass("font_color");
			$(this).children("img").attr("src","./images/color"+$(this).index()+".png");
			localStorage.index = JSON.stringify($(this).index());
			localStorage.src = "images/color"+$(this).index()+".png";
		});
		if(localStorage.index != undefined){
			var index = localStorage.index,
				src = localStorage.src;
			$(".index footer a").eq(index).find("img").attr("src",src);
			$(".index footer a").eq(index).find("p").addClass("font_color");
		}
		else{
			$(".index footer a").eq(0).find("img").attr("src","images/color0.png");
			$(".index footer a").eq(0).find("p").addClass("font_color");
		}
	}])
	






































































