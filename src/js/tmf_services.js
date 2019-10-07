var tmfServices = angular.module('tmf.services',[]);

// APITMFURL: "http://localhost:13082/tmf-api/serviceCatalogManagement/v4",

//Service Catalog
tmfServices.factory('ServiceCatalog', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APITMFURL+"/serviceCatalog/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PATCH', // this method issues a PUT request
			url: APIEndPointService.APITMFURL+"/serviceCatalog/:id"
      	
	      }
	});
});


//Service Category
tmfServices.factory('ServiceCategory', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APITMFURL+"/serviceCategory/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PATCH', // this method issues a PUT request
			url: APIEndPointService.APITMFURL+"/serviceCategory/:id"
      	
	      }
	});
});

//Service Specification
tmfServices.factory('ServiceSpec', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APITMFURL+"/serviceSpecification/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PATCH', // this method issues a PUT request
			url: APIEndPointService.APITMFURL+"/serviceSpecification/:id"
      	
	      }
	});
});

