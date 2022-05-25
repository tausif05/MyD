({
	doInit : function(component, event, helper) {
        component.set('v.mycolumns',[
            {label:'SNo.',fieldName:'sno',type:'number'},
            {label:'Name Of Source',fieldName:'source',type:'text'},
            {label:'Amount',fieldName:'amount',type:'number'}
        ]);
     component.set("v.incomes",[
         {sno:1,source:'Regular Job',amount:10000},
         {sno:2,source:'Part Time Job',amount:2000}
        ]);
	},
         addIncome:function(component,event,helper){
         	var incomes=component.get("v.incomes");
         var newIncome ={
         sno:incomes.length+1,
         source:component.find("source").get("v.value"),
         amount:parseFloat(component.find("amount").get("v.value"))
                  }
         incomes.push(newIncome);
         if(newIncome.source!=null && newIncome.amount!=null)
         {
         component.set("v.incomes",incomes);
         component.find("source").set("v.value",'');
         component.find("amount").set("v.value",'');
         }
         },
         handleRegisterComponentEvent:function(component, event, helper) {
           alert("Event handler in source component that fired the event.");
         },
         toggleIncomeForm:function(component,event,helper)
         {
         	var incomeform=component.find("incomeForm");
         	if(incomeform!=null){
         		$A.util.toggleClass(incomeform,"hide");
         }
         },
         firetotalIncomeEvent:function(component,event,helper){
         //debugger;
         	var income=component.get('v.incomes');
         var totalIncome=0;
         for(var ctr=0;ctr<=income.length;ctr++){
         	totalIncome +=parseFloat(income[ctr].amount);
         }
                var totalIncomeComponentEvent=component.getEvent("totalIncomeComponentEvent");
        totalIncomeComponentEvent.setParams({
            totalIncome:totalIncome
        }) ;
         var selectedRows = event.getParam('selectedRows');
         alert(selectedRows);
        totalIncomeComponentEvent.fire();
         }
})