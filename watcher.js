'use strict';

var app=angular.module('Watcher', []);

var factory = app.factory('WatcherFactory', function(){
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
	return WatcherFactory;
});

app.controller('WatcherController', ['WatcherFactory', function(WatcherFactory) {
	this.factory = WatcherFactory;
	this.factoryData = WatcherFactory.data;
	this.setTrue = function() {
		console.log('Calling setTrue');
		this.factory.setTrue();
	};
	this.setFalse = function() {
		console.log('Calling setFalse');
		this.factory.setFalse();
	};
}]);