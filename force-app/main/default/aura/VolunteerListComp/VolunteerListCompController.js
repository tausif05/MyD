({
	onSelectChange : function(searchComp, searchEvent, searchHelper) {
		console.log("---Execution Started---");
        searchHelper.helperSearch(searchComp);
        console.log("---I am back in Client-Side Controller---");
	}	,
    doWaiting :function(searchComp, searchEvent, searchHelper) {
        searchComp.set("v.isSpinner","true");
    console.log("--Do Waiting before server execution---");
},
    doneWaiting:function(searchComp, searchEvent, searchHelper) {
        searchComp.set("v.isSpinner","false");
    console.log("--Done Waiting after server execution---");
        }
})