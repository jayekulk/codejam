sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("signupzcreate.controller.details", {
		onInit: function(){
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("details").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		
		signup : function() {
			this.oRouter.navTo("signup");
			
		}
	});
});