public class DatabaseManipulationClass {

    public Static Void UpdateVal()
    {
        Lead l=[select Company ,LastName from lead where lastName ='Rahul'];
        l.Company='ABCD';
        try
        {
            update l;
        }
        catch(DmlException  e)
        {
            System.debug(e.getCause());
        }
    }
    public Static void UpdateInsertAccount()
    {
        Account[] acctList=[SELECT Id, Name, BillingCity FROM Account where billingCity='San Francisco'];
        for(Account acct: acctList)
        {
            acct.billingCity='San Franciscos';
        }
        Account newAccount=new Account(Name = 'Ramco', BillingCity = 'Hyderabad');
        acctList.add(newAccount);
        try
        {
            upsert acctList;
        }
        catch(DmlException e)
        {
            System.debug(e.getCause());
        }
    }
     public Static void DeleteAccount(String colVals)
     { 
         string [] strColsVal=colVals.split('#');
         string mySQL='SELECT Id, Name, BillingCity FROM Account where ' + strColsVal[0] + ' =\''+ strColsVal[1] + '\'';
         //System.debug(mySQL);
         Account acct=Database.query(mySQL);
         try
         {
             Delete acct;
             
         }
         catch(DmlException e)
         {
             System.debug(e.getCause());
         }
     }
    public static void UndeleteAccount(String colVals)
    {
         string [] strColsVal=colVals.split('#');
         string mySQL='SELECT Id, Name, BillingCity FROM Account where ' + strColsVal[0] + ' =\''+ strColsVal[1] + '\' ALL ROWS';
         Account acct=Database.query(mySQL);
        try
        {
         undelete acct;   
        }
        catch(DmlException e)
        {
            System.debug(e.getCause());
        }
    }
    public Static void MergeAccount()
    {
        List<Account> accList = new List<Account>{new Account(Name='Myacc3',BillingCity='Kolkata'),new Account(Name='MyAcc4',BillingCity='Kolkata2')};
		insert accList;

		Account masterAcct = [SELECT Id, Name FROM Account WHERE Name = 'Myacc3' LIMIT 1];
		Account mergeAcct = [SELECT Id, Name FROM Account WHERE Name = 'MyAcc4' LIMIT 1];
        
		try {
			merge masterAcct mergeAcct;
			} catch (DmlException e) {
               e.getCause();
			}
    }
}