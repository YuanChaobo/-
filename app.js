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
]);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

})
app.controller('myCtrl',['$scope',function($scope){

}])

