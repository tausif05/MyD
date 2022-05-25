public class SalesforceCollections {
public static void CreateListCollection()
{
    //List<String> colors=new List<String>();
    List<String> colors=new List<String>{'Red','White','Blue'};
    //colors.add('Red');
    //colors.add('White');
    //colors.add('Black');
    System.debug(colors);
    System.debug(colors.get(1));
    colors.set(1,'Green');
    System.debug(colors.get(1));
    System.debug('Count :' + colors.size());
    colors.clear();
    System.debug('Count :' + colors.size());
 }



	
	public static void PopulateContact() {
        List<contact> contactList = new List<contact>();
		for(integer i=0; i<100 ; i++ ) {
			contact cont = new contact(lastname = 'contact' + i);
			contactList .add(cont);
		}
		//insert contactList ;
		System.debug('Contact Collections : ' + contactList);
	}
    public static void populateAccountMap()
    {
        Map<Id,Account> accountIdMap  =new Map<Id,Account>();
        Account acc1=new Account(name='account1',Industry='banking');
        Account acc2=new Account(name='account2',Industry='Agriculture');
        Account acc3=new Account(name='account3',Industry='banking');
            accountIdMap.put(acc1.id,acc1);
        	accountIdMap.put(acc2.id,acc2);
        	accountIdMap.put(acc3.id,acc3);
        System.debug(accountIdMap);
        System.debug('Count : ' + accountIdMap.size());
        System.debug('Keys : ' + accountIdMap.keySet());
    }
    
}