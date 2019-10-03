var tmfControllers = angular.module('tmf.controllers',[ 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ngMessages']) 


tmfControllers.controller('ServicesMarketplaceController', ['$scope','$window','$log', 'ServiceCatalog', 'ServiceCategory', '$filter', 'APIEndPointService', '$routeParams',
 	function($scope, $window, $log, ServiceCatalog, ServiceCategory,$filter, APIEndPointService, $routeParams ) {


	var orderBy = $filter('orderBy');
	$scope.catalogs = ServiceCatalog.query(function() {
		    $scope.catalogs = orderBy($scope.catalogs, 'name', false);
		    $scope.selected_catalog = $scope.catalogs[0];
			console.log("$scope.selected_catalog.name = " + $scope.selected_catalog.name);
			//$scope.selected_category = $scope.selected_catalog.category[0];
			//loadServiceCategory( $scope.selected_catalog.category[0] )
	});
	
	
	 $scope.isNoneSelected=function(c) {
     	
    		return ( (!$scope.selected_category_ref) || ($scope.selected_category_ref === null) );
     };
     
     $scope.isActive=function(c) {

         return $scope.selected_category_ref === c;
     };

     $scope.loadServiceCategory=function(category){
			if (category.id){
				//console.log("Selected catid = "+ category.id);
				angular.forEach($scope.services, function(app, key) {
					//console.log("key= "+key+", app.id="+app.id+", app.name="+app.name);
					//app.name = app.name+'!!';
				});
				$scope.selected_category_ref = category;
				$scope.selected_category = ServiceCategory.get({id:$scope.selected_category_ref.id}, function() {
		 		    console.log( $scope.selected_category );
				    //$scope.apps = orderBy($scope.apps, 'name', false);
				});
				
			}else{
				$scope.selected_category_ref = null;
				$scope.selected_category  = null;
			}

			
			
			//$scope.apps = ExperimentMetadata.query();
			//$scope.services = ServiceCatalog.query({categoryid: category.id}, function() {
	 		    //console.log($scope.apps);
			    //$scope.apps = orderBy($scope.apps, 'name', false);
			//});
 };

}]);


tmfControllers.controller('ServicesCatalogController', ['$scope','$window','$log', 'ServiceCatalog', 'popupService', 'ngDialog',
                            	function($scope, $window, $log, ServiceCatalog, popupService, ngDialog) {
	

	$scope.catalogs = ServiceCatalog.query(function() {
		    $scope.catalogs = orderBy($scope.catalogs, 'name', false);
		    $scope.selected_catalog = $scope.catalogs[0];
	});
	
	    
}]);

tmfControllers.controller('ServicesCategoryController', ['$scope','$window','$log', 'ServiceCatalog', 'popupService', 'ngDialog',
                            	function($scope, $window, $log, ServiceCatalog, popupService, ngDialog) {

	$scope.catalogs = ServiceCatalog.query(function() {
		    $scope.catalogs = orderBy($scope.catalogs, 'name', false);
	});
	
	    
}]);

tmfControllers.controller('ServicesSpecsController', ['$scope','$window','$log', 'ServiceSpec', 'popupService', 'ngDialog',
                            	function($scope, $window, $log, ServiceSpec, popupService, ngDialog) {
	
	$scope.specs = ServiceSpec.query(function() {
		    $scope.specs= orderBy($scope.specs, 'name', false);
	});
	
	    
}]);


tmfControllers.controller('ServiceSpecAddController', ['$scope','$window','$log', 'ServiceSpec', 'popupService', 'ngDialog',
                            	function($scope, $window, $log, ServiceSpec, popupService, ngDialog) {
	
	$scope.specs = ServiceSpec.query(function() {
		    $scope.specs= orderBy($scope.specs, 'name', false);
	});
	
	    
}]);
