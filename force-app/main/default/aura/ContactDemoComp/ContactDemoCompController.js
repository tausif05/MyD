({
	myAction : function(component, event, helper) {
		
	},
    doInit : function(component, event, helper) {
    component.set('v.routeInput', {recordId: component.get('v.recordId')});
    },

    onClick : function(component, event, helper) {
           var navEvt = $A.get("e.force:navigateToSObject");
           navEvt.setParams({
             "recordId": component.get('v.recordId')
           });
           navEvt.fire();
   },
    
        setOutput : function(component, event, helper) {
    	var cmpMsg = component.find("msg");
    	$A.util.removeClass(cmpMsg, 'hide');
            
            var email=component.find("email").get("v.value");
            var oEmail = component.find("oEmail");
            oEmail.set("v.value",email);
            
            var objInfo=component.find("Info");
            objInfo.set("v.title","Hello Tausif");
            $A.util.removeClass(objInfo,'hide');
        }
    
})