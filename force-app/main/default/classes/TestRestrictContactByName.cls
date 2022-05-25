@isTest
public class TestRestrictContactByName {

    @isTest static void restrictContactName()
    {
        contact newConact=new Contact(Description='RestrictContact',LastName='INVALIDNAME');
        insert newConact;
        System.assertEquals('INVALIDNAME', newConact.LastName);
    }
}