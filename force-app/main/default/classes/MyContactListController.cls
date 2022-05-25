public class MyContactListController {

 @AuraEnabled
 Public static List<Contact> getContacts(id recordId)
 {
     return [Select Id, FirstName, LastName, Email, Phone From Contact Where AccountId = :recordId];
 }
}