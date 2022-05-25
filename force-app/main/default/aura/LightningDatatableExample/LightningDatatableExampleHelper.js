({
    fetchAccHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text', editable: true},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Website', fieldName: 'Website', type: 'url '}
            ]);
        var action = component.get("c.fetchAccounts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    SaveEdition :function(component, event, helper) {
       console.log("Tausif") ;
        var draftValues = event.getParam('draftValues');
        console.log('Tausif' + draftValues);
        var action = component.get("c.updateAccount");
        action.setParams({"acc" : draftValues});
        action.setCallback(this, function(response) {
            var state = response.getState();
            $A.get('e.force:refreshView').fire();
            //alert('Data Save Successfully !');
            
        });
        $A.enqueueAction(action);
    }
})