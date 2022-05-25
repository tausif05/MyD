public with sharing class ContactListController2 {
    @AuraEnabled
    public static List<Account> findAllAccounts() {
        return [SELECT Id, Name, NumberOfEmployees FROM Account LIMIT 50];
    }
    @AuraEnabled
    public static void newAccounts(Account accList){
        system.debug('accList------->'+accList);
        insert accList;
    }
    @AuraEnabled
    public static List<Account> getAccountSingleData(string acid) { //string acc_id
        system.debug('Account Name------'+acid);
        return [SELECT id, name, NumberOfEmployees,AccountNumber,Phone,AnnualRevenue FROM Account WHERE ID =: acid];
    }
    @AuraEnabled
    public static void saveAccount(Account acc){
        system.debug('acc----->'+acc);
         insert acc;
    }
    @AuraEnabled
    public static void delAccountDetails(string delAccount) {
        system.debug('Delete Account id ------'+delAccount);
        Account ac = [select id from Account where Id =: delAccount];
        delete ac;
    }
}