({
	dosubmit : function(component, event, helper) {
		console.log("---Execution Started----");
        var vName=component.get("v.volunteerName");
        if(vName==null)
        {
            alert("Blank volunteer Name !");
            return;
        }
             
        var vHeight=component.get("v.volunteerHeight");
        var vWeight=component.get("v.volunteerWeight");
        var vMobile=component.get("v.volunteerMobile");
        var vEmail=component.get("v.volunteerEmail");
        
        var serverActionVar=component.get("c.createVolunteer");
        serverActionVar.setParams({"volName":vName,"volHeight":vHeight,"volWeight" :vWeight,"volMobile":vMobile,"volEmail":vEmail});
        serverActionVar.setCallback(this,function(callBackResp){
            component.set("v.volID",callBackResp.getReturnValue());
            console.log("Server Side Call Executed Successfully:Volunteer Created !");
        });
        $A.enqueueAction(serverActionVar);
    
	}
})