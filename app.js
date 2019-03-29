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
  var array = []
  var i = 1
  this.get = function () {
    return array
  }
  this.load = function () {
    $http.get("https://mknj.de/42.json").then(function (res) {
      i = res.data.i
      array.length = 0
      res.data.value.forEach(wert => array.push(wert))
    }
    ).catch(console.log)
  }
  this.clearWrong = function () {
    array = []
  }
  this.clearRight = function () {
    array.length = 0
  }
  $interval(function () {
    i = i+1
    array.push(i)
  }, 1500)
})