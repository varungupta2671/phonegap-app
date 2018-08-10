angular.module('PhonegapAppReffer', [
  'ngRoute',
  'mobile-angular-ui',
  'PhonegapAppReffer.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});