var app = angular.module('app', [])

app.controller('ArrayController', function ($scope, arrayService) {
  $scope.array1 = arrayService.get()
  $scope.array2 = arrayService.get()
  $scope.arrayService = arrayService
  $scope.fix1 = function () {
    $scope.array1 = arrayService.get()
  }
})

app.service('arrayService', function ($interval, $http) {
  var r = []
  var i = 1
  var j = 0
  this.get = function () {
    return r
  }
  this.load = function () {
    $http.get("https://mknj.de/42.json").then(function (res) {
      i = res.data.i
      j = 0
      var wert
      r.length = 0
      res.data.value.forEach(wert => r.push(wert))
    }
    ).catch(console.log)
    return r
  }
  this.clearWrong = function () {
    r = []
  }
  this.clearRight = function () {
    r.length = 0
  }
  $interval(function () {
    var s = i + j
    j = i
    i = s
    r.push(i)
  }, 3000)
})