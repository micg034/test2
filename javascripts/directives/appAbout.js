app.directive('appAbout', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'appAbout.html' 
  }; 
});
