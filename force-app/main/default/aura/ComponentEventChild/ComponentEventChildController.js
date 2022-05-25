({
	dofire : function(component, event, helper) {
        console.log("--From Child Controller..");
        var cmpEvt=component.getEvent("grtEvt");
        cmpEvt.setParams({"greetMessage":component.get("v.msg")});
        cmpEvt.fire();
	},
    doHandle :function(component, event, helper) {
}
})