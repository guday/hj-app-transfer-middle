import {BaseView} from 'js/base.view.js';
import {services} from 'js/app.services.js';

class AboutController extends BaseView {
    constructor($scope) {
        services.inject(this, '$scope', 'cache');
        //scope变量初始化
        $scope.data = {}; //多级变量申明
        var scopeData = $scope.data = {}; //单个变量申明
        var singleVariable = 'singleVariable'; //多个变量申明， 包括函数
        var mutiVar1,
            mutiVar2 = null,
            mutiVar3 = "mutiVar3",
            mutiVar4 = 100; //函数直接申明
        //直接调用
        mutiFun(); //调用
        $scope.scopeFun();
        $scope.data.scopeFun2();
    }

    mutiFun(param1) {
        console.log(param1);
    }

    singleFun(param1) {
        console.log(param1);
    }

    scopeFun(param1) {
        console.log(param1);
    }

    scopeFun2() {
    }

    /**
     * 表达式
     */
    decFun(param1, param2) {
        console.log(param1, param2);
    }
}

export {AboutController};