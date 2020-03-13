var appConfig = angular.module('portalwebapp.config',[]);


appConfig.factory('APIEndPointService', function() {
	  return {	      
		  TITLE: "THE PORTAL",
		  WIKI: "http://wiki.5ginfire.eu",
		  BUGZILLA: "https://portal.5ginfire.eu/bugzilla/",
		  STATUS: "http://status.5ginfire.eu/",
		  //APIURL: "/portal/"
		  //APIURL: "https://portal.5ginfire.eu/5ginfireportal/", //good to test CROSS ORIGIN scenarios. use with http://127.0.0.1/mp
		  //WEBURL: "https://portal.5ginfire.eu/",
		  //APIOAUTHURL: "http://localhost:13081/osapi-oauth-server",
		  //APITMFURL: "http://localhost:13082/tmf-api/serviceCatalogManagement/v4",
		  //APIURL: "http://localhost:13000/5ginfireportal/" //good to test CROSS ORIGIN scenarios. use with http://127.0.0.1/mp
		  //APIURL: "http://83.212.106.218:8080/5ginfireportal/"
		  
		  APIURL: "http://localhost:13000", //good to test CROSS ORIGIN scenarios. use with http://127.0.0.1/mp
		  APIOAUTHURL: "http://localhost:13081/osapi-oauth-server", //good to test CROSS ORIGIN scenarios. use with http://127.0.0.1/mp
		  APITMFURL: "http://localhost:13082/tmf-api/serviceCatalogManagement/v4",
		  WEBURL: "http://localhost:13000/osapi/testweb"		  
	  };
});
