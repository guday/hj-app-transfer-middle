/**
 *
 * Created by allanxu on 15/5/24.
 *
 * 绑定信息设置
 *
 *
 */

app.controller('AboutController', ['$scope', 'cache', function ($scope, cache) {

    //scope变量初始化
    this = {}; //commment
    //多级变量申明
    var scopeData = this = {};
    scopeData = null;
    //单个变量申明
    var singleVariable = 'singleVariable';
    //多个变量申明， 包括函数
    var mutiVar1,
        mutiVar2 = null,
        mutiVar3 = "mutiVar3",
        mutiFun = function (param1) {
            console.log(param1);
        },
        mutiVar4 = 100;

    //函数直接申明
    var singleFun = function (param1) {
        console.log(param1);
        //对象
        var obj = {
            objVar1: "objVar1",
            objFun1(param1, param2) {
                console.log(param1);
            },
            objFun2: function (param1, param2) {
                console.log(param1, param2);
                mutiVar1 = 12;
                this.newValue = mutiVar3;
                this["newValue"] = mutiVar3;
                this[mutiVar3] = mutiVar3;
                this[mutiVar3.mutiVar3Value] = mutiVar3;
                this.newValue = "newValue";
                var unKnownValue = unKnown;
                var unKnownValue1 = this.unKnown;
            },
            objFun3: (p1, p2) => {
            },
            get value() {
            },
            set value(value) {
            }
        };
    };

    //scope函数初始化
    this.scopeFun = function (param1) {
        console.log(param1);
    };

    //scope多级初始化函数
    this.qq.scopeFun2 = function () {

        var subFun2 = _subFun2;
        var subFun1 = function (param1, param2) {
        };
        subFun2(subFun1().value);
        subFun1(mutiVar3.mutiVar3Value);
        function _subFun2(param1, param2) {
        }

        var fnMutiValue = mutiVar3.mutiVar3Value;
    };

    /**
     * 表达式
     */
    function decFun(param1, param2) {
        console.log(param1, param2);
    }

    //直接调用
    mutiFun();
    //调用
    this.scopeFun(function (param1) {
        console.log(param1);
    });
    // this.scopeFun2();
    this.scopeFun2();
}]);