/* global angular */
angular.module('todoApp', ['youtube-embed'])
  .controller('TodoListController', function ($scope, $http) {
    var socket = io();
    
    $scope.dataSearch = null
    $scope.state = 2
    $scope.myVideo = []
    $scope.detailVideo = []
    $scope.playerVars = {
      controls: 1,
      autoplay: 1
    }

    $scope.addVideo = function (key, img, title) {
      console.log(key,' : key ' ,img,' : img', title, ' title' );
      $scope.myVideo.push(key)
      $scope.detailVideo.push({
        'img': img,
        'title': title
      })
    }

    $scope.deleteVideo = function (index) {
      $scope.myVideo.splice(index, 1)
      $scope.detailVideo.splice(index, 1)
    }

    $scope.$on('youtube.player.ended', function ($event, player) {
      $scope.myVideo.shift()
      $scope.detailVideo.shift()
      player.playVideo()
    })

    $scope.search = function (keyword) {
      $scope.state = 2
      $http({
        method: 'GET',
        url: '/search?keyword=' + keyword
      }).then(function successCallback (response) {
        $scope.dataSearch = response.data
        console.log(response.data);
      }, function errorCallback (response) {
        console.log(response)
      })
    }
  })
