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


tmfControllers.controller('ServicesCatalogController', ['$scope','$window','$log', 'ServiceCatalog', 'popupService', 'ngDialog', '$filter',
                            	function($scope, $window, $log, ServiceCatalog, popupService, ngDialog,  $filter) {
	

	var orderBy = $filter('orderBy');
	$scope.catalogs = ServiceCatalog.query(function() {
		    $scope.catalogs = orderBy($scope.catalogs, 'name', false);
		    $scope.selected_catalog = $scope.catalogs[0];
	});
	
	    
}]);


tmfControllers.controller('ServicesCatalogAddController', ['$scope','$window','$log', 'ServiceCatalog', 'popupService', 'ngDialog', '$filter', '$location',
                            	function($scope, $window, $log, ServiceCatalog, popupService, ngDialog,  $filter, $location) {
	


	
	$scope.catalog=new ServiceCatalog();

	    $scope.addCatalog=function(){
	        $scope.catalog.$save(function(){
	        	console.log("catalog added. ID = " + $scope.catalog.id);
				$location.path("/service_catalogs");
	        });
	    }
	
	    
}]);

tmfControllers.controller('ServicesCatalogEditController', ['$scope', '$route', '$routeParams', '$location', 'ServiceCatalog', 'ServiceCategory', '$anchorScroll',
        function( $scope, $route, $routeParams, $location, ServiceCatalog, ServiceCategory, $anchorScroll){


	
    $scope.updateCatalog=function(){
		delete $scope.catalog.id;
		delete $scope.catalog.href;
		delete $scope.catalog.lastUpdate;
		
        $scope.catalog.$update({id:$routeParams.id}, function(){
			$location.path("/service_catalogs");
        });
    };

    $scope.loadCatalog=function(){
    	 $scope.categories = ServiceCategory.query(function() {
    		    $scope.categories = orderBy($scope.categories, 'name', false);
    	    });
    	     	
        $scope.catalog=ServiceCatalog.get({id:$routeParams.id}, function() {
        	
        });
        
	    console.log("catalog loaded. ID = " + $scope.catalog.id);
    };
    
    $scope.addCategory=function(){
    		$scope.catalog.category.push({'name': $scope.selectedCategoryToAdd.name, 'id':$scope.selectedCategoryToAdd.id})
			
	};
		
	$scope.deleteCategory = function(index) {	
			$scope.catalog.category.splice(index, 1);
	}
   
    
	console.log("catalog load");
    $scope.loadCatalog();
}]);



tmfControllers.controller('ServicesCategoryController', ['$scope','$window','$log', 'ServiceCategory', 'popupService', 'ngDialog', '$filter',
                            	function($scope, $window, $log, ServiceCategory, popupService, ngDialog,  $filter) {

	var orderBy = $filter('orderBy');
	$scope.categories = ServiceCategory.query(function() {
		    $scope.categories = orderBy($scope.categories, 'name', false);
	});
	
	    
}]);


tmfControllers.controller('ServicesCategoryAddController', ['$scope','$window','$log', 'ServiceCategory', 'popupService', 'ngDialog', '$filter', '$location',
                            	function($scope, $window, $log, ServiceCategory, popupService, ngDialog,  $filter, $location) {
	


	
	$scope.category=new ServiceCategory();

	    $scope.addCategory=function(){
	        $scope.category.$save(function(){
	        	console.log("category added. ID = " + $scope.category.id);
				$location.path("/service_categories");
	        });
	    }
	
	    
}]);


tmfControllers.controller('ServicesCategoryEditController', ['$scope', '$route', '$routeParams', '$location', 'ServiceCategory', '$anchorScroll',
        function( $scope, $route, $routeParams, $location, ServiceCategory, $anchorScroll){


	
    $scope.updateCategory=function(){
		delete $scope.category.id;
		delete $scope.category.href;
		delete $scope.category.lastUpdate;
		
        $scope.category.$update({id:$routeParams.id}, function(){
			$location.path("/service_categories");
        });
    };

    $scope.loadCategory=function(){
        $scope.category=ServiceCategory.get({id:$routeParams.id});
	    console.log("category loaded. ID = " + $scope.category.id);
    };

	    console.log("category load");
    $scope.loadCategory();
}]);



tmfControllers.controller('ServicesSpecsController', ['$scope','$window','$log', 'ServiceSpec', 'popupService', 'ngDialog', '$filter',
                            	function($scope, $window, $log, ServiceSpec, popupService, ngDialog,  $filter) {

	var orderBy = $filter('orderBy');
	$scope.specs = ServiceSpec.query(function() {
		    $scope.specs= orderBy($scope.specs, 'name', false);
	});
	
	    
}]);


tmfControllers.controller('ServiceSpecAddController', ['$scope','$window','$log', 'ServiceSpec', 'popupService', 'ngDialog', '$location',
                            	function($scope, $window, $log, ServiceSpec, popupService, ngDialog, $location) {
	
	 $scope.spec=new ServiceSpec();

	    $scope.addSpec=function(){
	        $scope.spec.$save(function(){
	        	console.log("Service Spec added. ID = " + $scope.spec.id);
				$location.path("/service_spec_edit/" + $scope.spec.id);
	        });
	    }
	
	    
}]);


tmfControllers.controller('ServiceSpecEditController', ['$scope','$window','$log', 'ServiceSpec', 'popupService', 'ngDialog', '$location', '$routeParams',
                            	function($scope, $window, $log, ServiceSpec, popupService, ngDialog, $location, $routeParams) {
	
	 $scope.updateSpec=function(){
	        $scope.spec.$update(function(){
				$location.path("/service_specs");
	        });
	    };

	    function addZero(i) {
		  if (i < 10) {
		    i = "0" + i;
		  }
		  return "" + i;
		}	
            
		$scope.minutes=[];
		for (var i=0;i<60;i++) $scope.minutes.push(addZero(i));
		
		var toUTCDate = function(date){
		    var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
		    return _utc;
		  };
			
	    $scope.loadSpec=function(){
	        $scope.spec=ServiceSpec.get({id:$routeParams.id},
	        	function() {
	        		console.log("$scope.spec.validFor.startDateTime  = " + $scope.spec.validFor.startDateTime );
        			//$scope.spec.validFor.startDateTime = toUTCDate( new Date( $scope.spec.validFor.startDateTime ) );
        			$scope.spec.validFor.startDateTime =  new Date( $scope.spec.validFor.startDateTime ) ;
		        	console.log("$scope.spec.validFor.startDateTime  = " + $scope.spec.validFor.startDateTime );		        	
		        	console.log("$scope.spec.validFor.startDateTime  = " + toUTCDate ( $scope.spec.validFor.startDateTime ) );
		        	
	        		$scope.spec.validFor.startDateTime.startReqHour = addZero($scope.spec.validFor.startDateTime.getHours());
	        		$scope.spec.validFor.startDateTime.startReqMinute = addZero($scope.spec.validFor.startDateTime.getMinutes());

        			$scope.spec.validFor.endDateTime =  new Date( $scope.spec.validFor.endDateTime ) ;
	        		$scope.spec.validFor.endDateTime.startReqHour = addZero($scope.spec.validFor.endDateTime.getHours());
	        		$scope.spec.validFor.endDateTime.startReqMinute = addZero($scope.spec.validFor.endDateTime.getMinutes());
	        		
	        	});
	    };

	    $scope.loadSpec();
	
	    
}]);