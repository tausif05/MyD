({
   loadContacts : function(cmp) {
        // Load all contact data
        var action = cmp.get("c.getContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                cmp.set("v.contacts", response.getReturnValue());
                //cmp.set("v.contactList", response.getReturnValue());
                this.updateTotal(cmp);
            }

            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if (state === 'SUCCESS'){
                toastEvent.setParams({
                    'title': 'Success!',
                    'message': ' Your contacts have been loaded successfully.'
                });
            }
            else {
                toastEvent.setParams({
                        "title": "Error!",
                        "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
         $A.enqueueAction(action);
    },
     
    updateTotal: function(cmp) {
      var contacts = cmp.get("v.contacts");
        contacts.forEach(function(record){
record.linkName = '/'+record.Id;
});
       cmp.set("v.contacts", contacts);
      cmp.set("v.totalContacts", contacts.length);
        if(contacts.length>0)
        { cmp.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'url',
typeAttributes: {label: { fieldName: 'Name' },value:{fieldName: 'Name'}, target: '_blank'}
},
            {label: 'Email', fieldName: 'Email',  type: 'url', typeAttributes: { target: '_self'}},
            {label: 'Phone', fieldName: 'Phone', type: 'Phone'}
            
        ]);

            cmp.set("v.hasData", true);
         }
    }
})