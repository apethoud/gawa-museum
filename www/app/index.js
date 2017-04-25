( function(angular) {
	angular
		.module("application", ["ngRoute"])
		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
					.when("/explore", {
						templateUrl  : 'www/app/pages/gallery-index/gallery-index.html',
						//controller   : "exerciseOneController",
						//controllerAs : "ctrl",
					})
					.otherwise({
						templateUrl  : 'www/app/pages/welcome/welcome.html',
						controller   : "welcomeController",
						controllerAs : "ctrl",
					});
		});
} (window.angular));
