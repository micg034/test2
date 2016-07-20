app.controller('MainController', ['$scope', function($scope) {
  $scope.gegevens = [ 
	    /**
	    icon: 'profile.jpg', 
	    title: 'Persoonlijke Gegevens',
	    name: 'Naam', 
	    dateofbirth: '199949',
	    nationality: 'NL',
	    adress: 'prive',
	    email: 'mijn@mail.com',
	    phone: '0612345678'
	    
	    **/
	    
	    //Werkervaring
	    {
  	    name: 'Vrije Universiteit Amsterdam',
  	    course: 'Lifestyle Informatics',
  	    date: '12607 - heden',
  	    diploma: 'Nee',
	    },
	    {
  	    name: 'Vrije Universiteit Amsterdam',
  	    course: 'Gezondheid en Leven',
  	    date: '12456 - 12406',
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
