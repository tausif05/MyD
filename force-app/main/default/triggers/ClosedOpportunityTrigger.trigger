trigger ClosedOpportunityTrigger on Opportunity (after insert, after update) {
      List<Task> taskList = new List<Task>();

      // Iterate through opportunities and store in sObject collection variable
      for (Opportunity opp : Trigger.new) {
            // Test against stage name with insert status or prior value
            if (opp.StageName == 'Closed Won' && (Trigger.isInsert ||
                                                Trigger.oldMap.get(opp.Id).StageName != 'Closed Won')){
                  // Create new task and store in list of tasks
                  taskList.add(new Task(Subject = 'Follow Up Test Task',
                                                                       WhatId = opp.Id));
            }
     }
     // Insert newly created tasks via DML call outside of for loop
     if (taskList.size() > 0) {
           insert taskList;
     }
}