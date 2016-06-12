import angular from 'angular'
angular.module('olympics', [])
.controller('SportsController', function() {
  this.sports = ["Weightlifting", "Cycling"];
})
