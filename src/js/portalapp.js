var app = angular.module('portalapp', [   'ngCookies', 'ngResource', 'ngRoute', 
                                         'trNgGrid', 'portalapp.controllers', 
                                         'tmf.controllers', 
                                         'portalwebapp.config', 
                                         'portalapp.services', 
                                         'tmf.services', 
                                         'ngDialog',
                                         'angular-loading-bar', 'ngAnimate' ]);


var portalversion = '20191002';

app.config(function($routeProvider, $locationProvider, $anchorScrollProvider, cfpLoadingBarProvider) {
	
    $anchorScrollProvider.disableAutoScrolling();
    
	$routeProvider.when('/login', {
		controller : 'LoginCtrl'
	}).when('/logout', {
		templateUrl : 'logout.html',
		controller : 'LogoutCtrl'
	}).when('/signup', {
		templateUrl : 'signup.html',
		controller : 'SignupCtrl'
	}).when('/users', {
		templateUrl : 'Users.html',
		controller : 'UserListController'
	}).when('/users_add', {
		templateUrl : 'UserAdd.html',
		controller : 'UserAddController'
	}).when('/edit_user/:id', {
		templateUrl : 'UserEdit.html',
		controller : 'UserEditController'
	}).when('/subscribed_resources', {
		templateUrl : 'SubscribedResources.html',
		controller : 'SubscribedResourceListController'
	}).when('/add_subscribed_resource', {
		templateUrl : 'SubscribedResourceAdd.html',
		controller : 'SubscribedResourceAddController'
	}).when('/edit_subscribed_resource/:id', {
		templateUrl : 'SubscribedResourceEdit.html',
		controller : 'SubscribedResourceEditController'
	}).when('/experiments', {
		templateUrl : 'Experiments.html',
		controller : 'ExperimentListController'
	}).when('/experiment_add', {
		templateUrl : 'ExperimentAdd.html',
		controller : 'ExperimentAddController'
	}).when('/experiment_upload', {
		templateUrl : 'ExperimentUpload.html',
		controller : 'ExperimentUploadController'
	}).when('/experiment_edit/:id', {
		templateUrl : 'ExperimentEdit.html',
		controller : 'ExperimentEditController'
	}).when('/experiment_view/:id', {
		templateUrl : 'ExperimentView.html',
		controller : 'ExperimentViewController'
	}).when('/categories', {
		templateUrl : 'Categories.html',
		controller : 'CategoriesListController'
	}).when('/add_category', {
		templateUrl : 'CategoryAdd.html',
		controller : 'CategoryAddController'
	}).when('/edit_category/:id', {
		templateUrl : 'CategoryEdit.html',
		controller : 'CategoryEditController'
	}).when('/experiments_marketplace', {
		templateUrl : 'ExperimentsMarketplace.html',
		controller : 'ExperimentsMarketplaceController'
	}).when('/vxfs', {
		templateUrl : 'VxFs.html',
		controller : 'VxFListController'
	}).when('/vxf_add', {
		templateUrl : 'VxFAdd.html',
		controller : 'VxFAddController'
	}).when('/vxf_upload', {
		templateUrl : 'VxFUpload.html',
		controller : 'VxFUploadController'
	}).when('/vxf_edit/:id', {
		templateUrl : 'VxFEdit.html',
		controller : 'VxFEditController'
	}).when('/vxf_view/:id', {
		templateUrl : 'VxFView.html',
		controller : 'VxFViewController'
	}).when('/vxf_marketplace', {
		templateUrl : 'VxFsMarketplace.html',
		controller : 'VxFsMarketplaceController'
	}).when('/fiware_instances', {
		templateUrl : 'FiwareInstances.html',
		controller : 'FiwareInstancesController'
	}).when('/deployments', {
		templateUrl : 'Deployments.html',
		controller : 'DeploymentsListController'
	}).when('/create_deployment', {
		templateUrl : 'DeploymentAdd.html',
		controller : 'DeploymentAddController'
	}).when('/deployments_admin', {
		templateUrl : 'DeploymentsAdmin.html',
		controller : 'DeploymentsAdminListController'
	}).when('/edit_deployment/:id', {
		templateUrl : 'DeploymentEdit.html',
		controller : 'DeploymentEditController'
	}).when('/portal_client', {
		templateUrl : 'PortalClient.html',
		controller : 'PortalClientViewController'
	}).when('/manoplatforms', {
		templateUrl : 'MANOplatforms.html',
		controller : 'MANOplatformsListController'
	}).when('/add_manoplatform', {
		templateUrl : 'MANOplatformAdd.html',
		controller : 'MANOplatformAddController'
	}).when('/edit_manoplatform/:id', {
		templateUrl : 'MANOplatformEdit.html',
		controller : 'MANOplatformEditController'
	}).when('/manoproviders', {
		templateUrl : 'MANOproviders.html',
		controller : 'MANOprovidersListController'
	}).when('/add_manoprovider', {
		templateUrl : 'MANOproviderAdd.html',
		controller : 'MANOproviderAddController'
	}).when('/edit_manoprovider/:id', {
		templateUrl : 'MANOproviderEdit.html',
		controller : 'MANOproviderEditController'
	}).when('/systeminfo', {
		templateUrl : 'SystemInfo.html',
		controller : 'SystemInfoController'
	}).when('/edit_systeminfo/:id', {
		templateUrl : 'SystemInfoEdit.html',
		controller : 'SystemInfoEditController'
	}).when('/registerconfirm', {
		templateUrl : 'RegisterConfig.html',
		controller : 'RegisterConfigController'
	}).when('/infrastructures', {
		templateUrl : 'Infrastructures.html',
		controller : 'InfrastructureListController'
	}).when('/infrastructures_add', {
		templateUrl : 'InfrastructureAdd.html',
		controller : 'InfrastructureAddController'
	}).when('/edit_infrastructure/:id', {
		templateUrl : 'InfrastructureEdit.html',
		controller : 'InfrastructureEditController'
	}).when('/vim_vfimage_add/:id', {
		templateUrl : 'InfrastructureAddImage.html',
		controller : 'InfrastructureAddImageController'
	}).when('/vfimages', {
		templateUrl : 'VFImages.html',
		controller : 'VFImageListController'
	}).when('/vfimage_upload', {
		templateUrl : 'VFImageUpload.html',
		controller : 'VFImageUploadController'
	}).when('/vfimage_edit/:id', {
		templateUrl : 'VFImageEdit.html',
		controller : 'VFImageEditController'
	}).when('/vfimage_view/:id', {
		templateUrl : 'VFImageView.html',
		controller : 'VFImageViewController'
	}).when('/services_marketplace', {
		templateUrl : 'ServicesMarketplace.html',
		controller : 'ServicesMarketplaceController'
	}).when('/service_catalogs', {
		templateUrl : 'ServicesCatalog.html',
		controller : 'ServicesCatalogController'
	}).when('/service_catalog_add', {
		templateUrl : 'ServicesCatalogAdd.html',
		controller : 'ServicesCatalogAddController'
	}).when('/service_catalog_edit/:id', {
		templateUrl : 'ServicesCatalogEdit.html',
		controller : 'ServicesCatalogEditController'
	}).when('/service_categories', {
		templateUrl : 'ServicesCategory.html',
		controller : 'ServicesCategoryController'
	}).when('/service_category_add', {
		templateUrl : 'ServicesCategoryAdd.html',
		controller : 'ServicesCategoryAddController'
	}).when('/service_category_edit/:id', {
		templateUrl : 'ServicesCategoryEdit.html',
		controller : 'ServicesCategoryEditController'
	}).when('/service_category_candidate_edit/:id', {
		templateUrl : 'ServicesCategoryServiceCandidatesEdit.html',
		controller : 'ServicesCategoryServiceCandidatesEditController'
	}).when('/service_specs', {
		templateUrl : 'ServicesSpecs.html',
		controller : 'ServicesSpecsController'
	}).when('/service_spec_add', {
		templateUrl : 'ServiceSpecAdd.html',
		controller : 'ServiceSpecAddController'
	}).when('/service_spec_edit/:id', {
		templateUrl : 'ServiceSpecEdit.html',
		controller : 'ServiceSpecEditController'
	}).when('/service_related_parties', {
		templateUrl : 'ServicesRelatedParties.html',
		controller : 'ServicesRelatedPartiesController'
	}).otherwise({
		redirectTo : '/'
	});
	
	
	cfpLoadingBarProvider.includeSpinner = true;
	cfpLoadingBarProvider.includeBar = true;
	
	
    
});


