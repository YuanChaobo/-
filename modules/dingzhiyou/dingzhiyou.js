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
        });
        $(".dzy_box header").on("click","span",function(){
            history.back();
        })
    }])
// 图片轮播
.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
              //初始化swiper
              var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay:2000,
            
                // 如果需要分页器
                pagination: '.swiper-pagination'
            })
        }
    }
  }
})
