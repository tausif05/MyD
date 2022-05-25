({
    doInit : function(component, event, helper) {
        var mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
        handleUpdateExpense: function(component, event, helper) {
        var updatedExp = event.getParam("expense");
        helper.updateExpense(component, updatedExp);
    }

})