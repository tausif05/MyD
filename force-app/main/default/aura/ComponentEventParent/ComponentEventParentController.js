({
	doHandle : function(component, event, helper) {
		console.log("child fired.....Parent Handled..");
        var ParamFromChild=event.getParam("greetMessage");
        console.log(ParamFromChild);
	}
})