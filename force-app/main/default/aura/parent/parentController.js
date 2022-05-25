({
	abc : function(component, event, helper) {
		alert("I am parent componet.");
	},
    updateChildAttr: function(cmp) {
	cmp.set("v.childAttr", "updated child attribute");
}
})