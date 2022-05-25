trigger ExampleTrigger on Contact (after insert,after delete) {
 if (Trigger.isInsert) {
        Integer recordCount = Trigger.New.size();
        // Call a utility method from another class
        EmailManager.sendMail('tausif.jawed05@gmail.com', 'Hello Shezan', 
                    recordCount + ' contact(s) were inserted.');
    }
    else if (Trigger.isDelete) {
       EmailManager.sendMail('tausif.jawed05@gmail.com', 'Hello Shezan-Zaina', 
                     ' contact(s) were Deleted.');
    }
}