({
    navigateToRecord : function (component, event, helper) {
        var selectedItem = event.currentTarget;
        var recordId = selectedItem.dataset.record;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
        });
        navEvt.fire();
    },
    
    recordUpdated : function(component, event, helper) {
        var changeType = event.getParams().changeType;
        if (changeType === "LOADED" || changeType === "CHANGED") {
            helper.loadSimilarProperties(component);
        }
    },
    
    recordChangeHandler : function(component, event) {
        var id = event.getParam("recordId");
        component.set("v.recordId", id);
        var service = component.find("service");
        service.reloadRecord();
    },
    doInit : function(component, event, helper) {
        var spinner = component.find("spinner");
        $A.util.removeClass(spinner, "slds-hide");
        var action = component.get("c.getSimilarProperties");
        action.setParams({
            recordId: component.get("v.recordId"),
            beds: component.get("v.property.fields.Beds__c.value"),
            price: component.get("v.property.fields.Price__c.value"),
            searchCriteria: component.get("v.searchCriteria"),
            priceRange: parseInt(component.get("v.priceRange"), 10)
        });
        action.setCallback(this, function(response){
            var similarProperties = response.getReturnValue();
            component.set("v.similarProperties", similarProperties);
            console.log("f: ", component.get("v.similarProperties"));
            $A.util.addClass(spinner, "slds-hide");
        });
        $A.enqueueAction(action);
    }


 })