angular.module('huochepiao',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('huochepiao',{
           url:'/huochepiao',
           templateUrl:'./modules/huochepiao/huochepiao.html',
           controller:'huochepiaoCtrl',
           css:'./modules/huochepiao/huochepiao.css'
        })
    })
    .controller('huochepiaoCtrl',['$scope',function($scope){
          
     }])