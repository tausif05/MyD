({
	doClick : function(component, event, helper) {
        console.log("dddd");
		var txtval=component.get("Pat.v.val1");
        console.log(txtval);
        component.set("Pat.v.valDisplayTxt",txtval);
	}
})