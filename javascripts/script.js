var app = angular.module('cvApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
    
    // Pages
    .when("/about", {templateUrl: "templates/about.html", controller: "PageCtrl"})
    .when("/opleidingen", {templateUrl: "templates/opleidingen.html", controller: "PageCtrl"})
    .when("/cursussen", {templateUrl: "templates/cursussen.html", controller: "PageCtrl"})
    .when("/ervaring", {templateUrl: "templates/ervaring.html", controller: "PageCtrl"})
    .when("/vaardigheden", {templateUrl: "templates/vaardigheden.html", controller: "PageCtrl"})
    .when("/interesses", {templateUrl: "templates/interesses.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "templates/contact.html", controller: "PageCtrl"})
    
    // else 404
    .otherwise("/404", {templateUrl: "templates/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
});
