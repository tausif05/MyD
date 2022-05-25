({
	helperSearch : function(searchComponent) {
		console.log("--helperSearch Method");
        var categorycmp=searchComponent.find("selCategory");
        var category=categorycmp.get("v.value");
        //console.log(SelCategory);
        var searchAction=searchComponent.get("c.returnVolunteerByCategory");
        console.log("XXXX helperSearch Done");
        searchAction.setParam("Category",category);
        searchAction.setCallback(this,function(shahResp){
            console.log("Server Side Code Fired");
            searchComponent.set("v.volunteerList",shahResp.getReturnValue());
            console.log("Volunteer Data Fetched!");
            //$A.enqueueAction(searchAction);
        }
        );
         $A.enqueueAction(searchAction);
	}

})