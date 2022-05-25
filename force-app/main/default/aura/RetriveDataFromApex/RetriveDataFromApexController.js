({
	getString : function(component, event, helper) {
		var action=component.get("c.getStringArray");
        var type=typeof(component.get("v.color"));
        //alert(type);
        action.setCallback(this,function(response)
        {
		var state=response.getState();
        if(state=="SUCCESS")                  
        {
            var stringItems=response.getReturnValue();
            component.set("v.favoriteColors",stringItems);
            //alert(stringItems);
        }
        });
        $A.enqueueAction(action);
       
	},
   getNumbers: function(component, event, helper) {
                var numbers = [];
                for (var i = 0; i < 20; i++) {
                numbers.push({
                value: i
                });
                }
                component.set("v.numbers", numbers);
     			component.set("v.edit","true");
                },
    
    parentAction : function(component, event, helper) {
		alert("I am parent componet.");
	}
    ,
    hideEdit:function(component,event,helper)
    {
        component.set("v.edit","false");
    }
    ,
    updateParentAttr: function(cmp) {
	cmp.set("v.parentAttr", "updated parent attribute");
},
    checkBrowser: function(component) {
var device = $A.get("$Browser.formFactor");
        var countryname=$A.get("$Locale.country");
        alert(countryname);
alert("You are using a " + device);
}
})