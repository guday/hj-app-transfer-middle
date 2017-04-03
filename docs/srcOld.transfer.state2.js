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
  gFun1 = () => {};
  //scope变量初始化
  this.data = {}; //commment
  //多级变量申明
  this.scopeData = this.data = {};
  this.scopeData2 = this.scopeData;
  //this comment

  this.test1 = "12"; //this comment1
  this.test1 = undefined;
  // this.test2 = function () {

  // }
  //变量赋值

  this.scopeDataccc = () => {};

  //scopeData2comment


  scopeData2 = 12;
  //单个变量申明

  this.singleVariable = 'singleVariable';
  //多个变量申明， 包括函数

  this.mutiVar1 = undefined;

  //mutiVar1 Comments

  this.mutiVar2 = null;
  this.mutiVar3 = "mutiVar3";

  this.mutiFun = param1 => {
    console.log(param1);
  };

  this.mutiVar4 = this.scopeData;
  this.mutiVar5 = this.cache.getInfo();


  if (this.mutiVar1) {
    this.ifVar1 = 1;
    this.ifVar2 = this.mutiVar2;
  }

  this.objVar = {
    objVar1: "objVar1",
    objVar2: this.scopeData,
    //objVar3 comment
    objVar3: (param1, param2) => {
      param1 = this.mutiVar1;
      param2 = this.data;
    },
    //obj4 comment
    objVar4: (param1, param2) => {
      param1 = this.mutiVar1;
      param2 = this.data;
      return this.mutiVar2;
    },

    get value() {
      return this.mutiVar2, this.mutiVar1, this.scopeData.data;
    },
    set value(value) {
      this.objVar1 = value;
    }
  };

  //函数直接申明

  this.singleFun = param1 => {
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
        this.data.newValue = this.mutiVar3;
        this.data["newValue"] = this.scopeData2;
        this.data[this.mutiVar3] = this.mutiVar3;
        this.data[this.scopeDataccc(obj)] = this.mutiVar3;
        this.data[this.singleFun(obj)] = this.mutiVar3;
        this.data[this.mutiVar3.mutiVar3Value] = this.mutiVar3;
        this.data[this.funScopeVar] = this.mutiVar3;
        this.data.newValue = "newValue";
        var unKnownValue = unKnown;
        var unKnownValue1 = this.unKnown;
        this.$scopedataqqscopeFun2();
        this.$scopescopeFun();
        this.decFun();
      },
      objFun3: (p1, p2) => {},
      get value() {},
      set value(value) {}
    };
  };

  this.xx = (a, b) => {};

  //scope函数初始化


  this.$scopescopeFun = param1 => {
    console.log(param1);
  };

  //scope多级初始化函数


  this.$scopedataqqscopeFun2 = () => {

    var subFun2 = _subFun2;
    var subFun1 = (param1, param2) => {};
    subFun2(subFun1().value);
    subFun1(this.mutiVar3.mutiVar3Value, this.data);
    function _subFun2(param1, param2) {}

    var fnMutiValue = this.mutiVar3.mutiVar3Value;
    this.funScopeVar = "12";
    this.decFun();
    this.scopeData.funScopeVar1 = "1";
  };

  /**
   * 表达式
   */

  this.decFun = (param1, param2) => {
    console.log(param1, param2);
  };

  //直接调用


  this.mutiFun();
  //调用
  this.$scopescopeFun(param1 => {
    console.log(param1);
  });
  // this.scopeFun2();
  this.data.scopeFun2();
}]);