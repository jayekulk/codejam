sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("signupzcreate.controller.barcode", {
		onInit: function(){
			//Git hub demo
			var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("signupzcreate.model", "/Data.json"));
			this.getView().setModel(oModel);
		/*	var map =this.getView().byId("vbi");
			map.zoomToRegions(72.9922055, 4);*/

			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("barcode").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		signup : function() {
			this.oRouter.navTo("signup");
			
		},
		barcodeSearch : function() {
			var addbutton = this.getView().byId("addbutton").getValue();
			this.oRouter.navTo("checkout");
		},
		onClickSpot : function(){
			this.oRouter.navTo("checkout");	
		}
		
	});
});
