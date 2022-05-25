({
    doInit : function(component, event) {
        var action = component.get("c.findAllAccounts");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
// --- New Account Details Save ---//
 newAccount : function(component, event, helper) {
     document.getElementById('PreviewpopupForNewAccount').style.display = 'block'; 
 },
    newSaveAcc : function(component, event, helper) {
        /*var accName= component.get("v.newAccount");
        var accList=[];
        var newobJ={};
        newobJ.sObjectType= 'Account';
        newobJ.Name=accName.Name;
        newobJ.NumberOfEmployees=accName.NumberOfEmployees;
        newobJ.AccountNumber=accName.AccountNumber;
        newobJ.Phone=accName.Phone;
        newobJ.AnnualRevenue=accName.AnnualRevenue;
        accList.push(newobJ);
        component.set("v.accList",accList);
       
        component.set("v.accList",component.get("v.newAccount"));
        console.log('newobJ--->'+newobJ);
        var action = component.get("c.newAccounts");
     action.setParams({
         "accList":JSON.stringify(component.get("v.accList"));
     });
     $A.enqueueAction(action);
        */
/*        var accList=[];
         var newAc = component.get("v.newAccount");
      console.log("New Ac = " + newAc);
          accList.push(newAc);
         console.log("accList = " + JSON.stringify(accList));
        component.set("v.accList",accList);
        console.log('----> '+JSON.stringify(component.get("v.accList")));
*/
       var action = component.get("c.newAccounts");
     action.setParams({
            "accList" : component.get("v.newAccount")
        });
     $A.enqueueAction(action);
        document.getElementById('PreviewpopupForNewAccount').style.display = 'none';
        //--- Successfully Save Data shown here start ---//
        document.getElementById("save_notification").style.display = "block";
        myFunction();
        var myVar;
        function myFunction() {
            myVar = setTimeout(alertFunc, 5000);
        }
        function alertFunc() {
          document.getElementById("save_notification").style.display = "none";
        }
        //--- Successfully Save Data shown here end ---//
 },
    CancelNew : function(component, event, helper) {
        alert('Cancel');
     document.getElementById('PreviewpopupForNewAccount').style.display = 'none';
 },
// --- Preview or View Start --- //
    AccPreview : function(component, event, helper) {
     document.getElementById('Previewpopup').style.display = 'block';
        var evt = event.getSource().get("v.value");
        console.log('evt----> '+evt);   
        var acc_id= component.get("c.getAccountSingleData");
        acc_id.setParams({
            "acid" : evt
        });
        acc_id.setCallback(this,function(result){
        console.log('------->'+JSON.stringify(result.getReturnValue()));
        component.set("v.singleAcc", result.getReturnValue());
        });
        $A.enqueueAction(acc_id);

 },
// --- Save Data Start --- //
    saveAcc : function(component, event, helper) {
    var con = component.get("v.singleAcc");
    var evt = event.getSource();
    console.log('evt----> '+evt);
    var save_action = component.get("c.saveAccount");
   
    save_action.setParams({
     "accList": con
        });
    $A.enqueueAction(save_action);
    document.getElementById('Previewpopup').style.display = 'none';
     var action = component.get("c.findAllAccounts");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
           
        });
        $A.enqueueAction(action);
        document.getElementById("save_notification").style.display = "block";
        //--- Successfully Save Data shown here start ---//
        myFunction();
        var myVar;
        function myFunction() {
            myVar = setTimeout(alertFunc, 5000);
        }
        function alertFunc() {
          document.getElementById("save_notification").style.display = "none";
        }
        //--- Successfully Save Data shown here end ---//
 },
// --- Delete Data Start --- //
    AccDelete : function(component, event, helper){
        var deleteId = event.getSource().get("v.value");
        console.log('delete Event----> '+deleteId);   
        var delAcc = component.get("c.delAccountDetails");
        delAcc.setParams({
            "delAccount" : deleteId
        });
        $A.enqueueAction(delAcc);
        var action = component.get("c.findAllAccounts");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
        //--- Successfully Save Data shown here start ---//
        document.getElementById("delete_notification").style.display = "block";
        myFunction();
        var myVar;
        function myFunction() {
            myVar = setTimeout(alertFunc, 5000);
        }
        function alertFunc() {
          document.getElementById("delete_notification").style.display = "none";
        }
        //--- Successfully Save Data shown here end ---//
    },
// --- Cancel View Account Details Start --- //
  Cancel : function(component, event, helper) {
     document.getElementById('Previewpopup').style.display = 'none';
 },
    downloadCsv : function (c, e, h){
        h.downloadCsv_Helper(c, e, h);
    },
})