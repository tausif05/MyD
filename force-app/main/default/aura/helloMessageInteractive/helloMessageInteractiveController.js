({
	handleClick : function(component, event, helper) {
		var btnClicked=event.getSource();
        var BtnMessage=btnClicked.get("v.label");
        component.set("v.message",BtnMessage);
	}
})