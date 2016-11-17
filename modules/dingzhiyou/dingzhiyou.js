angular.module('dingzhiyou',['me-lazyload'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('dingzhiyou',{
            url:'/dingzhiyou',
            templateUrl:'./modules/dingzhiyou/dingzhiyou.html',
            controller:'DingzhiCtrl',
            css:'./modules/dingzhiyou/dingzhiyou.css'
        })
    })
    .controller('DingzhiCtrl',['$scope','$http',function($scope,$http){
        $http.get('./JSON/dingzhi_info.json').success(function(data){
            $scope.arr = data.datas[3].infos;
        });
        $http.get('./JSON/dingzhi_banner.json').success(function(data){
            $scope.arr2 = data.datas[0].infos;
        })
    }])
