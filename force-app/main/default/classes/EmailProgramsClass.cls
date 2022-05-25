public class EmailProgramsClass {
public Static Void SendSingleEmail()
{
    Messaging.SingleEmailMessage singleEmail=new Messaging.SingleEmailMessage();
    String [] SendingTo=new String[]{'tausifj.ansari@tcs.com'};
    singleEmail.setToAddresses(SendingTo);
    
    String [] sendingToBccAdd=new String []{'tausif.jawed05@gmail.com'};
    singleEmail.setBccAddresses(sendingToBccAdd) ;  
    
    String [] sendingToccAdd=new String []{'mishrarav@gmail.com'};
    singleEmail.setCcAddresses(sendingToccAdd);
    
    singleEmail.setSubject('Sending Single Email message ');
    
    singleEmail.setPlainTextBody('Hello!!!!!!!!!!This is a test email to test single email message program');
    
    Messaging.sendEmail(new Messaging.SingleEmailMessage[] {singleEmail});
    
        
}	
}