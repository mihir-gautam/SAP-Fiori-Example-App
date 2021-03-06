jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	handleApprove : function (evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					// notify user
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					sap.m.MessageToast.show(successMsg+  "MVK"+this.getView().byId("/DESCRIPTION") );
					// TODO call proper service method and update model (not part of this session)
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
	},
	
	handleLineItemPress : function (evt) {

		
        var oContext = evt.getSource().getBindingContext();  
        console.log(oContext.getObject());  
        console.log(oContext.getProperty("STRAS"));  
	  sap.ui.getCore().setModel(oContext.getObject(),"LINEITEM");
//		alert(oContext.getProperty("STRAS"));
		var context = evt.getSource().getBindingContext();

		this.nav.to("LineItem", context);
	}
});