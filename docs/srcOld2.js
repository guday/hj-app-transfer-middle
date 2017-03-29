/**
 *
 * Created by allanxu on 15/5/24.
 *
 * 绑定信息设置
 *
 *
 */

app.controller('AboutController', ['$scope', 'cache',
    function ($scope, cache) {

        //scope变量初始化
        $scope.data = {};
        //多级变量申明
        var scopeData = $scope.data = {};
        //单个变量申明
        var singleVariable = 'singleVariable';
        //多个变量申明， 包括函数
        var mutiVar1,
            mutiVar2 = null,
            mutiVar3 = "mutiVar3",
            mutiFun = function (param1) {
                console.log(param1)
            },
            mutiVar4 = 100;

        //对象
        var obj = {
            objVar1: "objVar1",
            objFun1(param1){
                console.log(param1)
            },
            objFun2:function (param1, param2) {
                console.log(param1, param2)
            }
        }

        //函数直接申明
        var singleFun = function (param1) {
            console.log(param1)

        }

        //scope函数初始化
        $scope.scopeFun = function (param1) {
            console.log(param1)
        };

        //scope多级初始化函数
        $scope.data.scopeFun2 = function () {

        };

        /**
         * 表达式
         */
        function decFun(param1, param2) {
            console.log(param1, param2)
        }

        //直接调用
        mutiFun();
        //调用
        $scope.scopeFun(function (param1) {
            console.log(param1)
        });
        $scope.data.scopeFun2();



    }]);