app.controller('mpMainCtrl', function($scope, PortalUser, $log, $location ) {
	$scope.mpversion = portalversion;
	$scope.location = $location;
});


app.run(

	function ( api) {
	  api.init();
	}
);

app.factory('api', function ($http, $cookies) {
	  return {
	      init: function (token) {
	          $http.defaults.headers.common['X-Access-Token'] = token || $cookies.token;
	      }
	  };
	});


app.controller('NavCtrl', [ '$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
	
	//$scope.user = $rootScope.portaluser;
	
	$scope.navClass = function(page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	};
	
    
} ]);

app.controller('LogoutCtrl', [ '$scope', '$location', 'authenticationSvc', '$log',function($scope, $location, authenticationSvc, $log) {
	
	$log.debug('In LogoutCtrl');
	authenticationSvc.logout().then(function(result) {
				$scope.userInfo = null;
				$location.path("/login");
			}, function(error) {
				$log.debug(error);
			});
   
    
    
} ]);

app.controller('portalCtrl', function($scope, PortalUser, $log) {
	$log.debug('inside portalCtrl controller');
	//$scope.portalusers = PortalUser.query();
});


app.controller("LoginCtrl", ["$scope", "$location", "$window", "authenticationSvc", "$log", "$rootScope", "$http", "APIEndPointService", "$interval", "$cookies", "$cookieStore", "$httpParamSerializer", "PortalUser",
                             function ($scope, $location, $window, authenticationSvc, $log, $rootScope, $http, APIEndPointService, $interval, $cookies, $cookieStore, $httpParamSerializer, PortalUser) {
	$log.debug('========== > inside LoginCtrl controller');
    $scope.userInfo = null;
    $scope.user = {
    		username : '',
    		password : ''
    	};
    
    $scope.returnurl = $location.absUrl();
    

    $rootScope.portalName = APIEndPointService.TITLE;
    $rootScope.portalwiki = APIEndPointService.WIKI;
    $rootScope.bugzilla = APIEndPointService.BUGZILLA;
    $rootScope.healthstatus = APIEndPointService.STATUS;
    $rootScope.weburl = APIEndPointService.WEBURL;
    	
  
    
  
    $scope.showOauth2OsapiPopup = function showPopup(){

		 var jsession = $cookieStore.get('JSESSIONID');
		 $log.debug('========== > COOKIES jsession= '+  jsession);
		 
		 popup = $window.open( APIEndPointService.APIOAUTHURL + '/protocol/openid-connect/auth?client_id=osapiWebClientId&response_type=code&redirect_uri=' + APIEndPointService.WEBURL + '/oauthresp.html'  ,  '_blank' ,  "width=1024,height=500");
		 
	    
	  }
	  
	  
	 $window.fromauthwindow = function( url_string ){
        		$log.debug('========== > inside LoginCtrl url_string ='+ url_string);
        		$log.debug('========== > inside LoginCtrl window.locatio ='+ window.location.href);
        		//$log.debug('========== > inside LoginCtrl window.opener ='+ window.opener.location.href);
            	var url = new URL( url_string );
            	var c = url.searchParams.get( 'code' );
            	var params = {grant_type:"authorization_code", redirect_uri: APIEndPointService.WEBURL+ '/oauthresp.html',  code: c }
        		$log.debug('========== > inside LoginCtrl params ='+ params);
        		
            	var req = {
		            method: 'POST',
		            url: APIEndPointService.APIOAUTHURL + "/protocol/openid-connect/token",
            		headers: {"Content-type": "application/x-www-form-urlencoded; charset=utf-8", "Authorization": "Basic b3NhcGlXZWJDbGllbnRJZDpzZWNyZXQ="},
		            data: $httpParamSerializer(params)
		        }
		        
		        $http(req).then(
		            function(data){
		                $http.defaults.headers.common.Authorization= 'Bearer ' + data.data.access_token;
		                var expireDate = new Date (new Date().getTime() + (1000 * data.data.expires_in));
		                $cookies.put("access_token", data.data.access_token, {'expires': expireDate});
		                $cookies.put("validity", data.data.expires_in);
		             
		                $rootScope.loggedinportaluser = PortalUser.myuser();
		                
		    			$rootScope.loggedIn = true;
		                var anuserInfo = {
				                    accesstoken: data.data.access_token,
				                    username: $scope.user.username,
				                    portalUser: $rootScope.loggedinportaluser,
				          };
		                $scope.userInfo = anuserInfo;
						$window.localStorage["userInfo"] = JSON.stringify( $scope.userInfo );
						
		        		$log.debug('========== > inside LoginCtrl controller $rootScope.portaluser ='+ $rootScope.loggedinportaluser);
		        		$log.debug('========== > inside LoginCtrl controller $rootScope.portaluser ='+ $rootScope.loggedinportaluser.username);
		                
		                $location.path("/experiments_marketplace");
		            },function(){
		                console.log("error");
		                window.location.href = "index.html#!/login";
		            }
		        );
		}
    
    
        
    
    
    
}]);



