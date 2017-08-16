var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/main.html",
        controller : "mainCtrl"
    })
    .when("/mainPage", {
        templateUrl : "./views/main.html",
        controller : "mainCtrl"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


app.controller('indexCtrl',function($scope){
	var toDate = new Date(2011, 11, 01, 13, 13);
	var fromDate = new Date(2011, 12, 02, 14, 14);
	$scope.labels = {
			"label_appName":"Sidenavigation Sample",
			"label_timeTo":toDate,
			"label_timeFrm":fromDate,
			"label_unavailMsg":"in GIT",
			"label_timeZone":"UTC",
			"label_email":"abc.xyz@mail.com",
	};
	$scope.navAccess = function(){
		$("#navContainer").removeClass('navContainer');
		$("#navContainer").removeClass('slideOut');
		$("#navContainer").addClass('slideIn');
		$("#container").addClass("opac"); 
	}
	$scope.navCollapse = function(){
		if($('#navContainer').hasClass('slideIn')){
			$("#container").removeClass("opac");	
			$("#navContainer").removeClass('slideIn');
			$("#navContainer").addClass('slideOut');
		}
	}
});

app.controller('mainCtrl',function($scope){
	$scope.rows = "hello mesg";
    $scope.download = function(){
        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world.');
        doc.save('Test.pdf');
    }
});

