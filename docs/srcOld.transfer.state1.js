/**
 *
 * Created by allanxu on 15/5/24.
 *
 * 绑定信息设置
 *
 *
 */

app.controller('AboutController', ['$scope', 'cache', function ($scope, cache) {

    gVar1 = "12";
    gFun1 = () => {
    };
    //scope变量初始化
    $scope.data = {}; //commment
    //多级变量申明
    var scopeData = $scope.data = {};
    var scopeData2 = scopeData;
    //this comment

    this.test1 = "12"; //this comment1
    this.test1 = undefined;
    // this.test2 = function () {

    // }
    //变量赋值

    scopeData.ccc = () => {
    };

    //scopeData2comment
    scopeData2 = 12;
    //单个变量申明

    var singleVariable = 'singleVariable';
    //多个变量申明， 包括函数

    var mutiVar1;

    //mutiVar1 Comments
    var mutiVar2 = null;
    var mutiVar3 = "mutiVar3";

    var mutiFun = param1 => {
        console.log(param1);
    };

    var mutiVar4 = scopeData;
    var mutiVar5 = cache.getInfo();

    if (mutiVar1) {
        var ifVar1 = 1;
        var ifVar2 = mutiVar2;
    }

    var objVar = {
        objVar1: "objVar1",
        objVar2: scopeData,
        //objVar3 comment
        objVar3: (param1, param2) => {
            param1 = mutiVar1;
            param2 = $scope.data;
        },
        //obj4 comment
        objVar4: (param1, param2) => {
            param1 = mutiVar1;
            param2 = $scope.data;

            return mutiVar2;
        },

        get value() {
            return mutiVar2, mutiVar1, scopeData.data;
        },
        set value(value) {
            this.objVar1 = value;
        }
    };

    //函数直接申明

    var singleFun = param1 => {
        console.log(param1);
        //对象
        var obj = {
            objVar1: "objVar1",
            objFun1: (param1, param2) => {
                console.log(param1);
            },

            objFun2: (param1, param2) => {
                console.log(param1, param2);
                mutiVar1 = 12;
                $scope.data.newValue = mutiVar3;
                $scope.data["newValue"] = scopeData2;
                $scope.data[mutiVar3] = mutiVar3;
                $scope.data[scopeData.ccc(obj)] = mutiVar3;
                $scope.data[singleFun(obj)] = mutiVar3;
                $scope.data[mutiVar3.mutiVar3Value] = mutiVar3;
                $scope.data[$scope.funScopeVar] = mutiVar3;
                $scope.data.newValue = "newValue";
                var unKnownValue = unKnown;
                var unKnownValue1 = $scope.unKnown;
                $scope.data.qq.scopeFun2();
                $scope.scopeFun();
                decFun();
            },
            objFun3: (p1, p2) => {
            },
            get value() {
            },
            set value(value) {
            }
        };
    };

    var xx = (a, b) => {
    };

    //scope函数初始化


    $scope.scopeFun = param1 => {
        console.log(param1);
    };

    //scope多级初始化函数
    $scope.data.qq.scopeFun2 = () => {

        var subFun2 = _subFun2;
        var subFun1 = (param1, param2) => {
        };
        subFun2(subFun1().value);
        subFun1(mutiVar3.mutiVar3Value, $scope.data);
        function _subFun2(param1, param2) {
        }

        var fnMutiValue = mutiVar3.mutiVar3Value;
        $scope.funScopeVar = "12";
        decFun();
        scopeData.funScopeVar1 = "1";
    };

    /**
     * 表达式
     */

    var decFun = (param1, param2) => {
        console.log(param1, param2);
    };

    //直接调用


    mutiFun();
    //调用
    $scope.scopeFun(param1 => {
        console.log(param1);
    });
    // this.scopeFun2();
    $scope.data.scopeFun2();
}]);