//configure cirrect date output

app.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    };
});




// The code below is heavily inspired by Witold Szczerba's plugin for AngularJS.
// // I have modified the code in order
// to reduce its complexity and make for easier explanation to novice JS
// developers. You can find his plugin here: // https://
// github.com/witoldsz/angular-http-auth

app.config(function($httpProvider) {
	
	$httpProvider.defaults.withCredentials = true; //good for CORS support
	$httpProvider.interceptors.push(function($rootScope, $location, $q, $log,$window) {

		$log.debug('========== > inside httpProvider.interceptors request!'  );
		
		return {
			'request' : function(request) { // if we're not logged-in to the
				// AngularJS app, redirect to // login
				// page
				$rootScope.loggedIn = $rootScope.loggedIn || $rootScope.username;
				$log.debug('========== > inside httpProvider.interceptors request = ' + request.url );
			
		        
		        if (!$rootScope.loggedIn && $window.localStorage["userInfo"]) {
		        	$log.debug('========== > inside httpProvider.interceptors $window.localStorage["userInfo"] = ' + $window.localStorage["userInfo"] );
		            
		            userInfo = JSON.parse($window.localStorage["userInfo"]);
		            if (userInfo){
		            	$rootScope.loggedIn = true;	
		            }
		        }
		        
				
				if (!$rootScope.loggedIn 
						&& $location.path() != '/' 
						&& $location.path() != '/login' 
							&& $location.path() != '/signup' 
							&& $location.path() != '/experiments_marketplace'
							&& $location.path() != '/services_marketplace'
							
							&& $location.path() != '/service_catalogs'
							&& $location.path() != '/service_catalog_add'
							&& $location.path() != '/service_categories'
							&& $location.path() != '/service_category_add'
							&& $location.path() != '/service_specs'
							&& $location.path() != '/service_spec_add' 
							
							&& $location.path() != '/service_related_parties'
							
							&& ($location.path().indexOf("service_spec_edit") <=0)
							&& ($location.path().indexOf("service_catalog_edit") <=0)
							&& ($location.path().indexOf("service_category_edit") <=0)
							&& ($location.path().indexOf("service_category_candidate_edit") <=0)
							
							&& $location.path() != '/vxf_marketplace'
							&& ($location.path().indexOf("experiment_view") <=0) 
							&& ($location.path().indexOf("registerconfirm") <=0) 							
							&& ($location.path().indexOf("fiwarepopup") <=0) 
							&& ($location.path().indexOf("vxf_view") <=0) 
							) {
					$log.debug('========== > $rootScope.loggedIn IS FALSE = ' + $rootScope.loggedIn );
					$location.path('/login');
				}
				return request;
			},
			'responseError' : function(rejection) { // if we're not logged-in to
													// the web service,
				//$log.debug('========== > responseError  ' + rejection );
				//$log.debug('========== > responseError  rejection.headers = ' + rejection.headers  );
				$log.debug('========== > responseError  rejection.status = ' + rejection.status  );
				
				// redirect to login page
				if (rejection.status === 401 && $location.path() != '/login') {
					$rootScope.loggedIn = false;
		            $window.localStorage.removeItem("userInfo");
					$location.path('/login');
				}
				
				if (rejection.status === 500 ) {

				}
				
				
				return $q.reject(rejection);
			},
			'response' : function( response ) { 
				// the web service,
				//$log.debug('========== > response  ' + response );
				$log.debug('========== > response  response.status = ' + response.status  );
				//$log.debug('========== > response  response.data = ' + response.data );
				if (response.status === 401 && $location.path() != '/login') {
					$log.debug('========== > response  will force to LOGIN page'  );
					$rootScope.loggedIn = false;
		            $window.localStorage.removeItem("userInfo");
					$location.path('/login');
				}
				return response;
				}
		};
	});
});




