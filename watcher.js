'use strict';

var factory = {};

var app=angular.module('Watcher', []);

app.factory('WatcherFactory', ['$rootScope', function($rootScope) {

	function sendEvent() {
		$rootScope.$broadcast('WatcherChanged');
	};
	var WatcherFactory = {};
	WatcherFactory.data = {value:false};
	WatcherFactory.setTrue = function() {
		console.log('setTrue called');
		WatcherFactory.data.value = true;
	};
	WatcherFactory.setFalse = function() {
		console.log('setFalse called');
		WatcherFactory.data.value = false;
	};
	WatcherFactory.$setTrue = function() {
		WatcherFactory.setTrue();
		sendEvent();
	};
	WatcherFactory.$setFalse = function() {
		WatcherFactory.setFalse();
		sendEvent();
	};
	factory = WatcherFactory;
	return WatcherFactory;
}]);

app.controller('WatcherController', ['$scope', 'WatcherFactory', function($scope, WatcherFactory) {
	this.factory = WatcherFactory;
	this.factoryData = WatcherFactory.data;

	$scope.$on('WatcherChanged', function(ev) {
		$scope.$apply();
	});
	this.setTrue = function() {
		console.log('Calling setTrue');
		this.factory.setTrue();
	};
	this.setFalse = function() {
		console.log('Calling setFalse');
		this.factory.setFalse();
	};
}]);
