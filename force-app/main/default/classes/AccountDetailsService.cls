public with sharing class AccountDetailsService {
    public AccountDetailsService() {

    }

    
    @AuraEnabled(cacheable = true)
    public static List<Account> fetchAccountDetails(String recordId){
        List<Account> accountList = [SELECT Id, Name, Industry, Rating, AccountNumber, 
                                    (SELECT  Id, Name, Email, Phone From Contacts)
                                    FROM Account 
                                    WHERE Id=: recordId];
        return accountList;
    }
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        List<Account> accountList = [SELECT Id, Name, Industry, Rating,ParentId, Parent.Name, AccountNumber FROM Account LIMIT 3];
        return accountList;
    }
}