public class TestApexClass {
public void createAccount()   
{
    try
    {
Account a =new Account(name='acc1236')   ;
insert a;
Contact c=new Contact(LastName='Vincent');
c.Accountid=a.id;
insert c;    
c=[select Account.Name from Contact where id=: c.id];
System.debug('Acc name before Update :'+ c.Account.Name );//log before upate 
c.Account.Name='acc1234567';
update c.Account;    
system.debug('updates Acc name :' + c.Account.Name + ' Updated Sucessfully');//debug log
    }
    catch(Exception e)
    {
       System.debug(e.getMessage()); 
        
    }
    finally
    {
        System.debug('Final Block Execution');
    }
}
}