app.factory("authenticationSvc", ["$http","$q","$window","$rootScope", "$log", "APIEndPointService", "$cookies", "$location", "PortalUser",
                                  function ($http, $q, $window,$rootScope, $log, APIEndPointService, $cookies, $location, PortalUser) {
    var userInfo;

	$log.debug('========== > authenticationSvc');
	
    //function login(userName, password) {
    //    var deferred = $q.defer();
    //    $log.debug('========== > authenticationSvc Login');
    //    $http.post(APIEndPointService.APIURL+"/osapi/sessions/", { username: userName, password: password })
    //        .then(function (result) {
    //            userInfo = {
    //                accesstoken: "NOTIMPLEMENTED",//result.data.access_token,
    //                username: result.data.username,
    //                portalUser: result.data.portalUser,
    //            };
    //            $window.localStorage["userInfo"] = JSON.stringify(userInfo);
    //            deferred.resolve(userInfo);
    //        }, function (error) {
    //            deferred.reject(error);
    //        });
	//
    //    return deferred.promise;
    // }

    function logout() {
    	$log.debug('========== > authenticationSvc logout' );
        var deferred = $q.defer();

		$http({
            method: "DELETE",
            url: APIEndPointService.APIOAUTHURL + '/oauth/token',
            headers: {
                //"access_token": "NOT_IMPLEMENTED"//userInfo.accessToken
            }
        }).then(function (result) {
        	$log.debug('========== > revoke token success' );
        }, function (error) {
        	$log.debug('========== > revoke token error' );
        });
        
        $http({
            method: "GET",
            url: APIEndPointService.APIURL+ '/osapi/sessions/logout',
            headers: {
                //"access_token": "NOT_IMPLEMENTED"//userInfo.accessToken
            }
        }).then(function (result) {
        	$log.debug('========== > sessions logout success' );
        }, function (error) {
        	$log.debug('========== > sessions logout error' );
        });
        

        $http.defaults.headers.common.Authorization= '';
        $cookies.remove("access_token");
        userInfo = null;
		$rootScope.loggedIn = false;
		$window.localStorage.removeItem("userInfo");
		$location.path('/login')
        return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
		$log.debug('========== > authenticationSvc inside init');
		$log.debug('========== > authenticationSvc inside $cookies.get("access_token") = ' + $cookies.get("access_token") );
		
        if ($window.localStorage["userInfo"]) {
			$log.debug('========== > authenticationSvc inside localStorage');
			
            userInfo = JSON.parse($window.localStorage["userInfo"]);			
			
            if (userInfo){
				$log.debug('========== > authenticationSvc inside userInfo');
            	$rootScope.loggedIn = true;
		        $http.defaults.headers.common.Authorization= 'Bearer ' + $cookies.get("access_token");
		        $rootScope.loggedinportaluser = PortalUser.myuser();
            	
            	$log.debug('========== > $rootScope.loggedIn set to TRUE because userInfo ='+userInfo);
            	$log.debug('========== > $rootScope.loggedIn set to TRUE because userInfo.portalUser ='+userInfo.portalUser);
            	if (userInfo.portalUser){
            		$log.debug('========== > $rootScope.loggedIn set to TRUE because user $rootScope.portaluser.name ='+$rootScope.loggedinportaluser.name);
            		$log.debug('========== > $rootScope.loggedIn set to TRUE because user $rootScope.portaluser.id ='+$rootScope.loggedinportaluser.id);
            	}
            }
        }
    }
    init();
    return {
        //login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };
}]);






