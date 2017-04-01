/**
        *
        */
import { BaseView } from 'js/base.view.js';
import { services } from 'js/app.services.js';

class AboutController extends BaseView {
  constructor($scope) {
    services.inject(this, '$scope', 'cache');
    //scope变量初始化
    this.data = {}; //commment
    //多级变量申明
    this.scopeData = this.data = {};this.scopeData2 = this.scopeData; //this comment
    this.test1 = "12"; //this comment1
    this.test1 = undefined; // this.test2 = function () {
    // }
    //变量赋值
    this.scopeData.ccc = () => {}, scopeData2 = 12; //单个变量申明
    this.singleVariable = 'singleVariable'; //多个变量申明， 包括函数
    this.mutiVar1 = undefined;this.mutiVar2 = null;this.mutiVar3 = "mutiVar3";this.mutiVar4 = this.scopeData;this.mutiVar5 = this.cache.getInfo();if (this.mutiVar1) {
      this.ifVar1 = 1;this.ifVar2 = this.mutiVar2;
    }this.objVar = { objVar1: "objVar1", objVar2: this.scopeData, objVar3: (param1, param2) => {
        param1 = this.mutiVar1;param2 = this.data;
      }, objVar4: (param1, param2) => {
        param1 = this.mutiVar1;param2 = this.data;return this.mutiVar2;
      }, get value() {
        return this.mutiVar2, this.mutiVar1, this.scopeData.data;
      }, set value(value) {
        this.objVar1 = value;
      } }; //函数直接申明
    //直接调用
    this.mutiFun(); //调用
    this.scopeFun(param1 => {
      console.log(param1);
    }); // this.scopeFun2();
    this.data.scopeFun2();
  }
}

export { AboutController };