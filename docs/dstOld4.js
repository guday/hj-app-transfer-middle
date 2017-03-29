app.controller('AboutController', ['$scope', 'cache', function ($scope, cache) {
  $scope.data = {};
  var scopeData = $scope.data = {};
  var singleVariable = 'singleVariable';

  var mutiVar1,
      mutiVar2 = null,
      mutiVar3 = "mutiVar3",
      mutiFun = function (param1) {
    console.log(param1);
  },
      mutiVar4 = 100;

  var singleFun = function (param1) {
    console.log(param1);
    var obj = {
      objVar1: "objVar1",

      objFun1(param1, param2) {
        console.log(param1);
      },

      objFun2: function (param1, param2) {
        console.log(param1, param2);
        mutiVar1 = 12;
        $scope.data.newValue = mutiVar3;
        $scope.data["newValue"] = mutiVar3;
        $scope.data[mutiVar3] = mutiVar3;
        $scope.data.newValue = "newValue";
      },
      objFun3: (p1, p2) => {},

      get value() {},

      set value(value) {}

    };
  };

  $scope.scopeFun = function (param1) {
    console.log(param1);
  };

  $scope.data.qq.scopeFun2 = function () {
    var subFun2 = _subFun2;

    var subFun1 = function (param1, param2) {};

    subFun2();
    subFun1();

    function _subFun2(param1, param2) {}
  };

  function decFun(param1, param2) {
    console.log(param1, param2);
  }

  mutiFun();
  $scope.scopeFun(function (param1) {
    console.log(param1);
  });
  $scope.data.scopeFun2();
}]);