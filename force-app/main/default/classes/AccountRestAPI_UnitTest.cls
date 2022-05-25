@isTest
public class AccountRestAPI_UnitTest {

//@isTest    
public static  testMethod void UnitTest_PostMethod()
{
    RestRequest request=new RestRequest();
    request.requestURI='/services/apexrest/v1/AccountManager/';
    request.httpMethod='POST';
    
    request.addHeader('application/JSON', 'application/JSON');
    request.addParameter('Accept', 'application/json');
	
	Account act= new Account();
    act.Name ='Tausif\'s account';
    String requestbody=JSON.serialize(act);
    request.requestBody=Blob.valueOf(requestbody);
        
    Test.startTest();
    Account acc=AccountRestAPI.doCreateAccount('Tausif\'s account');
    System.assertEquals('Tausif\'s account', acc.Name);
    System.assertNotEquals(null, acc.Id);
    Test.stopTest();
    
    
	    
}
    
}