public class ContactListController {
@AuraEnabled
Public static list<contact> GetContacts()
{
    return [select id,name,Phone,email,Prequalified__c from contact];
}
}