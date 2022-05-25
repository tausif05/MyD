({
    clickCreate: function(component, event, helper) {
         console.log("Clicked");
        var validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
    ,    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        console.log("Init Load Started");
        var action = component.get("c.getExpenses");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
                console.log("Init Load Succeeded");
            }
            else {
                console.log("Failed with state: " + state);
                console.log("Init Load Not Succeeded");
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
        console.log("Init Load Called Backed");
    },
})