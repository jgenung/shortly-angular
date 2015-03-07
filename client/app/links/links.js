angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      console.log("links.js!!!!!: ", data.data);
      $scope.data = data.data;
    });
  };

  $scope.getLinks();

});
