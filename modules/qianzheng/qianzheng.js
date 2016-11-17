// 数据的加载
angular.module('qianzheng',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('qianzheng',{
           url:'/qianzheng',
           templateUrl:'./modules/qianzheng/qianzheng.html',
           controller:'QianzhengCtrl',
           css:'./modules/qianzheng/qianzheng.css'
        })
    })
    .controller('QianzhengCtrl',['$scope','$http',function($scope,$http){
          $http.get('./JSON/qianzhenginfo.json').success(function(data){
              $scope.arr = data.datas[3].infos;
              $scope.arr2 = data.datas[5].infos;
          })
          // 点击向左按钮返回上一页
          $('header span').on('click',function(){
              history.back();
              console.log(1);
        })
        //点击向上按钮回到顶部
        $('#qz_fixed').click(function(){
            $("body").animate({scrollTop:0},200);
            return false;
        });
        $(window).scroll(function(){
            var obj=$('#qz_fixed');
            if(obj.offset().top>600){
                obj.show();
            }else{
                obj.hide();
            }
        });
     }]);

$(function(){

});
