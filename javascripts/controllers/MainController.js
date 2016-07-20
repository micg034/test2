app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Persoonlijke Gegevens';
  $scope.gegevens = {
      icon: 'profile.jpg', 
	    title: 'Persoonlijke Gegevens',
	    name: 'Naam', 
	    dateofbirth: new Date('1995', '09', '03'),
	    nationality: 'NL',
	    adress: 'prive',
	    email: 'mijn@mail.com',
	    phone: '0612345678'  
	    };
	 $scope.ervaring = [
	   {
  	    name: 'Vrije Universiteit Amsterdam',
  	    course: 'Lifestyle Informatics',
  	    date: '2015 - heden',
  	    diploma: 'Nee',
	    },
	    {
  	    name: 'Vrije Universiteit Amsterdam',
  	    course: 'Gezondheid en Leven',
  	    date: '2014 - 2015',
  	    diploma: 'Nee',
	    },
	    {
	      name: 'Bertrand Russell College',
	      course: 'VWO Natuur en Gezondheid',
  	    date: '109342 - 12356',
  	    diploma: 'Ja',
	    }
	   ];
	 
}]);
