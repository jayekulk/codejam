jQuery.sap.includeScript("/webapp/src/src/cordova.js");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
var text;
	return Controller.extend("signupzcreate.controller.View1", {
	onInit: function(){
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View1").attachMatched(this._onRouteMatched, this);
		},
		materialData : function(text){
			var oModel = this.getOwnerComponent().getModel("defaultModel");
			var serviceUrl = "/materialDataSet(Materialid='"+text+"') ";
		
			
			var mParameters = {
		
				success: function(oData, response) {
				alert("success");
				},
				error: function(oError) {

				}
			};

			oModel.read(serviceUrl, mParameters);
				
		},
		
		_onRouteMatched: function() {},
  onScan: function () {
 var	self=this;
cordova.plugins.barcodeScanner.scan(this.scanSuccessCallback,this.scanErrorCallback);



		},
		  scanSuccessCallback: function(result) {
                alert(result.text);
                text=result.text;
                self.materialData(text);
            },

            scanErrorCallback: function(error) {
                navigator.notification.alert("Scanning failed: " + JSON.stringify(error));
            },
            
            
             onGetLocation:function(){
     	navigator.geolocation.getCurrentPosition(this.onSuccess2, this.onError2);
     },
     onSuccess2:function(position){
     	 alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
     },
     onError2:function(){
     	alert("Error");
     }
	});
	
	
});