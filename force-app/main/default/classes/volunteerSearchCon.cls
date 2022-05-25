public WITH SHARING class volunteerSearchCon {
    @AuraEnabled
 public static List<Volunteer__c> returnVolunteerByCategory(String category)
 {
     return [select id,Name,Height__c,Weight__c,Mobile__c,Category__c,Email__c from Volunteer__c where Category__c =:category];
 }
}